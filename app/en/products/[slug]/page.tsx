import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { enProductsData } from "@/data/en/products";
import {
  RulerIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  PhoneIcon,
  WhatsappIcon,
} from "@/components/icons/Icons";
import { companyData } from "@/data/company";

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
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Container>
        <Breadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Products", href: "/en/products" },
            { label: product.name },
          ]}
          className="mb-6"
        />

        {/* Hero Section */}
        <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-10 mb-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Visual */}
            <div className="lg:col-span-5 border border-industrial-200 p-6 rounded-lg bg-white aspect-square relative flex items-center justify-center">
              {product.image ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain p-4"
                  />
                </div>
              ) : (
                <div className="text-center font-mono text-xs text-industrial-400">
                  Technical Schematic Preview
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-rust bg-rust/10 px-2.5 py-0.5 rounded-md uppercase">
                    {product.category}
                  </span>
                  <span className="text-xs font-mono text-industrial-600 bg-industrial-100 px-2.5 py-0.5 rounded-md">
                    ASME / DIN / EN COMPLIANT
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold text-night tracking-tight leading-tight mb-4">
                  {product.name}
                </h1>

                <p className="text-sm sm:text-base text-industrial-700 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Operating Parameters Box */}
                <div className="grid grid-cols-2 gap-3.5 bg-industrial-50 border border-industrial-200 p-4 rounded-lg mb-6 font-mono text-xs">
                  {product.pressureRange && (
                    <div>
                      <span className="text-industrial-500 block text-[11px]">Pressure Limit:</span>
                      <strong className="text-night">{product.pressureRange}</strong>
                    </div>
                  )}
                  {product.temperatureRange && (
                    <div>
                      <span className="text-industrial-500 block text-[11px]">Temperature Range:</span>
                      <strong className="text-night">{product.temperatureRange}</strong>
                    </div>
                  )}
                </div>

                {/* Standard Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  <span className="text-xs font-mono text-industrial-500 mr-2">Standards:</span>
                  {product.standards.map((std, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-night text-white text-xs font-mono font-bold rounded-md"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-industrial-100 flex flex-wrap items-center gap-4">
                <Button
                  href={`/en/contact?product=${encodeURIComponent(product.name)}`}
                  variant="accent"
                  size="lg"
                  className="font-semibold rounded-lg"
                >
                  <span>Request Export Quote</span>
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>

                <Link
                  href={`/urunler/${product.slug}/datasheet`}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-3 bg-industrial-100 hover:bg-industrial-200 text-industrial-800 text-xs font-mono font-bold rounded-lg transition-colors border border-industrial-300"
                >
                  <DocumentTextIcon className="w-4 h-4 text-rust" />
                  <span>Technical Datasheet (PDF)</span>
                </Link>

                <Link
                  href={`/urunler/${product.slug}`}
                  className="text-xs font-mono text-industrial-500 hover:text-rust transition-colors ml-auto"
                >
                  Türkçe Sayfayı Görüntüle →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-10 mb-10 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-industrial-200">
            <span className="font-mono text-xs font-bold text-rust">01.</span>
            <h2 className="text-lg font-bold text-night uppercase tracking-wide">
              Technical Specifications & Tolerances
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-industrial-200 bg-industrial-50 text-industrial-600">
                  <th className="py-3 px-4 font-bold">Parameter</th>
                  <th className="py-3 px-4 font-bold">Value / Grade</th>
                  <th className="py-3 px-4 font-bold">Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-industrial-100">
                {product.specifications.map((spec, i) => (
                  <tr key={i} className="hover:bg-industrial-50/60 transition-colors">
                    <td className="py-3 px-4 font-semibold text-night">{spec.property}</td>
                    <td className="py-3 px-4 text-industrial-800">{spec.value}</td>
                    <td className="py-3 px-4 text-rust font-bold">{spec.standard || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Product Features */}
        <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-10 mb-10 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-industrial-200">
            <span className="font-mono text-xs font-bold text-rust">02.</span>
            <h2 className="text-lg font-bold text-night uppercase tracking-wide">
              Engineering Advantages & Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 bg-industrial-50 border border-industrial-150 rounded-lg">
                <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-industrial-800 leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xl font-bold text-night mb-6">
              Complementary Sealing Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white border border-industrial-200 rounded-xl p-5 hover:border-rust transition-all"
                >
                  <span className="text-[11px] font-mono text-rust font-bold uppercase block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-bold text-night text-sm mb-2">
                    <Link href={`/en/products/${rel.slug}`} className="hover:text-rust transition-colors">
                      {rel.name}
                    </Link>
                  </h4>
                  <p className="text-xs text-industrial-500 line-clamp-2 mb-3">
                    {rel.shortDescription}
                  </p>
                  <Link
                    href={`/en/products/${rel.slug}`}
                    className="text-xs font-mono font-bold text-rust hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Product</span>
                    <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
