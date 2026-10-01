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
console.log(`TOTAL DUPLICATE IMAGE PATHS: ${dupes.length}`);
let totalDuplicateProducts = 0;
dupes.forEach(([img, prods]) => {
  totalDuplicateProducts += prods.length;
  console.log(`\n📷 ${img} (${prods.length} products):`);
  prods.forEach(p => console.log(`   * [${p.id}] "${p.name}" (${p.category})`));
});

console.log(`\nTotal products affected: ${totalDuplicateProducts} out of ${products.length}`);

const singles = Object.entries(map).filter(([img, prods]) => prods.length === 1);
console.log(`\nSingle usage images: ${singles.length}`);
singles.forEach(([img, prods]) => {
  console.log(`   ✓ [${prods[0].id}] "${prods[0].name}" -> ${img}`);
});
