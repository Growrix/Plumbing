# Page: Legal Pages `/privacy`, `/terms`, `/license`

## Route Goal

Kill 404s on legal footer links. Give operators a starting-point legal document that uses brand tokens. Warn operators clearly that template content is not a substitute for attorney-reviewed text.

## Status

❌ Missing — create `app/privacy/page.jsx`, `app/terms/page.jsx`, `app/license/page.jsx`

## Shared Architecture

All three legal pages use a single shared layout component: `components/legal/LegalPage.jsx`

`LegalPage` accepts `data` from `config/legal.config.js` and renders:
1. Attorney review warning banner (amber — always visible)
2. Page title + effective date
3. Sections array — each with heading + body paragraphs

## Attorney Warning Banner

```
⚠️ Template content. Have a licensed attorney review and update all legal pages before launching this site for a real business.
```

## Token Replacement

Body text uses `{{brand.name}}`, `{{brand.address}}`, `{{brand.license}}`, `{{brand.serviceArea}}` placeholders. `LegalPage` replaces these with values from `siteConfig.brand` at render time.

## Config to Create: `config/legal.config.js`

```js
export const legalConfig = {
  privacy: {
    title: "Privacy Policy",
    effectiveDate: "January 1, 2025",
    sections: [
      { heading: "Information We Collect", body: ["{{brand.name}} collects your name, phone, and email when you submit a booking request..."] },
      { heading: "How We Use Your Information", body: ["..."] },
      { heading: "Contact Us", body: ["{{brand.name}}, {{brand.address}}"] },
    ],
  },
  terms: {
    title: "Terms of Service",
    effectiveDate: "January 1, 2025",
    sections: [ ... ],
  },
  license: {
    title: "Contractor License Information",
    effectiveDate: "January 1, 2025",
    sections: [
      { heading: "License Number", body: ["{{brand.license}}"] },
      { heading: "Service Area", body: ["{{brand.serviceArea}}"] },
    ],
  },
}
```

## States

| State | Behavior |
|---|---|
| Default | Warning banner + rendered content |
| Token not found | Token string rendered as-is (fail-visible, not fail-silent) |

## Responsive Behavior

- Single-column reading layout, max-width 720px centered
- Warning banner: full width, sticky or top-of-content

## Metadata

```js
// privacy/page.jsx
export const metadata = {
  title: `Privacy Policy | ${siteConfig.brand.name}`,
  robots: { index: false }  // Legal pages excluded from indexing
}
```
