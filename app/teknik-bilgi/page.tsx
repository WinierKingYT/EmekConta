import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { articlesData } from "@/data/articles";
import { ArrowRightIcon } from "@/components/icons/Icons";
import { PageHeading } from "@/components/ui/PageHeading";

export const metadata: Metadata = {
  title: "Teknik Bilgi Merkezi | Endüstriyel Conta ve Sızdırmazlık Rehberi",
  description:
    "Spiral sarımlı contalar, saf grafit, EPDM/NBR kauçuk, PTFE ve DIN/ASME flanş standartları hakkında mühendislik kılavuzları ve teknik makaleler.",
  openGraph: {
    title: "Teknik Bilgi Merkezi | Emek Conta",
    description: "Conta seçimi, flanş normları ve sızdırmazlık malzemeleri hakkında mühendislik kılavuzları.",
    url: "https://emekconta.com/teknik-bilgi",
  },
};

export default function TechnicalKnowledgePage() {
  const categories = Array.from(new Set(articlesData.map((a) => a.category)));

  return (
    <div className="min-h-screen bg-[#F2EFE9] py-8 text-[#191D20] sm:py-12"><Container>
      <Breadcrumb items={[{ label: "Teknik Bilgi" }]} className="mb-10" />
      <PageHeading eyebrow="Emek Conta / Teknik kütüphane" title={<>Doğru seçim,<br />bilgiyle başlar.</>} description="Malzemeler, çalışma şartları ve standartlar üzerine teknik rehberler. Sızdırmazlık ürünlerini daha yakından tanıyın; uygulamanız için doğru soruları sorun." />
      <nav aria-label="Rehber konuları" className="mb-14 flex flex-wrap gap-3 border-y border-[#191D20]/15 py-6">{categories.map((category, index) => <a key={category} href={`#konu-${index + 1}`} className="rounded-full border border-[#CFCBC3] px-4 py-2.5 text-xs font-medium text-[#4D514B] transition-colors hover:border-[#B7410E] hover:text-[#96350B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust">{category}</a>)}</nav>
      <div className="space-y-14">{categories.map((category, index) => <section key={category} id={`konu-${index + 1}`} className="scroll-mt-28"><div className="mb-7 flex items-center gap-4"><span className="text-xs text-[#96350B]">{String(index + 1).padStart(2, "0")}</span><h2 className="text-2xl font-medium tracking-tight">{category}</h2></div><div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{articlesData.filter(article => article.category === category).map(article => <Link key={article.id} href={`/teknik-bilgi/${article.slug}`} className="group flex flex-col rounded-xl border border-[#D9D5CD] bg-[#F8F6F2] p-6 sm:p-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rust"><p className="mb-6 text-xs text-[#62635F]">{article.readingTimeMinutes} dk okuma</p><h3 className="text-xl font-medium leading-snug tracking-tight group-hover:text-[#96350B]">{article.title}</h3><p className="mb-6 mt-4 text-sm leading-relaxed text-[#62635F]">{article.summary}</p>{article.standardsMentioned && article.standardsMentioned.length > 0 && <p className="mb-6 text-xs leading-relaxed text-[#62635F]">{article.standardsMentioned.join(" / ")}</p>}<span className="mt-auto inline-flex items-center gap-6 border-t border-[#191D20]/15 pt-5 text-sm font-medium">Rehberi oku <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></section>)}</div>
    </Container></div>
  );
}
