export type Locale = "tr" | "en";

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const i18nNav: Record<Locale, NavItem[]> = {
  tr: [
    { label: "Ürünler", href: "/urunler" },
    { label: "Özel İmalat", href: "/ozel-uretim" },
    { label: "Sektörler", href: "/sektorler" },
    { label: "Standartlar", href: "/ihracat" },
    { label: "Teknik Bilgi", href: "/teknik-bilgi" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İletişim", href: "/iletisim" },
  ],
  en: [
    { label: "Products", href: "/en/products" },
    { label: "Custom Mfg", href: "/ozel-uretim" },
    { label: "Sectors", href: "/sektorler" },
    { label: "Standards", href: "/en/export" },
    { label: "About Us", href: "/hakkimizda" },
    { label: "Contact", href: "/en/contact" },
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
