/*
 * OPTIMIST J CARTHAGE — Les Marques ("Galerie Blanche")
 * Style: warm parchment background with crème interlude, gold-framed editorial
 * blocks, letter-spaced uppercase labels, monogram accents, letter-wordmark
 * brand entries in the manner of a haute-joaillerie catalogue.
 */
import { useReveal } from "@/pages/Home";

type Brand = {
  name: string;
  maison: string;
  country: string;
  note: string;
};

const BRAND_LOGOS: Record<string, string> = {
  Persol: "/manus-storage/logo-persol_af1505eb.png",
  "ic! berlin": "/manus-storage/logo-icberlin_0ada6054.png",
  Lunor: "/manus-storage/logo-lunor_b046babd.png",
  "Ray-Ban": "/manus-storage/logo-rayban_0af9cd90.png",
  Kuboraum: "/manus-storage/logo-kuboraum_cdce3507.png",
  Mykita: "/manus-storage/logo-mykita_b963637a.png",
};

const BRANDS: Brand[] = [
  {
    name: "Persol",
    maison: "Torino",
    country: "Italie",
    note: "L'icône acétate depuis 1917 — la flèche silver arrow et le suprème Meflecto, taillés à la main.",
  },
  {
    name: "ic! berlin",
    maison: "Berlin",
    country: "Allemagne",
    note: "Sans soudure ni vis — l'ingénierie des feuilles de métal, une monture née pour durer.",
  },
  {
    name: "Lunor",
    maison: "Althengstett",
    country: "Allemagne",
    note: "La haute lunetterie allemande — argent, titane et or, sertis comme une pièce de joaillerie.",
  },
  {
    name: "Ray-Ban",
    maison: "Milan",
    country: "Italie",
    note: "Les classiques absolus — Aviator, Wayfarer et Clubmaster, réinventés saison après saison.",
  },
  {
    name: "Kuboraum",
    maison: "Berlin",
    country: "Italie",
    note: "Le masque comme bijou — des acétates sculptés à la main, aux volumes théâtraux.",
  },
  {
    name: "Mykita",
    maison: "Berlin",
    country: "Allemagne",
    note: "Acier inoxydable feuille de 0,5 mm — la précision horlogère appliquée au regard.",
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
            <p className="label-luxe reveal">Les Maisons</p>
            <h2
              className="reveal mt-5 font-display gold-rule"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.08 }}>
              Les maisons que
              <br />
              nous <em className="text-gold">servons.</em>
            </h2>
          </div>
          <p className="reveal max-w-md text-foreground/65 text-base font-light leading-[1.95]">
            Une sélection exigeante de maisons européennes — de la tradition
            artisanale italienne à la précision horlogère allemande. Chaque
            monture de l'écrin est choisie pour son savoir-faire, sa matière et
            son caractère.
          </p>
        </div>

        {/* Brand catalogue — alternating editorial blocks */}
        <div className="grid gap-px border border-gold/30 bg-gold/30 md:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((b, i) => (
            <div
              key={b.name}
              className="reveal group relative bg-[oklch(0.90_0.018_85)] p-8 md:p-10 transition-colors duration-300 hover:bg-[oklch(0.87_0.02_85)]"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
              {/* gold corner accents */}
              <span className="absolute left-4 top-4 h-4 w-4 border-l border-t border-gold/60 transition-colors duration-300 group-hover:border-gold" />
              <span className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-gold/60 transition-colors duration-300 group-hover:border-gold" />

              <img
                src={BRAND_LOGOS[b.name]}
                alt={`Emblème ${b.name}`}
                className="h-16 w-16 object-contain opacity-90 transition-transform duration-300 group-hover:scale-105"
              />
              <p className="label-luxe !text-[0.6rem] text-gold mt-6">{b.country} — {b.maison}</p>
              <h3
                className="reveal mt-6 font-display text-foreground"
                style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)", letterSpacing: "0.04em" }}>
                {b.name}
              </h3>
              <div className="mt-4 h-px w-12 bg-gold/70" />
              <p className="mt-5 text-foreground/70 text-[15px] font-light leading-[1.9]">
                {b.note}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-foreground/50 text-[13px] font-light leading-[1.8] italic">
          La sélection est renouvelée au fil des saisons — passez à la boutique
          pour découvrir les nouveautés de la maison.
        </p>
      </div>
    </section>
  );
}
