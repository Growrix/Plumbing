# Page: Service Detail `/services/[slug]` (Dynamic Template)

## Route Goal

Rank for local + service intent searches ("drain cleaning Houston TX"). Convert the visitor to book or call.

## Status

❌ Missing — create `app/services/[slug]/page.jsx` with `generateStaticParams`

## Primary Audience Intent

"I need [specific service] — is this the right company?" — high intent, near-bottom of funnel.

## File

`app/services/[slug]/page.jsx`

`generateStaticParams` from `servicesConfig.items.map(i => ({ slug: i.slug }))`

Unknown slugs → `notFound()` → custom 404.

## Section-by-Section Plan

| Order | Section | Component | Config Source | Notes |
|---|---|---|---|---|
| 1 | Breadcrumb | `Breadcrumb.jsx` (new) | Static trail: Home > Services > {name} | Schema `BreadcrumbList` embedded |
| 2 | Service Hero | Inline hero | `service.name`, `service.shortDesc` | Dual CTA: Book + Call. Hero image from `service.detail.heroImage` or CSS gradient fallback |
| 3 | What's Included | Highlights list | `service.highlights` | Icon-prefixed bullets |
| 4 | When You Need This | Problem signs | `service.detail.problemSigns` | "Signs you need {service}" — SEO content |
| 5 | Our Process | 4-step process | `service.detail.process` | Step number + title + desc |
| 6 | Pricing Snapshot | Inline block | `pricingConfig` filtered to relevant tier | Links to `/plans` for full details |
| 7 | FAQ Accordion | `FAQ.jsx` (new) | `service.detail.faq` | 3–5 Q&A; renders `FAQPage` schema |
| 8 | Related Services | Card row | `service.detail.relatedSlugs` | Look up cards from `servicesConfig.items` |
| 9 | Final CTA | `CTASection.jsx` | `siteConfig.nav.cta` | → `/booking?service={slug}` |

## Conversion Surfaces

- Hero primary CTA → `/booking?service={slug}`
- Hero secondary CTA → `tel:{phone}`
- Final CTA → `/booking?service={slug}`

## Schema.org (P1 — required for SEO grade)

Inject via `<JsonLd>` helper:
- `Service` — name, description, provider (LocalBusiness)
- `FAQPage` — from `service.detail.faq`
- `LocalBusiness` — from `siteConfig.brand`

## Metadata (per-page dynamic)

```js
export async function generateMetadata({ params }) {
  const service = servicesConfig.items.find(s => s.slug === params.slug)
  return {
    title: `${service.name} in ${siteConfig.brand.serviceArea} | ${siteConfig.brand.name}`,
    description: service.detail.longDesc.slice(0, 160),
    openGraph: { ... }
  }
}
```

## Required Config Extension

Each `servicesConfig.items[i]` needs a `detail` block:

```js
detail: {
  longDesc: "",           // 1–2 SEO paragraphs
  problemSigns: [],       // "When you need this" bullet list
  process: [             // 4-step process
    { step: 1, title: "", desc: "" }
  ],
  faq: [                 // 3–5 Q&A
    { q: "", a: "" }
  ],
  relatedSlugs: [],      // 2–3 other service slugs
  heroImage: null,        // optional path; null = CSS gradient
}
```

## States

| State | Behavior |
|---|---|
| Default | Full page renders for valid slug |
| Unknown slug | `notFound()` → custom 404 |
| `heroImage: null` | CSS gradient background renders |
| Empty `relatedSlugs` | Related services row hidden gracefully |

## Responsive Behavior

- Breadcrumb: wraps on mobile; 1-line on desktop
- Hero: stacked on mobile
- Process steps: 1 col → 2 col → 4 col
- FAQ: full width, accordion toggle
- Related services: horizontal scroll on mobile
