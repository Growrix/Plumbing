export const pricingConfig = {
  page: {
    heading: "Transparent Pricing. No Surprises.",
    subheading: "We provide upfront quotes before starting any work. You approve the price — then we begin.",
    disclaimer: "All prices are estimates in AUD. Final pricing provided after on-site assessment at no charge.",
  },
  tiers: [
    {
      id: "basic", name: "Basic", tagline: "Quick fix, done right",
      priceFrom: "$129", priceSuffix: "starting", highlighted: false,
      includes: ["Single issue diagnosis", "On-site repair", "Post-repair test", "90-day parts warranty"],
      cta: { label: "Book Basic Service", href: "/booking?tier=basic" },
    },
    {
      id: "standard", name: "Standard", tagline: "Fix it + full checkup",
      priceFrom: "$229", priceSuffix: "starting", highlighted: true, badge: "Most Popular",
      includes: ["Full issue diagnosis", "Repair + 10-point system check", "Post-repair test", "12-month labour warranty", "Priority scheduling", "Detailed inspection report"],
      cta: { label: "Book Standard Service", href: "/booking?tier=standard" },
      note: "Best for most homeowners",
    },
    {
      id: "premium", name: "Premium", tagline: "Complete solution + peace of mind",
      priceFrom: "$399", priceSuffix: "starting", highlighted: false,
      includes: ["Everything in Standard", "CCTV inspection included", "Emergency callback priority 48h", "2-year labour warranty", "Preventive treatment", "10% off future repairs"],
      cta: { label: "Book Premium Service", href: "/booking?tier=premium" },
    },
  ],
  maintenancePlans: {
    page: {
      heading: "Protect Your Home Year-Round",
      subheading: "Priority service, annual inspections, and significant savings — for less than $1 a day.",
      badge: "Save Up to 30%",
    },
    plans: [
      {
        id: "essential", name: "Essential Plan", price: "$29", billingCycle: "per month",
        annualNote: "$348/year — save $120 vs pay-as-you-go", highlighted: false,
        features: ["Annual plumbing inspection", "Priority scheduling (next-day)", "10% off all repairs", "Free drain treatment 1x per year", "Email and chat support"],
        cta: { label: "Start Essential Plan", href: "/booking?plan=essential" },
      },
      {
        id: "home-guard", name: "HomeGuard Plan", price: "$59", billingCycle: "per month",
        annualNote: "$708/year — most comprehensive value", highlighted: true, badge: "Best Value",
        features: ["Bi-annual plumbing inspection", "Emergency priority (same-day)", "15% off all repairs", "Free CCTV inspection 1x per year", "Free drain treatment 2x per year", "Hot water system flush included", "24/7 phone support", "Free minor repairs up to $80 labour"],
        cta: { label: "Start HomeGuard Plan", href: "/booking?plan=home-guard" },
      },
      {
        id: "landlord", name: "Property Pro", price: "$99", billingCycle: "per month per property",
        annualNote: "For landlords and property managers — multi-property discounts available", highlighted: false,
        features: ["Quarterly inspections", "Emergency priority within 2 hours", "20% off all repairs", "Unlimited drain treatments", "Tenant coordination service", "Detailed inspection reports", "Dedicated account manager", "Invoice and billing management"],
        cta: { label: "Enquire about Property Pro", href: "/booking?plan=landlord" },
      },
    ],
    faq: [
      { q: "Can I cancel my plan anytime?", a: "Yes — plans are month-to-month with no lock-in contracts. Cancel anytime with 30 days notice." },
      { q: "Do plans cover parts and materials?", a: "Plans cover labour discounts. Parts and materials are billed at cost, with plan members receiving priority sourcing." },
      { q: "Is there a call-out fee on top?", a: "No. Plan members pay zero call-out fees for scheduled visits. Emergency call-outs have a reduced fee of $49 versus standard $89." },
      { q: "Can I upgrade my plan later?", a: "Absolutely. You can upgrade or downgrade your plan at any time — changes take effect from the next billing cycle." },
    ],
  },
};