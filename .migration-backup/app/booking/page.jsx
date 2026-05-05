import BookingForm from "@/components/features/BookingForm";
import { bookingConfig } from "@/config/booking.config";
import siteConfig from "@/config/site.config";
import styles from "@/app/page-shell.module.css";

export const metadata = {
  title: `Book a Plumber | ${siteConfig.brand.name}`,
  description: `Book a ${siteConfig.brand.name} plumber in ${siteConfig.brand.serviceArea}. Fast response and upfront pricing.`,
};

export default function BookingPage({ searchParams }) {
  const { page } = bookingConfig;
  const selectedService = typeof searchParams?.service === "string" ? searchParams.service : "";
  const selectedTier = typeof searchParams?.tier === "string" ? searchParams.tier : "";

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroBadge}>Fast confirmation</div>
          <h1 className={styles.heroTitle}>{page.heading}</h1>
          <p className={styles.heroSubtitle}>{page.subheading}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={styles.stack}>
              <div className={styles.banner}>🚨 {page.emergencyNote}</div>
              <BookingForm defaultType={selectedService} />
            </div>

            <aside className={styles.stack}>
              <div className={`${styles.card} ${styles.cardAccent}`}>
                <p className={styles.eyebrow}>Direct contact</p>
                <h2 className={styles.cardTitle}>Need a faster answer?</h2>
                <p className={styles.cardText}>Call or email and our dispatch team will confirm the next available slot.</p>
                <a href={siteConfig.contact.phoneHref} className="btn btn--primary">
                  📞 {siteConfig.contact.phone}
                </a>
                <a href={`mailto:${siteConfig.brand.email}`} className="btn btn--outline-dark">
                  ✉️ {siteConfig.brand.email}
                </a>
              </div>

              <div className={styles.card}>
                <p className={styles.eyebrow}>What to expect</p>
                <div className={styles.list}>
                  {siteConfig.guarantees.map((guarantee) => (
                    <div key={guarantee.title} className={styles.listItem}>
                      <span aria-hidden="true">✓</span>
                      <span>
                        <strong>{guarantee.title}</strong> {guarantee.description}
                      </span>
                    </div>
                  ))}
                </div>
                {selectedTier && (
                  <p className={styles.cardText}>Selected plan interest: {selectedTier}</p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}