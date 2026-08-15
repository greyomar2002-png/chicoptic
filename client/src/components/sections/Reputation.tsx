/*
 * OPTIMIST J CARTHAGE — Réputation
 * Style: ivory editorial page, framed stat card with corner ornaments,
 * large confident numerals, monogram watermark, real Google data only
 * (4.8/5 — 43 avis; thèmes agrégés, aucun témoignage inventé).
 */
import { Star } from "lucide-react";
import { useReveal } from "@/pages/Home";

const LOGO = "/manus-storage/logo-opt_461d86f0.png";

export default function Reputation() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-background py-28 md:py-40">
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden lg:block" />

      <div className="container relative z-10">
        <div className="mb-20 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="label-luxe reveal">La Confiance</p>
            <h2
              className="reveal mt-5 font-display text-foreground gold-rule"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.08 }}>
              Ce que disent
              <br />
              nos <em className="text-gold">clients.</em>
            </h2>
          </div>
          <p className="reveal max-w-md text-muted-foreground text-base font-light leading-[1.9] lg:col-span-4 lg:col-start-9">
            Une note qui se construit visite après visite, ajustage après
            ajustage — et qui ne se déclare pas, elle se mérite.
          </p>
        </div>

        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="reveal lg:col-span-4">
            <div className="gold-frame p-10">
              <p className="label-luxe">Google Reviews</p>
              <div className="mt-6 flex items-baseline gap-5">
                <span
                  className="font-display text-gold"
                  style={{ fontSize: "clamp(4.5rem, 8vw, 6.5rem)", lineHeight: 1 }}>
                  4,8
                </span>
                <div className="flex flex-col gap-1.5">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i === 4 ? "text-gold/45" : "fill-gold"}`}
                      />
                    ))}
                  </div>
                  <span className="label-luxe !text-[0.6rem] !text-foreground/60">
                    sur 5
                  </span>
                </div>
              </div>
              <div className="mt-6 h-px w-full bg-gold/30" />
              <p className="mt-5 text-foreground/80 text-[16px] font-light leading-relaxed">
                Sur la base de <strong className="font-normal">43 avis</strong>{" "}
                publiés par nos clients sur Google.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-center gap-12">
            {[
              {
                theme: "Équipe professionnelle",
                n: 6,
                desc: "Le savoir-faire de l'équipe est le mot qui revient le plus souvent — de l'examen de la vue à la livraison de vos lunettes.",
              },
              {
                theme: "Accueil chaleureux",
                n: 4,
                desc: "Un premier contact chaleureux, à la hauteur de l'atmosphère de la maison, dès le pas franchi.",
              },
              {
                theme: "Bons conseils",
                n: 2,
                desc: "Des recommandations justes pour choisir la monture et les verres qui vous conviennent vraiment.",
              },
            ].map((t, i) => (
              <div
                key={t.theme}
                className="reveal group flex items-start gap-7 border-b border-gold/30 pb-12 last:border-0 last:pb-0">
                <span
                  className="font-display text-gold/80 shrink-0"
                  style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)", lineHeight: 1 }}>
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-4">
                    <h3 className="font-display text-[1.7rem] md:text-[2rem] text-foreground leading-snug">
                      {t.theme}
                    </h3>
                    <span className="label-luxe !text-[0.62rem] text-gold/90">
                      {t.n} avis mentionnent ce thème
                    </span>
                  </div>
                  <p className="mt-3 text-muted-foreground text-[16px] font-light leading-[1.95]">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
