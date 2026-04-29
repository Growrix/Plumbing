# 🔧 AquaFix Pro — Plumbing Website Template (Next.js)

A modern, config-driven plumbing company website. **Zero hardcoded UI content in components.**

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

---

## 🏗️ Architecture: Config-Driven Design

### The Core Principle

**All content and design tokens live in config files. Components are pure UI shells.**

```
config/
├── site.config.js   ← ALL content: brand, nav, services, pricing, testimonials, etc.
└── theme.config.js  ← ALL design tokens: colors, fonts, spacing, shadows, animations
```

### To rebrand or white-label this template:

1. **Edit `config/site.config.js`** — Change brand name, phone, services, testimonials, etc.
2. **Edit `config/theme.config.js`** → **Update `app/globals.css`** CSS variables — Change colors, fonts, spacing.
3. **Done.** No component code needs to change.

---

## 📁 File Structure

```
plumbing-template/
├── config/
│   ├── site.config.js        ← Content config (edit to rebrand)
│   └── theme.config.js       ← Design tokens (edit to retheme)
│
├── app/
│   ├── globals.css            ← CSS variables from theme.config.js
│   ├── layout.jsx             ← Root layout (pulls from config)
│   ├── page.jsx               ← Home page (assembles sections from config)
│   └── emergency/
│       └── page.jsx           ← Emergency page
│
├── components/
│   ├── layout/
│   │   ├── Header.jsx         ← Sticky nav, mobile menu (data from config)
│   │   └── Footer.jsx         ← Multi-column footer (data from config)
│   └── sections/
│       ├── EmergencyBanner.jsx ← Top banner (togglable via config)
│       ├── Hero.jsx            ← Full-screen hero with stats
│       ├── TrustBar.jsx        ← Animated trust signals marquee
│       ├── Services.jsx        ← Service card grid
│       ├── HowItWorks.jsx      ← 4-step process section
│       ├── Testimonials.jsx    ← Review cards grid
│       ├── PricingTiers.jsx    ← 3-tier pricing cards
│       ├── Plans.jsx           ← Maintenance plans (dark section)
│       └── CTASection.jsx      ← Bottom conversion CTA
│
├── package.json
├── next.config.js
└── jsconfig.json
```

---

## 🎨 Design System

### Colors (edit in `globals.css`)
| Variable               | Value     | Usage                        |
|------------------------|-----------|------------------------------|
| `--color-primary`      | `#0D1F3C` | Deep navy — trust, authority |
| `--color-accent`       | `#2563EB` | Blue — CTAs, links           |
| `--color-emergency`    | `#EF4444` | Red — urgency signals        |
| `--color-surface`      | `#F8FAFC` | Light gray backgrounds       |

### Typography
- **Display:** Bricolage Grotesque (headings)
- **Body:** DM Sans (text, UI)

### CSS Utility Classes
```
.container       → max-width centered wrapper
.section         → vertical padding section
.section--dark   → dark navy background
.section--surface → light gray background
.section-header  → centered heading + subtext
.btn             → base button
.btn--primary    → blue CTA button
.btn--outline    → ghost button (for dark bg)
.btn--emergency  → red emergency button
.btn--lg / --sm  → size variants
.stars           → star rating display
.badge           → pill badge
```

---

## 📋 Pages to Build Next

| Page                  | Config Key              |
|-----------------------|-------------------------|
| `/services`           | `siteConfig.services`   |
| `/about`              | `siteConfig.about`      |
| `/reviews`            | `siteConfig.testimonials` |
| `/plans`              | `siteConfig.maintenancePlans` |
| `/booking`            | Create booking form     |
| `/contact`            | `siteConfig.brand`      |

---

## ⚙️ Adding a New Section

1. Add data to `config/site.config.js`
2. Create `components/sections/MySection.jsx` — receives data as props
3. Create `components/sections/MySection.module.css`
4. Import and add `<MySection data={siteConfig.mySection} />` in `app/page.jsx`

**No other files change.**

---

## 🔧 Customization Examples

### Change phone number
```js
// config/site.config.js
brand: {
  phone: "+17135550000",
  phoneDisplay: "(713) 555-0000",
}
```

### Add a new service
```js
// config/site.config.js → services.items
{ id: "sewer-repair", icon: "🔧", title: "Sewer Repair", ... }
```

### Change accent color
```css
/* app/globals.css */
--color-accent: #0EA5E9;  /* change to any color */
```

### Toggle emergency banner
```js
// config/site.config.js
emergencyBanner: { show: false }
```

---

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** CSS Modules + CSS Custom Properties
- **Fonts:** Google Fonts (Bricolage Grotesque + DM Sans)
- **Images:** next/image (ready to add)
- **No UI library dependencies** — fully custom
