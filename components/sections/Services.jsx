import Link from "next/link";
import styles from "./Services.module.css";

function ServiceCard({ item }) {
  return (
    <Link
      href={item.href}
      className={`${styles.card} ${item.urgent ? styles.cardUrgent : ""} ${item.popular ? styles.cardPopular : ""}`}
      aria-label={`${item.title} — ${item.description}`}
    >
      {item.popular && <span className="badge badge--popular">Most Requested</span>}

      <div className={styles.cardHead}>
        <span className={styles.icon} aria-hidden="true">{item.icon}</span>
        <div>
          <h3 className={styles.title}>{item.title}</h3>
          {item.time && (
            <span className={styles.time}>
              ⏱ {item.time}
            </span>
          )}
        </div>
      </div>

      <p className={styles.description}>{item.description}</p>

      <span className={styles.cta}>
        Learn more <span className={styles.arrow}>→</span>
      </span>
    </Link>
  );
}

export default function Services({ data }) {
  return (
    <section className="section section--surface" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="services-heading">{data.headline}</h2>
          <p>{data.subheadline}</p>
        </div>

        <div className={styles.grid}>
          {data.items.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>

        {data.viewAllCta && (
          <div className={styles.viewAll}>
            <Link href={data.viewAllCta.href} className="btn btn--outline-dark">
              {data.viewAllCta.label} →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
