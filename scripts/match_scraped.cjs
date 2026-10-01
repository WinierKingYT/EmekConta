const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'data', 'products.ts'), 'utf8');
const scraped = JSON.parse(fs.readFileSync(path.join(__dirname, 'emekconta_products.json'), 'utf8'));

const blockRegex = /\{\s*"id":\s*"([^"]+)"[\s\S]*?"name":\s*"([^"]+)"[\s\S]*?"category":\s*"([^"]+)"[\s\S]*?"image":\s*"([^"]+)"/g;
let m;
const products = [];
while ((m = blockRegex.exec(content)) !== null) {
  products.push({ id: m[1], name: m[2], cat: m[3], image: m[4] });
}

function normalize(s) {
  return s.toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c');
}

const scrapedMap = new Map();
scraped.forEach(item => {
  const normTitle = normalize(item.title);
  scrapedMap.set(normTitle, item);
  
  // Also try URL slug
  if (item.url) {
    const slugMatch = item.url.match(/\/urunler\/([^/]+)\/?$/);
    if (slugMatch) {
      scrapedMap.set(normalize(slugMatch[1]), item);
    }
  }
});

let matched = 0;
let unmatched = [];

products.forEach(p => {
  const normId = normalize(p.id);
  const normName = normalize(p.name);
  
  let match = scrapedMap.get(normId) || scrapedMap.get(normName);
  if (!match) {
    // try partial match
    for (const [key, item] of scrapedMap.entries()) {
      if (key.includes(normId) || normId.includes(key) || key.includes(normName) || normName.includes(key)) {
        match = item;
        break;
      }
    }
  }

  if (match && match.featuredImage) {
    matched++;
  } else {
    unmatched.push(p);
  }
});

console.log(`Matched with live scraped data: ${matched} / ${products.length}`);
console.log(`Unmatched: ${unmatched.length}`);
unmatched.slice(0, 15).forEach(u => console.log(` - [${u.id}] ${u.name}`));
