export const aboutConfig = {
  hero: {
    badge: "15+ Years Serving Sydney",
    heading: "Built on Trust. Driven by Quality.",
    subheading: "FlowMate Plumbing started in 2009 with a simple promise: show up on time, quote fairly, and fix it right the first time.",
  },
  story: {
    paragraphs: [
      "FlowMate Plumbing was founded in 2009 by Marcus Chen, a third-generation plumber who grew up watching his father and grandfather build a reputation on honesty and craftsmanship in Western Sydney.",
      "What started as a one-man operation out of a single van has grown into one of Sydney's most trusted plumbing services, with a team of 22 licensed plumbers covering the entire Greater Sydney area.",
      "We built this business on a simple philosophy: treat every customer's home like your own. That means upfront pricing, punctual arrivals, clean workmanship, and a guarantee we actually stand behind.",
    ],
    stats: [
      { value: "2009", label: "Founded" },
      { value: "22", label: "Licensed Plumbers" },
      { value: "14,000+", label: "Jobs Completed" },
      { value: "4.9", label: "Star Rating" },
    ],
  },
  values: [
    { icon: "ShieldCheck", title: "Honesty First", description: "No hidden fees, no upselling. We quote what it costs and stick to it." },
    { icon: "Clock", title: "Respect Your Time", description: "We show up in the time window we promise — or we call ahead if there is a delay." },
    { icon: "Award", title: "Quality Guaranteed", description: "Every job is backed by a written workmanship guarantee. We stand behind our work." },
    { icon: "Heart", title: "Community First", description: "We are a Sydney business. We sponsor local junior footy and give back to the communities we serve." },
  ],
};

export const careersConfig = {
  hero: {
    headline: "Build a Career That Shows Up for People",
    subheadline: "We hire skilled plumbers, apprentices, and support staff who care about quality and treating customers well.",
  },
  benefits: [
    { icon: "DollarSign", title: "Competitive Pay", desc: "Clear pay bands, overtime opportunities, and performance bonuses tied to quality work." },
    { icon: "BookOpen", title: "Training Support", desc: "We invest in continuing education, code updates, and certification pathways for the whole team." },
    { icon: "Truck", title: "Well-Stocked Vans", desc: "Technicians get fully stocked vehicles and modern tools so jobs can be completed on the first visit." },
    { icon: "Users", title: "Respectful Culture", desc: "No drama, clear expectations, and a team that genuinely supports each other on the job." },
  ],
  openings: [] as Array<{ title: string; type: string; location: string; href: string }>,
  resumeCta: { label: "Send Us Your Resume", email: "careers@flowmateplumbing.com.au" },
};

export const legalConfig = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "1 January 2025",
    sections: [
      { heading: "Information We Collect", body: "We collect information you provide when booking a service, including your name, address, phone number, and email address. We also collect technical data about your use of our website." },
      { heading: "How We Use Your Information", body: "We use your information to schedule and deliver plumbing services, send booking confirmations and service reminders, and improve our website and service quality. We do not sell your personal information to third parties." },
      { heading: "Data Security", body: "Your information is stored securely and protected by industry-standard encryption. Access is restricted to authorised FlowMate staff who need it to provide our services." },
      { heading: "Your Rights", body: "You have the right to access, correct, or delete the personal information we hold about you. Contact us at hello@flowmateplumbing.com.au to make a request." },
      { heading: "Cookies", body: "Our website uses cookies to improve your experience and analyse site traffic. You can disable cookies in your browser settings, but this may affect site functionality." },
      { heading: "Contact Us", body: "For privacy enquiries, contact our Privacy Officer at hello@flowmateplumbing.com.au or (02) 9876 5432." },
    ],
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "1 January 2025",
    sections: [
      { heading: "Acceptance of Terms", body: "By engaging FlowMate Plumbing services, you agree to these terms and conditions. These terms apply to all services provided by FlowMate Plumbing Pty Ltd (ABN: 12 345 678 901)." },
      { heading: "Service Bookings", body: "Bookings are confirmed via phone or text. We reserve the right to reschedule due to emergency callouts, but will always provide advance notice and prioritise your next available slot." },
      { heading: "Pricing and Quotes", body: "All quotes are provided upfront and in writing. No work begins until you have approved the price. Variation in scope may require a revised quote, which will be presented before proceeding." },
      { heading: "Workmanship Guarantee", body: "All labour is guaranteed for 12 months from completion. This guarantee covers defects in workmanship but does not cover damage caused by misuse, third-party modifications, or normal wear and tear." },
      { heading: "Payment", body: "Payment is due upon completion of work. We accept cash, card (Visa, Mastercard), and bank transfer. Accounts for regular customers available on application." },
      { heading: "Limitation of Liability", body: "FlowMate Plumbing's liability is limited to the cost of the services provided. We are not liable for consequential loss or damage arising from plumbing failures beyond our control." },
    ],
  },
  license: {
    title: "License Information",
    lastUpdated: "1 January 2025",
    sections: [
      { heading: "NSW Plumbing License", body: "FlowMate Plumbing holds NSW Plumbing License #PL-384721, issued by NSW Fair Trading. All plumbers in our team hold current individual licenses." },
      { heading: "Insurance", body: "We carry full public liability insurance ($20 million) and professional indemnity insurance. Certificates available on request." },
      { heading: "Compliance", body: "All work is carried out in compliance with the Plumbing Code of Australia (PCA) and Australian Standard AS 3500. We obtain all required permits where applicable." },
    ],
  },
};