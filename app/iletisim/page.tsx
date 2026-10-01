import React from "react";
import { PageHeading } from "@/components/ui/PageHeading";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "İletişim | Emek Conta Satış & İletişim Ofisi",
  description:
    "Emek Conta iletişim bilgileri, Karaköy satış & iletişim ofisi adresi, telefon ve WhatsApp hatları.",
  openGraph: {
    title: "İletişim ve Adres Bilgileri | Emek Conta",
    description: "Emek Conta Karaköy ofisi iletişim bilgileri. Telefon, WhatsApp ve harita konumu.",
    url: "https://emekconta.com/iletisim",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE9] py-8 text-[#191D20] sm:py-12"><Container>
      <Breadcrumb items={[{ label: "İletişim" }]} className="mb-10" />
      <PageHeading eyebrow="Emek Conta / İletişim" title={<>İyi bir çözüm,<br />bir görüşmeyle başlar.</>} description="Ürün seçimi, özel üretim veya teklif talebiniz için bize ulaşın. Teknik çiziminizi ve uygulamanızın gereksinimlerini birlikte değerlendirelim." />
      <ContactChannels />
      <div className="mb-14 mt-10 flex flex-wrap items-center justify-between gap-6 rounded-xl bg-[#E7E3DC] p-6 sm:p-8"><div><h2 className="text-xl font-medium">Ölçüleriniz veya çiziminiz hazır mı?</h2><p className="mt-2 text-sm text-[#62635F]">Teklif formunda ürün ve çalışma şartlarını birlikte paylaşabilirsiniz.</p></div><Button href="/teklif-iste" variant="accent" size="lg">Teklif talebi oluştur ↗</Button></div>
      {companyData.locations.map(location => <section key={location.name} className="mb-12 grid gap-8 border-t border-[#191D20]/15 pt-10 lg:grid-cols-2"><div><p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#A23A10]">{location.type}</p><h2 className="text-3xl font-medium tracking-tight">{location.name}</h2><address className="mt-6 text-base not-italic leading-relaxed text-[#4D514B]">{location.address}<br />{location.postalCode ? `${location.postalCode} ` : ""}{location.district} / {location.city}</address><div className="mt-6 border-t border-[#191D20]/15 pt-5"><h3 className="mb-2 text-sm font-medium">Çalışma saatleri</h3><p className="text-sm leading-relaxed text-[#62635F]">{location.workingHours}</p></div><a href={location.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${location.mapEmbedQuery}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#96350B] underline underline-offset-4 hover:text-[#CF4B14] transition-colors"><span>Google Haritalar'da aç</span><span>↗</span></a></div><div className="aspect-video overflow-hidden rounded-xl bg-[#E7E3DC] shadow-sm"><iframe title={`${location.name} haritası`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://maps.google.com/maps?q=${location.mapEmbedQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`} className="h-full w-full border-0" /></div></section>)}
    </Container></div>
  );
}
