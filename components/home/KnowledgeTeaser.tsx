import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { articlesData } from "@/data/articles";
import { ArrowRightIcon, DocumentTextIcon } from "@/components/icons/Icons";

export function KnowledgeTeaser() {
  const featuredArticles = articlesData.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-industrial-50 border-b border-industrial-200">
      <Container>
        <SectionHeader
          tag="MÜHENDİSLİK KÜTÜPHANESİ"
          title="Teknik Bilgi & Standartlar Merkezi"
          description="Sızdırmazlık malzemeleri, flanş normları ve çalışma parametreleri hakkında mühendisler ve satın almacılar için hazırlanmış teknik kaynaklar."
          action={
            <Button href="/teknik-bilgi" variant="outline" size="md">
              Tüm Makaleleri Oku ({articlesData.length} Makale)
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/teknik-bilgi/${article.slug}`}
              className="group p-6 bg-white border border-industrial-200 hover:border-rust hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-industrial-400 mb-3">
                  <span className="text-rust font-bold uppercase">
                    {article.category}
                  </span>
                  <span>{article.readingTimeMinutes} dk okuma</span>
                </div>

                <h3 className="text-base font-bold text-night group-hover:text-rust transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="mt-2.5 text-xs text-industrial-600 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>

                {article.standardsMentioned && article.standardsMentioned.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1">
                    {article.standardsMentioned.map((std, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-1.5 py-0.5 bg-industrial-100 text-night border border-industrial-200/50"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-industrial-100 flex items-center justify-between text-xs font-mono font-medium text-night group-hover:text-brick transition-colors">
                <span>Teknik Analizi İncele</span>
                <ArrowRightIcon className="w-4 h-4 text-brick transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
