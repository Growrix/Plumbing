# Page: Custom 404 `app/not-found.jsx`

## Route Goal

Graceful, brand-styled 404 instead of the Next.js default. Reduce bounce by offering useful navigation and a prominent phone CTA.

## Status

❌ Missing — create `app/not-found.jsx`

## Primary Audience Intent

"I followed a broken link or mistyped a URL" — confused, needs re-orientation.

## Section-by-Section Plan

| Order | Section | Notes |
|---|---|---|
| 1 | Brand-styled headline | "We can't find that drain." or similar plumbing-themed 404 message |
| 2 | Short explanation | "The page you're looking for doesn't exist or has moved." |
| 3 | Suggested popular pages | Links to: `/services`, `/booking`, `/contact`, `/emergency` |
| 4 | Prominent phone CTA | Large `tel:{phone}` link — fastest path to help |
| 5 | Home link | "← Back to Home" |

## Config Source

- Phone: `siteConfig.brand.phone` / `siteConfig.contact.phoneHref`
- Brand name: `siteConfig.brand.name`
- Suggested links: static (hardcoded route hrefs are acceptable here since these are core routes)

## States

| State | Behavior |
|---|---|
| Any unknown route | This page renders |

## Notes

- No `metadata` export needed — Next.js handles 404 metadata automatically
- Keep this page lightweight — no Layout import needed if the root `app/layout.jsx` wraps it; it will inherit Header/Footer automatically
- Component should be `"use client"` only if interaction requires it — prefer server component
