import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { EnglishProductCard } from "@/components/en/EnglishProductGrid";
import { enProductsData } from "@/data/en/products";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return enProductsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = enProductsData.find((p) => p.slug === params.slug);
  if (!product) return {};

  const ogImageUrl = product.image
    ? `https://emekconta.com${product.image}`
    : "https://emekconta.com/opengraph-image.png";

  return {
    title: `${product.name} | Emek Gaskets Turkey`,
    description: product.shortDescription,
    alternates: {
      canonical: `https://emekconta.com/en/products/${product.slug}`,
      languages: {
        "tr-TR": `https://emekconta.com/urunler/${product.slug}`,
        "en-US": `https://emekconta.com/en/products/${product.slug}`,
      },
    },
    openGraph: {
      title: `${product.name} | Emek Gaskets`,
      description: product.shortDescription,
      url: `https://emekconta.com/en/products/${product.slug}`,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.shortDescription,
      images: [ogImageUrl],
    },
  };
}

export default function EnglishProductDetailPage({ params }: Props) {
  const product = enProductsData.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = enProductsData.filter(
    (p) => product.relatedProductSlugs?.includes(p.slug) ?? false
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
      name: "Emek Gaskets",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Emek Conta Sanayi ve Ticaret",
      url: "https://emekconta.com",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      price: "0.00",
      priceValidUntil: "2027-12-31",
      url: `https://emekconta.com/en/products/${product.slug}`,
      seller: {
        "@type": "Organization",
        name: "Emek Gaskets",
      },
    },
    additionalProperty: product.specifications.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.property,
      value: spec.value,
      propertyID: spec.standard || undefined,
    })),
  };

  return (
    <div className="min-h-screen bg-[#F2EFE9] py-8 text-[#191D20] sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Container>
        <Breadcrumb language="en" items={[{ label: "Products", href: "/en/products" }, { label: product.name }]} className="mb-10" />
        <section className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#EAE7E1]">
            {product.image ? <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-10 mix-blend-multiply sm:p-16" /> : <span className="absolute inset-0 flex items-center justify-center text-sm">Product image unavailable</span>}
          </div>
          <div className="py-2 lg:py-8">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-[#96350B]">{product.category}</p>
            <h1 className="text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl">{product.name}</h1>
            <p className="mt-6 text-base leading-relaxed text-[#62635F]">{product.description}</p>
            {(product.pressureRange || product.temperatureRange) && <dl className="mt-8 grid grid-cols-1 gap-6 border-y border-[#191D20]/15 py-6 sm:grid-cols-2">
              {product.pressureRange && <div><dt className="mb-2 text-xs text-[#62635F]">Pressure range</dt><dd className="text-base font-medium">{product.pressureRange}</dd></div>}
              {product.temperatureRange && <div><dt className="mb-2 text-xs text-[#62635F]">Temperature range</dt><dd className="text-base font-medium">{product.temperatureRange}</dd></div>}
            </dl>}
            <div className="my-7 flex flex-wrap gap-2">{product.standards.map(standard => <span key={standard} className="rounded-full border border-[#CFCBC3] px-3 py-1.5 text-xs">{standard}</span>)}</div>
            <div className="flex flex-wrap gap-3"><Button href={`/en/contact?product=${encodeURIComponent(product.name)}`} variant="accent" size="lg">Request a quote <span className="ml-5" aria-hidden="true">↗</span></Button><Button href={`/urunler/${product.slug}/datasheet`} variant="outline" size="lg">Technical datasheet (TR)</Button></div>
            <Link href={`/urunler/${product.slug}`} className="mt-6 inline-block text-xs text-[#62635F] underline underline-offset-4 hover:text-[#96350B]">View this product in Turkish</Link>
          </div>
        </section>
        <section className="mt-16 border-t border-[#191D20]/15 py-12 sm:mt-24">
          <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#96350B]">01 / Technical details</p>
          <h2 className="mb-8 text-3xl font-medium tracking-tight">Specifications & tolerances</h2>
          <div className="overflow-x-auto rounded-xl border border-[#D9D5CD] bg-[#F8F6F2]"><table className="w-full text-left text-sm"><caption className="sr-only">Technical specifications for {product.name}</caption><thead className="bg-[#EAE7E1]"><tr><th scope="col" className="px-5 py-4 font-medium">Parameter</th><th scope="col" className="px-5 py-4 font-medium">Value / Grade</th><th scope="col" className="px-5 py-4 font-medium">Standard</th></tr></thead><tbody className="divide-y divide-[#D9D5CD]">{product.specifications.map((spec,index) => <tr key={index}><th scope="row" className="px-5 py-4 font-medium">{spec.property}</th><td className="px-5 py-4 text-[#62635F]">{spec.value}</td><td className="px-5 py-4 text-[#96350B]">{spec.standard || "—"}</td></tr>)}</tbody></table></div>
        </section>
        <section className="grid gap-8 border-t border-[#191D20]/15 py-12 lg:grid-cols-3"><div><p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#96350B]">02 / Engineering</p><h2 className="text-3xl font-medium tracking-tight">Designed for your application.</h2></div><ul className="grid gap-x-8 lg:col-span-2 md:grid-cols-2">{product.features.map(feature => <li key={feature} className="flex gap-4 border-b border-[#191D20]/15 py-5 text-sm leading-relaxed text-[#62635F]"><span className="text-[#96350B]" aria-hidden="true">↗</span>{feature}</li>)}</ul></section>
        {relatedProducts.length > 0 && <section className="border-t border-[#191D20]/15 py-12"><h2 className="mb-8 text-3xl font-medium tracking-tight">Complementary sealing products</h2><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{relatedProducts.map(related => <EnglishProductCard key={related.id} product={related} />)}</div></section>}
      </Container>
    </div>
  );
}
