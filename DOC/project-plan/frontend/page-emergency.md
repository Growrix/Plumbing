# Page: Emergency `/emergency`

## Route Goal

Immediate triage and dispatch. Speed and clarity — reduce friction to calling.

## Status

✅ Built — review for config-collision fixes only.

## Primary Audience Intent

"I have a plumbing emergency right now" — maximum urgency.

## Section-by-Section Plan

| Order | Section | Component | Config Source |
|---|---|---|---|
| 1 | Emergency Hero | Inline | `pagesConfig.emergency.hero` |
| 2 | Large Call CTA | Inline | `siteConfig.brand.phone` |
| 3 | Emergency Types | Inline grid | `pagesConfig.emergency.types` |
| 4 | Response Promise | Inline | `pagesConfig.emergency.promise` |
| 5 | Steps | Inline | `pagesConfig.emergency.steps` |

## Conversion Surfaces

- All CTAs → `tel:{phone}` (primary) or `/booking`

## P0 Fix Required

- Verify all phone values from `siteConfig.brand.phone` / `siteConfig.contact.phoneHref`
- Not hardcoded from `pages.config.js`
