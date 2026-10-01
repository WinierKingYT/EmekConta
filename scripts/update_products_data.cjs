const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

const updates = {
  'klingirit-flans-conta': '/images/products/klingirit-flans-conta.webp',
  'asbestsiz-klingerit-levha': '/images/products/asbestsiz-klingerit-levha.webp',
  'asbestsiz-klingrit-levhalar': '/images/products/asbestsiz-klingrit-levhalar.webp',
  'klingirit-conta': '/images/products/klingirit-conta.webp',
  'asbetsiz-conta': '/images/products/asbetsiz-conta.webp',
  'epdm-conta': '/images/products/epdm-conta.webp',
  'epdm-flans-conta': '/images/products/epdm-flans-conta.webp',
  'lastik-conta': '/images/products/lastik-conta.webp',
  'viton-conta': '/images/products/viton-conta.webp',
  'viton-flans-conta': '/images/products/viton-flans-conta.webp',
  'mekanik-viton-conta': '/images/products/mekanik-viton-conta.webp',
  'spiral-sarimli-celik-conta': '/images/products/spiral-sarimli-celik-conta.webp',
  'buhar-contasi': '/images/products/buhar-contasi.webp',
  't200': '/images/products/t200.webp',
  'saf-grafit-levha': '/images/products/saf-grafit-levha.webp',
  'grafitli-telli-conta': '/images/products/grafitli-telli-conta.webp',
  'ptfe-teflon-conta': '/images/products/ptfe-teflon-conta.webp',
  'ptfe-teflon-levha': '/images/products/ptfe-teflon-levha.webp',
  'termoflon-levha': '/images/products/termoflon-levha.webp',
  'mantar-levhalar': '/images/products/mantar-levhalar.webp',
  'kaucuklu-mantar-levhalar': '/images/products/kaucuklu-mantar-levhalar.webp'
};

let count = 0;
for (const [id, newImage] of Object.entries(updates)) {
  // Regex to match the product block
  const regex = new RegExp('("id":\\s*"' + id + '"[\\s\\S]*?"image":\\s*)"[^"]+"');
  if (regex.test(content)) {
    content = content.replace(regex, `$1"${newImage}"`);
    count++;
  } else {
    console.log(`Could not match product id: ${id}`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Updated ${count} product images in data/products.ts`);
