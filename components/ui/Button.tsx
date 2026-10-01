import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "accent" | "ghost" | "forge";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rust focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg select-none text-center cursor-pointer";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider",
    md: "px-5 py-2.5 text-sm font-semibold tracking-wide",
    lg: "px-7 py-3.5 text-base font-semibold tracking-wide",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-b from-[#24334a] to-[#141d2a] text-white hover:border-rust/80 hover:shadow-glow-rust-sm border border-industrial-700/80 shadow-machined font-semibold hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-industrial-100 text-night hover:bg-industrial-200 border border-industrial-200 hover:border-industrial-300 shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "bg-white/60 backdrop-blur-xs text-night border border-industrial-300 hover:border-rust hover:text-rust hover:bg-rust-subtle/50 hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    accent:
      "bg-gradient-to-b from-rust-hot via-rust to-rust-forge text-white hover:from-rust-ember hover:to-rust border border-rust-ember/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_2px_8px_rgba(183,65,14,0.35)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_0_20px_rgba(232,89,34,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-inner font-bold tracking-wide",
    forge:
      "bg-gradient-to-b from-rust-hot via-rust to-rust-forge text-white hover:from-rust-ember hover:to-rust border border-rust-ember/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_2px_8px_rgba(183,65,14,0.35)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_0_22px_rgba(232,89,34,0.45)] hover:-translate-y-0.5 active:translate-y-0 font-bold tracking-wide",
    ghost:
      "bg-transparent text-night hover:text-rust hover:bg-rust-subtle/60 border border-transparent",
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
