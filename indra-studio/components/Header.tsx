"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#por-que", label: "Por qué Indra" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#planes", label: "Planes" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Scroll + sección activa (dependencias fijas: [])
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navItems
        .map((item) => {
          const el = document.querySelector(item.href) as HTMLElement | null;
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { id: item.href, top: rect.top };
        })
        .filter(Boolean) as { id: string; top: number }[];

      const current = sections.reduce(
        (acc, section) => {
          if (section.top <= 140 && section.top > acc.offsetTop) {
            return { id: section.id, offsetTop: section.top };
          }
          return acc;
        },
        { id: "#top", offsetTop: -Infinity }
      );

      setActive(current.id !== "#top" ? current.id : null);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href) as HTMLElement | null;
    if (!el) return;
    const y = el.offsetTop - 80; // ajusta si tu header es más alto/bajo
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-black/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
        {/* Logo */}
        <Link
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-lg">
            ⚡
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Indra <span className="text-indigo-300">Studio</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-xs font-medium text-slate-200 sm:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="relative"
            >
              <span
                className={`transition ${
                  active === item.href
                    ? "text-indigo-200"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </span>
              {active === item.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-indigo-400"
                />
              )}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("#contacto")}
            className="rounded-full bg-indigo-500 px-3 py-1.5 text-[11px] font-semibold text-white shadow-[0_0_20px_rgba(129,140,248,0.7)] hover:bg-indigo-400"
          >
            Hablemos
          </button>
        </nav>

        {/* Botón móvil */}
        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/20 sm:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          <span
    className={`absolute h-[1.5px] w-4 bg-white transition-all ${
      open ? "rotate-45" : "-translate-y-1.5"
    }`}
  />
          <span
    className={`absolute h-[1.5px] w-4 bg-white transition-all ${
      open ? "-rotate-45" : "translate-y-1.5"
    }`}
  />
        </button>
      </div>

      {/* Menú móvil simple debajo del header */}
      {open && (
        <div className="sm:hidden border-t border-white/10 bg-black/95">
          <div className="mx-auto max-w-6xl px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-sm text-slate-100 py-1"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick("#contacto")}
              className="mt-3 w-full rounded-full bg-indigo-500 px-4 py-2 text-xs font-semibold text-white"
            >
              Hablemos de tu proyecto
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
