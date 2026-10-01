import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
import { RfqCartProvider } from "@/lib/cart-context";
import { RfqCartDrawer } from "@/components/cart/RfqCartDrawer";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import { CookieConsentBanner } from "@/components/legal/CookieConsentBanner";
import { companyData } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: "#17191C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://emekconta.com"),
  title: {
    default: "Emek Conta | Endüstriyel Sızdırmazlık Çözümleri",
    template: "%s | Emek Conta",
  },
  description:
    "Sanayi ve denizcilik için güvenilir endüstriyel sızdırmazlık çözümleri. Spiral sarımlı contalar, saf grafit, klingrit, kauçuk ve teknik resme göre özel conta üretimi.",
  keywords: [
    "emek conta",
    "endüstriyel conta",
    "spiral sarımlı conta",
    "grafit conta",
    "klingrit conta",
    "özel conta üretimi",
    "gemi contası",
    "sızdırmazlık elemanları",
    "flanş contası",
    "İstanbul conta imalatı",
  ],
  authors: [{ name: "Emek Conta Sanayi ve Ticaret" }],
  creator: "Emek Conta",
  publisher: "Emek Conta",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://emekconta.com",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://emekconta.com",
    title: "Emek Conta | Endüstriyel Sızdırmazlık Çözümleri",
    description:
      "Standart sızdırmazlık ürünlerinden teknik resim ve numuneye göre özel üretime kadar sanayi ve denizcilik uygulamaları için güvenilir çözümler.",
    siteName: "Emek Conta",
    images: [
      {
        url: "https://emekconta.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Emek Conta Endüstriyel Sızdırmazlık Çözümleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emek Conta | Endüstriyel Sızdırmazlık Çözümleri",
    description:
      "Sanayi ve denizcilik için güvenilir endüstriyel sızdırmazlık çözümleri imalatçısı.",
    images: ["https://emekconta.com/opengraph-image.png"],
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      "google-site-verification=EMEK_CONTA_OFFICIAL_GSC_TOKEN",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Organization, LocalBusiness & Manufacturer Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "Manufacturer"],
    name: "Emek Conta",
    legalName: "Emek Conta Sanayi ve Ticaret",
    url: "https://emekconta.com",
    logo: "https://emekconta.com/logo.png",
    image: "https://emekconta.com/opengraph-image.png",
    description:
      "Sanayi ve denizcilik sektörleri için standart ve özel üretim endüstriyel conta ve sızdırmazlık çözümleri imalatçısı.",
    telephone: companyData.phone,
    email: companyData.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.locations[0].address,
      addressLocality: companyData.locations[0].district,
      addressRegion: companyData.locations[0].city,
      addressCountry: "TR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "13:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: companyData.phone,
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["Turkish", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: companyData.whatsapp,
        contactType: "sales",
        areaServed: "TR",
        availableLanguage: ["Turkish", "English"],
      },
    ],
    department: companyData.locations.map((loc) => ({
      "@type": ["LocalBusiness", "Store"],
      name: `Emek Conta - ${loc.name}`,
      telephone: loc.phone,
      email: loc.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressLocality: loc.district,
        addressRegion: loc.city,
        addressCountry: "TR",
      },
      openingHours: "Mo-Fr 08:30-18:00, Sa 08:30-13:00",
    })),
  };

  return (
    <html lang="tr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-industrial-50 text-industrial-900 selection:bg-steel-blue selection:text-white">
        <RfqCartProvider>
          <Header />
          <main className="flex-1 w-full" id="main-content">
            {children}
          </main>
          <Footer />
          <WhatsAppFloatingButton />
          <RfqCartDrawer />
          <AnalyticsScripts />
          <CookieConsentBanner />
        </RfqCartProvider>
      </body>
    </html>
  );
}
