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
