import { careersConfig } from "@/config/careers.config";
import siteConfig from "@/config/site.config";
import styles from "@/app/page-shell.module.css";

export const metadata = {
  title: `Careers | ${siteConfig.brand.name}`,
  description: `Explore careers and hiring information for ${siteConfig.brand.name}.`,
};

export default function CareersPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroBadge}>Careers</div>
          <h1 className={styles.heroTitle}>{careersConfig.hero.headline}</h1>
          <p className={styles.heroSubtitle}>{careersConfig.hero.subheadline}</p>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Why work here</p>
            <h2>Support, tools, and a clear standard for quality</h2>
          </div>
          <div className={styles.cardGrid}>
            {careersConfig.benefits.map((benefit) => (
              <article key={benefit.title} className={styles.card}>
                <div className={styles.iconBubble} aria-hidden="true">{benefit.icon}</div>
                <h2 className={styles.cardTitle}>{benefit.title}</h2>
                <p className={styles.cardText}>{benefit.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Open roles</p>
            <h2>Current openings</h2>
          </div>
          {careersConfig.openings.length > 0 ? (
            <div className={styles.stack}>
              {careersConfig.openings.map((opening) => (
                <article key={opening.title} className={styles.roleCard}>
                  <h2 className={styles.cardTitle}>{opening.title}</h2>
                  <p className={styles.cardText}>{opening.summary}</p>
                  <a href={opening.href} className="btn btn--primary">Apply Now</a>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h2 className={styles.cardTitle}>We&apos;re not hiring right now</h2>
              <p className={styles.cardText}>
                Send your resume anyway. Strong candidates often get first review when the next role opens.
              </p>
              <a href={`mailto:${careersConfig.resumeCta.email}`} className="btn btn--primary" style={{ marginTop: "1rem" }}>
                {careersConfig.resumeCta.label}
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}