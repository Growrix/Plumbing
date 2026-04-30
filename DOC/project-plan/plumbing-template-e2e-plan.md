# Plumbing Template — End-to-End Plan

## 1. Artifact Metadata

- **Canonical artifact path:** `DOC/project-plan/plumbing-template-e2e-plan.md`
- **Affected downstream role docs:**
  - `DOC/project-plan/shared-contracts/`
  - `DOC/project-plan/frontend/` (13 files: master plan + 12 page docs)
  - `DOC/project-plan/api-and-data/`
  - `DOC/project-plan/backend/`
  - `DOC/project-plan/security/`
  - `DOC/project-plan/devops/`
  - `DOC/project-plan/qa/`
  - `DOC/project-plan/tasks/`
- **Planning request source:** `DOC/master-plan/plan.md`
- **Planning mode:** Fresh — documentation generation (Stage A) for a partially-built codebase
- **Status:** Stage A complete — ready for Stage B implementation
- **Last updated:** 2026-04-30
- **Guide files consulted:** framework templates, execution constitution, roles ai-context
- **Existing project artifacts audited:** `config/site.config.js`, `config/services.config.js`, `config/pages.config.js`, `app/page.jsx`, `app/contact/`, `app/emergency/`, `components/` tree
- **Owners and reviewers:** Single developer / template author
- **Scope labels:** fresh-build, public-site, plumbing-template, seo, booking-api

---

## 2. Project Folder Materialization Contract

### Created This Session

| Folder / File | Status |
|---|---|
| `DOC/project-plan/ai-context.yaml` | ✅ Created |
| `DOC/project-plan/README.md` | ✅ Created |
| `DOC/project-plan/plumbing-template-e2e-plan.md` | ✅ This file |
| `DOC/project-plan/shared-contracts/ai-context.yaml` | ✅ Created |
| `DOC/project-plan/shared-contracts/README.md` | ✅ Created |
| `DOC/project-plan/frontend/ai-context.yaml` | ✅ Created |
| `DOC/project-plan/frontend/README.md` | ✅ Created |
| `DOC/project-plan/frontend/frontend-plan.md` | ✅ Created |
| `DOC/project-plan/frontend/page-home.md` | ✅ Created |
| `DOC/project-plan/frontend/page-services-hub.md` | ✅ Created |
| `DOC/project-plan/frontend/page-services-slug.md` | ✅ Created |
| `DOC/project-plan/frontend/page-about.md` | ✅ Created |
| `DOC/project-plan/frontend/page-reviews.md` | ✅ Created |
| `DOC/project-plan/frontend/page-plans.md` | ✅ Created |
| `DOC/project-plan/frontend/page-booking.md` | ✅ Created |
| `DOC/project-plan/frontend/page-contact.md` | ✅ Created |
| `DOC/project-plan/frontend/page-emergency.md` | ✅ Created |
| `DOC/project-plan/frontend/page-careers.md` | ✅ Created |
| `DOC/project-plan/frontend/page-legal.md` | ✅ Created |
| `DOC/project-plan/frontend/page-not-found.md` | ✅ Created |
| `DOC/project-plan/api-and-data/ai-context.yaml` | ✅ Created |
| `DOC/project-plan/api-and-data/README.md` | ✅ Created |
| `DOC/project-plan/backend/ai-context.yaml` | ✅ Created |
| `DOC/project-plan/backend/README.md` | ✅ Created |
| `DOC/project-plan/security/ai-context.yaml` | ✅ Created |
| `DOC/project-plan/security/README.md` | ✅ Created |
| `DOC/project-plan/devops/ai-context.yaml` | ✅ Created |
| `DOC/project-plan/devops/README.md` | ✅ Created |
| `DOC/project-plan/qa/ai-context.yaml` | ✅ Created |
| `DOC/project-plan/qa/README.md` | ✅ Created |
| `DOC/project-plan/tasks/ai-context.yaml` | ✅ Created |
| `DOC/project-plan/tasks/tasks.md` | ✅ Created |

### Intentionally Excluded Folders

| Folder | Reason |
|---|---|
| `supabase/` | No database — all data in `config/*.js` |
| `cms-content-operations/` | No headless CMS — operator edits config files |
| `admin-dashboard/` | No admin UI in scope |
| `mobile/` | No native mobile scope |
| `analytics/` | Deferred to v2 |
| `search/` | No search product; SEO via static metadata only |

