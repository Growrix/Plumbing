# API and Data

## Purpose

This folder owns the API contract for the Plumbing Template. There is no database — all content data lives in `config/*.js` files. The only server-side endpoint is the booking form submission handler.

---

## Data Architecture Decision

**No database. No ORM. No Supabase.**

All content is operator-edited config files. This is an intentional template decision — operators run the site as a static/hybrid Next.js deployment without needing database credentials.

---

## API Endpoints

### `POST /api/booking`

**File:** `app/api/booking/route.js`

**Priority:** P1

**Purpose:** Receive booking form submissions, validate the payload, send a confirmation email via Resend, and return a success or error response.

#### Request Body Schema

```json
{
  "name":        { "type": "string", "required": true, "minLength": 2 },
  "phone":       { "type": "string", "required": true, "pattern": "phone" },
  "email":       { "type": "string", "required": true, "format": "email" },
  "service":     { "type": "string", "required": true, "enum": ["servicesConfig slugs"] },
  "date":        { "type": "string", "required": false, "format": "YYYY-MM-DD" },
  "timeWindow":  { "type": "string", "required": false },
  "message":     { "type": "string", "required": false, "maxLength": 1000 },
  "website":     { "type": "string", "description": "Honeypot — must be empty string" }
}
```

#### Response: Success (HTTP 200)

```json
{ "success": true, "message": "Booking received. We'll contact you shortly." }
```

#### Response: Validation Error (HTTP 400)

```json
{
  "success": false,
  "errors": {
    "name": "Name is required",
    "email": "Invalid email address"
  }
}
```

#### Response: Server Error (HTTP 500)

```json
{ "success": false, "message": "Something went wrong. Please call us directly." }
```

#### Fail-Soft Email Behavior

- If `RESEND_API_KEY` and `BOOKING_TO_EMAIL` env vars are set → send email via Resend
- If either env var is missing → log the payload to server stdout; return HTTP 200 success (template works out of the box)
- This is documented behavior, not a silent failure

#### Security Requirements

- Honeypot field `website` must be empty — if populated, return 200 silently (do not reveal detection)
- Server-side validation mandatory — client-side validation is UX only, not security
- Rate limiting: max 10 requests per IP per hour (see [security/README.md](../security/README.md))
- No sensitive data in response payloads

---

## System Routes (Not REST Endpoints)

| Route | File | Priority | Notes |
|---|---|---|---|
| `/sitemap.xml` | `app/sitemap.ts` | P2 | Static routes + dynamic service slugs |
| `/robots.txt` | `app/robots.ts` | P2 | Allow all; point to sitemap |
| `/opengraph-image` | `app/opengraph-image.jsx` | P2 | Next auto-OG |

### Sitemap Generation Contract

```ts
// app/sitemap.ts
// Static routes: /, /services, /about, /reviews, /plans, /booking, /contact, /emergency, /careers
// Dynamic routes: servicesConfig.items.map(s => `/services/${s.slug}`)
// Excluded: /privacy, /terms, /license (robots noindex)
```

---

## Env Vars Required

| Variable | Required | Default | Purpose |
|---|---|---|---|
| `RESEND_API_KEY` | Optional | (none) | Email delivery via Resend |
| `BOOKING_TO_EMAIL` | Optional | (none) | Recipient for booking notifications |

No other env vars needed for template operation.
