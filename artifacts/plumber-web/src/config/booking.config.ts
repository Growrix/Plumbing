import { servicesConfig } from "./services.config";

export const bookingConfig = {
  page: {
    heading: "Book a Plumber",
    subheading: "Fill out the form and we will confirm within 15 minutes by phone or text.",
    emergencyNote: "For emergencies, CALL us directly at (02) 9876 5432 for the fastest response.",
    successMessage: "Thanks! We have received your booking request.",
    successSubMessage: "Our team will reach out to confirm your appointment time within 15 minutes.",
  },
  serviceOptions: [
    ...servicesConfig.items.map(s => ({ value: s.slug, label: s.name })),
    { value: "maintenance-plan", label: "Maintenance Plan Enquiry" },
    { value: "other", label: "Other / Not sure" },
  ],
  urgencyOptions: [
    { value: "emergency", label: "Emergency — ASAP" },
    { value: "today", label: "Today if possible" },
    { value: "this-week", label: "This week" },
    { value: "flexible", label: "I am flexible" },
  ],
  timeWindows: [
    { value: "morning", label: "Morning (7 AM to 12 PM)" },
    { value: "afternoon", label: "Afternoon (12 PM to 5 PM)" },
    { value: "evening", label: "Evening (5 PM to 6 PM)" },
    { value: "any", label: "Any time" },
  ],
  contactMethods: [
    { value: "phone", label: "Phone call" },
    { value: "text", label: "Text/SMS" },
    { value: "email", label: "Email" },
  ],
  australianStates: [
    { value: "nsw", label: "NSW" },
    { value: "vic", label: "VIC" },
    { value: "qld", label: "QLD" },
    { value: "sa", label: "SA" },
    { value: "wa", label: "WA" },
    { value: "tas", label: "TAS" },
    { value: "act", label: "ACT" },
    { value: "nt", label: "NT" },
  ],
};