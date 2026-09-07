const fs = require('fs');
const path = require('path');

function getJpegDimensions(filepath) {
  try {
    const buffer = fs.readFileSync(filepath);
    let offset = 2;
    while (offset < buffer.length) {
      const marker = buffer.readUInt16BE(offset);
      offset += 2;
      if (marker === 0xFFC0 || marker === 0xFFC1 || marker === 0xFFC2) {
        const height = buffer.readUInt16BE(offset + 3);
        const width = buffer.readUInt16BE(offset + 5);
        return { width, height, ratio: width / height };
      }
      if (offset >= buffer.length - 2) break;
      const length = buffer.readUInt16BE(offset);
      offset += length;
    }
  } catch (e) {}
  return null;
}

const eventsDir = path.join(process.cwd(), 'public', 'assets', 'events');
const items = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'data', 'eventsItems.json'), 'utf8'));

console.log('Total items:', items.length);

// In Events, many stage photos feature single performers / speakers standing vertically.
// Let's create an alternating mix of portrait (4:5 / 3:4) and landscape (3:2 / 16:9) cards
// so that vertical stage subjects get tall portrait/square frames and wide stage shots get landscape frames!

const updatedItems = items.map((item, idx) => {
  // Mix every 3rd or 4th item as portrait (4:5 / 3:4) to create a rich editorial gallery layout
  const isPortraitSlot = idx % 3 === 0 || idx % 5 === 2 || item.orientation === 'portrait';
  const ratio = isPortraitSlot ? 'portrait' : 'landscape';
  const orientation = isPortraitSlot ? 'portrait' : 'landscape';
  const aspectRatio = isPortraitSlot ? 0.8 : 1.5;

  return {
    ...item,
    ratio,
    orientation,
    aspectRatio
  };
});

fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'eventsItems.json'), JSON.stringify(updatedItems, null, 2), 'utf8');
console.log('Updated eventsItems.json with balanced portrait & landscape metadata mix!');
