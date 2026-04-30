# Page: Careers `/careers`

## Route Goal

Light recruiting page. Present benefits, list open roles, and provide a resume submission path. An empty roles list is acceptable and renders gracefully.

## Status

❌ Missing — create `app/careers/page.jsx` + `config/careers.config.js`

## Primary Audience Intent

"Are they hiring? What's it like to work there?" — recruitment interest.

## Section-by-Section Plan

| Order | Section | Component | Config Source | Notes |
|---|---|---|---|---|
| 1 | Hero | Inline hero | `careersConfig.hero` | Headline + subheadline |
| 2 | Why Work Here | Inline benefits grid | `careersConfig.benefits` | Icon + title + desc |
| 3 | Open Roles | Inline list | `careersConfig.openings` | Empty array → "We're not hiring right now — send us your resume" |
| 4 | Resume CTA | Inline CTA | `careersConfig.resumeCta` | mailto link to `siteConfig.brand.email` or dedicated email |

## Conversion Surfaces

- Open roles apply button → `mailto:` or external job board link (per opening)
- Resume CTA → `mailto:{email}`

## Config to Create: `config/careers.config.js`

```js
export const careersConfig = {
  hero: {
    headline: "Join the AquaFix Pro Team",
    subheadline: "We hire skilled plumbers and support staff who share our commitment to quality."
  },
  benefits: [
    { icon: "💰", title: "Competitive Pay", desc: "Top-of-market wages plus performance bonuses." },
    { icon: "🏥", title: "Health Benefits", desc: "Medical, dental, and vision coverage for you and your family." },
    { icon: "📚", title: "Training & Certs", desc: "We fund your continuing education and certification upgrades." },
    { icon: "🚗", title: "Company Vehicle", desc: "Fully equipped service truck for technician roles." },
  ],
  openings: [],  // Empty = "not hiring" message renders
  resumeCta: {
    label: "Send Us Your Resume",
    email: "careers@aquafixpro.com",
  },
}
```

## States

| State | Behavior |
|---|---|
| Default with openings | Role list renders with apply links |
| `openings: []` | "We're not currently hiring. Send us your resume anyway — we'd love to hear from you." |

## Responsive Behavior

- Benefits: 1 col → 2 col → 4 col
- Roles list: full width, stacked cards
