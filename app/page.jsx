/**
 * app/page.jsx — Home Page
 * Assembles sections purely from config data. Zero hardcoded content here.
 */
import siteConfig from "@/config/site.config";
import { pricingConfig } from "@/config/pricing.config";
import { testimonialsConfig } from "@/config/testimonials.config";
import Hero         from "@/components/sections/Hero";
import TrustBar     from "@/components/sections/TrustBar";
import Pricing      from "@/components/sections/Pricing";
import ServicesGrid from "@/components/sections/ServicesGrid";
import HowItWorks   from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Plans        from "@/components/sections/Plans";
import CTASection   from "@/components/sections/CTASection";

export const metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.description,
};

const homepageTestimonials = {
  headline: testimonialsConfig.page.heading,
  subheadline: testimonialsConfig.page.subheadline,
  items: testimonialsConfig.homepageFeaturedIds
    .map((reviewId) => testimonialsConfig.reviews.find((review) => review.id === reviewId))
    .filter(Boolean)
    .map((review) => ({
      ...review,
      initials: review.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2),
      date: new Date(review.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    })),
};

const homepagePlans = {
  headline: pricingConfig.maintenancePlans.page.heading,
  subheadline: pricingConfig.maintenancePlans.page.subheading,
  cta: { label: "View All Plans", href: "/plans" },
  plans: pricingConfig.maintenancePlans.plans.map((plan) => ({
    id: plan.id,
    name: plan.name,
    price: plan.price,
    period: plan.billingCycle,
    recommended: Boolean(plan.highlighted),
    cta: plan.cta,
    perks: plan.features,
  })),
};

export default function HomePage() {
  return (
    <>
      <Hero         data={siteConfig.hero} />
      <TrustBar     data={siteConfig.trustBar} />
      <ServicesGrid featured />
      <HowItWorks   data={siteConfig.howItWorks} />
      <Testimonials data={homepageTestimonials} />
      <Pricing />
      <Plans        data={homepagePlans} />
      <CTASection   data={siteConfig.ctaSection} brand={siteConfig.brand} />
    </>
  );
}
