const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'public', 'images', 'prototypes');

async function makeSeamlessPrototypes() {
  const src = 'public/images/products/custom_ptfe_teflon_gasket.webp';

  // 1. KURAL 1: SADECE CONTA
  // Center on the single large gasket:
  // Center is roughly x: 415, y: 260
  // In 4:3 ratio: width 380, height 285
  // left = 415 - 190 = 225, top = 260 - 142 = 118
  await sharp(src)
    .extract({ left: 220, top: 110, width: 380, height: 285 })
    .resize(800, 600, { kernel: 'lanczos3' })
    .composite([
      {
        input: Buffer.from(`
          <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 30)">
              <rect width="210" height="34" rx="8" fill="#1A2536" opacity="0.9" />
              <text x="14" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">KURAL 1: SADECE CONTA</text>
            </g>
          </svg>
        `),
        top: 0,
        left: 0
      }
    ])
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'ornek_1_sadece_conta.webp'));

  // 2. KURAL 2: KENARDA PLAKA
  // Left: 45, Top: 110, Width: 520, Height: 390 (520 / 390 = 4 / 3 exactly)
  await sharp(src)
    .extract({ left: 45, top: 110, width: 520, height: 390 })
    .resize(800, 600, { kernel: 'lanczos3' })
    .composite([
      {
        input: Buffer.from(`
          <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 30)">
              <rect width="240" height="34" rx="8" fill="#B7410E" opacity="0.95" />
              <text x="14" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">KURAL 2: KENARDA PLAKA</text>
            </g>
          </svg>
        `),
        top: 0,
        left: 0
      }
    ])
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'ornek_2_kenarda_plaka.webp'));

  // 3. KURAL 3: JONTA (2 ADET CONTA)
  // Two gaskets on right: center roughly x: 610, y: 220
  // In 4:3 ratio: width 240, height 180 (left: 495, top: 125)
  await sharp(src)
    .extract({ left: 495, top: 125, width: 240, height: 180 })
    .resize(800, 600, { kernel: 'lanczos3' })
    .composite([
      {
        input: Buffer.from(`
          <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 30)">
              <rect width="210" height="34" rx="8" fill="#1A2536" opacity="0.9" />
              <text x="14" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">KURAL 3: JONTA (2 ADET)</text>
            </g>
          </svg>
        `),
        top: 0,
        left: 0
      }
    ])
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'ornek_3_jonta_cift.webp'));

  console.log('Seamless prototypes generated!');
}

makeSeamlessPrototypes();
