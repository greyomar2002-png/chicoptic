/*
 * CHIC OPTIC — Services ("Galerie Blanche")
 * Style: crème interlude section (never ebony), white framed cards with gold
 * corner ornaments, anthracite headings, gold details, monogram watermark.
 */
import { Eye, Glasses, ShieldCheck, Sparkles } from "lucide-react";
import { useReveal } from "@/pages/Home";

const LOGO = "/manus-storage/logo-co_2cd9bf7c.png";

const SERVICES = [
  {
    icon: Eye,
    label: "Premier acte",
    title: "Examen de la vue",
    desc: "Un contrôle complet et personnalisé, conduit avec la précision d'un orfèvre, pour connaître exactement votre vision.",
  },
  {
    icon: Glasses,
    label: "Rituel du choix",
    title: "Conseil morphologique",
    desc: "Nos experts guident le choix de vos montures selon la forme de votre visage, votre teinte et votre signature personnelle.",
  },
  {
    icon: ShieldCheck,
    label: "Taille sur mesure",
    title: "Verres d'excellence",
    desc: "Verres progressifs, antireflets, solaires correctrices — taillés dans des matériaux d'exception pour un confort absolu.",
  },
  {
    icon: Sparkles,
    label: "Écrin perpétuel",
    title: "Ajustement & entretien",
    desc: "Centrage, ajustage et conseils d'entretien : vos lunettes demeurent parfaites, année après année.",
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[oklch(0.87_0.016_85)] text-foreground py-28 md:py-36"
      id="services">
      {/* monogram seal watermark, deep in the lower-right corner */}
      <img
        src={LOGO}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-8 h-52 w-52 opacity-[0.05] hidden lg:block"
      />

      <div className="container relative z-10">
        <div className="mb-20 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="label-luxe reveal">Nos Expertises</p>
            <h2
              className="reveal mt-5 font-display gold-rule"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.08 }}>
              Votre vision,
              <br />
              notre <em className="text-gold">signature.</em>
            </h2>
          </div>
          <p className="reveal max-w-md text-foreground/65 text-base font-light leading-[1.9] lg:col-span-4 lg:col-start-9">
            Quatre savoir-faire réunis sous un même toit, pour que chaque paire
            de lunettes porte le nom de son propriétaire.
          </p>
        </div>

        <div className="grid gap-px border border-gold/30 bg-gold/30 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <div
              key={s.label}
              className="reveal group relative bg-background p-10 md:p-12 transition-colors duration-300 hover:bg-[oklch(0.85_0.018_85)]">
              <div className="absolute top-4 left-4 h-6 w-6 border-t border-l border-gold/50 pointer-events-none transition-colors duration-500 group-hover:border-gold" />
              <div className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-gold/50 pointer-events-none transition-colors duration-500 group-hover:border-gold" />
              <div className="flex items-start justify-between">
                <span className="label-luxe">{s.label}</span>
                <s.icon className="h-7 w-7 text-gold transition-transform duration-500 group-hover:-translate-y-1.5" />
              </div>
              <h3 className="mt-8 font-display text-[1.7rem] md:text-[2rem] text-foreground leading-snug">
                {s.title}
              </h3>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-px w-12 bg-gold/70 transition-all duration-500 group-hover:w-20" />
                <span className="label-luxe !text-[0.6rem]">
                  N° {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-6 text-foreground/70 text-[16px] font-light leading-[1.95]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
