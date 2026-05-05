import { aboutConfig } from "@/config/pages.config";
import siteConfig from "@/config/site.config";
import CTASection from "@/components/sections/CTASection";
import styles from "@/app/page-shell.module.css";

export const metadata = {
  title: `About Us | ${siteConfig.brand.name}`,
  description: `Learn about ${siteConfig.brand.name} and how we serve ${siteConfig.brand.serviceArea}.`,
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroBadge}>{aboutConfig.hero.badge}</div>
          <h1 className={styles.heroTitle}>{aboutConfig.hero.heading}</h1>
          <p className={styles.heroSubtitle}>{aboutConfig.hero.subheading}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={styles.stack}>
              <div className={styles.sectionHeader}>
                <p className={styles.eyebrow}>Our story</p>
                <h2>Built to be the call people trust</h2>
              </div>
              <div className={`${styles.card} ${styles.cardMuted}`}>
                {aboutConfig.story.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={styles.cardText}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className={styles.stack}>
              <div className={styles.card}>
                <p className={styles.eyebrow}>Team snapshot</p>
                <h2 className={styles.cardTitle}>{aboutConfig.teamHighlight.heading}</h2>
                <p className={styles.cardText}>{aboutConfig.teamHighlight.subheading}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>What we value</p>
            <h2>How the company operates</h2>
          </div>
          <div className={styles.cardGrid}>
            {aboutConfig.values.map((value) => (
              <article key={value.title} className={styles.card}>
                <div className={styles.iconBubble} aria-hidden="true">{value.icon}</div>
                <h2 className={styles.cardTitle}>{value.title}</h2>
                <p className={styles.cardText}>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Credentials</p>
            <h2>Training and certifications</h2>
          </div>
          <div className={styles.statGrid}>
            {aboutConfig.teamHighlight.stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.legalLinks} style={{ marginTop: "1.25rem" }}>
            {aboutConfig.certifications.map((certification) => (
              <span key={certification} className={styles.chip}>{certification}</span>
            ))}
          </div>
        </div>
      </section>

      <CTASection data={siteConfig.ctaSection} brand={siteConfig.brand} />
    </div>
  );
}