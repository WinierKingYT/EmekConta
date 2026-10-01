import React from "react";
import { PageHeading } from "@/components/ui/PageHeading";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";

import { ProductCard } from "@/components/products/ProductCard";
import { sectorsData } from "@/data/sectors";
import { productsData } from "@/data/products";

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
    <div className="min-h-screen bg-[#F2EFE9] py-8 text-[#191D20] sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Container>
        <Breadcrumb items={[{ label: "Sektörler", href: "/sektorler" }, { label: sector.name }]} className="mb-10" />
        <PageHeading eyebrow="Emek Conta / Sektörel çözümler" title={sector.name} description={sector.shortDescription} />
        <section className="mb-14 rounded-xl bg-[#191D20] p-7 text-white sm:p-10"><p className="max-w-4xl text-base leading-relaxed text-[#D1D3CC]">{sector.description}</p><ul className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-xs text-[#DD895F]">{sector.standards.map(standard => <li key={standard}>{standard}</li>)}</ul></section>
        <div className="mb-16 grid gap-10 md:grid-cols-2"><section className="border-t border-[#191D20]/20 pt-6"><h2 className="mb-6 text-2xl font-medium tracking-tight">Çalışma şartları ve gereksinimler</h2><ul className="space-y-4 text-sm leading-relaxed text-[#62635F]">{sector.challenges.map(challenge => <li key={challenge} className="border-b border-[#191D20]/10 pb-4">{challenge}</li>)}</ul></section><section className="border-t border-[#191D20]/20 pt-6"><h2 className="mb-6 text-2xl font-medium tracking-tight">Uygulamaya uygun çözümler</h2><ul className="space-y-4 text-sm leading-relaxed text-[#4D514B]">{sector.solutions.map(solution => <li key={solution} className="border-b border-[#191D20]/10 pb-4">{solution}</li>)}</ul></section></div>
        {recommendedProducts.length > 0 && <section className="mb-16"><div className="mb-8 flex flex-wrap items-end justify-between gap-5"><h2 className="text-3xl font-medium tracking-tight">Bu sektör için ürünler</h2><Link href="/urunler" className="text-sm text-[#96350B] underline underline-offset-4">Tüm ürünleri incele</Link></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{recommendedProducts.map(product => <ProductCard key={product.id} product={product} />)}</div></section>}
        <section className="flex flex-col justify-between gap-6 rounded-xl bg-[#E7E3DC] p-7 sm:p-10 lg:flex-row lg:items-center"><div><h2 className="text-2xl font-medium tracking-tight">Uygulamanızı birlikte değerlendirelim.</h2><p className="mt-3 text-sm text-[#62635F]">Ölçü, sıcaklık, basınç ve akışkan bilgilerinizi paylaşın.</p></div><Button href="/teklif-iste" variant="accent" size="lg">Teknik teklif iste ↗</Button></section>
      </Container>
    </div>
  );
}
