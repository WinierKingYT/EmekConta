import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";

import { articlesData } from "@/data/articles";
import { ArrowRightIcon } from "@/components/icons/Icons";

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
    alternates: {
      canonical: `https://emekconta.com/teknik-bilgi/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://emekconta.com/teknik-bilgi/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      images: [
        {
          url: "https://emekconta.com/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: ["https://emekconta.com/opengraph-image.png"],
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
    image: "https://emekconta.com/opengraph-image.png",
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
      logo: {
        "@type": "ImageObject",
        url: "https://emekconta.com/logo.png",
      },
    },
    mainEntityOfPage: `https://emekconta.com/teknik-bilgi/${article.slug}`,
  };

  const updatedDate = new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Istanbul" }).format(new Date(`${article.updatedAt}T12:00:00Z`));
  return (
    <div className="min-h-screen bg-[#F2EFE9] py-8 text-[#191D20] sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Container>
        <Breadcrumb items={[{ label: "Teknik Bilgi", href: "/teknik-bilgi" }, { label: article.title }]} className="mb-10" />
        <article>
          <header className="mb-12 max-w-4xl"><p className="mb-6 text-[11px] uppercase tracking-[0.2em] text-[#A23A10]">{article.category}</p><h1 className="text-3xl font-medium leading-[1.13] tracking-[-0.045em] sm:text-5xl">{article.title}</h1><p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#62635F]">{article.summary}</p><div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-xs text-[#62635F]"><span>{article.readingTimeMinutes} dk okuma</span><span>Son güncelleme: <time dateTime={article.updatedAt}>{updatedDate}</time></span></div></header>
          <div className="grid items-start gap-10 border-t border-[#191D20]/15 pt-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-28"><nav aria-label="Rehberin içindekiler"><p className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#62635F]">Bu rehberde</p><ol className="space-y-3">{article.content.map((section,index) => <li key={index}><a href={`#bolum-${index + 1}`} className="block border-l border-[#191D20]/20 py-1 pl-4 text-sm leading-relaxed text-[#4D514B] hover:border-[#B7410E] hover:text-[#96350B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-rust">{section.heading}</a></li>)}</ol></nav>{article.standardsMentioned && article.standardsMentioned.length > 0 && <div className="mt-8 border-t border-[#191D20]/15 pt-5"><p className="mb-3 text-xs font-medium">İlgili standartlar</p><ul className="space-y-2 text-xs text-[#62635F]">{article.standardsMentioned.map(standard => <li key={standard}>{standard}</li>)}</ul></div>}</aside>
            <div className="min-w-0 max-w-[720px]"><div className="space-y-12">{article.content.map((section,index) => <section key={index} id={`bolum-${index + 1}`} className="scroll-mt-28"><h2 className="mb-5 text-2xl font-medium leading-snug tracking-tight sm:text-3xl">{section.heading}</h2><div className="space-y-5 text-base leading-[1.9] text-[#4D514B]">{section.body.map((paragraph,paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</div></section>)}</div><div className="mt-12 border-t border-[#191D20]/15 pt-7"><p className="mb-6 text-sm leading-relaxed text-[#62635F]">Bu rehber genel bilgilendirme amacıyla hazırlanmıştır. Uygulamanıza özel malzeme ve çalışma şartlarını teknik ekibimizle değerlendirebilirsiniz.</p><Button href="/teklif-iste" variant="accent">Uygulamanız için teklif iste ↗</Button></div></div>
          </div>
        </article>
        {relatedArticles.length > 0 && <section className="mt-20 border-t border-[#191D20]/15 pt-10"><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><h2 className="text-3xl font-medium tracking-tight">Okumaya devam edin.</h2><Link href="/teknik-bilgi" className="text-sm text-[#96350B] underline underline-offset-4">Tüm rehberler</Link></div><div className="grid gap-8 md:grid-cols-3">{relatedArticles.map(related => <Link key={related.id} href={`/teknik-bilgi/${related.slug}`} className="group flex flex-col border-t border-[#191D20]/20 pt-5"><p className="mb-4 text-xs text-[#62635F]">{related.category} / {related.readingTimeMinutes} dk</p><h3 className="mb-6 text-xl font-medium leading-snug group-hover:text-[#96350B]">{related.title}</h3><span className="mt-auto inline-flex items-center gap-6 text-sm">Rehberi oku <ArrowRightIcon className="h-4 w-4" /></span></Link>)}</div></section>}
      </Container>
    </div>
  );
}
