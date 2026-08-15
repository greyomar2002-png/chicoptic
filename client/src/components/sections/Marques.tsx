/*
 * OPTIMIST J CARTHAGE — Les Marques ("Galerie Blanche")
 * Style: warm parchment background with crème interlude, gold-framed editorial
 * blocks, letter-spaced uppercase labels, monogram accents, letter-wordmark
 * brand entries in the manner of a haute-joaillerie catalogue.
 * Data: real brands carried by the boutique — Tom Ford, Ray-Ban, Moscot,
 * Persol, Prada, Carolina Herrera, Guess, Tommy Hilfiger.
 */
import { useReveal } from "@/pages/Home";

type Brand = {
  name: string;
  maison: string;
  country: string;
  note: string;
};

const BRAND_LOGOS: Record<string, string> = {
  "Tom Ford": "/manus-storage/logo-tomford_28787d24.png",
  "Ray-Ban": "/manus-storage/logo-rayban2_5dd91c9c.png",
  Moscot: "/manus-storage/logo-moscot_cd251caa.png",
  Persol: "/manus-storage/logo-persol2_1312200d.png",
  Prada: "/manus-storage/logo-prada_91b5d77b.png",
  "Carolina Herrera": "/manus-storage/logo-carolinaherrera_3fd7ab65.png",
  Guess: "/manus-storage/logo-guess_2eb23ee3.png",
  "Tommy Hilfiger": "/manus-storage/logo-tommyhilfiger_fc188366.png",
};

const BRANDS: Brand[] = [
  {
    name: "Tom Ford",
    maison: "New York",
    country: "États-Unis",
    note: "L'allure hollywoodienne par excellence — acétates profonds et lignes architecturales, un regard qui impose sa présence.",
  },
  {
    name: "Ray-Ban",
    maison: "Milan",
    country: "Italie",
    note: "Les classiques absolus — Aviator, Wayfarer et Clubmaster, réinventés saison après saison.",
  },
  {
    name: "Moscot",
    maison: "New York",
    country: "États-Unis",
    note: "Cinq générations d'artisans lunetiers depuis 1915 — le Lemtosh, une icône du Lower East Side.",
  },
  {
    name: "Persol",
    maison: "Torino",
    country: "Italie",
    note: "L'icône acétate depuis 1917 — la flèche silver arrow et le suprème Meflecto, taillés à la main.",
  },
  {
    name: "Prada",
    maison: "Milan",
    country: "Italie",
    note: "L'avant-garde milanaise — matériaux inattendus et géométrie audacieuse, la mode mise au service du regard.",
  },
  {
    name: "Carolina Herrera",
    maison: "Caracas · New York",
    country: "Venezuela",
    note: "L'élégance féminine intemporelle — lignes épurées et raffinements discrets, à l'image de la maison.",
  },
  {
    name: "Guess",
    maison: "Los Angeles",
    country: "États-Unis",
    note: "La silhouette californienne — designs contemporains accessibles, entre décontraction et glamour.",
  },
  {
    name: "Tommy Hilfiger",
    maison: "New York",
    country: "États-Unis",
    note: "Le classicisme all-American — couleurs franches et coupes iconiques, un style qui se porte au quotidien.",
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
            Une sélection exigeante de maisons internationales — de la
            tradition artisanale italienne au classicisme new-yorkais. Chaque
            monture de l'écrin est choisie pour son savoir-faire, sa matière et
            son caractère.
          </p>
        </div>

        {/* Brand catalogue — alternating editorial blocks */}
        <div className="grid gap-px border border-gold/30 bg-gold/30 md:grid-cols-2 lg:grid-cols-4">
          {BRANDS.map((b, i) => (
            <div
              key={b.name}
              className="reveal group relative bg-[oklch(0.90_0.018_85)] p-8 transition-colors duration-300 hover:bg-[oklch(0.87_0.02_85)]"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
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
                style={{ fontSize: "clamp(1.5rem, 2.2vw, 2rem)", letterSpacing: "0.04em" }}>
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