---

## 3. Planning Mode and Objective

- **Planning mode:** Fresh documentation generation on a partially-built codebase
- **Why this mode:** Only 3 of 18 routes exist; Stage A docs did not exist; implementation cannot proceed without contracts
- **Scope boundaries:** Complete the plumbing template to a shippable, zero-404, SEO-grade, rebrandable product
- **Explicit non-goals:** Blog, headless CMS, database, user auth, native mobile, analytics, multi-language
- **Success definition:** All 18 routes resolve, booking API works fail-soft, service pages have SEO schema, site rebrands by changing 2 config values, Lighthouse gates met
- **Compatibility requirements:** Extend existing `app/`, `components/`, `config/` structure — no framework change, no styling-system change, no new build tooling

---

## 4. Current-State Audit

### Tracker Status

| State | Items |
|---|---|
| Done | `/` (home), `/contact`, `/emergency` |
| Partial | `BookingForm.jsx` (UI exists; no API wire), `Header/Footer` (functional; config collision makes nav links break) |
| Blocked | Everything — config collision must be resolved first (Task 0) |
| Not started | 15 routes, booking API, sitemap, robots, OG image, public assets, shared components, legal config, careers config |

### Existing Codebase Inventory

| Asset | Reuse Decision |
|---|---|
| `app/layout.jsx` | Reuse — extend metadata |
| `app/page.jsx` | Reuse — fix service card hrefs post-collision resolution |
| `app/contact/page.jsx` | Reuse — verify config source cleanup |
| `app/emergency/page.jsx` | Reuse — verify config source cleanup |
| `components/layout/*` | Reuse as-is |
| `components/sections/Hero.jsx` | Reuse — extend or create variants for inner pages |
| `components/sections/TrustBar.jsx` | Reuse as-is |
| `components/sections/CTASection.jsx` | Reuse as-is |
| `components/sections/Services.jsx` | Reuse — fix href source |
| `components/sections/ServicesGrid.jsx` | Reuse on services hub |
| `components/sections/Testimonials.jsx` | Reuse — extend config |
| `components/sections/Plans.jsx` | Reuse on plans page |
| `components/sections/PricingTiers.jsx` | Reuse on plans page |
| `components/sections/HowItWorks.jsx` | Reuse on booking page |
| `components/features/BookingForm.jsx` | Extend — wire to API, add query-param pre-fill, honeypot |
| `config/site.config.js` | Modify — strip old services list, fix nav slugs |
| `config/services.config.js` | Extend — add `detail` blocks per item |
| `config/pages.config.js` | Modify — strip navConfig and brand strings |

### Reuse-First Delta Map

**Reuse without changes:**
- All layout components (Header, Footer, Navbar, StickyCallButton)
- TrustBar, CTASection, EmergencyBanner, HowItWorks, Plans, PricingTiers
- `config/pricing.config.js`, `config/theme.config.js`, `config/booking.config.js`

**Extend carefully:**
- `BookingForm.jsx` — API wire + honeypot + query params
- `Testimonials.jsx` — config expansion to ~12 items
- `config/services.config.js` — add `detail` block per item
- `app/layout.jsx` — extend metadata

**Modify in place:**
- `config/site.config.js` — collision fix
- `config/pages.config.js` — collision fix

**Net-new:**
- 15 new route files (`app/*/page.jsx`, `app/not-found.jsx`)
- `app/api/booking/route.js`
- `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.jsx`
- `components/shared/FAQ.jsx`, `JsonLd.jsx`, `Breadcrumb.jsx`
- `components/legal/LegalPage.jsx`
- `config/legal.config.js`, `config/careers.config.js`
- `public/` assets

---

## 5. Scope, Surfaces, Roles, and Access Model

### Surface Map

| Surface | Routes |
|---|---|
| Public marketing | `/`, `/services`, `/services/[slug]`, `/about`, `/reviews`, `/plans`, `/contact`, `/emergency` |
| Conversion | `/booking` |
| Informational | `/careers`, `/privacy`, `/terms`, `/license` |
| System | `not-found`, `/sitemap.xml`, `/robots.txt`, `/api/booking` |

