# Design — Case-study pages for the portfolio

**Date:** 2026-06-21
**Status:** Approved
**Figma:** file `SagpfeC9cZBWcmybhRFqab`

## Goal

Implement the remaining four screens of Alexey Sotnikov's UX/UI portfolio as
individual case-study pages, wired to the existing home page (`index.astro`),
pixel-faithful to Figma and responsive for desktop + mobile.

Screen 1 (home, node `551-13059`) is already built. This spec covers the four
case studies and the navigation that connects them.

## Scope

### In scope
- Four case-study pages built in Astro, matching the existing stack and patterns
  (design tokens in `tokens.css`, content in `src/data/`, components in
  `src/components/`).
- Exporting **all** embedded imagery (phone mockups, dashboards, interface
  screenshots, banners) from Figma as local assets — pixel-faithful reproduction.
- Responsive behaviour for desktop and mobile (no mobile design exists in Figma,
  so mobile layout is adapted at our discretion: two-column "text + image"
  sections collapse to one column; phone-mockup galleries reflow).
- Navigation: the "Кейс продукта" buttons on the home page link to the matching
  case pages; each case page has a "← К портфолио" back link to home.

### Out of scope
- Case pages for the third Sleegroup sub-project ("Креативная студия") and for
  NXmarketing — no Figma design was provided. Their buttons are left inactive or
  removed.
- A dedicated mobile-specific visual design (none exists in Figma).
- CMS / dynamic content — content stays as typed data files.

## Screen → page mapping

| Figma node | Project | URL | Home button source |
|---|---|---|---|
| `397-5037` | AR Spatially | `/cases/ar-spatially` | AR Spatially card |
| `445-52` | Tap Topia (Web3 game) | `/cases/tap-topia` | Tap Topia card |
| `503-3828` | kloo.io (educational platform) | `/cases/kloo` | Sleegroup → "Образовательная платформа" |
| `523-3817` | SL Ventures (real estate investment) | `/cases/sl-ventures` | Sleegroup → "Инвестиционная платформа недвижимости" |

## Architecture

Multi-page Astro site. New routes under `src/pages/cases/<slug>.astro`. Each page
composes shared case components and pulls its text from a per-case data module.

### Components (`src/components/`)
- **`CaseLayout.astro`** — page shell: "← К портфолио" back link, centred
  container, consistent vertical rhythm between sections.
- **`CaseHero.astro`** — project name, meta line (role / period / link),
  description, tag chips.
- **`CaseSection.astro`** — section heading + body text block (task / solution
  lists).
- **`CaseImage.astro`** — single image block (exported asset).
- **`CaseGallery.astro`** — rows of mockups / screenshots; reflows on mobile.
- **`CaseBanner.astro`** — dark accent banners (project profile, "PROFILE FLOW", etc.).
- **`CaseResult.astro`** — closing "Результат" section with a list.

Each component has one clear purpose, takes typed props, and is understandable
without reading its consumers. Sizes/colours come from existing tokens; missing
tokens (e.g. dark banner background) are added to `tokens.css`.

### Data (`src/data/cases/`)
- `ar-spatially.ts`, `tap-topia.ts`, `kloo.ts`, `sl-ventures.ts` — exact Russian
  text transcribed from Figma, structured per the section model above. Mirrors the
  existing `src/data/content.ts` approach.

### Assets (`src/assets/cases/<slug>/`)
- All exported images, referenced via Astro image handling.

## Image & content pipeline (per case)
1. `get_metadata` on the node → map of sections.
2. `get_design_context` per section → exact RU text + asset download URLs.
3. Download assets into `src/assets/cases/<slug>/`.
4. Transcribe text into `src/data/cases/<slug>.ts`.

## Responsive strategy
Fluid container (existing `--container` / `--gutter` clamp tokens) plus media
queries: two-column "text + image" sections collapse to a single column on mobile;
phone-mockup galleries switch to horizontal scroll or 2-per-row.

## Build order
Pages are built one at a time — AR Spatially → Tap Topia → kloo → SL Ventures —
each verified with `astro build`. Home-page button re-linking is the final step.

## Acceptance criteria
- All four case pages exist at the mapped URLs and render their full content.
- All embedded imagery is exported from Figma and displayed (no broken images,
  no placeholders for the four covered cases).
- Home-page "Кейс продукта" buttons navigate to the correct case pages; each case
  page links back to home.
- Layout is faithful to Figma on desktop and degrades gracefully on mobile
  (single-column sections, no horizontal overflow of body content).
- `astro build` succeeds with no errors.

### Negative scenarios
- A "Кейс продукта" button must NOT link to a non-existent page (Креативная студия
  / NXmarketing buttons are inactive/removed rather than dead links).
- Mobile viewport must NOT produce horizontal scrolling of the page body.
- No case page ships with a placeholder where a Figma image exists.
