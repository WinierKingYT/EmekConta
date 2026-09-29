import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
}

export function SectionHeader({
  tag,
  title,
  description,
  align = "left",
  className,
  action,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-8 sm:mb-12",
        isCenter ? "text-center max-w-3xl mx-auto" : "flex flex-col md:flex-row md:items-end md:justify-between gap-6",
        className
      )}
    >
      <div className={cn(isCenter ? "w-full" : "max-w-3xl")}>
        {tag && (
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-4 h-[2px] bg-steel-blue inline-block"></span>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-steel-darkblue">
              {tag}
            </span>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-industrial-900 leading-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-base sm:text-lg text-industrial-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {action && !isCenter && (
        <div className="shrink-0">{action}</div>
      )}
    </div>
  );
}
