import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { buildPageHead, breadcrumbSchema, ldScript } from "@/lib/seo";

const PATH = "/cities";
const TITLE = "Solar Installation Cities in Pakistan | Sunshine Solar Energy";
const DESC =
  "Sunshine Solar Energy delivers solar installations across Lahore, Islamabad, Karachi, Rawalpindi, Faisalabad, Multan and more cities in Pakistan.";

const CITIES = [
  { slug: "lahore", name: "Lahore", area: "Punjab", desc: "Our home city — 500+ installations across DHA, Bahria, Gulberg & beyond." },
  { slug: "islamabad", name: "Islamabad", area: "Capital Territory", desc: "Residential and commercial solar across F-6, F-7, E-11 and Bahria Enclave." },
  { slug: "karachi", name: "Karachi", area: "Sindh", desc: "K-Electric net-metered systems for homes and commercial properties." },
  { slug: "rawalpindi", name: "Rawalpindi", area: "Punjab", desc: "IESCO net metering and rooftop installations across Saddar and Bahria Town." },
  { slug: "faisalabad", name: "Faisalabad", area: "Punjab", desc: "Industrial and commercial solar for Pakistan's textile capital." },
  { slug: "multan", name: "Multan", area: "Punjab", desc: "High-irradiance region — best solar yields in the country." },
  { slug: "gujranwala", name: "Gujranwala", area: "Punjab", desc: "Commercial and residential rooftop solar installations." },
  { slug: "sialkot", name: "Sialkot", area: "Punjab", desc: "Export-industry solar for sports goods and surgical manufacturers." },
  { slug: "bahawalpur", name: "Bahawalpur", area: "Punjab", desc: "Agricultural solar pumping and residential systems." },
  { slug: "peshawar", name: "Peshawar", area: "KP", desc: "PESCO-area residential and commercial installations." },
];

export const Route = createFileRoute("/cities")({
  head: () => {
    const { meta, links } = buildPageHead({ title: TITLE, description: DESC, path: PATH });
    return {
      meta,
      links,
      scripts: [
        ldScript(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Cities", path: PATH }])),
      ],
    };
  },
  component: CitiesPage,
});

function CitiesPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Home", path: "/" }, { label: "Cities", path: PATH }]}>
      <PageHero
        eyebrow="Coverage"
        title="Cities We Serve Across Pakistan"
        intro="Sunshine Solar's engineering and installation teams cover every major city in Pakistan — with dedicated local crews handling net metering applications, site surveys and post-installation support."
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CITIES.map((c) => (
          <div key={c.slug} className="group rounded-2xl border border-border bg-card p-6 hover:border-amber/50 transition-colors">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground inline-flex items-center gap-1">
              <MapPin className="h-3 w-3 text-amber" /> {c.area}
            </p>
            <h2 className="mt-2 font-display text-xl font-bold">{c.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            <Link to="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-amber hover:gap-2.5 transition-all">
              Get a quote in {c.name} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
