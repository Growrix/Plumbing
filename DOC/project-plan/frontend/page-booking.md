# Page: Booking `/booking`

## Route Goal

Primary conversion endpoint. Schedule a technician. Pre-fill from query params. Submit to `/api/booking` route. Works without email config (fail-soft).

## Status

❌ Missing — create `app/booking/page.jsx` + wire `BookingForm.jsx` to API

## Primary Audience Intent

"I want to book a plumber now" — maximum intent, bottom of funnel.

## Section-by-Section Plan

| Order | Section | Component | Config Source | Notes |
|---|---|---|---|---|
| 1 | Hero / Trust Line | Inline section | `bookingConfig.hero` | "We respond in 15 min" + trust badges |
| 2 | Booking Form | `BookingForm.jsx` (wired) | `bookingConfig.fields` | Left column; submits to `POST /api/booking` |
| 3 | Sidebar | Inline aside | `siteConfig.contact` + `bookingConfig.sidebar` | Phone, hours, response promise — right column desktop |
| 4 | What to Expect | Inline steps | `bookingConfig.steps` | 3–4 steps post-booking confirmation |

## Conversion Surfaces

- Form submit → `POST /api/booking` → success state
- Sidebar phone → `tel:{phone}`

## Query Param Pre-fill

- `?tier=basic|standard|premium` — pre-selects plan tier in form select
- `?service=drain-cleaning` — pre-selects service type in form select

Both are client-side: read `useSearchParams()`, set form initial values on mount.

## Form Fields (from `bookingConfig.fields`)

- Name (required)
- Phone (required)
- Email (required)
- Service type (select from `servicesConfig.items`)
- Preferred date
- Preferred time window
- Message / description of problem
- Honeypot field (hidden — anti-spam, see security plan)

## API Contract

`POST /api/booking`

**Request body:**
```json
{
  "name": "string",
  "phone": "string",
  "email": "string",
  "service": "slug-string",
  "date": "YYYY-MM-DD",
  "timeWindow": "string",
  "message": "string"
}
```

**Success (200):**
```json
{ "success": true, "message": "Booking received" }
```

**Validation error (400):**
```json
{ "success": false, "errors": { "field": "message" } }
```

See [api-and-data/README.md](../api-and-data/README.md) for full API contract.

## States

| State | Behavior |
|---|---|
| Default | Empty form |
| Pre-filled via query params | Form fields pre-populated on mount |
| Submitting | Button disabled; loading indicator |
| Success | In-page success message; form hidden |
| Validation error (400) | Field-level error messages displayed |
| Server error (500) | Generic error message; retry CTA |

## Metadata

```js
export const metadata = {
  title: `Book a Plumber | ${siteConfig.brand.name}`,
  description: `Book a ${siteConfig.brand.name} plumber in ${siteConfig.brand.serviceArea}. Fast response. Upfront pricing.`,
}
```

## Responsive Behavior

- Single column on mobile
- Two-column layout (form + sidebar) on `>= 1024px`
- Sidebar stacks below form on mobile
