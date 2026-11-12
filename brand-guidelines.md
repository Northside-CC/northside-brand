# Northside Christian Church Brand Guidelines

A short, readable version of our brand rules for staff, volunteers, and AI tools. Structured values (hex codes, file paths) live in [`brand-kit.json`](brand-kit.json). The full designed guides (Northside, Kidside, NSM, and YA) are PDFs kept on the Digital Ministry shared drive.

## Why this matters

Our brand helps people understand who we are and makes it easier for them to take a next step toward Jesus. When we communicate with clarity and excellence, we build trust with our church family, our guests, and our community.

Our mission: **Connecting People to Jesus.**

## Our name

- Write **Northside Christian Church** on first reference. Never drop "Christian" on first reference.
- Never write "Northside Church."
- "Northside" alone is fine after the first mention.
- VAN is Volunteer Appreciation Night. NSM is Northside Student Ministry. YA is Young Adults.
- Write **Northside Young Adults** on first reference, then Young Adults or YA.
- Spell **Kidside** with a lowercase s. "KidSide" is outdated.

## Voice

- Jesus-centered, simple, and respectful.
- Write the way a warm, clear staff member would speak, not like a corporate memo.
- Assume some readers are new to faith. Explain church words or skip them.
- Quote Scripture from the NIV or NLT and always give the reference. If you are not sure of the exact wording, look it up. Do not guess.

## Logo

These are the official Northside logo files, as SVGs in `logos/`:

| Version | When to use | Files |
| --- | --- | --- |
| Full logo (symbol + logo type) | Most contexts | `logos/full-logo/` |
| Full logo, stacked | Square or narrow spaces | `logos/full-logo/` |
| Simple logo (symbol + "Northside") | Where the full name is already clear | `logos/simple-logo/` |
| Logo mark (symbol only) | Avatars, favicons, tight spaces | `logos/logo-mark/` |

Each comes in **light** (white artwork, for dark or colored backgrounds) and **dark** (`#373A36` artwork, for white or cream backgrounds).

**Clear space:** keep half the logo's height clear on every side.

**Minimum size:**

| Version | Print | Screen |
| --- | --- | --- |
| Full logo | 1 inch wide | 96 px wide |
| Simple logo | 0.75 inch wide | 24 px tall |
| Logo mark | 0.375 inch wide | 16 px |

The simple logo and logo mark minimums were set by the Digital Ministry team.

**Approval:** the Digital Ministry team approves any logo use outside these rules, for Northside and all sub-brands.

**Alt text:** use the brand name, such as "Northside Christian Church logo." If the name is already in the text next to the logo, use empty alt text. Use empty alt text for gradients, waves, and textures too. Exact strings are under `logos.alt_text` in `brand-kit.json`.

**Do not:**

- Use the logo type, or any part of a logo, by itself without approval from the Digital Ministry team.
- Change the logo type.
- Warp, stretch, skew, or slant the logo.
- Add a stroke.
- Add gradients, drop shadows, or other effects.
- Place the logo on a busy or patterned background.

## Colors

| Name | Group | Hex | RGB | CMYK | Pantone |
| --- | --- | --- | --- | --- | --- |
| Green NCC | Primary | `#0E8291` | 14, 130, 145 | 82 / 28 / 36 / 11 | 3145 C |
| Yellow NCC | Primary | `#FF9703` | 255, 151, 3 | 0 / 49 / 93 / 0 | 1375 C |
| Cream | Secondary | `#FAF1E8` | 250, 241, 232 | 2 / 6 / 10 / 0 | P 1-9 C |
| Light Brown | Secondary | `#A08A86` | 160, 138, 134 | 34 / 40 / 37 / 17 | 408 C |
| Light Purple | Secondary | `#C5CDE8` | 197, 205, 232 | 26 / 17 / 1 / 0 | 2706 C |
| Dark Coral | Secondary | `#CF6648` | 207, 102, 72 | 15 / 69 / 72 / 4 | 18-649 TCX* |

Text on color: use white on Green NCC. Use dark text (`#1D1D1D`) on the other five. White on Dark Coral is fine for large or bold text only.

\*18-649 TCX is a Pantone textile code, not a Coated (C) code like the others. For print, have the vendor match from the hex or CMYK.

### Gradients

Five gradients are in `brand-elements/gradients/` (1920x1080 JPG). They are soft blends with no fixed values, so use the image files rather than rebuilding them.

These colors appear in the gradients. They are for gradients only, not general use, and the names are descriptive labels:

| Name | Hex | Found in |
| --- | --- | --- |
| Pale Peach | `#F5DDC8` | Gradient 2 (faint highlight) |
| Sky Blue | `#A1DCEC` | Gradient 3 |
| Dark Taupe | `#6C5D5C` | Gradients 1, 2, 5 |
| Clay | `#C38369` | Gradients 1 to 4 |
| Light Apricot | `#F1B48A` | Gradients 1, 2, 5 |
| Bright Coral | `#F1572B` | Gradient 5 |

## Typography

