# Page: About `/about`

## Route Goal

Build trust. Tell the founder story, show company values, team scale, and certifications. Convert to booking.

## Status

❌ Missing — create `app/about/page.jsx`

## Primary Audience Intent

"Who are these people — can I trust them in my home?" — trust-validation intent.

## Section-by-Section Plan

| Order | Section | Component | Config Source | Notes |
|---|---|---|---|---|
| 1 | Hero | Inline hero | `pagesConfig.about.hero` | Headline + subheadline |
| 2 | Our Story | Inline section | `pagesConfig.about.story` | 2–3 paragraphs |
| 3 | Values Grid | Inline grid | `pagesConfig.about.values` | Icon + title + desc cards |
| 4 | Team Stats | Inline stat bar | `pagesConfig.about.teamStats` | "15+ years", "4,800+ customers" etc. |
| 5 | Certifications | Inline strip | `pagesConfig.about.certifications` | Badge list — licensed, insured, certified |
| 6 | FAQ | `FAQ.jsx` (new) | `pagesConfig.about.faq` | Optional — if config has FAQ entries |
| 7 | CTA | `CTASection.jsx` | `siteConfig.nav.cta` | → `/booking` |

## Conversion Surfaces

- Hero CTA → `/booking`
- Bottom CTA → `/booking`
- Sticky call button → `tel:{phone}`

## Metadata

```js
export const metadata = {
  title: `About Us | ${siteConfig.brand.name}`,
  description: `Learn about ${siteConfig.brand.name} — trusted plumbers in ${siteConfig.brand.serviceArea} since ${siteConfig.brand.founded}.`,
}
```

## Schema.org

`LocalBusiness` JSON-LD with full address and founding year.

## States

| State | Behavior |
|---|---|
| Default | Full page renders |
| No FAQ entries | FAQ section hidden |

## Responsive Behavior

- Values grid: 1 col → 2 col → 3 col
- Stats: 2×2 on mobile → row on desktop
- Certifications: horizontal scroll on mobile
