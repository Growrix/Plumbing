# Backend

## Purpose

The Plumbing Template has minimal backend scope. The only server-side processing is the booking form API route. There is no database, no queue, and no job system. This folder documents the Resend integration, the fail-soft pattern, and the reliability decisions for that single endpoint.

---

## Backend Scope

| Surface | File | Notes |
|---|---|---|
| Booking POST handler | `app/api/booking/route.js` | Validation → email → response |
| Sitemap generator | `app/sitemap.ts` | Static generation — no runtime I/O |
| Robots | `app/robots.ts` | Static — no runtime I/O |

**Not in scope:** database, ORM, authentication, sessions, background jobs, queues, file uploads, webhooks.

---

## Resend Integration

### When to Send

Call `resend.emails.send(...)` only when both:
1. `process.env.RESEND_API_KEY` is truthy
2. `process.env.BOOKING_TO_EMAIL` is truthy

If either is missing, skip the send. Log the payload to `console.log('[booking]', payload)` and continue to success response.

### Email Payload

```js
{
  from: 'Booking Form <noreply@{sender-domain}>',
  to: process.env.BOOKING_TO_EMAIL,
  subject: `New Booking Request — ${payload.service}`,
  html: /* templated from payload fields */,
}
```

Sender domain must be verified in the Resend dashboard. Document this in the operator setup guide.

### Fail-Soft Contract

The template must be demonstrably functional without any email credentials:
- No crash on missing env vars
- Always returns HTTP 200 on successful validation
- Logs payload server-side for debugging
- UI shows success state

This is a template feature, not a bug. Document it prominently in the root `README.md`.

---

## Reliability

- The booking route has no persistent state — it is idempotent on retries
- If Resend throws, catch the error, log it, and still return HTTP 200 (operator has server logs as fallback)
- Never expose Resend error details to the client response

---

## No Background Jobs

There are no queued jobs, cron tasks, or async workers in this template. Booking submission is synchronous request → validate → email → respond.

---

## Operator Setup Instructions (document in root README)

1. Create a [Resend](https://resend.com) account
2. Verify your sending domain
3. Create an API key
4. Set `RESEND_API_KEY=re_...` and `BOOKING_TO_EMAIL=you@yourdomain.com` in `.env.local`
5. The template works without step 1–4; email just won't send
