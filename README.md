# Northside Brand Kit

The single source of truth for Northside Christian Church's brand assets, colors, typography, and voice. Built so staff, volunteers, and AI tools can all produce work that looks and sounds like Northside.

## What's here

| Path | What it is |
| --- | --- |
| `brand-kit.json` | Machine-readable brand data. Start here. |
| `brand-guidelines.md` | Readable rules for our name, voice, logo, colors, type, photo, and video. |
| `logos/full-logo/` | Full logo (symbol + logo type), light and dark SVG. |
| `logos/logo-mark/` | Logo mark (symbol only), light and dark SVG. |
| `index.html` | Landing page for the kit. |
| `brand-review.html` | Visual page showing every color, logo, and typeface. |
| `assets/` | CSS, JavaScript, and favicon for the two pages. |

## For AI tools and agents

1. Read `brand-kit.json` first. All asset paths are relative to the repo root.
2. Read `brand-guidelines.md` for voice, naming, and logo rules.
3. Use Green NCC (`#0E8291`) as the lead color.
4. Write "Northside Christian Church" on first reference. Never "Northside Church."
5. Treat any field marked `needs_review` as unconfirmed.

## Updating the kit

The two web pages draw their colors, logos, and type samples from `brand-kit.json`. To change a color or add a logo, edit the JSON and the pages update themselves.

To preview locally:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. The pages must be served, not opened as files, because they load the JSON.

## Publishing with GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to Settings, then Pages.
3. Under "Build and deployment," choose "Deploy from a branch," then `main` and `/ (root)`.
4. The site will be live at `https://<owner>.github.io/<repo>/`.

If the repo owner or name changes, update `brand.repository` in `brand-kit.json` so the "GitHub Repo" and "Download ZIP" buttons point to the right place.

## Still to confirm

- **Logo files.** The SVGs here were taken from the logo on mynorthside.com. The dark variant and the logo mark were derived from it. Replace them with the official files and add PNG exports.
- **Color grouping.** Green NCC is the primary color. Confirm which of the other five are primary and which are secondary.
- **Dark Coral Pantone.** The guidelines PDF lists 2706 C, the same as Light Purple. That looks like a typo.
- **Gradients.** The guidelines define four gradients. Their values are not recorded yet.
- **Web typeface.** mynorthside.com uses Proxima Nova, which is not in the guidelines. Confirm the approved web font.
- **Sub-brand and graphic element assets.** Kidside, NSM, ministry logos, and Northside Waves artwork are not included yet.
- **Fonts.** Gotham, Dharma Gothic, Helvetica Neue, and Proxima Nova are licensed. Do not add font files to this repo if it is public.
