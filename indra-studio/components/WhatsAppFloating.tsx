"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; // si ya usas lucide, si no quita el ícono

export default function WhatsAppFloating() {
  return (
    <motion.a
      href="https://wa.me/523223830209"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_0_25px_rgba(16,185,129,0.8)] hover:bg-emerald-400 md:text-sm"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 1 }}
    >
      <MessageCircle className="h-4 w-4" />
      <span>Habla conmigo por WhatsApp</span>
    </motion.a>
  );
}
