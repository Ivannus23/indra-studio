"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import lightningAnimation from "@/public/indra-lightning.json";

export default function LightningLottie() {
  const [isBack, setIsBack] = useState(false);

  useEffect(() => {
    // Después de 1.8s mandamos la animación “al fondo”
    const timeout = setTimeout(() => {
      setIsBack(true);
    }, 1800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={
        "pointer-events-none absolute inset-0 flex items-center justify-center transition-all duration-700 " +
        (isBack
          ? "-z-10 opacity-25 scale-90" // se queda suave de fondo
          : "z-20 opacity-100 scale-100") // empieza al frente
      }
    >
      <div className="w-[420px] max-w-full">
        <Lottie
          animationData={lightningAnimation}
          loop={!isBack} // al frente hace loop corto, atrás puede seguir suave
        />
      </div>
    </div>
  );
}
