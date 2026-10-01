export type Locale = "tr" | "en";

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const i18nNav: Record<Locale, NavItem[]> = {
  tr: [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: "Sektörler", href: "/sektorler" },
    { label: "Özel Üretim", href: "/ozel-uretim", badge: "CAD/CNC" },
    { label: "İhracat & Standartlar", href: "/ihracat", badge: "ASME/DIN" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Teknik Bilgi", href: "/teknik-bilgi" },
    { label: "İletişim", href: "/iletisim" },
  ],
  en: [
    { label: "Home", href: "/en" },
    { label: "Products", href: "/en/products" },
    { label: "Export & Standards", href: "/en/export", badge: "ASME/DIN" },
    { label: "Custom Mfg", href: "/ozel-uretim", badge: "CAD/CNC" },
    { label: "Sample Kit", href: "/numune-talep", badge: "Free" },
    { label: "About Us", href: "/hakkimizda" },
    { label: "Contact & RFQ", href: "/en/contact" },
  ],
};

export const i18nDict = {
  tr: {
    siteTitle: "Emek Conta | Endüstriyel Sızdırmazlık Çözümleri (1997'den Beri)",
    requestQuote: "Teklif İste",
    sampleKit: "Numune Talep Et",
    quoteCart: "Teklif Listem",
    technicalDatasheet: "Teknik Föy (TDS)",
    contactUs: "İletişim",
    exportBadge: "Global Teslimat",
    allProducts: "Tüm Ürünler",
    customGaskets: "Özel Conta İmalatı",
    standardsCompliance: "ASME & DIN Normlarına Tam Uyum",
    productionExperience: "27+ Yıllık İmalat Tecrübesi",
  },
  en: {
    siteTitle: "Emek Gaskets | Industrial Sealing Solutions & Gasket Manufacturing Since 1997",
    requestQuote: "Request a Quote",
    sampleKit: "Request Sample Kit",
    quoteCart: "Quote List",
    technicalDatasheet: "Technical Datasheet (TDS)",
    contactUs: "Contact Sales",
    exportBadge: "Global Delivery",
    allProducts: "All Products",
    customGaskets: "Custom Gasket Fabrication",
    standardsCompliance: "Full ASME & DIN Standards Compliance",
    productionExperience: "27+ Years Manufacturing Expertise",
  },
};
