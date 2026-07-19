# Conserviron Sustainability Foundation — Build Plan

A production-quality, multi-page marketing site for a Section 8 technical conservation consultancy. Editorial, sober, credible — never charity-template.

## Design system (src/styles.css)

Tailwind v4 tokens via `@theme`:
- Colors: `--forest-deep #14342B`, `--forest #1F5C43`, `--moss #6B8F71`, `--clay #B5623C`, `--paper #F7F5EF`, `--sand #EDE8DC`, `--ink #1A1A17`, `--stone #6E6A60` (converted to oklch). Map to semantic `--color-background` (paper), `--color-foreground` (ink), `--color-primary` (forest-deep), `--color-accent` (clay), etc.
- Fonts: **Fraunces** (display serif) + **Inter** (body) loaded via `<link>` in `__root.tsx` head. `--font-serif`, `--font-sans`.
- Radius 10px, soft shadows, 1px sand/moss borders.
- Clay used ONLY for primary CTAs, active links, small underlines.

## Route architecture (TanStack Start)

- `src/routes/__root.tsx` — html shell, Google Fonts links, global head meta, sticky Header + Footer around `<Outlet />`.
- `src/routes/index.tsx` — Home (rewrite the placeholder).
- `src/routes/about.tsx`
- `src/routes/services.tsx`
- `src/routes/work.tsx`
- `src/routes/team.tsx`
- `src/routes/contact.tsx`

Each leaf sets its own `head()` with title (`Conserviron — [Page]`), description, og:title/description, og:url, canonical.

## Shared components (src/components/)

- `Header.tsx` — sticky, condenses on scroll (shrinking padding via scroll listener), wordmark + leaf glyph SVG, nav links with `activeProps`, "Discuss a project" clay-outline CTA → `/contact`.
- `Footer.tsx` — deep-forest bg, two offices, phones, emails, credentials strip, quick nav, © line.
- `Section.tsx`, `Eyebrow.tsx`, `Button.tsx` (variants: primary clay, ghost, outline), `StatBlock.tsx`, `Card.tsx`, `CredibilityBar.tsx` (reusable trust strip).
- `HeroImage.tsx` — full-bleed image with deep-green gradient overlay + slow Ken Burns via CSS keyframes.

## Page content

All copy comes verbatim from the prompt (vision, mission, objectives, three service families, three case studies, team bios, contact details). No fabricated numbers.

- **Home**: Hero → Credibility bar → 3 pillars → Approach band (deep-forest) → Selected Work (3 cards) → Stats strip → Team teaser (4 cards) → CTA band.
- **About**: Intro → Vision/Goal/Objectives editorial block → Legal fact chips → 4 Approach pillars → Collaborations note (Wales/Bangor, Sweden).
- **Services**: 3 families as anchored sections with icon-list items + sticky sub-nav (follow-up #3 baked in) + CTA.
- **Work**: 3 detailed case-studies (Client/Location/Scope/Outcome grid) + Capabilities grid + "Where we're headed".
- **Team**: Directors / Key Personnel / Advisors grids with photo placeholders, name (serif), credential (muted sans), hover-reveal bio.
- **Contact**: Intro + front-end-only form (React state, toast confirmation via sonner, no `<form onSubmit>`) + two office cards + phones/emails + static map placeholder images.

## Imagery

Use Unsplash-source URLs for atmospheric Indian wetlands/forest/wildlife-corridor imagery (landscape not close-up). Team/office get neutral placeholder tiles. Every `<img>` gets descriptive alt text. Hero gets dark-green gradient overlay for legibility.

## Motion & a11y

- Subtle fade-up scroll reveals (~400ms) via IntersectionObserver hook.
- Hero Ken Burns via CSS.
- Semantic HTML, single H1 per page, strong contrast, focus rings in forest.
- Fully responsive; header collapses to slide-in menu on mobile.

## SEO / head

- Root: sitewide og:type website, og:site_name, viewport, favicon (leaf glyph SVG in forest green added to `public/`).
- Leaf routes: unique title + description + og:title/description + og:url + canonical (relative paths).
- No og:image at root; leaves omit unless a strong hero image URL is used.

## Out of scope for v1

- No backend, no Lovable Cloud, no donation flow, no CMS. Contact form is front-end only with a success toast — clearly wired for later backend hookup.

## Technical details

- Tailwind v4 in `src/styles.css` — no config file, tokens in `@theme`, `@theme inline` for shadcn-style mapped tokens.
- No new npm packages required (sonner already available per stack).
- No server functions, no auth.
- Delete the `data-lovable-blank-page-placeholder` markup by replacing `src/routes/index.tsx` with the real Home.
