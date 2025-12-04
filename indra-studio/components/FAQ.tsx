"use client";

import { Section } from "./ui/Section";

const faqs = [
  {
    q: "¿Cuánto tiempo tarda en estar lista mi página?",
    a: "Depende del plan y de qué tan rápido tengamos el contenido, pero normalmente entre 1 y 3 semanas desde que definimos estructura y estilos.",
  },
  {
    q: "¿Qué necesito tener listo antes de empezar?",
    a: "Nombre de tu marca, una idea clara de tus servicios y, si ya tienes, logotipo e imágenes. Si no, puedo ayudarte a ordenarlo durante el proceso.",
  },
  {
    q: "¿El precio incluye dominio y hosting?",
    a: "El servicio de diseño y desarrollo es independiente. Puedo asesorarte para contratar dominio y hosting de forma sencilla y económica, o usar plataformas modernas como Vercel.",
  },
  {
    q: "¿Cómo manejas los pagos?",
    a: "Trabajo con un anticipo para iniciar y el resto a la entrega. Todo se acuerda por escrito antes de empezar para que tengas claridad total.",
  },
];

export default function FAQ() {
  return (
    <Section id="faq" className="bg-white/[0.02]">
      <div className="space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            La mayoría de las dudas se repiten. Aquí respondo las más comunes
            para que tengas una idea clara antes de escribirme.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-white/10 bg-black/40 p-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-medium text-slate-100">
                <span>{item.q}</span>
                <span className="text-xs text-slate-400 group-open:hidden">
                  +
                </span>
                <span className="hidden text-xs text-slate-400 group-open:inline">
                  −
                </span>
              </summary>
              <p className="mt-2 text-sm text-slate-300">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
