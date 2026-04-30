# Shared Contracts

## Purpose

This folder resolves all cross-cutting decisions that every other role folder must respect before planning or implementing independently. It owns:

- Config file source-of-truth assignments
- Canonical route registry and slug list
- Three-config collision resolution
- Global site invariants

---

## Three-Config Collision Resolution

The project currently has three config files with overlapping and conflicting authority. This is **Task 0** and must be resolved before any other work proceeds.

| Config | Wins | Loses |
|---|---|---|
| `config/site.config.js` | Brand, contact, nav, hero, trust bar, emergency banner, SEO defaults, footer | Old `services.items` 6-item list — delete it |
| `config/services.config.js` | Full service catalog (8 items), slugs, categories, detail blocks | Nothing — this is the catalog authority |
| `config/pages.config.js` | Per-page content, about story, FAQ, emergency types, homepage section order | Duplicate `navConfig` and brand strings — strip them; reference `siteConfig` instead |

### Required Changes to Fix the Collision

1. **`config/site.config.js`**: Remove `services.items` array (the old 6-item list). Update `nav.links` hrefs to match the 8 canonical slugs from `servicesConfig`.
2. **`config/pages.config.js`**: Remove `navConfig`. Remove any hardcoded brand name or phone numbers. Import or reference `siteConfig` for brand values.
3. **`config/services.config.js`**: Add `detail` block to each item (for service detail pages).

---

## Canonical Service Slugs

These are the 8 authoritative slugs from `config/services.config.js`. All nav links, footer links, CTAs, and page routes must use exactly these slugs:

| Slug | Name |
|---|---|
| `emergency-plumbing` | Emergency Plumbing |
| `drain-cleaning` | Drain Cleaning |
| `leak-repair` | Leak Detection & Repair |
| `water-heater` | Water Heater Services |
| `pipe-services` | Pipe Services |
| `sewer-services` | Sewer Services |
| `bathroom-kitchen` | Bathroom & Kitchen Plumbing |
| `inspection` | Plumbing Inspection |

---

## Route Registry

| Route | Status | File | Priority |
|---|---|---|---|
| `/` | ✅ Built | `app/page.jsx` | — |
| `/contact` | ✅ Built | `app/contact/page.jsx` | — |
| `/emergency` | ✅ Built | `app/emergency/page.jsx` | — |
| `/services` | ✅ Built | `app/services/page.jsx` | P0 |
| `/services/[slug]` | ✅ Built | `app/services/[slug]/page.jsx` | P0 |
| `/about` | ✅ Built | `app/about/page.jsx` | P0 |
| `/reviews` | ✅ Built | `app/reviews/page.jsx` | P0 |
| `/plans` | ✅ Built | `app/plans/page.jsx` | P0 |
| `/booking` | ✅ Built | `app/booking/page.jsx` | P0 |
| `/careers` | ✅ Built | `app/careers/page.jsx` | P0 |
| `/privacy` | ✅ Built | `app/privacy/page.jsx` | P0 |
| `/terms` | ✅ Built | `app/terms/page.jsx` | P0 |
| `/license` | ✅ Built | `app/license/page.jsx` | P0 |
| `app/not-found.jsx` | ✅ Built | `app/not-found.jsx` | P0 |
| `/sitemap.xml` | ❌ Missing | `app/sitemap.ts` | P2 |
| `/robots.txt` | ❌ Missing | `app/robots.ts` | P2 |
| `/api/booking` | ❌ Missing | `app/api/booking/route.js` | P1 |

---

## Global Site Invariants

These rules are non-negotiable across all pages and components:

1. **Footer copyright**: `© {year} {siteConfig.brand.name}. All rights reserved.`
2. **Brand source of truth**: `config/site.config.js → brand.name` and `brand.phone`. One change rebrands the whole site.
3. **Service catalog source of truth**: `config/services.config.js → items[].slug`. Nav and footer links must derive from this.
4. **Zero 404 rule**: Every link in header, footer, hero, and section CTAs must resolve.
5. **Config-only copy rule**: No hardcoded visible text in components.
6. **Fail-soft booking rule**: If `RESEND_API_KEY` and `BOOKING_TO_EMAIL` env vars are not set, the API route logs the payload server-side and returns HTTP 200 with a success payload. The template works out of the box without email configuration.

---

## New Config Files Required

| File | Purpose |
|---|---|
| `config/legal.config.js` | Content for `/privacy`, `/terms`, `/license` pages with `{{brand.*}}` tokens |
| `config/careers.config.js` | Job openings list; empty array renders "we're not hiring right now" |
