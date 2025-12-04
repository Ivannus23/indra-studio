export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-4 py-6 text-center text-xs text-slate-400 sm:flex-row sm:justify-between">
        <p>© {year} Indra Studio – Web & Digital Solutions</p>
        <p>Diseño limpio. Tecnología al servicio de tu marca.</p>
      </div>
    </footer>
  );
}
