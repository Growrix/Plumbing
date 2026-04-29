/**
 * theme.config.js
 * ALL design tokens live here — colors, fonts, spacing, shadows, animation.
 * No hardcoded styles in components. Components consume CSS variables
 * which are generated from this file in globals.css.
 * To retheme the entire site: edit this file only.
 */

const themeConfig = {

  // ── Typography ─────────────────────────────────────────────────────────────
  fonts: {
    display: "'Bricolage Grotesque', sans-serif",  // headings — bold, modern
    body:    "'DM Sans', sans-serif",               // body — clean, readable
    mono:    "'JetBrains Mono', monospace",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap",
  },

  // ── Colors ─────────────────────────────────────────────────────────────────
  colors: {
    // Core brand
    primary:         "#0D1F3C",   // Deep navy — trust, authority
    primaryLight:    "#1E3A6E",   // Lighter navy
    accent:          "#2563EB",   // Electric blue — CTAs, highlights
    accentLight:     "#3B82F6",
    accentDark:      "#1D4ED8",

    // Semantic
    emergency:       "#EF4444",   // Red — urgency
    emergencyLight:  "#FEE2E2",
    emergencyDark:   "#DC2626",
    success:         "#10B981",
    successLight:    "#D1FAE5",
    warning:         "#F59E0B",
    warningLight:    "#FEF3C7",

    // Surfaces
    surface:         "#F8FAFC",
    surfaceAlt:      "#EFF6FF",
    surfaceDark:     "#1E293B",

    // Text
    textPrimary:     "#0D1F3C",
    textSecondary:   "#475569",
    textMuted:       "#94A3B8",
    textInverse:     "#FFFFFF",

    // Borders
    border:          "#E2E8F0",
    borderDark:      "#CBD5E1",

    // Misc
    white:           "#FFFFFF",
    dark:            "#0A0F1E",
    overlay:         "rgba(13, 31, 60, 0.8)",
  },

  // ── Gradients ──────────────────────────────────────────────────────────────
  gradients: {
    hero:            "linear-gradient(135deg, #0D1F3C 0%, #1E3A6E 60%, #0D1F3C 100%)",
    accent:          "linear-gradient(135deg, #2563EB, #3B82F6)",
    accentSubtle:    "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
    emergency:       "linear-gradient(135deg, #EF4444, #DC2626)",
    emergencySubtle: "linear-gradient(135deg, #FEF2F2, #FEE2E2)",
    dark:            "linear-gradient(160deg, #0A0F1E 0%, #0D1F3C 100%)",
    surface:         "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
    overlay:         "linear-gradient(to bottom, rgba(13,31,60,0) 0%, rgba(13,31,60,0.9) 100%)",
  },

  // ── Spacing & Layout ───────────────────────────────────────────────────────
  spacing: {
    sectionY:        "5rem",
    sectionYMobile:  "3rem",
    containerMax:    "1200px",
    containerPx:     "1.5rem",
    containerPxMd:   "2rem",
    cardRadius:      "1rem",
    cardRadiusLg:    "1.5rem",
    buttonRadius:    "0.5rem",
    buttonRadiusFull: "9999px",
    inputRadius:     "0.5rem",
    gap:             "1.5rem",
    gapLg:           "2rem",
  },

  // ── Shadows ────────────────────────────────────────────────────────────────
  shadows: {
    xs:              "0 1px 2px rgba(0,0,0,0.05)",
    sm:              "0 2px 4px rgba(0,0,0,0.06)",
    card:            "0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)",
    cardHover:       "0 20px 40px -10px rgba(13,31,60,0.18)",
    cardHighlighted: "0 0 0 2px #2563EB, 0 20px 40px -10px rgba(37,99,235,0.25)",
    button:          "0 4px 14px rgba(37,99,235,0.3)",
    buttonHover:     "0 6px 20px rgba(37,99,235,0.4)",
    emergency:       "0 4px 14px rgba(239,68,68,0.3)",
    emergencyHover:  "0 6px 20px rgba(239,68,68,0.45)",
    nav:             "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)",
  },

  // ── Animation ──────────────────────────────────────────────────────────────
  animation: {
    duration:        "200ms",
    durationMedium:  "350ms",
    durationSlow:    "500ms",
    easeBase:        "ease",
    easeSmooth:      "cubic-bezier(0.16, 1, 0.3, 1)",
    easeSnappy:      "cubic-bezier(0.4, 0, 0.2, 1)",
    // Compound values
    transitionBase:  "all 200ms ease",
    transitionSmooth:"all 350ms cubic-bezier(0.16, 1, 0.3, 1)",
  },

  // ── Breakpoints (reference only — use Tailwind or CSS media queries) ───────
  breakpoints: {
    sm:  "640px",
    md:  "768px",
    lg:  "1024px",
    xl:  "1280px",
    xxl: "1536px",
  },

  // ── Z-Index Scale ──────────────────────────────────────────────────────────
  zIndex: {
    base:      "0",
    raised:    "10",
    dropdown:  "100",
    sticky:    "200",
    overlay:   "300",
    modal:     "400",
    toast:     "500",
  },

};

export default themeConfig;
