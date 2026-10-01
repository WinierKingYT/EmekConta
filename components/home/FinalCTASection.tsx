import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { companyData } from "@/data/company";
export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#B7410E] py-16 text-white sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 h-[480px] w-[480px] rounded-full border-[50px] border-white/[0.06]" />
      <Container className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center"><div><p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-white/80">Birlikte çözelim</p><h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">Bir ölçü. Bir çizim.<br />Yeni bir çözüm.</h2></div><div className="max-w-sm"><p className="mb-6 text-sm leading-relaxed text-white/90">İhtiyacınızı konuşmak için bize ulaşın. Standart ürün veya özel üretim için birlikte ilerleyelim.</p><div className="flex flex-wrap items-center gap-6"><Button href="/teklif-iste" variant="primary" size="lg" className="gap-6">Teklif İste <span aria-hidden="true">↗</span></Button><a href={`tel:${companyData.phone}`} className="border-b border-white/60 pb-1 text-sm hover:border-white">Bizi arayın</a></div></div></Container>
    </section>
  );
}
