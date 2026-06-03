import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Users, Target, Eye, MapPin, ShieldCheck, BadgeCheck, Sun } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { buildPageHead, breadcrumbSchema, ldScript } from "@/lib/seo";

const PATH = "/about";
const TITLE = "About Sunshine Solar Energy — Lahore's Trusted Solar Installer";
const DESC =
  "Sunshine Solar Energy has delivered 500+ residential, commercial and industrial solar installations across Lahore and Punjab. Meet our team, certifications and mission.";

export const Route = createFileRoute("/about")({
  head: () => {
    const { meta, links } = buildPageHead({ title: TITLE, description: DESC, path: PATH });
    return {
      meta,
      links,
      scripts: [
        ldScript(
          breadcrumbSchema([
            { label: "Home", path: "/" },
            { label: "About", path: PATH },
          ]),
        ),
        ldScript({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: TITLE,
          description: DESC,
          url: `https://sunshine-solar-spark.lovable.app${PATH}`,
        }),
      ],
    };
  },
  component: AboutPage,
});

const STATS = [
  { label: "Installations Completed", value: "500+" },
  { label: "MW Capacity Deployed", value: "12+" },
  { label: "Years of Operation", value: "8" },
  { label: "Cities Served", value: "10" },
];

const VALUES = [
  { icon: ShieldCheck, title: "Tier-1 Only", body: "Every project uses Jinko, Longi, Canadian Solar panels and Huawei / Sungrow / Solis inverters with serial-number verification." },
  { icon: BadgeCheck, title: "AEDB Licensed", body: "Fully certified by the Alternative Energy Development Board (AEDB) for grid-tied and net-metered solar installations." },
  { icon: Users, title: "In-House Engineering", body: "No subcontracted labour. Our own NEBOSH-trained crews handle every rooftop and ground-mount installation." },
];

function AboutPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Home", path: "/" }, { label: "About", path: PATH }]}>
      <PageHero
        eyebrow="Our Story"
        title="Lahore's Trusted Solar Energy Partner Since 2018"
        intro="Sunshine Solar Energy was founded with one mission: make premium, bankable solar accessible to every Pakistani home and business. Eight years and 500+ installations later, we remain the city's most-trusted name for tier-1 grid-tied and hybrid solar."
      />

      <section className="mx-auto max-w-5xl px-5 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 pb-16">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-5 text-center">
            <p className="font-display text-3xl font-bold text-amber">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-8 pb-16 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-border bg-card p-8">
          <Target className="h-7 w-7 text-amber" />
          <h2 className="mt-3 font-display text-2xl font-bold">Our Mission</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Eliminate the friction between Pakistani consumers and clean energy — through honest sizing, transparent
            pricing, tier-1 equipment, and engineering-grade installations that pay for themselves in under four years.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8">
          <Eye className="h-7 w-7 text-amber" />
          <h2 className="mt-3 font-display text-2xl font-bold">Our Vision</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            By 2030, power 100,000 Pakistani homes and businesses with rooftop solar, displacing 2 million tons of CO₂
            and accelerating the country's transition to a distributed renewable energy grid.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-8 pb-16">
        <h2 className="font-display text-3xl font-bold mb-6">Why Sunshine</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
              <v.icon className="h-6 w-6 text-amber" />
              <h3 className="mt-3 font-display text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-8 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-amber/10 to-sky/10 border border-border p-8 md:p-12 text-center">
          <Sun className="h-10 w-10 text-amber mx-auto" />
          <h2 className="mt-4 font-display text-3xl font-bold">Ready to power your home or business?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Get a free, AI-powered solar feasibility report sized to your last 6 months of bills.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/calculator" className="inline-flex items-center justify-center rounded-full bg-foreground text-primary-foreground px-6 py-3 text-sm font-medium">Try the Calculator</Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium">Talk to an Expert</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
