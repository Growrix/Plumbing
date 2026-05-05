import Link from "next/link";
import styles from "./Plans.module.css";

export default function Plans({ data }) {
  return (
    <section className="section section--dark" aria-labelledby="plans-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="plans-heading">{data.headline}</h2>
          <p>{data.subheadline}</p>
        </div>

        <div className={styles.grid}>
          {data.plans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.plan} ${plan.recommended ? styles.planRecommended : ""}`}
            >
              {plan.recommended && (
                <div className={styles.recommendedBadge}>⭐ Recommended</div>
              )}

              <div className={styles.planHead}>
                <div className={styles.planName}>{plan.name}</div>
                <div className={styles.planPrice}>
                  {plan.price}
                  <span className={styles.planPeriod}>{plan.period}</span>
                </div>
              </div>

              <ul className={styles.perks} role="list">
                {plan.perks.map((perk, i) => (
                  <li key={i} className={styles.perk}>
                    <span aria-hidden="true">✓</span> {perk}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.cta.href}
                className={`btn ${plan.recommended ? "btn--primary" : "btn--outline"} btn--lg`}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {plan.cta.label}
              </Link>
            </div>
          ))}
        </div>

        {data.cta && (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href={data.cta.href} className={styles.viewAll}>
              {data.cta.label} →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