### Personas and Roles

| Persona | Description |
|---|---|
| Residential customer | Finds site via search; wants a plumber fast |
| Commercial customer | Needs reliable contractor; evaluates via reviews and plans |
| Template buyer / operator | Forks the repo, edits `config/*.js`, deploys their plumbing business site |
| Developer buyer | Extends the template; adds integrations |

### Authentication, Authorization, and Tenancy

**Not applicable.** No user accounts, no login, no sessions, no protected routes. The site is fully public.

---

## 6. Product, Content, CMS, and Search Strategy

### CMS and Editorial Operations

**Decision:** No headless CMS. Content lives in `config/*.js` files.

**Justification:** The template is designed for small plumbing businesses. Operators are not editors — they are the business owner or their developer. Config files are the right abstraction. Adding Sanity or Contentful would increase setup friction with no conversion benefit for the template use case.

**Editorial ownership:** Operator edits `config/*.js` files directly. Documented in root `README.md`.

**Upgrade path:** Document Sanity CMS integration as a v2 upgrade in `README.md`.

### Content Surfaces

| Surface | Source |
|---|---|
| Services catalog | `config/services.config.js` |
| Testimonials | `config/testimonials.config.js` |
| Pricing / plans | `config/pricing.config.js` |
| Per-page copy | `config/pages.config.js` |
| Brand / contact | `config/site.config.js` |
| Legal content | `config/legal.config.js` (new) |
| Career openings | `config/careers.config.js` (new) |

### Search and Indexing

- SEO metadata via Next.js `generateMetadata` per page
- Schema.org JSON-LD on service detail pages (`Service`, `FAQPage`, `LocalBusiness`)
- `app/sitemap.ts` covers static + dynamic routes
- `app/robots.ts` allows all crawlers
- Legal pages: `robots: { index: false }`

---

## 7. Platform Decision Matrix

| Capability | Current State | Decision | Required When | Notes |
|---|---|---|---|---|
| Next.js | Active (14, App Router) | Required now | Now | Core framework |
| React | Active | Required now | Now | Ships with Next.js |
| TypeScript | Not in use | Excluded | — | Project uses plain JS/JSX |
| Sanity CMS | Not in use | Excluded | v2 upgrade | Document upgrade path |
| Supabase | Not in use | Excluded | — | No DB in template scope |
| PostgreSQL | Not in use | Excluded | — | No DB in template scope |
| Prisma | Not in use | Excluded | — | No ORM needed |
| Lark | Not in use | Excluded | — | Not required |
| Resend | Not in use | Required (P1) | P1 | Booking email; fail-soft |
| Pusher | Not in use | Excluded | — | No real-time features |
| S3 | Not in use | Excluded | — | No media upload |
| Search provider | Not in use | Excluded | — | Static SEO only |
| Analytics | Not in use | Deferred v2 | v2 | Vercel Analytics recommended |
| Error monitoring | Not in use | Deferred v2 | v2 | Sentry or Vercel |
| Feature flags | Not in use | Excluded | — | Not needed for template |

---

## 8. Data, API, Events, and Storage Plan

- **Source of truth per domain:** All content from `config/*.js` — no runtime data fetching
- **Database ownership:** None — not applicable
- **API boundaries:** Single endpoint: `POST /api/booking`
- **Versioning:** Not applicable for single endpoint template
- **Events:** None — no webhooks, no event bus
- **Rate limiting:** In-memory counter on booking endpoint (10 req/IP/hour)
- **File/asset storage:** `public/` static files only; no upload pipeline
- **File lifecycle:** Operator-managed static assets; no retention policy needed

Full API contract: [api-and-data/README.md](./api-and-data/README.md)

---

## 9. Integrations, Billing, and Background Processing

### Integration Plan

| Integration | Purpose | Required | Failure / Fallback |
|---|---|---|---|
| Resend | Booking notification emails | Optional (P1) | Fail-soft: log payload, return 200 |

All other integrations: excluded from template scope.

### Billing

Not applicable — this is a site template, not a SaaS platform.

### Background Jobs

Not applicable — no async processing.

---

## 10. Frontend Governance, UX, Analytics, and Error Strategy

