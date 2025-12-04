"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import WhyIndraLottie from "./effects/WhyIndraLottie";

const reasons = [
  {
    title: "Diseño minimalista, enfoque máximo",
    desc: "Nada de pantallas saturadas. Cada elemento en tu sitio tiene un propósito: guiar al usuario hacia la acción que te conviene.",
  },
  {
    title: "Mentalidad de ingeniería",
    desc: "Como estudiante de Ingeniería Mecánica pienso en sistemas, estructura y eficiencia. Eso también se refleja en tu página web.",
  },
  {
    title: "Comunicación clara",
    desc: "Te explico el proceso sin tecnicismos innecesarios y te mantengo al tanto de cada avance.",
  },
  {
    title: "Acompañamiento real",
    desc: "No solo entrego una página y desaparezco. Te ayudo a entender cómo usarla y cómo sacarle provecho.",
  },
];

export default function WhyIndra() {
  return (
    <Section id="por-que">
      <div className="space-y-10">
        {/* Encabezado + Lottie */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Por qué trabajar con Indra Studio
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              No solo hago que tu sitio se vea bien: cuido estructura, velocidad,
              claridad del mensaje y cómo se siente navegarlo.
            </p>
          </div>

          {/* Lottie a la derecha */}
          <WhyIndraLottie />
        </div>

        {/* Tarjetas */}
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason, i) => (
            <motion.article
              key={reason.title}
              className="rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4, borderColor: "rgba(129,140,248,0.7)" }}
            >
              <h3 className="text-base font-semibold text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{reason.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
