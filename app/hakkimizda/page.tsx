import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheckIcon,
  FactoryIcon,
  RulerIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
} from "@/components/icons/Icons";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Hakkımızda | 1997'den Beri Endüstriyel Sızdırmazlık Çözümleri",
  description:
    "1997 yılında kurulan Emek Conta; sanayi, rafineri ve denizcilik sektörlerine standart flanş contaları, spiral sarımlı contalar ve teknik resme göre özel conta üretimi sunar.",
  openGraph: {
    title: "Hakkımızda | Emek Conta",
    description: "1997'den beri endüstriyel conta ve sızdırmazlık imalatı. Kurumsal geçmişimiz ve üretim yeteneklerimiz.",
    url: "https://emekconta.com/hakkimizda",
  },
};

export default function AboutPage() {
  const milestones = [
    {
      year: "1997",
      title: "Kuruluş ve İlk İmalat",
      description:
        "Emek Conta, İstanbul'da endüstriyel tesisler ve denizcilik sektörünün kritik sızdırmazlık ihtiyaçlarını karşılamak üzere faaliyete başladı.",
    },
    {
      year: "2005",
      title: "Spiral Sarımlı Conta Üretim Hattı",
      description:
        "Yüksek sıcaklık ve basınca maruz kalan rafineri ve kazan hatları için ASME B16.20 standartlarında spiral sarımlı conta imalatına başlandı.",
    },
    {
      year: "2014",
      title: "CNC Kesim & Kalıpsız İmalat Entegrasyonu",
      description:
        "CAD/CAM destekli CNC su jeti ve bıçak kesim tezgâhları yatırımı ile kalıp maliyeti olmadan saatler içinde prototip ve özel ölçü conta üretim kabiliyetine ulaşıldı.",
    },
    {
      year: "2024+",
      title: "Karaköy Satış & İkitelli OSB İmalat Tesisleri",
      description:
        "İkitelli OSB imalat merkezi ve Karaköy dağıtım şubesi ile Türkiye geneline ve uluslararası deniz taşımacılığına kesintisiz sızdırmazlık desteği.",
    },
  ];

  return (
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: "Hakkımızda" }]}
          className="mb-6"
        />

        {/* Page Header */}
        <div className="bg-white border border-industrial-200 p-6 sm:p-10 mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-steel-blue inline-block"></span>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-steel-darkblue">
              KURUMSAL PROFİL
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-industrial-900 tracking-tight">
            1997'den Bugüne Endüstriyel Sızdırmazlık
          </h1>
          <p className="mt-3 text-sm sm:text-base text-industrial-600 max-w-3xl leading-relaxed">
            Emek Conta; yalnızca conta satan bir aracı firma değil, teknik resim, numune veya uluslararası standartlara göre üretim yapan bağımsız bir mühendislik ve imalat kuruluşudur.
          </p>
        </div>

        {/* Section 1: Ne Yapıyoruz? */}
        <div className="bg-white border border-industrial-200 p-6 sm:p-10 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-xl sm:text-2xl font-bold text-industrial-900 mb-4">
                Ne Yapıyoruz?
              </h2>
              <p className="text-sm sm:text-base text-industrial-700 leading-relaxed mb-4">
                Boru hatları, buhar kazanları, ısı eşanjörleri, türbinler, pompalar ve gemi makineleri gibi basınç ve sıcaklık altında çalışan tüm endüstriyel ekipmanların sızdırmazlık güvenliğini sağlıyoruz.
              </p>
              <p className="text-sm text-industrial-600 leading-relaxed">
                ASME, DIN ve EN standartlarında spiral sarımlı contalar, saf grafit levha contalar, asbestsiz klingrit contalar, kauçuk (EPDM, NBR, Viton, Silikon) parçalar, saf PTFE ve örgü salmastraların imalatını ve toptan tedariğini gerçekleştiriyoruz.
              </p>
            </div>

            {/* Industrial Spec Box */}
            <div className="lg:col-span-5 bg-industrial-900 text-white p-6 border border-industrial-800">
              <div className="text-xs font-mono text-steel-blue uppercase tracking-wider mb-2">
                TEMEL İMALAT YAKLAŞIMI
              </div>
              <div className="text-lg font-bold text-white mb-3">
                Doğru Akışkan, Doğru Malzeme, Sıfır Sızıntı.
              </div>
              <p className="text-xs text-industrial-300 leading-relaxed font-sans">
                Yanlış seçilen bir conta, fabrikalarda milyonlarca liralık duruşlara ve denizcilikte ciddi güvenlik risklerine neden olur. Amacımız her flanş için çalışma sıcaklığı, basınç ve akışkana en uygun çözümü sunmaktır.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Üretim Kabiliyeti & Makine Parkuru */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border border-industrial-200 p-6 sm:p-8">
            <div className="w-10 h-10 bg-industrial-100 text-steel-darkblue flex items-center justify-center mb-4">
              <RulerIcon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-industrial-900 mb-2">
              CAD & CNC Kesim
            </h3>
            <p className="text-xs sm:text-sm text-industrial-600 leading-relaxed">
              AutoCAD, SolidWorks ve DXF formatlarındaki teknik resimler doğrudan CNC tezgâhlarımıza aktarılır. Sıfır kalıp maliyeti ile hassas kesim sağlanır.
            </p>
          </div>

          <div className="bg-white border border-industrial-200 p-6 sm:p-8">
            <div className="w-10 h-10 bg-industrial-100 text-steel-darkblue flex items-center justify-center mb-4">
              <FactoryIcon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-industrial-900 mb-2">
              Spiral Sarım Tezgâhları
            </h3>
            <p className="text-xs sm:text-sm text-industrial-600 leading-relaxed">
              ASME B16.20 standartlarında paslanmaz çelik (304, 316L) şerit ve saf grafit/PTFE dolgu ile helisel sarım contaları hassas gerginlikle imal ediyoruz.
            </p>
          </div>

          <div className="bg-white border border-industrial-200 p-6 sm:p-8">
            <div className="w-10 h-10 bg-industrial-100 text-steel-darkblue flex items-center justify-center mb-4">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-industrial-900 mb-2">
              Kalite & Boyutsal Kontrol
            </h3>
            <p className="text-xs sm:text-sm text-industrial-600 leading-relaxed">
              Üretilen her parti conta kumpas, mikrometre ve optik ölçüm cihazlarıyla et kalınlığı, iç/dış çap ve cıvata eksenleri açısından denetlenir.
            </p>
          </div>
        </div>

        {/* Section 3: Tarihçe (Milestones) */}
        <div className="bg-white border border-industrial-200 p-6 sm:p-10 mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-steel-blue inline-block"></span>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-steel-darkblue">
              GELİŞİM SÜRECİ
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-industrial-900 mb-8">
            1997'den Günümüze Kilometre Taşları
          </h2>

          <div className="space-y-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-start gap-4 pb-6 border-b border-industrial-100 last:border-b-0 last:pb-0"
              >
                <div className="sm:w-28 shrink-0">
                  <span className="font-mono text-xl font-extrabold text-steel-blue">
                    {m.year}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-base text-industrial-900 mb-1">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-industrial-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-industrial-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Tesisiniz İçin Özel Sızdırmazlık Çözümü Mü Arıyorsunuz?
            </h3>
            <p className="text-xs sm:text-sm text-industrial-300 mt-1 max-w-xl">
              Teknik ekibimiz numunenizi veya teknik çiziminizi inceleyerek en uygun malzeme spesifikasyonunu belirlesin.
            </p>
          </div>
          <Button href="/teklif-iste" variant="accent" size="lg" className="shrink-0 w-full sm:w-auto">
            Teknik Teklif İste
          </Button>
        </div>
      </Container>
    </div>
  );
}
