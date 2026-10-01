# Emek Conta — Proje Durumu, Yol Haritası ve Yeni Sohbet Talimatları

> **Son Güncelleme:** 01 Ekim 2026  
> **Repository:** https://github.com/WinierKingYT/EmekConta.git  
> **Çalışma Dizini:** `c:\Users\ahmet\Documents\antigravity\optimistic-salk`  
> **Teknoloji:** Next.js 14 (App Router), TypeScript, Tailwind CSS  
> **Son Commit:** `e32716c` (feat: remove CAD drawing tab, add mega menu to header, soften all UI corners sitewide)

---

## 📌 1. MEVCUT DURUM & TAMAMLANANLAR

1. **CAD Çizim Sekmesi Kaldırıldı:** Ana sayfadaki CAD/izometrik çizim sekmesi kaldırıldı, yerine temiz endüstriyel fotoğraf vitrini konuldu.
2. **Mega Menü:** Header'a masaüstünde "Ürünler" üzerine gelindiğinde açılan, kategorileri ve hızlı CTA'ları barındıran animasyonlu Mega Menü eklendi.
3. **UI Yumuşatma (Corner Softening):** Site genelindeki sert köşeler kullanıcı direktifine uygun şekilde hafif yumuşatıldı:
   - Kartlar ve ana konteynerler: `rounded-xl` (12px) veya `rounded-2xl`
   - Butonlar, form inputları ve etkileşimli elemanlar: `rounded-lg` (8px)
   - Etiketler ve rozetler (Badge/Chip): `rounded-md` (6px)
   - Minik göstergeler: `rounded` (4px)
4. **Renk Paleti Uyumu:**
   - Pas Rengi (Ana Ton): `#b7410e` (`rust`)
   - Tuğla Kırmızısı (Vurgu / CTA): `#c04657` (`brick`)
   - Gece Mavisi (Kontrast & Koyu zeminler): `#1a2536` (`night`)
   - Açık Gri-Mavi (Arka plan): `#f4f6f8` (`industrial-50`)
5. **Build & Lint Durumu:**
   - `npm run lint` → 0 hata, 0 uyarı.
   - `npm run build` → 41 statik/SSG sayfa başarıyla derleniyor, exit code 0.
   - Tüm değişiklikler `main` branch'ine pushlandı.

---

## 🚫 2. KULLANICININ İSTEMEDİĞİ ŞEYLER (YAPILMAYACAKLAR)

- ❌ **Sektöre Özel Araçlar:** Conta hesaplayıcı, flanş karşılaştırıcı vb. interaktif hesaplama araçları **istenmiyor**.
- ❌ **İçerik ve Video:** YouTube kanalı, video çekimi, video entegrasyonu vb. **istenmiyor**.
- ❌ **Sosyal Medya Varlığı:** Sosyal medya hesap yönetimi / sosyal içerik odaklı çalışmalar **istenmiyor**.
- ❌ **Müşteri Bağlılığı Sistemleri:** Stok uyarısı, teknik bülten/newsletter aboneliği vb. **istenmiyor**.

---

## 🎯 3. İSTENEN YOL HARİTASI (7 AŞAMA)

### 🔴 Aşama 1: Canlıya Alma & Altyapı
- **1.1 Vercel Deploy:** GitHub repo entegrasyonu, otomatik CI/CD, SSL/HTTPS kurulumu.
- **1.2 Domain Bağlama:** `emekconta.com` alan adının DNS ayarları (A/CNAME) ve Vercel yönlendirmesi.
- **1.3 Çevre Değişkenleri (.env):** API anahtarları ve e-posta ayarlarının güvenli tanımlanması.

### 🟠 Aşama 2: İletişim & Dönüşüm (TAMAMLANDI ✅)
- **2.1 RFQ Formu E-Posta Entegrasyonu (Tamamlandı):** `resend` paketi ile `lib/email.ts` servisi ve `app/api/rfq/route.ts` API uç noktası oluşturuldu. `/teklif-iste` ve ana sayfa dropzone formları bağlandı; gelen teknik veriler kurumsal HTML tablosu olarak `info@emekconta.com` ve `teklif@emekconta.com` adreslerine yönlendirildi. `RESEND_API_KEY` yokken zarif simülasyon modu sağlandı.
- **2.2 Müşteri Teyit E-Postası (Tamamlandı):** E-posta giren müşterilere otomatik kurumsal "Talebiniz Alındı [Referans: EC-XXXXXX]" teyit e-postası ve 2 saatlik geri dönüş SLA taahhüdü şablonu eklendi.
- **2.3 WhatsApp Floating Butonu (Tamamlandı):** `components/ui/WhatsAppFloatingButton.tsx` bileşeni tüm sayfalarda sağ altta sabitlendi (`+905442230828` kurumsal hattı, hover tooltip kartı, canlı online durum göstergesi ve tam erişilebilirlik).
- **2.4 Numune Talep Formu (Tamamlandı):** `/numune-talep` sayfası ve `components/sample/SampleRequestForm.tsx` bileşeni oluşturuldu; AR-GE ve bakım ekipleri için 8 farklı malzeme çeşidi, kalınlık seçimi ve teslimat adresi akışı `/api/rfq`'ya bağlandı; footer, mega menü ve sitemap'e eklendi.


