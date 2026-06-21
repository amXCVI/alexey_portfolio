# Case-study Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the four remaining portfolio screens as case-study pages, pixel-faithful to Figma, responsive, and linked from the home page.

**Architecture:** Multi-page Astro site. Shared, single-purpose case components (`CaseLayout`, `CaseHero`, `CaseSection`, `CaseImage`, `CaseGallery`, `CaseBanner`, `CaseResult`) are composed by per-case page routes under `src/pages/cases/`. Each page pulls exact Russian copy from a typed data module in `src/data/cases/` and references imagery exported from Figma into `src/assets/cases/<slug>/`.

**Tech Stack:** Astro 5, TypeScript, plain CSS with design tokens (`src/styles/tokens.css`), `@fontsource-variable/manrope`. No test framework — verification is `astro check` + `astro build` + visual comparison against the Figma screenshot.

## Global Constraints

- Stack/patterns: follow existing conventions — tokens in `src/styles/tokens.css`, content in `src/data/`, components in `src/components/`. Copied verbatim from spec.
- Max 400 lines per file (TAUSIK filesize gate). Split components rather than growing a page file.
- Copy is exact Russian text transcribed from Figma — no paraphrasing, preserve original spelling even where imperfect (matches existing `content.ts` approach).
- Pixel-faithful: every embedded Figma image is exported and shown; no placeholders for the four covered cases.
- Responsive: desktop faithful; mobile must have no horizontal body overflow; two-column sections collapse to one column.
- Figma file key: `SagpfeC9cZBWcmybhRFqab`.
- No code without an active TAUSIK task (`task start`); verify with `tausik verify` before `task done`.
- Git operations only with explicit user confirmation.

---

### Task 1: Shared case scaffolding + CaseLayout

**Files:**
- Create: `src/components/CaseLayout.astro`
- Create: `src/data/cases/` (directory)
- Create: `src/assets/cases/` (directory)
- Modify: `src/styles/tokens.css` (add dark-banner + case tokens)

**Interfaces:**
- Produces: `CaseLayout` — props `{ title: string }`; renders `Layout`, a "← К портфолио" back link to `/`, and a centred `.case` container with `<slot />`.
- Produces tokens: `--color-banner-bg` (dark banner background, e.g. `#1c1c1e` — confirm exact value from Figma node `397-5037` banner), `--color-on-dark: #ffffff`.

- [ ] **Step 1: Add tokens**

In `src/styles/tokens.css`, append inside `:root`:

```css
  /* ---- Case-study ---- */
  --color-banner-bg: #1c1c1e;   /* dark feature banners — verify per node */
  --color-on-dark: #f2f2f2;     /* text on dark banners */
  --case-section-gap: clamp(var(--space-6), 6vw, calc(var(--space-7) + var(--space-6)));
```

- [ ] **Step 2: Create CaseLayout**

`src/components/CaseLayout.astro`:

```astro
---
import Layout from '../layouts/Layout.astro';
interface Props { title: string; }
const { title } = Astro.props;
---
<Layout title={title}>
  <main class="case container">
    <a class="back" href="/">← К портфолио</a>
    <slot />
  </main>
</Layout>

<style>
  .case {
    display: flex;
    flex-direction: column;
    gap: var(--case-section-gap);
    padding-block: clamp(var(--space-6), 6vw, calc(var(--space-7) + var(--space-1)));
  }
  .back {
    align-self: flex-start;
    font-size: var(--fs-sub);
    color: var(--color-text);
    text-decoration: none;
  }
  .back:hover { color: var(--color-accent); }
</style>
```

(Confirm `Layout.astro` accepts a `title` prop; if not, add an optional `title` prop to it in this step.)

- [ ] **Step 3: Verify it compiles**

Run: `npm run check`
Expected: no errors referencing `CaseLayout`.

- [ ] **Step 4: Commit** (on user confirmation)

```bash
git add src/components/CaseLayout.astro src/styles/tokens.css
git commit -m "feat(cases): add CaseLayout shell and case tokens"
```

---

### Task 2: AR Spatially case page (and extract shared components)

