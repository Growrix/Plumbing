# Security

## Purpose

The Plumbing Template has no user authentication, no user accounts, and no database. The security scope is narrow but non-negotiable: the public booking form is the only server-side attack surface and must be hardened.

---

## Authentication and Authorization

**Not applicable.** There are no user accounts, no login flows, no sessions, and no protected routes. Operators manage the site by editing config files — no admin dashboard exists.

---

## Booking Form Security

The `POST /api/booking` route must implement all of the following:

### 1. Server-Side Validation (Required)

Client-side validation is UX only. The API route must validate independently:

| Field | Rule |
|---|---|
| `name` | Required, string, min 2 chars, max 100 chars |
| `phone` | Required, matches phone pattern (digits, spaces, +, -, parentheses) |
| `email` | Required, valid email format |
| `service` | Required, must be one of the canonical slugs from `servicesConfig` |
| `date` | Optional, valid ISO date if provided |
| `message` | Optional, max 1000 chars |
| `website` | Must be empty string (honeypot) |

Return `400` with field-level errors on validation failure.

### 2. Honeypot Field (Required — P0/P1)

- Add a hidden `<input name="website" />` to the booking form (CSS-hidden, not `display:none`)
- If the `website` field is populated in the POST body → discard silently, return HTTP 200 (do not reveal detection)
- This defeats most bot submissions without requiring a CAPTCHA

### 3. IP Rate Limiting (Required — P1)

- Max **10 requests per IP per hour** on `POST /api/booking`
- Implement via in-memory counter or `next-rate-limit` / `@upstash/ratelimit` (operator upgrades)
- Default template ships with a simple in-memory counter acceptable for template demonstration
- On rate limit exceeded: return `429 Too Many Requests`
- Document the Upstash upgrade path in backend README

### 4. Cloudflare Turnstile (Optional — Operator-Configured)

- Not shipped in the template by default
- Document as a `bookingConfig.captcha` toggle — operators add their own Turnstile site key
- Implementation guide in the root `README.md`

---

## Secret Handling

| Secret | Location | Never in |
|---|---|---|
| `RESEND_API_KEY` | `.env.local` (local) / Vercel env | `config/*.js`, git, client bundle |
| `BOOKING_TO_EMAIL` | `.env.local` (local) / Vercel env | `config/*.js`, git, client bundle |

- `.env.local` is in `.gitignore` by default with Next.js — verify it is present
- All env vars are server-only (no `NEXT_PUBLIC_` prefix on secrets)
- Document `.env.example` with placeholder values in the repository root

---

## Privacy

- No user data is stored — booking submissions exist in transit only (email delivery)
- Legal pages (`/privacy`, `/terms`, `/license`) are `robots: { index: false }` — they do not appear in search engines until the operator replaces the template text
- Legal pages include the amber attorney-review warning banner (see [frontend/page-legal.md](../frontend/page-legal.md))

---

## Compliance Obligations

This is a template — compliance is the operator's responsibility. The template:
- Ships with placeholder legal text and an explicit attorney-review warning
- Documents the token replacement system so operators can customize to their jurisdiction

---

## Abuse Protection Summary

| Control | Status | Priority |
|---|---|---|
| Server-side validation | Required | P1 |
| Honeypot field | Required | P1 |
| IP rate limiting (in-memory) | Required | P1 |
| CSRF protection | Not needed — stateless API route, no cookies | — |
| CAPTCHA (Turnstile) | Optional / operator-configured | Post-launch |
| Input sanitization | Covered by field-level validation | P1 |
| SQL injection | Not applicable — no database | — |
