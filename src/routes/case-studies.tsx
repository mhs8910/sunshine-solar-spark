import { createFileRoute, Link } from "@tanstack/react-router";
import { TrendingDown, MapPin, Zap, Receipt } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { buildPageHead, breadcrumbSchema, ldScript, webPageSchema, absoluteUrl } from "@/lib/seo";

const PATH = "/case-studies";
const TITLE = "Solar Case Studies in Lahore | Sunshine Solar Energy";
const DESC =
  "Real customer case studies showing before/after electricity bills, system specs, savings and ROI across residential, commercial and industrial solar installations in Pakistan.";

const CASES = [
  {
    title: "10 kW Residential — DHA Phase 6",
    location: "DHA, Lahore",
    system: "10 kW Jinko + Huawei inverter",
    before: "PKR 52,000 / month",
    after: "PKR 4,800 / month",
    savings: "PKR 566,400 / year",
    payback: "2.8 years",
  },
  {
    title: "25 kW Commercial — Gulberg Office",
    location: "Gulberg III, Lahore",
    system: "25 kW Longi + Solis 3-phase",
    before: "PKR 145,000 / month",
    after: "PKR 18,500 / month",
    savings: "PKR 1.51 M / year",
    payback: "2.5 years",
  },
  {
    title: "100 kW Industrial — Sundar Estate",
    location: "Sundar Industrial Estate",
    system: "100 kW Canadian Solar + Sungrow",
    before: "PKR 620,000 / month",
    after: "PKR 95,000 / month",
    savings: "PKR 6.3 M / year",
    payback: "2.3 years",
  },
  {
    title: "5 kW Hybrid — Bahria Town",
    location: "Bahria Town, Lahore",
    system: "5 kW Jinko + 10 kWh Pylontech",
    before: "PKR 26,000 / month + UPS gas",
    after: "PKR 3,200 / month",
    savings: "PKR 273,600 / year",
    payback: "3.4 years",
  },
];

export const Route = createFileRoute("/case-studies")({
  head: () => {
    const { meta, links } = buildPageHead({ title: TITLE, description: DESC, path: PATH });
    return {
      meta,
      links,
      scripts: [
        ldScript(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Case Studies", path: PATH }])),
      ],
    };
  },
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Home", path: "/" }, { label: "Case Studies", path: PATH }]}>
      <PageHero
        eyebrow="Case Studies"
        title="Real Customers, Real Savings"
        intro="Every Sunshine Solar installation is documented with before/after electricity bills, system specs and verified ROI. Browse a sample below — full reports and on-site videos available on request."
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-20 grid md:grid-cols-2 gap-5">
        {CASES.map((c) => (
          <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {c.location}
            </p>
            <h2 className="mt-2 font-display text-xl font-bold">{c.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground inline-flex items-center gap-1">
              <Zap className="h-3.5 w-3.5" /> {c.system}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <Metric label="Before" value={c.before} />
              <Metric label="After" value={c.after} accent />
              <Metric label="Annual Savings" value={c.savings} />
              <Metric label="Payback" value={c.payback} />
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-amber/10 to-sky/10 border border-border p-8 md:p-10 text-center">
          <TrendingDown className="h-8 w-8 text-amber mx-auto" />
          <h2 className="mt-3 font-display text-2xl font-bold">Want to be our next case study?</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Share your last electricity bill and we'll model your exact savings, payback and ROI for free.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link to="/calculator" className="inline-flex items-center rounded-full bg-foreground text-primary-foreground px-5 py-2.5 text-sm font-medium">Open calculator</Link>
            <Link to="/contact" className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium">Get a quote</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-xl bg-paper/50 border border-border p-3">
      <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground inline-flex items-center gap-1">
        <Receipt className="h-3 w-3" /> {label}
      </p>
      <p className={`mt-1 font-display font-bold ${accent ? "text-amber" : "text-foreground"}`}>{value}</p>
    </div>
  );
}
