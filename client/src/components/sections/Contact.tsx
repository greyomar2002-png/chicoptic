/*
 * OPTIMIST J CARTHAGE — Contact ("Galerie Blanche")
 * Style: crème gallery background, gold-framed map, white contact cards with
 * corner ornaments, anthracite headings, confident legible copy.
 * Real data: Residence Venus, Tunis 2046, +216 98 410 676,
 * 36.8536248, 10.3016218.
 */
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { useReveal } from "@/pages/Home";

const LOGO = "/manus-storage/logo-opt_461d86f0.png";
const PLACE_ID = "ChIJ23BVVQC14iIRfDvf38eQls4";
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=36.8536248,10.3016218&destination_place_id=${PLACE_ID}`;
const LISTING_URL = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;

export default function Contact() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[oklch(0.87_0.016_85)] text-foreground py-28 md:py-40"
      id="contact">
      <img
        src={LOGO}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-[62%] h-60 w-60 opacity-[0.05] hidden lg:block"
      />

      <div className="container relative z-10">
        <div className="mb-20 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="label-luxe reveal">Nous Trouver</p>
            <h2
              className="reveal mt-5 font-display gold-rule"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.08 }}>
              Venez essayer
              <br />
              l'<em className="text-gold">élégance.</em>
            </h2>
          </div>
          <p className="reveal max-w-md text-foreground/65 text-base font-light leading-[1.95]">
            Residence Venus, Jardins de Carthage — un écrin lumineux au cœur du
            quartier, à quelques minutes du centre de Tunis. Chaque essai est
            un rituel ; chaque visite, un plaisir.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="reveal gold-frame overflow-hidden lg:col-span-7">
            <iframe
              title="Localisation OPTIMIST Jardins de Carthage"
              src="https://www.google.com/maps?q=36.8536248,10.3016218&z=16&output=embed"
              className="h-[440px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Obtenir l'itinéraire vers OPTIMIST Jardins de Carthage"
            className="reveal lg:col-span-7 group inline-flex w-auto items-center gap-3 self-start border border-gold bg-gold/10 px-6 py-3.5 text-[12px] tracking-[0.22em] uppercase text-gold transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-[0_8px_24px_rgba(201,164,92,0.3)] active:scale-[0.98]">
            <Navigation className="h-4 w-4" />
            Obtenir l'itinéraire
            <span
              aria-hidden="true"
              className="inline-block translate-x-0 transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </a>

          <div className="flex flex-col gap-px border border-gold/30 bg-gold/30 lg:col-span-5">
            {[
              {
                icon: MapPin,
                title: "Adresse",
                lines: ["Residence Venus", "Jardins de Carthage", "2046, Tunisie"],
              },
              {
                icon: Phone,
                title: "Téléphone",
                lines: ["+216 98 410 676"],
                href: "tel:+21698410676",
              },
              {
                icon: Clock,
                title: "Horaires",
                lines: ["Lundi – Samedi", "9h30 – 20h00", "Dimanche : fermé"],
              },

            ].map((c) => (
              <div
                key={c.title}
                className="group relative bg-background p-8 transition-colors duration-300 hover:bg-[oklch(0.85_0.018_85)]">
                <div className="absolute top-3 left-3 h-4 w-4 border-t border-l border-gold/40 pointer-events-none transition-colors duration-500 group-hover:border-gold" />
                <div className="flex items-center gap-4">
                  <c.icon className="h-5 w-5 text-gold" />
                  <h3 className="label-luxe !text-[0.68rem]">{c.title}</h3>
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="mt-3 block text-foreground/85 hover:text-gold text-[16px] font-light transition-colors">
                    {c.lines.map((l, i) => (
                      <span key={i} className="block leading-relaxed">
                        {l}
                      </span>
                    ))}
                  </a>
                ) : (
                  <p className="mt-3 text-foreground/85 text-[16px] font-light leading-relaxed">
                    {c.lines.map((l, i) => (
                      <span key={i} className="block">
                        {l}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
