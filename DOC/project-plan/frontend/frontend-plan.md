# Frontend Plan — Master Architecture

## Purpose

This document defines the frontend architecture, component strategy, SEO plan, and page inventory for the Plumbing Template. Individual page docs are linked below. All decisions respect the contracts in [shared-contracts/README.md](../shared-contracts/README.md).

---

## Route and Page Inventory

| Route | Page Doc | Status | Priority |
|---|---|---|---|
| `/` | [page-home.md](./page-home.md) | ✅ Built | — |
| `/services` | [page-services-hub.md](./page-services-hub.md) | ✅ Built (P0 stub) | P0 |
| `/services/[slug]` | [page-services-slug.md](./page-services-slug.md) | ✅ Built (P0 stub) | P0+P1 |
| `/about` | [page-about.md](./page-about.md) | ✅ Built (P0 stub) | P0 |
| `/reviews` | [page-reviews.md](./page-reviews.md) | ✅ Built (P0 stub) | P0 |
| `/plans` | [page-plans.md](./page-plans.md) | ✅ Built (P0 stub) | P0 |
| `/booking` | [page-booking.md](./page-booking.md) | ✅ Built (P0 page, P1 wiring pending) | P0/P1 |
| `/contact` | [page-contact.md](./page-contact.md) | ✅ Built | — |
| `/emergency` | [page-emergency.md](./page-emergency.md) | ✅ Built | — |
| `/careers` | [page-careers.md](./page-careers.md) | ✅ Built (P0 stub) | P0 |
| `/privacy`, `/terms`, `/license` | [page-legal.md](./page-legal.md) | ✅ Built (P0 legal baseline) | P0 |
| `not-found` (404) | [page-not-found.md](./page-not-found.md) | ✅ Built | P0 |

---

## Component Architecture

### Layout Shell (Existing — Reuse)

- `components/layout/Header.jsx` — nav from `siteConfig.nav.links`; CTA from `siteConfig.nav.cta`
- `components/layout/Footer.jsx` — links from config; copyright from `siteConfig.brand.name`
- `components/layout/Navbar.jsx` — mobile nav
- `components/layout/StickyCallButton.jsx` — persistent phone CTA

### Reusable Sections (Existing — Reuse or Extend)

| Component | Used On |
|---|---|
| `sections/Hero.jsx` | Home |
| `sections/TrustBar.jsx` | Home, services hub, booking |
| `sections/CTASection.jsx` | Most inner pages |
| `sections/ServicesGrid.jsx` | Home featured services |
| `sections/Testimonials.jsx` | Home |
| `sections/Plans.jsx` | Home, plans page |
| `sections/Pricing.jsx` | Home, plans page |
| `sections/HowItWorks.jsx` | Home |
| `sections/EmergencyBanner.jsx` | Persistent |
| `features/BookingForm.jsx` | Booking page |

### New Shared Components (P0–P1)

| Component | Purpose | Priority |
|---|---|---|
| `components/shared/FAQ.jsx` | Accordion FAQ used by service detail + about | P1 |
| `components/shared/JsonLd.jsx` | `<script type="application/ld+json">` helper | P1 |
| `components/shared/Breadcrumb.jsx` | Breadcrumb trail for `/services/[slug]` | P1 |
| `components/legal/LegalPage.jsx` | Layout for privacy/terms/license with token replacement | P0 |

---

## Styling Conventions

- **CSS Modules** for all component styles — follow existing pattern, never use global classes for component-specific styles.
- **Design tokens** from `config/theme.config.js` — no hardcoded hex values in CSS.
- **No Tailwind, no inline styles** beyond what already exists.

---

## SEO Architecture

### Metadata Strategy

- `app/layout.jsx` — root `metadata` object with OpenGraph + Twitter cards from `siteConfig.seo`
- Per-page `generateMetadata` on: `/services/[slug]`, `/about`, `/reviews`, `/plans`, `/booking`
- Static pages (`/careers`, `/privacy`, `/terms`, `/license`) use static `metadata` exports

### Schema.org Strategy (P1)

Inject via `<JsonLd>` helper component:

| Page | Schema Types |
|---|---|
| `/services/[slug]` | `Service` + `FAQPage` + `LocalBusiness` |
| `/` | `LocalBusiness` + `AggregateRating` |
| `/reviews` | `AggregateRating` |
| `/about` | `LocalBusiness` |

### OG Image (P2)

`app/opengraph-image.jsx` — Next-native auto-OG using brand colors and `siteConfig.brand.name`.

---

## Accessibility Baseline

- Semantic HTML: `<main>`, `<nav>`, `<section>`, `<article>`, `<header>`, `<footer>` — every page
- All interactive elements keyboard-accessible
- `aria-label` on icon-only buttons (phone CTA, close buttons)
- Color contrast: minimum WCAG AA
- Skip-to-content link in `app/layout.jsx`

---

## Error, Loading, and Empty States

| State | Behavior |
|---|---|
| 404 | Custom `app/not-found.jsx` — brand-styled, prominent phone CTA |
| Booking form submit error | Surface field errors; show generic server-error message on 500 |
| Booking form success | In-page success state with confirmation copy |
| Careers — no openings | Render "We're not hiring right now — send a resume" CTA |
| Dynamic service page — unknown slug | `notFound()` call → custom 404 |

---

## Responsive Behavior

- Mobile-first CSS — all breakpoints from `theme.config.js`
- Sticky call button visible on all mobile viewports
- Navigation collapses to hamburger on `< 768px`
- Hero stats bar stacks to 2×2 on mobile
- Service cards: 1 col mobile → 2 col tablet → 3–4 col desktop
- Booking form: single column on mobile, 2-column sidebar layout on `>= 1024px`

---

## Photography and Media

- Heroes use CSS gradient backgrounds by default — operators replace with their own images
- `siteConfig.brand.logo` uses emoji + text; `logo.svg` opt-in path documented in README
- `public/images/` placeholder directory — document the swap in root `README.md`
- No synthetic or stock images shipped in the template
