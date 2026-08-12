/*
 * CHIC OPTIC — La Maison (About) — "Galerie Blanche"
 * Style: white gallery background, asymmetric split with tall portrait image,
 * gold vertical rule, editorial pull quote in Cormorant italic.
 */
import { useReveal } from "@/pages/Home";

const BOUTIQUE = "/assets/images/boutique-interior.png";

export default function About() {
  const ref = useReveal();

  return (
    <section ref={ref} className="bg-background py-28 md:py-36" id="maison">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="reveal gold-frame overflow-hidden">
              <img
                src={BOUTIQUE}
                alt="Intérieur de la boutique Chic Optic"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden h-24 w-24 border border-gold/40 lg:block" />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="label-luxe reveal">La Maison</p>
            <h2
              className="reveal mt-4 font-display text-foreground gold-rule"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", lineHeight: 1.1 }}>
              L'écrin de votre
              <br />
              regard, aux
              <br />
              <em className="text-gold">Jardins de Carthage.</em>
            </h2>

            <div className="reveal mt-8 space-y-6 text-muted-foreground text-[17px] font-light leading-[1.95]">
              <p>
                Nichée dans la résidence Phénix, la maison Chic Optic associe le
                savoir-faire de l'optique professionnelle à l'atmosphère d'une
                galerie lumineuse : marbre clair, laiton poli, lumière naturelle
                et un accueil que nos clients décrivent comme chaleureux et
                attentif.
              </p>
              <p>
                Chaque visite est un rituel — de l'analyse de votre vision à
                l'essayage des montures, chaque détail est pensé pour que vos
                lunettes deviennent l'accessoire qui vous ressemble.
              </p>
            </div>

            <blockquote className="reveal relative mt-12">
              <span className="absolute -top-4 left-0 font-display text-gold/50 text-6xl leading-none select-none">“</span>
              <p className="font-display text-[1.9rem] md:text-[2.2rem] italic leading-[1.35] text-foreground">
                Le conseil et le professionnalisme de l'équipe font toute la
                différence.
              </p>
              <cite className="label-luxe mt-5 block not-italic">
                L'esprit Chic Optic — résumé des avis Google de nos clients
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
