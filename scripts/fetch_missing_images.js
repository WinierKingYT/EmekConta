const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'products');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const items = [
  {
    name: 'sac-takviyeli-elastomer-conta.jpg',
    url: 'https://www.oncuconta.com/wp-content/uploads/2019/08/EPDM-%C3%87elik-Takviyeli-Elastomer-Conta.jpg',
  },
  {
    name: 'kaucuklu-mantar-levhalar.jpg',
    url: 'https://www.oncuconta.com/wp-content/uploads/2019/08/MANTAR-LEVHALAR.jpg',
  },
  {
    name: 'ambar-kapak-lastikleri.jpg',
    url: 'https://emekconta.com.tr/wp-content/uploads/2025/05/AMBAR-KAPAK-LASTIKLERI.jpg',
  },
];

async function downloadImages() {
  console.log('Downloading missing product images...');

  for (const item of items) {
    const dest = path.join(targetDir, item.name);
    try {
      console.log(`Fetching ${item.url}...`);
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buffer);
      console.log(`Saved ${item.name} (${Math.round(buffer.length / 1024)} KB)`);
    } catch (e) {
      console.error(`Failed to download ${item.name}:`, e.message);
    }
  }
}

downloadImages();
