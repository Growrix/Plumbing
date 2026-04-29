import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero({ data }) {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Background grid pattern */}
      <div className={styles.grid} aria-hidden="true" />
      {/* Glow blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>

          {/* Badge */}
          <div className={`${styles.badge} animate-fade-up`}>
            {data.badge}
          </div>

          {/* Headline */}
          <h1 className={`${styles.headline} animate-fade-up animate-delay-1`}>
            {data.headline.map((line, i) => (
              <span key={i} className={styles.headlineLine}>
                {i === 1 ? (
                  <span className={styles.headlineAccent}>{line}</span>
                ) : line}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p className={`${styles.sub} animate-fade-up animate-delay-2`}>
            {data.subheadline}
          </p>

          {/* CTAs */}
          <div className={`${styles.ctas} animate-fade-up animate-delay-3`}>
            <Link href={data.primaryCta.href} className="btn btn--primary btn--lg">
              {data.primaryCta.label}
              <span className={styles.arrow}>→</span>
            </Link>
            <Link href={data.secondaryCta.href} className="btn btn--outline btn--lg">
              <span className={styles.phoneIcon}>📞</span>
              {data.secondaryCta.label}
            </Link>
          </div>

          {/* Trust note */}
          <p className={`${styles.trustNote} animate-fade-up animate-delay-4`}>
            {data.trustNote}
          </p>
        </div>

        {/* Stats grid */}
        <div className={`${styles.stats} animate-fade-up animate-delay-2`}>
          {data.stats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
