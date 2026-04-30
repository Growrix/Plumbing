# Page: Home `/`

## Route Goal

Primary conversion and credibility page. Visitors land here from search, ads, and direct. Convert to booking or call within the first scroll.

## Status

✅ Built — review for config-collision fixes and broken CTAs only.

## Primary Audience Intent

"Find a trusted local plumber fast" — urgency-driven or research-driven.

## Section-by-Section Plan

| Order | Section | Component | Config Source | Notes |
|---|---|---|---|---|
| 1 | Emergency Banner | `EmergencyBanner.jsx` | `siteConfig.emergencyBanner` | Shown only when `show: true` |
| 2 | Hero | `Hero.jsx` | `siteConfig.hero` | Stats bar, dual CTA, badge |
| 3 | Trust Bar | `TrustBar.jsx` | `siteConfig.trustBar` | Icon + label strips |
| 4 | Services Grid | `Services.jsx` | `servicesConfig.items` | Fix CTAs → canonical slugs |
| 5 | How It Works | `HowItWorks.jsx` | `pagesConfig.howItWorks` | 3-step process |
| 6 | Pricing/Plans | `Plans.jsx` | `pricingConfig` | Links to `/plans` |
| 7 | Testimonials | `Testimonials.jsx` | `testimonialsConfig` | Star rating display |
| 8 | CTA Section | `CTASection.jsx` | `siteConfig.hero.primaryCta` | Bottom conversion block |

## Conversion Surfaces

- Hero primary CTA → `/booking`
- Hero secondary CTA → `tel:{phone}`
- Services grid cards → `/services/[slug]`
- Services "View All" → `/services`
- Plans CTA → `/booking?tier=`
- Final CTA → `/booking`

## P0 Fix Required

- Services grid card `href` values must use `servicesConfig.items[].slug` not `siteConfig.services.items`
- Verify "View All Services" links to `/services` (route being added)

## States

| State | Behavior |
|---|---|
| Default | Full page renders from config |
| Emergency banner hidden | `siteConfig.emergencyBanner.show = false` collapses the bar cleanly |

## Responsive Behavior

- Hero: stacked on mobile; side-by-side stat bar 2×2 on mobile, row on desktop
- Services grid: 1 col → 2 col → 3 col
- Plans: 1 col → 3 col
