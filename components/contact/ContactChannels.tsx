import { companyData } from "@/data/company";
import { PhoneIcon, WhatsappIcon, MailIcon, ArrowRightIcon } from "@/components/icons/Icons";
const channels = [
  { label: "Telefon", detail: "Teknik danışma ve sipariş takibi", value: companyData.phoneFormatted, href: `tel:${companyData.phone}`, icon: PhoneIcon, action: "Bizi arayın", external: false },
  { label: "WhatsApp", detail: "Çizim ve numune fotoğrafı paylaşımı", value: companyData.whatsappFormatted, href: `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, "")}`, icon: WhatsappIcon, action: "Görüşmeyi başlatın", external: true },
  { label: "E-posta", detail: "Teknik dosyalar ve teklif talepleri", value: companyData.quoteEmail, href: `mailto:${companyData.quoteEmail}`, icon: MailIcon, action: "E-posta gönderin", external: false },
];
export function ContactChannels() {
  return <div className="grid gap-8 md:grid-cols-3">{channels.map(channel => <a key={channel.label} href={channel.href} target={channel.external ? "_blank" : undefined} rel={channel.external ? "noopener noreferrer" : undefined} className="group flex min-w-0 flex-col border-t border-[#191D20]/20 py-6 text-[#191D20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-rust"><channel.icon className="mb-6 h-6 w-6 text-[#A23A10]" /><h2 className="text-xl font-medium">{channel.label}</h2><p className="mt-2 text-sm text-[#62635F]">{channel.detail}</p><span className="my-6 break-words text-base font-medium sm:text-lg">{channel.value}</span><span className="mt-auto inline-flex items-center gap-6 text-sm text-[#96350B]">{channel.action}<ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></a>)}</div>;
}
