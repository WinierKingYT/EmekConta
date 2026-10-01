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
    "relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rust focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg select-none text-center cursor-pointer overflow-hidden group";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs uppercase tracking-wider",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-b from-[#26374e] via-[#1a2638] to-[#121a26] text-white border border-industrial-600/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-2px_0_rgba(0,0,0,0.5),0_4px_12px_rgba(0,0,0,0.4)] hover:border-rust-ember/80 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_0_20px_rgba(207,75,20,0.35)] hover:-translate-y-0.5 active:translate-y-[1px] active:shadow-inner",
    secondary:
      "bg-industrial-100 text-night hover:bg-industrial-200 border border-industrial-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-[1px]",
    outline:
      "bg-night-surface/60 backdrop-blur-xs text-white border border-night-border hover:border-rust-ember hover:text-white hover:bg-rust-forge/20 shadow-inner-bevel hover:-translate-y-0.5 active:translate-y-[1px]",
    accent:
      "bg-gradient-to-b from-rust-hot via-rust to-rust-forge text-white hover:from-rust-ember hover:to-rust border border-rust-ember/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-2px_0_rgba(0,0,0,0.4),0_4px_14px_rgba(183,65,14,0.35)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_0_25px_rgba(232,89,34,0.5)] hover:-translate-y-0.5 active:translate-y-[1px] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]",
    forge:
      "bg-gradient-to-b from-rust-hot via-rust to-rust-forge text-white hover:from-rust-ember hover:to-rust border border-rust-ember/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-2px_0_rgba(0,0,0,0.45),0_4px_16px_rgba(183,65,14,0.4)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0_28px_rgba(232,89,34,0.6)] hover:-translate-y-0.5 active:translate-y-[1px] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]",
    ghost:
      "bg-transparent text-night hover:text-rust hover:bg-rust-subtle/60 border border-transparent",
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const hasChamfer = variant === "accent" || variant === "forge" || variant === "primary";

  const content = (
    <>
      {/* Machined top-right 45-degree chamfer accent */}
      {hasChamfer && (
        <span
          className="absolute top-0 right-0 w-2.5 h-2.5 bg-white/20 rotate-45 transform origin-top-right pointer-events-none group-hover:bg-white/40 transition-colors"
          aria-hidden="true"
        />
      )}
      {/* Machined left tactile grip notch */}
      {hasChamfer && (
        <span
          className="absolute left-1 top-1/2 -translate-y-1/2 w-0.5 h-3 bg-white/25 rounded-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />
      )}
      {children}
    </>
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
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
