/**
 * TESTIMONIALS CONFIG
 * Add, edit, or remove reviews here.
 */

export const testimonialsConfig = {
  // ─── Page-level copy ─────────────────────────────────────────────
  page: {
    heading: "Trusted by Thousands of Homeowners",
    subheading:
      "Don't take our word for it. Here's what our customers say after we've helped them.",
    badge: "4.9★ Average Rating",
    totalReviews: "2,400+",
    platforms: [
      { name: "Google", rating: "4.9", count: "1,200+" },
      { name: "Yelp", rating: "4.8", count: "680+" },
      { name: "HomeAdvisor", rating: "5.0", count: "320+" },
    ],
  },

  aggregate: {
    rating: "4.9",
    count: "2,400+",
  },

  reviewCta: {
    label: "Leave a Google Review",
    href: "https://google.com",
  },

  // ─── Reviews ─────────────────────────────────────────────────────
  reviews: [
    {
      id: "1",
      name: "Sarah M.",
      location: "Riverside, CA",
      service: "Emergency Plumbing",
      rating: 5,
      date: "2024-11-15",
      text: "Pipe burst at 2 AM on a Sunday. I called FlowFix in a panic and they had someone at my door in under 45 minutes. The technician was calm, professional, and fixed everything without making me feel like I was being taken advantage of. The price was exactly what they quoted. I can't thank them enough.",
      verified: true,
      platform: "Google",
      avatar: null, // path to image or null for initials
      featured: true,
    },
    {
      id: "2",
      name: "David K.",
      location: "Corona, CA",
      service: "Drain Cleaning",
      rating: 5,
      date: "2024-10-28",
      text: "My kitchen drain had been slow for months. FlowFix cleared it completely with hydro-jetting and also caught a small issue with my garbage disposal connection — which they fixed on the spot. Super honest guys. I'm on their maintenance plan now.",
      verified: true,
      platform: "Yelp",
      avatar: null,
      featured: true,
    },
    {
      id: "3",
      name: "Linda T.",
      location: "Moreno Valley, CA",
      service: "Water Heater Replacement",
      rating: 5,
      date: "2024-09-10",
      text: "Got three quotes for a new water heater. FlowFix wasn't the cheapest, but they explained everything clearly, showed up exactly when they said, and finished in 3 hours. The new tankless unit is amazing. Worth every penny.",
      verified: true,
      platform: "HomeAdvisor",
      avatar: null,
      featured: true,
    },
    {
      id: "4",
      name: "Marcus R.",
      location: "Perris, CA",
      service: "Leak Detection",
      rating: 5,
      date: "2024-08-22",
      text: "I noticed my water bill going up but couldn't find any visible leaks. FlowFix found a slab leak within 30 minutes using their detection equipment. They gave me a clear explanation and repair options at three different price points. Honest, fast, and they saved my foundation.",
      verified: true,
      platform: "Google",
      avatar: null,
      featured: false,
    },
    {
      id: "5",
      name: "Priya N.",
      location: "Riverside, CA",
      service: "Bathroom Renovation Plumbing",
      rating: 5,
      date: "2024-07-14",
      text: "Used FlowFix for a full bathroom remodel rough-in. They coordinated perfectly with my contractor, were always on time, and their work passed inspection first try. Highly recommend for renovation projects.",
      verified: true,
      platform: "Google",
      avatar: null,
      featured: false,
    },
    {
      id: "6",
      name: "James O.",
      location: "Norco, CA",
      service: "Sewer Inspection",
      rating: 5,
      date: "2024-06-30",
      text: "Bought an older home and FlowFix did a full sewer camera inspection before closing. Found root intrusion I wouldn't have known about. The seller ended up paying for the repair. This inspection literally saved me thousands.",
      verified: true,
      platform: "Yelp",
      avatar: null,
      featured: false,
    },
  ],

  // ─── Homepage featured review IDs ────────────────────────────────
  homepageFeaturedIds: ["1", "2", "3"],
};
