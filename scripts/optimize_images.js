const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const productDir = path.join(__dirname, '..', 'public', 'images', 'products');
const heroDir = path.join(__dirname, '..', 'public', 'images', 'hero');

if (!fs.existsSync(heroDir)) {
  fs.mkdirSync(heroDir, { recursive: true });
}

async function optimizeAll() {
  console.log('Optimizing product images with Sharp...');
  const files = fs.readdirSync(productDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));

  const report = [];
  let totalOrig = 0;
  let totalOpt = 0;

  for (const file of files) {
    const inputPath = path.join(productDir, file);
    const baseName = file.replace(/\.[a-z]+$/i, '');
    const outputPath = path.join(productDir, `${baseName}.webp`);

    const origStat = fs.statSync(inputPath);
    totalOrig += origStat.size;

    await sharp(inputPath)
      .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    const optStat = fs.statSync(outputPath);
    totalOpt += optStat.size;

    const savedPercent = Math.round((1 - optStat.size / origStat.size) * 100);

    report.push({
      product: baseName,
      originalKb: Math.round(origStat.size / 1024),
      webpKb: Math.round(optStat.size / 1024),
      reduction: `${savedPercent}%`,
    });
  }

  console.table(report);
  console.log(`Total Original Size: ${Math.round(totalOrig / 1024)} KB`);
  console.log(`Total Optimized WebP Size: ${Math.round(totalOpt / 1024)} KB`);
  console.log(`Total Bandwidth Reduction: ${Math.round((1 - totalOpt / totalOrig) * 100)}%`);

  // Create starter hero manufacturing image from the spiral wound gasket or composition
  const heroPath = path.join(heroDir, 'hero-manufacturing.webp');
  const spiralPath = path.join(productDir, 'spiral-sarimli-contalar.jpg');
  if (fs.existsSync(spiralPath) && !fs.existsSync(heroPath)) {
    console.log('Creating initial starter hero banner from spiral-sarimli-contalar...');
    await sharp(spiralPath)
      .resize({ width: 1400, height: 900, fit: 'contain', background: '#0f172a' })
      .webp({ quality: 88, effort: 6 })
      .toFile(heroPath);
    console.log('Starter hero image created at public/images/hero/hero-manufacturing.webp');
  }
}

optimizeAll().catch(console.error);
