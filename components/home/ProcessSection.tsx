import { Container } from "@/components/ui/Container";
const steps = [
  { title: "İhtiyacınızı paylaşın", description: "Çizim, ölçü veya numunenizi; sıcaklık, basınç ve akışkan bilgileriyle birlikte bize iletin." },
  { title: "Çözümü belirleyelim", description: "Uygun malzemeyi ve üretim yöntemini değerlendirip fiyat ve teslimat bilgilerini paylaşalım." },
  { title: "Ölçünüze göre üretelim", description: "Onaylanan teknik gereksinimlere göre kesim ve üretimi gerçekleştirelim." },
  { title: "Kontrol edip ulaştıralım", description: "Ölçü kontrollerinden geçen ürünlerinizi paketleyip sevkiyata hazırlayalım." },
];
export function ProcessSection() {
  return (
    <section className="bg-[#F2EFE9] py-20 text-[#191D20] sm:py-28">
      <Container>
        <div className="mb-14 grid gap-6 lg:grid-cols-2"><div><p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#A23A10]">03 / Üretim ve kalite</p><h2 className="text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">Çizginin her adımında<br />aynı hassasiyet.</h2></div><p className="max-w-md self-end text-base leading-relaxed text-[#62635F] lg:justify-self-end">Doğru malzeme, doğru ölçü ve kontrollü üretim. İlk görüşmeden teslimata kadar ihtiyacınızın detaylarını birlikte takip ediyoruz.</p></div>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{steps.map((step, index) => <li key={step.title} className="border-t border-[#191D20]/20 pt-6"><span className="text-4xl font-light tracking-tight text-[#A23A10]">{String(index + 1).padStart(2, "0")}</span><h3 className="mb-3 mt-8 text-lg font-medium">{step.title}</h3><p className="text-sm leading-relaxed text-[#62635F]">{step.description}</p></li>)}</ol>
        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-[#191D20]/15 pt-6 text-xs text-[#62635F]"><span>DIN & ASME standartları</span><span>Malzemeye uygun üretim yöntemi</span><span>Ölçü ve kalınlık kontrolü</span></div>
      </Container>
    </section>
  );
}
