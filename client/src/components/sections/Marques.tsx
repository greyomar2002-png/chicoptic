/*
 * OPTIMIST J CARTHAGE — Les Marques ("Galerie Blanche")
 * Style: warm parchment background with crème interlude, gold-framed photo
 * cards in the manner of a campaign lookbook — each brand is a photographic
 * card with its bold wordmark at the bottom (per the client's example card).
 * Data: real brands carried by the boutique — Tom Ford, Ray-Ban, Moscot,
 * Persol, Prada, Carolina Herrera, Guess, Tommy Hilfiger.
 */
import { useReveal } from "@/pages/Home";

const BRANDS: { name: string; img: string }[] = [
  {
    name: "Tom Ford",
    img: "/images/brand-tomford.jpg",
  },
  {
    name: "Ray-Ban",
    img: "/images/brand-rayban.jpg",
  },
  {
    name: "Moscot",
    img: "/images/brand-moscot.jpg",
  },
  {
    name: "Persol",
    img: "/images/brand-persol.jpg",
  },
  {
    name: "Prada",
    img: "/images/brand-prada.jpg",
  },
  {
    name: "Carolina Herrera",
    img: "/images/brand-carolinaherrera.jpg",
  },
  {
    name: "Guess",
    img: "/images/brand-guess.jpg",
  },
  {
    name: "Tommy Hilfiger",
    img: "/images/brand-tommyhilfiger.jpg",
  },
];

export default function Marques() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[oklch(0.93_0.02_85)] text-foreground py-28 md:py-36"
      id="marques">
      {/* signature hairline */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden lg:block" />

      <div className="container relative z-10">
        <div className="mb-16 grid items-end gap-8 md:grid-cols-2">
          <div>
            <p className="label-luxe reveal">Les Marques</p>
            <h2
              className="reveal mt-5 font-display gold-rule"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.08 }}>
              Les marques que
              <br />
              nous <em className="text-gold">servons.</em>
            </h2>
          </div>
          <p className="reveal max-w-md text-foreground/65 text-base font-light leading-[1.95]">
            Une sélection exigeante de marques internationales — de la
            tradition artisanale italienne au classicisme new-yorkais. Chaque
            monture de l'écrin est choisie pour son savoir-faire, sa matière et
            son caractère.
          </p>
        </div>

        {/* Brand lookbook — photographic campaign cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {BRANDS.map((b, i) => (
            <a
              key={b.name}
              href="#contact"
              className="reveal group relative overflow-hidden rounded-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_48px_-14px_rgba(120,90,40,0.35)]"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
              <img
                src={b.img}
                alt={b.name}
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] active:scale-[1.04]"
              />
            </a>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-foreground/50 text-[13px] font-light leading-[1.8] italic">
          La sélection est renouvelée au fil des saisons — passez à la boutique
          pour découvrir les nouveautés de la boutique.
        </p>
      </div>
    </section>
  );
}
