"use client";
import Link from "next/link";
import styles from "./EmergencyBanner.module.css";

export default function EmergencyBanner({ data }) {
  if (!data?.show) return null;

  return (
    <div className={styles.banner} role="banner" aria-label="Emergency notice">
      <div className={styles.inner}>
        <span className={styles.message}>{data.message}</span>
        {data.cta && (
          <Link href={data.cta.href} className={styles.cta}>
            {data.cta.label}
          </Link>
        )}
      </div>
    </div>
  );
}
