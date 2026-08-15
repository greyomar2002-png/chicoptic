/*
 * OPTIMIST J CARTHAGE — Hero ("Galerie Blanche", reference-inspired layout)
 * Style: split composition — cinematic eyeglass portrait on the right
 * fading into the warm ivory page; editorial two-tone headline on the left
 * (ivory serif line + gold italic script line), gold-rule "CARTHAGE · TUNISIE"
 * eyebrow, short subline, and dual CTAs (solid gold + outlined ghost).
 */
import { ArrowDown } from "lucide-react";

const PORTRAIT_IMG = "/manus-storage/hero-portrait_5a0e738a.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background grain">
      {/* Right side: cinematic portrait bleeding to the edge */}
      <div className="absolute inset-y-0 right-0 w-[62%]">
        <img
          src={PORTRAIT_IMG}
          alt="Homme portant des lunettes écaille chez OPTIMIST aux Jardins de Carthage"
          className="h-full w-full object-cover object-[70%_30%]"
        />
        {/* warm ivory fade so the photo merges with the page on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        {/* bottom blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container relative z-10 flex min-h-[100svh] flex-col justify-center pt-24">
        <div className="max-w-xl">
          {/* gold-rule eyebrow — mirrors the reference's rule + letter-spaced label */}
          <p className="reveal flex items-center gap-4 text-[13px] tracking-[0.28em] uppercase text-gold">
            <span className="h-px w-10 bg-gold" />
            Carthage · Tunisie
          </p>

          <h1
            className="reveal mt-8 font-display text-foreground"
            style={{ fontSize: "clamp(3rem, 7vw, 5.8rem)", lineHeight: 1.04 }}>
            Voyez la
            <br />
            <em className="text-gold">différence.</em>
          </h1>

          <p className="reveal mt-7 max-w-md text-foreground/70 text-base font-light leading-relaxed">
            Une maison d'optique pour des montures choisies, personnelles, et
            faites pour être portées — dans l'écrin lumineux de la résidence
            Venus, aux Jardins de Carthage.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#booking"
              className="inline-flex items-center gap-3 bg-gold px-8 py-4 text-[13px] tracking-[0.22em] uppercase text-white hover:bg-[oklch(0.48_0.07_78)] transition-colors duration-300">
              <span className="h-4 w-4 rounded-sm border border-white/70 inline-flex items-center justify-center text-[10px]">
                ✦
              </span>
              Réserver un essayage
            </a>
            <a
              href="#marques"
              className="border border-gold/60 px-8 py-4 text-[13px] tracking-[0.22em] uppercase text-foreground/80 hover:border-gold hover:text-gold transition-colors duration-300">
              Découvrir les maisons
            </a>
          </div>
        </div>
      </div>

      {/* caption in the spirit of the reference's corner whisper */}
      <div className="absolute bottom-10 right-10 hidden text-right md:block">
        <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/50">
          Un regard plus calme.
        </p>
        <p className="mt-1 font-display text-lg text-gold">
          Le point de vue juste.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <span className="h-16 w-px bg-gradient-to-b from-transparent to-gold/70" />
      </div>
    </section>
  );
}
