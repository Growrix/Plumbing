import LegalPage from "@/components/legal/LegalPage";
import { legalConfig } from "@/config/legal.config";
import siteConfig from "@/config/site.config";

export const metadata = {
  title: `License Information | ${siteConfig.brand.name}`,
  robots: { index: false },
};

export default function LicensePage() {
  return <LegalPage data={legalConfig.license} brand={siteConfig.brand} />;
}