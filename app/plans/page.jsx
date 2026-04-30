import Plans from "@/components/sections/Plans";
import Pricing from "@/components/sections/Pricing";
import CTASection from "@/components/sections/CTASection";
import styles from "@/app/page-shell.module.css";
import { pricingConfig } from "@/config/pricing.config";
import siteConfig from "@/config/site.config";

export const metadata = {
  title: `Maintenance Plans | ${siteConfig.brand.name}`,
  description: pricingConfig.maintenancePlans.page.subheading,
};

const planSectionData = {
  headline: pricingConfig.maintenancePlans.page.heading,
  subheadline: pricingConfig.maintenancePlans.page.subheading,
  plans: pricingConfig.maintenancePlans.plans.map((plan) => ({
    id: plan.id,
    name: plan.name,
    price: plan.price,
    period: plan.billingCycle,
    recommended: Boolean(plan.highlighted),
    perks: plan.features,
    cta: plan.cta,
  })),
};

export default function PlansPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroBadge}>{pricingConfig.maintenancePlans.page.badge}</div>
          <h1 className={styles.heroTitle}>{pricingConfig.maintenancePlans.page.heading}</h1>
          <p className={styles.heroSubtitle}>{pricingConfig.maintenancePlans.page.subheading}</p>
        </div>
      </section>

      <Plans data={planSectionData} />
      <Pricing />
      <CTASection data={siteConfig.ctaSection} brand={siteConfig.brand} />
    </div>
  );
}