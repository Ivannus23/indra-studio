"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

const services = [
  {
    title: "Sitio web esencial",
    desc: "La base sólida de tu presencia online. Una página limpia y moderna para presentar quién eres, qué haces y cómo pueden contactarte.",
  },
  {
    title: "Landing page de ventas",
    desc: "Una sola página enfocada en convertir: vender un servicio, captar prospectos o agendar citas con un mensaje claro y un llamado a la acción fuerte.",
  },
  {
    title: "Rediseño de página web",
    desc: "Tomo tu sitio actual y lo llevo al siguiente nivel: mejor estructura, diseño minimalista, versión responsive y tiempos de carga optimizados.",
  },
  {
    title: "Activos digitales",
    desc: "Banners, portadas, imágenes para redes y presentaciones alineadas con la identidad visual de tu marca.",
  },
];

export default function Services() {
  return (
    <Section id="servicios">
      <div className="space-y-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Lo que hago en Indra Studio
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Servicios de diseño web y soluciones digitales pensados para
            emprendedores, profesionales independientes y pequeñas empresas que
            quieren dar un salto de calidad.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <h3 className="text-base font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{service.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
