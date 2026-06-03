import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { buildPageHead, breadcrumbSchema, ldScript, faqSchema } from "@/lib/seo";

const PATH = "/net-metering";
const TITLE = "Net Metering in Pakistan — Complete Guide | Sunshine Solar";
const DESC =
  "Everything about net metering in Pakistan: how it works, LESCO / IESCO / K-Electric application process, documents required, costs and approval timeline.";

const STEPS = [
  { n: 1, title: "Feasibility & system design", body: "We size your system to fit your sanctioned load and roof area, then prepare the technical drawings." },
  { n: 2, title: "Installation & commissioning", body: "Tier-1 panels and inverter installed in 3-5 days; system commissioned and tested." },
  { n: 3, title: "DISCO application", body: "We file the net metering application with LESCO / IESCO / K-Electric, including all engineering drawings and equipment certifications." },
  { n: 4, title: "AEDB licensing", body: "Generation license issued by the Alternative Energy Development Board within 15-30 days." },
  { n: 5, title: "Bi-directional meter install", body: "DISCO replaces your existing meter with a bidirectional one — your meter can now run backwards." },
  { n: 6, title: "Agreement signing & go-live", body: "Sign your net metering agreement and start exporting surplus electricity to the grid for credit." },
];

const DOCS = [
  "Copy of CNIC (owner)",
  "Latest paid electricity bill",
  "Property ownership documents",
  "Single-line diagram (we prepare)",
  "Equipment datasheets (we prepare)",
  "Insurance certificate (we arrange)",
];

const HUBS = [
  { to: "/net-metering", label: "LESCO Net Metering", desc: "Lahore consumers — full process & timeline" },
  { to: "/net-metering", label: "IESCO Net Metering", desc: "Islamabad / Rawalpindi consumers" },
  { to: "/net-metering", label: "K-Electric Net Metering", desc: "Karachi consumers — KE-specific requirements" },
];

const FAQS = [
  { q: "How long does net metering approval take in Pakistan?", a: "Typically 30-60 days from system commissioning, depending on the DISCO's workload. LESCO usually clears within 45 days." },
  { q: "Do I get cash for surplus units?", a: "No — surplus units are credited at the per-unit tariff against future bills. Unused credit rolls over month to month." },
  { q: "What's the minimum and maximum system size for net metering?", a: "Per NEPRA regulation: 1 kW minimum, 1 MW maximum. System capacity cannot exceed your sanctioned load." },
  { q: "Do I need a 3-phase connection?", a: "Yes — net metering in Pakistan requires a 3-phase electrical connection. We can help you upgrade if needed." },
];

export const Route = createFileRoute("/net-metering")({
  head: () => {
    const { meta, links } = buildPageHead({ title: TITLE, description: DESC, path: PATH });
    return {
      meta,
      links,
      scripts: [
        ldScript(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Net Metering", path: PATH }])),
        ldScript(faqSchema(FAQS)),
      ],
    };
  },
  component: NetMeteringPage,
});

function NetMeteringPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Home", path: "/" }, { label: "Net Metering", path: PATH }]}>
      <PageHero
        eyebrow="Net Metering"
        title="Net Metering in Pakistan — Step-by-Step Guide"
        intro="Net metering lets your solar system spin your meter backwards. Sunshine Solar handles the entire process — from system design to LESCO / IESCO / K-Electric approval and bidirectional meter installation."
      />

      <section className="mx-auto max-w-5xl px-5 lg:px-8 pb-16">
        <h2 className="font-display text-2xl font-bold mb-6">The 6-step process</h2>
        <ol className="space-y-3">
          {STEPS.map((s) => (
            <li key={s.n} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-amber text-foreground font-display font-bold">
                {s.n}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-8 pb-16 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-border bg-card p-7">
          <FileText className="h-7 w-7 text-amber" />
          <h2 className="mt-3 font-display text-xl font-bold">Documents required</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {DOCS.map((d) => (
              <li key={d} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-amber mt-0.5 flex-shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-card p-7">
          <Zap className="h-7 w-7 text-amber" />
          <h2 className="mt-3 font-display text-xl font-bold">By distribution company</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {HUBS.map((h) => (
              <li key={h.label} className="rounded-xl border border-border p-3">
                <p className="font-medium">{h.label}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{h.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 pb-16">
        <h2 className="font-display text-2xl font-bold mb-5">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="rounded-xl border border-border bg-card p-5">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-amber/10 to-sky/10 border border-border p-8 text-center">
          <h2 className="font-display text-2xl font-bold">Ready to start your net metering application?</h2>
          <p className="mt-2 text-sm text-muted-foreground">Get a free feasibility report and timeline estimate.</p>
          <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-foreground text-primary-foreground px-6 py-3 text-sm font-medium">
            Talk to a net metering specialist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
