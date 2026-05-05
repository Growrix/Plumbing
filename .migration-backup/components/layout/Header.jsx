"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header({ brand, nav }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>

        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label={`${brand.name} home`}>
          <span className={styles.logoIcon}>{brand.logo.icon}</span>
          <span>
            <span className={styles.logoText}>{brand.logo.text}</span>
            <span className={styles.logoAccent}>{brand.logo.accent}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {nav.links.map((link) => (
            <Link key={link.href} href={link.href}
              className={`${styles.navLink} ${link.badge ? styles.navLinkEmergency : ""}`}
            >
              {link.label}
              {link.badge && (
                <span className={styles.navBadge}>{link.badge}</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className={styles.ctas}>
          <Link href={nav.emergencyCta.href} className={`${styles.phoneBtn}`}>
            📞 {brand.phoneDisplay}
          </Link>
          <Link href={nav.cta.href} className="btn btn--primary btn--sm">
            {nav.cta.label}
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-label="Mobile navigation">
          <nav className={styles.mobileNav}>
            {nav.links.map((link) => (
              <Link key={link.href} href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                {link.badge && <span className={styles.navBadge}>{link.badge}</span>}
              </Link>
            ))}
          </nav>
          <div className={styles.mobileCtas}>
            <Link href={nav.emergencyCta.href} className="btn btn--emergency btn--lg" style={{width: "100%", justifyContent: "center"}}>
              📞 {brand.phoneDisplay}
            </Link>
            <Link href={nav.cta.href} className="btn btn--primary btn--lg" style={{width: "100%", justifyContent: "center"}} onClick={() => setMenuOpen(false)}>
              {nav.cta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
