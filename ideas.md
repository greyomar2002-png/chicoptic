# Chic Optic — Design Brainstorm

## Trois approches stylistiques

### 1. « Or & Velours » — Luxe classique français
Palette noir profond, or champagne, ivoire. Séraphines, serif Didone (Didot/Cormorant), mise en page type maison de haute joaillerie. Émotion : prestige intemporel, héritage carthaginois.
**Probabilité : 0.06**

### 2. « Galerie Blanche » — Minimalisme muséal
Blanc cassé, gris pierre, un seul accent cuivre. Typographie grotesque fine, énormes espaces blancs, photos en pleine largeur comme dans une galerie d'art. Émotion : pureté, discrétion de luxe.
**Probabilité : 0.04**

### 3. « Méditerranée Nocturne » — Glamour méditerranéen
Bleu nuit carthaginois, bronze, sable. Motifs géométriques puniques subtils, ambiance crépusculaire bord de mer. Émotion : romance méditerranéenne, chaleur nocturne.
**Probabilité : 0.03**

---

## Approche retenue : « Or & Velours » — Luxe classique français

### Design Movement
Haute couture parisienne croisée avec l'héritage de la joaillerie (Cartier, Dior Lunettes) — mise en page éditoriale, contrastes dramatiques, matériaux suggérés : velours noir, laiton poli, marbre.

### Core Principles
1. **Contraste dramatique** : fonds noir ébène / ivoire, or comme fil conducteur — jamais violet ni dégradé néon.
2. **Typographie éditoriale** : Didot/Cormorant en display, lettres espacées en petites majuscules pour les labels.
3. **Matière et texture** : grain fin, ombres douces, liserés dorés (hairlines 1px) comme des cadres de bijoux.
4. **Espace comme luxe** : sections aérées, asymétrie soignée (jamais de centrage systématique).

### Color Philosophy
- **Ébène** `oklch(0.18 0.01 60)` — profondeur et exclusivité.
- **Or champagne** `oklch(0.78 0.09 85)` / `#c9a45c` — chaleur du laiton poli, signal de prestige.
- **Ivoire** `oklch(0.97 0.008 85)` — lumière douce, papier d'invitation.
Le noir dit « exclusif », l'or dit « précieux », l'ivoire dit « accueillant ».

### Layout Paradigm
Structure éditoriale asymétrique : hero split (texte à gauche, image qui déborde), sections en alternance de fonds (ivoire → ébène → ivoire), chiffres et labels décalés hors-grille à gauche, règles dorées verticales comme des cadres.

### Signature Elements
1. **Liseré doré fin** (1px) encadrant images et titres, avec un coin ornemental.
2. **Monogramme « CO »** — sigle entrelacé comme sur un écrin de bijoutier.
3. **Petites majuscules espacées** (tracking-widest, lettres dorées) pour tous les labels de section.

### Interaction Philosophy
Interactions lentes et précieuses : survols qui éclairent (halo doré), images qui zooment très légèrement (scale 1.05), boutons qui se remplissent d'or comme un trait d'encre.

### Animation
- Entrées au scroll : fade + translateY(24px), 600ms, cubic-bezier(0.23, 1, 0.32, 1), stagger 80ms.
- Liserés dorés qui se dessinent (draw-in) au survol des cartes.
- Aucun parallaxe lourd ; transitions < 300ms pour la navigation, 500–700ms pour les révélations de section.
- Respect de prefers-reduced-motion.

### Typography System
- **Display** : Cormorant Garamond (500/600, italique pour accents) — échos Didot.
- **Body / UI** : Jost (300/400/500) — géométrique discret à la Futura.
- Hiérarchie : h1 clamp(3rem→5.5rem), labels en Jost 11px tracking-[0.3em] uppercase, corps 16-18px.

### Brand Essence
« L'optique de haute joaillerie aux Jardins de Carthage — pour qui veut voir le monde avec élégance. »
Personnalité : raffiné, accueillant, précieux.

### Brand Voice
Ton de maison : phrases courtes, assurées, jamais de remplissage. Exemples :
- « Le regard est un bijou. Nous l'habillons. »
- « Votre vision, notre signature. »

### Wordmark & Logo
Monogramme **CO** entrelacé dans un médaillon circulaire à double liseré doré — évoque un sceau de bijoutier. Wordmark « CHIC OPTIC » en Cormorant petites majuscules espacées à côté du sceau.

### Signature Brand Color
Or champagne **#c9a45c** — la couleur du laiton poli des montures haut de gamme.

## Style Decisions
- Langue principale : français, avec quelques mots anglais (branding).
- Sections : Nav, Hero, Collections (3 collections), Services (4 expertises), À propos / Atelier, Note de satisfaction (4.8/43 avis, thèmes qualitatifs uniquement — PAS de faux témoignages individuels), Contact + carte, Footer.
- Aucun témoignage client inventé (interdit policy) : la section confiance utilise uniquement les statistiques réelles Google (note, nombre d'avis, thèmes agrégés).
## Style Decisions
- Dense functional sections (Services, Réputation, Contact) must still feel like luxury editorial pages: no plain list blocks without a strong headline, framed structure, and generous ceremonial spacing.
- The CO monogram is a jeweler's seal: use it sparingly as a refined mark or watermark, never as a dominant decorative poster unless the whole composition is designed around it.
- Supporting copy must remain readable and ceremonial: labels may be tiny spaced capitals, but service descriptions, contact details, and trust content must carry clear hierarchy and maison-level confidence (larger, more confident type).
- Gold framing motif pushed into a recognizable system across images, stats, service panels, contact, and section openings; occasional monogram stamps as watermarks.
## Direction 2 (demande utilisateur, août 2026) : « Galerie Blanche » — Luxe blanc
L'utilisateur n'a pas aimé le thème sombre. Nouvelle direction : luxueuse MAIS BLANCHE.
- Fonds : blanc pur / ivoire / crème très pâle ; interludes en crème, jamais d'ébène.
- Accents : or champagne (inchangé), texte principal en anthracite profond.
- Moments sombres autorisés : uniquement la nav fixe semi-transparente et le footer crème profond.
- Photos : remplacer les visuels sombres par des visuels lumineux (marbre blanc, lumière naturelle).
- Typographie Cormorant/Jost, liserés dorés à coins, monogramme CO : conservés.
- Sections Services et Contact : fonds crème/ivoire avec liserés dorés, cartes blanches.
