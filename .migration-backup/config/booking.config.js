/**
 * BOOKING & CONTACT FORM CONFIG
 * Control form fields, service options, and time slots here.
 */

import { servicesConfig } from "@/config/services.config";
import { siteConfig } from "@/config/site.config";

export const bookingConfig = {
  page: {
    heading: "Book a Plumber",
    subheading:
      "Fill out the form below and we'll confirm your booking within 15 minutes by phone or text.",
    emergencyNote:
      `For emergencies, please CALL us directly at ${siteConfig.contact.phone} for the fastest response.`,
    successMessage:
      "Thanks! We've received your booking request. Expect a confirmation call or text within 15 minutes.",
  },

  // Service type options in the booking dropdown
  serviceOptions: [
    ...servicesConfig.items.map((service) => ({
      value: service.slug,
      label: `${service.icon} ${service.name}`,
    })),
    { value: "maintenance-plan", label: "Maintenance Plan Inquiry" },
    { value: "other", label: "Other / Not sure" },
  ],

  // Preferred contact method
  contactMethods: [
    { value: "phone", label: "Phone call" },
    { value: "text", label: "Text message" },
    { value: "email", label: "Email" },
  ],

  // Urgency levels
  urgencyOptions: [
    { value: "emergency", label: "Emergency — ASAP", color: "emergency" },
    { value: "today", label: "Today if possible", color: "warning" },
    { value: "this-week", label: "This week", color: "primary" },
    { value: "flexible", label: "I'm flexible", color: "success" },
  ],

  // Preferred time windows
  timeWindows: [
    { value: "morning", label: "Morning (7 AM – 12 PM)" },
    { value: "afternoon", label: "Afternoon (12 PM – 5 PM)" },
    { value: "evening", label: "Evening (5 PM – 8 PM)" },
    { value: "any", label: "Any time" },
  ],

  // Form fields to display (control visibility here)
  fields: {
    firstName: { show: true, required: true },
    lastName: { show: true, required: true },
    phone: { show: true, required: true },
    email: { show: true, required: false },
    address: { show: true, required: true },
    serviceType: { show: true, required: true },
    urgency: { show: true, required: true },
    preferredDate: { show: true, required: false },
    timeWindow: { show: true, required: false },
    contactMethod: { show: true, required: false },
    description: { show: true, required: false, maxLength: 500 },
    photos: { show: true, required: false, maxFiles: 3 },
    agreeToTerms: { show: true, required: true },
  },
};
