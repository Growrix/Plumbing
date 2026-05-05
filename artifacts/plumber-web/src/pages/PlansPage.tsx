import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import { SEOHead } from "@/components/shared/SEOHead";
import { PageHero } from "@/components/shared/PageHero";
import { PlanCard } from "@/components/shared/PlanCard";
import { CTASection } from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import { pricingConfig } from "@/config/pricing.config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PlansPage() {
  return (
    <div className="bg-background">
      <SEOHead title="Maintenance Plans" />
      
      <PageHero 
        badge={pricingConfig.maintenancePlans.page.badge}
        heading={pricingConfig.maintenancePlans.page.heading}
        subheading={pricingConfig.maintenancePlans.page.subheading}
      />

      {/* Maintenance Plans */}
      <section className="py-24 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {pricingConfig.maintenancePlans.plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{pricingConfig.page.heading}</h2>
            <p className="text-lg text-muted-foreground mb-4">{pricingConfig.page.subheading}</p>
            <p className="text-sm text-muted-foreground/70 italic">{pricingConfig.page.disclaimer}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingConfig.tiers.map((tier) => (
              <div 
                key={tier.id}
                className={`bg-card rounded-3xl p-8 border ${tier.highlighted ? 'border-accent shadow-md' : 'border-border shadow-sm'} relative`}
                data-testid={`tier-card-${tier.id}`}
              >
                {tier.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    {tier.badge}
                  </div>
                )}
                <div className="text-center mb-8 border-b border-border pb-8">
                  <h3 className="text-2xl font-display font-bold mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 h-10">{tier.tagline}</p>
                  <div className="flex items-end justify-center gap-1 mb-2">
                    <span className="text-sm text-muted-foreground mb-1.5">{tier.priceSuffix}</span>
                    <span className="text-5xl font-bold font-display">{tier.priceFrom}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild 
                  className={`w-full rounded-full ${tier.highlighted ? 'bg-accent hover:bg-accent/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                >
                  <Link href={tier.cta.href}>{tier.cta.label}</Link>
                </Button>
                {tier.note && <p className="text-center text-xs text-muted-foreground mt-4">{tier.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {pricingConfig.maintenancePlans.faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} data-testid={`faq-item-${i}`}>
                <AccordionTrigger className="text-left font-bold text-lg">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection 
        headline="Ready to get started?"
        subheadline="Book a service now or call us for a free quote."
        primaryCta={{ label: "Book a Plumber", href: "/booking" }}
        secondaryCta={{ label: "Call Us", href: "tel:+61298765432" }}
      />
    </div>
  );
}