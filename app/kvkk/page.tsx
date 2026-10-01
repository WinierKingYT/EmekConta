import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ShieldCheckIcon, DocumentTextIcon, PhoneIcon, MailIcon } from "@/components/icons/Icons";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Emek Conta",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca kişisel verilerinizin işlenmesi, korunması, aktarılması ve haklarınıza ilişkin aydınlatma metni.",
  alternates: {
    canonical: "https://emekconta.com/kvkk",
  },
};

export default function KvkkPage() {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
  ];

  return (
    <div className="bg-industrial-50 min-h-screen py-10 sm:py-16">
      <Container>
        <Breadcrumb items={breadcrumbItems} />

        <div className="max-w-4xl mx-auto mt-6 bg-white border border-industrial-200 rounded-xl p-6 sm:p-12 shadow-xs text-industrial-800">
          {/* Header */}
          <div className="border-b border-industrial-200 pb-8 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-rust/10 border border-rust/30 flex items-center justify-center text-rust">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold tracking-widest text-rust uppercase">
                6698 SAYILI KANUN KAPSAMINDA
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-night tracking-tight">
              Kişisel Verilerin Korunması ve İşlenmesi Aydınlatma Metni
            </h1>
            <p className="text-sm text-industrial-500 font-mono mt-3">
              Son Güncelleme: 01.01.2026 | Veri Sorumlusu: Emek Conta Sanayi ve Ticaret
            </p>
          </div>

          {/* Section 1: Veri Sorumlusu */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-night mb-3 flex items-center gap-2">
              <span className="font-mono text-rust">1.</span>
              <span>Veri Sorumlusunun Kimliği</span>
            </h2>
            <p className="text-sm leading-relaxed text-industrial-700">
              6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, <strong>Emek Conta Sanayi ve Ticaret</strong> (“Emek Conta” veya “Şirket”) olarak, veri sorumlusu sıfatıyla, tarafımıza sağladığınız kişisel verileri aşağıda açıklanan çerçevede ve mevzuata uygun olarak işlemekte, saklamakta ve korumaktayız.
            </p>
            <div className="mt-3 p-4 bg-industrial-50 border border-industrial-150 rounded-lg font-mono text-xs space-y-1 text-industrial-700">
              <div><strong>Firma Ünvanı:</strong> Emek Conta Sanayi ve Ticaret</div>
              <div><strong>Adres & İletişim Ofisi:</strong> {companyData.locations[0].address}, {companyData.locations[0].district} / {companyData.locations[0].city}</div>
              <div><strong>E-Posta:</strong> {companyData.email} | <strong>Telefon:</strong> {companyData.phoneFormatted}</div>
            </div>
          </section>

          {/* Section 2: İşlenen Veriler ve Toplama Yöntemleri */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-night mb-3 flex items-center gap-2">
              <span className="font-mono text-rust">2.</span>
              <span>İşlenen Kişisel Veri Kategorileri ve Toplama Yöntemleri</span>
            </h2>
            <p className="text-sm leading-relaxed text-industrial-700 mb-3">
              Web sitemizi ziyaretiniz ve B2B formlarımızı kullanımınız esnasında aşağıdaki kişisel verileriniz elektronik ortamda toplanmaktadır:
            </p>
            <ul className="space-y-2 text-sm text-industrial-700 list-disc list-inside">
              <li>
                <strong>Kimlik ve İletişim Bilgileri:</strong> Ad, soyad, firma/kurum ünvanı, kurumsal e-posta adresi, telefon numarası, vergi kimlik numarası (bayilik ve teklif formlarında).
              </li>
              <li>
                <strong>Müşteri İşlem ve Teknik Talep Verileri:</strong> Teklif sepeti içeriği, numune talep edilen ürün grupları, teslimat/şantiye adresi, teknik çizim/CAD dosyaları (.dwg, .dxf, .step, .pdf), flanş ölçüleri ve teknik tolerans notları.
              </li>
              <li>
                <strong>İşlem Güvenliği ve Analitik Verileri:</strong> İnternet protokolü (IP) adresi, tarayıcı türü, ziyaret edilen sayfalar, oturum süresi ve çerez (cookie) kayıtları.
              </li>
            </ul>
          </section>

          {/* Section 3: İşleme Amaçları ve Hukuki Sebepleri */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-night mb-3 flex items-center gap-2">
              <span className="font-mono text-rust">3.</span>
              <span>Kişisel Verilerin İşlenme Amaçları ve Hukuki Sebepleri</span>
            </h2>
            <p className="text-sm leading-relaxed text-industrial-700 mb-3">
              Kişisel verileriniz, KVKK’nın 5. maddesinde belirtilen aşağıdaki hukuki sebeplere dayanarak işlenmektedir:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
              <div className="p-4 bg-industrial-50 border border-industrial-200 rounded-lg">
                <h3 className="font-bold text-night mb-1 text-sm">Bir Sözleşmenin Kurulması veya İfası (KVKK m.5/2-c)</h3>
                <p className="text-industrial-600 leading-relaxed">
                  B2B teknik tekliflerin (RFQ) hazırlanması, numune kitlerinin kargolanması, sipariş edilen contaların imalatı ve teslimat süreçlerinin yürütülmesi.
                </p>
              </div>
              <div className="p-4 bg-industrial-50 border border-industrial-200 rounded-lg">
                <h3 className="font-bold text-night mb-1 text-sm">Hukuki Yükümlülüklerin Yerine Getirilmesi (KVKK m.5/2-ç)</h3>
                <p className="text-industrial-600 leading-relaxed">
                  Mali mevzuat, fatura düzenleme, vergi beyannamesi, ticari kayıtların saklanması ve yasal denetim yükümlülüklerinin karşılanması.
                </p>
              </div>
              <div className="p-4 bg-industrial-50 border border-industrial-200 rounded-lg">
                <h3 className="font-bold text-night mb-1 text-sm">Meşru Menfaatlerimiz (KVKK m.5/2-f)</h3>
                <p className="text-industrial-600 leading-relaxed">
                  Web sitesi bilgi güvenliğinin sağlanması, teknik kataloglarımızın geliştirilmesi ve müşteri memnuniyetinin ölçümlenmesi.
                </p>
              </div>
              <div className="p-4 bg-industrial-50 border border-industrial-200 rounded-lg">
                <h3 className="font-bold text-night mb-1 text-sm">Açık Rıza (Gerektiğinde) (KVKK m.5/1)</h3>
                <p className="text-industrial-600 leading-relaxed">
                  İsteğe bağlı analitik ve performans çerezlerinin çalıştırılması (kullanıcı çerez panelinden onay verdiği takdirde).
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Verilerin Aktarılması */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-night mb-3 flex items-center gap-2">
              <span className="font-mono text-rust">4.</span>
              <span>Kişisel Verilerin Kimlere ve Hangi Amaçlarla Aktarılabileceği</span>
            </h2>
            <p className="text-sm leading-relaxed text-industrial-700">
              Kişisel verileriniz hiçbir surette üçüncü taraflara pazarlama veya ticari kazanç amacıyla satılmaz. Verileriniz yalnızca hizmetin ifası için zorunlu olan taraflarla (kargo ve lojistik firmaları, numune ve sipariş teslimi için anlaşmalı taşıyıcılar, yetkili adli/idari kamu kurumları ve güvenli sunucu altyapı sağlayıcıları) KVKK’nın 8. ve 9. maddelerine uygun olarak paylaşılır.
            </p>
          </section>

          {/* Section 5: İlgili Kişinin Hakları */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-night mb-3 flex items-center gap-2">
              <span className="font-mono text-rust">5.</span>
              <span>KVKK’nın 11. Maddesi Uyarınca Haklarınız</span>
            </h2>
            <p className="text-sm leading-relaxed text-industrial-700 mb-3">
              Kişisel veri sahibi olarak Şirketimize başvurarak aşağıdaki haklarınızı kullanabilirsiniz:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-industrial-700">
              <div className="p-3 bg-industrial-50 border border-industrial-150 rounded-lg">
                ✓ Kişisel verilerinizin işlenip işlenmediğini öğrenme
              </div>
              <div className="p-3 bg-industrial-50 border border-industrial-150 rounded-lg">
                ✓ Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme
              </div>
              <div className="p-3 bg-industrial-50 border border-industrial-150 rounded-lg">
                ✓ İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme
              </div>
              <div className="p-3 bg-industrial-50 border border-industrial-150 rounded-lg">
                ✓ Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
              </div>
              <div className="p-3 bg-industrial-50 border border-industrial-150 rounded-lg">
                ✓ Eksik veya yanlış işlenmişse düzeltilmesini isteme
              </div>
              <div className="p-3 bg-industrial-50 border border-industrial-150 rounded-lg">
                ✓ KVKK m.7 uyarınca silinmesini veya yok edilmesini talep etme
              </div>
            </div>
          </section>

          {/* Section 6: Başvuru Yöntemi */}
          <section className="pt-6 border-t border-industrial-200">
            <h2 className="text-lg font-bold text-night mb-3 flex items-center gap-2">
              <span className="font-mono text-rust">6.</span>
              <span>İletişim ve Başvuru Usulü</span>
            </h2>
            <p className="text-sm leading-relaxed text-industrial-700 mb-4">
              Yukarıda sayılan haklarınıza ilişkin taleplerinizi yazılı olarak veya Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ uyarınca kayıtlı elektronik posta (KEP) veya kurumsal e-posta adresimiz üzerinden Şirketimize iletebilirsiniz. Başvurunuz en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırılacaktır.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href={`mailto:${companyData.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-industrial-900 text-white hover:bg-industrial-800 rounded-lg transition-colors border border-industrial-750"
              >
                <MailIcon className="w-4 h-4 text-rust" />
                <span>{companyData.email}</span>
              </a>
              <a
                href={`tel:${companyData.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-industrial-900 text-white hover:bg-industrial-800 rounded-lg transition-colors border border-industrial-750"
              >
                <PhoneIcon className="w-4 h-4 text-rust" />
                <span>{companyData.phoneFormatted}</span>
              </a>
              <Link
                href="/cerez-politikasi"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-industrial-100 hover:bg-industrial-200 text-industrial-800 rounded-lg transition-colors border border-industrial-200"
              >
                <DocumentTextIcon className="w-4 h-4 text-rust" />
                <span>Çerez Politikası →</span>
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
