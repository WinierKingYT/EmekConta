import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProductCard } from "@/components/products/ProductCard";
import { sectorsData } from "@/data/sectors";
import { productsData } from "@/data/products";
import {
  ShieldCheckIcon,
  CheckCircleIcon,
  RulerIcon,
  UploadCloudIcon,
  ArrowRightIcon,
} from "@/components/icons/Icons";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return sectorsData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sector = sectorsData.find((s) => s.slug === params.slug);
  if (!sector) return {};

  return {
    title: `${sector.name} Sızdırmazlık Çözümleri | Emek Conta`,
    description: sector.shortDescription,
    alternates: {
      canonical: `https://emekconta.com/sektorler/${sector.slug}`,
    },
    openGraph: {
      title: `${sector.name} Sızdırmazlık Çözümleri | Emek Conta`,
      description: sector.shortDescription,
      url: `https://emekconta.com/sektorler/${sector.slug}`,
      type: "website",
      images: [
        {
          url: "https://emekconta.com/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: `${sector.name} Sızdırmazlık Çözümleri`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${sector.name} Sızdırmazlık Çözümleri | Emek Conta`,
      description: sector.shortDescription,
      images: ["https://emekconta.com/opengraph-image.png"],
    },
  };
}

export default function SectorDetailPage({ params }: Props) {
  const sector = sectorsData.find((s) => s.slug === params.slug);

  if (!sector) {
    notFound();
  }

  // Find recommended products for this sector
  const recommendedProducts = productsData.filter((p) =>
    sector.recommendedProducts.includes(p.slug)
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${sector.name} Sızdırmazlık Çözümleri`,
    description: sector.description,
    provider: {
      "@type": "Organization",
      name: "Emek Conta Sanayi ve Ticaret",
      url: "https://emekconta.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Turkey",
    },
    serviceType: "Endüstriyel Conta İmalatı ve Flanş Sızdırmazlık Mühendisliği",
    url: `https://emekconta.com/sektorler/${sector.slug}`,
  };

  return (
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Sektörler", href: "/sektorler" },
            { label: sector.name },
          ]}
          className="mb-6"
        />

        {/* Sector Hero */}
        <div className="bg-industrial-900 text-white border border-industrial-800 rounded-xl p-8 sm:p-12 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-industrial-800 border border-industrial-700 text-xs font-mono text-industrial-300 mb-6 uppercase tracking-wider rounded-md">
              <span className="w-2 h-2 bg-steel-blue rounded-full" />
              SEKTÖREL MÜHENDİSLİK ÇÖZÜMLERİ
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {sector.name} İçin <br />
              <span className="text-steel-blue">Güvenilir Sızdırmazlık</span> Çözümleri
            </h1>

            <p className="mt-6 text-base sm:text-lg text-industrial-300 leading-relaxed">
              {sector.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {sector.standards.map((std, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-industrial-850 border border-industrial-700 text-xs font-mono text-industrial-300 rounded-md"
                >
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Challenges vs Solutions 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Challenges */}
          <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-industrial-900 mb-4 pb-3 border-b border-industrial-100 flex items-center gap-2">
              <span className="text-red-600 font-mono font-bold">!</span>
              <span>Sektörel Zorluklar & Riskler</span>
            </h2>
            <ul className="space-y-3.5">
              {sector.challenges.map((ch, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-industrial-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-1.5 shrink-0" />
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-industrial-900 mb-4 pb-3 border-b border-industrial-100 flex items-center gap-2">
              <ShieldCheckIcon className="w-5 h-5 text-steel-blue" />
              <span>Emek Conta Mühendislik Çözümleri</span>
            </h2>
            <ul className="space-y-3.5">
              {sector.solutions.map((sol, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-industrial-700">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recommended Products for this Industry */}
        {recommendedProducts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-mono text-steel-darkblue uppercase tracking-wider block">
                  ÖNERİLEN ÜRÜNLER
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-industrial-900">
                  {sector.name} İçin Temel Sızdırmazlık Ürünleri
                </h2>
              </div>
              <Link href="/urunler" className="text-xs font-mono text-steel-blue hover:underline hidden sm:inline">
                Tüm Kataloğu Gör →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {recommendedProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        )}

        {/* Sector RFQ Callout */}
        <div className="bg-industrial-950 text-white border border-industrial-800 rounded-xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {sector.name} Tesisiniz İçin Teklif Alın
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-industrial-400 max-w-xl mx-auto leading-relaxed">
            Teknik çizim veya çalışma sıcaklık/basınç değerlerinizi iletin; mühendislerimiz sektör standardına uygun malzeme seçimini yaparak aynı gün teklif hazırlasın.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={`/teklif-iste?sektor=${encodeURIComponent(sector.name)}`}
              variant="accent"
              size="lg"
            >
              <UploadCloudIcon className="w-5 h-5 mr-2" />
              Sektörel Teklif Talebi Gönder
            </Button>
            <Button href="/iletisim" variant="outline" size="lg" className="text-white border-industrial-700 hover:border-white">
              Teknik Danışmanlık Al
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
