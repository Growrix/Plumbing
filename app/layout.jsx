import "./globals.css";
import siteConfig from "@/config/site.config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCallButton from "@/components/layout/StickyCallButton";
import EmergencyBanner from "@/components/sections/EmergencyBanner";

export const metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title:       siteConfig.seo.defaultTitle,
  description: siteConfig.seo.description,
  keywords:    siteConfig.seo.keywords,
  openGraph: {
    title:       siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
    images:      [siteConfig.seo.ogImage],
    locale:      siteConfig.seo.locale,
    type:        "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {siteConfig.emergencyBanner.show && (
          <EmergencyBanner data={siteConfig.emergencyBanner} />
        )}
        <Header
          brand={siteConfig.brand}
          nav={siteConfig.nav}
        />
        <main>{children}</main>
        <StickyCallButton />
        <Footer
          brand={siteConfig.brand}
          footer={siteConfig.footer}
        />
      </body>
    </html>
  );
}
