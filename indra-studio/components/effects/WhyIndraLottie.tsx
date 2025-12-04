"use client";

import Lottie from "lottie-react";
import whyAnimation from "@/src/animations/indra-why.json";

export default function WhyIndraLottie() {
  return (
    <div className="hidden h-20 w-20 items-center justify-center rounded-2xl border border-indigo-400/50 bg-indigo-500/10 p-2 shadow-[0_0_25px_rgba(129,140,248,0.4)] sm:flex">
      <Lottie
        animationData={whyAnimation}
        loop
        autoplay
      />
    </div>
  );
}
