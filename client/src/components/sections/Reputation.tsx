/*
 * OPTIMIST J CARTHAGE — Avis clients ("Galerie Blanche")
 * Style: ivory editorial page, framed stat card with corner ornaments,
 * gold-framed review cards in Cormorant italic, letter-spaced labels.
 * Data: ONLY real reviews — add entries to REAL_REVIEWS as they appear on
 * Google. The listing is brand new, so an elegant empty state with a
 * "Laissez le premier avis" invitation links directly to the Google listing.
 * Real data: place ID ChIJ23BVVQC14iIRfDvf38eQls4, Residence Venus, Tunis 2046.
 */
import { ExternalLink, Quote, Star } from "lucide-react";
import { useReveal } from "@/pages/Home";

const LOGO = "/manus-storage/logo-opt_461d86f0.png";
const PLACE_ID = "ChIJ23BVVQC14iIRfDvf38eQls4";
const LISTING_URL = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;

/**
 * Real Google reviews. Add verified reviews here as they are published on
 * the Google listing (name, star rating, text, date). Never fabricate them.
 */
type RealReview = {
  name: string;
  rating: number;
  text: string;
  date: string;
};

const REAL_REVIEWS: RealReview[] = [];

const THEMES = [
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
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex text-gold" aria-label={`${rating} étoiles sur 5`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "fill-gold" : "text-gold/35"}`}
        />
      ))}
    </div>
  );
}

export default function Reputation() {
  const ref = useReveal();
  const hasReviews = REAL_REVIEWS.length > 0;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-background py-28 md:py-40"
      id="avis">
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
          <div className="reveal max-w-md text-muted-foreground text-base font-light leading-[1.9] lg:col-span-4 lg:col-start-9">
            {hasReviews ? (
              <>
                Les avis que vous lisez ici sont ceux publiés par nos clients
                sur Google — rien de plus, rien de moins.
              </>
            ) : (
              <>
                Une note qui se construit visite après visite, ajustage après
                ajustage — et qui ne se déclare pas, elle se mérite.
              </>
            )}
          </div>
        </div>

        <div className="grid items-start gap-14 lg:grid-cols-12">
          {/* Framed stat card */}
          <div className="reveal lg:col-span-4">
            <div className="gold-frame p-10">
              <p className="label-luxe">Google Reviews</p>
              <div className="mt-6 flex items-baseline gap-5">
                <span
                  className="font-display text-gold"
                  style={{ fontSize: "clamp(4.5rem, 8vw, 6.5rem)", lineHeight: 1 }}>
                  {hasReviews ? "5,0" : "—"}
                </span>
                <div className="flex flex-col gap-1.5">
                  <Stars rating={hasReviews ? 5 : 0} />
                  <span className="label-luxe !text-[0.6rem] !text-foreground/60">
                    {hasReviews ? "sur 5" : "à construire"}
                  </span>
                </div>
              </div>
              <div className="mt-6 h-px w-full bg-gold/30" />
              <p className="mt-5 text-foreground/80 text-[16px] font-light leading-relaxed">
                {hasReviews ? (
                  <>
                    Sur la base des <strong className="font-normal">{REAL_REVIEWS.length} avis</strong>{" "}
                    publiés par nos clients sur Google.
                  </>
                ) : (
                  <>
                    La maison vient d'ouvrir aux <strong className="font-normal">Jardins de Carthage</strong>{" "}
                    — les premiers avis y seront publiés.
                  </>
                )}
              </p>
              <a
                href={LISTING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal mt-8 flex w-full items-center justify-center gap-3 border border-gold/60 px-6 py-4 text-[12px] tracking-[0.2em] uppercase text-gold transition-all duration-300 hover:bg-gold hover:text-white active:scale-[0.98]">
                <Quote className="h-3.5 w-3.5" />
                {hasReviews ? "Voir tous les avis sur Google" : "Laisser le premier avis"}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {hasReviews ? (
            /* Real review cards */
            <div className="lg:col-span-8 grid gap-8 md:grid-cols-2">
              {REAL_REVIEWS.map((r) => (
                <figure
                  key={r.name}
                  className="reveal group relative border border-gold/30 bg-[oklch(0.87_0.016_85)] p-8 transition-colors duration-300 hover:border-gold/60">
                  <div className="absolute top-3 left-3 h-4 w-4 border-t border-l border-gold/40 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-gold/40 pointer-events-none" />
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center border border-gold/40 font-display text-gold">
                      {r.name.charAt(0).toUpperCase()}
                    </div>
                    <figcaption>
                      <p className="font-display text-lg text-foreground">{r.name}</p>
                      <p className="label-luxe mt-0.5 !text-[0.6rem] !text-foreground/50">
                        Client Google · {r.date}
                      </p>
                    </figcaption>
                    <span className="ml-auto">
                      <Stars rating={r.rating} />
                    </span>
                  </div>
                  <blockquote className="mt-6 font-display text-[1.15rem] italic leading-[1.75] text-foreground/85">
                    « {r.text} »
                  </blockquote>
                </figure>
              ))}
            </div>
          ) : (
            /* Elegant empty state: no reviews yet on this new listing */
            <div className="lg:col-span-8 flex flex-col gap-12">
              {THEMES.map((t, i) => (
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
          )}
        </div>
      </div>
    </section>
  );
}
