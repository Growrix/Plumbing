"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { brand, contact, nav } = siteConfig;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            {brand.logo.image ? (
              <Image
                src={brand.logo.image}
                alt={brand.name}
                width={120}
                height={36}
              />
            ) : (
              <span className={styles.logoText}>
                <span className={styles.logoIcon}>{brand.logo.icon}</span>
                {brand.logo.text}
              </span>
            )}
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${link.badge ? styles.navLinkHighlight : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className={styles.desktopActions}>
            <a href={contact.phoneHref} className={styles.phoneLink}>
              📞 {contact.phone}
            </a>
            <Link href={nav.cta.href} className="btn btn--accent btn--sm">
              {nav.cta.label}
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? styles.barOpen : styles.bar} />
            <span className={menuOpen ? styles.barOpen2 : styles.bar} />
            <span className={menuOpen ? styles.barOpen3 : styles.bar} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className={styles.mobileMenu}>
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className={styles.mobileCTAs}>
              <a href={contact.phoneHref} className="btn btn--primary btn--lg" style={{width:"100%",justifyContent:"center"}}>
                📞 {contact.phone}
              </a>
              <Link href={nav.cta.href} className="btn btn--accent btn--lg" style={{width:"100%",justifyContent:"center"}}>
                {nav.cta.label}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
