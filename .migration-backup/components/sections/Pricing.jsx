import Link from "next/link";
import { pricingConfig } from "@/config/pricing.config";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const { page, tiers } = pricingConfig;

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="badge badge--accent" style={{ marginBottom: "1rem" }}>
            {page.badge}
          </span>
          <h2>{page.heading}</h2>
          <p>{page.subheading}</p>
        </div>

        <div className={styles.grid}>
          {tiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>

        {page.disclaimer && (
          <p className={styles.disclaimer}>{page.disclaimer}</p>
        )}
      </div>
    </section>
  );
}

function PricingCard({ tier }) {
  return (
    <div
      className={`card ${styles.card} ${tier.highlighted ? styles.highlighted : ""}`}
    >
      {tier.badge && (
        <span className={`badge badge--accent ${styles.badge}`}>{tier.badge}</span>
      )}

      <div className={styles.cardTop}>
        <h3 className={styles.tierName}>{tier.name}</h3>
        <p className={styles.tierTagline}>{tier.tagline}</p>

        <div className={styles.price}>
          <span className={styles.priceFrom}>{tier.priceFrom}</span>
          <span className={styles.priceSuffix}>{tier.priceSuffix}</span>
        </div>
      </div>

      <div className={styles.divider} />

      <ul className={styles.features}>
        {tier.includes.map((item) => (
          <li key={item} className={styles.featureItem}>
            <span className={styles.check}>✓</span>
            {item}
          </li>
        ))}
        {tier.excludes.map((item) => (
          <li key={item} className={`${styles.featureItem} ${styles.featureExcluded}`}>
            <span className={styles.cross}>✕</span>
            {item}
          </li>
        ))}
      </ul>

      {tier.note && (
        <p className={styles.tierNote}>{tier.note}</p>
      )}

      <Link
        href={tier.cta.href}
        className={`btn ${tier.highlighted ? "btn--accent" : "btn--primary"} ${styles.cta}`}
      >
        {tier.cta.label}
      </Link>
    </div>
  );
}
