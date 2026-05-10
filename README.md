# MindRise Labs — Web

Production website for MindRise Labs (AI Automation Studio · Andorra), built with Next.js 14 App Router, TypeScript, Tailwind CSS and `next-intl` for the four working languages (CA · ES · EN · FR).

## Stack

- **Next.js 14+** with the App Router and Server Components by default
- **TypeScript** in strict mode
- **Tailwind CSS** with brand design tokens (royal blue `#2B519E`, champagne gold, deep navy ink)
- **next-intl 3** for localized routes and per-page metadata in `ca`, `es`, `en`, `fr`
- **next/font/local** for the Plus Jakarta Display + Plus Jakarta Text font families (no external requests)
- **Framer Motion** available for opt-in animations (the heavy effects — neural mesh, custom cursor, scroll reveal — use native canvas/CSS for fidelity with the original design)
- **next/image** for all logos in `public/logos/`

## Quick start

Requirements: Node.js ≥ 18.17, npm.

```bash
npm install
cp .env.example .env.local      # then edit CONTACT_WEBHOOK_URL
npm run dev
```

Open <http://localhost:3000>. The default locale is Catalan (`ca`) — Spanish/English/French are reachable at `/es`, `/en`, `/fr`.

## Available scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the local development server (Turbopack/webpack) on port 3000. |
| `npm run build` | Type-check and produce the production build. |
| `npm run start` | Serve the production build (after `build`). |
| `npm run lint` | Run `next lint`. |
| `npm run type-check` | Run `tsc --noEmit`. |

## Environment variables

Create a `.env.local` from `.env.example`:

```
CONTACT_WEBHOOK_URL=https://your-webhook-endpoint.example.com
NEXT_PUBLIC_SITE_URL=https://mindrise-labs.com
```

- **`CONTACT_WEBHOOK_URL`** — server-only. The `/api/contact` route forwards every validated submission to this URL via `POST` with a JSON body. If unset in production the API returns `{ ok: true, forwarded: false }` and logs a warning, so deploys never break — but the form is essentially a no-op until the variable is set.
- **`NEXT_PUBLIC_SITE_URL`** — used by `sitemap.ts`, `robots.ts`, the JSON-LD Organization schema and the canonical metadata. Defaults to `https://mindrise-labs.com`.

## Project structure

```
app/
  [locale]/
    layout.tsx                  # fonts, NextIntlClientProvider, JSON-LD, nav, footer, cursor, anchor handler
    page.tsx                    # home
    sobre-nosaltres/            # about
    serveis/                    # 6 service detail pages
    blog/                       # blog index + [slug]
    politica-de-privacitat/
    politica-de-cookies/
    avis-legal/
    not-found.tsx
  api/contact/route.ts          # POSTs to CONTACT_WEBHOOK_URL
  sitemap.ts
  robots.ts
  globals.css                   # design tokens + complex animations
components/
  layout/   Nav · Footer · LangSwitcher
  effects/  CustomCursor · NeuralMesh · RevealOnScroll · AnchorScrollHandler · Grain
  home/     all home sections
  about/    about-page sections
  services/ ServicePage helper + section components
  blog/     BlogIndex · PostPage
  legal/    LegalPage
  forms/    ContactForm
  icons/    SvgIcon · BlogCover · Flag · social icons
lib/
  i18n/     routing.ts · request.ts · navigation
  blog/     posts.ts (POSTS_META + per-locale CONTENT + buildCatalog)
  services/ catalog.ts (slugs + ids)
messages/
  ca/   common · home · about · services · blog · legal
  es/   …
  en/   …
  fr/   …
public/
  fonts/  (14 Plus Jakarta .otf)
  logos/  (6 PNGs)
```

## Internationalization

- Routing uses `localePrefix: 'as-needed'` — Catalan (default) is served at the root paths (`/`, `/serveis/agents-ia`), the other languages live under `/es`, `/en`, `/fr`.
- Slugs are kept in Catalan across all locales (`/serveis/agents-ia`, `/sobre-nosaltres`, `/avis-legal`, etc.) — same behavior as the original prototype, simpler internal linking.
- All user-facing text is in `messages/<locale>/*.json`. Texts were ported verbatim from the original prototype (`site/i18n*.js`); the legal pages use the literal Catalan source provided by the client and translated to ES/EN/FR while keeping the entity data (MINDRISE LABS, SL · NRT L-721255-P · address · email · Hostinger International Ltd. · law names like RGPD/Llei 29/2021/LQPD/APDA) untranslated.
- The language switcher in the nav and footer uses `usePathname` + `router.replace` from `next-intl/navigation`, so switching language preserves the current page.

## Animations & effects

All ported from the original prototype with the same tunings:

- **Custom cursor** (`components/effects/CustomCursor.tsx`) — dot + ring with smoothing, hot state on interactive elements, respects `prefers-reduced-motion` and `(hover: none)`. Mounted once globally in the locale layout.
- **Neural mesh** (`components/effects/NeuralMesh.tsx`) — canvas-based animated nodes + connecting lines + cursor parallax, only rendered in the home hero.
- **Reveal on scroll** — global `IntersectionObserver` re-armed on every route change.
- **Anchor scroll handler** — adapts the home-hash deep-link behavior to Next.js routing: clicking `/#process` from a sub-page navigates to `/` and scrolls to `#process` with sticky-nav offset.

## SEO

- Per-page `generateMetadata` with localized title/description.
- `Organization` JSON-LD schema in the locale layout.
- Dynamic `sitemap.xml` (`app/sitemap.ts`) covering home, about, six service pages, blog index, all blog posts and the three legal pages × four locales.
- Dynamic `robots.txt` (`app/robots.ts`).

## Contact form

`components/forms/ContactForm.tsx` validates client-side (name, email with `@`, message, consent), then `POST`s the JSON payload to `/api/contact`, which forwards it server-side to `CONTACT_WEBHOOK_URL`. The success/error copy is driven by the i18n strings in `common.contact.formFields`.

## Deploy to Vercel

1. Push to a Git repository.
2. In Vercel, import the project and set the framework preset to **Next.js**.
3. Add the environment variable `CONTACT_WEBHOOK_URL` (and `NEXT_PUBLIC_SITE_URL` if your domain is not the default).
4. Deploy. The first build will compile all four locales, generate the static blog post pages and prebuild the sitemap.

## Notes

- The design tokens in `app/globals.css` mirror `design-system/colors_and_type.css` from the original prototype. Tailwind also exposes the brand palette as `royal-{50..700}`, `ink-{400..900}`, `gold-{100..700}` and `mist`.
- The legal pages render structured content (paragraphs and bullet lists) from `messages/<locale>/legal.json`. To edit a section, change the corresponding `blocks` entry — no JSX edits required.
