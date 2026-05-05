import { useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsConfig } from "@/config/testimonials.config";
import { SEOHead } from "@/components/shared/SEOHead";
import { PageHero } from "@/components/shared/PageHero";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { Button } from "@/components/ui/button";

export default function ReviewsPage() {
  const [activePlatform, setActivePlatform] = useState("all");
  const [activeService, setActiveService] = useState("all");

  const uniqueServices = Array.from(new Set(testimonialsConfig.reviews.map(r => r.service))).sort();

  const filteredReviews = testimonialsConfig.reviews.filter(r => {
    const matchesPlatform = activePlatform === "all" || r.platform === activePlatform;
    const matchesService = activeService === "all" || r.service === activeService;
    return matchesPlatform && matchesService;
  });

  return (
    <div className="bg-background">
      <SEOHead title="Customer Reviews" />
      
      <PageHero 
        heading={testimonialsConfig.page.heading}
        subheading={testimonialsConfig.page.subheading}
        badge={testimonialsConfig.page.badge}
      >
        <div className="flex flex-col items-center justify-center mt-8">
          <div className="flex text-[#FFB800] mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} size={32} className="fill-current" />)}
          </div>
          <div className="text-3xl font-display font-bold">{testimonialsConfig.aggregate.rating}</div>
          <div className="text-sm text-white/70">Based on {testimonialsConfig.page.totalReviews} reviews</div>
        </div>
      </PageHero>

      <section className="py-12 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonialsConfig.page.platforms.map((platform, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center">
                <div className="font-display font-bold text-lg mb-2">{platform.name}</div>
                <div className="text-3xl font-bold text-accent mb-1">{platform.rating}</div>
                <div className="text-sm text-muted-foreground">{platform.count} reviews</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">

          <div className="flex flex-col gap-4 items-center mb-12">
            {/* Platform Filter */}
            <div className="flex justify-center flex-wrap gap-2">
              <button
                onClick={() => setActivePlatform("all")}
                className={`px-5 py-1.5 rounded-full text-sm font-bold transition-all ${
                  activePlatform === "all" ? "bg-accent text-accent-foreground shadow-btn" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                data-testid="filter-platform-all"
              >
                All Platforms
              </button>
              {testimonialsConfig.page.platforms.map(p => (
                <button
                  key={p.name}
                  onClick={() => setActivePlatform(p.name)}
                  className={`px-5 py-1.5 rounded-full text-sm font-bold transition-all ${
                    activePlatform === p.name ? "bg-accent text-accent-foreground shadow-btn" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  data-testid={`filter-platform-${p.name}`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Service Type Filter */}
            <div className="flex justify-center flex-wrap gap-2" data-testid="service-type-filter">
              <button
                onClick={() => setActiveService("all")}
                className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                  activeService === "all" ? "bg-primary text-white border-primary" : "bg-transparent border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                All Services
              </button>
              {uniqueServices.map(service => (
                <button
                  key={service}
                  onClick={() => setActiveService(service)}
                  className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    activeService === service ? "bg-primary text-white border-primary" : "bg-transparent border-border text-muted-foreground hover:border-accent hover:text-accent"
                  }`}
                  data-testid={`filter-service-${service}`}
                >
                  {service}
                </button>
              ))}
            </div>

            {filteredReviews.length < testimonialsConfig.reviews.length && (
              <p className="text-sm text-muted-foreground">Showing {filteredReviews.length} of {testimonialsConfig.reviews.length} reviews</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="reviews-grid">
            <AnimatePresence mode="popLayout">
              {filteredReviews.map(review => (
                <motion.div
                  key={review.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <ReviewCard review={review} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="mt-20 max-w-2xl mx-auto bg-primary text-primary-foreground rounded-3xl p-10 text-center shadow-xl">
            <h3 className="text-3xl font-display font-bold mb-4">Had a great experience?</h3>
            <p className="text-white/80 mb-8">We rely on word of mouth from happy customers. If we did a good job, we'd love it if you let others know.</p>
            <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              <a href={testimonialsConfig.reviewCta.href} target="_blank" rel="noreferrer">
                {testimonialsConfig.reviewCta.label}
              </a>
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}