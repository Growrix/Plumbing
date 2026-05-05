import { siteConfig } from "@/config/site.config";

export default function StickyCallButton() {
  return (
    <div className="sticky-call-btn">
      <a
        href={siteConfig.contact.phoneHref}
        className="btn btn--emergency btn--lg"
        style={{
          borderRadius: "999px",
          boxShadow: "0 4px 20px rgba(220,38,38,0.4)",
        }}
        aria-label={`Call ${siteConfig.brand.name}`}
      >
        📞 Call Now
      </a>
    </div>
  );
}
