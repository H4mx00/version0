const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const p = path.join(dir, item);
    if (fs.statSync(p).isDirectory()) {
      files = files.concat(walk(p));
    } else if (p.endsWith('.ts') || p.endsWith('.tsx')) {
      files.push(p);
    }
  }
  return files;
}

const files = walk('src');
let count = 0;
for (const f of files) {
  let s = fs.readFileSync(f, 'utf8');
  if (s.includes('homeConfig') || s.includes('dashConfig')) {
    s = s.replace(/homeConfig/g, 'PublicConfig');
    s = s.replace(/dashConfig/g, 'PrivateConfig');
    fs.writeFileSync(f, s);
    count++;
  }
}
console.log('Replaced in ' + count + ' files');
