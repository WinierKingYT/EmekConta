# EMEK CONTA — B2B Endüstriyel Sızdırmazlık Web Sitesi

Emek Conta (1997'den beri) için geliştirilmiş modern, yüksek performanslı, güven telkin eden ve tam SEO uyumlu B2B kurumsal web platformu.

Bu site klasik bir e-ticaret sitesi değildir; satın almacılar, fabrika bakım şefleri ve makine mühendislerinin teknik resim, numune veya standart ölçülere göre hızlı ve güvenilir biçimde resmi teklif (RFQ) almasını sağlayan endüstriyel bir üretici platformudur.

---

## 🚀 Öne Çıkan Özellikler

1. **Çift Modlu Hero Vitrini (Studio Showcase & CAD):**
   - **3'lü İnteraktif Stüdyo Vitrini:** Softbox aydınlatmalı stüdyo ortamında çekilmiş onlarca endüstriyel conta, salmastra ve mühendislik plastiğini sergileyen otomatik döngülü vitrin.
   - **Vektörel CAD Şematiği:** Tek tıkla ASME B16.20 Class 300 ölçülendirilmiş teknik çizim moduna geçiş.
2. **İnteraktif Malzeme & Çalışma Koşulu Seçim Aracı:**
   - Akışkan (Buhar, Asit/Kimyasal, Deniz Suyu, Akaryakıt, Gıda), sıcaklık ve basınca göre anında en doğru sızdırmazlık contasını ve standart normunu hesaplar.
3. **Anasayfa Hızlı Çizim & Numune Dropzone:**
   - Ziyaretçilerin doğrudan anasayfadan CAD (DWG, DXF, STEP, PDF) veya numune fotoğraflarını sürükleyip 2 saatte proforma teklif talep etmesini sağlayan yüksek dönüşümlü B2B modülü.
4. **Kapsamlı Ürün & Sektör Mimarisi:**
   - 12 Ürün Grubu (Spiral sarımlı, telli grafit, Klingrit, PTFE, Viton/EPDM, salmastralar, ambar kapak lastikleri vb.)
   - 10 Endüstriyel Sektör (Denizcilik, Enerji, Petrokimya, Demir-Çelik, Çimento, Gıda vb.)
   - Teknik Bilgi Merkezi (Standartlar, seçim rehberleri, cıvata torklama ve montaj kılavuzları).
5. **Görsel & Yükleme Performansı:**
   - Native `sharp` motoruyla WebP sıkıştırması (toplam katalog boyutunda %88 tasarruf).
   - Ekran üstü (Above-the-fold) görsellerde `priority`, diğerlerinde `lazy loading`.
6. **Mükemmel SEO & Yapısal Veri:**
   - 41 rotayı otomatik indeksleyen dinamik `sitemap.xml` ve `robots.txt`.
   - Schema.org Organization, Breadcrumb ve OpenGraph / Twitter kartları.

---

## 🛠️ Teknoloji Yığını

- **Framework:** Next.js 14 (App Router)
- **Dil:** TypeScript 5.6
- **Stil & Arayüz:** Tailwind CSS 3.4, PostCSS, Autoprefixer
- **Görüntü İşleme:** Sharp (libvips)
- **Kod Kalitesi:** ESLint 8 (`next/core-web-vitals`)
- **İkonlar:** Özel Vektörel SVG Endüstriyel İkon Kütüphanesi

---

## 📦 Kurulum ve Geliştirme

Projeyi yerel ortamınızda çalıştırmak için:

```bash
# 1. Bağımlılıkları yükleyin
npm install

# 2. Geliştirme sunucusunu başlatın
npm run dev

# 3. Tarayıcınızda açın
http://localhost:3000
```

---

## 🏗️ Derleme ve Kalite Kontrol

```bash
# ESLint denetimi (0 hata, 0 uyarı)
npm run lint

# Üretim derlemesi (41 rotanın tamamı statik/dinamik optimize edilir)
npm run build

# Üretim sunucusunu başlatma
npm run start
```

---

## 📁 Proje Dizin Yapısı

```text
├── app/                      # Next.js App Router sayfaları ve rotaları
│   ├── hakkimizda/           # Kurumsal tarihçe ve fabrika bilgileri
│   ├── iletisim/             # Harita, santral, e-posta ve adres
│   ├── ozel-uretim/          # Numuneye & teknik resme göre üretim
│   ├── sektorler/            # Sektörel çözümler ve detay sayfaları
│   ├── teklif-iste/          # Kapsamlı RFQ formu ve dosya yükleme
│   ├── teknik-bilgi/         # Mühendislik kılavuzları ve makaleler
│   ├── urunler/              # Ürün kataloğu ve 12 dinamik ürün sayfası
│   ├── layout.tsx            # Global metadata, fontlar ve layout
│   ├── page.tsx              # Anasayfa
│   ├── sitemap.ts            # Otomatik SEO sitemap üretici
│   └── robots.ts             # Arama motoru robot direktifleri
├── components/               # Modüler React bileşenleri
│   ├── home/                 # Hero, Vitrin, Malzeme Seçici, Dropzone vb.
│   ├── layout/               # Header, Footer, Breadcrumb
│   ├── products/             # ProductCard, ProductFilter
│   ├── rfq/                  # RFQForm ve dosya doğrulayıcı
│   └── ui/                   # Container, Button, Badge
├── data/                     # Merkezi veri modelleri (ürünler, sektörler, makaleler)
├── public/                   # Statik varlıklar (WebP ürün ve stüdyo görselleri)
└── scripts/                  # Görsel optimizasyon ve katalog araçları
```

---

## 📄 Lisans ve Mülkiyet

Telif Hakkı © 1997 - 2026 **Emek Conta Sanayi ve Ticaret**. Tüm hakları saklıdır.
