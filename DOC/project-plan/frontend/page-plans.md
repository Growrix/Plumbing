# Page: Maintenance Plans `/plans`

## Route Goal

Convert recurring revenue. Show the 3-tier maintenance plan comparison table, feature matrix, and FAQ. Support deep-linking to a specific tier.

## Status

❌ Missing — create `app/plans/page.jsx`

## Primary Audience Intent

"What's included in your maintenance plan — is it worth it?" — high-intent, value-comparison intent.

## Section-by-Section Plan

| Order | Section | Component | Config Source | Notes |
|---|---|---|---|---|
| 1 | Hero | Inline hero | `pricingConfig.page` | Headline + subheadline + badge |
| 2 | 3-Tier Comparison | `PricingTiers.jsx` | `pricingConfig.tiers` | `?plan=silver\|gold\|platinum` query param pre-highlights tier |
| 3 | Feature Matrix | Inline table | `pricingConfig.featureMatrix` | Row = feature, Col = tier; ✓ / — |
| 4 | FAQ | `FAQ.jsx` (new) | `pricingConfig.faq` | 4–5 common plan questions |
| 5 | Bottom CTA | `CTASection.jsx` | `siteConfig.nav.cta` | → `/booking?tier={plan}` |

## Conversion Surfaces

- Tier CTA buttons → `/booking?tier=silver|gold|platinum`
- Bottom CTA → `/booking`
- Sticky call button → `tel:{phone}`

## Query Param Behavior

`?plan=silver|gold|platinum` — client-side: read `searchParams`, highlight/scroll to matching tier card on mount.

## Metadata

```js
export const metadata = {
  title: `Maintenance Plans | ${siteConfig.brand.name}`,
  description: `Protect your home with a ${siteConfig.brand.name} maintenance plan. Choose from Silver, Gold, and Platinum coverage.`,
}
```

## States

| State | Behavior |
|---|---|
| Default (no `?plan`) | All tiers shown equally; "Most Popular" tier visually accented if flagged |
| `?plan=gold` | Gold tier card highlighted; page scrolls to pricing section |
| No feature matrix in config | Feature matrix section skipped cleanly |

## Responsive Behavior

- Pricing tiers: 1 col → 3 col (stacked on mobile, side-by-side on desktop)
- Feature matrix: horizontal scroll on mobile
- FAQ: full width accordion
