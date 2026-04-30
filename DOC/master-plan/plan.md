# Plumbing Template — Site Master Plan

## Context

The site is a Next.js 14 (App Router) plumbing-business template. Today only **3 of 18 expected routes are built** (`/`, `/contact`, `/emergency`). The header, footer, hero CTAs, and pricing tiles all link to **15 routes that don't exist** — every one of them returns 404. The booking form has UI but no submit handler. There's no `/public` folder, no sitemap, no 404 page, no SEO metadata depth.

**Goal**: complete the site as a polished, **rebrandable** Next.js plumbing template. Buyers should be able to fork it, edit `config/*.js`, and ship a real plumbing site without touching components. Service pages should be SEO-grade (schema.org, deep structure, FAQ markup) so a real operator can rank locally. Booking should email out via a real API route, fail-soft if creds aren't set.

---

## ⚠️ Block-zero issue: config files contradict each other

Three config files each claim to be the source of truth, with different content:

| File | Brand | Service area | Phone | Service catalog |
|---|---|---|---|---|
| `config/site.config.js` | **AquaFix Pro** | Houston, TX | (800) 555-PIPE | 6 items: drain-cleaning, leak-repair, water-heater, pipe-installation, emergency, toilet-repair |
| `config/pages.config.js` | **FlowFix Plumbing** | Riverside, CA | (555) 247-8900 | (no services; defines its own nav and about story) |
| `config/services.config.js` | (no brand) | — | — | 8 items with different slugs: emergency-plumbing, drain-cleaning, leak-repair, water-heater, pipe-services, sewer-services, bathroom-kitchen, inspection |

