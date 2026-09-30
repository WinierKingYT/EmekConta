import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  RulerIcon,
  ShieldCheckIcon,
  FactoryIcon,
  DocumentTextIcon,
  PhoneIcon,
  CheckCircleIcon,
} from "@/components/icons/Icons";

export function WhyEmekSection() {
  const differentiators = [
    {
      title: "Teknik Resme Göre Üretim",
      description:
        "CAD (DWG, DXF, PDF) çizimlerinizi doğrudan CNC tezgâhlarımıza aktararak kalıp maliyeti ve bekleme süresi olmaksızın prototip veya seri üretim yapıyoruz.",
      badge: "CAD / CNC Entegrasyonu",
    },
    {
      title: "Geniş Hammadde Çeşitliliği",
      description:
        "Saf grafit, telli grafit levhalar, asbestsiz klingrit, EPDM, NBR, Viton, silikon, saf ve genleşmiş PTFE, seramik elyaf malzemeler sürekli stoklarımızda hazırdır.",
      badge: "Sertifikalı Hammadde",
    },
    {
      title: "Standart ve Özel Ölçüler",
      description:
        "ASME B16.20, ASME B16.21, DIN EN 1514-1/2, JIS standartlarındaki flanş contalarının yanı sıra oval, elips, menhol ve özel formlu contaları imal ediyoruz.",
      badge: "DIN / ASME / Özel",
    },
    {
      title: "Sanayi ve Denizcilik Deneyimi",
      description:
        "1997 yılından bu yana ağır sanayi, enerji santralleri, rafineriler, tersaneler ve gemi filolarının sızdırmazlık arızalarına doğrudan saha deneyimiyle çözüm üretiyoruz.",
      badge: "1997'den Bugüne",
    },
    {
      title: "Mühendislik & Malzeme Seçimi Desteği",
      description:
        "Basınç, sıcaklık ve akışkan türünüze göre en ekonomik ve güvenli conta malzemesini belirlemeniz için teknik bilgi ve mühendislik danışmanlığı sağlıyoruz.",
      badge: "Doğru Malzeme Seçimi",
    },
    {
      title: "Hızlı Teklif & Acil İmalat",
      description:
        "Talebiniz bize ulaştıktan sonra teknik inceleme yapılarak aynı gün içinde fiyat ve termin bildirilir. Gemi ve tesis duruşlarında acil kesim yapılabilir.",
      badge: "Aynı Gün Teklif",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-industrial-200">
      <Container>
        <SectionHeader
          tag="MÜHENDİSLİK YAKLAŞIMI"
          title="Neden Emek Conta?"
          description="Boş pazarlama sloganları yerine doğrulanabilir imalat yetenekleri, malzeme bilgisi ve saha tecrübesi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 bg-industrial-50/50 border border-industrial-200 hover:border-rust hover:shadow-md transition-all duration-200 flex flex-col justify-between rounded-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-rust">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-rust-subtle text-rust border border-rust-border uppercase font-medium rounded">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-night group-hover:text-rust transition-colors mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-industrial-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-industrial-200/80 flex items-center gap-2 text-xs font-mono text-emerald-700">
                <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Teknik Güvence</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
