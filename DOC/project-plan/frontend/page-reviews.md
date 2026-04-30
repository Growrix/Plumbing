# Page: Reviews `/reviews`

## Route Goal

Social proof at depth. Show aggregate rating, platform breakdown, and full testimonial grid. Invite visitors to leave a review.

## Status

❌ Missing — create `app/reviews/page.jsx`

## Primary Audience Intent

"What do other customers say?" — trust-validation and confirmation intent.

## Section-by-Section Plan

| Order | Section | Component | Config Source | Notes |
|---|---|---|---|---|
| 1 | Hero with Aggregate Rating | Inline hero | `testimonialsConfig.aggregate` | Stars + count + "Rated X/5 from N reviews" |
| 2 | Platform Breakdown | Inline stat grid | `testimonialsConfig.platforms` | Google / Yelp / Facebook review counts |
| 3 | Full Testimonial Grid | `Testimonials.jsx` extended | `testimonialsConfig.items` | Expand to ~12 items in config |
| 4 | Leave a Review CTA | Inline CTA | `testimonialsConfig.reviewCta` | External link → Google reviews URL |
| 5 | Bottom CTA | `CTASection.jsx` | `siteConfig.nav.cta` | → `/booking` |

## Conversion Surfaces

- "Leave a review" CTA → external Google reviews URL (operator configures in `testimonialsConfig`)
- Bottom CTA → `/booking`
- Sticky call button → `tel:{phone}`

## Metadata

```js
export const metadata = {
  title: `Customer Reviews | ${siteConfig.brand.name}`,
  description: `Read verified customer reviews for ${siteConfig.brand.name} in ${siteConfig.brand.serviceArea}.`,
}
```

## Schema.org

`AggregateRating` JSON-LD from `testimonialsConfig.aggregate`.

## Config Extension Required

`config/testimonials.config.js` needs:
- `aggregate: { rating, count }` — overall star rating and review count
- `platforms: [{ name, rating, count, url }]` — per-platform breakdown
- `reviewCta: { label, href }` — Google review link
- `items` expanded to ~12 testimonials

## States

| State | Behavior |
|---|---|
| Default | Full page renders |
| Empty testimonials | Grid hidden; "Be our first reviewer" message |

## Responsive Behavior

- Platform stat grid: 1 col → 3 col
- Testimonial grid: 1 col → 2 col → 3 col
- Each testimonial card: consistent min-height
