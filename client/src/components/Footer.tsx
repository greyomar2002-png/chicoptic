/*
 * CHIC OPTIC — Footer ("Galerie Blanche")
 * Style: deep crème closing signature, restrained CO seal, gold hairline,
 * small caps links, maison closing line.
 */
import { Facebook, Phone } from "lucide-react";

const LOGO = "/manus-storage/logo-co_2cd9bf7c.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[oklch(0.83_0.02_85)] text-foreground/70 py-16">
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="gold-frame flex items-center gap-4 px-6 py-3">
            <img
              src={LOGO}
              alt="Monogramme Chic Optic"
              className="h-10 w-10 object-contain"
            />
            <span className="font-display text-xl tracking-[0.25em] text-foreground">
              CHIC OPTIC
            </span>
          </div>
          <p className="label-luxe mt-4 !text-[0.62rem]">
            Jardins de Carthage · Tunis
          </p>
          <div className="mt-8 h-px w-24 bg-gold/50" />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-[12px] tracking-[0.18em] uppercase">
            <a
              href="tel:+21625904141"
              className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="h-3.5 w-3.5 text-gold" />
              +216 25 904 141
            </a>
            <a
              href="https://www.facebook.com/chicoptictunis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold transition-colors">
              <Facebook className="h-3.5 w-3.5 text-gold" />
              Facebook
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 hover:text-gold transition-colors">
              Résidence Phénix, Jardin de Carthage
            </a>
          </div>
          <p className="mt-6 font-display text-lg italic text-foreground/60">
            « Votre vision, notre signature. »
          </p>
          <p className="mt-10 text-[11px] tracking-[0.14em] text-foreground/45">
            © {new Date().getFullYear()} Chic Optic Jardin de Carthage. Tous
            droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
