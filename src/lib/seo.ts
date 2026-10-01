import { siteConfig } from "@/config/site";
import { siteContent } from "@/content/site-content";

export function getLocalBusinessJsonLd(): Record<string, unknown> {
  const { business } = siteContent;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: siteContent.footer.description,
    url: siteConfig.url,
    telephone: business.phone.href.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressLocality: "الرياض",
      streetAddress: "الدائري الغربي — مخرج 29",
    },
    sameAs: [business.whatsappUrl],
  };
}
