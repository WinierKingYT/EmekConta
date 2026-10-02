const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Checkout the 33 AI-replaced files from fc1c085
const targets = [
  'klingirit-flans-conta.webp',
  'asbestsiz-klingerit-levha.webp',
  'asbestsiz-klingrit-levhalar.webp',
  'klingirit-conta.webp',
  'asbetsiz-conta.webp',
  'epdm-conta.webp',
  'epdm-flans-conta.webp',
  'lastik-conta.webp',
  'viton-conta.webp',
  'viton-flans-conta.webp',
  'mekanik-viton-conta.webp',
  'spiral-sarimli-celik-conta.webp',
  'buhar-contasi.webp',
  't200.webp',
  'saf-grafit-levha.webp',
  'grafitli-telli-conta.webp',
  'ptfe-teflon-conta.webp',
  'ptfe-teflon-levha.webp',
  'termoflon-levha.webp',
  'mantar-levhalar.webp',
  'kaucuklu-mantar-levhalar.webp',
  'kestamid.webp',
  'polyamid.webp',
  'dolu-cubuklar.webp',
  'bos-cubuklar.webp',
  'poliasetal.webp',
  'polietilen.webp',
  'polipropilen.webp',
  'pvc.webp',
  'saf-grafit-salmastra.webp',
  'grafitli-salmastralar.webp',
  'grafitli-serit-salmastralar.webp',
  'termoflon-salmastra.webp'
];

console.log('Restoring 33 authentic scraped images from commit fc1c085...');
for (const file of targets) {
  const filePath = `public/images/products/${file}`;
  execSync(`git checkout fc1c085 -- ${filePath}`);
  console.log(`✓ Restored authentic photo: ${file}`);
}

// 2. Fix seramik-levha in data/products.ts
const productsTsPath = path.join(__dirname, '..', 'data', 'products.ts');
let content = fs.readFileSync(productsTsPath, 'utf8');

if (content.includes('/images/products/custom_ceramic_insulation_blanket.webp')) {
  content = content.replace(
    '/images/products/custom_ceramic_insulation_blanket.webp',
    '/images/products/seramik-levha.webp'
  );
  fs.writeFileSync(productsTsPath, content, 'utf8');
  console.log('✓ Updated seramik-levha image in data/products.ts to /images/products/seramik-levha.webp');
}

console.log('\nVerification of all 98 products in data/products.ts:');
const re = /"id":\s*"([^"]+)"[\s\S]*?"name":\s*"([^"]+)"[\s\S]*?"image":\s*"([^"]+)"/g;
let m;
let total = 0;
let missing = 0;
let customPlaceholders = 0;

while ((m = re.exec(content)) !== null) {
  total++;
  const id = m[1];
  const name = m[2];
  const img = m[3];

  if (img.includes('custom_')) {
    customPlaceholders++;
    console.warn(`WARNING: Product [${id}] "${name}" still uses custom placeholder: ${img}`);
  }

  const diskPath = path.join(__dirname, '..', 'public', img.replace(/^\//, ''));
  if (!fs.existsSync(diskPath)) {
    missing++;
    console.error(`ERROR: Product [${id}] "${name}" image missing on disk: ${diskPath}`);
  }
}

console.log(`\n========================================`);
console.log(`Total Products: ${total}`);
console.log(`Missing Files: ${missing}`);
console.log(`Custom Placeholders Remaining: ${customPlaceholders}`);
console.log(`All products mapped to authentic photos: ${missing === 0 && customPlaceholders === 0 ? 'YES' : 'NO'}`);
console.log(`========================================\n`);
