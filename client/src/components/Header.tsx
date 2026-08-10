/*
 * CHIC OPTIC — Header
 * Style: ivory bar with CO monogram seal, Cormorant wordmark, gold hairline.
 * Transparent over dark hero → ivory/gold-tinted on scroll.
 */
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const LOGO = "/manus-storage/logo-co_2cd9bf7c.png";

const NAV = [
  { href: "#collections", label: "Collections" },
  { href: "#services", label: "Services" },
  { href: "#maison", label: "La Maison" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-ebony/95 backdrop-blur-md border-b border-gold/25 shadow-[0_2px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent",
      )}>
      <div className="container flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3">
          <img
            src={LOGO}
            alt="Monogramme Chic Optic"
            className="h-11 w-11 object-contain"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-[0.25em] text-ivory font-medium">
              CHIC OPTIC
            </span>
            <span className="label-luxe mt-1 text-[0.55rem]">
              Jardins de Carthage
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-ivory/85 hover:text-gold text-[13px] tracking-[0.22em] uppercase transition-colors duration-200">
              {item.label}
            </a>
          ))}
          <a
            href="tel:+21625904141"
            className="flex items-center gap-2 border border-gold/60 px-4 py-2 text-[12px] tracking-[0.18em] uppercase text-gold hover:bg-gold hover:text-ebony transition-colors duration-200">
            <Phone className="h-3.5 w-3.5" />
            +216 25 904 141
          </a>
        </nav>

        <button
          className="md:hidden text-ivory p-2"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}>
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-px w-6 bg-gold transition-transform duration-200",
                open && "translate-y-[5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-gold transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-gold transition-transform duration-200",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-ebony/98 border-t border-gold/20 px-6 py-6 flex flex-col gap-5">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-ivory/90 hover:text-gold text-sm tracking-[0.22em] uppercase transition-colors">
              {item.label}
            </a>
          ))}
          <a
            href="tel:+21625904141"
            className="text-gold text-sm tracking-[0.18em] uppercase flex items-center gap-2">
            <Phone className="h-4 w-4" />
            +216 25 904 141
          </a>
        </nav>
      )}
    </header>
  );
}
