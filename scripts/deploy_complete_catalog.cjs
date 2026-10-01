const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const scrapedFile = path.join(__dirname, 'emekconta_products.json');
const scraped = JSON.parse(fs.readFileSync(scrapedFile, 'utf8'));

const productsTsPath = path.join(__dirname, '..', 'data', 'products.ts');
let productsTsContent = fs.readFileSync(productsTsPath, 'utf8');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'products');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

// Normalize string for fuzzy matching
function norm(str) {
  return (str || '').toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c');
}

// Build map of scraped images
const scrapedUrlMap = new Map();
scraped.forEach(s => {
  if (s.featuredImage) {
    scrapedUrlMap.set(norm(s.title), s.featuredImage);
    const slugMatch = s.url ? s.url.match(/\/urunler\/([^/]+)\/?$/) : null;
    if (slugMatch) {
      scrapedUrlMap.set(norm(slugMatch[1]), s.featuredImage);
    }
  }
});

// Explicit mappings for Turkish products to authentic scraped URLs
const explicitMap = {
  // Salmastralar
  'aramid-kevlar-salmastra': 'https://emekconta.com.tr/wp-content/uploads/2025/05/ARAMID-SALMASTRA-GAMFLONAR.jpg',
  'ats-kempomp-salmastra': 'https://emekconta.com.tr/wp-content/uploads/2025/05/ARAMID-SALMASTRA-ZEBRA.jpg',
  'cam-elyaf-salmastra': 'https://emekconta.com.tr/wp-content/uploads/2025/05/CAM-ELYAF-ORGULU-SALMASTRA.jpg',
  'seramik-salmastralar': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SERAMIK-ORGULU-SALMASTRA.jpg',
  'seramik-salmastra': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SERAMIK-ORGULU-SALMASTRA.jpg',
  'saf-teflon-salmastra': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SAF-P.T.F.E-SALMASTRA.jpg',
  'grafitli-teflon-salmastra': 'https://emekconta.com.tr/wp-content/uploads/2025/05/GRF-P.T.F.E-SALMASTRA.jpg',
  'ramie-salmastra': 'https://emekconta.com.tr/wp-content/uploads/2025/05/RAMIE-SALMASTRA.jpg',

  // Yüksek Isı & Tekstil
  'cam-fitiller': 'https://emekconta.com.tr/wp-content/uploads/2025/05/YUVARLAK-CAM-ELYAF-FITIL.jpg',
  'cam-elyaf-fitil': 'https://emekconta.com.tr/wp-content/uploads/2025/05/YUVARLAK-CAM-ELYAF-TIG-ORTULU-FITIL.jpg',
  'cam-elyaf-serit': 'https://emekconta.com.tr/wp-content/uploads/2025/05/CAM-ELYAF-BANTLAR.jpg',
  'cam-elyaf-bez': 'https://emekconta.com.tr/wp-content/uploads/2025/05/CAM-ELYAF-KUMAS.jpg',
  'cam-ve-seramik-bez-kumaslar': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SERAMIK-ELYAF-KUMASLAR.jpg',
  'cam-ve-seramik-levhalar': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SERAMIK-LEVHALAR.jpg',
  'cam-ve-seramik-seritler': 'https://emekconta.com.tr/wp-content/uploads/2025/05/CAM-ELYAF-BANTLAR.jpg',
  'seramik-elyaf-kumaslar': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SERAMIK-ELYAF-KUMASLAR.jpg',
  'seramik-bez': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SERAMIK-ELYAF-KUMASLAR.jpg',
  'seramik-serit': 'https://emekconta.com.tr/wp-content/uploads/2025/05/ORGULU-SERAMIK-ELYAF-SERIT.jpg',
  'seramik-fitil': 'https://emekconta.com.tr/wp-content/uploads/2025/05/YUVARLAK-ORGULU-SERAMIK-FITIL.jpg',
  'seramik-levha': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SERAMIK-ELYAF-PLAKA-CERABORD.jpg',
  'seramik-battaniye': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SERAMIK-BATTANIYELER.jpg',
  'seramik-paper-kagit': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SERAMIK-KAGIT-PAPER.jpg',

  // Silikon ürünleri
  'silikon-conta': 'https://emekconta.com.tr/wp-content/uploads/2025/05/KIRMIZI-SILIKON-LEVHALAR.jpg',
  'silikon-levhalar': 'https://emekconta.com.tr/wp-content/uploads/2025/05/KIRMIZI-SILIKON-LEVHALAR.jpg',
  'silikon-fitiller': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SILIKON-SUNGER-FITILLER.jpg',
  'silikon-lamalar': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SILIKON-SUNGER-SERITLER.jpg',
  'silikon-profiller': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SILIKON-SUNGER-FITILLER.jpg',
  'silikon-hortumlar': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SILIKON-SUNGER-FITILLER.jpg',
  'silikon-kumaslar': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SILIKON-KAPLI-CAM-ELYAF-KUMAS.jpg',
  'termoflon-cam-kumas': 'https://emekconta.com.tr/wp-content/uploads/2025/05/ANTISTATIK-DUZ-P.T.F.E-KUMASLAR.jpg',

  // Levha ve Plakalar
  'vulkanize-fiber-levhalar': 'https://emekconta.com.tr/wp-content/uploads/2025/05/VULKANIZE-FIBER-LEVHA.jpg',
  'fiber-levhalar': 'https://emekconta.com.tr/wp-content/uploads/2025/05/FENOL-FIBER-LEVHALAR.jpg',
  'epoxy-fiber-levha': 'https://emekconta.com.tr/wp-content/uploads/2025/05/EPOKSI-FIBER-LEVHALAR.jpg',
  'fiber-cubuklar': 'https://emekconta.com.tr/wp-content/uploads/2025/05/FENOL-FIBER-CUBUKLAR.jpg',
  'epoxy-fiber-cubuk': 'https://emekconta.com.tr/wp-content/uploads/2025/05/EPOKSI-FIBER-CUBUKLAR.jpg',
  'poliuretan-levhalar': 'https://emekconta.com.tr/wp-content/uploads/2025/05/POLIURETAN-PLAKALAR.jpg',
  'sacli-klingerit': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SAF-GRAFIT-LEVHA-PERFORCE-SACLI.jpg',
  'grafitli-asbestsiz-telli': 'https://emekconta.com.tr/wp-content/uploads/2025/05/ASBESTSIZ-KLINGIRIT-LEVHA-GRAFITLI-TELLI.jpg',
  'grafitli-asbestli-telli': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SAF-GRAFIT-LEHVA-TELLI.jpg',

  // PTFE türevleri
  'termoflon-film': 'https://emekconta.com.tr/wp-content/uploads/2025/05/BEYAZ-P.T.F.E.-LEVHALAR.jpg',
  'cam-elyafli-termoflon': 'https://emekconta.com.tr/wp-content/uploads/2025/05/BEYAZ-P.T.F.E.-LEVHALAR.jpg',
  'bronzlu-termoflon': 'https://emekconta.com.tr/wp-content/uploads/2025/05/KESTAMID-LEVHALAR.jpg',
  'karbonlu-termoflon': 'https://emekconta.com.tr/wp-content/uploads/2025/05/KARBONLU-PTFE-LEVHALAR.jpg',
  'termoflon-cubuk': 'https://emekconta.com.tr/wp-content/uploads/2025/05/BEYAZ-PTFE-CUBUKLAR.jpg',
  'termoflon-cord': 'https://emekconta.com.tr/wp-content/uploads/2025/05/P.T.F.E-CORD-SERT.jpg',
  'termoflon-hortum': 'https://emekconta.com.tr/wp-content/uploads/2025/05/P.T.F.E-HORTUMLAR.jpg',
  'termoflon-contalon': 'https://emekconta.com.tr/wp-content/uploads/2025/05/P.T.F.E-SERITLER-CONTALON.jpg',
  'etch-termoflon': 'https://emekconta.com.tr/wp-content/uploads/2025/05/YAPISKANLI-P.T.F.E-KUMASLAR.jpg',
  'sanfor-termoflon': 'https://emekconta.com.tr/wp-content/uploads/2025/05/ANTISTATIK-YAPISKANLI-P.T.F.E-KUMASLAR.jpg',
  'presli-yun-keceler': 'https://emekconta.com.tr/wp-content/uploads/2025/05/PRESLI-YUN-KECE.jpg',
  'sentetik-keceler': 'https://emekconta.com.tr/wp-content/uploads/2025/05/PRESLI-YUN-KECE.jpg',

  // Özel Contalar
  'izole-flans-kiti-conta': 'https://emekconta.com.tr/wp-content/uploads/2025/05/DIELEKTIRIK-IZOLE-LASTIK-LEVHALAR.jpg',
  'kazan-kapak-contasi': 'https://emekconta.com.tr/wp-content/uploads/2025/05/ASBESTSIZ-GRAFITLI-TELLI-FLANS-CONTALARI.jpg',
  'saf-grafitli-ici-ringli-conta': 'https://emekconta.com.tr/wp-content/uploads/2025/05/ICI-RINGLI-SAF-GRAFIT-CONTALAR.jpg',
  'saf-grafitli-ringli-conta': 'https://emekconta.com.tr/wp-content/uploads/2025/05/Grafit10.jpg',
  'grafitli-ici-bilezikli-conta': 'https://emekconta.com.tr/wp-content/uploads/2025/05/ICI-RINGLI-SAF-GRAFIT-CONTALAR.jpg',
  'kalorifer-contasi': 'https://emekconta.com.tr/wp-content/uploads/2025/05/ASBESTSIZ-KLINGIRIT-TESNIT-BA-50.jpg',
  'kalorifer-boru-contasi': 'https://emekconta.com.tr/wp-content/uploads/2025/05/ASBESTSIZ-KLINGIRIT-TESNIT-BA-GL.jpg',
  'rekor-conta': 'https://emekconta.com.tr/wp-content/uploads/2025/05/DIGER-CONTALAR.jpg',
  'ozel-kesim-conta': 'https://emekconta.com.tr/wp-content/uploads/2025/05/DIGER-CONTALAR.jpg',
  'ozel-imalat-conta': 'https://emekconta.com.tr/wp-content/uploads/2025/05/DIGER-CONTALAR.jpg',
  'antiasit': 'https://emekconta.com.tr/wp-content/uploads/2025/05/ASBESTSIZ-KLINGIRIT-FRENZELIT-UNIVERSAL-YESIL.jpg',
  'antipetrol': 'https://emekconta.com.tr/wp-content/uploads/2025/05/ASBESTSIZ-KLINGIRIT-LEVHA-AFM-GF-650-AFM-IT-400.jpg',
  'antipetrol-conta': 'https://emekconta.com.tr/wp-content/uploads/2025/05/ASBESTSIZ-KLINGIRIT-LEVHA-AFM-GF-650-AFM-IT-400.jpg',
  'epdm-celik-takviyeli-elastomer-conta': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SAC-TAKVIYELI-ELOSTOMER-CONTA.jpg',
  'celik-takviyeli-conta': 'https://emekconta.com.tr/wp-content/uploads/2025/05/SAC-TAKVIYELI-ELOSTOMER-CONTA.jpg'
};