| Typeface | Role | Weights |
| --- | --- | --- |
| Gotham | Logo type, body text, informational text | Book, Medium, Bold, Black |
| Dharma Gothic | Big headlines | Regular, Bold, ExBold, Heavy |
| Helvetica Neue / Now | Complementary headlines, on-screen content | Bold, Black, Heavy Extended |
| Proxima Nova | Approved web typeface, the web substitute for Gotham | Served through Adobe Fonts |

These are licensed fonts. The files are not in this repo.

Tips:

1. Keep all caps and italics for short titles and key ideas, not long text.
2. Avoid underlines, except for short titles set large.
3. Set line spacing about 20% larger than the font size.
4. Do not fully justify text.
5. Left-align text and do not hyphenate.
6. Keep paragraphs to 45 to 75 words.
7. Serif type suits long printed pieces. Sans serif suits screens.

## Sub-brands

We are a "branded house," not a "house of brands." Ministries do not exist apart from Northside, so ministry logos follow the main Northside Christian Church pattern.

Three ministries have their own brand guides: Kidside, NSM, and Northside Young Adults. Their logos are in `sub-brands/` and their full details are under `sub_brands` in `brand-kit.json`. All three use Gotham (Book, Medium, Bold, Black) for body text and follow the main photography and video guidance. All three share the same logo basics: half-height clear space, a 1 inch minimum for the full logo, no stretching, strokes, or busy backgrounds, and no using parts of a logo on their own without approval from the Digital Ministry team.

### Kidside

| Color | Group | Hex |
| --- | --- | --- |
| Blue Kidside | Main | `#030040` |
| Sea Kidside | Main | `#59BFD1` |
| Grey 1 | Secondary | `#DADADA` |
| Orange | Secondary | `#F05729` |
| Green 1 | Secondary | `#96D142` |
| Green 2 | Secondary | `#8CA65E` |

- **Type:** Grobold (Bold only) for the logo type. Gotham for everything else.
- **Logos:** `sub-brands/kidside/`. Full color, navy, black, and white versions, plus color wordmarks.
- **Graphic element:** Kidside color waves, flowing shapes in the brand colors.
- The Kidside guide prints the wrong hex for Sea Kidside. `#59BFD1` was read from the swatch and confirmed by the Digital Ministry team.
- Sea Kidside and Green 1 have no CMYK values yet. Check with design before print.

### NSM (Northside Student Ministry)

| Color | Group | Hex |
| --- | --- | --- |
| Blue NSM | Main | `#3730F2` |
| Black NSM | Main | `#262626` |
| Purple NSM | Secondary | `#8C5CF2` |
| Yellow NSM | Secondary | `#F2E744` |
| Pink NSM | Secondary | `#F291E2` |

- **Type:** Bree (Regular, Semibold, Bold, Extrabold) for headlines and logo type. Set headlines in all caps, or title case if a long headline gets hard to read. Gotham for body text.
- **Logos:** `sub-brands/nsm/`. Full name, horizontal, stacked, and logo mark, each in dark and light. PNG only for now.

### YA (Northside Young Adults)

| Rank | Hex |
| --- | --- |
| Primary | `#EB5812` (orange), `#FAF1E8` (cream), `#0540BE` (blue) |
| Secondary | `#DFBA6C` (gold), `#373A36` (charcoal), `#4BA347` (green) |
| Tertiary | `#01B4FE` (sky), `#FFB80A` (yellow) |

- **Type:** Grako (Regular, Tall) for headlines and logo type. Set headlines in all caps, or title case if a long headline gets hard to read. Gotham for body text.
- **Logos:** `sub-brands/young-adults/`. Only the orange profile image is here so far. The horizontal, stacked, and logo mark files are being added. Until then, request YA logos from the Digital Ministry team instead of recreating them.
- The YA guide does not name its colors. The names in `brand-kit.json` are descriptive labels.

## Graphic elements

- **Northside Waves:** a line-based graphic used in corners to balance a piece. File: `brand-elements/waves/northside-waves.png` (dark lines on transparent).
- **Noise:** add 12% to 15% noise (uniform, monochrome) to some photos and backgrounds.
- **Photo containers:** circular image frames are allowed.
- **Textures:** textured paper, scratches, and torn edges are fine in moderation. Legibility comes first. File: `brand-elements/textures/northside-paper-texture.jpg`.

These are web-sized exports. Full-size and layered originals (AI, EPS, PSD) are on the Digital Ministry shared drive.

## Photography

Shooting:

- Focus on faces. Shoot the crowd more than the stage.
- Capture real, warm moments. Avoid staged shots.
- Use the rule of thirds and leave room for text.
- Show diversity in age, gender, and ethnicity.
- Get wide, medium, and tight shots of people in action.
- Use natural light and a shallow depth of field. Avoid flash.

Editing:

- Mildly crush the blacks. Lean warm.
- Saturate for richness, not brightness.
- Get skin tones right first.
- Do not over-process.

## Video

Announcements: center the subject or use the rule of thirds, keep lighting simple, frame from the waist up, use a tripod, and hide mics where you can.

Interviews: use the rule of thirds, have the subject look across the frame, keep the camera at eye level or above, and keep the background clean and relevant.
