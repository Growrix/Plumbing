import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer({ brand, footer }) {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className="container">

        {/* Top row */}
        <div className={styles.top}>
          {/* Brand col */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span>{brand.logo.icon}</span>
              <span className={styles.logoText}>
                {brand.logo.text}<span className={styles.logoAccent}>{brand.logo.accent}</span>
              </span>
            </div>
            <p className={styles.tagline}>{footer.tagline}</p>
            <div className={styles.contact}>
              <a href={`tel:${brand.phone}`} className={styles.contactLink}>
                📞 {brand.phoneDisplay}
              </a>
              <a href={`mailto:${brand.email}`} className={styles.contactLink}>
                ✉️ {brand.email}
              </a>
              <p className={styles.address}>📍 {brand.address}</p>
            </div>
          </div>

          {/* Link columns */}
          <nav className={styles.linkCols} aria-label="Footer navigation">
            {Object.entries(footer.links).map(([group, links]) => (
              <div key={group} className={styles.linkCol}>
                <div className={styles.groupLabel}>{group}</div>
                <ul role="list">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
            </p>
            <p className={styles.license}>{footer.licenseNote}</p>
          </div>
          <div className={styles.social} role="list" aria-label="Social media links">
            {footer.social.map((s) => (
              <a
                key={s.platform}
                href={s.href}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
                role="listitem"
              >
                {s.abbr}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
