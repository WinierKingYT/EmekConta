const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\faruk\\.gemini\\antigravity\\brain\\29aade75-62d2-4590-b33d-f2f5dd13d20f';
const targetDir = path.join(__dirname, '..', 'public', 'images', 'products');
const productsTsPath = path.join(__dirname, '..', 'data', 'products.ts');

const batch2 = [
  {
    src: 'kestamid_block_rod_1790885940331.jpg',
    targets: ['kestamid.webp', 'polyamid.webp', 'dolu-cubuklar.webp', 'bos-cubuklar.webp'],
    productIds: ['kestamid', 'polyamid', 'dolu-cubuklar', 'bos-cubuklar']
  },
  {
    src: 'pom_delrin_engineering_1790885989499.jpg',
    targets: ['poliasetal.webp', 'polietilen.webp', 'polipropilen.webp', 'pvc.webp'],
    productIds: ['poliasetal', 'polietilen', 'polipropilen', 'pvc']
  },
  {
    src: 'grafit_salmastra_spool_1790886041351.jpg',
    targets: ['saf-grafit-salmastra.webp', 'grafitli-salmastralar.webp', 'grafitli-serit-salmastralar.webp', 'termoflon-salmastra.webp'],
    productIds: ['saf-grafit-salmastra', 'grafitli-salmastralar', 'grafitli-serit-salmastralar', 'termoflon-salmastra']
  }
];

async function deployBatch2() {
  console.log('Deploying batch 2 webp images...');
  for (const item of batch2) {
    const srcPath = path.join(brainDir, item.src);
    for (const targetName of item.targets) {
      const destPath = path.join(targetDir, targetName);
      await sharp(srcPath)
        .resize(800, 600, { fit: 'cover' })
        .webp({ quality: 90 })
        .toFile(destPath);
      console.log(`✓ Generated ${targetName}`);
    }
  }

  // Update products.ts
  let content = fs.readFileSync(productsTsPath, 'utf8');
  let updatedCount = 0;
  for (const item of batch2) {
    for (let i = 0; i < item.productIds.length; i++) {
      const id = item.productIds[i];
      const newImg = `/images/products/${item.targets[i]}`;
      const regex = new RegExp('("id":\\s*"' + id + '"[\\s\\S]*?"image":\\s*)"[^"]+"');
      if (regex.test(content)) {
        content = content.replace(regex, `$1"${newImg}"`);
        updatedCount++;
      } else {
        console.log(`Could not find product ${id}`);
      }
    }
  }
  fs.writeFileSync(productsTsPath, content, 'utf8');
  console.log(`Updated ${updatedCount} products in products.ts!`);
}

deployBatch2();