Until this is resolved, every new page we build will wire to data that fights itself (e.g. nav says `/services/toilet-repair`, services config has no `toilet-repair` slug — it's `bathroom-kitchen`).

**Recommendation — single source of truth:**
- `site.config.js` owns: brand, contact, nav, hero, SEO defaults, footer.
- `services.config.js` owns: full service catalog (8 items wins — broader and more realistic).
- `pages.config.js` owns: per-page content (about story, FAQ, emergency types, homepage section order). Strip its duplicate `navConfig` and brand strings; have it pull brand from `siteConfig`.
- Update `siteConfig.nav.links`, `siteConfig.footer.links`, and homepage components to reference real slugs from `servicesConfig.items[].slug`.
- Delete the old 6-item service list embedded in `siteConfig.services.items`; replace with a derived view of `servicesConfig`.

This is **task 0** — nothing else proceeds cleanly until it's done.

---

## Vision & principles

1. **Config-driven, no hardcoded copy**: every visible word lives in `config/*.js`. Components are pure shells.
2. **Structurally rich, content-portable**: page templates have SEO-grade structure (schema.org, semantic flow, FAQ accordion, breadcrumbs); the text inside lives in config blocks so a new operator can rebrand without touching JSX.
3. **Zero 404s on shipped routes**: every link in nav, footer, and section CTAs resolves to a real page.
4. **Fail-soft backend**: booking submits to a real API route. If email env vars aren't set, the route logs the payload and returns a UI success state — the template demonstrably "works" out of the box.
5. **One brand string, one place**: a fresh fork should rebrand by changing `siteConfig.brand.name` and `siteConfig.brand.phone` and nothing else surviving anywhere visible.

---

## Information architecture

```
/                       Home                                  ✅ built
├── /services           Services hub (filterable grid)        ❌ NEW
│   └── /services/[slug]   SEO landing pages × 5–8            ❌ NEW (dynamic)
├── /about              Story · values · team · certs         ❌ NEW
├── /reviews            Full testimonials + aggregate rating  ❌ NEW
├── /plans              Maintenance plans detail              ❌ NEW
├── /booking            Booking form (form moves here)        ❌ NEW
├── /contact            General contact + map + hours         ✅ built
├── /emergency          Emergency dispatch                    ✅ built
├── /careers            Light recruiting page                 ❌ NEW
├── /privacy            Legal (template text + placeholders)  ❌ NEW
├── /terms              Legal (template text + placeholders)  ❌ NEW
└── /license            Legal (template text + placeholders)  ❌ NEW

System routes:
├── app/not-found.jsx          Custom 404                     ❌ NEW
├── app/sitemap.ts             XML sitemap                    ❌ NEW
├── app/robots.ts              robots.txt                     ❌ NEW
├── app/opengraph-image.jsx    Default OG image (Next auto)   ❌ NEW
└── app/api/booking/route.js   POST handler for booking form  ❌ NEW
```

**Keep `/contact` and `/booking` separate.** Different jobs: `/contact` answers "where are they / how do I reach them"; `/booking` answers "schedule a tech now." Different conversion intents, both useful.

---

## Per-page briefs

### `/services` — services hub
- **Purpose**: discovery. Let visitors filter the catalog by category and click through.
- **Sections**: hero (`servicesConfig.page`) · category filter chips (`servicesConfig.categories`) · service card grid (all items) · trust strip (reuse `TrustBar`) · sticky bottom CTA.
- **CTAs**: each card → `/services/[slug]`; bottom CTA → `/booking`.
- **File**: `app/services/page.jsx`.

### `/services/[slug]` — SEO landing pages (one template, N instances)
- **Purpose**: rank for local + service intent ("drain cleaning [city]"), convert.
- **Section flow** (in order): breadcrumb · hero (name + short desc + dual CTA Book/Call) · "What's included" (highlights) · "When you need this" (problem signs) · "Our process" (4 steps) · "Pricing snapshot" (links to relevant pricing tier) · FAQ accordion (3–5 Q&A per service) · related services · final CTA.
- **Schema.org**: `Service` + `FAQPage` + `LocalBusiness` JSON-LD via a shared `<JsonLd>` helper.
- **Content source**: extend each `servicesConfig.items[i]` with a `detail` block:
  ```js
  detail: {
    longDesc: "1–2 paragraph intro for SEO.",
    problemSigns: ["...", "..."],            // "When you need this"
    process: [{ step, title, desc }, ...],   // 4 steps
    faq: [{ q, a }, ...],                    // 3–5 entries
    relatedSlugs: ["leak-repair", "pipe-services"],
    heroImage: "/images/services/drain.jpg" | null,  // optional, falls back to gradient
  }
  ```
- **File**: `app/services/[slug]/page.jsx` + `generateStaticParams` from `servicesConfig.items`.

### `/about`
- **Purpose**: trust, founder story, team scale.
- **Sections**: hero (`aboutConfig.hero`) · story paragraphs · values grid · team-highlight stats · certifications strip · CTA.
- **File**: `app/about/page.jsx`.

### `/reviews`
- **Purpose**: social proof at depth.
- **Sections**: hero with aggregate star rating · platform breakdown (Google / Yelp / FB counts) · full testimonial grid (expand `siteConfig.testimonials.items` to ~12) · "leave a review" CTA → external Google reviews URL.
- **Schema.org**: `AggregateRating`.
- **File**: `app/reviews/page.jsx`.

### `/plans` — maintenance plans
- **Purpose**: convert recurring revenue.
- **Sections**: hero · 3-tier comparison table (`siteConfig.maintenancePlans`) · "what's included" feature matrix · FAQ · CTA.
- **Query param**: `?plan=silver|gold|platinum` pre-highlights and scrolls to that tier.
- **File**: `app/plans/page.jsx`.

### `/booking`
- **Purpose**: convert.
- **Sections**: hero ("we respond in 15 min") · `BookingForm` component (already exists; wire to API) · sidebar (phone, hours, response promise) · "what to expect" steps.
- **Query param**: `?tier=basic|standard|premium` pre-selects in form; `?service=drain-cleaning` pre-selects service.
- **API**: `app/api/booking/route.js` POST handler — validates payload, sends via Resend (`RESEND_API_KEY`, `BOOKING_TO_EMAIL` env vars), returns 200 + success JSON. If env vars unset: log payload server-side, still return success — the template works without setup.
- **File**: `app/booking/page.jsx`.

### `/careers`
- **Purpose**: recruiting; light page is fine for a template.
- **Sections**: hero · "why work here" benefits · open roles list (`careersConfig.openings`, empty array is OK and renders "we're not hiring right now — send a resume") · resume mailto CTA.
- **File**: `app/careers/page.jsx` + new `config/careers.config.js`.

### `/privacy` · `/terms` · `/license`
- **Purpose**: kill the 404s; give operators a starting point.
- **Approach**: shared `<LegalPage>` component renders sections from a new `config/legal.config.js`. Body text uses `{{brand.name}}`, `{{brand.address}}`, `{{brand.license}}`, `{{brand.serviceArea}}` token replacement. Top of every legal page: amber banner — **"Template content. Have a licensed attorney review and update before launch."**
- **Files**: `app/privacy/page.jsx`, `app/terms/page.jsx`, `app/license/page.jsx`, `components/legal/LegalPage.jsx`, `config/legal.config.js`.

### `not-found.jsx`
- **Purpose**: graceful 404 instead of Next default.
- **Content**: brand-styled headline ("We can't find that drain") · suggested popular pages · prominent phone CTA · home link.
- **File**: `app/not-found.jsx`.

---

## Cross-cutting work

### 1. SEO infrastructure
- `app/sitemap.ts` — enumerate static routes + dynamic services from `servicesConfig`.
- `app/robots.ts` — allow all, point to sitemap.
- `app/layout.jsx` — extend `metadata` with OpenGraph + Twitter cards from `siteConfig.seo`.
- `generateMetadata` per page that benefits: `/services/[slug]`, `/about`, `/reviews`, `/plans`.
- `app/opengraph-image.jsx` — Next-native auto-OG using brand colors and `siteConfig.brand.name`.

### 2. Public assets
Currently no `public/` folder exists. Add:
- `favicon.ico`, `icon.png`, `apple-icon.png` (use brand 💧 emoji rendered as PNG until real logo).
- `og-image.jpg` (1200×630 fallback for cards that don't have a per-page OG).
- `images/` placeholder directory; document via README that operators drop their own here.
- Document the swap: `siteConfig.brand.logo` currently uses emoji + text; add a `logo.svg` opt-in path.

### 3. Shared components to extract
- `<FAQ items>` — accordion used by service detail + `/about` (FAQ already in `faqConfig`).
- `<JsonLd schema>` — `<script type="application/ld+json">` helper.
- `<Breadcrumb trail>` — used by every `/services/[slug]` page.
- `<LegalPage data>` — privacy/terms/license layout.

---

## Sequencing

### P0 — Kill all 404s (estimated 1–2 days)
1. **Resolve the three-config collision** (described above). Audit which config each component actually reads; pick winners; delete duplicates; update slugs everywhere.
2. Stub all 11 missing route files with hero + CTA + minimal placeholder body (no SEO depth yet — just enough to not 404 and look intentional).
3. Custom `app/not-found.jsx`.
4. Verify: crawl every link in header, footer, hero, every section CTA — zero 404s.

### P1 — Depth & conversion (estimated 2–3 days)
5. Build out service detail pages with full SEO sections + JSON-LD. Add `detail` blocks to `servicesConfig.items`.
6. Build `/api/booking/route.js` + Resend integration + fail-soft path.
7. Wire `BookingForm` to the API. Add query-param pre-fill for `?tier=` and `?service=`.
8. Polish `/about`, `/reviews`, `/plans` to full depth.

### P2 — Polish & infrastructure (estimated 1 day)
9. `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.jsx`.
10. `public/` assets (favicon, OG fallback, icon set).
11. Legal pages with token replacement + lawyer-review banner.
12. `/careers` page.
13. Lighthouse pass on `/` and a `/services/[slug]` page; fix CLS / a11y / SEO flags.

---

## Critical files to create or modify

```
# New pages
app/services/page.jsx
app/services/[slug]/page.jsx
app/about/page.jsx
app/reviews/page.jsx
app/plans/page.jsx
app/booking/page.jsx
app/careers/page.jsx
app/privacy/page.jsx
app/terms/page.jsx
app/license/page.jsx
app/not-found.jsx

# New system routes
app/sitemap.ts
app/robots.ts
app/opengraph-image.jsx
app/api/booking/route.js

# New config
config/legal.config.js
config/careers.config.js

# Modified config (collision fix + detail blocks)
config/site.config.js          ← strip duplicate services list, fix nav slugs
config/pages.config.js         ← strip duplicate brand/nav, reference siteConfig
config/services.config.js      ← add detail block to each item

# New shared components
components/shared/FAQ.jsx
components/shared/JsonLd.jsx
components/shared/Breadcrumb.jsx
components/legal/LegalPage.jsx

# Modified
app/layout.jsx                 ← extended metadata, OG defaults
components/features/BookingForm.jsx  ← wire to /api/booking, query-param pre-fill

# New asset directory
public/                        ← favicon set, og-image.jpg, images/ placeholder
```

---

## Open decisions (flag during build, don't block planning)

- **Icons**: keep emoji (template-friendly, zero-dep) or migrate to Lucide/Heroicons SVG (more polished, slightly more rebrand work)? **Lean: keep emoji until P2.**
- **Hero photography**: ship without photos (CSS gradient hero) or include placeholder stock images? **Lean: ship without — operators add their own; document the swap.**
- **Reviews**: 12 hardcoded testimonials in config, or stub a Google Place API integration? **Lean: hardcoded for the template; document the upgrade path.**
- **Blog**: is `/blog` worth adding for SEO content marketing? **Lean: out of scope; flag for v2.**
- **Form spam protection**: add a honeypot field + simple rate limit, or pull in Cloudflare Turnstile? **Lean: honeypot + IP rate limit for the template; Turnstile is a config-toggle the operator wires.**

---

## Verification

End-to-end checks before declaring done:

1. **Link crawl**: `npm run dev`; click every link in header, footer, hero, every section CTA, every card CTA on home page — confirm zero 404s.
2. **Build**: `npm run build` clean, no warnings about missing pages or invalid links.
3. **Booking happy path (with email)**: set `RESEND_API_KEY` + `BOOKING_TO_EMAIL`; submit booking form → email arrives at target inbox; UI shows success state.
4. **Booking happy path (without email)**: unset env vars; submit form → server logs payload; UI still shows success. Template works zero-config.
5. **Booking validation**: submit empty form → server returns 400 with field errors; UI surfaces them.
6. **Lighthouse**: on `/` and one `/services/[slug]`: target ≥95 SEO, ≥90 Accessibility, ≥90 Best Practices.
7. **Sitemap**: `curl http://localhost:3000/sitemap.xml` → contains all static + dynamic routes.
8. **Schema validity**: paste `/services/drain-cleaning` source into Google Rich Results Test → `Service` and `FAQPage` schemas validate, no errors.
9. **Rebrand smoke test**: change `siteConfig.brand.name` from "AquaFix Pro" to "TestCo"; change `siteConfig.brand.phone`; reload every page — no instance of "AquaFix" or the old phone survives anywhere visible.
10. **404 page**: visit `/this-route-does-not-exist` → custom 404 renders with brand styling.
