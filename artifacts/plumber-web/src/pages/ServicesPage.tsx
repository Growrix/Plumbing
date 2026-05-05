import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesConfig } from "@/config/services.config";
import { SEOHead } from "@/components/shared/SEOHead";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { CTASection } from "@/components/shared/CTASection";
import { siteConfig } from "@/config/site.config";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all" 
    ? servicesConfig.items 
    : servicesConfig.items.filter(item => item.category === activeCategory);

  return (
    <div>
      <SEOHead title="All Services" />
      <PageHero 
        heading={servicesConfig.page.heading}
        subheading={servicesConfig.page.subheading}
        badge={servicesConfig.page.badge}
      />

      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          
          <div className="flex overflow-x-auto pb-4 mb-12 hide-scrollbar snap-x">
            <div className="flex gap-2 w-max mx-auto px-4">
              {servicesConfig.categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap snap-center ${
                    activeCategory === cat.id
                      ? "bg-accent text-accent-foreground shadow-btn"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  data-testid={`filter-tab-${cat.id}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="services-grid">
            <AnimatePresence mode="popLayout">
              {filteredServices.map(service => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>

      <CTASection 
        headline={siteConfig.ctaSection.headline}
        subheadline={siteConfig.ctaSection.subheadline}
        primaryCta={siteConfig.ctaSection.primaryCta}
        secondaryCta={siteConfig.ctaSection.secondaryCta}
      />
    </div>
  );
}