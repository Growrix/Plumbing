import Link from "next/link";
import siteConfig from "@/config/site.config";
import styles from "./page.module.css";

export const metadata = {
  title: `Emergency Plumbing | ${siteConfig.brand.name}`,
  description: siteConfig.emergency.subheadline,
};

export default function EmergencyPage() {
  const { emergency, brand } = siteConfig;

  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroBadge}>{emergency.badge}</div>
          <h1 className={styles.headline}>{emergency.headline}</h1>
          <p className={styles.sub}>{emergency.subheadline}</p>

          <a href={emergency.phone} className={styles.callBtn}>
            <span className={styles.callIcon}>📞</span>
            <span>
              <span className={styles.callLabel}>Call Emergency Line</span>
              <span className={styles.callNumber}>{emergency.phoneDisplay}</span>
            </span>
            <span className={styles.pulse} aria-hidden="true" />
          </a>

          <p className={styles.responseClaim}>{emergency.responseClaim}</p>
        </div>
      </section>

      {/* Steps */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>What Happens When You Call</h2>
          </div>
          <div className={styles.steps}>
            {emergency.steps.map((step) => (
              <div key={step.step} className={styles.step}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <div className={styles.stepNum}>{step.step}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="section section--surface">
        <div className="container">
          <div className="section-header">
            <h2>{emergency.safetyTips.headline}</h2>
          </div>
          <ul className={styles.tips}>
            {emergency.safetyTips.tips.map((tip, i) => (
              <li key={i} className={styles.tip}>
                <span className={styles.tipNum}>{String(i + 1).padStart(2, "0")}</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
}
