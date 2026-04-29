/**
 * PAGES CONFIG
 * Homepage hero, section order, about page, FAQ, and navigation.
 */

// ─── Navigation ────────────────────────────────────────────────────────────
export const navConfig = {
  links: [
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/services#pricing" },
    { label: "Reviews", href: "/reviews" },
    { label: "About", href: "/about" },
    { label: "Emergency", href: "/emergency", highlight: true },
  ],
  ctaButton: { label: "Book a Service", href: "/contact" },
};

// ─── Homepage ──────────────────────────────────────────────────────────────
export const homepageConfig = {
  hero: {
    badge: "🚨 Emergency? We're Available 24/7",
    badgeLink: "/emergency",
    headline: "Plumbing Problems?",
    headlineAccent: "We Fix Them Fast.",
    subheadline:
      "Licensed plumbers serving Riverside & surrounding areas. We respond in under 60 minutes for emergencies — day or night.",
    primaryCTA: { label: "Book a Service", href: "/contact" },
    emergencyCTA: { label: "🚨 Emergency Call", href: "tel:+15552478900" },
    heroImage: "/images/hero-plumber.jpg", // swap path to change image
    trustLine: "Trusted by 12,000+ homeowners · Licensed · Insured · No surprise pricing",
  },

  // Section display order on homepage — remove/reorder freely
  sections: [
    "trust-bar",
    "services-grid",
    "how-it-works",
    "testimonials",
    "guarantees",
    "maintenance-promo",
    "cta-banner",
  ],

  howItWorks: {
    heading: "From Call to Fixed — In 3 Simple Steps",
    subheading: "We've made it as easy as possible to get help when you need it.",
    steps: [
      {
        step: "01",
        title: "Call or Book Online",
        description:
          "Call us directly or fill out our quick online booking form. Tell us the problem — we'll ask the right questions.",
        icon: "📞",
      },
      {
        step: "02",
        title: "We Show Up On Time",
        description:
          "A licensed technician arrives at your door in the time window we promise. Uniformed, background-checked, and prepared.",
        icon: "🚐",
      },
      {
        step: "03",
        title: "Job Done, Price Approved",
        description:
          "We diagnose the issue, give you an upfront price, and only start work once you say go. Clean-up is included.",
        icon: "✅",
      },
    ],
  },

  maintenancePromo: {
    heading: "Never Deal With a Surprise Plumbing Bill Again",
    subheading:
      "Our HomeGuard maintenance plan gives you priority service, annual inspections, and 15% off all repairs — for $39/month.",
    cta: { label: "View Maintenance Plans", href: "/maintenance" },
    highlights: ["Priority Emergency Response", "Annual Inspections", "15% Off All Repairs"],
  },

  ctaBanner: {
    heading: "Ready to Get Your Plumbing Fixed?",
    subheading:
      "Book online in 60 seconds or call us now. No waiting, no hassle.",
    primaryCTA: { label: "Book a Service", href: "/contact" },
    secondaryCTA: { label: "Call (555) 247-8900", href: "tel:+15552478900" },
    bgColor: "primary", // "primary" | "accent" | "dark"
  },
};

// ─── About Page ────────────────────────────────────────────────────────────
export const aboutConfig = {
  hero: {
    badge: "Our Story",
    heading: "Built on Trust. Backed by Experience.",
    subheading:
      "FlowFix Plumbing started in 2008 with one truck and a simple belief: homeowners deserve honest, professional service — without the runaround.",
  },
  story: {
    paragraphs: [
      "Our founder, Marcus Lee, started as an apprentice plumber straight out of high school. After 10 years working for corporate plumbing chains, he grew frustrated seeing customers charged hidden fees, given vague quotes, and treated as afterthoughts.",
      "In 2008, he started FlowFix with a single truck, a hand-painted logo, and a commitment to do things differently: upfront pricing, on-time arrivals, and treating every home like his own.",
      "Today, FlowFix has grown to a team of 24 licensed technicians serving Riverside County. But the values haven't changed. Every technician goes through background checks, continuous training, and subscribes to our customer promise.",
    ],
    image: "/images/about-team.jpg",
  },
  values: [
    {
      icon: "🎯",
      title: "Honest Always",
      description:
        "We quote before we start. If something unexpected comes up, we pause and tell you before we proceed.",
    },
    {
      icon: "⚡",
      title: "Fast Response",
      description: "We understand urgency. Emergencies get a technician en route within 60 minutes.",
    },
    {
      icon: "🏆",
      title: "Quality Workmanship",
      description:
        "Every job is backed by our labor warranty. If it's not right, we come back — no charge.",
    },
    {
      icon: "🤝",
      title: "Respect for Your Home",
      description:
        "We wear shoe covers, clean up after every job, and treat your property as if it were our own.",
    },
  ],
  teamHighlight: {
    heading: "24 Licensed Technicians",
    subheading:
      "Every member of our team is licensed in California, background-checked, and trained on the latest plumbing techniques and codes.",
    stats: [
      { label: "Licensed Technicians", value: "24" },
      { label: "Avg. Experience", value: "11 Years" },
      { label: "Background Checked", value: "100%" },
      { label: "Ongoing Training", value: "Quarterly" },
    ],
  },
};

