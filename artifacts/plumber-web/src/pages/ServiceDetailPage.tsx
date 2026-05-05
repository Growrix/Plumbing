import { useEffect } from "react";
import { useParams, Link, useLocation } from "wouter";
import { CheckCircle, PhoneCall } from "lucide-react";
import { servicesConfig } from "@/config/services.config";
import { siteConfig } from "@/config/site.config";
import { SEOHead } from "@/components/shared/SEOHead";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Button } from "@/components/ui/button";
import { getIcon } from "@/lib/icons";

export default function ServiceDetailPage() {
  const params = useParams();
  const [, setLocation] = useLocation();

  const service = servicesConfig.items.find(s => s.slug === params.slug);

  useEffect(() => {
    if (params.slug && !service) {
      setLocation("/404");
    }
  }, [service, params.slug, setLocation]);

  if (!service) return null;

  const Icon = getIcon(service.icon);
  
  const relatedServices = servicesConfig.items
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="bg-background">
      <SEOHead title={service.name} description={service.shortDesc} />
      
      {/* Breadcrumb Area */}
      <div className="bg-secondary border-b border-border py-4">
        <div className="container mx-auto px-4 text-sm font-medium text-muted-foreground flex items-center gap-2">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
          <span>/</span>
          <span className="text-foreground">{service.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            {service.badge && (
              <span className="inline-block bg-accent/10 text-accent font-bold px-3 py-1 rounded-full text-sm mb-6">
                {service.badge}
              </span>
            )}
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shadow-md">
                <Icon size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground" data-testid="service-detail-name">
                {service.name}
              </h1>
            </div>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              {service.fullDesc}
            </p>

            <h2 className="text-2xl font-display font-bold mb-6">What's Included</h2>
            <ul className="space-y-4 mb-12" data-testid="service-highlights">
              {service.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground/80">{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="bg-secondary p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-display font-bold mb-2">Need Help Now?</h3>
              <p className="text-muted-foreground mb-6">Call us directly to speak with a plumber immediately.</p>
              <a 
                href={siteConfig.brand.phoneHref}
                className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:text-accent transition-colors"
              >
                <PhoneCall size={28} />
                {siteConfig.brand.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-card border border-border shadow-card rounded-2xl p-6" data-testid="service-booking-card">
              <h3 className="font-display text-2xl font-bold mb-2">Book This Service</h3>
              <p className="text-muted-foreground text-sm mb-6">Fill out the form and we'll confirm your appointment within 15 minutes.</p>
              
              <Button asChild size="lg" className="w-full shadow-btn rounded-full mb-4">
                <Link href={`/booking?service=${service.slug}`}>Book Online Now</Link>
              </Button>
              
              <div className="text-center text-sm text-muted-foreground mb-4">or</div>
              
              <Button asChild variant="outline" size="lg" className="w-full rounded-full">
                <a href={siteConfig.brand.phoneHref}>Call {siteConfig.brand.phoneDisplay}</a>
              </Button>
              
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" /> Upfront pricing</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" /> Licensed & insured</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" /> 12-month guarantee</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>

      {relatedServices.length > 0 && (
        <div className="bg-secondary py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold mb-10 text-center">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map(s => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}