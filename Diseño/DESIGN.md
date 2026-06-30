---
name: Serene Roots
colors:
  surface: '#f8fbf1'
  surface-dim: '#d8dbd2'
  surface-bright: '#f8fbf1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f5eb'
  surface-container: '#ecefe5'
  surface-container-high: '#e6e9e0'
  surface-container-highest: '#e1e4da'
  on-surface: '#191d17'
  on-surface-variant: '#44483f'
  inverse-surface: '#2e322b'
  inverse-on-surface: '#eff2e8'
  outline: '#74786e'
  outline-variant: '#c4c8bc'
  surface-tint: '#4f653f'
  primary: '#4f653f'
  on-primary: '#ffffff'
  primary-container: '#adc698'
  on-primary-container: '#3e532f'
  inverse-primary: '#b5cea0'
  secondary: '#a03f30'
  on-secondary: '#ffffff'
  secondary-container: '#fe8672'
  on-secondary-container: '#741f13'
  tertiary: '#77536c'
  on-tertiary: '#ffffff'
  tertiary-container: '#deb1ce'
  on-tertiary-container: '#64425a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1ebba'
  primary-fixed-dim: '#b5cea0'
  on-primary-fixed: '#0d2003'
  on-primary-fixed-variant: '#384d29'
  secondary-fixed: '#ffdad4'
  secondary-fixed-dim: '#ffb4a7'
  on-secondary-fixed: '#400200'
  on-secondary-fixed-variant: '#80281b'
  tertiary-fixed: '#ffd7f0'
  tertiary-fixed-dim: '#e6bad6'
  on-tertiary-fixed: '#2d1127'
  on-tertiary-fixed-variant: '#5e3c54'
  background: '#f8fbf1'
  on-background: '#191d17'
  surface-variant: '#e1e4da'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 36px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  section-padding: 120px
---

## Brand & Style

This design system is crafted for a Biodescodificación practitioner, focusing on the intersection of emotional healing and biological wisdom. The brand personality is **empathetic, grounded, and restorative**. It avoids the sterile aesthetics of traditional medicine in favor of a holistic, "living" interface that feels human and safe.

The visual style is **Organic Minimalism with Editorial touches**, now presented in a **Light Mode** configuration to evoke a sense of clarity, renewal, and "daybreak" for the subconscious. It prioritizes breathability and serene pacing. By combining the soft textures of botanical illustrations with a structured, professional layout, the design system establishes a high level of trust while remaining approachable. The user should feel as though they are stepping into a sun-drenched sanctuary of inner peace.

## Colors

The palette is derived from natural, earthy elements, optimized for a light environment to promote a sense of openness and vitality.

- **Primary (Sage Green):** Used for growth-oriented actions and primary brand moments. This color acts as a natural anchor of vitality against the light neutral surfaces.
- **Secondary (Terracotta):** Used for warm accents and secondary interactive elements. It provides an earthy, human warmth that grounds the airy interface.
- **Tertiary (Deep Plum):** Reserved for sophisticated grounding elements and high-contrast text. It conveys depth, wisdom, and the "decoding" of the subconscious.
- **Neutral (Warm Bone/Sage-Tinted Cream):** The background and surface colors create a soft "paper-like" feel that allows content to breathe and reduces visual fatigue.

## Typography

The typography strategy balances the "wisdom" of traditional serifs with the "clarity" of modern sans-serifs.

**Headings (Libre Caslon Text):** This serif provides a literary and established feel. Use it for all major storytelling and section titles. In light mode, these rendered in deep Plum or Sage tones maintain an elegant, legible presence.

**Body (Manrope):** A clean, highly legible sans-serif used for all functional information, descriptions, and UI labels. The weight is balanced to ensure crisp readability against the light background.

**Styling Note:** Use `label-caps` for small eyebrows above headlines to provide a structured, organized feel to the content hierarchy.

## Layout & Spacing

The layout follows a **fluid-to-fixed model**. Content is centered on a max-width container of 1200px for desktop.

- **Generous Whitespace:** This design system mandates "active negative space." Sections should have a minimum of `120px` vertical padding on desktop to allow the mind to rest between topics.
- **Organic Alignment:** While the text follows a standard grid, illustrations and botanical elements should "break" the grid—floating slightly off-center or bleeding into the margins to create an organic, non-mechanical feel.
- **Mobile Reflow:** On mobile, margins reduce to `20px`, and vertical spacing between blocks reduces to `64px` to maintain momentum while scrolling.

## Elevation & Depth

To maintain an organic and grounded feel, this design system avoids heavy drop shadows and synthetic depth.

- **Tonal Layering:** Depth is achieved by using subtle variations in surface colors. A container surface should be subtly darker or more saturated than the background to indicate hierarchy.
- **Soft Diffusion:** If a shadow is necessary for a floating action button or a modal, use an extremely large blur with a very low-opacity tint of Sage or Plum.
- **Botanical Overlays:** Visual depth is created by layering fine-line illustrations behind and in front of text or image containers, simulating a 3D natural environment.

## Shapes

The shape language is defined by **softness and fluidity**.

- **Containers:** All primary cards and input fields use a `0.5rem` radius to feel approachable.
- **Image Treatments:** Images should frequently use non-standard masks, such as ovals, arches, or soft organic blobs, to mimic the irregularity of nature. 
- **Buttons:** Buttons use a more pronounced `rounded-lg` (1rem) or full pill-shape to encourage interaction through a "soft-touch" metaphor.

## Components

### Buttons
- **Primary:** Solid Sage Green (#ADC698) with dark text. Pill-shaped. Subtle scale-up on hover.
- **Secondary:** Transparent with a Terracotta (#C05746) border and text. Pill-shaped.
- **Tertiary/Ghost:** Deep Plum or Primary Sage text with no border; used for "Learn More" links.

### Cards & Containers
Cards should be used sparingly to avoid a "boxed-in" feel. Use a subtle tonal variation of the neutral background with no border. When stacking cards, use generous vertical margins.

### Input Fields
Soft, rounded edges with a background slightly darker or more neutral than the main surface. Labels should be in `label-caps` style above the field. Focus states should use a soft Sage Green or Terracotta glow.

### Botanical Accents
Specific botanical line-art (ferns, eucalyptus, wild roots) should be integrated into the UI as functional dividers or background ornaments. They should be rendered in low-opacity versions of the Primary or Tertiary colors to feel integrated into the serene atmosphere.

### Process Indicators
Use vertical numbered lists (01, 02, 03) in the serif font at a large scale to guide the user through the therapy process, creating a sense of a clear, navigable path to healing.