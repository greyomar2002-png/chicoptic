/*
 * OPTIMIST J CARTHAGE — Collections ("Galerie Blanche")
 * Style: white gallery background, asymmetric editorial layout, gold-framed
 * images with corner ornaments, letter-spaced labels, staggered reveal.
 * First image now the dark slate sunglasses set (contrast moment), then the
 * light marble optical set.
 */
import { useReveal } from "@/pages/Home";

const SUNGLASSES = "/assets/images/collection-sunglasses.png";
const OPTICAL = "/assets/images/collection-optical.png";

const COLLECTIONS = [
  {
    img: SUNGLASSES,
    label: "Collection Soleil",
    title: "Solaires de créateurs",
    desc: "Aviateurs au laiton poli, acétates écaille et cat-eye sculptés — des silhouettes iconiques qui protègent le regard tout en l'affirmant.",
    align: "left",
  },
  {
    img: OPTICAL,
    label: "Collection Vue",
    title: "Lunettes de vue",
    desc: "Fils d'or, acétates profonds, deux-tons discrets — des montures taillées pour sublimer chaque visage et accompagner chaque regard.",
    align: "right",
  },
];

export default function Collections() {
  const ref = useReveal();

  return (
    <section ref={ref} className="bg-background py-28 md:py-36" id="collections">
      <div className="container">
        <div className="mb-20 flex items-end justify-between gap-8">
          <div className="reveal">
            <p className="label-luxe">Nos Collections</p>
            <h2
              className="reveal mt-4 font-display text-foreground gold-rule"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", lineHeight: 1.1 }}>
              Deux univers,
              <br />
              une même exigence.
            </h2>
          </div>
          <p className="hidden max-w-xs text-muted-foreground text-base font-light leading-[1.9] lg:block reveal">
            Chaque monture est choisie pour son équilibre, sa matière et sa
            capacité à devenir l'écrin de votre regard.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {COLLECTIONS.map((c) => (
            <div key={c.label} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div
                className={`reveal gold-frame group overflow-hidden lg:col-span-7 ${
                  c.align === "right" ? "lg:order-2" : ""
                }`}>
                <img
                  src={c.img}
                  alt={c.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className={`lg:col-span-5 ${c.align === "right" ? "lg:order-1" : ""}`}>
                <p className="label-luxe reveal">{c.label}</p>
                <h3
                  className="reveal mt-4 font-display text-foreground"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
                  {c.title}
                </h3>
                <div className="reveal mt-6 h-px w-16 bg-gold/70" />
                <p className="reveal mt-6 text-muted-foreground text-[17px] font-light leading-[1.95]">
                  {c.desc}
                </p>
                <a
                  href="#contact"
                  className="reveal mt-8 inline-block border-b border-gold/60 pb-1 text-gold text-[12px] tracking-[0.22em] uppercase hover:border-gold transition-colors">
                  Essayer en boutique →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
