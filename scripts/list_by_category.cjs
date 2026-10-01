const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'data', 'products.ts'), 'utf8');
const blockRegex = /\{\s*"id":\s*"([^"]+)"[\s\S]*?"name":\s*"([^"]+)"[\s\S]*?"category":\s*"([^"]+)"[\s\S]*?"image":\s*"([^"]+)"/g;
let m;
const cats = {};
while ((m = blockRegex.exec(content)) !== null) {
  cats[m[3]] = cats[m[3]] || [];
  cats[m[3]].push({ id: m[1], name: m[2], image: m[4] });
}

for (const [c, prods] of Object.entries(cats)) {
  console.log(`\n=== Category: ${c} (${prods.length} products) ===`);
  prods.forEach((p, idx) => console.log(`  ${idx + 1}. [${p.id}] ${p.name}`));
}
