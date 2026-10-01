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

### 🟣 Aşama 6: İhracat & Çoklu Dil
- **6.1 İngilizce Versiyon (`/en`):** `next-intl` ile yabancı tersane ve petrokimya firmaları için tam İngilizce dil desteği.
- **6.2 Uluslararası Standartlar İhracat Sayfası:** ASME, DIN, EN, ISO normlarına tam uyumu öne çıkaran ihracat odaklı landing page.
- **6.3 Arapça Versiyon (Opsiyonel):** Körfez ülkeleri ve Ortadoğu pazarı için RTL layout.

### ⚪ Aşama 7: Performans & Yasal Uyumluluk
- **7.1 WebP Görsel Dönüşümü:** Ürün görsellerinin sıkıştırılması ve optimize edilmesi.
- **7.2 KVKK & Çerez Bildirimi:** Sade, kullanıcıyı rahatsız etmeyen yasal çerez bandı.
- **7.3 Lighthouse 90+:** Mobil ve masaüstü Core Web Vitals optimizasyonu.

---

## 🤖 4. YENİ SOHBETTEKİ MODEL / ACENTE İÇİN TALİMATLAR

Sevgili yapay zeka asistanı, bu projeyi devraldığında lütfen aşağıdaki kritik kurallara titizlikle uy:

1. **Terminal / Shell Kuralı (Windows PowerShell):**
   - Komutları zincirlemek için `&&` **KULLANMA**. PowerShell `&&` karakterini tanımaz.
   - Komutları tek tek çalıştır (`git add .`, ardından `git commit ...`, ardından `git push ...`).
   - Node komutları için `npm.cmd` kullan.

2. **Tasarım Bütünlüğü Kuralı:**
   - Asla aşırı yuvarlatılmış (pill/tam yuvarlak) köşeler yapma. Kartlar için `rounded-xl`, buton/inputlar için `rounded-lg`, etiketler için `rounded-md` standardını koru.
   - Renkleri asla bozma (`rust: #b7410e`, `brick: #c04657`, `night: #1a2536`, `industrial-50: #f4f6f8`).

3. **Derleme ve Tip Güvenliği:**
   - Her kod değişikliğinden sonra mutlaka `npm.cmd run lint` ve `npm.cmd run build` komutlarıyla derlemeyi doğrula.
   - Hata ve uyarı bırakma.

4. **Kullanıcı Kısıtları:**
   - Kullanıcının açıkça "istemiyorum" dediği özellikleri (hesaplayıcılar, videolar, sosyal medya, sadakat bülteni) asla gündeme getirme veya eklemeye kalkışma.
   - Doğrudan yukarıdaki **İstenen Yol Haritası** doğrultusunda çalış.

5. **Sıradaki Aşama Önerisi:**
   - **Aşama 2**, **Aşama 3**, **Aşama 4** ve **Aşama 5** başarıyla tamamlandı ve doğrulandı. Sıradaki adım **Aşama 6: İhracat & Çoklu Dil** (Uluslararası standartlar ASME/DIN ihracat landing page'i, `/en` İngilizce dil altyapısı ve küresel tersane/petrokimya B2B içerikleri).
