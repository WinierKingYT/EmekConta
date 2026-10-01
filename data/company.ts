import { CompanyProfile } from "@/lib/types";

export const companyData: CompanyProfile = {
  name: "Emek Conta",
  brandTitle: "Endüstriyel Sızdırmazlık Çözümleri",
  foundingYear: 1997,
  coreMessage: "Sanayi ve denizcilik için güvenilir endüstriyel sızdırmazlık çözümleri.",
  subMessage: "Standart ürünlerden teknik resim ve numuneye göre özel üretime kadar endüstriyel ihtiyaçlara özel çözümler.",
  phone: "+905464191938",
  phoneFormatted: "+90 (546) 419 19 38",
  whatsapp: "+905464191938",
  whatsappFormatted: "+90 (546) 419 19 38",
  email: "info@emekconta.com",
  quoteEmail: "info@emekconta.com",
  locations: [
    {
      name: "Karaköy Satış & İletişim Ofisi",
      type: "Satış & İletişim",
      address: "Kemankeş Karamustafapaşa Mah. Perşembe Pazarı Cad.",
      district: "Beyoğlu",
      city: "İstanbul",
      phone: "+90 (546) 419 19 38",
      email: "info@emekconta.com",
      workingHours: "Hafta içi: 08:30 – 18:00 | Cumartesi: 08:30 – 13:00",
      mapEmbedQuery: "Persembe+Pazari+Karakoy+Istanbul",
    },
  ],
};

export const mainNavItems = [
  { label: "Ürünler", href: "/urunler" },
  { label: "Özel Üretim", href: "/ozel-uretim" },
  { label: "Sektörler", href: "/sektorler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Teknik Bilgi", href: "/teknik-bilgi" },
  { label: "İletişim", href: "/iletisim" },
];

export const trustPillars = [
  { label: "DIN & ASME Normu", detail: "Sertifikalı ve Toleranslı İmalat" },
  { label: "Özel Üretim", detail: "Numune ve Özel Ölçü Çözümleri" },
  { label: "Teknik Resme Göre", detail: "CAD, DXF ve Teknik Çizim Kesimi" },
  { label: "Gemi & Sanayi", detail: "Ağır Şart ve Denizcilik Standartları" },
  { label: "Hızlı Sevkiyat", detail: "Karaköy Satış & Türkiye Geneli Teslimat" },
];
