import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { servicesConfig } from "@/config/services.config";
import { testimonialsConfig } from "@/config/testimonials.config";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { CTASection } from "@/components/shared/CTASection";
import { getIcon } from "@/lib/icons";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "react-intersection-observer";

function StatsItem({ value, label }: { value: string; label: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const isNumber = /^\d+$/.test(value.replace(/[,+]/g, ''));
  const targetNum = isNumber ? parseInt(value.replace(/[,+]/g, '')) : 0;
  const count = useCountUp(targetNum, inView);
  
  const displayValue = isNumber ? 
    value.replace(/\d+/, count.toString()) : 
    value;

  return (
    <div ref={ref} className="text-center p-4">
      <div className="font-display font-bold text-3xl text-accent mb-1 animate-fade-up">{displayValue}</div>
      <div className="text-sm font-medium text-white/80 animate-fade-up" style={{ animationDelay: "100ms" }}>{label}</div>
    </div>
  );
}

export default function HomePage() {
  const featuredServices = servicesConfig.items.filter(s => servicesConfig.homepageFeaturedIds.includes(s.id));
  const featuredReviews = testimonialsConfig.reviews.filter(r => r.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-primary flex items-center pt-20 pb-32 overflow-hidden overflow-x-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[80px] animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-[80px] animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <AnimatePresence>
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="text-sm font-semibold text-white">{siteConfig.hero.badge}</span>
            </motion.div>
          </AnimatePresence>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight animate-fade-up" data-testid="hero-headline">
            {siteConfig.hero.headline[0]}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              {siteConfig.hero.headline[1]}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: "100ms" }}>
            {siteConfig.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full sm:w-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Button asChild size="lg" className="w-full sm:w-auto text-lg shadow-btn rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6" data-testid="hero-cta-primary">
              <Link href={siteConfig.hero.primaryCta.href}>{siteConfig.hero.primaryCta.label}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg rounded-full bg-transparent border-white/20 hover:bg-white/10 text-white px-8 py-6">
              <a href={siteConfig.hero.secondaryCta.href}>{siteConfig.hero.secondaryCta.label}</a>
            </Button>
          </div>

          <p className="text-sm font-medium text-white/60 mb-16 animate-fade-up" style={{ animationDelay: "300ms" }}>
            {siteConfig.hero.trustNote}
          </p>

          <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-8" data-testid="stats-grid">
            {siteConfig.hero.stats.map((stat, i) => (
              <StatsItem key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-sidebar border-b border-sidebar-border py-6 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 md:justify-center overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory hide-scrollbar">
            {siteConfig.trustBar.items.map((item, i) => {
              const icons = ['ShieldCheck', 'Zap', 'DollarSign', 'Star', 'Award'];
              const Icon = getIcon(icons[i % icons.length]);
              return (
                <div key={i} className="flex items-center gap-2 whitespace-nowrap snap-center text-white/80">
                  <Icon size={18} className="text-accent" />
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Everything Your Home Needs</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="services-featured-grid">
            {featuredServices.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">{siteConfig.howItWorks.headline}</h2>
            <p className="text-lg text-muted-foreground">{siteConfig.howItWorks.subheadline}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative" data-testid="how-it-works">
            <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] border-t-2 border-dashed border-border/50 z-0" />
            
            {siteConfig.howItWorks.steps.map((step, i) => {
              const Icon = getIcon(step.icon);
              return (
                <AnimatedSection key={i} delay={i * 0.15} className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto bg-card rounded-full shadow-md flex items-center justify-center mb-6 text-accent border border-border">
                    <Icon size={28} />
                  </div>
                  <div className="text-accent font-display font-bold text-lg mb-2">{step.step}</div>
                  <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="flex justify-center mb-4 text-[#FFB800]">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-current" />)}
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Trusted by Thousands</h2>
            <p className="text-lg text-muted-foreground">{testimonialsConfig.aggregate.rating} Average Rating from {testimonialsConfig.aggregate.count} Reviews</p>
          </AnimatedSection>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-3 md:overflow-visible" data-testid="testimonials-section">
            {featuredReviews.slice(0, 3).map((review, i) => (
              <AnimatedSection key={review.id} delay={i * 0.1} className="min-w-[85vw] md:min-w-0 snap-center">
                <ReviewCard review={review} />
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection 
        headline={siteConfig.ctaSection.headline}
        subheadline={siteConfig.ctaSection.subheadline}
        primaryCta={siteConfig.ctaSection.primaryCta}
        secondaryCta={siteConfig.ctaSection.secondaryCta}
        note={siteConfig.ctaSection.note}
      />
    </div>
  );
}