- **Route and IA plan:** 18 routes — see [shared-contracts/README.md](./shared-contracts/README.md)
- **Layout and shell ownership:** `components/layout/` — Header, Footer, Navbar, StickyCallButton
- **Design system governance:** CSS Modules + `config/theme.config.js` tokens; no Tailwind; no inline styles
- **Accessibility baseline:** WCAG AA; semantic HTML; skip-to-content; keyboard accessible; `aria-label` on icon-only buttons
- **Localization:** English only; no i18n in scope
- **Error UX:** Custom 404; form field errors; booking form server-error state; empty careers state
- **Analytics:** Deferred to v2; document Vercel Analytics as recommended path
- **Sensitive-data exclusions:** No PII sent to analytics (no analytics instrumented in template)

Full frontend plan: [frontend/frontend-plan.md](./frontend/frontend-plan.md)

---

## 11. Performance, Caching, Observability, and Reliability

- **Performance targets:** Lighthouse ≥85 Performance, ≥90 A11y, ≥90 Best Practices, ≥95 SEO
- **Rendering strategy:** Static generation (SSG) for all pages; `generateStaticParams` for service detail pages
- **CDN and edge caching:** Vercel Edge Network handles all static asset caching automatically
- **Cache invalidation:** Rebuild on deploy (no ISR needed — config changes require a new deploy by design)
- **Error monitoring:** Deferred v2 (Vercel built-in error logging available)
- **Logging:** Server-side `console.log` for booking payload when email is skipped
- **Reliability:** Single `POST /api/booking` endpoint; no SLA required for template

---

## 12. Security, Privacy, Compliance, Abuse Protection, and Recovery

- **Security boundary:** Public site; no auth; attack surface is booking form only
- **Secret handling:** `RESEND_API_KEY`, `BOOKING_TO_EMAIL` in `.env.local` / Vercel env only; never client-side
- **Privacy:** No data stored; booking submissions exist in transit only; legal pages `noindex`
- **Compliance:** Template ships with placeholder legal text + attorney-review warning; compliance is operator's responsibility
- **Abuse protection:** Server-side validation, honeypot, IP rate limiting (see [security/README.md](./security/README.md))
- **Backup/recovery:** Not applicable — no database; code in git

---

## 13. Environment, CI/CD, Release Control, and Rollback

- **Environments:** Local (`.env.local`), Preview (Vercel PR deploy), Production (Vercel `main` deploy)
- **Secrets isolation:** Per-environment Vercel env groups
- **Build pipeline:** `npm run build` — zero errors/warnings gate
- **Preview deploys:** Automatic on every branch push via Vercel
- **Release trigger:** Push to `main`
- **Rollback:** Vercel instant rollback via dashboard
- **Post-deploy validation:** Link crawl + booking form test + sitemap check

Full devops plan: [devops/README.md](./devops/README.md)

---

## 14. Admin, Internal Operations, and Support Controls

**Not applicable.** No admin dashboard. No internal tooling. No operator-facing UI. Operators manage the site by editing `config/*.js` files and redeploying.

---

## 15. Global Site and Platform Invariants

1. **Footer copyright:** `© {year} {siteConfig.brand.name}. All rights reserved.` — sourced from `siteConfig.brand.name` only
2. **Brand single source:** `config/site.config.js` → `brand.name`, `brand.phone` — one change rebrands the whole site
3. **Service slug authority:** `config/services.config.js` → `items[].slug` — all nav, footer, and CTA hrefs derive from this
4. **Zero 404 rule:** Every link in nav, footer, hero, and section CTAs must resolve to a real page
5. **Config-only copy rule:** No hardcoded visible text in components — all copy from `config/*.js`
6. **Fail-soft booking rule:** API route returns 200 and logs payload when email env vars are absent
7. **CSS Modules only:** No Tailwind, no global component classes, no inline style objects
8. **Emoji icons:** Keep through P2; document SVG migration path for v2
9. **No photography shipped:** Gradient hero backgrounds; operators add their own images
10. **Legal pages noindex:** `/privacy`, `/terms`, `/license` carry `robots: { index: false }`

---

## 16. E2E Phase Plan

### Phase P0 — Shared Contracts and Route Stubs

