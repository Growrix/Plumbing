import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function StickyCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden" data-testid="sticky-call-button">
      <div className="relative">
        <div className="absolute inset-0 bg-destructive rounded-full animate-pulse-ring pointer-events-none" />
        <a
          href={siteConfig.brand.phoneHref}
          className="relative flex items-center gap-2 bg-destructive text-destructive-foreground shadow-emergency px-5 py-3 rounded-full font-bold transition-transform active:scale-95"
        >
          <Phone size={20} />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
}
