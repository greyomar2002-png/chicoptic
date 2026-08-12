/*
 * CHIC OPTIC — Home (single-page)
 * Style: "Or & Velours" — ebony / champagne-gold / ivory, Cormorant Garamond
 * display + Jost body, gold hairlines with corner ornaments, letter-spaced
 * uppercase labels, editorial asymmetric layouts, slow fade+rise reveals.
 */
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Collections from "@/components/sections/Collections";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Reputation from "@/components/sections/Reputation";
import Marques from "@/components/sections/Marques";
import Booking from "@/components/sections/Booking";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Collections />
        <Services />
        <About />
        <Reputation />
        <Marques />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/** Reveal-on-scroll observer */
export function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}
