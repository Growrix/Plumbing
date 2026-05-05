import { Link } from "wouter";
import { SEOHead } from "@/components/shared/SEOHead";
import { PageHero } from "@/components/shared/PageHero";
import { legalConfig } from "@/config/pages.config";

interface Props {
  type: "privacy" | "terms" | "license";
}

export default function LegalPage({ type }: Props) {
  const config = legalConfig[type];

  return (
    <div className="bg-background min-h-screen pb-24">
      <SEOHead title={config.title} />
      <PageHero heading={config.title} className="py-16 md:py-20" />

      <div className="container mx-auto px-4 max-w-3xl py-12" data-testid="legal-content">
        <p className="text-sm text-muted-foreground mb-12">Last updated: {config.lastUpdated}</p>
        
        <div className="space-y-10">
          {config.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-2xl font-display font-bold mb-4">{section.heading}</h2>
              <p className="text-foreground/80 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <Link href="/" className="text-accent font-bold hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}