const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'data', 'products.ts'), 'utf8');

const blockRegex = /\{\s*"id":\s*"([^"]+)"[\s\S]*?"name":\s*"([^"]+)"[\s\S]*?"category":\s*"([^"]+)"[\s\S]*?"image":\s*"([^"]+)"/g;
let m;
const products = [];
while ((m = blockRegex.exec(content)) !== null) {
  products.push({ id: m[1], name: m[2], category: m[3], image: m[4] });
}

const map = {};
for (const p of products) {
  map[p.image] = map[p.image] || [];
  map[p.image].push(p);
}

const dupes = Object.entries(map).filter(([img, prods]) => prods.length > 1);
const singles = Object.entries(map).filter(([img, prods]) => prods.length === 1);

console.log(`TOTAL PRODUCTS: ${products.length}`);
console.log(`UNIQUE / SINGLE PRODUCTS: ${singles.length}`);
console.log(`DUPLICATE PATHS REMAINING: ${dupes.length}`);

dupes.forEach(([img, prods]) => {
  console.log(`\nReused: ${img} (${prods.length} products):`);
  prods.forEach(p => console.log(`  - [${p.id}] ${p.name}`));
});
