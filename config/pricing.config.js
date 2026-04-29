/**
 * PRICING CONFIG
 * Edit service tiers and maintenance plans here.
 */

export const pricingConfig = {
  // ─── Page-level copy ─────────────────────────────────────────────
  page: {
    heading: "Transparent Pricing. No Surprises.",
    subheading:
      "We provide upfront quotes before starting any work. You approve the price — then we begin. Always.",
    disclaimer:
      "* All prices are estimates. Final pricing provided after on-site assessment at no charge.",
    badge: "Upfront Pricing",
  },

  // ─── Service Tiers ───────────────────────────────────────────────
  tiers: [
    {
      id: "basic",
      name: "Basic",
      tagline: "Quick fix, done right",
      priceFrom: "$89",
      priceSuffix: "starting",
      color: "primary",
      highlighted: false,
      includes: [
        "Single issue diagnosis",
        "On-site repair",
        "Post-repair test",
        "90-day parts warranty",
      ],
      excludes: ["Follow-up visits", "Priority scheduling"],
      cta: { label: "Book Basic Service", href: "/contact" },
      note: null,
    },
    {
      id: "standard",
      name: "Standard",
      tagline: "Fix it + check everything",
      priceFrom: "$149",
      priceSuffix: "starting",
      color: "accent",
      highlighted: true,
      badge: "Most Popular",
      includes: [
        "Full issue diagnosis",
        "Repair + 10-point system checkup",
        "Post-repair test & flush",
        "1-year labor warranty",
        "Priority scheduling",
        "Detailed inspection report",
      ],
      excludes: [],
      cta: { label: "Book Standard Service", href: "/contact" },
      note: "Best for most homeowners",
    },
    {
      id: "premium",
      name: "Premium",
      tagline: "Complete solution + peace of mind",
      priceFrom: "$249",
      priceSuffix: "starting",
      color: "primaryDark",
      highlighted: false,
      includes: [
        "Everything in Standard",
        "Camera inspection included",
        "Emergency callback priority (48h)",
        "2-year labor warranty",
        "Preventive treatment",
        "Dedicated technician",
        "10% off future repairs",
      ],
      excludes: [],
      cta: { label: "Book Premium Service", href: "/contact" },
      note: null,
    },
  ],

  // ─── Maintenance Plans ────────────────────────────────────────────
  maintenancePlans: {
    page: {
      heading: "Protect Your Home Year-Round",
      subheading:
        "Our maintenance plans give you priority service, annual inspections, and significant savings — for less than a dollar a day.",
      badge: "Save Up to 30%",
    },
    plans: [
      {
        id: "essential",
        name: "Essential Plan",
        price: "$19",
        billingCycle: "per month",
        annualNote: "$228/year — save $80 vs pay-as-you-go",
        color: "primary",
        highlighted: false,
        features: [
          "Annual plumbing inspection",
          "Priority scheduling (next-day)",
          "10% off all repairs",
          "Free drain treatment (1x/year)",
          "Email & chat support",
        ],
        cta: { label: "Start Essential Plan", href: "/contact" },
      },
      {
        id: "home-guard",
        name: "HomeGuard Plan",
        price: "$39",
        billingCycle: "per month",
        annualNote: "$468/year — most comprehensive value",
        color: "accent",
        highlighted: true,
        badge: "Best Value",
        features: [
          "Bi-annual plumbing inspection",
          "Emergency priority (same-day)",
          "15% off all repairs",
          "Free camera inspection (1x/year)",
          "Free drain treatment (2x/year)",
          "Water heater flush included",
          "24/7 phone support",
          "Free minor repairs (up to $50 labor)",
        ],
        cta: { label: "Start HomeGuard Plan", href: "/contact" },
      },
      {
        id: "landlord",
        name: "Property Pro",
        price: "$69",
        billingCycle: "per month / per property",
        annualNote: "For landlords & property managers — multi-unit discounts available",
        color: "primaryDark",
        highlighted: false,
        features: [
          "Quarterly inspections",
          "Emergency priority (within 2 hours)",
          "20% off all repairs",
          "Unlimited drain treatments",
          "Tenant coordination service",
          "Detailed inspection reports",
          "Dedicated account manager",
          "Invoice & billing management",
        ],
        cta: { label: "Contact for Property Pro", href: "/contact" },
      },
    ],
  },
};
