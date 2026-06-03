// Centralized SEO constants & helpers for Sunshine Solar Energy.
// All canonical URLs and OG URLs should be built through here so we stay consistent.

export const SITE_URL = "https://sunshine-solar-spark.lovable.app";
export const SITE_NAME = "Sunshine Solar Energy";
export const SITE_TAGLINE = "Lahore's Premium Solar Installation Company";
export const SITE_PHONE = "+92-300-4242895";
export const SITE_WHATSAPP = "923004242895";

export const BRAND_COLORS = {
  solarAmber: "#F5A623",
  skyBlue: "#0A6EBD",
  cloudWhite: "#FAFCFF",
};

export function absoluteUrl(path: string): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export interface PageSeoInput {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article" | "product";
  image?: string;
}

/** Build the `meta` + `links` arrays for a TanStack Start route's head(). */
export function buildPageHead({ title, description, path, ogType = "website", image }: PageSeoInput) {
  const url = absoluteUrl(path);
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: ogType },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    meta.push({ property: "og:image", content: absoluteUrl(image) });
    meta.push({ name: "twitter:image", content: absoluteUrl(image) });
  }
  const links = [{ rel: "canonical", href: url }];
  return { meta, links };
}

export interface BreadcrumbItem {
  label: string;
  path: string;
}

/** JSON-LD BreadcrumbList for crumbs[0] through crumbs[n]. */
export function breadcrumbSchema(crumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.path),
    })),
  };
}

/** JSON-LD Service schema for a Sunshine Solar service page. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: SITE_PHONE,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
    },
    areaServed: { "@type": "City", name: "Lahore" },
    serviceType: opts.serviceType ?? opts.name,
    url: absoluteUrl(opts.path),
  };
}

/** JSON-LD FAQPage from a list of Q/A pairs. */
export function faqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function ldScript(obj: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(obj) };
}
