const fs = require('fs');
const path = require('path');

const eventsDir = path.join(process.cwd(), 'public', 'assets', 'events');
const files = fs.readdirSync(eventsDir);

console.log('Events files count:', files.length);

// Let's inspect file sizes and dimensions
files.forEach((f, idx) => {
  const p = path.join(eventsDir, f);
  const stat = fs.statSync(p);
  console.log(`${idx}: ${f} -> ${stat.size} bytes`);
});
