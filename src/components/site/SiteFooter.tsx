import { Link } from "@tanstack/react-router";
import { Sun, MapPin } from "lucide-react";

const SERVICE_LINKS = [
  { to: "/services", label: "All Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/calculator", label: "Solar Calculator" },
  { to: "/net-metering", label: "Net Metering" },
  { to: "/case-studies", label: "Case Studies" },
];

const COMPANY_LINKS = [
  { to: "/about", label: "About Us" },
  { to: "/blog", label: "Blog" },
  { to: "/cities", label: "Cities We Serve" },
  { to: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
];

const AREAS = [
  "DHA",
  "Bahria Town",
  "Gulberg",
  "Johar Town",
  "Model Town",
  "Sundar",
  "Raiwind",
  "Kot Lakhpat",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-paper/60 backdrop-blur relative z-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-gradient shadow-amber-glow">
              <Sun className="h-5 w-5 text-foreground" strokeWidth={2.25} />
            </span>
            <span className="font-display text-lg font-bold">Sunshine Solar Energy</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Lahore-based solar installation company delivering premium residential, commercial and industrial solar
            systems with net metering and 24/7 monitoring.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-1 rounded-full bg-card border border-border px-3 py-1 text-xs"
              >
                <MapPin className="h-3 w-3 text-amber" /> {a}
              </span>
            ))}
          </div>
        </div>

        <FooterCol title="Services" links={SERVICE_LINKS} />
        <FooterCol title="Company" links={COMPANY_LINKS} />
        <FooterCol title="Legal" links={LEGAL_LINKS} />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} Sunshine Solar Energy · Lahore, Punjab
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <Link to="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: Array<{ to: string; label: string }>;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="hover:text-amber transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
