import { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-indigo-500 text-white hover:bg-indigo-400 shadow-[0_0_25px_rgba(129,140,248,0.7)] hover:shadow-[0_0_45px_rgba(129,140,248,0.9)]",
  secondary:
    "border border-indigo-400/40 text-indigo-200 hover:bg-indigo-500/10",
  ghost:
    "text-slate-300 hover:text-white hover:bg-white/5",
};


export function Button({
  as = "button",
  href,
  children,
  variant = "primary",
  className = "",
}: {
  as?: "button" | "link";
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition";

  if (as === "link" && href) {
    return (
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