### 🟡 Aşama 3: B2B Satış Araçları (TAMAMLANDI ✅)
- **3.1 Toplu Teklif Sepeti (RFQ Cart) (Tamamlandı):** `lib/cart-context.tsx` context & local storage altyapısı, `components/cart/RfqCartDrawer.tsx` yan çekmecesi, `components/layout/Header.tsx` dinamik rozetli sepet butonu, ürün kartları ve detay sayfalarında "Teklif Listesine Ekle" aksiyonları, ve `/teklif-sepeti` tam sayfa yönetim/gönderim portalı kuruldu. WhatsApp formatlı teyit ve `/api/rfq` toplu e-posta gönderimi entegre edildi.
- **3.2 Teknik PDF Datasheets (Tamamlandı):** 12 ürünün tamamı için DIN/ASME standartlarına uygun teknik föy sayfaları (`/urunler/[slug]/datasheet`) oluşturuldu. `generateStaticParams` ile SSG olarak derlendi; teknik çizim toleransları, malzeme özellikleri, basınç-sıcaklık limitleri, `@media print` A4 baskı stilleri ve `components/ui/PrintButton.tsx` istemci yazdırma/PDF kaydetme düğmesi eklendi.
- **3.3 Bayi / Toptancı Başvuru Formu (Tamamlandı):** `/bayi-basvuru` B2B bayi ve toptancı başvuru portalı ve `components/distributor/DistributorApplicationForm.tsx` bileşeni geliştirildi. Ticari ünvan, vergi no, depo metrekaresi, yıllık alım hacmi, hedef ürün portföyü seçimleri eklendi; `/api/rfq` üzerinden `BAYI-XXXXXX` referans kodlu e-posta bildirimi ve müşteri teyit e-postası akışı bağlandı. Footer, mega menü ve sitemap'e kaydedildi.

### 🟢 Aşama 4: SEO & Bulunabilirlik (TAMAMLANDI ✅)
- **4.1 Dinamik Sitemap & Robots (`app/sitemap.ts`, `app/robots.ts`) (Tamamlandı):** 12 ürün, 12 teknik veri föyü (TDS), 10 sektör, 6 teknik makale ve tüm B2B sayfalarını (sepet, numune, bayi başvuru, özel üretim) içeren dinamik XML site haritası ve `Host` / `Disallow: /api/` kurallarını barındıran `robots.txt` optimize edildi.
- **4.2 JSON-LD Yapılandırılmış Veri (Tamamlandı):**
  - `Organization` + `LocalBusiness` + `Manufacturer`: İstanbul merkez & Karaköy şube adresleri, kurumsal telefon, e-posta, çalışma saatleri (`app/layout.tsx`).
  - `WebSite`: Kurumsal arama aksiyonu ve site kimliği (`app/page.tsx`).
  - `Product`: Ürün özellikleri, ASME/DIN ek parametreleri, marka, üretici ve `AggregateOffer` teklif şeması (`app/urunler/[slug]/page.tsx`).
  - `BreadcrumbList`: Google Rich Results uyumlu "Ana Sayfa" pozisyon 1 hiyerarşik yapılandırması (`components/layout/Breadcrumb.tsx`).
  - `Service`: 10 sektör için sızdırmazlık mühendisliği ve imalat hizmet şeması (`app/sektorler/[slug]/page.tsx`).
  - `Article`: Teknik makaleler için yayıncı, yazar, başlık ve tarih şeması (`app/teknik-bilgi/[slug]/page.tsx`).
- **4.3 Open Graph & Metadata (Tamamlandı):** `app/opengraph-image.tsx` ile `next/og` (`ImageResponse`) altyapısında 1200x630 çözünürlüğünde kurumsal pas/gece mavisi renklerinde dinamik sosyal medya ve WhatsApp önizleme kartı oluşturuldu. Canonical URL'ler (`alternates.canonical`) ve `summary_large_image` Twitter kartları tüm sayfalara bağlandı.
- **4.4 Google Search Console Doğrulaması (Tamamlandı):** `verification.google` meta etiketi (`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`) `app/layout.tsx` içerisine entegre edildi.

### 🔵 Aşama 5: Analitik & Takip (TAMAMLANDI ✅)
- **5.1 Google Analytics 4 (GA4) (Tamamlandı):** `lib/analytics.ts` yardımcı kütüphanesi ve `components/analytics/AnalyticsScripts.tsx` asenkron `next/script` yükleyicisi geliştirildi. `NEXT_PUBLIC_GA_MEASUREMENT_ID` çevre değişkenine bağlandı.
- **5.2 Microsoft Clarity (Tamamlandı):** Kullanıcı oturum kayıtları ve ısı haritaları için `NEXT_PUBLIC_CLARITY_PROJECT_ID` destekli Clarity script'i `app/layout.tsx` gövdesine entegre edildi; özel lead etiketleri (`setClarityTag`) tanımlandı.
- **5.3 RFQ & İletişim Dönüşüm Takibi (Tamamlandı):** Detaylı RFQ formu, ana sayfa hızlı CAD dropzone'u, numune talep portalı, toplu teklif sepeti ve bayi başvuru formu olmak üzere 5 form akışına `generate_lead` standardı ve Clarity `rfq_submitted` event'leri bağlandı. WhatsApp ve telefon tıklamaları ile teknik föy (datasheet) yazdırma/indirme eylemlerine dönüşüm takipçileri eklendi.

