import { useEffect } from "react";
import { siteConfig } from "@/config/site.config";

interface Props {
  title?: string;
  description?: string;
}

export function SEOHead({ title, description }: Props) {
  useEffect(() => {
    if (title) {
      document.title = siteConfig.seo.titleTemplate.replace("%s", title);
    } else {
      document.title = siteConfig.seo.defaultTitle;
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description || siteConfig.seo.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description || siteConfig.seo.description;
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
}
