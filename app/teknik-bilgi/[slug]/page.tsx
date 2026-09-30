import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { articlesData } from "@/data/articles";
import {
  DocumentTextIcon,
  ClockIcon,
  ArrowRightIcon,
  UploadCloudIcon,
  ShieldCheckIcon,
} from "@/components/icons/Icons";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return articlesData.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articlesData.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | Emek Conta Teknik Bilgi`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://emekconta.com/teknik-bilgi/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  };
}

export default function ArticleDetailPage({ params }: Props) {
  const article = articlesData.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Related articles (other articles in the library)
  const relatedArticles = articlesData
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: "Emek Conta Mühendislik Departmanı",
    },
    publisher: {
      "@type": "Organization",
      name: "Emek Conta",
      url: "https://emekconta.com",
    },
    mainEntityOfPage: `https://emekconta.com/teknik-bilgi/${article.slug}`,
  };

  return (
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Container size="narrow">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Teknik Bilgi", href: "/teknik-bilgi" },
            { label: article.title },
          ]}
          className="mb-6"
        />

        {/* Article Container */}
        <article className="bg-white border border-industrial-200 rounded-lg p-6 sm:p-12 mb-10">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-industrial-500 pb-4 border-b border-industrial-100 mb-6">
            <span className="px-2 py-0.5 bg-steel-light text-steel-darkblue font-semibold uppercase rounded">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <ClockIcon className="w-3.5 h-3.5 text-industrial-400" />
              <span>{article.readingTimeMinutes} Dakika Okuma</span>
            </span>
            <span>•</span>
            <span>Son Güncelleme: {article.updatedAt}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-industrial-900 tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          {/* Executive Summary Lead */}
          <div className="p-4 sm:p-5 bg-industrial-50 border-l-4 border-steel-blue text-sm sm:text-base text-industrial-700 leading-relaxed mb-8 rounded-r-md">
            <strong>Teknik Özet:</strong> {article.summary}
          </div>

          {/* Standards Tags */}
          {article.standardsMentioned && article.standardsMentioned.length > 0 && (
            <div className="mb-8 flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-industrial-500">İlgili Standartlar:</span>
              {article.standardsMentioned.map((std, idx) => (
                <Badge key={idx} variant="neutral">
                  {std}
                </Badge>
              ))}
            </div>
          )}

          {/* Article Structured Body */}
          <div className="space-y-8 text-industrial-800 leading-relaxed text-sm sm:text-base">
            {article.content.map((sec, sIdx) => (
              <section key={sIdx}>
                <h2 className="text-lg sm:text-xl font-bold text-industrial-900 mb-3 pb-2 border-b border-industrial-100">
                  {sec.heading}
                </h2>
                <div className="space-y-3 text-industrial-700">
                  {sec.body.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Bottom Technical Disclaimer & Action */}
          <div className="mt-12 pt-6 border-t border-industrial-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-mono text-industrial-500 text-center sm:text-left">
              * Bu doküman genel bilgilendirme amacıyla hazırlanmıştır. Özel flanş ve akışkan hesaplamaları için teknik ekibimizle görüşünüz.
            </p>
            <Button href="/teklif-iste" variant="accent" size="md" className="shrink-0 w-full sm:w-auto">
              <UploadCloudIcon className="w-4 h-4 mr-2" />
              Teknik Teklif İste
            </Button>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-10">
            <h3 className="text-lg font-bold text-industrial-900 mb-4">
              İlgili Diğer Teknik Kaynaklar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/teknik-bilgi/${rel.slug}`}
                  className="p-4 bg-white border border-industrial-200 rounded-lg hover:border-industrial-400 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-steel-darkblue block uppercase mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-industrial-900 line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="mt-3 text-[11px] font-mono text-steel-blue flex items-center gap-1">
                    <span>Devamını Oku</span>
                    <ArrowRightIcon className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
