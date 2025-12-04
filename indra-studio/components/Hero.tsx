"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Section } from "./ui/Section";
import HeroVideoBackground from "./effects/HeroVideoBackground";
import ScrollIndicator from "./ScrollIndicator";


export default function Hero() {
  return (
    <Section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* FONDO DE VIDEO */}
      <HeroVideoBackground />

      {/* INDICADOR DE SCROLL */}
      <ScrollIndicator />

      {/* CONTENIDO DEL HERO */}
      <div className="relative z-10 flex flex-col items-start gap-12 md:flex-row md:items-center">
        {/* Columna de texto */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200/80">
            Web & Digital Solutions
          </p>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Páginas web que se sienten tan{" "}
            <span className="bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200 bg-clip-text text-transparent">
              poderosas
            </span>{" "}
            como tu negocio.
          </h1>

          <p className="mt-5 max-w-xl text-sm text-slate-200 sm:text-base">
            En Indra Studio diseño sitios web limpios, rápidos y profesionales
            para que tu marca inspire confianza desde el primer segundo.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button 
            as="link" 
            href="#contacto" 
            variant="primary"
            className="animate-pulse hover:animate-none"
            >
              Quiero mi página web
            </Button>
            <Button as="link" href="#servicios" variant="secondary">
              Ver servicios
            </Button>
          </div>

          <p className="mt-6 text-xs text-slate-300">
            Trabajo 100% en línea para clientes en todo México y Latinoamérica.
          </p>
        </motion.div>

        {/* Panel / “ventana” de preview a la derecha */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 60, rotate: 3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* halo de color detrás del panel */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500/60 via-sky-400/40 to-emerald-400/50 opacity-80 blur-xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900 to-slate-950 p-4 shadow-2xl">
              {/* barra tipo ventana */}
              <div className="mb-4 flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                <p className="ml-auto text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Indra Studio · Live Preview
                </p>
              </div>

              {/* líneas “skeleton” */}
              <motion.div
                className="mb-6 space-y-2 text-xs"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="h-2 w-4/5 rounded bg-white/10" />
                <div className="h-2 w-2/3 rounded bg-white/5" />
                <div className="h-2 w-3/4 rounded bg-indigo-400/40" />
              </motion.div>

              {/* tarjetas del panel */}
              <div className="grid gap-3 sm:grid-cols-2">
                <motion.div
                  className="rounded-2xl border border-white/10 bg-white/5 p-3"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <p className="text-[10px] font-medium text-indigo-200">
                    Landing de ventas
                  </p>
                  <p className="mt-1 text-xs text-slate-100">
                    Enfoque brutal en conversión con copy claro y diseño minimal.
                  </p>
                </motion.div>

                <motion.div
                  className="rounded-2xl border border-indigo-400/40 bg-indigo-500/10 p-3"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <p className="text-[10px] font-medium text-emerald-200">
                    Sistema de rifas
                  </p>
                  <p className="mt-1 text-xs text-slate-100">
                    Flujo completo: registros, boletos y panel admin.
                  </p>
                </motion.div>

                <motion.div
                  className="rounded-2xl border border-white/10 bg-black/40 p-3 sm:col-span-2"
                  whileHover={{ y: -4 }}
                >
                  <p className="text-[10px] font-medium text-slate-300">
                    Estilo Indra
                  </p>
                  <p className="mt-1 text-xs text-slate-200">
                    Ingeniería + diseño: páginas que no parecen plantillas, sino
                    <span className="font-semibold text-indigo-200">
                      {" "}
                      experiencias pensadas{" "}
                    </span>
                    para tu marca.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
