/*
 * OPTIMIST J CARTHAGE — Hero ("Galerie Blanche", reference-inspired layout)
 * Style: split composition — cinematic eyeglass portrait on the right
 * fading into the warm ivory page; editorial two-tone headline on the left
 * (ivory serif line + gold italic script line), gold-rule "CARTHAGE · TUNISIE"
 * eyebrow, short subline, and dual CTAs (solid gold + outlined ghost).
 *
 * Motion: load-based staggered fade-in (80ms steps) so the hero always reads
 * well on first paint, with an IntersectionObserver fallback that ensures
 * elements still animate in even if the load timing is missed.
 */
import { useEffect, useRef, useState } from "react";

const PORTRAIT_IMG = "/manus-storage/hero-full-face_1f153e6b.png";

/**
 * Staggered fade-in: elements start hidden and animate in sequence after the
 * page loads (each stage 80ms apart). As a fallback, an IntersectionObserver
 * activates them when the hero enters the viewport, so content is never
 * permanently invisible.
 */
function useHeroReveal(stages: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const show = () => {
      if (started.current) return;
      started.current = true;
      setVisible(true);
    };

    // Start the sequence shortly after paint
    const timer = setTimeout(show, 200);

    // Fallback: reveal when the hero scrolls into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) show();
      },
      { threshold: 0.05 },
    );
    observer.observe(container);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return { ref, visible };
}

export default function Hero() {
  const { ref, visible } = useHeroReveal(4);

  return (
    <section className="relative overflow-hidden bg-background grain">
      {/* Right side: cinematic portrait bleeding to the edge.
          The portrait band is extended far left and dissolved by a full-height
          ivory gradient that starts opaque at the band's left edge, so the
          photo melts into the page with no visible seam. */}
      <div className="absolute inset-y-0 right-0 w-[85%] sm:w-[85%] md:w-[92%]">
        <img
          src={PORTRAIT_IMG}
          alt="Homme portant des lunettes écaille chez OPTIMIST aux Jardins de Carthage"
          className="absolute inset-y-0 right-0 h-full w-[48%] sm:w-[52%] md:w-[60%] object-cover object-[62%_center]"
        />
        {/* full-width dissolve: exact page background (oklch 0.90 0.015 85)
            opaque across most of the band, only dissolving on the far right
            → the photo melts into the page with no visible edge */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(0.90 0.015 85) 0%, oklch(0.90 0.015 85) 58%, oklch(0.90 0.015 85 / 0.78) 72%, oklch(0.90 0.015 85 / 0.4) 86%, transparent 100%)",
          }}
        />
        {/* bottom blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div
        ref={ref}
        className="container relative z-10 flex min-h-[100svh] flex-col justify-center pt-24">
        <div className="max-w-xl">
          {/* gold-rule eyebrow — mirrors the reference's rule + letter-spaced label */}
          <p
            className={`flex items-center gap-4 text-[13px] tracking-[0.28em] uppercase text-gold transition-all duration-700 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "80ms", transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}>
            <span className="h-px w-10 bg-gold" />
            Carthage · Tunisie
          </p>

          <h1
            className={`mt-8 font-display text-foreground transition-all duration-700 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{ fontSize: "clamp(3rem, 7vw, 5.8rem)", lineHeight: 1.04, transitionDelay: "160ms", transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}>
            Voyez la
            <br />
            <em className="text-gold">différence.</em>
          </h1>

          <p
            className={`mt-6 max-w-[40ch] text-foreground/70 text-[15px] font-light leading-relaxed transition-all duration-700 sm:mt-7 sm:text-base ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "240ms", transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}>
            Une maison d'optique pour des montures choisies, personnelles, et
            faites pour être portées — dans l'écrin lumineux de la résidence
            Venus, aux Jardins de Carthage.
          </p>

          <div
            className={`mt-8 flex flex-wrap items-center gap-5 transition-all duration-700 sm:mt-10 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "320ms", transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}>
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
      <div
        className={`absolute bottom-10 right-10 hidden text-right transition-all duration-700 md:block ${
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: "400ms", transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}>
        <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/50">
          Un regard plus calme.
        </p>
        <p className="mt-1 font-display text-lg text-gold">
          Le point de vue juste.
        </p>
      </div>
    </section>
  );
}
