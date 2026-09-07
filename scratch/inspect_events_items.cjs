const fs = require('fs');
const path = require('path');

const items = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'data', 'eventsItems.json'), 'utf8'));

console.log('Total items in eventsItems.json:', items.length);

items.forEach((item, idx) => {
  const p = path.join(process.cwd(), 'public', item.src);
  if (!fs.existsSync(p)) {
    console.log(idx, 'MISSING FILE:', item.src);
    return;
  }
  const buffer = fs.readFileSync(p);
  let offset = 2;
  let width = 0;
  let height = 0;
  while (offset < buffer.length) {
    const marker = buffer.readUInt16BE(offset);
    offset += 2;
    if (marker === 0xFFC0 || marker === 0xFFC1 || marker === 0xFFC2) {
      height = buffer.readUInt16BE(offset + 3);
      width = buffer.readUInt16BE(offset + 5);
      break;
    }
    if (offset >= buffer.length - 2) break;
    const length = buffer.readUInt16BE(offset);
    offset += length;
  }

  const isPortrait = height > width;
  const isSquare = Math.abs(width - height) < 50;
  const realOrientation = isPortrait ? 'portrait' : (isSquare ? 'square' : 'landscape');
  const realRatio = Number((width / height).toFixed(3));

  if (realOrientation !== item.orientation || Math.abs(realRatio - item.aspectRatio) > 0.05) {
    console.log(`MISMATCH at index ${idx} (${item.id}): stored [${item.orientation}, ${item.aspectRatio}] vs REAL [${realOrientation}, ${realRatio}] file: ${item.src} (${width}x${height})`);
  } else {
    console.log(`${idx}: ${item.id} -> ${realOrientation} ${width}x${height} ratio:${realRatio}`);
  }
});
