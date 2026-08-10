# Chic Optic — project state notes

## Current status (Aug 2026)
- Design direction: "Galerie Blanche" white luxury (user rejected dark "Or & Velours").
- Checkpoint 5d3a8190 = dark version; checkpoint 3648585c = white redesign.
- Shop data (from Google Maps): Chic Optic Jardin de Carthage, Résidence Phénix,
  Jardin de Carthage 1090, Tunisia; phone +216 25 904 141; 4.8★ (43 reviews);
  Facebook: facebook.com/chicoptictunis; coords 36.8530459, 10.3028679.
- Hours placeholder: Lundi–Samedi, 9h00–18h30 (NOT yet confirmed by user).
- Email used in booking mailto: contact@chicoptic.tn (placeholder, to confirm).

## Assets (manus-storage URLs)
- Logo monogram: /manus-storage/logo-co_2cd9bf7c.png
- Hero (light marble optical): /manus-storage/collection-optical_775400b2.png
- Sunglasses (dark slate): /manus-storage/collection-sunglasses_d5332552.png
- Hero dark (unused now): /manus-storage/hero-luxury-glasses.png
- Boutique interior (dark, in About): /manus-storage/boutique-interior.png

## Booking feature (just added)
- New section client/src/components/sections/Booking.tsx, id="reservation",
  after Reputation, before Contact. Form: name, phone, date (min=today),
  time slots 9h00–17h30 (30min steps, 12h–14h break). Submit opens mailto
  to contact@chicoptic.tn + shows elegant "Demande envoyée" success state.
- Header: "Réserver" button (desktop) + mobile menu link "#reservation".
- Verified renders: form panel gold-framed, 3-step side panel, success state.

## Key files
- client/src/index.css (white palette tokens, .gold-frame, .label-luxe, .reveal)
- client/src/pages/Home.tsx (sections + useReveal)
- client/src/components/{Header,Footer,sections/*}
