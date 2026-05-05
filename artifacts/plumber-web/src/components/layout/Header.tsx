import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        data-testid="header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-border/50" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <span className="font-display font-bold text-2xl text-primary">{siteConfig.brand.logo.text}</span>
            <span className="font-display font-bold text-2xl text-accent">{siteConfig.brand.logo.accent}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-2 ${
                  location === link.href ? "text-accent" : "text-foreground/80"
                }`}
                data-testid={`nav-link-${link.label}`}
              >
                {link.label}
                {link.badge && (
                  <span className="bg-destructive text-destructive-foreground text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-sm">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={siteConfig.brand.phoneHref} className="text-sm font-bold text-foreground hover:text-accent flex items-center gap-2">
              <PhoneCall size={16} />
              {siteConfig.brand.phoneDisplay}
            </a>
            <Button asChild className="shadow-btn rounded-full px-6">
              <Link href={siteConfig.nav.cta.href}>{siteConfig.nav.cta.label}</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            data-testid="nav-hamburger"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-primary flex flex-col"
            data-testid="mobile-nav-drawer"
          >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-1" onClick={() => setMobileMenuOpen(false)}>
                <span className="font-display font-bold text-2xl text-white">{siteConfig.brand.logo.text}</span>
                <span className="font-display font-bold text-2xl text-accent">{siteConfig.brand.logo.accent}</span>
              </Link>
              <button
                className="p-2 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
              {siteConfig.nav.links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-display font-semibold text-white/90 hover:text-white flex items-center justify-between"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="bg-destructive text-destructive-foreground text-xs uppercase font-bold px-2 py-1 rounded-md">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-6 bg-primary-foreground/5 border-t border-white/10 flex flex-col gap-4">
              <Button asChild size="lg" className="w-full text-lg shadow-btn rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href={siteConfig.nav.cta.href} onClick={() => setMobileMenuOpen(false)}>
                  {siteConfig.nav.cta.label}
                </Link>
              </Button>
              <a
                href={siteConfig.brand.phoneHref}
                className="flex items-center justify-center gap-2 text-white font-bold py-3"
              >
                <PhoneCall size={20} />
                Call {siteConfig.brand.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
