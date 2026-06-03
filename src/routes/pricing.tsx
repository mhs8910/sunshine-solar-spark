import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { buildPageHead, breadcrumbSchema, ldScript } from "@/lib/seo";

const PATH = "/pricing";
const TITLE = "Solar System Prices in Pakistan 2026 | Sunshine Solar Energy";
const DESC =
  "Transparent pricing for 3 kW, 5 kW, 8 kW, 10 kW, 15 kW, 20 kW and 50 kW solar systems in Pakistan. Tier-1 equipment, installation, net metering and ROI included.";

const TIERS = [
  { slug: "3kw-solar-system", size: "3 kW", price: "PKR 520,000", monthly: "PKR 14,000", payback: "3.5 yrs", best: "Studio / small home", units: "~400 units/mo" },
  { slug: "5kw-solar-system", size: "5 kW", price: "PKR 820,000", monthly: "PKR 24,000", payback: "3.0 yrs", best: "2-3 bedroom home", units: "~650 units/mo" },
  { slug: "8kw-solar-system", size: "8 kW", price: "PKR 1,280,000", monthly: "PKR 38,000", payback: "2.8 yrs", best: "Family home", units: "~1,050 units/mo" },
  { slug: "10kw-solar-system", size: "10 kW", price: "PKR 1,580,000", monthly: "PKR 48,000", payback: "2.7 yrs", best: "Large home / shop", units: "~1,300 units/mo", featured: true },
  { slug: "15kw-solar-system", size: "15 kW", price: "PKR 2,300,000", monthly: "PKR 72,000", payback: "2.6 yrs", best: "Villa / small office", units: "~2,000 units/mo" },
  { slug: "20kw-solar-system", size: "20 kW", price: "PKR 3,000,000", monthly: "PKR 96,000", payback: "2.6 yrs", best: "Commercial / clinic", units: "~2,650 units/mo" },
  { slug: "50kw-solar-system", size: "50 kW", price: "PKR 7,000,000", monthly: "PKR 240,000", payback: "2.4 yrs", best: "Factory / warehouse", units: "~6,600 units/mo" },
];

const INCLUDED = [
  "Tier-1 bifacial panels (Jinko / Longi / Canadian Solar)",
  "Tier-1 inverter (Huawei / Sungrow / Solis)",
  "Galvanized steel mounting structure",
  "DC + AC cabling and protection devices",
  "Complete LESCO / IESCO net metering paperwork",
  "Online monitoring (Wi-Fi gateway included)",
  "5-year workmanship warranty",
];

export const Route = createFileRoute("/pricing")({
  head: () => {
    const { meta, links } = buildPageHead({ title: TITLE, description: DESC, path: PATH });
    return {
      meta,
      links,
      scripts: [
        ldScript(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Pricing", path: PATH }])),
        ldScript({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: TIERS.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: `${t.size} Solar System`,
              offers: { "@type": "Offer", priceCurrency: "PKR", price: t.price.replace(/[^0-9]/g, "") },
            },
          })),
        }),
      ],
    };
  },
  component: PricingPage,
});

function PricingPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Home", path: "/" }, { label: "Pricing", path: PATH }]}>
      <PageHero
        eyebrow="Pricing"
        title="Solar System Prices in Pakistan — 2026"
        intro="Fully-installed, net-metered solar systems with tier-1 equipment. Prices include installation, paperwork, monitoring and 5-year workmanship warranty. No hidden costs."
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TIERS.map((t) => (
            <div
              key={t.slug}
              className={`relative rounded-2xl border bg-card p-6 ${t.featured ? "border-amber shadow-amber-glow" : "border-border"}`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-amber text-foreground px-3 py-0.5 text-[10px] font-mono uppercase tracking-[0.18em]">
                  Most popular
                </span>
              )}
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{t.best}</p>
              <h2 className="mt-2 font-display text-3xl font-bold">{t.size}</h2>
              <p className="mt-1 text-2xl font-display text-amber">{t.price}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                <li>Generates {t.units}</li>
                <li>Saves {t.monthly}/month</li>
                <li>Payback in {t.payback}</li>
              </ul>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-amber hover:gap-2.5 transition-all">
                Request quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 pb-20">
        <div className="rounded-3xl border border-border bg-card p-8">
          <h2 className="font-display text-2xl font-bold">What's included in every system</h2>
          <ul className="mt-5 grid md:grid-cols-2 gap-2.5">
            {INCLUDED.map((i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-amber mt-0.5 flex-shrink-0" />
                {i}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/calculator" className="inline-flex items-center justify-center rounded-full bg-foreground text-primary-foreground px-5 py-2.5 text-sm font-medium">Open calculator</Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium">Get custom quote</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
