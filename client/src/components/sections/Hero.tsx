/*
 * CHIC OPTIC — Hero ("Galerie Blanche")
 * Style: bright white/ivory full-bleed light image, asymmetric text left in
 * deep anthracite, gold rules, Cormorant display, ivory → white gradient.
 */
import { ArrowDown } from "lucide-react";

const HERO_IMG = "/assets/images/collection-optical.png";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-background grain">
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Lunettes haut de gamme sur marbre blanc"
          className="h-full w-full object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.90_0.015_85)] via-[oklch(0.90_0.015_85)]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container relative z-10 flex min-h-[100svh] flex-col justify-center pt-24">
        <div className="max-w-2xl">
          <p className="label-luxe reveal">
            Boutique d'optique · Jardins de Carthage, Tunis
          </p>
          <h1
            className="reveal mt-6 font-display text-foreground"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 1.05 }}>
            Le regard est
            <br />
            un <em className="text-gold">bijou.</em>
            <br />
            Nous l'habillons.
          </h1>
          <p className="reveal mt-7 max-w-md text-foreground/70 text-base font-light leading-relaxed">
            Lunettes de vue et solaires de créateurs, montures raffinées et
            expertise visuelle sur mesure — dans l'écrin lumineux de la
            résidence Phénix, aux Jardins de Carthage.
          </p>
          <div className="reveal mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#collections"
              className="border border-gold bg-gold/10 px-8 py-4 text-[13px] tracking-[0.22em] uppercase text-gold hover:bg-gold hover:text-white transition-colors duration-300">
              Découvrir les collections
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 text-foreground/75 hover:text-gold text-[13px] tracking-[0.22em] uppercase transition-colors duration-200">
              Nous rendre visite
              <ArrowDown className="h-4 w-4 text-gold" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <span className="h-16 w-px bg-gradient-to-b from-transparent to-gold/70" />
      </div>
    </section>
  );
}
