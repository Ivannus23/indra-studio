import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Strip from "@/components/Strip";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyIndra from "@/components/WhyIndra";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import CallToActionStrip from "@/components/CallToActionStrip";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Strip />
        <Services />
        <Process />
        <WhyIndra />
        <About />
        <Projects />
        <CallToActionStrip />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