**Guide decision sources:** Shared contracts folder
**Folders or files created/updated:** `shared-contracts/`, `app/*/page.jsx` (11 new stubs), `app/not-found.jsx`, `config/site.config.js` (modified), `config/pages.config.js` (modified), `config/legal.config.js` (new), `config/careers.config.js` (new)
**Inputs:** `DOC/master-plan/plan.md`, existing codebase audit
**Required decisions:** Config collision resolution (complete — documented in shared-contracts)
**Deliverables:** Zero 404s on all nav/footer/hero/CTA links; `npm run build` clean
**Reuse targets:** All existing layout and section components
**Entry criteria:** Stage A documentation complete
**Exit criteria:** QA Gates 1, 2, and 7 pass
**Risks and fallback:** Config collision is the highest-risk step; if components are deeply coupled to `pages.config.js` brand strings, a search-and-replace pass is the fallback

---

### Phase P1 — Depth, Conversion, and Booking API

**Guide decision sources:** `api-and-data/README.md`, `backend/README.md`, `security/README.md`, `frontend/page-services-slug.md`, `frontend/page-booking.md`
**Folders or files created/updated:** `app/api/booking/route.js`, `components/features/BookingForm.jsx` (extended), `components/shared/FAQ.jsx`, `components/shared/JsonLd.jsx`, `components/shared/Breadcrumb.jsx`, `config/services.config.js` (extended with detail blocks)
**Inputs:** P0 complete; contracts from api-and-data and security folders
**Required decisions:** Resend integration confirmed; in-memory rate limiting confirmed; honeypot approach confirmed
**Deliverables:** Service detail pages SEO-grade with schema; booking form submits to live API; happy paths verified
**Entry criteria:** P0 complete — zero 404s, build clean
**Exit criteria:** QA Gates 3 and 4 pass
**Risks and fallback:** Resend rate limits in test — use fail-soft path for verification; if schema validation fails, check JSON-LD structure via Google Rich Results Test

---

### Phase P2 — Polish and Infrastructure

**Guide decision sources:** `devops/README.md`, `qa/README.md`, `frontend/frontend-plan.md`
**Folders or files created/updated:** `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.jsx`, `public/` assets, `app/layout.jsx` (extended metadata), `/careers` and legal pages at full depth
**Inputs:** P1 complete
**Required decisions:** OG image design; public asset placeholder strategy; Lighthouse target thresholds
**Deliverables:** Sitemap valid; Lighthouse targets met; rebrand smoke test passes; full public asset set
**Entry criteria:** P1 complete — booking API live, service pages SEO-grade
**Exit criteria:** QA Gates 5, 6 pass; all 7 gates pass (full release readiness)
**Risks and fallback:** Lighthouse Performance < 85 — audit CLS on hero stats bar and image layout shifts; fix specific flagged elements

---

## 17. Execution-Ready Backlog

Full task list with sequencing: [tasks/tasks.md](./tasks/tasks.md)

**P0 tasks:** T0.1 → T0.3 (config collision) → T1.1 → T1.8 (route stubs) → T2.1 (404 page) → T3.1 → T3.4 (verification)

**P1 tasks:** T4.1 → T4.7 (service detail SEO) → T5.1 → T5.6 (booking API) → T6.1 → T6.7 (form wire) → T7.1 → T7.3 (inner page depth) → T8.1 → T8.4 (verification)

**P2 tasks:** T9.1 → T9.5 (SEO infrastructure) → T10.1 → T10.3 (public assets) → T11.1 → T11.2 (careers/legal depth) → T12.1 → T12.4 (Lighthouse) → T13.1 → T13.5 (final verification and deploy)

---

## 18. Open Decisions

| Decision | Current Recommendation | Revisit When |
|---|---|---|
| Icons: emoji vs Lucide SVG | Keep emoji through P2; SVG in v2 | Template v2 |
| Hero photography | Gradient heroes; operators add own | Operator configuration |
| Reviews source | 12 hardcoded testimonials; document Google Places upgrade | Template v2 |
| Blog/content marketing | Out of scope; flag for v2 | Template v2 |
| Form spam: CAPTCHA | Honeypot + rate limit for template; Turnstile as operator toggle | Operator production concern |
| Analytics | Deferred; document Vercel Analytics | Operator post-launch |
| TypeScript migration | Not in scope; template is JS/JSX | Template v2 |
