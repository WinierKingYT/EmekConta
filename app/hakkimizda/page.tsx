import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { PageHeading } from "@/components/ui/PageHeading";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";



export const metadata: Metadata = {
  title: "Hakkımızda | Endüstriyel Sızdırmazlık Çözümleri",
  description:
    "Emek Conta; sanayi, rafineri ve denizcilik sektörlerine standart flanş contaları, spiral sarımlı contalar ve teknik resme göre özel conta üretimi sunar.",
  openGraph: {
    title: "Hakkımızda | Emek Conta",
    description: "Endüstriyel conta ve sızdırmazlık imalatı. Kurumsal geçmişimiz ve üretim yeteneklerimiz.",
    url: "https://emekconta.com/hakkimizda",
  },
};

export default function AboutPage() {
  const milestones = [
    {
      year: "Başlangıç",
      title: "Kuruluş ve İlk İmalat",
      description:
        "Emek Conta, İstanbul'da endüstriyel tesisler ve denizcilik sektörünün kritik sızdırmazlık ihtiyaçlarını karşılamak üzere faaliyete başladı.",
    },
    {
      year: "Gelişim",
      title: "Spiral Sarımlı Conta Üretim Hattı",
      description:
        "Yüksek sıcaklık ve basınca maruz kalan rafineri ve kazan hatları için ASME B16.20 standartlarında spiral sarımlı conta imalatına başlandı.",
    },
    {
      year: "Teknoloji",
      title: "CNC Kesim & Kalıpsız İmalat Entegrasyonu",
      description:
        "CAD/CAM destekli CNC su jeti ve bıçak kesim tezgâhları yatırımı ile kalıp maliyeti olmadan saatler içinde prototip ve özel ölçü conta üretim kabiliyetine ulaşıldı.",
    },
    {
      year: "Genişleme",
      title: "Karaköy Satış & Dağıtım Merkezi",
      description:
        "Karaköy satış ve lojistik ofisi ile Türkiye geneline ve uluslararası deniz taşımacılığına kesintisiz sızdırmazlık desteği.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2EFE9] py-8 text-[#191D20] sm:py-12">
      <Container>
        <Breadcrumb items={[{ label: "Hakkımızda" }]} className="mb-10" />
        <PageHeading eyebrow="Emek Conta / Hakkımızda" title={<>İşimizin özü,<br />detaya verdiğimiz emek.</>} description="Sanayi ve denizcilik için standart ve özel üretim sızdırmazlık çözümleri. Malzemeyi tanıyan, ölçüyü önemseyen ve uygulamanızın gereksinimlerine odaklanan bir üretim yaklaşımı." />
        <figure className="mb-16"><div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[16/7]"><Image src="/images/hero/hero-slide-1.webp" alt="Atölye ortamında spiral sarımlı contalar ve hassas ölçüm kumpası" fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover object-[center_65%]" /></div><figcaption className="mt-4 flex flex-wrap justify-between gap-3 text-xs text-[#62635F]"><span>Malzeme, ölçü ve üretim bir arada.</span><span>Endüstriyel sızdırmazlık çözümleri</span></figcaption></figure>
        <section className="mb-16 grid gap-8 border-t border-[#191D20]/15 pt-10 lg:grid-cols-3"><h2 className="text-3xl font-medium leading-tight tracking-tight">Her bağlantıyı,<br />kendi şartlarında<br />değerlendiririz.</h2><div className="space-y-5 text-base leading-relaxed text-[#4D514B] lg:col-span-2"><p>Boru hatları, kazanlar, pompalar ve gemi makineleri farklı sıcaklık, basınç ve akışkan şartlarında çalışır. Doğru sızdırmazlık çözümü, bu şartları anlamakla başlar.</p><p>Spiral sarımlı contalar, grafit ve klingrit levhalar, kauçuk parçalar, PTFE ürünleri ve örgülü salmastralarla standart ölçülerden teknik resme göre özel üretime uzanan ihtiyaçlara cevap veriyoruz.</p></div></section>
        <section className="mb-16 rounded-xl bg-[#191D20] p-7 text-white sm:p-10"><p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#DD895F]">Üretim yaklaşımımız</p><div className="grid gap-10 md:grid-cols-3">{[{ title: "Çizime sadık üretim", description: "Teknik resim ve numuneye göre ölçü, geometri ve üretim gereksinimlerini değerlendiriyoruz." }, { title: "Malzemeyi tanıyan seçim", description: "Grafit, kauçuk, PTFE ve diğer malzemeleri uygulamanın çalışma şartlarına göre ele alıyoruz." }, { title: "Detayda kalite kontrolü", description: "İç ve dış çap, et kalınlığı ve bağlantı ölçülerini üretim sürecinin bir parçası olarak kontrol ediyoruz." }].map((item, index) => <div key={item.title} className="border-t border-white/20 pt-5"><span className="text-xs text-[#DD895F]">{String(index + 1).padStart(2, "0")}</span><h3 className="mb-4 mt-6 text-xl font-medium">{item.title}</h3><p className="text-sm leading-relaxed text-[#B9BCB8]">{item.description}</p></div>)}</div></section>
        <section className="mb-16 grid gap-8 lg:grid-cols-3"><div><p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#A23A10]">Gelişim sürecimiz</p><h2 className="text-3xl font-medium tracking-tight">Üretimden gelen<br />birikim.</h2></div><ol className="lg:col-span-2">{milestones.map(milestone => <li key={milestone.year} className="grid gap-4 border-t border-[#191D20]/15 py-6 sm:grid-cols-[110px_1fr]"><span className="text-sm font-medium text-[#96350B]">{milestone.year}</span><div><h3 className="mb-3 text-xl font-medium">{milestone.title}</h3><p className="text-sm leading-relaxed text-[#62635F]">{milestone.description}</p></div></li>)}</ol></section>
        <section className="flex flex-col justify-between gap-6 rounded-xl bg-[#E7E3DC] p-7 sm:p-10 lg:flex-row lg:items-center"><div><h2 className="text-2xl font-medium tracking-tight">Sizin uygulamanızla başlayalım.</h2><p className="mt-3 text-sm text-[#62635F]">Teknik resminizi veya numunenizi birlikte değerlendirelim.</p></div><Button href="/teklif-iste" variant="accent" size="lg">Teknik teklif iste ↗</Button></section>
      </Container>
    </div>
  );
}
