"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Escucho tu proyecto",
    desc: "Hablamos de tu negocio, tus objetivos y lo que esperas de tu página web.",
  },
  {
    title: "Defino la estructura",
    desc: "Propongo secciones, contenido y flujo de navegación para que todo sea claro y fácil de usar.",
  },
  {
    title: "Diseño y desarrollo",
    desc: "Construyo el sitio con un diseño limpio, moderno y adaptable a celular, tablet y computadora.",
  },
  {
    title: "Lanzamiento y ajustes finos",
    desc: "Publico tu página, hacemos pruebas reales y afino detalles hasta que todo quede como debe.",
  },
];

export default function Process() {
  return (
    <Section id="proceso" className="bg-white/[0.02]">
      <div className="space-y-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Un proceso simple, pensado para ti
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            No necesitas saber de tecnología. Yo te guío paso a paso.
          </p>
        </div>

        <ol className="relative space-y-6 border-l border-white/10 pl-5">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span className="absolute -left-[33px] flex h-7 w-7 items-center justify-center rounded-full border border-indigo-300/60 bg-black text-xs font-semibold text-indigo-100 shadow shadow-indigo-500/30">
                {i + 1}
              </span>
              <h3 className="text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-300">{step.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
