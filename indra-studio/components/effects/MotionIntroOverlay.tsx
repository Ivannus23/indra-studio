"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Después de 1.8 s ocultamos la intro
    const timeout = setTimeout(() => {
      setShow(false);
    }, 1800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <video
            className="h-full w-full object-cover"
            src="/indra-hero.mp4"
            autoPlay
            muted
            playsInline
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
