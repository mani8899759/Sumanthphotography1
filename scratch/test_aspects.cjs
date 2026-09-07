const fs = require('fs');
const path = require('path');

const eventsDir = path.join(process.cwd(), 'public', 'assets', 'events');
const files = fs.readdirSync(eventsDir);

console.log('Total files in public/assets/events:', files.length);
files.forEach((f, idx) => {
  console.log(`${idx}: ${f}`);
});
