import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "accent" | "ghost";
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
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brick focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-none select-none text-center";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider",
    md: "px-5 py-2.5 text-sm font-semibold tracking-wide",
    lg: "px-7 py-3.5 text-base font-semibold tracking-wide",
  };

  const variantClasses = {
    primary:
      "bg-night text-white hover:bg-night-light border border-night shadow-sm",
    secondary:
      "bg-industrial-100 text-night hover:bg-industrial-200 border border-industrial-200",
    outline:
      "bg-transparent text-night border border-industrial-300 hover:border-rust hover:text-rust hover:bg-white",
    accent:
      "bg-brick text-white hover:bg-brick-hover border border-brick shadow-sm font-bold",
    ghost:
      "bg-transparent text-night hover:bg-industrial-100 border border-transparent",
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
