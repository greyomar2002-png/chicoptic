/*
 * CHIC OPTIC — Réservation ("Galerie Blanche")
 * Style: warm parchment background with crème interlude, gold-framed form
 * panel with corner ornaments, gold primary button, letter-spaced labels.
 * Booking flow: name and phone only — the boutique calls back to agree on
 * the appointment — submitted via WhatsApp with an elegant success state.
 */
import { useState } from "react";
import { CalendarCheck, Check, Clock, MessageCircle, Phone } from "lucide-react";
import { useReveal } from "@/pages/Home";
import { toast } from "sonner";

const BOOKING_PHONE = "+216 25 904 141";
// WhatsApp booking line (test number — replace with the boutique's WhatsApp when live)
const WHATSAPP_NUMBER = "21655021740";

export default function Booking() {
  const ref = useReveal();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const isValid = name.trim().length > 1 && phone.trim().length >= 8;

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isValid) {
      toast.error("Veuillez remplir votre nom et votre téléphone avant d'envoyer.");
      return;
    }
    const text = encodeURIComponent(
      `Bonjour, je souhaite réserver un examen de la vue.\n\nNom : ${name.trim()}\nTéléphone : ${phone.trim()}\n\nMerci de bien vouloir me contacter pour convenir d'un rendez-vous.`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener");
    setSent(true);
    toast.success("Message WhatsApp prêt — merci de l'envoyer depuis l'application.");
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-background text-foreground py-28 md:py-40"
      id="reservation">
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden lg:block" />

      <div className="container relative z-10">
        <div className="mb-16 grid items-end gap-8 md:grid-cols-2">
          <div>
            <p className="label-luxe reveal">Réservation en Ligne</p>
            <h2
              className="reveal mt-5 font-display gold-rule"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.08 }}>
              Réservez votre
              <br />
              examen de <em className="text-gold">la vue.</em>
            </h2>
          </div>
                  <p className="reveal max-w-md text-foreground/65 text-base font-light leading-[1.95]">
            Laissez vos coordonnées — la maison vous contactera pour convenir
            ensemble de la date et du créneau. Un entretien
            personnalisé, sans attente, dans la discrétion de la résidence Phénix.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Gold-framed form panel */}
          <div className="reveal lg:col-span-7">
            {sent ? (
              <div className="gold-frame flex min-h-[480px] flex-col items-center justify-center bg-background p-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center border border-gold/50">
                  <Check className="h-8 w-8 text-gold" />
                </div>
                <h3
                  className="mt-8 font-display text-foreground"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
                  Demande envoyée.
                </h3>
                <p className="mt-5 max-w-md text-foreground/70 text-[16px] font-light leading-[1.95]">
                  Votre message WhatsApp a été préparé. Envoyez-le, et la
                  maison vous confirmera votre créneau dans les plus brefs
                  délais.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setName("");
                    setPhone("");
                  }}
                  className="mt-8 border-b border-gold/60 pb-1 text-gold text-[12px] tracking-[0.22em] uppercase hover:border-gold transition-colors">
                  Nouvelle demande
                </button>
              </div>
            ) : (
              <div className="gold-frame bg-background p-8 md:p-12">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label className="label-luxe block">Nom complet</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Votre nom"
                      className="mt-3 w-full border-b border-gold/40 bg-transparent py-3 text-foreground text-[16px] font-light placeholder:text-foreground/35 focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="label-luxe block">Téléphone</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+216 …"
                      inputMode="tel"
                      className="mt-3 w-full border-b border-gold/40 bg-transparent py-3 text-foreground text-[16px] font-light placeholder:text-foreground/35 focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4">
                  <button
                    onClick={handleWhatsApp}
                    disabled={!isValid}
                    className="flex w-full items-center justify-center gap-3 border border-[#25D366]/50 bg-[#25D366]/10 px-10 py-4 text-[13px] tracking-[0.22em] uppercase text-[#128C7E] transition-colors duration-300 hover:bg-[#25D366] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed">
                    <MessageCircle className="h-4 w-4" />
                    Réserver via WhatsApp
                  </button>
                  <a
                    href={`tel:${BOOKING_PHONE.replace(/\s/g, "")}`}
                    className="flex w-full items-center justify-center gap-3 py-2 text-foreground/60 hover:text-gold text-[13px] font-light transition-colors">
                    <Phone className="h-4 w-4 text-gold" />
                    Besoin d'aide ? {BOOKING_PHONE}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Ceremony side panel */}
          <div className="lg:col-span-5">
            <div className="reveal flex h-full flex-col gap-px border border-gold/30 bg-gold/30">
              {[
                {
                  icon: CalendarCheck,
                  step: "Étape 01",
                  title: "Demandez",
                  desc: "Laissez vos coordonnées — la maison vous rappelle pour convenir de votre créneau.",
                },
                {
                  icon: Phone,
                  step: "Étape 02",
                  title: "Confirmez",
                  desc: "La maison vous rappelle pour confirmer votre créneau.",
                },
                {
                  icon: Clock,
                  step: "Étape 03",
                  title: "Venez",
                  desc: "Présentez-vous à la résidence Phénix — votre entretien vous attend.",
                },
              ].map((s) => (
                <div key={s.step} className="bg-background p-8 transition-colors duration-300 hover:bg-[oklch(0.85_0.018_85)]">
                  <div className="flex items-start gap-5">
                    <s.icon className="mt-1 h-6 w-6 shrink-0 text-gold" />
                    <div>
                      <p className="label-luxe !text-[0.6rem]">{s.step}</p>
                      <h3 className="mt-2 font-display text-xl text-foreground">{s.title}</h3>
                      <p className="mt-2 text-foreground/70 text-[15px] font-light leading-[1.85]">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="reveal mt-6 text-foreground/50 text-[13px] font-light leading-[1.8] italic">
              Du lundi au samedi — un examen de la vue dure environ
              trente minutes, accompagné de l'ensemble du conseil morphologique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
