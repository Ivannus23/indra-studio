"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 hidden flex-col items-center gap-2 text-[10px] text-slate-300/80 sm:flex">
      <span className="uppercase tracking-[0.25em]">
        Scroll
      </span>
      <motion.div
        className="flex h-9 w-5 items-start justify-center rounded-full border border-slate-500/70 bg-black/40"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="mt-1 h-1.5 w-1 rounded-full bg-slate-200"
          animate={{ opacity: [0.2, 1, 0.2], y: [0, 4, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
