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

## Current task (Aug 10, 2026): placeholder brand logos in Marques.tsx
- User asked to add placeholder logo images above each brand description in Les Marques section.
- Generated 6 gold monogram logos (1920x1920 RGBA transparent):
  - /manus-storage/logo-persol_62680d49.png
  - /manus-storage/logo-icberlin_fc3d8537.png
  - /manus-storage/logo-lunor_a4cb7804.png
  - /manus-storage/logo-rayban_5b4f2b36.png
  - /manus-storage/logo-kuboraum_71117ad1.png
  - /manus-storage/logo-mykita_92f74d70.png
- Local files in /home/ubuntu/webdev-static-assets/logo-*.png, verified good (e.g. logo-persol.png shows gold laurel monogram "P").
- Logos served OK: curl -sL → 200 image/webp (307 via CloudFront).
- ISSUE: full-page & viewport screenshots do NOT show the <img> above brand names; the grid renders with gold corner frames but no logo image visible.
- Hypothesis: `loading="lazy"` on imgs in off-screen grid cells doesn't load during screenshot capture; or imgs hidden by .reveal IntersectionObserver (logo img placed inside .reveal? check).
- Fix plan: remove loading="lazy" (use eager) in Marques.tsx logo imgs; verify with screenshot; checkpoint.
- Booking form now simplified: name + phone only (user removed calendar + time slots).
- Still placeholders to confirm with user: hours (Lundi–Samedi 9h00–18h30), email (contact@chicoptic.tn), real brand list.
