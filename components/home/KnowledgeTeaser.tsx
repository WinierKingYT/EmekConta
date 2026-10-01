import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { articlesData } from "@/data/articles";
import { ArrowRightIcon } from "@/components/icons/Icons";
export function KnowledgeTeaser() {
  return (
    <section className="bg-[#F2EFE9] py-20 text-[#191D20] sm:py-24"><Container>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6"><div><p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#A23A10]">05 / Teknik bilgi</p><h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">Doğru seçim, bilgiyle başlar.</h2></div><Link href="/teknik-bilgi" className="inline-flex items-center gap-6 border-b border-[#191D20]/30 pb-2 text-sm hover:text-[#A23A10]">Tüm rehberler <ArrowRightIcon className="h-4 w-4" /></Link></div>
      <div className="grid gap-8 md:grid-cols-3">{articlesData.slice(0, 3).map(article => <Link key={article.id} href={`/teknik-bilgi/${article.slug}`} className="group flex flex-col border-t border-[#191D20]/20 pt-5"><div className="mb-6 flex flex-wrap justify-between gap-2 text-[11px] text-[#62635F]"><span>{article.category}</span><span>{article.readingTimeMinutes} dk okuma</span></div><h3 className="text-xl font-medium leading-snug tracking-tight group-hover:text-[#A23A10]">{article.title}</h3><p className="mb-6 mt-4 text-sm leading-relaxed text-[#62635F]">{article.summary}</p><span className="mt-auto inline-flex items-center gap-5 text-sm font-medium">Rehberi oku <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div>
    </Container></section>
  );
}
