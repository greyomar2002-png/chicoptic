# Reviews data — OPTIMIST J Carthage Google listing (checked Aug 15, 2026)

- The French-view listing panel (Présentation/À propos) shows NO reviews section: no star rating or review count appears next to the business name, and no "Avis" tab is present.
- Related listings: Hallek's Optic 4,9 (7), OPTIMIST Lac 2 5,0 (6), Chic optic jardin de Carthage 4,8 (43).
- Conclusion: OPTIMIST J Carthage is a new listing with zero published reviews so far.
- Policy: MUST NOT fabricate testimonials. Therefore: build the reviews section as a real data component — when no reviews exist, show a dignified "Les avis clients seront affichés ici" state with a direct link inviting visitors to leave the first review on Google. Once real reviews appear on the listing, they can be added to a typed data array.
- Directions URL (Google Maps directions to the shop):
  https://www.google.com/maps/dir/?api=1&destination=36.8536248,10.3016218&destination_place_id=ChIJ23BVVQC14iIRfDvf38eQls4
  Place ID: ChIJ23BVVQC14iIRfDvf38eQls4
- Review submission link: https://www.google.com/maps/place/?q=place_id:ChIJ23BVVQC14iIRfDvf38eQls4
- Full listing URL: https://www.google.com/maps/place/OPTIMIST+J+Carthage/@36.8536248,10.3016218,17z/data=!3m1!4b1!4m6!3m5!1s0x12e2b500545570db:0xce9690b7dfdf3b7c!8m2!3d36.8536248!4d10.3016218!16s%2Fg%2F11w7ncbfb0

## Verified working URLs (Aug 15, 2026)

The `https://www.google.com/maps/place/?q=place_id:ChIJ...` format loads an empty pane (broken). The FULL listing URL with coordinates works reliably and opens the OPTIMIST J Carthage panel with "Write a review" available:

https://www.google.com/maps/place/OPTIMIST+J+Carthage/@36.8536248,10.3016218,17z/data=!3m1!4b1!4m6!3m5!1s0x12e2b500545570db:0xce9690b7dfdf3b7c!8m2!3d36.8536248!4d10.3016218!16s%2Fg%2F11w7ncbfb0

Plan: set LISTING_URL in Contact.tsx and Reputation.tsx to this full URL. Also update Footer if it uses a listing link.

## Brand card style spec (Aug 15, 2026)

User example: Sneaker brand card (299x427 portrait, rounded corners), lifestyle product photo (shoe in scene) with bold white italic brand wordmark ("SKECHERS") at the bottom. Adaptation for OPTIMIST: eyewear photos with bold condensed brand wordmark at bottom, aspect ~3:4 (fit the 4-col grid), rounded corners via CSS rounded-xl on the img. Real brands: Tom Ford, Ray-Ban, Moscot, Persol, Prada, Carolina Herrera, Guess, Tommy Hilfiger.
Marques grid currently: lg:grid-cols-4, cards have gold corner accents, logo img h-16 w-16, label-luxe line (country + maison), h3 name, h-px divider, note paragraph — to remove label/h3/divider/note and use full-bleed photo card instead.
Image reserved paths: /home/ubuntu/webdev-static-assets/brand-tomford.png etc.

## State snapshot (Aug 15, 2026 ~21:10 local)
- Current live checkpoint: 4852fd53 (mobile hero portrait fix: portrait band w-[40%] sm:w-[50%] md:w-[62%], crop object-[74%_34%] md:object-[70%_30%], overlay via-background/65 md:via-background/85).
- Pushed to github/main: 4852fd5. Live URL: https://chicoptic-v344muzr.manus.space
- Hero portrait img: /manus-storage/hero-portrait_5a0e738a.png (was generating, now appears rendered OK per screenshots).
- User report: on their phone preview (screenshot shows dev preview frame with note "This page is not live and cannot be shared directly. Please publish to get a public link.") hero shows ONLY the portrait with huge eye, NO headline/CTA text. Note: screenshot appears to show a cached/older page, or the reveal animations/contrast issue. Desktop+mobile screenshots on our side show correct text.
- Hero.tsx structure: section bg-background grain; right portrait div absolute inset-y-0 right-0; container flex min-h-[100svh] justify-center pt-24; eyebrow "Carthage · Tunisie"; h1 "Voyez la / différence."; subline p; two CTAs (#booking, #marques); bottom-right caption (md:block only).
- Note: user's screenshot looks like it was captured BEFORE checkpoint published OR shows the older hero-portrait generating placeholder. Dev preview "not live" banner is a Manus preview artifact.
- Next: verify published site on mobile URL, check if reveal classes hide content (reveal + IntersectionObserver may hide elements on first paint — elements get is-visible added by IntersectionObserver with threshold 0.12). If hero text never reveals on mobile (e.g., no IntersectionObserver support or page height issue), content invisible. Actually `.reveal` likely starts with opacity-0 until .is-visible — on mobile portrait (tall narrow) hero is visible, should trigger. Check index.css for .reveal rule.

## Seam fix state (Aug 15, 2026 21:20)
- User screenshot showed a visible vertical seam line at the portrait's left edge (photo starts abruptly, ivory-to-photo edge at ~60% width on mobile).
- Fix approach: band widened to w-[85%]; img stays at w-[40%] sm:w-[50%] md:w-[62%] on the right; overlay div full-width with explicit linear-gradient using exact background color oklch(0.90 0.015 85): opaque 0-55%, 0.96 at 75%, 0.75 at 88%, transparent 100%.
- Current checkpoint before fix: cea88ef0 (pushed as cea88ef). Local Hero.tsx now edited, need tsc+build check, screenshot verify mobile+desktop, checkpoint, push.
- Hero image: /manus-storage/hero-portrait_5a0e738a.png.
- Business data: OPTIMIST J Carthage, Residence Venus, Jardins de Carthage 2046, +216 98 410 676, Mon-Sat 9h30-20h00, WhatsApp +216 25 904 141, listing URL https://www.google.com/maps/place/OPTIMIST+J+Carthage/@36.8536248,10.3016218,17z/data=!3m1!4b1!4m6!3m5!1s0x12e2b500545570db:0xce9690b7dfdf3b7c!8m2!3d36.8536248!4d10.3016218!16s%2Fg%2F11w7ncbfb0, directions via place_id ChIJ23BVVQC14iIRfDvf38eQls4.

## Hero face + fade-in update state (Aug 15, 2026 21:25)
User asked: show more of the face, plus smooth fade-in loading animation for hero elements.
Progress: created /home/ubuntu/webdev-static-assets/hero-portrait-face.png (1291x1429, face-centered crop from hero-portrait.png x 44-100%, y 2-95%), uploaded → /manus-storage/hero-portrait-face_e1aed79a.png. Hero.tsx rewritten: useHeroReveal() hook (setTimeout 200ms + IntersectionObserver fallback, visible state), 4 staggered stages with 700ms transitions at 80ms intervals (80/160/240/320/400ms delays), replaced old useReveal import (Home.tsx still exports useReveal, fine).
Initial object position object-[62%_34%] put face too far right on desktop (eyes hidden by dissolve). Changed to object-[20%_center] md:object-[30%_center] — face crop's face is left-heavy, dissolve is on the right side, so anchoring left shows the eyes.
Next: screenshot mobile+desktop verify, checkpoint (auto-publish), push via git push "https://x-access-token:${GH_PUSH_TOKEN}@github.com/greyomar2002-png/chicoptic.git" +HEAD:main.
Last checkpoint: a0aad8fe.
