import Link from "next/link";
import styles from "./CTASection.module.css";

export default function CTASection({ data, brand }) {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.bg} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.pulse} aria-hidden="true">
            <span>📞</span>
          </div>
          <h2 id="cta-heading" className={styles.headline}>
            {data.headline}
          </h2>
          <p className={styles.sub}>{data.subheadline}</p>
          <div className={styles.ctas}>
            <Link href={data.primaryCta.href} className="btn btn--primary btn--lg">
              {data.primaryCta.label} →
            </Link>
            <Link href={data.secondaryCta.href} className="btn btn--outline btn--lg">
              {data.secondaryCta.label}
            </Link>
          </div>
          {data.note && <p className={styles.note}>{data.note}</p>}
        </div>
      </div>
    </section>
  );
}
