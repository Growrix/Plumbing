/**
 * site.config.js
 * ALL website content lives here. No hardcoded text in components.
 * To rebrand or white-label: edit this file only.
 */

const siteConfig = {

  brand: {
    name: "AquaFix Pro",
    tagline: "Plumbing Done Right. Every Time.",
    phone: "+18005557473",
    phoneDisplay: "(800) 555-PIPE",
    email: "hello@aquafixpro.com",
    address: "123 Waterway Ave, Houston, TX 77001",
    license: "TX Lic. #PL-492817",
    founded: "2008",
    emergencyAvailable: true,
    serviceArea: "Greater Houston Area",
    logo: { text: "AquaFix", accent: "Pro", icon: "💧" },
  },

  // Compatibility shape used by booking/contact/navigation components.
  contact: {
    phone: "(800) 555-PIPE",
    phoneHref: "tel:+18005557473",
    email: "hello@aquafixpro.com",
    hours: {
      weekdays: "Mon-Fri: 7:00 AM - 8:00 PM",
      weekends: "Sat-Sun: 8:00 AM - 6:00 PM",
      emergency: "24/7 Emergency Dispatch Available",
    },
  },

  guarantees: [
    {
      title: "Upfront Pricing",
      description: "You approve the quote before any work begins.",
    },
    {
      title: "Licensed & Insured Team",
      description: "Certified technicians with full coverage on every job.",
    },
    {
      title: "Workmanship Warranty",
      description: "Every repair is backed by a written service guarantee.",
    },
  ],

  nav: {
    links: [
      { label: "Services",          href: "/services"  },
      { label: "About",             href: "/about"     },
      { label: "Reviews",           href: "/reviews"   },
      { label: "Maintenance Plans", href: "/plans"     },
      { label: "Emergency",         href: "/emergency", badge: "24/7" },
    ],
    cta: { label: "Book a Service", href: "/booking" },
    emergencyCta: { label: "Emergency Line", href: "tel:+18005557473" },
  },

  emergencyBanner: {
    show: true,
    message: "⚡ Plumbing emergency? We respond in under 60 minutes.",
    cta: { label: "Call Now →", href: "tel:+18005557473" },
  },

  hero: {
    badge: "⭐ Rated #1 Plumber in Houston · 4,800+ Reviews",
    headline: ["Houston's Most", "Trusted Plumbers"],
    subheadline: "Fast response. Transparent pricing. Guaranteed work. We're the team you call when it matters most.",
    primaryCta:  { label: "Book a Service", href: "/booking" },
    secondaryCta: { label: "Call Now",       href: "tel:+18005557473" },
    trustNote: "✓ No surprise fees  ✓ Same-day available  ✓ Licensed & insured",
    stats: [
      { value: "15+",     label: "Years in Business"  },
      { value: "4,800+",  label: "Happy Customers"    },
      { value: "98%",     label: "5-Star Reviews"     },
      { value: "< 60min", label: "Avg. Response Time" },
    ],
  },

  trustBar: {
    items: [
      { icon: "🛡️", label: "Licensed & Insured"           },
      { icon: "⚡",  label: "Same-Day Service"             },
      { icon: "💰",  label: "Upfront Pricing"             },
      { icon: "⭐",  label: "4.9-Star Rated"              },
      { icon: "🏅",  label: "10-Year Workmanship Guarantee" },
    ],
  },

  services: {
    headline: "What We Fix",
    subheadline: "From dripping faucets to full pipe replacements — we handle it all, fast.",
    viewAllCta: { label: "View All Services", href: "/services" },
    items: [
      { id: "drain-cleaning",   icon: "🚿", title: "Drain Cleaning",    description: "Clogged or slow drains cleared fast using hydro-jetting and modern camera diagnostics.",                href: "/services/drain-cleaning",   popular: false, urgent: false, time: "1–2 hrs"             },
      { id: "leak-repair",      icon: "💧", title: "Leak Repair",       description: "Pinpoint and fix hidden leaks before they cause serious water damage to your home.",                   href: "/services/leak-repair",      popular: true,  urgent: false, time: "2–4 hrs"             },
      { id: "water-heater",     icon: "🔥", title: "Water Heater",      description: "Installation, repair, and replacement of all water heater types including tankless units.",           href: "/services/water-heater",     popular: false, urgent: false, time: "2–5 hrs"             },
      { id: "pipe-installation",icon: "🔩", title: "Pipe Installation", description: "Full pipe replacement, repiping, and new installations for residential and commercial.",            href: "/services/pipe-installation",popular: false, urgent: false, time: "4–8 hrs"             },
      { id: "emergency",        icon: "🚨", title: "Emergency Service", description: "Burst pipe? Flooding? We dispatch in minutes. On-call 24/7/365.",                                  href: "/emergency",                 popular: false, urgent: true,  time: "< 60 min dispatch"   },
      { id: "toilet-repair",    icon: "🪠", title: "Toilet & Bathroom", description: "Running toilets, clogs, fixture replacement, and full bathroom plumbing services.",                   href: "/services/toilet-repair",    popular: false, urgent: false, time: "1–3 hrs"             },
    ],
  },

  howItWorks: {
    headline: "Booked in 60 Seconds",
    subheadline: "Getting help has never been simpler.",
    steps: [
      { step: "01", title: "Book or Call",           description: "Use our online booking or call our line. We're always available.",                       icon: "📱" },
      { step: "02", title: "We Confirm & Dispatch",  description: "A certified technician is confirmed and on their way within minutes.",                     icon: "✅" },
      { step: "03", title: "Get an Upfront Quote",   description: "No work begins until you approve a clear, itemized quote.",                               icon: "📋" },
      { step: "04", title: "Problem Solved",          description: "We fix it right the first time, backed by our written guarantee.",                       icon: "🏆" },
    ],
  },

  pricingTiers: {
    headline: "Transparent Pricing",
    subheadline: "Know exactly what you're paying — before we start.",
    note: "All prices include diagnostics, labor, and a written warranty.",
    tiers: [
      {
        id: "basic",   name: "Quick Fix",      price: "From $89",  period: "per visit",
        description: "Ideal for small, isolated issues.",
        features: ["Diagnostic & repair", "Single fixture or drain", "30-day labor warranty", "Upfront written quote"],
        cta: { label: "Book Quick Fix", href: "/booking?tier=basic" },
        highlighted: false, badge: null,
      },
      {
        id: "standard", name: "Standard Care", price: "From $199", period: "per visit",
        description: "Fix + full system check.",
        features: ["Everything in Quick Fix", "Full system inspection", "90-day labor warranty", "Priority scheduling", "Free follow-up visit"],
        cta: { label: "Book Standard", href: "/booking?tier=standard" },
        highlighted: true, badge: "Most Popular",
      },
      {
        id: "premium",  name: "Premium Solution", price: "From $349", period: "per visit",
        description: "Complete peace of mind.",
        features: ["Everything in Standard", "1-year workmanship warranty", "Emergency priority line", "Discounted future repairs (15%)", "Dedicated senior technician"],
        cta: { label: "Book Premium", href: "/booking?tier=premium" },
        highlighted: false, badge: "Best Value",
      },
    ],
  },

  testimonials: {
    headline: "Trusted by 4,800+ Houston Homeowners",
    subheadline: "Real reviews from real customers.",
    items: [
      { id: 1, name: "Sarah M.",   location: "Houston, TX",       rating: 5, initials: "SM", platform: "Google",      date: "2 weeks ago",  service: "Emergency Pipe Repair",      text: "They arrived within 45 minutes of my call at 11pm. Fixed the burst pipe quickly and professionally. I've never felt so relieved. Absolutely incredible service." },
      { id: 2, name: "James R.",   location: "Katy, TX",          rating: 5, initials: "JR", platform: "Google",      date: "1 month ago",  service: "Water Heater Replacement",   text: "Transparent pricing from the start — no hidden fees or bait-and-switch. The technician explained everything clearly before touching anything. Will definitely use again." },
      { id: 3, name: "Linda K.",   location: "Sugar Land, TX",    rating: 5, initials: "LK", platform: "Yelp",        date: "3 weeks ago",  service: "Maintenance Plan",           text: "Signed up for the Gold maintenance plan last year — best decision ever. They caught a small leak during inspection before it became a disaster. Saved me thousands." },
      { id: 4, name: "Carlos B.",  location: "The Woodlands, TX", rating: 5, initials: "CB", platform: "Google",      date: "1 week ago",   service: "Drain Cleaning",             text: "Professional, fast, and honest. My go-to plumber for all four of my rental properties now. They show up on time and the work holds up." },
    ],
  },

  maintenancePlans: {
    headline: "Stay Protected Year-Round",
    subheadline: "Prevent emergencies before they happen. Save money every year.",
    cta: { label: "View All Plans", href: "/plans" },
    plans: [
      { id: "silver",   name: "Silver",   price: "$199", period: "/year", recommended: false, cta: { label: "Get Silver",   href: "/plans?plan=silver"   }, perks: ["Annual full inspection", "10% off all repairs", "Priority scheduling", "Email support"] },
      { id: "gold",     name: "Gold",     price: "$349", period: "/year", recommended: true,  cta: { label: "Get Gold",     href: "/plans?plan=gold"     }, perks: ["Semi-annual inspection", "20% off all repairs", "Emergency priority line", "Free drain cleaning (1x/yr)", "Phone & chat support"] },
      { id: "platinum", name: "Platinum", price: "$549", period: "/year", recommended: false, cta: { label: "Get Platinum", href: "/plans?plan=platinum" }, perks: ["Quarterly inspection", "30% off all repairs", "24/7 dedicated line", "Free water heater checkup", "Dedicated senior technician", "Annual pipe camera scope"] },
    ],
  },

  emergency: {
    headline: "Plumbing Emergency?",
    subheadline: "Don't wait. Every minute counts. Call now for immediate dispatch.",
    badge: "🚨 Available 24 hours · 7 days · 365 days",
    phoneDisplay: "(800) 555-PIPE",
    phone: "tel:+18005557473",
    responseClaim: "We dispatch in under 15 minutes.",
    steps: [
      { step: "01", title: "Call the Emergency Line",    description: "Our emergency team picks up immediately — day or night.",                         icon: "📞" },
      { step: "02", title: "Immediate Dispatch",         description: "A certified technician is dispatched to you within 15 minutes of your call.",     icon: "🚐" },
      { step: "03", title: "Problem Solved Fast",        description: "95% of emergency jobs are completed in a single visit.",                          icon: "✅" },
    ],
    safetyTips: {
      headline: "While You Wait — Stay Safe",
      tips: [
        "Shut off the main water valve immediately",
        "Turn off electricity in affected areas if safe to do so",
        "Document damage with photos for insurance",
        "Clear the area and keep children and pets away",
        "Don't use toilets or sinks in the affected area",
      ],
    },
  },

  about: {
    headline: "We Take Plumbing Personally",
    subheadline: "Founded in Houston in 2008, built on one belief: homeowners deserve fast, honest, reliable service — every time.",
    values: [
      { title: "Transparency", description: "You see the price before we touch a single pipe.", icon: "📋" },
      { title: "Reliability",  description: "We show up when we say we will. Always.",           icon: "⏱️" },
      { title: "Quality",      description: "Every job is backed by a written warranty.",         icon: "🏅" },
      { title: "Urgency",      description: "When you need us, we're there — 24/7.",             icon: "⚡" },
    ],
    certifications: ["Texas Licensed Master Plumber", "EPA Certified", "BBB A+ Rated", "PHCC Member", "HomeAdvisor Elite"],
    team: { size: "40+", label: "Certified Technicians" },
  },

  ctaSection: {
    headline: "Ready to Fix It?",
    subheadline: "Book online in 60 seconds or call us now. Same-day slots available.",
    primaryCta:  { label: "Book a Service",       href: "/booking"          },
    secondaryCta: { label: "Call (800) 555-PIPE", href: "tel:+18005557473"  },
    note: "No commitment. Free quote. Cancel anytime.",
  },

  footer: {
    tagline: "Reliable plumbing. Honest pricing. Always on time.",
    links: {
      Services: [
        { label: "Drain Cleaning",    href: "/services/drain-cleaning"    },
        { label: "Leak Repair",       href: "/services/leak-repair"       },
        { label: "Water Heater",      href: "/services/water-heater"      },
        { label: "Pipe Installation", href: "/services/pipe-installation" },
        { label: "Emergency",         href: "/emergency"                  },
      ],
      Company: [
        { label: "About Us",          href: "/about"   },
        { label: "Reviews",           href: "/reviews" },
        { label: "Maintenance Plans", href: "/plans"   },
        { label: "Contact",           href: "/contact" },
        { label: "Careers",           href: "/careers" },
      ],
      Legal: [
        { label: "Privacy Policy",    href: "/privacy" },
        { label: "Terms of Service",  href: "/terms"   },
        { label: "License Info",      href: "/license" },
      ],
    },
    social: [
      { platform: "Facebook", href: "https://facebook.com", abbr: "Fb" },
      { platform: "Google",   href: "https://google.com",   abbr: "G"  },
      { platform: "Yelp",     href: "https://yelp.com",     abbr: "Yp" },
    ],
    licenseNote: "TX Lic. #PL-492817 · Serving the Greater Houston Area",
  },

  seo: {
    titleTemplate: "%s | AquaFix Pro Plumbing",
    defaultTitle: "AquaFix Pro | Houston's #1 Trusted Plumbing Service",
    description: "Fast, reliable plumbing in Houston. Emergency service 24/7. Transparent pricing, licensed & insured. Book online or call now.",
    keywords: ["plumber houston", "emergency plumber", "drain cleaning houston", "water heater repair houston"],
    ogImage: "/og-image.jpg",
    locale: "en_US",
  },

};

export { siteConfig };
export default siteConfig;
