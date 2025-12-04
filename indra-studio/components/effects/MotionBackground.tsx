"use client";

export default function HeroVideoBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <video
        className="h-full w-full object-cover"
        src="/indra-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Capa oscura para que el texto se lea bien */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
    </div>
  );
}
