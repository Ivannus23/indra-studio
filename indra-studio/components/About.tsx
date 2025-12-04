"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section id="sobre-mí">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Quién está detrás de Indra Studio
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Soy estudiante de Ingeniería Mecánica y llevo mi forma de pensar en
            sistemas, eficiencia y claridad a cada sitio que diseño. No hago
            páginas solo “bonitas”: cuido estructura, tiempos de carga y cómo
            se siente navegar tu marca.
          </p>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            He trabajado en proyectos educativos y de negocio como sistemas de
            rifas en línea, sitios informativos para eventos académicos y
            páginas temáticas para explicar conceptos técnicos de forma visual.
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-white/10 bg-black/50 p-4 text-xs text-slate-200 shadow-lg sm:text-sm"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-indigo-200/80">
            Forma de trabajar
          </p>
          <ul className="mt-3 space-y-2">
            <li>· Explico el proceso sin tecnicismos innecesarios.</li>
            <li>· Te propongo la estructura, no te dejo solo con el contenido.</li>
            <li>· Entregas claras, sin letras chiquitas.</li>
            <li>· Todo listo para que puedas mostrarlo en celular y computadora.</li>
          </ul>

          <div className="mt-4 border-t border-white/10 pt-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">
              Stack que uso
            </p>
            <p className="mt-2 text-xs text-slate-300">
              Next.js · React · Tailwind · Animaciones con Framer Motion ·
              integración con formularios y herramientas externas.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
