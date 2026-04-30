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
        { label: "Emergency Plumbing",            href: "/services/emergency-plumbing" },
        { label: "Drain Cleaning",                href: "/services/drain-cleaning"     },
        { label: "Leak Detection & Repair",       href: "/services/leak-repair"        },
        { label: "Water Heater Services",         href: "/services/water-heater"       },
        { label: "Pipe Installation & Repair",    href: "/services/pipe-services"      },
        { label: "Sewer Line Services",           href: "/services/sewer-services"     },
        { label: "Bathroom & Kitchen Plumbing",   href: "/services/bathroom-kitchen"   },
        { label: "Plumbing Inspection",           href: "/services/inspection"         },
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
    siteUrl: "https://www.aquafixpro.com",
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
