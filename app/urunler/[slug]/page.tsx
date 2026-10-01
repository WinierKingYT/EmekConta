import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

import { TechnicalTable, Column } from "@/components/ui/TechnicalTable";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductDetailActions } from "@/components/products/ProductDetailActions";
import { productsData } from "@/data/products";
import { ProductSpecification } from "@/lib/types";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return productsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = productsData.find((p) => p.slug === params.slug);
  if (!product) return {};

  const ogImageUrl = product.image
    ? `https://emekconta.com${product.image}`
    : "https://emekconta.com/opengraph-image.png";

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: {
      canonical: `https://emekconta.com/urunler/${product.slug}`,
    },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url: `https://emekconta.com/urunler/${product.slug}`,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: product.image ? 800 : 1200,
          height: product.image ? 800 : 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.seoTitle,
      description: product.seoDescription,
      images: [ogImageUrl],
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = productsData.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = productsData.filter((p) =>
    product.relatedProductSlugs.includes(p.slug)
  );

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image
      ? `https://emekconta.com${product.image}`
      : "https://emekconta.com/opengraph-image.png",
    category: product.category,
    sku: `EC-${product.slug.toUpperCase()}`,
    mpn: `EC-MPN-${product.slug.toUpperCase()}`,
    brand: {
      "@type": "Brand",
      name: "Emek Conta",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Emek Conta Sanayi ve Ticaret",
      url: "https://emekconta.com",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
      price: "0.00",
      priceValidUntil: "2027-12-31",
      url: `https://emekconta.com/urunler/${product.slug}`,
      seller: {
        "@type": "Organization",
        name: "Emek Conta",
      },
    },
    additionalProperty: product.specifications.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.property,
      value: spec.value,
      propertyID: spec.standard || undefined,
    })),
  };

  // Table columns for technical specifications
  const specColumns: Column<ProductSpecification>[] = [
    {
      key: "property",
      header: "Teknik Parametre",
      className: "font-medium text-[#191D20] w-1/3",
    },
    {
      key: "value",
      header: "Değer / Tip",
      className: "text-[#4D514B]",
    },
    {
      key: "standard",
      header: "İlgili Standart",
      className: "text-[#96350B] text-xs font-medium",
    },
    {
      key: "notes",
      header: "Açıklama & Not",
      className: "text-xs text-[#62635F]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2EFE9] py-8 text-[#191D20] sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Container>
        <Breadcrumb items={[{ label: "Ürünler", href: "/urunler" }, { label: product.name }]} className="mb-10" />
        <div className="mb-20 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-[#E4E0D8]">
            {product.image ? <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-8 mix-blend-multiply sm:p-12" /> : <span className="absolute inset-0 flex items-center justify-center px-8 text-center text-[#62635F]">{product.imagePlaceholderText}</span>}
          </div>
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#A23A10]">Emek Conta / Sızdırmazlık çözümleri</p>
            <h1 className="text-3xl font-medium leading-[1.12] tracking-[-0.045em] sm:text-4xl xl:text-5xl">{product.name}</h1>
            <p className="mt-6 text-base leading-relaxed text-[#62635F]">{product.shortDescription}</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#96350B]">{product.standards.map(standard => <span key={standard}>{standard}</span>)}</div>
            <ul className="mt-7 space-y-3 border-t border-[#191D20]/15 pt-6">{product.features.map(feature => <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-[#4D514B]"><span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#B7410E]" />{feature}</li>)}</ul>
            <div className="mt-8"><ProductDetailActions product={product} /></div>
          </div>
        </div>
        <section className="mb-16 border-t border-[#191D20]/15 pt-10">
          <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#A23A10]">Ürün verileri</p><h2 className="mb-7 text-3xl font-medium tracking-tight">Teknik özellikler ve standartlar</h2>
          <TechnicalTable columns={specColumns} data={product.specifications} caption={`${product.name} teknik özellikleri ve standart değerleri`} />
          <p className="mt-4 text-xs leading-relaxed text-[#62635F]">Tablodaki değerler tipik referanslardır. Malzemenin sıcaklık, basınç ve akışkan uyumunu uygulamanız için teknik ekibimizle teyit edebilirsiniz.</p>
        </section>
        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <section className="border-t border-[#191D20]/15 pt-6"><h2 className="mb-6 text-2xl font-medium tracking-tight">Malzeme seçenekleri</h2><ul className="space-y-4 text-sm leading-relaxed text-[#4D514B]">{product.materials.map(material => <li key={material} className="border-b border-[#191D20]/10 pb-4">{material}</li>)}</ul></section>
          <section className="border-t border-[#191D20]/15 pt-6"><h2 className="mb-6 text-2xl font-medium tracking-tight">Uygulama alanları</h2><ul className="space-y-4 text-sm leading-relaxed text-[#4D514B]">{product.applications.map(application => <li key={application} className="border-b border-[#191D20]/10 pb-4">{application}</li>)}</ul></section>
        </div>
        <section className="mb-16 grid gap-6 border-t border-[#191D20]/15 pt-8 lg:grid-cols-3"><h2 className="text-2xl font-medium tracking-tight">Ürünü yakından tanıyın.</h2><p className="text-sm leading-loose text-[#4D514B] lg:col-span-2">{product.description}</p></section>
        {relatedProducts.length > 0 && <section className="pb-8"><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><h2 className="text-3xl font-medium tracking-tight">İlgili ürünler</h2><Link href="/urunler" className="text-sm text-[#96350B] underline underline-offset-4">Tüm ürünleri incele</Link></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{relatedProducts.map(relatedProduct => <ProductCard key={relatedProduct.id} product={relatedProduct} />)}</div></section>}
      </Container>
    </div>
  );
}
