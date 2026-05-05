import siteConfig from "@/config/site.config";
import { servicesConfig } from "@/config/services.config";
import CTASection from "@/components/sections/CTASection";
import TrustBar from "@/components/sections/TrustBar";
import styles from "@/app/page-shell.module.css";
import ServicesPageClient from "./ServicesPageClient";

export const metadata = {
  title: `All Plumbing Services | ${siteConfig.brand.name}`,
  description: servicesConfig.page.subheading,
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroBadge}>{servicesConfig.page.badge}</div>
          <h1 className={styles.heroTitle}>{servicesConfig.page.heading}</h1>
          <p className={styles.heroSubtitle}>{servicesConfig.page.subheading}</p>
          <div className={styles.heroActions}>
            <a href={siteConfig.contact.phoneHref} className="btn btn--outline btn--lg">
              📞 {siteConfig.contact.phone}
            </a>
            <a href={siteConfig.nav.cta.href} className="btn btn--primary btn--lg">
              {siteConfig.nav.cta.label}
            </a>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Browse by category</p>
            <h2>Find the right plumbing service fast</h2>
            <p>
              Every service card below links to a dedicated detail page so customers can go from
              research to booking without hitting a dead end.
            </p>
          </div>
          <ServicesPageClient />
        </div>
      </section>

      <TrustBar data={siteConfig.trustBar} />
      <CTASection data={siteConfig.ctaSection} brand={siteConfig.brand} />
    </div>
  );
}