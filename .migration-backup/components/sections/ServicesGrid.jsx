import Link from "next/link";
import { servicesConfig } from "@/config/services.config";
import styles from "./ServicesGrid.module.css";

export default function ServicesGrid({ featured = false, limit }) {
  // Determine which services to show
  let services = servicesConfig.items;

  if (featured) {
    const featuredIds = servicesConfig.homepageFeaturedIds;
    services = featuredIds.map((id) =>
      servicesConfig.items.find((s) => s.id === id)
    ).filter(Boolean);
  }

  if (limit) {
    services = services.slice(0, limit);
  }

  return (
    <section className="section">
      <div className="container">
        {/* Section header from config */}
        <div className="section-header">
          {servicesConfig.page.badge && (
            <span className="badge badge--primary" style={{ marginBottom: "1rem" }}>
              {servicesConfig.page.badge}
            </span>
          )}
          <h2>{servicesConfig.page.heading}</h2>
          <p>{servicesConfig.page.subheading}</p>
        </div>

        {/* Services grid */}
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* "View all" link when showing featured */}
        {featured && (
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/services" className="btn btn--outline">
              View All Services →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const badgeClass = service.badgeColor
    ? `badge badge--${service.badgeColor}`
    : null;

  return (
    <div className={`card ${styles.card} ${service.category === "emergency" ? styles.cardEmergency : ""}`}>
      {/* Badge */}
      {service.badge && (
        <span className={`${badgeClass} ${styles.cardBadge}`}>
          {service.badge}
        </span>
      )}

      {/* Icon */}
      <div className={styles.cardIcon}>{service.icon}</div>

      {/* Content */}
      <h3 className={styles.cardTitle}>{service.name}</h3>
      <p className={styles.cardDesc}>{service.shortDesc}</p>

      {/* Highlights */}
      {service.highlights && (
        <ul className={styles.cardHighlights}>
          {service.highlights.map((h) => (
            <li key={h}>
              <span className={styles.checkIcon}>✓</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <Link
        href={service.cta.href}
        className={`btn ${service.category === "emergency" ? "btn--emergency" : "btn--primary"} ${styles.cardCta}`}
      >
        {service.cta.label}
      </Link>
    </div>
  );
}
