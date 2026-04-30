# Page: Services Hub `/services`

## Route Goal

Discovery. Let visitors browse the full service catalog, filter by category, and click through to individual service detail pages.

## Status

❌ Missing — create `app/services/page.jsx`

## Primary Audience Intent

"What plumbing services do you offer?" — research and category browsing.

## Section-by-Section Plan

| Order | Section | Component | Config Source | Notes |
|---|---|---|---|---|
| 1 | Page Hero | Inline section or `Hero.jsx` variant | `servicesConfig.page` | badge, heading, subheading |
| 2 | Category Filter Chips | New inline component | `servicesConfig.categories` | Client component; filters grid below |
| 3 | Service Card Grid | `ServicesGrid.jsx` | `servicesConfig.items` | All 8 items; filtered by active category chip |
| 4 | Trust Bar | `TrustBar.jsx` | `siteConfig.trustBar` | Reuse existing component |
| 5 | Bottom CTA | `CTASection.jsx` | `siteConfig.nav.cta` | → `/booking` |

## Conversion Surfaces

- Service card → `/services/[slug]` (detail page)
- Bottom CTA → `/booking`
- Sticky call button (global) → `tel:{phone}`

## Metadata

```js
export const metadata = {
  title: `All Plumbing Services | ${siteConfig.brand.name}`,
  description: servicesConfig.page.subheading,
}
```

## States

| State | Behavior |
|---|---|
| Default (no filter) | All 8 service cards visible |
| Category filtered | Cards filtered to active category; "All" chip resets |
| No results for category | Defensive: not possible with static config, but render "No services in this category" if config produces empty |

## Responsive Behavior

- Filter chips: horizontal scroll on mobile
- Service grid: 1 col mobile → 2 col tablet → 3–4 col desktop
- Cards: consistent height with flexbox stretch

## Notes

- Category filter is a client-side state toggle — no server round-trip
- `featured: true` items may be visually highlighted (badge or card accent)
- `badge` field on items renders a small label badge on the card
