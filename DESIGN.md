---
name: Suge Coffee & Eatery
description: Japanese-inspired coffee and dining in Bintaro — warmth built like architecture.
colors:
  kiri-forest: 'oklch(43% 0.09 162)'
  open-canopy: 'oklch(54% 0.1 162)'
  deep-satoyama: 'oklch(30% 0.07 162)'
  washi-warm: 'oklch(98% 0.006 90)'
  rice-paper: 'oklch(94% 0.012 80)'
  bleached-bamboo: 'oklch(77% 0.04 80)'
  kiso-cedar: 'oklch(60% 0.06 65)'
  sumi-night: 'oklch(14% 0.007 162)'
  shitaji-ink: 'oklch(20% 0.007 162)'
  aged-tatami: 'oklch(50% 0.018 60)'
  first-light: 'oklch(99% 0.004 162)'
typography:
  display:
    fontFamily: "'Shippori Mincho', Georgia, serif"
    fontSize: 'clamp(3.5rem, 9vw, 8rem)'
    fontWeight: 300
    lineHeight: 1
    letterSpacing: '-0.01em'
  headline:
    fontFamily: "'Shippori Mincho', Georgia, serif"
    fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)'
    fontWeight: 300
    lineHeight: 1.15
  title:
    fontFamily: "'Jost', sans-serif"
    fontSize: '1.25rem'
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: '0.15em'
  body:
    fontFamily: "'Jost', sans-serif"
    fontSize: '1.05rem'
    fontWeight: 300
    lineHeight: 1.85
  label:
    fontFamily: "'Jost', sans-serif"
    fontSize: '0.75rem'
    fontWeight: 400
    letterSpacing: '0.18em'
  japanese:
    fontFamily: "'Noto Serif JP', serif"
    fontWeight: 300
    letterSpacing: '0.35em'
rounded:
  none: '0'
  sm: '2px'
spacing:
  xs: '0.5rem'
  sm: '1rem'
  md: '1.5rem'
  lg: '3rem'
  section: '7rem'
components:
  button-primary:
    backgroundColor: 'transparent'
    textColor: '{colors.first-light}'
    rounded: '{rounded.none}'
    padding: '0.85rem 2.5rem'
  button-primary-hover:
    backgroundColor: '{colors.first-light}'
    textColor: '{colors.deep-satoyama}'
    rounded: '{rounded.none}'
    padding: '0.85rem 2.5rem'
  button-ghost:
    backgroundColor: 'transparent'
    textColor: '{colors.shitaji-ink}'
    rounded: '{rounded.none}'
    padding: '0.85rem 2rem'
  button-ghost-hover:
    backgroundColor: '{colors.shitaji-ink}'
    textColor: '{colors.first-light}'
    rounded: '{rounded.none}'
    padding: '0.85rem 2rem'
  form-input:
    backgroundColor: 'transparent'
    textColor: '{colors.shitaji-ink}'
    rounded: '{rounded.none}'
    padding: '0.75rem 0'
  menu-tab-active:
    backgroundColor: 'transparent'
    textColor: '{colors.kiri-forest}'
    rounded: '{rounded.none}'
    padding: '0.75rem 1.5rem'
---

# Design System: Suge Coffee & Eatery

## 1. Overview

**Creative North Star: "The Architecture of Warmth"**

This is a space-as-design system. Suge Coffee exists as a physical room before it exists as a website, and every screen decision inherits from that room: considered structure at the large scale, softness at the surface, nothing competing for priority. The café's floor plan discipline — a clear path through entry, seating, menu, counter — maps directly onto the page: each section occupies its own volume, separated by generous air, resolved before the next begins.

The palette is tonal rather than decorative. Kiri Forest (deep emerald, drawn from the satoyama forest belt south of Tokyo) grounds every dark surface. Washi Warm cream holds the light surfaces. Sumi Night charcoal provides absolute contrast. These three anchor colors appear in the physical printed menu; the digital site inherits them rather than inventing new ones. Warmth comes from the cream and wood tones, never from literal warmth colors (orange, amber, red).

Typography carries the Japanese-architecture read. Shippori Mincho is a digital mincho typeface with roots in mid-century Japanese book printing — the weight distribution of the strokes is different from European serifs, narrower at the joins, more deliberate at the terminals. Paired with Jost (a geometric humanist sans), the combination reads as bilingual by design: one face for ceremony, one face for legibility. Noto Serif JP handles any actual Japanese character.

**Key Characteristics:**

