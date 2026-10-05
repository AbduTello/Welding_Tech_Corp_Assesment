import { asset } from "@/lib/asset";
import { ADDRESS, FOUNDING_YEAR, PHONE, SOCIAL_LINKS } from "@/data/company";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/data/site";

// schema.org Organization data, which search engines use for the company's
// knowledge panel and local results
export default function StructuredData() {
  const origin = new URL(SITE_URL).origin;
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: `${origin}${asset("/wtc-logo-black.png")}`,
    description: SITE_DESCRIPTION,
    foundingDate: String(FOUNDING_YEAR),
    telephone: PHONE.href.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: "US",
    },
    sameAs: [
      "https://www.weldtechcorp.com/",
      SOCIAL_LINKS.linkedIn,
      SOCIAL_LINKS.youTube,
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can't close the script tag early
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
