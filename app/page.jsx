/**
 * app/page.jsx — Home Page
 * Assembles sections purely from config data. Zero hardcoded content here.
 */
import siteConfig from "@/config/site.config";
import Hero         from "@/components/sections/Hero";
import TrustBar     from "@/components/sections/TrustBar";
import Services     from "@/components/sections/Services";
import HowItWorks   from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import PricingTiers from "@/components/sections/PricingTiers";
import Plans        from "@/components/sections/Plans";
import CTASection   from "@/components/sections/CTASection";

export const metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.description,
};

export default function HomePage() {
  return (
    <>
      <Hero         data={siteConfig.hero} />
      <TrustBar     data={siteConfig.trustBar} />
      <Services     data={siteConfig.services} />
      <HowItWorks   data={siteConfig.howItWorks} />
      <Testimonials data={siteConfig.testimonials} />
      <PricingTiers data={siteConfig.pricingTiers} />
      <Plans        data={siteConfig.maintenancePlans} />
      <CTASection   data={siteConfig.ctaSection} brand={siteConfig.brand} />
    </>
  );
}
