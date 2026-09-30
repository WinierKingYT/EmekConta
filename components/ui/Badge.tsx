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
    neutral: "bg-industrial-100 text-night border-industrial-200",
    accent: "bg-brick-subtle text-brick border-brick-light/40 font-semibold",
    dark: "bg-night text-white border-night-border",
    outline: "bg-transparent text-night border-industrial-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs font-mono font-medium uppercase tracking-wider border rounded-md",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
