import { Link } from "wouter";
import { PhoneCall, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { SEOHead } from "@/components/shared/SEOHead";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-4 relative overflow-hidden text-center z-10">
      <SEOHead title="Page Not Found" />
      
      {/* Floating abstract water drops */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-1/4 left-1/4 w-32 h-32 text-accent/20 animate-float" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
        <svg className="absolute bottom-1/4 right-1/4 w-48 h-48 text-blue-400/10 animate-float-slow" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
        <svg className="absolute top-1/2 right-1/3 w-16 h-16 text-white/5 animate-float" style={{animationDelay: '1s'}} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      </div>

      <div className="relative z-10">
        <h1 className="text-9xl md:text-[150px] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-4" data-testid="not-found-heading">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">We can not find that page.</h2>
        <p className="text-lg text-white/70 mb-10 max-w-md mx-auto">
          The page you're looking for might have been moved or the link might be broken.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-white text-primary hover:bg-white/90">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-white/20 text-white hover:bg-white/10">
            <a href={siteConfig.brand.phoneHref} className="flex items-center gap-2">
              <PhoneCall size={18} />
              Emergency Line
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}