This is the first full case — extract the reusable section components here, then reuse them in Tasks 3–5.

**Files:**
- Create: `src/components/CaseHero.astro`, `src/components/CaseSection.astro`, `src/components/CaseImage.astro`, `src/components/CaseGallery.astro`, `src/components/CaseBanner.astro`, `src/components/CaseResult.astro`
- Create: `src/data/cases/ar-spatially.ts`
- Create: `src/pages/cases/ar-spatially.astro`
- Create: `src/assets/cases/ar-spatially/*` (exported images)

**Interfaces:**
- `CaseHero` — props `{ title: string; meta?: string; description: string; tags?: string[] }`.
- `CaseSection` — props `{ heading: string }`, body via `<slot />`; supports a `list?: string[]` prop for bullet lists.
- `CaseImage` — props `{ src: ImageMetadata; alt: string; rounded?: boolean }`.
- `CaseGallery` — props `{ images: { src: ImageMetadata; alt: string }[] }`; CSS grid that reflows to fewer columns / horizontal scroll on mobile.
- `CaseBanner` — props `{ title?: string }`, dark background, `<slot />`.
- `CaseResult` — props `{ heading: string; items: string[] }`.

- [ ] **Step 1: Export imagery + extract text from Figma**

Run `get_metadata` on node `397-5037` to map sections. For each section run `get_design_context` to capture exact RU copy and asset download URLs. `curl` each asset into `src/assets/cases/ar-spatially/` with descriptive kebab-case filenames (e.g. `hero-banner.png`, `gallery-screens-01.png`).

Verify: `ls src/assets/cases/ar-spatially/` lists every image present in the Figma screenshot.

- [ ] **Step 2: Transcribe content into data module**

`src/data/cases/ar-spatially.ts` — export a typed structure holding the hero text, each section's heading + body/list, and tag chips, transcribed verbatim from Figma. (Shape mirrors the section model; define and export `interface CaseContent` here for reuse — `{ title; meta; description; tags; sections: {...}; result: {...} }`.)

- [ ] **Step 3: Build the shared components**

Create the six components per the Interfaces block above, styling each from tokens to match the Figma screenshot (spacing, radii `--radius-media`, banner colours).

- [ ] **Step 4: Compose the page**

`src/pages/cases/ar-spatially.astro` — import `CaseLayout` + components + the data module + images, and lay out the sections top-to-bottom in Figma order.

- [ ] **Step 5: Verify build + visual fidelity**

Run: `npm run check && npm run build`
Expected: build succeeds, no broken image imports.
Then visually compare: capture the rendered page and diff against the Figma screenshot of `397-5037`; fix spacing/typography/colour drift.

- [ ] **Step 6: Commit** (on user confirmation)

```bash
git add src/components/Case*.astro src/data/cases/ar-spatially.ts src/pages/cases/ar-spatially.astro src/assets/cases/ar-spatially
git commit -m "feat(cases): add AR Spatially case page + shared case components"
```

---

### Task 3: Tap Topia case page

**Files:**
- Create: `src/data/cases/tap-topia.ts`
- Create: `src/pages/cases/tap-topia.astro`
- Create: `src/assets/cases/tap-topia/*`

**Interfaces:**
- Consumes: all components and `CaseContent` interface from Task 2.

- [ ] **Step 1: Export imagery + text from Figma node `445-52`** (same procedure as Task 2 Step 1) into `src/assets/cases/tap-topia/`.
- [ ] **Step 2: Transcribe into `src/data/cases/tap-topia.ts`** using the `CaseContent` interface.
- [ ] **Step 3: Compose `src/pages/cases/tap-topia.astro`** from the shared components. If a section shape is unique to this case (e.g. a wide "PROFILE FLOW" banner / large screenshot grid), reuse `CaseBanner`/`CaseGallery`; only add a new component if genuinely needed.
- [ ] **Step 4: Verify** — `npm run check && npm run build`; visual diff against `445-52`.
- [ ] **Step 5: Commit** (on user confirmation): `git commit -m "feat(cases): add Tap Topia case page"`.

---

### Task 4: kloo.io case page

