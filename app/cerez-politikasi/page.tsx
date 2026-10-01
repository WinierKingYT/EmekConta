import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ShieldCheckIcon, DocumentTextIcon } from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Çerez Politikası (Cookie Policy) | Emek Conta",
  description:
    "Emek Conta web sitesinde kullanılan çerez türleri, kullanım amaçları ve çerez tercihlerinizi yönetme yöntemleri hakkında detaylı bilgilendirme.",
  alternates: {
    canonical: "https://emekconta.com/cerez-politikasi",
  },
};

export default function CookiePolicyPage() {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Çerez Politikası", href: "/cerez-politikasi" },
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
                GİZLİLİK & TEKNOLOJİ BİLDİRİMİ
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-night tracking-tight">
              Çerez (Cookie) Kullanım Politikası
            </h1>
            <p className="text-sm text-industrial-500 font-mono mt-3">
              Son Güncelleme: 01.01.2026 | Emek Conta Sanayi ve Ticaret
            </p>
          </div>

          {/* Section 1: Çerez Nedir */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-night mb-3 flex items-center gap-2">
              <span className="font-mono text-rust">1.</span>
              <span>Çerez (Cookie) Nedir?</span>
            </h2>
            <p className="text-sm leading-relaxed text-industrial-700">
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza (bilgisayar, tablet veya akıllı telefon) kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin verimli çalışmasını, kullanıcı deneyiminin kişiselleştirilmesini ve B2B işlemlerinin (sepet yönetimi, dil seçimi vb.) kesintisiz sürdürülmesini sağlar.
            </p>
          </section>

          {/* Section 2: Kullanılan Çerez Türleri */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-night mb-3 flex items-center gap-2">
              <span className="font-mono text-rust">2.</span>
              <span>Web Sitemizde Kullanılan Çerez Kategorileri</span>
            </h2>

            <div className="space-y-4">
              {/* Category A: Zorunlu */}
              <div className="p-4 bg-industrial-50 border border-industrial-200 rounded-lg">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-night text-sm">A. Zorunlu ve Teknik Çerezler</h3>
                  <span className="px-2 py-0.5 bg-industrial-800 text-white text-[10px] font-mono rounded font-bold">
                    Zorunlu
                  </span>
                </div>
                <p className="text-xs text-industrial-600 leading-relaxed mb-3">
                  Web sitemizin güvenliği, temel gezinme işlevleri ve B2B teklif sepetinin tarayıcıda tutulması için vazgeçilmezdir. Bu çerezler engellendiğinde teklif sepeti ve form gönderimi doğru çalışmayabilir.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[11px] font-mono border-t border-industrial-200">
                    <thead>
                      <tr className="text-industrial-500">
                        <th className="py-1.5 pr-4">Çerez Adı</th>
                        <th className="py-1.5 pr-4">Amacı</th>
                        <th className="py-1.5">Süre</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industrial-200 text-industrial-700">
                      <tr>
                        <td className="py-1.5 pr-4 font-bold text-night">rfq_cart_v1</td>
                        <td className="py-1.5 pr-4">Seçilen ürünlerin teklif sepetinde tutulması</td>
                        <td className="py-1.5">Yerel Depolama (Kalıcı)</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 pr-4 font-bold text-night">emek_cookie_consent_v1</td>
                        <td className="py-1.5 pr-4">Çerez tercih bildiriminin durumunu hatırlar</td>
                        <td className="py-1.5">12 Ay</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Category B: Analitik */}
              <div className="p-4 bg-industrial-50 border border-industrial-200 rounded-lg">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-night text-sm">B. Analitik ve Performans Çerezleri</h3>
                  <span className="px-2 py-0.5 bg-emerald-900 text-emerald-300 text-[10px] font-mono rounded font-bold">
                    İsteğe Bağlı (Onaya Tabi)
                  </span>
                </div>
                <p className="text-xs text-industrial-600 leading-relaxed mb-3">
                  Web sitemizin hangi sayfalarının daha çok ilgi gördüğünü, indirme ve teklif dönüşümlerini anonim olarak analiz etmemizi sağlar. Reklam veya pazarlama amaçlı hedefleme yapılmaz.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[11px] font-mono border-t border-industrial-200">
                    <thead>
                      <tr className="text-industrial-500">
                        <th className="py-1.5 pr-4">Sağlayıcı / Çerez</th>
                        <th className="py-1.5 pr-4">Amacı</th>
                        <th className="py-1.5">Süre</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industrial-200 text-industrial-700">
                      <tr>
                        <td className="py-1.5 pr-4 font-bold text-night">Google Analytics (_ga, _ga_*)</td>
                        <td className="py-1.5 pr-4">Anonim ziyaretçi sayısı, sayfa gösterimleri ve teknik föy etkileşimi</td>
                        <td className="py-1.5">2 Yıl</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 pr-4 font-bold text-night">Microsoft Clarity (_clck, _clsk)</td>
                        <td className="py-1.5 pr-4">Sayfa ısı haritaları ve kullanıcı gezinme deneyim optimizasyonu</td>
                        <td className="py-1.5">1 Yıl / Oturum</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Çerezleri Yönetme ve Devre Dışı Bırakma */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-night mb-3 flex items-center gap-2">
              <span className="font-mono text-rust">3.</span>
              <span>Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?</span>
            </h2>
            <p className="text-sm leading-relaxed text-industrial-700 mb-4">
              Web sitemizi ziyaret ettiğinizde ekranın alt kısmında beliren çerez bandından tercihlerinizi dilediğiniz zaman değiştirebilirsiniz. Ayrıca internet tarayıcınızın ayarlarından çerezleri dilediğiniz an silebilir veya engelleyebilirsiniz:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 bg-industrial-50 border border-industrial-200 rounded-lg">
                <strong className="block text-night mb-1 font-bold">Google Chrome:</strong>
                <span className="text-industrial-600">Ayarlar → Gizlilik ve Güvenlik → Üçüncü taraf çerezleri</span>
              </div>
              <div className="p-3 bg-industrial-50 border border-industrial-200 rounded-lg">
                <strong className="block text-night mb-1 font-bold">Mozilla Firefox:</strong>
                <span className="text-industrial-600">Seçenekler → Gizlilik ve Güvenlik → Çerezler ve Site Verileri</span>
              </div>
              <div className="p-3 bg-industrial-50 border border-industrial-200 rounded-lg">
                <strong className="block text-night mb-1 font-bold">Apple Safari:</strong>
                <span className="text-industrial-600">Tercihler → Gizlilik → Tüm çerezleri engelle</span>
              </div>
              <div className="p-3 bg-industrial-50 border border-industrial-200 rounded-lg">
                <strong className="block text-night mb-1 font-bold">Microsoft Edge:</strong>
                <span className="text-industrial-600">Ayarlar → Çerezler ve site izinleri → Çerezleri yönet ve sil</span>
              </div>
            </div>
          </section>

          {/* Section 4: Yasal Haklar ve İletişim */}
          <section className="pt-6 border-t border-industrial-200">
            <h2 className="text-lg font-bold text-night mb-3 flex items-center gap-2">
              <span className="font-mono text-rust">4.</span>
              <span>KVKK Hakları ve İletişim</span>
            </h2>
            <p className="text-sm leading-relaxed text-industrial-700 mb-4">
              Çerezler vasıtasıyla işlenen kişisel verilerinize ilişkin 6698 sayılı Kanun’un 11. maddesindeki haklarınız hakkında detaylı bilgi almak için{" "}
              <Link href="/kvkk" className="text-rust hover:underline font-semibold">
                KVKK Aydınlatma Metnimizi
              </Link>{" "}
              okuyabilir veya sorularınızı iletmek için bizimle iletişime geçebilirsiniz.
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="/kvkk"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-rust text-white hover:bg-rust-dark rounded-lg transition-colors font-semibold text-xs"
              >
                <ShieldCheckIcon className="w-4 h-4" />
                <span>KVKK Aydınlatma Metni →</span>
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-industrial-100 hover:bg-industrial-200 text-industrial-800 rounded-lg transition-colors text-xs font-mono font-bold"
              >
                <span>İletişim Formu</span>
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
