import { Section } from "./ui/Section";

export default function Strip() {
  return (
    <Section className="border-y border-white/5 bg-white/5 py-10">
      <div className="text-center">
        <h2 className="text-lg font-semibold sm:text-xl">
          Diseño claro. Código ordenado. Resultados medibles.
        </h2>
        <p className="mt-2 text-sm text-slate-200">
          Combino ingeniería, diseño y estrategia digital para crear sitios que
          no solo se ven bien, sino que funcionan.
        </p>
      </div>
    </Section>
  );
}
