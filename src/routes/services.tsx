import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Building2, Factory, Plug, Wrench, Battery, MessageCircle, Sun, Zap, ArrowRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { buildPageHead, breadcrumbSchema, ldScript, faqSchema, webPageSchema, serviceSchema } from "@/lib/seo";

const PATH = "/services";
const TITLE = "Solar Installation Services in Lahore | Sunshine Solar Energy";
const DESC =
  "Residential, commercial, industrial, on-grid, off-grid, hybrid & net-metered solar installation services across Lahore and Pakistan. Tier-1 equipment, AEDB certified.";

const SERVICES = [
  { icon: Home, slug: "residential-solar", title: "Residential Solar", body: "Premium rooftop solar for homes from 3 kW to 20 kW with net metering." },
  { icon: Building2, slug: "commercial-solar", title: "Commercial Solar", body: "Reduce shop, office and warehouse bills by 70%+ with engineered commercial systems." },
  { icon: Factory, slug: "industrial-solar", title: "Industrial Solar", body: "Megawatt-scale ground-mount and rooftop systems for factories and plants." },
  { icon: Plug, slug: "net-metering", title: "Net Metering", body: "End-to-end LESCO / IESCO / K-Electric net metering applications and approvals." },
  { icon: Wrench, slug: "solar-maintenance", title: "Solar Maintenance", body: "Quarterly cleaning, inverter health checks, monitoring & emergency repairs." },
  { icon: Battery, slug: "solar-batteries", title: "Solar Batteries", body: "Lithium battery banks for hybrid systems — Pylontech, Dyness, BYD." },
  { icon: MessageCircle, slug: "solar-consultation", title: "Solar Consultation", body: "Free feasibility report, ROI modelling and unbiased system sizing." },
  { icon: Zap, slug: "on-grid-solar", title: "On-Grid Solar", body: "Cheapest, fastest payback. Export surplus to LESCO via net metering." },
  { icon: Sun, slug: "off-grid-solar", title: "Off-Grid Solar", body: "Battery-only systems for farms, rural homes and remote sites." },
  { icon: Battery, slug: "hybrid-solar-systems", title: "Hybrid Solar Systems", body: "Grid-tied savings + battery backup for load-shedding peace of mind." },
];

const FAQS = [
  { q: "Which solar service is right for my home?", a: "For most Lahore homes with 3-phase connections, a grid-tied or hybrid system with net metering offers the fastest payback (3-4 years) and lowest cost per kWh." },
  { q: "Do you handle the full net metering process?", a: "Yes. We file the LESCO/IESCO application, AEDB licensing, install the bidirectional meter and commission your system end-to-end." },
  { q: "What warranty do you offer?", a: "25-year linear performance warranty on Tier-1 panels, 10-12 year inverter warranty, and 5-year workmanship warranty from Sunshine Solar." },
];

export const Route = createFileRoute("/services")({
  head: () => {
    const { meta, links } = buildPageHead({ title: TITLE, description: DESC, path: PATH });
    return {
      meta,
      links,
      scripts: [
        ldScript(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Services", path: PATH }])),
        ldScript(faqSchema(FAQS)),
        ldScript({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: `https://sunshine-solar-spark.lovable.app/services/${s.slug}`,
          })),
        }),
      ],
    };
  },
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Home", path: "/" }, { label: "Services", path: PATH }]}>
      <PageHero
        eyebrow="Services"
        title="Solar Installation Services for Every Need"
        intro="From 3 kW rooftop systems for homes to megawatt-scale industrial deployments — Sunshine Solar covers the full spectrum of solar in Pakistan with tier-1 equipment and AEDB-certified engineering."
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div key={s.slug} className="group rounded-2xl border border-border bg-card p-6 hover:border-amber/50 transition-colors">
              <s.icon className="h-7 w-7 text-amber" />
              <h2 className="mt-4 font-display text-xl font-bold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-amber hover:gap-2.5 transition-all">
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 pb-20">
        <h2 className="font-display text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <details key={f.q} className="rounded-xl border border-border bg-card p-5">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
