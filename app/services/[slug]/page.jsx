import Link from "next/link";
import { notFound } from "next/navigation";
import { pricingConfig } from "@/config/pricing.config";
import { servicesConfig } from "@/config/services.config";
import siteConfig from "@/config/site.config";
import CTASection from "@/components/sections/CTASection";
import styles from "@/app/page-shell.module.css";

function resolveSlug(params) {
  if (!params) {
    return "";
  }

  if (Array.isArray(params.slug)) {
    return params.slug.join("/");
  }

  return typeof params.slug === "string" ? params.slug : "";
}

function getServiceBySlug(params) {
  const slug = resolveSlug(params);

  return servicesConfig.items.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return servicesConfig.items.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params);

  if (!service) {
    return {};
  }

  return {
    title: `${service.name} | ${siteConfig.brand.name}`,
    description: service.fullDesc,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesConfig.items
    .filter((item) => item.slug !== service.slug && item.category === service.category)
    .slice(0, 3);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span>{service.name}</span>
          </div>
          <div className={styles.heroBadge}>{service.badge || service.category}</div>
          <h1 className={styles.heroTitle}>{service.name}</h1>
          <p className={styles.heroSubtitle}>{service.fullDesc}</p>
          <div className={styles.heroActions}>
            <Link href={`/booking?service=${service.slug}`} className="btn btn--primary btn--lg">
              Book This Service
            </Link>
            <a href={siteConfig.contact.phoneHref} className="btn btn--outline btn--lg">
              📞 {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={styles.stack}>
              <div className={styles.sectionHeader}>
                <p className={styles.eyebrow}>What&apos;s included</p>
                <h2>What homeowners can expect</h2>
                <p>
                  This P0 detail page is intentionally lean, but it already gives visitors a clear
                  path from problem recognition to booking.
                </p>
              </div>
              <div className={styles.cardGrid}>
                {service.highlights.map((highlight) => (
                  <div key={highlight} className={`${styles.card} ${styles.cardMuted}`}>
                    <div className={styles.iconBubble} aria-hidden="true">{service.icon}</div>
                    <h2 className={styles.cardTitle}>{highlight}</h2>
                    <p className={styles.cardText}>{service.shortDesc}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className={styles.stack}>
              <div className={`${styles.card} ${styles.cardAccent}`}>
                <p className={styles.eyebrow}>Fastest path</p>
                <h2 className={styles.cardTitle}>Book or call now</h2>
                <p className={styles.cardText}>
                  We use the same dispatch details across every route so the booking flow stays
                  stable while deeper SEO content is added later.
                </p>
                <Link href={`/booking?service=${service.slug}`} className="btn btn--primary">
                  Start Booking
                </Link>
                <a href={siteConfig.contact.phoneHref} className="btn btn--outline-dark">
                  Call {siteConfig.contact.phone}
                </a>
              </div>

              <div className={styles.card}>
                <p className={styles.eyebrow}>Pricing snapshot</p>
                <h2 className={styles.cardTitle}>{pricingConfig.page.heading}</h2>
                <p className={styles.cardText}>{pricingConfig.page.disclaimer}</p>
                <Link href="/plans" className="btn btn--outline-dark">
                  View Plans
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="section section--surface">
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Related services</p>
              <h2>Keep exploring</h2>
            </div>
            <div className={styles.cardGrid}>
              {relatedServices.map((related) => (
                <article key={related.slug} className={styles.card}>
                  <div className={styles.iconBubble} aria-hidden="true">{related.icon}</div>
                  <h2 className={styles.cardTitle}>{related.name}</h2>
                  <p className={styles.cardText}>{related.shortDesc}</p>
                  <Link href={`/services/${related.slug}`} className="btn btn--outline-dark">
                    View Service
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection data={siteConfig.ctaSection} brand={siteConfig.brand} />
    </div>
  );
}