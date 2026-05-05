import { PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { SEOHead } from "@/components/shared/SEOHead";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function EmergencyPage() {
  return (
    <div className="bg-background">
      <SEOHead title="24/7 Emergency Plumbing" />

      {/* Red Hero Override */}
      <div className="bg-gradient-to-br from-red-700 to-red-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] rounded-full animate-pulse-ring" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-red-950/50 border border-red-500/30 rounded-full px-4 py-1.5 mb-8 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-bold tracking-wide">{siteConfig.emergency.badge}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            {siteConfig.emergency.headline}
          </h1>
          
          <p className="text-xl md:text-2xl text-red-100 mb-12 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            {siteConfig.emergency.subheadline}
          </p>

          <AnimatedSection delay={0.3} className="bg-white rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto text-center transform hover:scale-105 transition-transform duration-300">
            <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Call Directly for Fastest Response</p>
            <a 
              href={siteConfig.emergency.phoneHref}
              className="inline-flex items-center justify-center gap-4 text-4xl md:text-6xl font-display font-extrabold text-gray-900 hover:text-red-600 transition-colors"
              data-testid="emergency-phone-cta"
            >
              <PhoneCall className="w-10 h-10 md:w-12 md:h-12 text-red-600" />
              {siteConfig.emergency.phoneDisplay}
            </a>
            <p className="mt-4 text-gray-600 font-medium text-lg">{siteConfig.emergency.responseClaim}</p>
          </AnimatedSection>
        </div>
      </div>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">How Emergency Service Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-testid="emergency-steps">
            {siteConfig.emergency.steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-7xl font-display font-black text-gray-50 leading-none select-none">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl items-start">
          
          <div>
            <h2 className="text-3xl font-display font-bold mb-8 text-red-700">Immediate Safety Tips</h2>
            <p className="text-muted-foreground mb-8 text-lg">While you wait for our team to arrive, follow these steps to minimize damage to your home.</p>
            
            <Accordion type="single" collapsible className="w-full">
              {siteConfig.emergency.safetyTips.map((tip, i) => {
                const words = tip.split(" ");
                const title = words.slice(0, 4).join(" ") + (words.length > 4 ? "..." : "");
                return (
                  <AccordionItem key={i} value={`tip-${i}`} data-testid={`safety-tip-${i}`}>
                    <AccordionTrigger className="text-left font-bold text-lg">Tip {i + 1}: {title}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {tip}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          <div className="bg-gray-900 text-white rounded-3xl p-10">
            <h2 className="text-2xl font-display font-bold mb-6">Areas We Cover 24/7</h2>
            <div className="flex flex-wrap gap-2" data-testid="coverage-areas">
              {siteConfig.emergency.coverageAreas.map(area => (
                <span key={area} className="bg-white/10 border border-white/20 text-sm px-3 py-1.5 rounded-full">
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/70 mb-4">Outside these areas? Call us anyway, we might have a truck nearby.</p>
              <a href={siteConfig.emergency.phoneHref} className="text-2xl font-bold text-red-400 hover:text-red-300">
                {siteConfig.emergency.phoneDisplay}
              </a>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}