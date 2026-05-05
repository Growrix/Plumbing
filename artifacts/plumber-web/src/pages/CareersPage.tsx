import { SEOHead } from "@/components/shared/SEOHead";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { careersConfig } from "@/config/pages.config";
import { getIcon } from "@/lib/icons";

export default function CareersPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      <SEOHead title="Careers" />
      <PageHero 
        heading={careersConfig.hero.headline}
        subheading={careersConfig.hero.subheadline}
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why work with us?</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-testid="careers-benefits">
            {careersConfig.benefits.map((benefit, i) => {
              const Icon = getIcon(benefit.icon);
              return (
                <AnimatedSection key={i} delay={i * 0.1} className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl" data-testid="careers-openings">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">Open Roles</h2>
          
          {careersConfig.openings.length === 0 ? (
            <div className="bg-card rounded-3xl p-12 text-center border border-border shadow-sm">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👋</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">No open roles right now</h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">We're always looking for good plumbers to join the team. Even if there's no open role listed, send us your resume and we'll keep it on file.</p>
              <Button asChild size="lg" className="rounded-full">
                <a href={`mailto:${careersConfig.resumeCta.email}`}>{careersConfig.resumeCta.label}</a>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {careersConfig.openings.map((role, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">{role.title}</h3>
                    <div className="flex gap-3 text-sm text-muted-foreground">
                      <span>{role.type}</span>
                      <span>•</span>
                      <span>{role.location}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="rounded-full shrink-0">
                    <a href={role.href}>View Details</a>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}