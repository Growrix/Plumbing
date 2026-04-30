# Tasks — Plumbing Template Execution Tracker

**Planning artifact:** [plumbing-template-e2e-plan.md](../plumbing-template-e2e-plan.md)
**Current phase:** P0 — Kill All 404s
**Last updated:** 2026-04-30

---

## P0 — Kill All 404s

**Entry criterion:** Documentation complete (Stage A done).
**Exit criterion:** Zero 404s on all nav/footer/hero/CTA links. `npm run build` clean.

### Task 0 — Resolve Three-Config Collision (BLOCKER)

> Nothing else builds correctly until this is done.

- [ ] **T0.1** — `config/site.config.js`: Remove `services.items` (old 6-item list). Update `nav.links` hrefs to match the 8 canonical slugs from `servicesConfig`.
- [ ] **T0.2** — `config/pages.config.js`: Remove `navConfig` export. Remove all hardcoded brand name / phone strings. Reference `siteConfig` for brand values where needed.
- [ ] **T0.3** — Audit all components for hardcoded strings or imports from the wrong config. Update to correct source.

**Contracts:** [shared-contracts/README.md](../shared-contracts/README.md)

---

### Task 1 — Stub All Missing Routes (P0 Pages)

Build minimal but intentional pages — hero + CTA + body placeholder. No SEO depth yet.

- [ ] **T1.1** — `app/services/page.jsx` — services hub (hero + category filter + service grid + trust bar + CTA)
- [ ] **T1.2** — `app/services/[slug]/page.jsx` — service detail stub (breadcrumb + hero + highlights + CTA). `generateStaticParams` from `servicesConfig.items`.
- [ ] **T1.3** — `app/about/page.jsx` — about stub (hero + story + values + CTA)
- [ ] **T1.4** — `app/reviews/page.jsx` — reviews stub (hero + testimonials grid + CTA)
- [ ] **T1.5** — `app/plans/page.jsx` — plans stub (hero + pricing tiers + CTA)
- [ ] **T1.6** — `app/booking/page.jsx` — booking page with existing `BookingForm` component (unwired to API for now)
- [ ] **T1.7** — `app/careers/page.jsx` + `config/careers.config.js`
- [ ] **T1.8** — `app/privacy/page.jsx`, `app/terms/page.jsx`, `app/license/page.jsx` + `config/legal.config.js` + `components/legal/LegalPage.jsx`

**Page plans:** [DOC/project-plan/frontend/](../frontend/)

---

### Task 2 — Custom 404 Page

- [ ] **T2.1** — `app/not-found.jsx` — brand-styled 404 with phone CTA, suggested links, home link

**Page plan:** [frontend/page-not-found.md](../frontend/page-not-found.md)

---

### Task 3 — P0 Verification

- [ ] **T3.1** — Run `npm run dev`, manually click every link in header, footer, hero, and section CTAs
- [ ] **T3.2** — Run `npm run build` — zero errors, zero warnings
- [ ] **T3.3** — Verify all 7 QA Gate 1 checks from [qa/README.md](../qa/README.md)
- [ ] **T3.4** — Verify all 4 QA Gate 7 config-collision checks

**P0 complete when:** Gates 1, 2, and 7 all pass.

---

## P1 — Depth and Conversion

**Entry criterion:** P0 complete — zero 404s, build clean.
**Exit criterion:** Service detail pages SEO-grade. Booking form submits to live API. Booking happy paths verified.

### Task 4 — Service Detail SEO Depth

- [ ] **T4.1** — Add `detail` block to each of the 8 `servicesConfig.items` (longDesc, problemSigns, process, faq, relatedSlugs, heroImage)
- [ ] **T4.2** — Build full service detail page sections: "When you need this", "Our process", Pricing snapshot, FAQ accordion, Related services
- [ ] **T4.3** — Create `components/shared/FAQ.jsx` accordion component
- [ ] **T4.4** — Create `components/shared/Breadcrumb.jsx` component
- [ ] **T4.5** — Create `components/shared/JsonLd.jsx` helper
- [ ] **T4.6** — Inject `Service` + `FAQPage` + `LocalBusiness` JSON-LD on each service detail page
- [ ] **T4.7** — Add `generateMetadata` to `/services/[slug]`

**Page plan:** [frontend/page-services-slug.md](../frontend/page-services-slug.md)

---

### Task 5 — Booking API Route

- [ ] **T5.1** — Create `app/api/booking/route.js` POST handler
- [ ] **T5.2** — Server-side validation: required fields, email format, phone pattern, service slug enum, message length
- [ ] **T5.3** — Honeypot field check (`website` field must be empty)
- [ ] **T5.4** — IP rate limiting — max 10 requests/IP/hour (in-memory counter)
- [ ] **T5.5** — Resend integration with fail-soft: send email if env vars set; log + return 200 if not
- [ ] **T5.6** — Create `.env.example` in repo root

