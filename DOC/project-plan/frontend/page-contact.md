# Page: Contact `/contact`

## Route Goal

Answer "where are they / how do I reach them." Different from `/booking` — this is reference + general inquiry, not scheduling.

## Status

✅ Built — review for config-collision fixes only.

## Primary Audience Intent

"How do I contact this company?" — reference, directions, general inquiry.

## Section-by-Section Plan

| Order | Section | Component | Config Source |
|---|---|---|---|
| 1 | Hero | Inline | `pagesConfig.contact.hero` |
| 2 | Contact Info Cards | Inline grid | `siteConfig.contact` + `siteConfig.brand` |
| 3 | Map Embed | Iframe or static map | `siteConfig.brand.address` |
| 4 | Business Hours | Inline table | `siteConfig.contact.hours` |
| 5 | General Inquiry Form | Inline form | `pagesConfig.contact.form` |

## Conversion Surfaces

- Phone links → `tel:{phone}`
- Email links → `mailto:{email}`
- "Book a service" → `/booking`

## P0 Fix Required

- Verify all phone/email values come from `siteConfig.contact` — not `pages.config.js` or hardcoded
