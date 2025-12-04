import { Section } from "./ui/Section";

export default function Contact() {
  return (
    <Section id="contacto" className="bg-gradient-to-t from-black to-slate-950">
      <div className="grid gap-10 md:grid-cols-[1.1fr_minmax(0,1.1fr)] items-start">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Listo para que tu negocio se vea como se merece
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Cuéntame qué haces y qué te gustaría que tu página web logre por ti.
            Te respondo con una propuesta clara, sin letras chiquitas.
          </p>

          <div className="mt-6 space-y-2 text-sm text-slate-200">
            <p>
              <strong>Correo:</strong>{" "}
              <a
                href="mailto:indrawebsolutions@gmail.com"
                className="text-indigo-300 hover:text-indigo-200"
              >
                indrawebsolutions@gmail.com
              </a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/523223830209"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:text-indigo-200"
              >
                +52 322 383 0209
              </a>
            </p>
            <p className="mt-3 text-xs text-slate-400">
              También puedes mandarme un mensaje por Facebook o Instagram si lo
              prefieres.
            </p>
          </div>
        </div>

        <form
          id="contact-form"
          className="space-y-4 rounded-2xl border border-white/10 bg-black/70 p-5"
          action="https://formspree.io/f/mwpgbwjz"
          method="POST"
        >
          <div className="space-y-1 text-sm">
            <label className="block text-slate-200">
              Nombre
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                required
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-slate-100 outline-none ring-indigo-400/40 focus:ring"
              />
            </label>
          </div>

          <div className="space-y-1 text-sm">
            <label className="block text-slate-200">
              Email
              <input
                type="email"
                name="email"
                placeholder="tunombre@correo.com"
                required
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-slate-100 outline-none ring-indigo-400/40 focus:ring"
              />
            </label>
          </div>

          <div className="space-y-1 text-sm">
            <label className="block text-slate-200">
              Mensaje
              <textarea
                name="mensaje"
                rows={4}
                placeholder="Cuéntame brevemente sobre tu negocio y lo que necesitas"
                required
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-slate-100 outline-none ring-indigo-400/40 focus:ring"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:bg-indigo-400"
          >
            Enviar mensaje
          </button>

          <p className="text-[11px] text-slate-400">
            *Te responderé por correo normalmente en menos de 24–48 horas.
          </p>
        </form>
      </div>
    </Section>
  );
}
