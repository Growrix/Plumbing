/**
 * SERVICES CONFIG
 * Add, remove, or edit services here. Components auto-render from this data.
 */

export const servicesConfig = {
  // ─── Page-level copy ─────────────────────────────────────────────
  page: {
    heading: "Everything Your Home Needs",
    subheading:
      "From urgent emergencies to planned upgrades — we handle every plumbing situation with speed and expertise.",
    badge: "Licensed & Insured",
  },

  // ─── Service Categories ──────────────────────────────────────────
  categories: [
    {
      id: "emergency",
      label: "Emergency",
      color: "emergency",
    },
    {
      id: "repair",
      label: "Repairs",
      color: "primary",
    },
    {
      id: "installation",
      label: "Installation",
      color: "accent",
    },
    {
      id: "maintenance",
      label: "Maintenance",
      color: "success",
    },
  ],

  // ─── Services List ───────────────────────────────────────────────
  items: [
    {
      id: "emergency-plumbing",
      slug: "emergency-plumbing",
      category: "emergency",
      icon: "🚨",
      name: "Emergency Plumbing",
      shortDesc: "Burst pipes, major leaks, flooding — we respond in under 60 minutes.",
      fullDesc:
        "Plumbing emergencies don't wait for business hours. Our emergency team is on standby 24/7, ready to respond to burst pipes, severe leaks, sewer backups, and any urgent situation threatening your home or business.",
      highlights: [
        "Response in under 60 minutes",
        "Available 24/7 including holidays",
        "No extra charge for nights/weekends",
        "Damage control & immediate repair",
      ],
      badge: "24/7",
      badgeColor: "emergency",
      featured: true,
      cta: { label: "Call Now — It's Urgent", href: "tel:+15552478900" },
    },
    {
      id: "drain-cleaning",
      slug: "drain-cleaning",
      category: "repair",
      icon: "🌀",
      name: "Drain Cleaning",
      shortDesc: "Slow drains, clogs, and backups cleared fast — guaranteed.",
      fullDesc:
        "Clogged drains are one of the most common plumbing problems. We use professional hydro-jetting and drain snake equipment to clear blockages quickly and prevent them from coming back.",
      highlights: [
        "Hydro-jetting for complete clearing",
        "Camera inspection available",
        "Kitchen, bathroom & sewer drains",
        "Preventive treatment options",
      ],
      badge: "Most Popular",
      badgeColor: "primary",
      featured: true,
      cta: { label: "Book Drain Cleaning", href: "/contact" },
    },
    {
      id: "leak-repair",
      slug: "leak-repair",
      category: "repair",
      icon: "💧",
      name: "Leak Detection & Repair",
      shortDesc: "Find hidden leaks before they cause expensive damage.",
      fullDesc:
        "Even a small leak can cause thousands in water damage over time. Our leak detection uses non-invasive technology to find hidden leaks in walls, floors, and underground — without tearing your home apart.",
      highlights: [
        "Non-invasive detection technology",
        "Under slab & wall leaks",
        "Water main & supply line repair",
        "Same-day repair available",
      ],
      badge: null,
      badgeColor: null,
      featured: true,
      cta: { label: "Schedule Inspection", href: "/contact" },
    },
    {
      id: "water-heater",
      slug: "water-heater",
      category: "installation",
      icon: "🔥",
      name: "Water Heater Services",
      shortDesc: "Installation, repair, and replacement — tank & tankless.",
      fullDesc:
        "Whether your water heater is failing, inefficient, or you're ready to upgrade to a tankless system, our certified technicians handle all makes and models. We'll help you choose the right solution for your home and budget.",
      highlights: [
        "Tank & tankless systems",
        "Same-day installation available",
        "Energy-efficient upgrades",
        "10-year manufacturer warranty support",
      ],
      badge: null,
      badgeColor: null,
      featured: false,
      cta: { label: "Get Water Heater Quote", href: "/contact" },
    },
    {
      id: "pipe-services",
      slug: "pipe-services",
      category: "installation",
      icon: "🔩",
      name: "Pipe Installation & Repair",
      shortDesc: "Re-piping, new installations, and pipe repair done right.",
      fullDesc:
        "From single pipe repairs to full home re-piping, we work with copper, PVC, PEX, and CPVC materials. Our team ensures every connection is watertight and code-compliant.",
      highlights: [
        "Full home re-piping",
        "Copper, PEX & PVC",
        "Code-compliant work",
        "Pressure testing on completion",
      ],
      badge: null,
      badgeColor: null,
      featured: false,
      cta: { label: "Get Pipe Quote", href: "/contact" },
    },
    {
      id: "sewer-services",
      slug: "sewer-services",
      category: "repair",
      icon: "🏗️",
      name: "Sewer Line Services",
      shortDesc: "Camera inspections, repairs, and trenchless replacement.",
      fullDesc:
        "Sewer problems are serious. We use video camera inspection to diagnose sewer line issues and offer trenchless repair options that save your yard and landscaping while fixing the problem permanently.",
      highlights: [
        "Video camera inspection",
        "Trenchless repair options",
        "Root removal",
        "Full sewer replacement",
      ],
      badge: null,
      badgeColor: null,
      featured: false,
      cta: { label: "Book Sewer Inspection", href: "/contact" },
    },
    {
      id: "bathroom-kitchen",
      slug: "bathroom-kitchen",
      category: "installation",
      icon: "🚿",
      name: "Bathroom & Kitchen Plumbing",
      shortDesc: "Fixtures, faucets, toilets, sinks — installation & repair.",
      fullDesc:
        "Remodeling or replacing fixtures? We handle all bathroom and kitchen plumbing including toilet installation, faucet replacement, garbage disposals, dishwashers, and full renovation rough-in.",
      highlights: [
        "Faucet & fixture replacement",
        "Toilet installation & repair",
        "Garbage disposal installation",
        "Full renovation plumbing",
      ],
      badge: null,
      badgeColor: null,
      featured: false,
      cta: { label: "Schedule Installation", href: "/contact" },
    },
    {
      id: "inspection",
      slug: "inspection",
      category: "maintenance",
      icon: "🔍",
      name: "Plumbing Inspection",
      shortDesc: "Comprehensive home plumbing checkup — catch issues before they escalate.",
      fullDesc:
        "Our 30-point plumbing inspection covers every system in your home. Ideal for new homebuyers, annual checkups, or if you haven't had an inspection in over 2 years. We provide a written report with recommendations.",
      highlights: [
        "30-point inspection checklist",
        "Written report provided",
        "Ideal for home buyers",
        "Camera inspection available add-on",
      ],
      badge: "Recommended Annually",
      badgeColor: "success",
      featured: false,
      cta: { label: "Book Inspection", href: "/contact" },
    },
  ],

  // ─── Homepage featured services (subset) ─────────────────────────
  homepageFeaturedIds: [
    "emergency-plumbing",
    "drain-cleaning",
    "leak-repair",
    "water-heater",
    "pipe-services",
    "sewer-services",
  ],
};
