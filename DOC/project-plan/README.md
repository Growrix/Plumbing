# Plumbing Template — Project Plan

## Purpose

This folder is the single source of truth for all planning on the Plumbing Template project. Every implementation decision must trace back to a document in this folder tree before code is written.

The master plan brief lives at [DOC/master-plan/plan.md](../master-plan/plan.md).
The canonical E2E planning artifact is [plumbing-template-e2e-plan.md](./plumbing-template-e2e-plan.md).

---

## Folder Ownership Map

| Folder | Status | Owns |
|---|---|---|
| [shared-contracts/](./shared-contracts/) | Active | Route registry, slug contracts, global invariants, config source-of-truth rules |
| [frontend/](./frontend/) | Active | All public pages, component architecture, page-level plans, SEO strategy |
| [api-and-data/](./api-and-data/) | Active | Booking API route, form contracts, email integration, sitemap/robots |
| [backend/](./backend/) | Active | Resend integration, fail-soft email strategy, API route reliability |
| [security/](./security/) | Active | Form validation, rate limiting, honeypot, env secret handling |
| [devops/](./devops/) | Active | Build pipeline, Vercel deployment, env management, preview deploys |
| [qa/](./qa/) | Active | Verification checklist, Lighthouse gates, link crawl, schema validation |
| [tasks/](./tasks/) | Active | Execution tracker — phases P0, P1, P2 |

---

## Excluded Folders (Intentional)

| Folder | Reason |
|---|---|
| `supabase/` | No database — all data lives in `config/*.js` |
| `cms-content-operations/` | No headless CMS — content is operator-edited config files |
| `admin-dashboard/` | No admin UI — operators edit config files directly |
| `mobile/` | No native mobile scope |
| `analytics/` | Deferred to v2; placeholder noted in devops plan |
| `search/` | No search product; SEO handled via static metadata and schema.org |

---

## Active Planning Phase

**P0 — Kill all 404s** (current)

See [tasks/tasks.md](./tasks/tasks.md) for the full execution backlog.

---

## Key Global Invariants

- `config/site.config.js` is the single source of truth for brand, contact, nav, hero, and SEO defaults.
- `config/services.config.js` is the single source of truth for the service catalog and all service slugs.
- `config/pages.config.js` owns per-page content only — no duplicate brand strings or nav items.
- Footer copyright string: **© {year} {brand.name}. All rights reserved.**
- Zero 404 rule: every link in header, footer, hero, and all section CTAs must resolve to a real page.
- Config-only copy rule: no hardcoded visible text in components — all copy from `config/*.js`.
