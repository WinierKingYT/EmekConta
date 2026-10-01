const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'public', 'images', 'prototypes');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function createRealPhotographicPrototypes() {
  console.log('Building 3 realistic prototypes based on real material photos...');

  // =========================================================================
  // 1. PROTOTYPE 1: CONTA (Sadece Tek Conta)
  // Ürün: Klingirit Flanş Conta
  // Kural: "eğer contaysa sadece conta"
  // =========================================================================
  // In custom_klingrite_gasket.webp (800x600):
  // Let's extract the clean DN80 PN16 gasket from (320, 160) to (590, 430)
  // or the DN100 gasket and compose on a fresh 800x600 studio canvas
  const klingMeta = await sharp('public/images/products/custom_klingrite_gasket.webp').metadata();
  console.log('Klingrite source size:', klingMeta.width, 'x', klingMeta.height);

  // Let's create an 800x600 pure studio canvas with subtle ambient shadow
  // Extract the DN80 gasket (width: ~280, height: ~280)
  // In custom_klingrite_gasket.webp, around center-right: x: 330, y: 155, w: 275, h: 275
  // Let's inspect or extract the isolated gasket from custom_spiral_wound_gasket or viton or klingrite
  
  // Also let's check custom_spiral_wound_gasket.webp (800x600)
  // In custom_spiral_wound_gasket.webp:
  // There is the middle gasket (x: 395, y: 260, w: 250, h: 250) or right gasket
  // But for Klingirit Conta, let's take a pristine cut or crop of single gasket!
  
  // Let's also check custom_viton_fkm_gasket.webp:
  // There is a single DN50 PN16 gasket in the lower-left: x: 120, y: 420, w: 250, h: 250
  
  // Let's create a dedicated single gasket crop from custom_klingrite_gasket.webp:
  // Let's crop the center DN80 gasket:
  const singleContaCrop = await sharp('public/images/products/custom_klingrite_gasket.webp')
    .extract({ left: 320, top: 155, width: 280, height: 280 })
    .resize(460, 460, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .toBuffer();

  // Create clean 800x600 studio background
  const proto1 = await sharp({
    create: {
      width: 800,
      height: 600,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([
    {
      input: singleContaCrop,
      top: 70,
      left: 170
    },
    {
      // Optional discreet label badge for review
      input: Buffer.from(`
        <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(30, 30)">
            <rect width="210" height="32" rx="6" fill="#1A2536" opacity="0.9" />
            <text x="14" y="21" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">KURAL 1: SADECE CONTA</text>
          </g>
          <text x="30" y="565" font-family="sans-serif" font-size="13" font-weight="600" fill="#62635F">Örnek Ürün: Klingirit Flanş Contası (Tek Başına İzole Conta)</text>
        </svg>
      `),
      top: 0,
      left: 0
    }
  ])
  .webp({ quality: 92 })
  .toFile(path.join(outDir, 'proto_1_sadece_conta.webp'));

  console.log('✓ Proto 1 (Sadece Conta) generated.');

  // =========================================================================
  // 2. PROTOTYPE 2: PLAKA / LEVHA (Kenarda Plaka Gözüksün)
  // Ürün: Asbestsiz Klingirit Levha (Plaka)
  // Kural: "plaka yazıyorsa küçük bir plaka büyüklüğünde kenarda plaka gözüksün"
  // =========================================================================
  // For Plaka: We have the actual sheet photo in test_klingirit_levha.jpg (843x696)
  // and we have the cut gasket!
  // Let's create an 800x600 composite:
  // Center: The cut gasket
  // Top-Right / Corner: A neatly cropped sample of the raw plate sheet (showing the AFM honeycomb pattern & sheet thickness)
  const plateSample = await sharp('public/images/temp_samples/ASBESTSIZ-KLINGIRIT-LEVHA.jpg')
    .extract({ left: 30, top: 40, width: 480, height: 420 })
    .resize(260, 220, { fit: 'cover' })
    .toBuffer();

  // Create rounded border / card for the plate sample
  const plateSampleWithFrame = await sharp(plateSample)
    .composite([
      {
        input: Buffer.from(`
          <svg width="260" height="220" xmlns="http://www.w3.org/2000/svg">
            <rect width="260" height="220" rx="8" fill="none" stroke="#D9D5CD" stroke-width="2" />
            <g transform="translate(10, 185)">
              <rect width="140" height="24" rx="4" fill="#1A2536" opacity="0.9" />
              <text x="12" y="16" font-family="sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF">HAM LEVHA PLAKA</text>
            </g>
          </svg>
        `),
        top: 0,
        left: 0
      }
    ])
    .toBuffer();

  const proto2 = await sharp({
    create: {
      width: 800,
      height: 600,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([
    {
      // Main cut gasket (centered slightly to left)
      input: singleContaCrop,
      top: 90,
      left: 80
    },
    {
      // Kenarda küçük plaka büyüklüğünde plaka (Top right corner)
      input: plateSampleWithFrame,
      top: 50,
      left: 500
    },
    {
      // Review badge
      input: Buffer.from(`
        <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(30, 30)">
            <rect width="230" height="32" rx="6" fill="#B7410E" opacity="0.95" />
            <text x="14" y="21" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">KURAL 2: KENARDA PLAKA</text>
          </g>
          <text x="30" y="565" font-family="sans-serif" font-size="13" font-weight="600" fill="#62635F">Örnek Ürün: Klingirit Levha (Conta + Kenarda Numune Plaka)</text>
        </svg>
      `),
      top: 0,
      left: 0
    }
  ])
  .webp({ quality: 92 })
  .toFile(path.join(outDir, 'proto_2_kenarda_plaka.webp'));

  console.log('✓ Proto 2 (Kenarda Plaka) generated.');

  // =========================================================================
  // 3. PROTOTYPE 3: JONTA (İki Tane Yapılmış Conta)
  // Ürün: Jonta Flanş Contası (Takım / Çift)
  // Kural: "Eğer jonta yazıyorsa yapılmış contalardan iki tane, bir tane koyalım"
  // =========================================================================
  // Two gaskets, slightly overlapping or arranged as a 2-piece set
  const gasket1 = await sharp('public/images/products/custom_klingrite_gasket.webp')
    .extract({ left: 320, top: 155, width: 280, height: 280 })
    .resize(360, 360, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .toBuffer();

  const gasket2 = await sharp('public/images/products/custom_klingrite_gasket.webp')
    .extract({ left: 320, top: 155, width: 280, height: 280 })
    .resize(360, 360, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .toBuffer();

  const proto3 = await sharp({
    create: {
      width: 800,
      height: 600,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([
    {
      // First gasket (base, right)
      input: gasket1,
      top: 130,
      left: 320
    },
    {
      // Second gasket (top, left, overlapping)
      input: gasket2,
      top: 90,
      left: 120
    },
    {
      // Review badge
      input: Buffer.from(`
        <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(30, 30)">
            <rect width="210" height="32" rx="6" fill="#1A2536" opacity="0.95" />
            <text x="14" y="21" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">KURAL 3: JONTA (2 ADET)</text>
          </g>
          <text x="30" y="565" font-family="sans-serif" font-size="13" font-weight="600" fill="#62635F">Örnek Ürün: Jonta Flanş Çifti (Tam 2 Adet Yapılmış Conta)</text>
        </svg>
      `),
      top: 0,
      left: 0
    }
  ])
  .webp({ quality: 92 })
  .toFile(path.join(outDir, 'proto_3_jonta_cift.webp'));

  console.log('✓ Proto 3 (Jonta / 2 Adet) generated.');
}

createRealPhotographicPrototypes();
