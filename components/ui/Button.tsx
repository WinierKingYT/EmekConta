import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "accent" | "ghost" | "forge";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export function Button({ variant = "primary", size = "md", href, isExternal, className, children, ...props }: ButtonProps) {
  const sizes = { sm: "px-4 py-2.5 text-xs", md: "px-5 py-3 text-sm", lg: "px-6 py-4 text-sm" };
  const variants = {
    primary: "bg-[#191D20] text-white border border-[#191D20] hover:bg-[#33383B]",
    secondary: "bg-[#EAE7E1] text-[#191D20] border border-[#D9D5CD] hover:bg-[#DDD8CF]",
    outline: "bg-[#191D20]/75 text-white border border-white/30 hover:bg-[#33383B] hover:border-white/60",
    accent: "bg-[#B7410E] text-white border border-[#B7410E] hover:bg-[#96350B] hover:border-[#96350B]",
    forge: "bg-[#B7410E] text-white border border-[#B7410E] hover:bg-[#96350B] hover:border-[#96350B]",
    ghost: "bg-transparent text-[#191D20] border border-transparent hover:bg-[#EAE7E1] hover:text-[#96350B]",
  };
  const classes = cn("group inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rust disabled:opacity-50 disabled:pointer-events-none cursor-pointer", sizes[size], variants[variant], className);
  if (href) return isExternal ? <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{children}</a> : <Link href={href} className={classes}>{children}</Link>;
  return <button className={classes} {...props}>{children}</button>;
}
