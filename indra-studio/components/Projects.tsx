"use client";

import { Section } from "./ui/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Rifa LuBuu – Plataforma de boletos en línea",
    desc: "Sistema de rifas para una boutique, con un flujo completo pensado para que los clientes puedan registrarse, elegir boletos y consultar su participación de forma sencilla desde cualquier dispositivo.",
    bullets: [
      "Pantalla principal con bienvenida y acceso rápido a las acciones clave.",
      "Opción de registro para nuevos participantes.",
      "Sección para elegir boletos disponibles de la rifa.",
      "Consulta de boletos para verificar números y estatus.",
      "Acceso a módulo de administración para gestión interna del sistema.",
    ],
    url: "https://lubuu.com.mx/firebase-rifa/home.html",
    iframeTitle: "Rifa LuBuu – Plataforma de boletos en línea",
  },
  {
    title: "Día de Pi – Aplicaciones del π en Ingeniería Mecánica",
    desc: "Sitio creado para explicar de forma sencilla y visual cómo se aplica el número π en diferentes áreas de la ingeniería mecánica, pensado para estudiantes y público general.",
    bullets: [
      "Secciones dedicadas al significado del número π.",
      "Ejemplos aplicados a engranes, elementos circulares y movimiento rotacional.",
      "Contenido enfocado en la ingeniería mecánica, no solo en matemáticas puras.",
      "Diseño sencillo y directo para usar en clase o como material de apoyo.",
      "Optimizado para verse correctamente en navegadores modernos.",
    ],
    url: "https://ivannus23.github.io/numeropi/",
    iframeTitle: "Día de Pi – Aplicaciones del π en Ingeniería Mecánica",
  },
  {
    title: "Olimpiada de Matemáticas 2024",
    desc: "Landing implementada con estructura sencilla pero muy enfocada en que estudiantes y docentes encontraran rápido lo que necesitaban.",
    bullets: [
      "Estructura de una sola página (landing) con secciones ancla.",
      "Sección de información general, categorías y calendario.",
      "Botón de registro conectado a formulario en línea.",
      "Diseño responsivo para que se vea bien en celular.",
      "Botones directos a contacto y redes del evento.",
    ],
    url: "https://omm-nayarit.vercel.app",
    iframeTitle: "Olimpiada de Matemáticas 2024 – sitio web",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <Section id="proyectos">
      <div ref={sectionRef} className="space-y-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Trabajos recientes
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Algunos proyectos donde he aplicado diseño limpio, estructura clara
            y enfoque en objetivos reales de mis clientes.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            // parallax suave: cada proyecto se mueve un poco distinto
            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [index * 10, -index * 12] // puedes jugar con estos valores
            );

            return (
              <motion.article
                key={project.title}
                style={{ y }}
                className="grid items-start gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Preview */}
                <motion.div
                  className="order-1 md:order-none"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                >
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500/40 via-sky-400/30 to-emerald-400/40 blur-xl" />
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 shadow-2xl">
                      <div className="flex items-center gap-1 border-b border-white/5 bg-black/60 px-4 py-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                        <p className="ml-3 truncate text-[10px] text-slate-400">
                          {project.url.replace(/^https?:\/\//, "")}
                        </p>
                      </div>

                      <div className="relative aspect-[16/10]">
                        <iframe
                          src={project.url}
                          title={project.iframeTitle}
                          loading="lazy"
                          className="h-full w-full border-0"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Texto */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300">{project.desc}</p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-slate-300">
                    {project.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-medium text-indigo-300 hover:text-indigo-200"
                  >
                    Ver sitio en vivo ↗
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