**Files:**
- Create: `src/data/cases/kloo.ts`
- Create: `src/pages/cases/kloo.astro`
- Create: `src/assets/cases/kloo/*`

**Interfaces:**
- Consumes: all components and `CaseContent` interface from Task 2.

- [ ] **Step 1: Export imagery + text from Figma node `503-3828`** into `src/assets/cases/kloo/`.
- [ ] **Step 2: Transcribe into `src/data/cases/kloo.ts`.**
- [ ] **Step 3: Compose `src/pages/cases/kloo.astro`** (dashboard / landing-page screenshots → `CaseImage`/`CaseGallery`).
- [ ] **Step 4: Verify** — `npm run check && npm run build`; visual diff against `503-3828`.
- [ ] **Step 5: Commit** (on user confirmation): `git commit -m "feat(cases): add kloo.io case page"`.

---

### Task 5: SL Ventures case page

**Files:**
- Create: `src/data/cases/sl-ventures.ts`
- Create: `src/pages/cases/sl-ventures.astro`
- Create: `src/assets/cases/sl-ventures/*`

**Interfaces:**
- Consumes: all components and `CaseContent` interface from Task 2.

- [ ] **Step 1: Export imagery + text from Figma node `523-3817`** into `src/assets/cases/sl-ventures/`.
- [ ] **Step 2: Transcribe into `src/data/cases/sl-ventures.ts`.**
- [ ] **Step 3: Compose `src/pages/cases/sl-ventures.astro`.**
- [ ] **Step 4: Verify** — `npm run check && npm run build`; visual diff against `523-3817`.
- [ ] **Step 5: Commit** (on user confirmation): `git commit -m "feat(cases): add SL Ventures case page"`.

---

### Task 6: Wire home-page buttons + final responsive pass

**Files:**
- Modify: `src/data/content.ts` (add `href` to jobs / sub-projects)
- Modify: `src/components/Experience.astro` and/or `src/components/ExperienceCard.astro` (render `href` as a link; render inactive button when no `href`)
- Modify: case components as needed for mobile fixes

**Interfaces:**
- Consumes: case routes created in Tasks 2–5.

- [ ] **Step 1: Add hrefs to data**

In `src/data/content.ts`, add an optional `href?: string` to `Job` and `SubProject`, and set:
- AR Spatially job → `/cases/ar-spatially`
- Tap Topia job → `/cases/tap-topia`
- Sleegroup sub-project "Образовательная платформа..." → `/cases/kloo`
- Sleegroup sub-project "Инвестиционная платформа недвижимости" → `/cases/sl-ventures`
- Leave "Креативная студия" and NXmarketing without `href`.

- [ ] **Step 2: Render links**

In the experience card component, when `href` is set render the "Кейс продукта" button as an `<a href={href}>`; when absent, render it disabled (greyed, `aria-disabled`) or omit it. Negative scenario: no button may link to a non-existent page.

- [ ] **Step 3: Responsive audit**

Build and inspect each page at 375px and 768px widths. Confirm: no horizontal body overflow; two-column sections are single-column; galleries reflow. Fix media queries in the offending components.

- [ ] **Step 4: Verify**

Run: `npm run check && npm run build`
Expected: success. Manually click every home-page case button → lands on the right page; every case page back link → home.

- [ ] **Step 5: Commit** (on user confirmation): `git commit -m "feat(cases): link home-page buttons to case pages + responsive pass"`.

---

## Self-Review

- **Spec coverage:** four pages (Tasks 2–5), image export (each task Step 1), responsive (Task 6 Step 3), navigation + back link (Task 1 CaseLayout, Task 6), inactive buttons for uncovered cases (Task 6 Step 2 negative scenario), `astro build` gate (every task). All spec acceptance criteria mapped.
- **Placeholder scan:** image filenames and exact copy are intentionally resolved at execution (Step 1 of each case) because they are read live from Figma — not plan placeholders, but data-extraction steps with explicit procedures and verification.
- **Type consistency:** `CaseContent` defined in Task 2, consumed by Tasks 3–5; component prop names consistent across tasks.
