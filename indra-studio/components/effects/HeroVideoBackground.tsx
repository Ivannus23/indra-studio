"use client";

export default function HeroVideoBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <video
        className="h-full w-full object-cover"
        src="/indra-hero.mp4"   // tu video ya convertido
        autoPlay
        muted
        loop
        playsInline
      />
      {/* oscurecemos un poco el lado izquierdo para el texto */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
    </div>
  );
}
