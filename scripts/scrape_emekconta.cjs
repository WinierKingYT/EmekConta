const { CheerioCrawler, Configuration } = require('crawlee');
const fs = require('fs');
const path = require('path');

// Disable disk persistence on Windows to avoid filesystem lock conflicts
Configuration.getGlobalConfig().set('persistStorage', false);

const products = [];
const seenUrls = new Set();

const crawler = new CheerioCrawler({
  maxRequestsPerCrawl: 250,
  maxConcurrency: 3,
  async requestHandler({ $, request, enqueueLinks }) {
    const url = request.url;

    const isCatalog = /^https:\/\/emekconta\.com\.tr\/urunler\/(page\/\d+\/)?(\?.*)?$/.test(url);

    if (isCatalog) {
      console.log(`[Katalog Sayfası] ${url}`);
      const links = [];
      $('a').each((_, el) => {
        const href = $(el).attr('href');
        if (href && href.startsWith('https://emekconta.com.tr/urunler/') && !seenUrls.has(href)) {
          seenUrls.add(href);
          links.push(href);
        }
      });
      await enqueueLinks({ urls: links });
    } else {
      // Product detail page
      const title = $('.urun-info h1').text().trim() || $('h1').first().text().trim() || $('title').text().replace(/– Emek Conta.*/, '').trim();
      const category = $('.urun-breadcrumbs a').last().text().trim() || 'Genel';
      const featuredImage = $('.urun-image img').attr('src') || $('.wp-post-image').attr('src') || $('meta[property="og:image"]').attr('content') || null;

      const contentImages = [];
      $('.urun-content img').each((_, el) => {
        const src = $(el).attr('src') || $(el).attr('data-src');
        if (src && !src.includes('favikon') && !src.includes('logo')) {
          contentImages.push(src);
        }
      });

      const stockCode = $('.urun-info p').text().replace(/Stok Kodu:\s*/i, '').trim();
      const excerpt = $('.urun-excerpt').text().replace(/\s+/g, ' ').trim();
      const content = $('.urun-content').text().replace(/\s+/g, ' ').trim();

      const product = {
        title,
        url,
        category,
        stockCode: stockCode || null,
        featuredImage,
        contentImages: [...new Set(contentImages)],
        excerpt: excerpt || null,
        content: content || null,
      };

      console.log(`[${products.length + 1}] ✓ [${category}] ${title}`);
      products.push(product);
    }
  },
  async failedRequestHandler({ request, error }) {
    console.error(`Request failed: ${request.url} -> ${error.message}`);
  },
});

async function main() {
  console.log('Emek Conta ürün taraması başlatılıyor (In-Memory Queue)...');
  await crawler.run(['https://emekconta.com.tr/urunler/']);

  // Sort by category then title
  products.sort((a, b) => (a.category || '').localeCompare(b.category || '') || a.title.localeCompare(b.title));

  const outputPath = path.join(__dirname, 'emekconta_products.json');
  fs.writeFileSync(outputPath, JSON.stringify(products, null, 2), 'utf-8');

  const categoryCounts = {};
  for (const p of products) {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
  }

  console.log('\n================== ÖZET ==================');
  console.log(`Toplam çekilen ürün sayısı: ${products.length}`);
  console.log('Kategori bazlı dağılım:', JSON.stringify(categoryCounts, null, 2));
  console.log(`Dosya kaydedildi: ${outputPath}`);
  console.log('==========================================\n');
}

main().catch(console.error);
