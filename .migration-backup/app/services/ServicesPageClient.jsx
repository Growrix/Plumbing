"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { servicesConfig } from "@/config/services.config";
import styles from "@/app/page-shell.module.css";

const allCategory = { id: "all", label: "All Services" };

export default function ServicesPageClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  const services = useMemo(() => {
    if (activeCategory === "all") {
      return servicesConfig.items;
    }

    return servicesConfig.items.filter((service) => service.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <div className={styles.chipRow} role="tablist" aria-label="Service categories">
        {[allCategory, ...servicesConfig.categories].map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              className={`${styles.chip} ${isActive ? styles.chipActive : ""}`}
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={isActive}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {services.length > 0 ? (
        <div className={styles.cardGrid}>
          {services.map((service) => (
            <article
              key={service.id}
              className={`${styles.card} ${service.featured ? styles.cardAccent : ""}`}
            >
              <div className={styles.iconBubble} aria-hidden="true">{service.icon}</div>
              <div className={styles.inlineMeta}>
                <span>{service.category}</span>
                {service.badge && <span>{service.badge}</span>}
              </div>
              <h2 className={styles.cardTitle}>{service.name}</h2>
              <p className={styles.cardText}>{service.shortDesc}</p>
              <div className={styles.list}>
                {service.highlights.slice(0, 3).map((highlight) => (
                  <div key={highlight} className={styles.listItem}>
                    <span aria-hidden="true">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              <Link href={`/services/${service.slug}`} className="btn btn--primary">
                Explore Service
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <h2 className={styles.cardTitle}>No services in this category yet</h2>
          <p className={styles.cardText}>Pick another category or reset to view the full catalog.</p>
        </div>
      )}
    </>
  );
}