**Contracts:** [api-and-data/README.md](../api-and-data/README.md), [security/README.md](../security/README.md), [backend/README.md](../backend/README.md)

---

### Task 6 — Wire BookingForm to API

- [ ] **T6.1** — `components/features/BookingForm.jsx`: POST to `/api/booking` on submit
- [ ] **T6.2** — Handle 200 → in-page success state
- [ ] **T6.3** — Handle 400 → surface field-level error messages
- [ ] **T6.4** — Handle 500 → show generic retry message
- [ ] **T6.5** — Query param pre-fill: `?service=` and `?tier=` populate form fields on mount
- [ ] **T6.6** — Add honeypot input (CSS-hidden, not `display:none`)
- [ ] **T6.7** — Loading state on submit button

**Page plan:** [frontend/page-booking.md](../frontend/page-booking.md)

---

### Task 7 — Polish Inner Pages to Full Depth

- [ ] **T7.1** — `/about`: full story, values grid, team stats, certifications, optional FAQ
- [ ] **T7.2** — `/reviews`: aggregate rating hero, platform breakdown, 12 testimonials, leave-a-review CTA. Extend `testimonialsConfig` accordingly.
- [ ] **T7.3** — `/plans`: feature matrix table, FAQ, `?plan=` query param pre-highlight

---

### Task 8 — P1 Verification

- [ ] **T8.1** — Booking happy path with credentials (see QA Gate 3 — with email)
- [ ] **T8.2** — Booking happy path without credentials (see QA Gate 3 — without email)
- [ ] **T8.3** — Booking validation (Gate 3 — validation section)
- [ ] **T8.4** — Schema validation: paste service page HTML into Google Rich Results Test

**P1 complete when:** Gates 3 and 4 pass.

---

## P2 — Polish and Infrastructure

**Entry criterion:** P1 complete — booking API live, service pages SEO-grade.
**Exit criterion:** Lighthouse targets met. Sitemap valid. Rebrand smoke test passes.

### Task 9 — SEO Infrastructure

- [ ] **T9.1** — `app/sitemap.ts`: static routes + dynamic service slugs
- [ ] **T9.2** — `app/robots.ts`: Allow all + sitemap link
- [ ] **T9.3** — `app/opengraph-image.jsx`: Next-native auto-OG using brand colors + name
- [ ] **T9.4** — `app/layout.jsx`: extend root `metadata` with OG + Twitter card defaults from `siteConfig.seo`
- [ ] **T9.5** — Add `generateMetadata` to `/about`, `/reviews`, `/plans`

---

### Task 10 — Public Assets

- [ ] **T10.1** — `public/favicon.ico`, `public/icon.png`, `public/apple-icon.png` (emoji-based placeholder)
- [ ] **T10.2** — `public/og-image.jpg` (1200×630 fallback for social cards)
- [ ] **T10.3** — `public/images/` placeholder directory + README note on operator image swap

---

### Task 11 — Careers and Legal Completion

- [ ] **T11.1** — `/careers`: full benefits grid, open roles list with graceful empty state, resume CTA
- [ ] **T11.2** — Legal pages: token replacement for `{{brand.*}}` values; attorney-review banner on all three pages

---

### Task 12 — Lighthouse and A11y Pass

- [ ] **T12.1** — Run Lighthouse on `/` and one `/services/[slug]` page
- [ ] **T12.2** — Fix any CLS, accessibility, or SEO flags until all targets met (see QA doc)
- [ ] **T12.3** — Skip-to-content link in `app/layout.jsx`
- [ ] **T12.4** — `aria-label` on all icon-only buttons

---

### Task 13 — P2 Verification (Final Release Gates)

- [ ] **T13.1** — QA Gate 5: Lighthouse targets (≥95 SEO, ≥90 A11y, ≥90 Best Practices, ≥85 Performance)
- [ ] **T13.2** — QA Gate 4: Sitemap and robots valid
- [ ] **T13.3** — QA Gate 6: Rebrand smoke test — change brand name, verify zero old-brand leaks
- [ ] **T13.4** — Final `npm run build` clean
- [ ] **T13.5** — First Vercel production deploy

**P2 complete when:** All QA gates (1–7) pass.

---

## Blocked / Deferred

| Item | Status | Notes |
|---|---|---|
| Blog / content marketing | Deferred v2 | Flag as upgrade path in README |
| Google Places API reviews | Deferred v2 | Template ships with hardcoded testimonials |
| Cloudflare Turnstile CAPTCHA | Deferred / operator-configured | Document as optional upgrade |
| Analytics instrumentation | Deferred v2 | Document Vercel Analytics as recommended path |
| SVG icon migration | Deferred v2 | Template ships with emoji icons |
| Multi-language / i18n | Deferred v2 | Not in scope |
