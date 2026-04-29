"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { navConfig } from "@/config/pages.config";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
            {siteConfig.brand.logo.image ? (
              <Image
                src={siteConfig.brand.logo.image}
                alt={siteConfig.brand.name}
                width={120}
                height={36}
              />
            ) : (
              <span className={styles.logoText}>
                <span className={styles.logoIcon}>{siteConfig.brand.logo.icon}</span>
                {siteConfig.brand.logo.text}
              </span>
            )}
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {navConfig.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${link.highlight ? styles.navLinkHighlight : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className={styles.desktopActions}>
            <a href={siteConfig.contact.phoneHref} className={styles.phoneLink}>
              📞 {siteConfig.contact.phone}
            </a>
            <Link href={navConfig.ctaButton.href} className="btn btn--accent btn--sm">
              {navConfig.ctaButton.label}
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
            {navConfig.links.map((link) => (
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
              <a href={siteConfig.contact.phoneHref} className="btn btn--primary btn--lg" style={{width:"100%",justifyContent:"center"}}>
                📞 {siteConfig.contact.phone}
              </a>
              <Link href={navConfig.ctaButton.href} className="btn btn--accent btn--lg" style={{width:"100%",justifyContent:"center"}}>
                {navConfig.ctaButton.label}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
