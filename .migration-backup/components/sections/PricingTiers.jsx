import Link from "next/link";
import styles from "./PricingTiers.module.css";

function TierCard({ tier }) {
  return (
    <div className={`${styles.card} ${tier.highlighted ? styles.cardHighlighted : ""}`}>
      {tier.badge && (
        <div className={styles.badge}>{tier.badge}</div>
      )}

      <div className={styles.cardHead}>
        <div className={styles.tierName}>{tier.name}</div>
        <div className={styles.price}>{tier.price}</div>
        <div className={styles.period}>{tier.period}</div>
        <p className={styles.desc}>{tier.description}</p>
      </div>

      <ul className={styles.features} role="list">
        {tier.features.map((f, i) => (
          <li key={i} className={styles.feature}>
            <span className={styles.check} aria-hidden="true">✓</span>
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={tier.cta.href}
        className={`btn ${tier.highlighted ? "btn--primary" : "btn--outline-dark"} btn--lg`}
        style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}
      >
        {tier.cta.label}
      </Link>
    </div>
  );
}

export default function PricingTiers({ data }) {
  return (
    <section className="section" aria-labelledby="pricing-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="pricing-heading">{data.headline}</h2>
          <p>{data.subheadline}</p>
          {data.note && <p className={styles.note}>{data.note}</p>}
        </div>

        <div className={styles.grid}>
          {data.tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
