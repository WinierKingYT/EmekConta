import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import {
  PhoneIcon,
  WhatsappIcon,
  MailIcon,
  MapPinIcon,
  ShieldCheckIcon,
} from "@/components/icons/Icons";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-industrial-950 text-industrial-300 border-t border-industrial-800 text-sm">
      {/* Upper Footer: Engineering Value Ribbon */}
      <div className="border-b border-industrial-850 py-8 bg-industrial-900/60">
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-6 text-industrial-300">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-industrial-800 text-steel-blue border border-industrial-700 shrink-0">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Teknik Doğruluk & Standartlar</h4>
              <p className="text-xs text-industrial-400 mt-1">
                DIN, ASME ve EN normlarına uygun standart ve numuneye göre özel üretim sızdırmazlık parçaları.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-industrial-800 text-steel-blue border border-industrial-700 shrink-0">
              <PhoneIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Hızlı Teknik Teklif</h4>
              <p className="text-xs text-industrial-400 mt-1">
                CAD, DXF veya teknik resminizi iletin; malzeme ve tolerans analizini yaparak teklif hazırlayalım.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-industrial-800 text-steel-blue border border-industrial-700 shrink-0">
              <MapPinIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">İstanbul Üretim & Satış</h4>
              <p className="text-xs text-industrial-400 mt-1">
                İkitelli OSB İmalat tesisimiz ve Karaköy şubemiz ile endüstri ve denizcilik sektörüne kesintisiz hizmet.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Links */}
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: About Emek Conta */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-industrial-800 border border-steel-blue/40 flex items-center justify-center font-mono font-bold text-xs text-white">
                <span className="text-steel-blue">E</span>C
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                EMEK CONTA
              </span>
            </div>
            <p className="text-industrial-400 text-xs sm:text-sm leading-relaxed max-w-md">
              1997 yılından bu yana sanayi tesisleri, rafineriler, enerji santralleri ve denizcilik sektörü için yüksek sıcaklık, basınç ve kimyasal ortamlara dayanıklı endüstriyel sızdırmazlık elemanları imal ediyoruz.
            </p>
            <div className="pt-2 flex flex-col gap-1.5 text-xs text-industrial-400 font-mono">
              <div>İmalat: İkitelli OSB / Başakşehir / İstanbul</div>
              <div>Şube: Karaköy Perşembe Pazarı / İstanbul</div>
            </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <h3 className="text-white font-semibold text-xs font-mono tracking-wider uppercase mb-4">
              Ürün Grupları
            </h3>
            <ul className="space-y-2.5 text-xs text-industrial-400">
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
                <Link href="/urunler" className="text-steel-blue hover:text-sky-300 font-medium pt-1 inline-block">
                  Tüm Kataloğu İncele →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Corporate & Services */}
          <div>
            <h3 className="text-white font-semibold text-xs font-mono tracking-wider uppercase mb-4">
              Kurumsal & Hizmetler
            </h3>
            <ul className="space-y-2.5 text-xs text-industrial-400">
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
                  1997'den Bugüne Tarihçe
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
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div>
            <h3 className="text-white font-semibold text-xs font-mono tracking-wider uppercase mb-4">
              İletişim & Teklif
            </h3>
            <div className="space-y-3 text-xs text-industrial-400">
              <div>
                <span className="block text-[11px] text-industrial-500 font-mono">Santral:</span>
                <a href={`tel:${companyData.phone}`} className="text-industrial-200 hover:text-white font-mono">
                  {companyData.phoneFormatted}
                </a>
              </div>
              <div>
                <span className="block text-[11px] text-industrial-500 font-mono">WhatsApp RFQ:</span>
                <a
                  href={`https://wa.me/${companyData.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-mono"
                >
                  {companyData.whatsappFormatted}
                </a>
              </div>
              <div>
                <span className="block text-[11px] text-industrial-500 font-mono">Teklif E-posta:</span>
                <a href={`mailto:${companyData.quoteEmail}`} className="text-steel-blue hover:text-sky-300 font-mono">
                  {companyData.quoteEmail}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/iletisim"
                  className="inline-block px-3 py-1.5 bg-industrial-850 hover:bg-industrial-800 text-white font-mono text-[11px] border border-industrial-700 transition-colors"
                >
                  Adres & Ulaşım Bilgileri →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar: Copyright, Legal & Policies */}
      <div className="border-t border-industrial-850 py-6 bg-industrial-950">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-industrial-500">
          <div>
            © {currentYear} Emek Conta. Tüm hakları saklıdır. Endüstriyel Sızdırmazlık Çözümleri.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/hakkimizda" className="hover:text-industrial-300 transition-colors">
              Kurumsal Kimlik
            </Link>
            <span className="text-industrial-800">|</span>
            <Link href="/iletisim" className="hover:text-industrial-300 transition-colors">
              KVKK & Gizlilik
            </Link>
            <span className="text-industrial-800">|</span>
            <Link href="/teknik-bilgi" className="hover:text-industrial-300 transition-colors">
              Teknik Standartlar
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
