import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";

interface Props {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  note?: string;
}

export function CTASection({ headline, subheadline, primaryCta, secondaryCta, note }: Props) {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden" data-testid="cta-section">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-accent/20 rounded-full blur-[100px]" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <AnimatedSection className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{headline}</h2>
          <p className="text-xl text-white/80 mb-10">{subheadline}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <Button asChild size="lg" className="w-full sm:w-auto text-lg shadow-btn rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg rounded-full bg-transparent border-white/20 hover:bg-white/10 text-white px-8 py-6">
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          </div>
          {note && <p className="text-sm text-white/60">{note}</p>}
        </AnimatedSection>
      </div>
    </section>
  );
}