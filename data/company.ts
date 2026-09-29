import { CompanyProfile } from "@/lib/types";

export const companyData: CompanyProfile = {
  name: "Emek Conta",
  brandTitle: "Endüstriyel Sızdırmazlık Çözümleri",
  foundingYear: 1997,
  coreMessage: "1997'den beri sanayi ve denizcilik için güvenilir sızdırmazlık çözümleri.",
  subMessage: "Standart ürünlerden teknik resim ve numuneye göre özel üretime kadar endüstriyel ihtiyaçlara özel çözümler.",
  phone: "+902120000000", // CONTENT_REQUIRED: Gerçek santral numarası bekleniyor
  phoneFormatted: "+90 (212) 000 00 00",
  whatsapp: "+905000000000", // CONTENT_REQUIRED: Gerçek kurumsal WhatsApp hattı bekleniyor
  whatsappFormatted: "+90 (500) 000 00 00",
  email: "info@emekconta.com",
  quoteEmail: "teklif@emekconta.com",
  locations: [
    {
      name: "İmalat & Fabrika (Merkez)",
      type: "Merkez / İmalat",
      address: "İkitelli Organize Sanayi Bölgesi (Adres teyit aşamasında)", // CONTENT_REQUIRED: Tam açık adres
      district: "Başakşehir",
      city: "İstanbul",
      phone: "+90 (212) 000 00 00",
      email: "imalat@emekconta.com",
      workingHours: "Hafta içi: 08:30 – 18:00 | Cumartesi: 08:30 – 13:00",
      mapEmbedQuery: "Ikitelli+OSB+Istanbul",
    },
    {
      name: "Karaköy Satış Şubesi",
      type: "Satış / Şube",
      address: "Karaköy Perşembe Pazarı Cad. (Adres teyit aşamasında)", // CONTENT_REQUIRED: Tam açık adres
      district: "Beyoğlu",
      city: "İstanbul",
      phone: "+90 (212) 000 00 00",
      email: "karakoy@emekconta.com",
      workingHours: "Hafta içi: 08:30 – 18:00 | Cumartesi: 08:30 – 13:00",
      mapEmbedQuery: "Persembe+Pazari+Karakoy+Istanbul",
    },
  ],
};

export const mainNavItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Ürünler", href: "/urunler" },
  { label: "Sektörler", href: "/sektorler" },
  { label: "Özel Üretim", href: "/ozel-uretim", badge: "CAD/CNC" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Teknik Bilgi", href: "/teknik-bilgi" },
  { label: "İletişim", href: "/iletisim" },
];

export const trustPillars = [
  { label: "1997'den Beri", detail: "27+ Yıllık Üretim Tecrübesi" },
  { label: "Özel Üretim", detail: "Numune ve Özel Ölçü İmalatı" },
  { label: "Teknik Resme Göre", detail: "CAD, DXF ve Teknik Çizim İşleme" },
  { label: "Gemi & Sanayi", detail: "Ağır Şart ve Denizcilik Standartları" },
  { label: "İstanbul Merkez", detail: "Fabrika & Karaköy Dağıtım Noktası" },
];