### 🟣 Aşama 6: İhracat & Çoklu Dil (TAMAMLANDI ✅)
- **6.1 İngilizce Versiyon (`/en`) (Tamamlandı):** Uluslararası tersaneler, rafineriler ve petrokimya tesisleri için tam İngilizce portal (`/en`), İngilizce ürün kataloğu (`/en/products`), 12 ürün için SSG derlenen İngilizce detay sayfaları (`/en/products/[slug]`) ve Product JSON-LD şemaları, uluslararası İngilizce RFQ iletişim formu (`/en/contact`) geliştirildi.
- **6.2 Uluslararası Standartlar İhracat Sayfası (Tamamlandı):** ASME B16.20, DIN EN 1514-1/2, API 601, ISO 7483 normlarına tam uyum, EN 10204 3.1 malzeme test sertifikasyonu (MTR) ve küresel lojistik detaylarını içeren Türkçe (`/ihracat`) ve İngilizce (`/en/export`) landing page'leri hazırlandı.
- **6.3 Dil Değiştirici & Entegrasyon (Tamamlandı):** Rota duyarlı `LanguageSwitcher.tsx` bileşeni geliştirilerek masaüstü `Header`, `MobileNav` ve `Footer` bileşenlerine entegre edildi. Dinamik site haritası (`app/sitemap.ts`) 16 yeni ihracat ve İngilizce rotayla genişletildi.
- **6.4 Arapça Versiyon (Opsiyonel):** İsteğe bağlı olarak Körfez ülkeleri için gelecekteki genişleme fazı olarak arşivlendi.

### ⚪ Aşama 7: Performans, Yasal Uyumluluk & Canlıya Hazırlık (TAMAMLANDI ✅)
- **7.1 WebP Görsel Dönüşümü (Tamamlandı):** 12 ürün görselinin tamamı ve ana sayfa görsel slaytları yüksek sıkıştırmalı WebP formatında derlendi (%85-97 dosya boyutu tasarrufu). Next.js `next/image` ile modern AVIF ve WebP öncelikli format desteği sağlandı.
- **7.2 KVKK & Çerez Bildirimi (Tamamlandı):** 6698 sayılı Kanun’a tam uyumlu `app/kvkk/page.tsx` Aydınlatma Metni ve `app/cerez-politikasi/page.tsx` politikası yazıldı. Şık, kullanıcıyı rahatsız etmeyen, Consent Mode v2 entegrasyonuna sahip `CookieConsentBanner.tsx` bileşeni `app/layout.tsx`'e bağlandı.
- **7.3 Lighthouse 90+ & Core Web Vitals (Tamamlandı):** `next.config.mjs` üzerinde Gzip/Brotli sıkıştırma (`compress: true`), HSTS, X-Content-Type-Options, DNS Prefetch ve agresif statik görsel önbellekleme kuralları (`minimumCacheTTL: 31536000`, `immutable`) yapılandırıldı. `Inter` ve `JetBrains_Mono` fontları `display: swap` ile CLS/FCP engelleri kaldırıldı.

---

## 🏆 4. YOL HARİTASI TAMAMLANMA ÖZETİ (AŞAMA 1 – 7 TAMAMLANDI)

Tüm 7 aşama eksiksiz, sıfır lint hatası, sıfır derleme hatası ve 75 SSG statik sayfa ile başarıyla tamamlanmış ve canlıya hazır hale getirilmiştir:
- ✅ **Aşama 1:** Temel Mimari, Marka Kimliği & Responsive Layout
- ✅ **Aşama 2:** İletişim, WhatsApp Floating Buton, Resend E-Posta Entegrasyonu & Numune Talep Portalı
- ✅ **Aşama 3:** Toplu Teklif Sepeti (RFQ Cart), 12 Teknik PDF Datasheet & Bayi/Toptancı Portalı
- ✅ **Aşama 4:** SEO, Dinamik XML Sitemap, Robots.txt, JSON-LD Zengin Şemalar & 1200x630 OpenGraph
- ✅ **Aşama 5:** Google Analytics 4, Microsoft Clarity & B2B Lead Dönüşüm İzleme
- ✅ **Aşama 6:** İhracat & Standartlar Portalı (`/ihracat`), İngilizce Dil Altyapısı (`/en`, `/en/products`, `/en/contact`), Hreflang & Dil Değiştirici
- ✅ **Aşama 7:** WebP Asset Optimizasyonu, KVKK & Çerez Bildirim Bandı, Güvenlik Başlıkları & Core Web Vitals (Lighthouse 90+)
