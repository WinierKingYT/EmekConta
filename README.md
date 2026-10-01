# EMEK CONTA — B2B Endüstriyel Sızdırmazlık Platformu

[![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Pages](https://img.shields.io/badge/SSG_Static_Pages-75-emerald?style=flat)]()
[![Code Quality](https://img.shields.io/badge/ESLint-0_Errors_|_0_Warnings-brightgreen?style=flat)]()
[![Lighthouse](https://img.shields.io/badge/Performance-Lighthouse_90+-orange?style=flat)]()

**Emek Conta** için geliştirilmiş; satın almacılar, fabrika bakım şefleri ve makine mühendislerinin teknik resim, numune veya standart ölçülere göre resmi teklif (RFQ) almasını sağlayan yüksek performanslı, çok dilli ve kurumsal B2B üretici web platformu.

---

## 🏗️ 7 Aşamalı Mimari & Özellik Matrisi

Proje, endüstriyel standartlara tam uyumlu 7 aşamalı yol haritası ile eksiksiz olarak tamamlanmıştır:

### 1. Temel Mimari & B2B Arayüz (Aşama 1)
- **Çift Modlu Hero Vitrini:** Stüdyo fotoğraf vitrini ve vektörel ASME B16.20 teknik çizim blueprint modu.
- **İnteraktif Malzeme Seçici:** Akışkan türü, sıcaklık ve basınca göre optimum conta önerisi.
- **Anasayfa CAD/Çizim Dropzone:** Sürükle-bırak CAD (.dwg, .dxf, .step, .pdf) yükleme alanı ve 2 saatlik SLA taahhüdü.
- **12 Ürün & 10 Sektör Mimarisi:** Denizcilik, rafineri, enerji, demir-çelik ve kimya sektörlerine özel sayfalar.

### 2. İletişim & Dönüşüm Altyapısı (Aşama 2)
- **WhatsApp Floating Buton:** Canlı durum göstergeli, erişilebilir kurumsal WhatsApp iletişim düğmesi (`+90 546 419 19 38`).
- **Resend RFQ E-Posta Entegrasyonu:** Detaylı teklif, hızlı çizim, sepet ve bayi başvurularını HTML formatında anında satış ekibine (`info@emekconta.com`) ileten `/api/rfq` API rotası.
- **Otomatik Müşteri Teyit E-Postası:** Müşteriye özel referans kodlu (`EC-XXXXXX`) profesyonel teyit e-postası ve SLA bilgilendirmesi.

### 3. B2B Satış Araçları (Aşama 3)
- **Toplu Teklif Sepeti (RFQ Cart):** LocalStorage destekli, sayfa değiştirmeden teklif listesi oluşturma (`RfqCartDrawer`, `/teklif-sepeti`).
- **12 Teknik PDF Datasheet (TDS):** DIN/ASME standartlarına uygun, yazdırılabilir (`@media print`) ve tek tıkla PDF kaydedilebilir teknik föyler (`/urunler/[slug]/datasheet`).
- **B2B Bayi / Toptancı Başvuru Portalı (`/bayi-basvuru`):** Ticari sicil, yıllık alım hacmi ve depo bilgilerini toplayan kurumsal ortaklık akışı.

### 4. SEO & Zengin Veri (Aşama 4)
- **Dinamik 75 Rotalı Sitemap (`app/sitemap.ts`):** Tüm statik, sektörel, ürün ve İngilizce sayfaları dinamik indeksleyen site haritası.
- **Zengin JSON-LD Şemaları:** `Organization`, `LocalBusiness`, `Manufacturer`, `WebSite`, `Product`, `AggregateOffer`, `BreadcrumbList`, `Service` ve `Article`.
- **Dinamik 1200x630 OpenGraph Görseli (`app/opengraph-image.tsx`):** Sosyal medya ve mesajlaşma paylaşımları için otomatik görsel oluşturucu.
- **GSC Doğrulaması & Canonical URL:** `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` desteği ve canonical etiketler.

### 5. Analitik & Lead Takibi (Aşama 5)
- **Google Analytics 4 (GA4):** `generate_lead`, `contact`, `view_datasheet` standart e-ticaret/B2B dönüşüm olayları.
- **Microsoft Clarity:** Kullanıcı oturum kayıtları, ısı haritaları ve `setClarityTag` ile lead referans etiketleme.
- **Dönüşüm İzleyicileri:** 5 farklı RFQ formu, telefon aramaları, WhatsApp tıklamaları ve teknik föy indirmeleri.

### 6. İhracat & Çoklu Dil (Aşama 6)
- **İngilizce Uluslararası Portal (`/en`):** Uluslararası tersane ve rafineriler için İngilizce ana sayfa, ürün kataloğu (`/en/products`) ve 12 ürün detay sayfası (`/en/products/[slug]`).
- **Global İhracat Sayfası (`/ihracat` & `/en/export`):** ASME B16.20, DIN EN 1514-1/2, EN 10204 3.1 MTR sertifikasyonu ve hava/deniz lojistik kılavuzu.
- **İngilizce Uluslararası RFQ Formu (`/en/contact`):** Global müşteriler için CIF/FOB teslimat seçenekli teklif portalı.
- **Akıllı Dil Değiştirici (`LanguageSwitcher.tsx`):** Bulunulan rotayı tanıyan ve 1:1 dil geçişi sunan TR ↔ EN bileşeni.

### 7. Performans, Yasal Uyumluluk & Canlıya Hazırlık (Aşama 7)
- **WebP Görsel Sıkıştırması:** %85 – %97 boyut tasarruflu WebP katalog görselleri.
- **KVKK Aydınlatma Metni (`/kvkk`):** 6698 sayılı Kişisel Verilerin Korunması Kanunu'na tam uyumlu yasal bildirim.
- **Çerez Politikası (`/cerez-politikasi`):** Çerez kategorileri, saklama süreleri ve tarayıcı yönetim rehberi.
- **Çerez Tercih Bandı (`CookieConsentBanner.tsx`):** Google Analytics ve Microsoft Clarity Consent Mode v2 ile senkronize, kullanıcı dostu çerez bandı.
- **Lighthouse 90+ & Güvenlik Başlıkları:** `next.config.mjs` üzerinde Gzip/Brotli sıkıştırma (`compress: true`), HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` ve 1 yıllık statik varlık önbelleklemesi.

---

## 🛠️ Teknoloji Yığını

| Alan | Teknoloji | Açıklama |
|---|---|---|
| **Framework** | Next.js 14.2.35 (App Router) | Hibrit SSG / ISR mimarisi, Edge API desteği |
| **Dil** | TypeScript 5.6 | Sıkı tip denetimi ve sıfır hata toleransı |
| **Stil** | Tailwind CSS 3.4 | Endüstriyel palet (Pas, Gece Mavisi, Tuğla, Çelik) |
| **E-Posta** | Resend SDK | Transaksiyonel RFQ bildirimleri ve teyit mektubu |
| **Analitik** | GA4 & Microsoft Clarity | B2B lead takibi ve Consent Mode v2 |
| **Görsel** | Sharp / WebP / Next Image | Yüksek sıkıştırma, responsive srcset |
| **Kod Kalitesi** | ESLint 8 (`next/core-web-vitals`) | 0 hata, 0 uyarı |

---

## ⚙️ Çevre Değişkenleri (.env.local)

Projeyi tam fonksiyonel olarak çalıştırmak için kök dizinde `.env.local` dosyası oluşturun:

```bash
# E-Posta Gönderimi (Resend)
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=Emek Conta <info@emekconta.com>
NOTIFICATION_EMAIL=info@emekconta.com

# Analitik & Takip (İsteğe Bağlı)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=xxxxxxxxxx

# Arama Motoru Doğrulaması (İsteğe Bağlı)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=google-site-verification=xxxxxxxxxxxxxxx
```

> **Not:** E-posta veya analitik anahtarları girilmediğinde sistem hata fırlatmaz; yerel geliştirme modunda güvenli simülasyon (`console.debug`) logları üretilir.

---

## 📦 Kurulum ve Çalıştırma

```bash
# 1. Bağımlılıkları yükleyin
npm install

# 2. Geliştirme sunucusunu başlatın
npm run dev

# 3. Tarayıcınızda açın
http://localhost:3000
```

---

## 🏗️ Derleme ve Doğrulama

```bash
# Kod standartları denetimi (0 hata, 0 uyarı garantisi)
npm run lint

# Üretim derlemesi (75 sayfanın tamamı SSG olarak derlenir)
npm run build

# Üretim sunucusunu yerel ortamda çalıştırma
npm run start
```

---

## 📁 Proje Dizin Mimarisi

```text
├── app/                          # Next.js App Router Rotaları
│   ├── api/rfq/                  # Resend RFQ ve e-posta API rotası
│   ├── bayi-basvuru/             # B2B Bayi / Toptancı başvuru portalı
│   ├── cerez-politikasi/         # Çerez (Cookie) kullanım politikası
│   ├── en/                       # İngilizce Uluslararası Portalı
│   │   ├── contact/              # Uluslararası RFQ formu
│   │   ├── export/               # ASME & DIN İhracat rehberi
│   │   ├── products/             # İngilizce ürün kataloğu
│   │   │   └── [slug]/           # 12 İngilizce ürün detay sayfası (SSG)
│   │   └── page.tsx              # İngilizce ana sayfa
│   ├── hakkimizda/               # Kurumsal geçmiş, uzmanlık & sertifikalar
│   ├── ihracat/                  # Uluslararası Standartlar (ASME/DIN) landing page
│   ├── iletisim/                 # Karaköy satış ve iletişim ofisi
│   ├── kvkk/                     # 6698 sayılı KVKK Aydınlatma Metni
│   ├── ozel-uretim/              # CAD / Teknik resme göre özel conta kesimi
│   ├── sektorler/                # 10 endüstriyel sektör sayfası
│   ├── teklif-iste/              # Kapsamlı RFQ formu ve CAD dropzone
│   ├── teklif-sepeti/            # Toplu teklif sepeti yönetim sayfası
│   ├── teknik-bilgi/             # 6 teknik mühendislik makalesi
│   ├── urunler/                  # Ürün kataloğu ve detay sayfaları
│   │   └── [slug]/               # 12 Türkçe ürün detay sayfası (SSG)
│   │       └── datasheet/        # 12 Teknik PDF Datasheet (TDS) sayfası (SSG)
│   ├── opengraph-image.tsx       # Dinamik 1200x630 OpenGraph üreticisi
│   ├── robots.ts                 # Dinamik robots.txt
│   ├── sitemap.ts                # Dinamik XML sitemap
│   └── layout.tsx                # Kök layout, JSON-LD, Analytics, Cookie Banner
├── components/                   # Modüler React Bileşenleri
│   ├── analytics/                # GA4 ve Clarity script bileşenleri
│   ├── cart/                     # RfqCartDrawer yan çekmece bileşeni
│   ├── distributor/              # Bayi başvuru formu
│   ├── en/                       # İngilizce iletişim formu
│   ├── home/                     # Hero, Vitrin, Dropzone, Malzeme Seçici
│   ├── layout/                   # Header, MobileNav, Footer, LanguageSwitcher
│   ├── legal/                    # CookieConsentBanner çerez tercih bandı
│   ├── products/                 # ProductCard, ProductFilter
│   ├── rfq/                      # RFQForm ve dosya yöneticisi
│   └── ui/                       # Container, Button, Badge, WhatsAppButton, PrintButton
├── data/                         # Veri Modelleri & İçerik Depoları
│   ├── company.ts                # Şirket iletişim, lokasyon ve navigasyon verileri
│   ├── products.ts               # 12 Türkçe ürün teknik parametreleri
│   ├── sectors.ts                # 10 Sektör verisi
│   ├── articles.ts               # Teknik makaleler ve rehberler
│   └── en/products.ts            # 12 İngilizce ürün parametresi ve kategorileri
├── lib/                          # Yardımcı Kütüphaneler
│   ├── analytics.ts              # GA4, Clarity ve Consent Mode v2 fonksiyonları
│   ├── cart-context.tsx          # RFQ Sepeti React Context & LocalStorage altyapısı
│   ├── i18n.ts                   # Çoklu dil sözlükleri ve navigasyon rotaları
│   └── types.ts                  # TypeScript alan tipi tanımları
├── public/                       # Statik Varlıklar
│   ├── images/hero/              # Sıkıştırılmış WebP vitrin görselleri
│   └── images/products/          # Sıkıştırılmış WebP ürün fotoğrafları
├── next.config.mjs               # Güvenlik başlıkları, sıkıştırma ve WebP ayarları
└── ROADMAP_VE_TALIMATLAR.md      # 7 Aşamalı tam proje şartnamesi ve durum kaydı
```

---

## 📄 Lisans ve Mülkiyet

Telif Hakkı © 2026 **Emek Conta Sanayi ve Ticaret**. Tüm hakları saklıdır.  
Endüstriyel Sızdırmazlık Çözümleri • Karaköy / İstanbul
