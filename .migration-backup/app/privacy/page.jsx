import LegalPage from "@/components/legal/LegalPage";
import { legalConfig } from "@/config/legal.config";
import siteConfig from "@/config/site.config";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.brand.name}`,
  robots: { index: false },
};

export default function PrivacyPage() {
  return <LegalPage data={legalConfig.privacy} brand={siteConfig.brand} />;
}