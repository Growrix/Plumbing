import Link from "next/link";
import styles from "./HowItWorks.module.css";

export default function HowItWorks({ data }) {
  return (
    <section className="section section--dark" aria-labelledby="how-it-works-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="how-it-works-heading">{data.headline}</h2>
          <p>{data.subheadline}</p>
        </div>

        <div className={styles.steps}>
          {data.steps.map((step, i) => (
            <div key={step.step} className={styles.step}>
              {/* Connector line */}
              {i < data.steps.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}

              <div className={styles.stepIcon} aria-hidden="true">
                {step.icon}
              </div>

              <div className={styles.stepNum} aria-hidden="true">
                {step.step}
              </div>

              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