async function processAllRemaining() {
  console.log('Starting complete catalog deployment...');
  let downloadedCount = 0;
  let updatedTsCount = 0;

  for (const [slug, url] of Object.entries(explicitMap)) {
    const fileName = `${slug}.webp`;
    const destPath = path.join(targetDir, fileName);

    try {
      console.log(`Processing [${slug}] from ${url}...`);
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) {
        console.warn(`Failed fetch for ${slug}: HTTP ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());

      // Resize and convert to WebP 800x600 with white background contain
      await sharp(buffer)
        .resize(800, 600, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .webp({ quality: 90 })
        .toFile(destPath);

      downloadedCount++;

      // Update in data/products.ts
      const regex = new RegExp('("id":\\s*"' + slug + '"[\\s\\S]*?"image":\\s*)"[^"]+"');
      if (regex.test(productsTsContent)) {
        productsTsContent = productsTsContent.replace(regex, `$1"/images/products/${fileName}"`);
        updatedTsCount++;
      } else {
        console.log(`Could not find id "${slug}" in products.ts`);
      }
    } catch (e) {
      console.error(`Error processing ${slug}:`, e.message);
    }
  }

  fs.writeFileSync(productsTsPath, productsTsContent, 'utf8');
  console.log(`\n========================================`);
  console.log(`Successfully downloaded & converted: ${downloadedCount} products`);
  console.log(`Successfully updated in products.ts: ${updatedTsCount} products`);
  console.log(`========================================`);
}

processAllRemaining();
