import { Link } from "wouter";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="font-display font-bold text-2xl text-white">{siteConfig.brand.logo.text}</span>
              <span className="font-display font-bold text-2xl text-accent">{siteConfig.brand.logo.accent}</span>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm">
              {siteConfig.footer.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <ExternalLink size={18} className="text-white" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <ExternalLink size={18} className="text-white" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <ExternalLink size={18} className="text-white" />
                <span className="sr-only">Google</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              {siteConfig.footer.links.Services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {siteConfig.footer.links.Company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {siteConfig.footer.links.Legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <span>{siteConfig.brand.abn}</span>
            <span>{siteConfig.brand.license}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
