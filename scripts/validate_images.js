const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

function getJpegDimensions(buffer) {
  let offset = 2;
  while (offset < buffer.length) {
    const marker = buffer.readUInt16BE(offset);
    offset += 2;
    if (marker === 0xFFC0 || marker === 0xFFC2) {
      const height = buffer.readUInt16BE(offset + 3);
      const width = buffer.readUInt16BE(offset + 5);
      return { width, height };
    } else {
      const length = buffer.readUInt16BE(offset);
      offset += length;
    }
  }
  return null;
}

function getPngDimensions(buffer) {
  if (buffer.length >= 24 && buffer.slice(12, 16).toString('ascii') === 'IHDR') {
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    return { width, height };
  }
  return null;
}

function validateFile(filePath, relPath) {
  const buf = fs.readFileSync(filePath);
  const head = buf.slice(0, 100).toString('utf8');
  
  // 1. Git LFS Check
  if (head.startsWith('version https://git-lfs.github.com/spec/v1')) {
    return { status: 'FAIL_LFS', reason: 'Git LFS pointer file detected instead of binary image' };
  }

  // 2. Extension Check
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif', '.mp4'].includes(ext)) {
    return { status: 'FAIL_EXT', reason: `Unsupported file extension: ${ext}` };
  }

  // 3. Binary Dimension Check
  let dimensions = null;
  if (ext === '.jpg' || ext === '.jpeg') {
    dimensions = getJpegDimensions(buf);
  } else if (ext === '.png') {
    dimensions = getPngDimensions(buf);
  }

  if (ext !== '.mp4' && ext !== '.webp' && ext !== '.avif' && !dimensions) {
    return { status: 'FAIL_BINARY', reason: 'Corrupted or invalid image binary header' };
  }

  return {
    status: 'OK',
    ext,
    size: buf.length,
    dimensions: dimensions ? `${dimensions.width}x${dimensions.height}` : 'valid'
  };
}

console.log('====================================================');
console.log('       SUMANTH PHOTOGRAPHY IMAGE PIPELINE AUDIT      ');
console.log('====================================================\n');

// A. Audit Public Folder Assets
let publicSuccess = 0;
let publicFailures = 0;

function scanPublic(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      scanPublic(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif', '.mp4'].includes(ext)) {
        const rel = path.relative(publicDir, fullPath).replace(/\\/g, '/');
        const res = validateFile(fullPath, rel);
        if (res.status === 'OK') {
          publicSuccess++;
        } else {
          publicFailures++;
          console.error(`✗ [PUBLIC FAIL] /${rel} => ${res.reason}`);
        }
      }
    }
  });
}

scanPublic(publicDir);
console.log(`Public Media Assets Checked: ${publicSuccess + publicFailures}`);
console.log(`✓ Valid Binary Assets: ${publicSuccess}`);
console.log(`✗ Failed / LFS Pointer Assets: ${publicFailures}\n`);

// B. Audit Data JSON references & Rooted paths
const dataDir = path.join(projectRoot, 'src/data');
const jsonFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

let jsonRefsChecked = 0;
let jsonRefsFailed = 0;

jsonFiles.forEach(file => {
  const jsonPath = path.join(dataDir, file);
  let raw = fs.readFileSync(jsonPath, 'utf8');
  if (raw.charCodeAt(0) === 0xFEFF) {
    console.warn(`[WARNING] UTF-8 BOM detected in ${file}. Cleaning...`);
    raw = raw.slice(1);
    fs.writeFileSync(jsonPath, raw);
  }
  const items = JSON.parse(raw);
  items.forEach((item, idx) => {
    jsonRefsChecked++;
    const src = item.src;
    if (!src || !src.startsWith('/')) {
      jsonRefsFailed++;
      console.error(`✗ [JSON PATH FAIL] ${file} item #${idx} src "${src}" lacks leading '/'`);
      return;
    }
    const diskPath = path.join(publicDir, src.substring(1));
    if (!fs.existsSync(diskPath)) {
      jsonRefsFailed++;
      console.error(`✗ [JSON MISSING FAIL] ${file} item #${idx} src "${src}" does not exist on disk`);
      return;
    }
    // Case sensitivity check on disk
    const dir = path.dirname(diskPath);
    const base = path.basename(diskPath);
    if (fs.existsSync(dir)) {
      const dirContents = fs.readdirSync(dir);
      if (!dirContents.includes(base)) {
        jsonRefsFailed++;
        console.error(`✗ [JSON CASE FAIL] ${file} item #${idx} src "${src}" case mismatch on disk`);
      }
    }
  });
});

console.log(`Gallery JSON Item References Checked: ${jsonRefsChecked}`);
console.log(`✓ Valid Rooted References: ${jsonRefsChecked - jsonRefsFailed}`);
console.log(`✗ Failed References: ${jsonRefsFailed}\n`);

if (publicFailures > 0 || jsonRefsFailed > 0) {
  console.error('====================================================');
  console.error('  RESULT: AUDIT FAILED — BROKEN PRODUCTION IMAGES  ');
  console.error('====================================================');
  process.exit(1);
} else {
  console.log('====================================================');
  console.log('  RESULT: AUDIT PASSED — 0 BROKEN PRODUCTION IMAGES  ');
  console.log('====================================================');
}