- Flat, tonal layering — depth through color fields, not shadows
- Sharp or barely-rounded corners (0–2px) — the café's architectural reference
- Generous vertical breathing between sections (7rem)
- Staggered entrance motion, ease-out-quart only, no bounce
- Photography is non-optional: every surface implying space or food must carry a real image
- Japanese characters (すごい, 空間) used sparingly as atmosphere, never decoration

## 2. Colors: The Kiri Palette

Three primary roles, three neutral supports, one accent ramp. The palette is never invented on new surfaces; it is reassigned from these eleven tokens.

### Primary

- **Kiri Forest** (`oklch(43% 0.09 162)`): The brand's defining color. Used for accent text (italic em tags in headings), active states (menu tab indicator, form focus), interactive borders on hover, and the gallery section background. Never used as a large fill on light pages — its mass is earned by rarity and by full-bleed use on intentional dark sections.
- **Open Canopy** (`oklch(54% 0.1 162)`): The lighter emerald. Used for hover states on Kiri Forest elements and for the form submit button in its success state. One step up the ramp from Kiri Forest.
- **Deep Satoyama** (`oklch(30% 0.07 162)`): The darkest emerald. Used for the hero overlay gradient base and as the text color of the primary button on hover (white button background, Deep Satoyama text). Grounds the hero photography without crushing it.

### Neutral

- **Washi Warm** (`oklch(98% 0.006 90)`): The primary page background. Named after Japanese washi paper — marginally warm, never pure white. Text on Washi Warm must meet WCAG AA (Shitaji Ink on Washi Warm passes at 14:1).
- **Rice Paper** (`oklch(94% 0.012 80)`): Secondary warm surface. Used as the middle column in menu panels and as the background of the About section. Slightly deeper and more amber than Washi Warm.
- **Bleached Bamboo** (`oklch(77% 0.04 80)`): Decorative neutral. Used for the hero Japanese kicker text, the gallery label text, the 1px divider line in headings, and the scroll-hint bar. Its warmth anchors the light surfaces against the cool emerald.
- **Kiso Cedar** (`oklch(60% 0.06 65)`): Warm mid-tone. Used for the wood-tone accents and as a potential border color on warm surfaces. Named after the Kiso Valley cedar used in traditional Japanese joinery.
- **Sumi Night** (`oklch(14% 0.007 162)`): The dark panel color. Used for the left column of the drinks menu panel and as the page footer background. Near-black, tinted fractionally toward the Kiri Forest hue to read as part of the same palette family rather than a neutral black.
- **Shitaji Ink** (`oklch(20% 0.007 162)`): The body text color on light surfaces. Slightly lighter than Sumi Night. Named after the undercoat layer in Japanese lacquerwork — not the final surface, but what makes the surface possible.
- **Aged Tatami** (`oklch(50% 0.018 60)`): The muted text color — captions, labels, supporting copy. Warm-biased mid-grey. Never used for body paragraph text; reserved for secondary hierarchy only.
- **First Light** (`oklch(99% 0.004 162)`): The near-white. Used for text on dark surfaces (hero, gallery, footer) and as the hover fill color of the primary button. Tinted fractionally toward the Kiri Forest hue — not paper white, the first moment of morning light.

### Named Rules

**The Rarity Rule.** Kiri Forest covers no more than 15% of any light-background surface. Its mass is the gallery section (full-bleed) and one section per page at most. Using it as a large fill on a cream page breaks the palette logic.

**The No-Invention Rule.** No new colors on new surfaces. All surface decisions map to one of these eleven tokens. A new surface is not a reason for a new color.

## 3. Typography: The Mincho-Humanist Pair

**Display / Headline Font:** Shippori Mincho (with Georgia, serif fallback)
**Body / UI Font:** Jost (with system sans fallback)
**Japanese Character Font:** Noto Serif JP

**Character:** The pairing carries bilingual intentionality. Shippori Mincho's narrow stroke joins and deliberate terminals read as calligraphic without being decorative — it is a working print typeface, not a display novelty. Jost is a clean geometric humanist: legible at small sizes, neutral enough to defer to the serif, warm enough to not read as corporate. The two typefaces do not compete. The serif speaks; the sans listens.

### Hierarchy

