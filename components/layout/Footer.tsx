import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#191D20] text-industrial-300 border-t border-white/15 text-sm">
      {/* Main Footer Links */}
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: About Emek Conta */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#252A2D] border border-rust/50 flex items-center justify-center font-sans font-bold text-xs text-white rounded-full">
                <span className="text-rust text-sm mr-0.5">E</span>C
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold tracking-wide text-white leading-none">
                  EMEK CONTA
                </span>
                <span className="text-[9.5px] font-sans tracking-widest text-[#B9BCB8] uppercase mt-0.5">
                  Endüstriyel Sızdırmazlık San. ve Tic.
                </span>
              </div>
            </div>
            <p className="text-[#B9BCB8] text-xs sm:text-sm leading-relaxed max-w-md">
              Sanayi tesisleri, rafineriler, enerji santralleri ve denizcilik sektörü için yüksek sıcaklık, basınç ve kimyasal ortamlara dayanıklı endüstriyel sızdırmazlık elemanları imal ediyoruz.
            </p>

            {/* Certifications and Standards Badge Chips */}
            <div className="pt-1 flex flex-wrap gap-1.5 text-[10px] font-sans">
              <span className="px-2 py-0.5 bg-[#252A2D] border border-industrial-800 text-industrial-300 rounded">
                ASME B16.20
              </span>
              <span className="px-2 py-0.5 bg-[#252A2D] border border-industrial-800 text-industrial-300 rounded">
                DIN EN 1514-1/2
              </span>
              <span className="px-2 py-0.5 bg-[#252A2D] border border-industrial-800 text-industrial-300 rounded">
                ISO 9001:2015 Kalite
              </span>
            </div>

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-[#B9BCB8] font-sans">
              <a
                href={companyData.locations[0].mapsUrl || "https://maps.google.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-start gap-1"
                title="Google Haritalar'da Aç"
              >
                <span>Adres: {companyData.locations[0].address}, {companyData.locations[0].postalCode} {companyData.locations[0].district} / {companyData.locations[0].city}</span>
                <span className="text-rust">↗</span>
              </a>
              <div className="text-[11px] text-[#A9AEA6] pt-1">
                Çalışma Saatleri: Hafta içi 08:30 - 18:00 | Cmt 08:30 - 13:00
              </div>
            </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <h3 className="text-white font-semibold text-xs font-sans tracking-wider uppercase mb-4">
              Ürün Grupları
            </h3>
            <ul className="space-y-2.5 text-xs text-[#B9BCB8]">
              <li>
                <Link href="/urunler/spiral-sarimli-contalar" className="hover:text-white transition-colors">
                  Spiral Sarımlı Contalar
                </Link>
              </li>
              <li>
                <Link href="/urunler/grafit-contalar" className="hover:text-white transition-colors">
                  Saf Grafit & Telli Grafit Contalar
                </Link>
              </li>
              <li>
                <Link href="/urunler/klingrit-levha-contalar" className="hover:text-white transition-colors">
                  Klingrit / Aramid Levha Contalar
                </Link>
              </li>
              <li>
                <Link href="/urunler/kaucuk-epdm-nbr-contalar" className="hover:text-white transition-colors">
                  Kauçuk (EPDM, NBR, Viton, Silikon)
                </Link>
              </li>
              <li>
                <Link href="/urunler/ptfe-teflon-urunler" className="hover:text-white transition-colors">
                  PTFE & Genleşmiş PTFE Ürünleri
                </Link>
              </li>
              <li>
                <Link href="/urunler/orgulu-salmastralar" className="hover:text-white transition-colors">
                  Örgülü Pompa & Vana Salmastraları
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-rust hover:text-rust-light font-medium pt-1 inline-block">
                  Tüm Kataloğu İncele →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Corporate & Services */}
          <div>
            <h3 className="text-white font-semibold text-xs font-sans tracking-wider uppercase mb-4">
              Kurumsal & Hizmetler
            </h3>
            <ul className="space-y-2.5 text-xs text-[#B9BCB8]">
              <li>
                <Link href="/ozel-uretim" className="hover:text-white transition-colors">
                  Özel Ölçü & Numuneye Göre Üretim
                </Link>
              </li>
              <li>
                <Link href="/sektorler" className="hover:text-white transition-colors">
                  Hizmet Verilen Sektörler
                </Link>
              </li>
              <li>
                <Link href="/sektorler/denizcilik" className="hover:text-white transition-colors">
                  Gemi & Denizcilik Sızdırmazlığı
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-white transition-colors">
                  Kurumsal Geçmiş & Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/teknik-bilgi" className="hover:text-white transition-colors">
                  Teknik Bilgi Merkezi
                </Link>
              </li>
              <li>
                <Link href="/teklif-iste" className="hover:text-white transition-colors">
                  Teknik Çizim ile Teklif Al
                </Link>
              </li>
              <li>
                <Link href="/bayi-basvuru" className="hover:text-white transition-colors">
                  Bayilik & Toptancı Başvurusu
                </Link>
              </li>
              <li>
                <Link href="/ihracat" className="hover:text-white transition-colors">
                  İhracat & Global Standartlar (ASME/DIN)
                </Link>
              </li>
              <li>
                <Link href="/en" className="hover:text-white transition-colors text-rust font-medium">
                  English International Portal (EN) →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div>
            <h3 className="text-white font-semibold text-xs font-sans tracking-wider uppercase mb-4">
              İletişim & Teklif
            </h3>
            <div className="space-y-3 text-xs text-[#B9BCB8]">
              <div>
                <span className="block text-[11px] text-[#A9AEA6] font-sans">Santral:</span>
                <a href={`tel:${companyData.phone}`} className="text-industrial-200 hover:text-white font-sans">
                  {companyData.phoneFormatted}
                </a>
              </div>
              <div>
                <span className="block text-[11px] text-[#A9AEA6] font-sans">WhatsApp RFQ:</span>
                <a
                  href={`https://wa.me/${companyData.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-sans"
                >
                  {companyData.whatsappFormatted}
                </a>
              </div>
              <div>
                <span className="block text-[11px] text-[#A9AEA6] font-sans">Teklif E-posta:</span>
                <a href={`mailto:${companyData.quoteEmail}`} className="text-rust hover:text-rust-light font-sans">
                  {companyData.quoteEmail}
                </a>
              </div>
              <div className="pt-1">
                <Link href="/teklif-sepeti" className="inline-flex items-center gap-1 text-rust hover:text-rust-light font-sans text-xs font-semibold">
                  <span>Teklif Sepetim (RFQ Cart) →</span>
                </Link>
              </div>
              <div className="pt-2">
                <Link
                  href="/iletisim"
                  className="inline-block px-3 py-1.5 bg-industrial-850 hover:bg-industrial-800 text-white font-sans text-[11px] border border-industrial-700 hover:border-rust transition-colors"
                >
                  Adres & Ulaşım Bilgileri →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar: Copyright, Legal & Policies */}
      <div className="border-t border-white/15 py-6 bg-[#191D20]">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A9AEA6]">
          <div>
            © {currentYear} Emek Conta. Tüm hakları saklıdır. Endüstriyel Sızdırmazlık Çözümleri.
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3">
            <Link href="/hakkimizda" className="hover:text-industrial-300 transition-colors">
              Kurumsal Kimlik
            </Link>
            <span className="text-industrial-800">|</span>
            <Link href="/kvkk" className="hover:text-industrial-300 transition-colors">
              KVKK Aydınlatma
            </Link>
            <span className="text-industrial-800">|</span>
            <Link href="/cerez-politikasi" className="hover:text-industrial-300 transition-colors">
              Çerez Politikası
            </Link>
            <span className="text-industrial-800">|</span>
            <Link href="/teknik-bilgi" className="hover:text-industrial-300 transition-colors">
              Standartlar
            </Link>
            <span className="text-industrial-800">|</span>
            <Link href="/ihracat" className="hover:text-industrial-300 transition-colors">
              İhracat
            </Link>
            <span className="text-industrial-800">|</span>
            <Link href="/en" className="hover:text-industrial-300 transition-colors">
              English
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
