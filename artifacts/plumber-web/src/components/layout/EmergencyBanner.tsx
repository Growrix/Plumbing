import { useState, useEffect } from "react";
import { PhoneCall, X } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("banner-dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  const handleDismiss = () => {
    sessionStorage.setItem("banner-dismissed", "1");
    setIsVisible(false);
  };

  return (
    <div 
      className="bg-destructive text-destructive-foreground px-4 py-2 relative z-50 flex items-center justify-center text-sm font-medium"
      data-testid="emergency-banner"
    >
      <div className="flex items-center gap-2 text-center mr-8">
        <PhoneCall size={16} className="animate-pulse" />
        <span>
          <span className="hidden sm:inline">Plumbing Emergency? We're available 24/7. </span>
          <a href={siteConfig.brand.phoneHref} className="underline underline-offset-2 font-bold hover:text-white/80" data-testid="banner-call-link">
            Call {siteConfig.brand.phoneDisplay} Now
          </a>
        </span>
      </div>
      <button 
        onClick={handleDismiss} 
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-black/10 rounded-md transition-colors"
        data-testid="banner-dismiss"
        aria-label="Dismiss banner"
      >
        <X size={16} />
      </button>
    </div>
  );
}
