"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export default function CallToActionStrip() {
  return (
    <Section className="relative">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-indigo-500/40 bg-gradient-to-r from-indigo-600/40 via-sky-500/40 to-emerald-400/40 px-6 py-8 sm:px-10 sm:py-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
          <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-indigo-300/60 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-emerald-300/60 blur-3xl" />
        </div>

        <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-900/80">
              Próximo paso
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-950 sm:text-2xl">
              Tu sitio puede verse así de sólido, sin volverte experto en web.
            </h2>
            <p className="mt-2 text-sm text-slate-900">
              Cuéntame de qué va tu proyecto y te respondo con una propuesta
              clara: qué haría, tiempos y rango de inversión.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <Button
              as="link"
              href="#contacto"
              variant="primary"
              className="bg-slate-950 text-indigo-100 hover:bg-slate-900"
            >
              Enviar info de mi proyecto
            </Button>
            <a
              href="https://wa.me/523223830209"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-900 underline-offset-2 hover:underline"
            >
              ¿Prefieres WhatsApp? Escríbeme directo ↗
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
