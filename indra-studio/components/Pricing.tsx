"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

const plans = [
  {
    name: "Presentación",
    price: "Desde $1,500",
    tag: "Ideal para comenzar",
    highlight: false,
    features: [
      "Hasta 3 secciones claras y bien estructuradas",
      "Diseño limpio y moderno alineado a tu marca",
      "Textos e imágenes proporcionados por el cliente",
      "Formulario de contacto funcional",
      "Sitio responsivo para celular, tablet y computadora",
    ],
  },
  {
    name: "Personal",
    price: "Desde $2,500",
    tag: "Perfecto para profesionales",
    highlight: false,
    features: [
      "Hasta 5 secciones enfocadas en tus servicios",
      "Componentes dinámicos y microinteracciones",
      "Formulario de contacto con validación",
      "Mapa de ubicación integrado",
      "Configuración básica de SEO (títulos y descripciones)",
    ],
  },
  {
    name: "Profesional",
    price: "Desde $4,000-4,500",
    tag: "Más pedido",
    highlight: true,
    features: [
      "Hasta 8–10 secciones (servicios, portafolio, testimonios y más)",
      "Construido con tecnología moderna (stack tipo React / Next)",
      "Optimización básica de velocidad y carga",
      "Estructura pensada para convertir visitas en clientes",
      "Integración con herramientas de análisis (Google Analytics, etc.)",
    ],
  },
  {
    name: "Empresarial",
    price: "Desde $7,000",
    tag: "Para proyectos serios",
    highlight: false,
    features: [
      "Hasta 15 secciones o más según tus necesidades",
      "Múltiples formularios (contacto, cotización, soporte, etc.)",
      "Secciones para equipo, blog y preguntas frecuentes",
      "Integraciones avanzadas con herramientas externas",
      "Acompañamiento en la estructura y estrategia de contenidos",
    ],
  },
  {
    name: "Tienda en línea",
    price: "Desde $9,000-10,000",
    tag: "Vende directamente",
    highlight: false,
    features: [
      "Catálogo de productos administrable",
      "Carrito y flujo de compra claro para el cliente",
      "Integración con pasarela de pago (según plataforma elegida)",
      "Páginas para políticas, envíos y soporte",
      "Optimización básica para buscadores y experiencia de compra",
    ],
  },
];

export default function Pricing() {
  return (
    <Section id="planes" className="bg-white/[0.02]">
      <div className="space-y-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Planes de diseño web
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Elige el plan que mejor se adapte al momento de tu proyecto. Todos
            están construidos con tecnología moderna, son responsivos y están
            pensados para verse bien frente a tus clientes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.article
              key={plan.name}
              className={`flex h-full flex-col rounded-2xl border p-5 ${
                plan.highlight
                  ? "border-indigo-400/80 bg-indigo-500/10 shadow-lg shadow-indigo-500/40"
                  : "border-white/10 bg-black/50"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{
                y: -6,
                rotateX: 2,
                rotateY: -2,
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-xs text-indigo-200/90">
                    {plan.tag}
                  </p>
                </div>
                {plan.highlight && (
                  <span className="rounded-full bg-indigo-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Más pedido
                  </span>
                )}
              </div>

              <p className="mt-4 text-lg font-semibold text-indigo-100">
                {plan.price} <span className="text-xs text-slate-300">MXN</span>
              </p>

              <ul className="mt-4 flex-1 space-y-1.5 text-sm text-slate-200">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-[6px] h-1 w-1 rounded-full bg-indigo-300" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <Button
                  as="link"
                  href="#contacto"
                  variant={plan.highlight ? "primary" : "secondary"}
                  className="w-full justify-center"
                >
                  Quiero este plan
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