- **Display** (Shippori Mincho, 300, `clamp(3.5rem, 9vw, 8rem)`, line-height 1): Hero headline only. One per page. Never in bold. The italic cut of the second word in the hero ("_Coffee_") is the single use of the italic variant at display size.
- **Headline** (Shippori Mincho, 300, `clamp(2.2rem, 4.5vw, 3.8rem)`, line-height 1.15): Section headings (About, Menu, Gallery, Contact, Location). Exactly one per section. One italic em-word per heading in Kiri Forest — the only consistent cross-section pattern permitted.
- **Title** (Jost, 500, 1.25rem, tracking 0.15em, uppercase): Menu category headers within panels. The caps-and-tracking creates the sense of a printed label, not a digital heading.
- **Body** (Jost, 300, 1.05rem, line-height 1.85): All paragraph copy. Maximum line length 65–75ch. The 300 weight on a light background reads as considered, not weak — anti-aliasing is enabled globally.
- **Label** (Jost, 400, 0.75–0.82rem, tracking 0.18–0.25em, uppercase): CTAs, nav links, form labels, gallery captions. The tracked uppercase is a UI signal, not a section heading pattern. Reserved for interactive or classifying elements; never used as a section kicker.
- **Japanese** (Noto Serif JP, 300, tracking 0.35em): Decorative Japanese text — すごい in the hero and footer, 空間 in the gallery watermark. Never body copy. Always decorative: low opacity or positioned as atmosphere.

### Named Rules

**The One-Italic Rule.** Each section heading contains exactly one italic word, set in Kiri Forest. Not two. Not zero on a section with a natural italic candidate. The italic word is the emotional emphasis of the section — the thing the section _is about_.

**The No-Kicker Rule.** Sections do not announce themselves with tracked uppercase labels above their headings. The heading stands alone or is preceded by something structurally distinct (a Japanese character, a tab control, a full-bleed image). Repeated kicker grammar across four consecutive sections reads as AI scaffolding.

## 4. Elevation

This system is flat by default. Depth is expressed through color-field contrast (Sumi Night column against Washi Warm column) rather than shadows. The menu panel triptych achieves more apparent depth than any shadow could, through the juxtaposition of dark/warm/light columns at identical elevation.

Shadows exist in exactly two structural contexts:

### Shadow Vocabulary

