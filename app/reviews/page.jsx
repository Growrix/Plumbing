import CTASection from "@/components/sections/CTASection";
import styles from "@/app/page-shell.module.css";
import siteConfig from "@/config/site.config";
import { testimonialsConfig } from "@/config/testimonials.config";

export const metadata = {
  title: `Customer Reviews | ${siteConfig.brand.name}`,
  description: `Read customer reviews for ${siteConfig.brand.name} in ${siteConfig.brand.serviceArea}.`,
};

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function ReviewsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroBadge}>{testimonialsConfig.page.badge}</div>
          <h1 className={styles.heroTitle}>What customers say after the job is done</h1>
          <p className={styles.heroSubtitle}>
            Rated {testimonialsConfig.aggregate.rating}/5 from {testimonialsConfig.aggregate.count} reviews across the major platforms homeowners already use.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.statGrid}>
            {testimonialsConfig.page.platforms.map((platform) => (
              <article key={platform.name} className={styles.statCard}>
                <span className={styles.statValue}>{platform.rating}</span>
                <span className={styles.statLabel}>{platform.name} · {platform.count}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Verified customer stories</p>
            <h2>Recent reviews</h2>
          </div>
          <div className={styles.cardGrid}>
            {testimonialsConfig.reviews.map((review) => (
              <article key={review.id} className={styles.card}>
                <div className={styles.inlineMeta}>
                  <span className={styles.iconBubble} aria-hidden="true">{getInitials(review.name)}</span>
                  <span>{review.platform}</span>
                  <span>{new Date(review.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                </div>
                <h2 className={styles.cardTitle}>{review.name}</h2>
                <p className={styles.cardText}>{review.text}</p>
                <div className={styles.inlineMeta}>
                  <span>{"★".repeat(review.rating)}</span>
                  <span>{review.service}</span>
                  <span>{review.location}</span>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.heroActions} style={{ marginTop: "2rem" }}>
            <a href={testimonialsConfig.reviewCta.href} className="btn btn--primary btn--lg" target="_blank" rel="noreferrer">
              {testimonialsConfig.reviewCta.label}
            </a>
          </div>
        </div>
      </section>

      <CTASection data={siteConfig.ctaSection} brand={siteConfig.brand} />
    </div>
  );
}