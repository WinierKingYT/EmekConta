import { CompanyProfile } from "@/lib/types";

export const companyData: CompanyProfile = {
  name: "Emek Conta",
  brandTitle: "Endüstriyel Sızdırmazlık Çözümleri",
  foundingYear: 1997,
  coreMessage: "1997'den beri sanayi ve denizcilik için güvenilir sızdırmazlık çözümleri.",
  subMessage: "Standart ürünlerden teknik resim ve numuneye göre özel üretime kadar endüstriyel ihtiyaçlara özel çözümler.",
  phone: "+902122932509",
  phoneFormatted: "+90 (212) 293 25 09",
  whatsapp: "+905442230828",
  whatsappFormatted: "+90 (544) 223 08 28",
  email: "info@emekconta.com",
  quoteEmail: "teklif@emekconta.com",
  locations: [
    {
      name: "İmalat & Fabrika (Merkez)",
      type: "Merkez / İmalat",
      address: "İkitelli Organize Sanayi Bölgesi, Atatürk Oto Sanayi Sitesi 4.Yol No:96",
      district: "Başakşehir",
      city: "İstanbul",
      phone: "+90 (212) 486 36 11",
      email: "imalat@emekconta.com",
      workingHours: "Hafta içi: 08:30 – 18:00 | Cumartesi: 08:30 – 13:00",
      mapEmbedQuery: "Ataturk+Oto+Sanayi+Sitesi+4.Yol+No:96+Ikitelli+Istanbul",
    },
    {
      name: "Karaköy Satış Şubesi",
      type: "Satış / Şube",
      address: "Kemankeş Karamustafapaşa Mah. Perşembe Pazarı Cad.",
      district: "Beyoğlu",
      city: "İstanbul",
      phone: "+90 (212) 293 25 09",
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
