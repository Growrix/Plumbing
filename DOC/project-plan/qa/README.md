# QA and Release Gates

## Purpose

This folder defines the verification checklist, quality gates, and release readiness criteria for the Plumbing Template. Every gate must pass before the template is considered shippable.

---

## Release Readiness Checklist

### Gate 1 — Zero 404s (P0 Exit Criterion)

- [ ] `npm run dev` — click every link in the header nav
- [ ] Click every link in the footer
- [ ] Click every CTA in the hero section
- [ ] Click every service card CTA on the home page
- [ ] Click every service card on `/services`
- [ ] Navigate to all 8 service detail pages via `/services/[slug]`
- [ ] Verify breadcrumb links on service detail pages
- [ ] Click all CTAs on `/plans`, `/booking`, `/about`, `/reviews`
- [ ] Visit `/this-route-does-not-exist` → custom 404 renders (brand-styled, not Next default)

### Gate 2 — Build Clean (P0 Exit Criterion)

- [ ] `npm run build` completes with zero errors
- [ ] Zero warnings about missing pages, invalid links, or unresolved imports
- [ ] `generateStaticParams` for `/services/[slug]` generates exactly 8 pages

### Gate 3 — Booking Form Happy Path (P1 Exit Criterion)

**With email credentials:**
- [ ] Set `RESEND_API_KEY` and `BOOKING_TO_EMAIL` in `.env.local`
- [ ] Submit booking form with valid data → email arrives at target inbox
- [ ] UI shows in-page success state

**Without email credentials:**
- [ ] Remove env vars from `.env.local`
- [ ] Submit booking form → server logs payload to console
- [ ] UI still shows success state
- [ ] No crash, no error page

**Validation:**
- [ ] Submit form with empty required fields → field-level error messages display
- [ ] Server returns `400` with errors JSON
- [ ] Submit form with honeypot populated → silent `200` (no error revealed)

### Gate 4 — SEO Infrastructure (P2 Exit Criterion)

- [ ] `curl http://localhost:3000/sitemap.xml` → valid XML containing all static routes + 8 service pages
- [ ] `curl http://localhost:3000/robots.txt` → `Allow: /` + sitemap URL
- [ ] Each `/services/[slug]` page has `<title>`, `<meta name="description">`, and OG tags
- [ ] Paste `/services/drain-cleaning` HTML into [Google Rich Results Test](https://search.google.com/test/rich-results) → `Service` and `FAQPage` schemas validate

### Gate 5 — Lighthouse (P2 Exit Criterion)

Run on `/` and one `/services/[slug]` page:

| Metric | Target |
|---|---|
| SEO | ≥ 95 |
| Accessibility | ≥ 90 |
| Best Practices | ≥ 90 |
| Performance | ≥ 85 |

- [ ] No missing `alt` attributes on images
- [ ] No keyboard-inaccessible interactive elements
- [ ] No color contrast failures
- [ ] `<html lang="en">` present

### Gate 6 — Rebrand Smoke Test (P2 Exit Criterion)

- [ ] Change `siteConfig.brand.name` from "AquaFix Pro" to "TestCo"
- [ ] Change `siteConfig.brand.phone`
- [ ] Reload every page
- [ ] No instance of "AquaFix" or the original phone number survives anywhere visible
- [ ] Footer copyright shows "TestCo"
- [ ] All CTAs use new phone number

### Gate 7 — Config Collision Verification (P0 Exit Criterion)

- [ ] `config/pages.config.js` has no `navConfig` export
- [ ] `config/pages.config.js` has no hardcoded brand name or phone number
- [ ] `config/site.config.js` has no `services.items` array (old 6-item list removed)
- [ ] All nav links in `siteConfig.nav.links` use slugs that exist in `servicesConfig.items`

---

## Test Strategy

The template ships without a test suite by design (reducing setup friction for buyers). The verification checklist above serves as the manual QA protocol.

**Recommended for operators extending the template:**
- Unit tests: Vitest for utility functions and API route validation logic
- E2E tests: Playwright for booking form happy path and 404 behavior
- Accessibility: axe-core in CI

---

## Known Non-Goals

- No automated test suite ships with the template (document in root README)
- No CI pipeline defined in the template repo (Vercel handles build validation)
- Lighthouse CI is a manual step, not automated (document as recommended operator addition)