- **Contained panel** (`box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25)`): The three-column menu panel as a whole unit and the About image mat-board. Used when a self-contained block needs to read as a physical object sitting on the page — a menu card you could pick up, a framed photograph. Not used on individual items within panels.
- **Subtle card** (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07)`): The inset cream/charcoal sub-panels within the menu columns. Communicates one level of nesting without weight.

### Named Rules

**The Flat-First Rule.** Shadow is not the first tool for separation. Color contrast, border (1px charcoal/10 opacity), and spatial gap separate elements. Shadows appear only when an element needs to read as a discrete physical object (a frame, a panel, a card you lift).

## 5. Components

### Buttons

Sharp-cornered, border-defined, uppercase-tracked. The primary CTA reads as a printed label on the hero photography, not a filled pill.

- **Shape:** 0 radius. No rounding. The sharp corner is an architectural reference — a door frame, not a pill.
- **Primary (on dark):** Transparent background, First Light text, 1px First Light border at 45% opacity. Hover: fills to solid First Light, text shifts to Deep Satoyama. Transition: 300ms all.
- **Ghost (on light):** Transparent background, Shitaji Ink text, 1px Shitaji Ink border. Hover: fills to Shitaji Ink, text shifts to First Light.
- **Typography:** Jost 400, 0.75rem, tracking 0.18em, uppercase.
- **Padding:** 0.85rem vertical, 2–2.5rem horizontal.
- **States:** No scale transform on hover. Translate is the wrong tool — a button this minimal reads better with color fill than movement.

### Navigation

Two states: transparent-over-image (hero) and frosted-cream (scrolled).

- **Transparent state:** Logo and links in First Light. Links 0.78rem Jost, tracking 0.12em, uppercase.
- **Scrolled state:** Background `oklch(98% 0.006 90 / 0.95)` with `backdrop-blur-md`, 1px bottom shadow `rgba(0,0,0,0.07)`. Logo shifts to Deep Satoyama, links shift to Aged Tatami, hover to Kiri Forest.
- **Mobile:** Hamburger (three 1.5px bars, 6px gap) opens a full-screen `<dialog>` over Deep Satoyama background. Links in Shippori Mincho 300 at 2.5rem — display size, not label size. Stagger delay 60ms per link. すごい kanji watermark at the bottom.

### Form Inputs

Bottom-border-only. The input surface IS the page — no box, no fill, no radius.

- **Default:** No background, no border, only a 1px bottom border at `rgba(0,0,0,0.2)`.
- **Focus:** Bottom border shifts to Kiri Forest. Transition 300ms.
- **Label:** Jost 400, 0.65rem, tracking 0.2em, uppercase, Aged Tatami color.
- **Placeholder:** `rgba(0,0,0,0.3)`, normal case, normal tracking.
- **Disabled / Submitted:** Opacity reduction; submit button fills Open Canopy.

### Menu Panel (Signature)

The three-column triptych is the most distinctive component in the system. It should not be used as a generic layout pattern elsewhere — it is the menu's identity.

- **Structure:** Three adjacent columns, full-width at desktop, stacking to single-column on mobile. Each column has a distinct background (Sumi Night / Rice Paper / Washi Warm for drinks; inverted for food). No gaps between columns at desktop. A `shadow-2xl` wraps the entire unit.
- **Tab switcher above:** Two buttons (Minuman / Makanan) with a sliding 2px Kiri Forest underline indicator. The indicator moves via `translateX(0)` / `translateX(100%)` — no JS layout measurement needed.
- **Inside columns:** `CategoryBlock` — category title in Jost 500 uppercase tracked, items as flex rows with name on the left and price(s) on the right in tabular-nums Jost. No rules, no dividers between items. The gap IS the separator.
- **Inset panels:** A Washi Warm sub-panel inside a Sumi Night column (or vice versa) achieves the nested contrast without nested cards. The sub-panel has 1px border and a subtle shadow-sm.

### Gallery Items

Aspect-ratio cells in a 12-column grid. Each cell is an image with a gradient-to-bottom overlay and a bottom-left caption label.

- **Radius:** 2px (rounded-sm). The only rounded element in the system.
- **Hover:** `scale(1.05)` on the image, 300ms ease-out. Dark overlay appears (`rgba(0,0,0,0.2)`). Caption text shifts from `rgba(255,255,255,0.7)` to white.
- **Caption:** Jost 400, 0.65rem, tracking 0.25em, uppercase, positioned `bottom-4 left-4`.
- **Gradient overlay:** `from-black/60 via-black/10 to-transparent`, opacity 80% at rest.

## 6. Do's and Don'ts

### Do:

- **Do** use real photography on every surface that implies food, space, or atmosphere. A gradient or colored block where a hero image belongs is an incomplete design.
- **Do** give each section heading one italic word in Kiri Forest (`<em>`). This is the system's primary accent gesture.
- **Do** let section headings stand alone. If a section needs a label, integrate it structurally (a tab, a kanji watermark, a mat-board caption) rather than repeating the same kicker grammar.
- **Do** use `oklch()` for all color declarations. The palette is defined in perceptual space; hex approximations are imprecise and break the tonal logic.
- **Do** animate with `opacity` and `transform` only. Use `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quart) as the standard easing. Stagger multi-element entrances by 60–200ms.
- **Do** keep body line length to 65–75ch. Jost 300 at 1.05rem over a full-width column is illegible — it needs containment.
- **Do** use the menu panel triptych for the menu section only. It is a signature component, not a reusable layout pattern.
- **Do** give the mobile hamburger a `<dialog>` element with display-size nav links (2.5rem Shippori Mincho). Navigation on mobile deserves ceremony, not a compressed copy of the desktop bar.
- **Do** use `tabular-nums` on all price and number displays. Prices in a proportional font jump and jitter as columns shift width.

### Don't:

- **Don't** use gradient text (`background-clip: text`). Emphasis through weight or size, never through gradient.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on any element.
- **Don't** use glassmorphism (blur + semi-transparent fill) decoratively. The only permitted blur is the scrolled nav `backdrop-blur-md`, and it is structural, not decorative.
- **Don't** use loud, cluttered generic restaurant templates: busy hero text over a food collage, red/yellow urgency palette, "ORDER NOW" CTAs. Suge is a space you linger in, not a place you transact at.
- **Don't** use cold, sterile corporate modernism: pure white backgrounds, thin Helvetica headers, blue links. The warmth is in the cream and cedar tones. A pure white page has no warmth.
- **Don't** use endless grids of uniform cards for the menu. The panel triptych exists precisely to replace that pattern. Each column has a different background, different content weight, different role.
- **Don't** use `#000`, `#fff`, or any pure-channel hex as a color value. Every neutral is tinted toward the Kiri Forest hue (chroma 0.004–0.01). This is not visible at a glance, but it is what makes the palette feel like a family.
- **Don't** use bounce or elastic easing. The space is calm. Motion is deliberate. `ease-out-quart` or nothing.
- **Don't** use monospaced fonts for UI text. Space Mono and its relatives read as "technical" on a warm café site. Tabular-nums on Jost gives the same price alignment without the costume.
- **Don't** hide the scrollbar globally. A scrollbar is a positional affordance. Use `scrollbar-width: thin` with a Bleached Bamboo thumb instead.
