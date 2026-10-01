const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'data', 'products.ts'), 'utf-8');
const scraped = JSON.parse(fs.readFileSync(path.join(__dirname, 'emekconta_products.json'), 'utf-8'));

// Extract products from products.ts
const nameRegex = /"name":\s*"([^"]+)"/g;
const existingNames = [];
let match;
while ((match = nameRegex.exec(content)) !== null) {
  existingNames.push(match[1]);
}

const slugRegex = /"slug":\s*"([^"]+)"/g;
const existingSlugs = [];
while ((match = slugRegex.exec(content)) !== null) {
  existingSlugs.push(match[1]);
}

console.log('Sample existing products in products.ts (first 20):');
existingNames.slice(0, 20).forEach((name, i) => {
  console.log(` - [${existingSlugs[i] || '?'}] ${name}`);
});

console.log('\nExisting total products:', existingSlugs.length);
console.log('Scraped total products from live site:', scraped.length);

// Check slug normalization or similarity
function normalize(str) {
  return str.toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c');
}

const existingNormMap = new Map();
existingSlugs.forEach((s, idx) => {
  existingNormMap.set(normalize(s), { slug: s, name: existingNames[idx] });
});

let matchedCount = 0;
let newCount = 0;
const newProductsToIntegrate = [];

for (const p of scraped) {
  const urlMatch = p.url.match(/\/urunler\/([^/]+)\/?$/);
  const rawSlug = urlMatch ? urlMatch[1] : '';
  const normSlug = normalize(rawSlug);

  if (existingNormMap.has(normSlug)) {
    matchedCount++;
  } else {
    newCount++;
    newProductsToIntegrate.push({
      title: p.title,
      rawSlug,
      category: p.category,
      featuredImage: p.featuredImage,
      contentImages: p.contentImages,
      excerpt: p.excerpt,
    });
  }
}

console.log(`\nMatched with existing (by normalized slug): ${matchedCount}`);
console.log(`Brand new products from live site to add: ${newCount}`);
console.log(`\nSample 10 new products to add:`);
console.log(newProductsToIntegrate.slice(0, 10));
