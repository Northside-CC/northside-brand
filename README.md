# Northside Brand Kit

The single source of truth for Northside Christian Church's brand assets, colors, typography, and voice. Built so staff, volunteers, and AI tools can all produce work that looks and sounds like Northside.

## What's here

| Path | What it is |
| --- | --- |
| `brand-kit.json` | Machine-readable brand data. Start here. |
| `brand-guidelines.md` | Readable rules for our name, voice, logo, colors, type, photo, and video. |
| `logos/` | Official Northside logos: full logo (horizontal and stacked), simple logo, and logo mark. Light and dark SVG. |
| `sub-brands/` | Logos for Kidside, NSM, and YA. |
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

- **YA logo files.** Only the orange YA profile image is in the kit. The horizontal, stacked, and logo mark files shown in the YA guide were not in the shared drive folder.
- **Sea Kidside.** The Kidside guide prints `FF9703` for this color, which is Yellow NCC. The kit uses `#59BFD1`, read from the swatch artwork in the guide.
- **Dark Coral Pantone.** The main guidelines PDF prints 2706 C, the same as Light Purple. That looks like a typo.
- **Web typeface.** mynorthside.com uses Proxima Nova, which is not in the guidelines. Confirm the approved web font.
- **NSM vector logos.** The NSM logos here are PNGs. The drive has an EPS that could be exported to SVG.
- **Other ministry logos.** Northside Men, Northside Women, Northside U, Marriage, Care, Life Groups, and Special Needs are not included yet.
- **Fonts.** Gotham, Dharma Gothic, Helvetica Neue, Proxima Nova, Grobold, Bree, and Grako are licensed. Do not add font files to this repo while it is public.
