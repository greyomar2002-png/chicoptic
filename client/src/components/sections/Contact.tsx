/*
 * CHIC OPTIC — Contact
 * Style: ebony editorial page, gold-framed map, framed contact cards with
 * corner ornaments, confident legible copy, monogram watermark seal.
 * Real data: Résidence Phénix, Jardin de Carthage, +216 25 904 141,
 * 36.8530459, 10.3028679.
 */
import { Clock, Facebook, MapPin, Phone } from "lucide-react";
import { useReveal } from "@/pages/Home";

const LOGO = "/manus-storage/logo-co_2cd9bf7c.png";

export default function Contact() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ebony text-ivory py-28 md:py-40 grain"
      id="contact">
      <img
        src={LOGO}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-[62%] h-60 w-60 opacity-[0.045] hidden lg:block"
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
          <p className="reveal max-w-md text-ivory/70 text-base font-light leading-[1.95]">
            Résidence Phénix, Jardins de Carthage — un écrin discret au cœur du
            quartier, à quelques minutes du centre de Tunis. Chaque essai est
            un rituel ; chaque visite, un plaisir.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="reveal gold-frame overflow-hidden lg:col-span-7">
            <iframe
              title="Localisation Chic Optic Jardin de Carthage"
              src="https://www.google.com/maps?q=36.8530459,10.3028679&z=16&output=embed"
              className="h-[440px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-px border border-gold/25 bg-gold/25 lg:col-span-5">
            {[
              {
                icon: MapPin,
                title: "Adresse",
                lines: ["Résidence Phénix", "Jardin de Carthage", "1090, Tunisie"],
              },
              {
                icon: Phone,
                title: "Téléphone",
                lines: ["+216 25 904 141"],
                href: "tel:+21625904141",
              },
              {
                icon: Clock,
                title: "Horaires",
                lines: ["Lundi – Samedi", "9h00 – 18h30"],
              },
              {
                icon: Facebook,
                title: "Facebook",
                lines: ["facebook.com/chicoptictunis"],
                href: "https://www.facebook.com/chicoptictunis",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="group relative bg-ebony p-8 transition-colors duration-300 hover:bg-[oklch(0.24_0.014_60)]">
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
                    className="mt-3 block text-ivory/90 hover:text-gold text-[16px] font-light transition-colors">
                    {c.lines.map((l, i) => (
                      <span key={i} className="block leading-relaxed">
                        {l}
                      </span>
                    ))}
                  </a>
                ) : (
                  <p className="mt-3 text-ivory/90 text-[16px] font-light leading-relaxed">
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
