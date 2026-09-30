import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { UploadCloudIcon, CheckCircleIcon, RulerIcon, FactoryIcon } from "@/components/icons/Icons";

export function CustomMfgSection() {
  const capabilities = [
    "DWG, DXF, STEP, PDF veya elle çizilmiş teknik resme göre kesim",
    "Fiziki numuneden kumpas, mikrometre veya optik ölçüm ile birebir tersine mühendislik",
    "Kalıp maliyeti olmadan 1 adetten on binlerce adede kadar CNC bıçak ve su jeti kesimi",
    "Geniş hammadde stoğu: Grafit, Asbestsiz Klingrit, EPDM, NBR, Viton, PTFE, Mantar",
    "Acil gemi ve tesis arızalarında aynı gün ekspres imalat ve teslimat opsiyonu",
  ];

  return (
    <section className="py-16 sm:py-24 bg-industrial-900 text-white border-b border-industrial-800">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-rust inline-block"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-rust">
                ÖZEL İMALAT KABİLİYETİ
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Standart Ölçü Yetmediğinde
            </h2>
            <p className="mt-2 text-xl sm:text-2xl font-medium text-rust">
              Teknik resme, ölçüye veya numuneye göre üretim.
            </p>

            <p className="mt-5 text-sm sm:text-base text-industrial-300 leading-relaxed max-w-2xl">
              Endüstriyel tesislerdeki özel flanşlar, eski model ithal makineler, pompa gövdeleri veya denizcilik ekipmanlarında katalog contaları her zaman uyum sağlamaz. Emek Conta, modern CNC kesim altyapısı ve 1997'den gelen kalıpçılık tecrübesiyle çizim veya numunenizi hızla sızdırmazlık ürününe dönüştürür.
            </p>

            <ul className="mt-6 space-y-3">
              {capabilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-industrial-200">
                  <CheckCircleIcon className="w-4 h-4 text-rust shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/teklif-iste" variant="accent" size="lg" className="w-full sm:w-auto">
                <UploadCloudIcon className="w-5 h-5 mr-2" />
                Teknik Çizim Gönder
              </Button>
              <Button
                href="/ozel-uretim"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-white border-industrial-600 hover:bg-industrial-800 hover:border-white"
              >
                Özel Üretim Sürecini İncele
              </Button>
            </div>
          </div>

          {/* Right Column: Workshop Production Mock / Photo Placeholder */}
          <div className="lg:col-span-5">
            <div className="bg-industrial-950 border border-industrial-800 p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-industrial-800 text-xs font-mono text-industrial-400">
                <div className="flex items-center gap-2">
                  <FactoryIcon className="w-4 h-4 text-rust" />
                  <span>İMALAT VE TEKNİK ÇÖZÜM MERKEZİ</span>
                </div>
                <span className="text-emerald-400">CNC AKTİF</span>
              </div>

              {/* Engineering Spec Card Mock */}
              <div className="my-6 p-5 bg-industrial-900 border border-industrial-850 space-y-4">
                <div className="text-xs font-mono text-industrial-400 uppercase tracking-wider">
                  Kabul Edilen Çizim Formatları
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <span className="px-2 py-1.5 bg-industrial-800 border border-industrial-700 text-industrial-200">.DWG</span>
                  <span className="px-2 py-1.5 bg-industrial-800 border border-industrial-700 text-industrial-200">.DXF</span>
                  <span className="px-2 py-1.5 bg-industrial-800 border border-industrial-700 text-industrial-200">.STEP</span>
                  <span className="px-2 py-1.5 bg-industrial-800 border border-industrial-700 text-industrial-200">.PDF</span>
                  <span className="px-2 py-1.5 bg-industrial-800 border border-industrial-700 text-industrial-200">.IGES</span>
                  <span className="px-2 py-1.5 bg-industrial-800 border border-industrial-700 text-industrial-200">NUMUNE</span>
                </div>

                <div className="pt-2 text-[11px] text-industrial-400 leading-relaxed font-sans">
                  * Teknik çiziminiz yoksa contanın net ölçülerini (İç Çap x Dış Çap x Kalınlık x Delik Çapı / Cıvata Adedi) form üzerinden belirtebilirsiniz.
                </div>
              </div>

              {/* Notice block */}
              <div className="pt-4 border-t border-industrial-850 flex items-center justify-between text-xs text-industrial-400 font-mono">
                <span>MİNİMUM SİPARİŞ ADEDİ:</span>
                <span className="text-white font-bold">1 ADET PROTOTİP</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
