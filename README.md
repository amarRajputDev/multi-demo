# Vizo Technology — Coaching Website Demo Studio

A single Next.js app containing **six visually distinct, production-quality coaching-institute website demos**, plus a premium showcase where visitors can compare them.

Open `/` → explore six complete brands → click into any live demo with its own pages, typography, motion and mobile experience.

| Route | Concept | Style |
| --- | --- | --- |
| `/demos/aurora` | **Aurora Academy** | Cinematic · Premium · Elite (JEE/NEET) |
| `/demos/scholar-house` | **Scholar House** | Refined · Timeless · Academic (Class 9–12) |
| `/demos/pulse-prep` | **Pulse Prep** | Energetic · Bold · Geometric (Entrance exams) |
| `/demos/northstar` | **Northstar Institute** | Minimal · Editorial · Mentor-led (UPSC/SSC/Banking) |
| `/demos/quantum` | **Quantum Learning** | Technical · Futuristic · Precise (STEM) |
| `/demos/bloom` | **Bloom Learning** | Friendly · Warm · Optimistic (Foundation/Olympiad) |

Every demo has a homepage plus `courses`, `faculty`, `results`, `about` and `contact` pages, an accessible mobile menu, a demo-only enquiry form with a prefilled WhatsApp hand-off, and a discreet utility bar to jump between concepts.

> **Demo content notice:** every institute name, result, rank, faculty credential, fee and testimonial in this project is **illustrative fictional content** created for a design demonstration. Nothing has been verified against real-world outcomes. Each data file carries this disclaimer at the top.

---

## Tech stack

- **Next.js 16** (App Router, Turbopack, Cache Components) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Motion** (`motion/react`) for scroll reveals, menus and accordions
- **Lucide React** icons, `next/image` with local assets
- Server Components by default; client components only where interaction requires it
- Zero backend: static content + client-side WhatsApp hand-off only

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build

```bash
npm run build      # static prerender of all 42 routes
npm start          # serve the production build
```

## Checks & QA scripts

```bash
npx tsc --noEmit                                 # type safety
npx eslint src --max-warnings=0                  # lint
powershell -File scripts/smoke-test.ps1          # HTTP status + image-existence sweep (production server)
node scripts/qa-visual.mjs                       # overflow @320/390/768/1440, console errors, screenshots
node scripts/interactions.mjs                    # mobile menus, FAQ, enquiry form end-to-end
powershell -File scripts/download-images.ps1     # re-download local Unsplash assets
```

`scripts/qa-visual.mjs` writes full-page screenshots to `screenshots/` (git-ignored). It emulates `prefers-reduced-motion` so scroll-reveal content is visible in captures.

## Deploying to Vercel

1. Push the repository to GitHub/GitLab.
2. In Vercel: **New Project → Import** the repo. Framework auto-detected: **Next.js**.
3. No environment variables are required (the project has no backend or secrets).
4. **Deploy.** All routes are statically prerendered, so the default Vercel settings work as-is.

Any Node host works too (`npm run build && npm start`).

## Customising content for a real client

All content is local TypeScript data — no CMS, no database.

1. **Institute details** — edit `src/lib/registry.ts` (name, tagline, palette) and the demo's `data.ts` (nav, courses, faculty, results, testimonials, FAQs).
2. **Contact details** — `PLACEHOLDER_CONTACT` in `src/lib/registry.ts` is shared by the showcase; each demo spreads it in its `data.ts` (e.g. `auroraContact`). Replace the placeholder phone, WhatsApp digits, email and address with the client's real details.
3. **WhatsApp flow** — the enquiry form builds a `wa.me` link from `whatsappNumber`. It never posts data anywhere else; on submit it shows an explicit *demo-only* success state.
4. **Images** — replace files under `public/images/<demo>/` keeping the same filenames (fastest) or update paths in `data.ts`.
5. **Fonts** — loaded once in `src/app/layout.tsx` via `next/font/google`; per-demo CSS classes (`font-aurora-display`, `font-bloom-body`, …) live in `src/app/globals.css`.

## Adding a seventh demo

1. **Assets:** download images to `public/images/<slug>/`.
2. **Registry:** add a `DemoMeta` entry to `DEMOS` in `src/lib/registry.ts` (slug, palette, fonts, path, utility-bar tone) — this powers the showcase cards and the prev/next utility bar automatically.
3. **Fonts (if new):** add the `next/font/google` family in `src/app/layout.tsx`, expose a CSS variable, and add a `.font-<slug>-display/body` class in `globals.css`.
4. **Demo module:** create `src/demos/<slug>/` with `data.ts`, `layout.tsx`, `components/` (site-nav, site-footer, enquiry), `sections/`, and `pages/` (home, courses, faculty, results, about, contact). Reuse the shared primitives:
   - `@/components/shared/reveal` — `Reveal`, `RevealImage` (reduced-motion aware)
   - `@/components/shared/accordion` — accessible FAQ
   - `@/components/shared/enquiry-form` — demo-only enquiry + WhatsApp
   - `@/components/shared/mobile-nav` — accessible slide-in menu
   - `@/components/shared/demo-utility-bar` — "All concepts" + prev/next bar
5. **Routes:** mirror the file-system bridges in `src/app/demos/<slug>/` (a `layout.tsx` re-exporting the demo layout and one thin `page.tsx` per page).
6. **Verify:** `npx tsc --noEmit`, `npx eslint src/demos/<slug> src/app/demos/<slug> --max-warnings=0`, `npm run build`, then the QA scripts.

Unknown demo slugs hit `src/app/demos/[demo]/page.tsx` and return a proper 404 (`src/app/not-found.tsx`).

## Project structure

```
src/
  app/
    page.tsx                  # showcase (Vizo Technology)
    layout.tsx                # root: all demo fonts + globals
    not-found.tsx             # 404
    demos/
      page.tsx                # redirect → /
      [demo]/page.tsx         # 404 catch-all for unknown slugs
      aurora/ … bloom/        # thin file-system routes per demo
  components/
    showcase/                 # showcase nav, cards, CSS mini-previews, footer
    shared/                   # Reveal, Accordion, EnquiryForm, MobileNav, DemoUtilityBar
  demos/
    <slug>/
      data.ts                 # ALL content for that demo (with demo-content disclaimer)
      layout.tsx              # branded shell + generateMetadata
      components/             # site-nav, site-footer, enquiry
      sections/               # homepage sections
      pages/                  # home, courses, faculty, results, about, contact
  lib/
    registry.ts               # demo metadata, routes, placeholder contact
    site-year.ts              # cached copyright year
    utils.ts                  # cn(), buildWhatsAppUrl()
public/images/<slug>/         # local, optimised Unsplash assets (downloaded via scripts/)
scripts/                      # asset download + smoke/visual/interaction QA
```

## Accessibility & performance notes

- Keyboard-accessible menus, accordions and forms; Escape closes overlays; body scroll locks behind the mobile menu; skip-to-content links on every demo.
- All motion honours `prefers-reduced-motion` (global CSS kill-switch + Motion's `useReducedMotion`).
- Fonts are self-hosted by `next/font` (no third-party font requests, no layout shift); images are local, sized, lazy-loaded below the fold.
- Each demo route ships only its own code — the six sites are never mounted together.
- Horizontal overflow, console errors and failed requests are verified at 320/390/768/1440 px by `scripts/qa-visual.mjs`.
