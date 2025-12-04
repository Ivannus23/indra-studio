import type { Metadata } from "next";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import "./globals.css";

export const metadata: Metadata = {
  title: "Indra Studio – Páginas web poderosas y soluciones digitales",
  description:
    "Indra Studio diseña páginas web modernas, rápidas y profesionales para emprendedores y negocios que quieren verse tan poderosos en internet como en la vida real.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/indra-favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-[#050509] text-slate-100 antialiased">
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
