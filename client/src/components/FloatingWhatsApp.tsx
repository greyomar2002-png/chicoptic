/*
 * OPTIMIST J CARTHAGE — Floating WhatsApp button ("Galerie Blanche")
 * Style: fixed bottom-right, gold hairline ring around WhatsApp icon,
 * subtle fade-in, hover lift; matches the ivory/gold maison aesthetic.
 */
import { useState } from "react";

const WHATSAPP_NUMBER = "21698410676";
const DEFAULT_MESSAGE = encodeURIComponent(
  "Bonjour OPTIMIST Jardins de Carthage, je souhaiterais obtenir plus d'informations."
);
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`;

export default function FloatingWhatsApp() {
  const [loaded, setLoaded] = useState(false);

  // Delayed appearance so it doesn't crowd the hero's first impression
  useState(() => {
    const t = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(t);
  });

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full
        bg-[oklch(0.90_0.022_85)] border border-gold/70 shadow-lg
        transition-all duration-500 ease-out
        hover:scale-105 hover:shadow-xl hover:border-gold active:scale-95
        ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}`}
    >
      {/* Gold hairline ring */}
      <span className="absolute inset-0.5 rounded-full border border-gold/40 pointer-events-none" />
      {/* WhatsApp icon in brand green, sized to sit inside the gold ring */}
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 relative"
        aria-hidden="true"
        fill="none"
      >
        <path
          d="M16 2.67A13.33 13.33 0 0 0 3.8 20.5L2.67 28l7.65-2A13.33 13.33 0 1 0 16 2.67Z"
          fill="#25D366"
        />
        <path
          d="M12.55 10.35c-.28-.62-.58-.64-.84-.65H10.8c-.26 0-.68.1-1.04.49-.36.39-1.36 1.33-1.36 3.24s1.39 3.76 1.58 4.02c.19.26 2.73 4.16 6.6 5.83 2.47 1.07 3.33.86 3.93.8.6-.05 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37-.33-.16-1.91-.94-2.21-1.05-.29-.11-.5-.16-.71.16-.21.33-.81 1.05-.99 1.26-.18.21-.37.24-.69.08-.33-.16-1.38-.51-2.63-1.62-.97-.86-1.63-1.93-1.82-2.26-.19-.33-.02-.51.14-.67.15-.15.33-.38.49-.58.16-.19.21-.33.32-.55.11-.21.05-.4-.03-.56-.08-.16-.72-1.72-.98-2.36-.26-.62-.52-.54-.72-.55-.18-.01-.39-.01-.6-.01-.21 0-.56.08-.85.4-.3.33-1.13 1.1-1.13 2.68s1.15 3.11 1.31 3.32c.16.21 2.27 3.46 5.5 4.86.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37z"
          fill="#FFFFFF"
        />
      </svg>
    </a>
  );
}
