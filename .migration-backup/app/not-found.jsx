import Link from "next/link";
import siteConfig from "@/config/site.config";
import styles from "@/app/page-shell.module.css";

const suggestedLinks = [
  { label: "All Services", href: "/services" },
  { label: "Book a Service", href: "/booking" },
  { label: "Contact", href: "/contact" },
  { label: "Emergency", href: "/emergency" },
];

export default function NotFound() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroBadge}>404</div>
        <h1 className={styles.heroTitle}>We can&apos;t find that drain.</h1>
        <p className={styles.heroSubtitle}>
          The page you&apos;re looking for doesn&apos;t exist or has moved. Here are the most useful routes to get back on track.
        </p>
        <div className={styles.legalLinks}>
          {suggestedLinks.map((link) => (
            <Link key={link.href} href={link.href} className="btn btn--accent">
              {link.label}
            </Link>
          ))}
        </div>
        <div className={styles.heroActions}>
          <a href={siteConfig.contact.phoneHref} className="btn btn--emergency btn--lg">
            📞 {siteConfig.contact.phone}
          </a>
          <Link href="/" className="btn btn--outline btn--lg">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}