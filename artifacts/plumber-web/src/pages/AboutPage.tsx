import { SEOHead } from "@/components/shared/SEOHead";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { aboutConfig } from "@/config/pages.config";
import { siteConfig } from "@/config/site.config";
import { getIcon } from "@/lib/icons";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "@/hooks/useCountUp";

function StatCounter({ value, label }: { value: string; label: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const isNumber = /^\d+$/.test(value.replace(/[,+]/g, ''));
  const targetNum = isNumber ? parseInt(value.replace(/[,+]/g, '')) : 0;
  const count = useCountUp(targetNum, inView);
  
  const displayValue = isNumber ? 
    value.replace(/\d+/, count.toString()) : 
    value;

  return (
    <div ref={ref}>
      <div className="font-display font-bold text-4xl text-accent mb-2">{displayValue}</div>
      <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-background">
      <SEOHead title="About Us" />
      <PageHero 
        badge={aboutConfig.hero.badge}
        heading={aboutConfig.hero.heading}
        subheading={aboutConfig.hero.subheading}
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                {aboutConfig.story.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-secondary rounded-3xl p-10 grid grid-cols-2 gap-y-12 gap-x-8">
                {aboutConfig.story.stats.map((stat, i) => (
                  <StatCounter key={i} value={stat.value} label={stat.label} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">What We Stand For</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutConfig.values.map((value, i) => {
              const Icon = getIcon(value.icon);
              return (
                <AnimatedSection key={i} delay={i * 0.1} className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 bg-accent/20 text-accent rounded-xl flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Our Guarantees</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.guarantees.map((guarantee, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                <h3 className="text-xl font-display font-bold mb-3 text-accent">{guarantee.title}</h3>
                <p className="text-muted-foreground">{guarantee.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        headline={siteConfig.ctaSection.headline}
        subheadline={siteConfig.ctaSection.subheadline}
        primaryCta={siteConfig.ctaSection.primaryCta}
        secondaryCta={siteConfig.ctaSection.secondaryCta}
      />
    </div>
  );
}