// ─── Emergency Page ────────────────────────────────────────────────────────
export const emergencyConfig = {
  hero: {
    badge: "🚨 EMERGENCY SERVICE — AVAILABLE NOW",
    heading: "Plumbing Emergency?",
    headlineAccent: "We'll Be There in 60 Minutes.",
    subheading:
      "Don't wait. Every minute counts with a burst pipe, major leak, or sewage backup. Call our emergency line — we answer 24/7.",
    phoneCTA: { label: "Call Now: (555) 247-8900", href: "tel:+15552478900" },
    bookCTA: { label: "Book Emergency Online", href: "/contact?type=emergency" },
    bgColor: "emergency",
  },
  emergencyTypes: [
    {
      icon: "💥",
      title: "Burst Pipes",
      description: "Immediate water shutoff and pipe repair to prevent flooding.",
    },
    {
      icon: "🚽",
      title: "Sewage Backups",
      description: "Serious health hazard — we respond as fast as possible.",
    },
    {
      icon: "💧",
      title: "Major Leaks",
      description: "Uncontrolled leaks causing water damage to walls or floors.",
    },
    {
      icon: "🔥",
      title: "Water Heater Failure",
      description: "No hot water or water heater leaking — same-day replacement.",
    },
    {
      icon: "🪣",
      title: "Flooding",
      description: "Water accumulating from a plumbing failure — stop the source first.",
    },
    {
      icon: "⛽",
      title: "Gas Line Concerns",
      description: "Gas smell near appliances — leave the home and call immediately.",
    },
  ],
  whileYouWait: {
    heading: "While You Wait for Us — Do This:",
    steps: [
      { step: "1", text: "Shut off the main water valve (usually near the meter)" },
      { step: "2", text: "Turn off electricity in affected areas if there's water near outlets" },
      { step: "3", text: "Don't use drains or toilets if you have a sewage backup" },
      { step: "4", text: "Move valuables away from water if safe to do so" },
      { step: "5", text: "Take photos for insurance purposes" },
    ],
  },
};

// ─── FAQ ───────────────────────────────────────────────────────────────────
export const faqConfig = {
  heading: "Common Questions",
  subheading: "Everything you need to know before booking.",
  items: [
    {
      q: "How fast can you respond to an emergency?",
      a: "For emergencies, our target response time is under 60 minutes within our service area. We guarantee this during business hours; nights and weekends may occasionally be slightly longer but we always prioritize emergencies.",
    },
    {
      q: "Do you charge extra for nights, weekends, or holidays?",
      a: "No. We believe plumbing emergencies don't follow a 9-to-5 schedule, and neither should our pricing. Our emergency rates are the same 24/7.",
    },
    {
      q: "Will I get an exact price before you start work?",
      a: "Yes, always. We diagnose the issue on-site, then give you a written quote before touching anything. No work begins without your written approval.",
    },
    {
      q: "Are your technicians licensed?",
      a: "Every technician is licensed in the State of California, background-checked, and carries our company insurance. You can ask to see credentials at any time.",
    },
    {
      q: "What areas do you serve?",
      a: "We primarily serve Riverside County including Riverside, Corona, Moreno Valley, Perris, Norco, and surrounding communities. Call us to confirm coverage for your address.",
    },
    {
      q: "What's included in a maintenance plan?",
      a: "Our plans include annual (or bi-annual) inspections, priority scheduling, discounts on repairs, and free preventive treatments. Visit our Maintenance Plans page for full details.",
    },
    {
      q: "Do you offer financing?",
      a: "For larger projects (re-piping, water heater replacement, etc.), we partner with third-party financing options with 0% interest periods. Ask your technician or contact us for details.",
    },
  ],
};
