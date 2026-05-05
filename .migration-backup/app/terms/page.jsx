import LegalPage from "@/components/legal/LegalPage";
import { legalConfig } from "@/config/legal.config";
import siteConfig from "@/config/site.config";

export const metadata = {
  title: `Terms of Service | ${siteConfig.brand.name}`,
  robots: { index: false },
};

export default function TermsPage() {
  return <LegalPage data={legalConfig.terms} brand={siteConfig.brand} />;
}