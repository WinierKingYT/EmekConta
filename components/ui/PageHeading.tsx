import { ReactNode } from "react";
export function PageHeading({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description: string }) {
  return <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end"><div><p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#A23A10]">{eyebrow}</p><h1 className="text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-6xl">{title}</h1></div><p className="max-w-md text-base leading-relaxed text-[#62635F] lg:justify-self-end">{description}</p></div>;
}
