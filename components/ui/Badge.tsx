import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "accent" | "dark" | "outline";
  children: React.ReactNode;
}

export function Badge({
  variant = "neutral",
  className,
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    neutral: "bg-industrial-100 text-industrial-800 border-industrial-200",
    accent: "bg-steel-light text-steel-darkblue border-sky-200",
    dark: "bg-industrial-900 text-white border-industrial-800",
    outline: "bg-transparent text-industrial-700 border-industrial-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs font-mono font-medium uppercase tracking-wider border rounded-none",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
