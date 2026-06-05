// Centralized SEO constants & helpers for Sunshine Solar Energy.
// All canonical URLs and OG URLs should be built through here so we stay consistent.

export const SITE_URL = "https://sunshine-solar-spark.lovable.app";
export const SITE_NAME = "Sunshine Solar Energy";
export const SITE_TAGLINE = "Lahore's Premium Solar Installation Company";
export const SITE_PHONE = "+92-300-4242895";
export const SITE_WHATSAPP = "923004242895";
export const SITE_EMAIL = "info@sunshinesolarltd.com";

// Stable @id anchors for cross-referencing entities in JSON-LD graphs.
export const ORG_ID = `${SITE_URL}/#organization`;
export const LOCALBUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const BRAND_COLORS = {
  solarAmber: "#F5A623",
  skyBlue: "#0A6EBD",
  cloudWhite: "#FAFCFF",
};

// Lahore HQ approximate coordinates (Gulberg).
export const GEO = { latitude: 31.5204, longitude: 74.3587 };

export const SAME_AS = [
  "https://sunshinesolarltd.com",
  "https://www.facebook.com/sunshinesolarltd",
  "https://www.instagram.com/sunshinesolarltd",
  "https://www.youtube.com/@sunshinesolarltd",
  "https://www.linkedin.com/company/sunshine-solar-energy",
];

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

/** Generic WebPage schema. Use `pageType` for ContactPage / AboutPage / FAQPage etc. */
export function webPageSchema(opts: {
  title: string;
  description: string;
  path: string;
  pageType?: "WebPage" | "ContactPage" | "AboutPage" | "FAQPage" | "CollectionPage" | "ItemPage";
  breadcrumbs?: BreadcrumbItem[];
}) {
  const url = absoluteUrl(opts.path);
  const node: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": opts.pageType ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.title,
    description: opts.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "en-PK",
  };
  if (opts.breadcrumbs && opts.breadcrumbs.length > 0) {
    node.breadcrumb = { "@id": `${url}#breadcrumb` };
  }
  return node;
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
    provider: { "@id": LOCALBUSINESS_ID },
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

/** Aggregate rating sub-object for embedding in LocalBusiness / Organization. */
export const AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  reviewCount: "187",
  bestRating: "5",
  worstRating: "1",
};

/** Sample customer reviews for LocalBusiness schema. */
export const REVIEWS = [
  {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "Ahmed Raza" },
    reviewBody:
      "Sunshine Solar installed a 10 kW system at our DHA home. Bill dropped from PKR 52,000 to under PKR 5,000. Net metering handled end-to-end.",
    datePublished: "2025-03-12",
  },
  {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "Sara Malik" },
    reviewBody:
      "Professional team, tier-1 Jinko panels and Huawei inverter, finished a 25 kW commercial install in Gulberg in under 2 weeks.",
    datePublished: "2025-01-28",
  },
  {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "Bilal Hussain" },
    reviewBody:
      "Honest sizing — they recommended a smaller system than competitors and it still covers 95% of my bill. Highly recommended.",
    datePublished: "2024-11-04",
  },
];

/** Full LocalBusiness schema for Sunshine Solar Energy (Lahore HQ). */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ElectricalContractor"],
    "@id": LOCALBUSINESS_ID,
    name: SITE_NAME,
    alternateName: "Sunshine Solar Pakistan",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    image: `${SITE_URL}/favicon.ico`,
    description:
      "Premium solar installation company in Lahore, Pakistan — residential, commercial & industrial solar systems with net metering and tier-1 equipment.",
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    priceRange: "$$",
    currenciesAccepted: "PKR",
    paymentAccepted: "Cash, Bank Transfer, Cheque",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gulberg III",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54660",
      addressCountry: "PK",
    },
    geo: { "@type": "GeoCoordinates", latitude: GEO.latitude, longitude: GEO.longitude },
    areaServed: [
      "Lahore",
      "Islamabad",
      "Karachi",
      "Rawalpindi",
      "Faisalabad",
      "Multan",
      "Gujranwala",
      "Sialkot",
      "Bahawalpur",
      "Peshawar",
      "Punjab",
      "Pakistan",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_PHONE,
        contactType: "sales",
        areaServed: "PK",
        availableLanguage: ["English", "Urdu"],
      },
      {
        "@type": "ContactPoint",
        telephone: SITE_PHONE,
        contactType: "customer support",
        areaServed: "PK",
        availableLanguage: ["English", "Urdu"],
      },
    ],
    sameAs: SAME_AS,
    aggregateRating: AGGREGATE_RATING,
    review: REVIEWS,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solar Installation Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Solar Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Solar Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial Solar Solutions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Net Metering Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar System Maintenance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar Energy Consultation" } },
      ],
    },
  };
}

/** Full Organization schema (sitewide, in __root.tsx). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: "Sunshine Solar Energy (Pvt.) Ltd.",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.ico` },
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gulberg III",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54660",
      addressCountry: "PK",
    },
    sameAs: SAME_AS,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_PHONE,
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
  };
}

/** Sitewide WebSite schema with SearchAction. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: "Premium solar installation in Lahore, Pakistan.",
    inLanguage: "en-PK",
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/blog?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function ldScript(obj: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(obj) };
}
