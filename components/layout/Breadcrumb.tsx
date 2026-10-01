import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons/Icons";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  language?: "tr" | "en";
}

export function Breadcrumb({ items, className = "", language = "tr" }: BreadcrumbProps) {
  const homeLabel = language === "en" ? "Home" : "Ana Sayfa";
  const homeHref = language === "en" ? "/en" : "/";
  // BreadcrumbList JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeLabel,
        item: `https://emekconta.com${homeHref}`,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: item.href ? `https://emekconta.com${item.href}` : undefined,
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className={`text-xs text-[#62635F] ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link href={homeHref} className="hover:text-industrial-900 transition-colors">
            {homeLabel}
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRightIcon className="w-3 h-3 text-industrial-400 shrink-0" />
              {isLast || !item.href ? (
                <span className="text-industrial-900 font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-industrial-900 transition-colors truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
