# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains an Australian plumber company website (FlowMate Plumbing, Sydney) and an API server.

## Artifacts

### `artifacts/plumber-web` — FlowMate Plumbing Website
A complete, production-ready React + Vite + TailwindCSS v4 marketing website for an Australian plumbing company.

**Stack:**
- React + Vite (no SSR), wouter for routing
- TailwindCSS v4 + shadcn/ui components
- Framer Motion for animations
- react-intersection-observer for scroll-reveal
- react-hook-form + zod for forms
- lucide-react for icons

**Design System:**
- Primary: Deep navy #0D1F3C (217 73% 15%)
- Accent: Electric blue #2563EB (221 83% 53%)
- Emergency: Red #EF4444 (0 84% 60%)
- Fonts: Bricolage Grotesque (headings) + DM Sans (body)

**Architecture (config-driven — zero hardcoded strings in components):**
- `src/config/site.config.ts` — brand, nav, hero, footer, emergency, trust bar
- `src/config/services.config.ts` — 8 services with full content
- `src/config/pricing.config.ts` — 3 service tiers + 3 maintenance plans + FAQ
- `src/config/testimonials.config.ts` — 9 reviews with platform/rating data
- `src/config/booking.config.ts` — form options (services, urgency, time windows)
- `src/config/pages.config.ts` — about, careers, legal (privacy/terms/license) content

**Pages (13+ routes):**
- `/` — Homepage (hero with floating orbs, trust bar, services, how-it-works, testimonials, plans teaser, CTA)
- `/services` — All services with category filter tabs
- `/services/:slug` — Individual service detail with booking card
- `/about` — Company story, values, stats with count-up
- `/reviews` — All reviews with platform filter
- `/plans` — Maintenance plans + service tiers + FAQ accordion
- `/emergency` — Red-themed emergency page with safety tips accordion
- `/booking` — Full booking form (react-hook-form + zod, pre-fills from query params)
- `/contact` — Contact form + info card with hours
- `/careers` — Benefits grid + job openings
- `/privacy`, `/terms`, `/license` — Legal pages
- `*` — 404 page with floating water-drop shapes

**Shared Components:**
- Layout: `Header`, `Footer`, `EmergencyBanner`, `StickyCallButton`, `RootLayout`
- Shared: `AnimatedSection`, `ServiceCard`, `ReviewCard`, `PlanCard`, `PageHero`, `CTASection`, `SEOHead`
- Hooks: `useCountUp` for animated stats
- Utils: `src/lib/icons.ts` maps icon name strings to lucide-react components

**Mobile Features:**
- Full-screen hamburger drawer (Framer Motion spring animation)
- Sticky call button (mobile only, red pulsing)
- Horizontal scroll snap for filter tabs and testimonials
- Min 44px touch targets throughout

### `artifacts/api-server` — API Server
Express 5 + PostgreSQL API server (not currently used by the plumber site).

## Stack (Monorepo)

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/plumber-web run dev` — run the plumber website dev server
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
