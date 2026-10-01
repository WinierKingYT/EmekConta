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

### 🟠 Aşama 2: İletişim & Dönüşüm (Öncelikli)
- **2.1 RFQ Formu E-Posta Entegrasyonu:** Resend veya Nodemailer ile `/teklif-iste` ve ana sayfadaki teklif formundan gelen verilerin doğrudan `info@emekconta.com`'a gitmesi.
- **2.2 Müşteri Teyit E-Postası:** Formu dolduran müşteriye otomatik profesyonel "Talebiniz alınmıştır" yanıtı.
- **2.3 WhatsApp Floating Butonu:** Tüm sayfalarda sağ altta sabit, tek tıkla doğrudan WhatsApp RFQ hattına yönlendiren şık buton.
- **2.4 Numune Talep Formu:** `/numune-talep` sayfası — malzeme testi isteyen AR-GE/bakım mühendisleri için numune isteme akışı.

### 🟡 Aşama 3: B2B Satış Araçları
- **3.1 Toplu Teklif Sepeti (RFQ Cart):** Ziyaretçilerin birden fazla contayı seçip tek bir teklif talebinde toplayabilmesi (fiyat olmadan teklif listesi).
- **3.2 Teknik PDF Datasheets:** Ürün sayfalarında "Teknik Föyü İndir (PDF)" butonu (özellikler, basınç-sıcaklık eğrisi, standartlar).
- **3.3 Bayi / Toptancı Başvuru Formu:** `/bayi-basvuru` sayfası — endüstriyel hırdavatçı ve distribütörler için başvuru formu.

### 🟢 Aşama 4: SEO & Bulunabilirlik
- **4.1 Dinamik Sitemap (`app/sitemap.ts`):** 12 ürün, 10 sektör ve 6 teknik makaleyi içeren otomatik güncellenen XML site haritası.
- **4.2 JSON-LD Yapılandırılmış Veri:** `Product`, `LocalBusiness`, `BreadcrumbList` schema'larının sayfalara gömülmesi.
- **4.3 Open Graph & Metadata:** WhatsApp ve LinkedIn'de paylaşıldığında zengin kart ve görsel görünümü.
- **4.4 Google Search Console:** Doğrulama ve sitemap kaydı.

### 🔵 Aşama 5: Analitik & Takip
- **5.1 Google Analytics 4 (GA4):** Next.js Script ile entegrasyon.
- **5.2 Microsoft Clarity:** Kullanıcı oturum kayıtları ve ısı haritaları (tamamen ücretsiz).
- **5.3 RFQ Conversion Tracking:** Teklif formu gönderildiğinde analytics event'i tetikleme.

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

5. **Başlangıç Önerisi:**
   - Yeni oturumda ilk olarak **Aşama 2 (WhatsApp Floating Butonu + RFQ Formu E-Posta)** veya **Aşama 4 (Sitemap & JSON-LD SEO)** ile başlanması en verimli sonucu verir.
