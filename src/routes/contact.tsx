import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import {
  buildPageHead,
  breadcrumbSchema,
  webPageSchema,
  ldScript,
  SITE_PHONE,
  SITE_WHATSAPP,
  SITE_EMAIL,
  LOCALBUSINESS_ID,
  absoluteUrl,
} from "@/lib/seo";

const PATH = "/contact";
const TITLE = "Contact Sunshine Solar Energy — Lahore Solar Installer";
const DESC =
  "Get a free solar quote in 24 hours. Call, WhatsApp or email Sunshine Solar Energy — Lahore's premium solar installation team for homes and businesses.";

const CRUMBS = [{ label: "Home", path: "/" }, { label: "Contact", path: PATH }];

export const Route = createFileRoute("/contact")({
  head: () => {
    const { meta, links } = buildPageHead({ title: TITLE, description: DESC, path: PATH });
    return {
      meta,
      links,
      scripts: [
        ldScript(breadcrumbSchema(CRUMBS)),
        ldScript(
          webPageSchema({
            title: TITLE,
            description: DESC,
            path: PATH,
            pageType: "ContactPage",
            breadcrumbs: CRUMBS,
          }),
        ),
        ldScript({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${absoluteUrl(PATH)}#contactpage`,
          url: absoluteUrl(PATH),
          name: TITLE,
          description: DESC,
          mainEntity: { "@id": LOCALBUSINESS_ID },
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: SITE_PHONE,
              email: SITE_EMAIL,
              contactType: "sales",
              areaServed: "PK",
              availableLanguage: ["English", "Urdu"],
              hoursAvailable: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "20:00",
              },
            },
            {
              "@type": "ContactPoint",
              telephone: `+${SITE_WHATSAPP}`,
              contactType: "customer support",
              areaServed: "PK",
              availableLanguage: ["English", "Urdu"],
            },
          ],
        }),
      ],
    };
  },
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact", path: PATH }]}>
      <PageHero
        eyebrow="Contact"
        title="Talk to Lahore's Solar Experts"
        intro="Free consultation, AI-powered system sizing and a written quote within 24 hours. No pushy sales — just engineering-grade advice from people who own their installs."
      />

      <section className="mx-auto max-w-5xl px-5 lg:px-8 pb-20 grid md:grid-cols-2 gap-6">
        <a href={`tel:${SITE_PHONE}`} className="rounded-2xl border border-border bg-card p-6 hover:border-amber/50 transition-colors">
          <Phone className="h-6 w-6 text-amber" />
          <h2 className="mt-3 font-display text-lg font-bold">Call Us</h2>
          <p className="mt-1 text-sm text-muted-foreground">{SITE_PHONE}</p>
          <p className="mt-2 text-xs text-muted-foreground">Mon–Sat · 9 AM – 8 PM PKT</p>
        </a>

        <a href={`https://wa.me/${SITE_WHATSAPP}`} target="_blank" rel="noreferrer" className="rounded-2xl border border-border bg-card p-6 hover:border-amber/50 transition-colors">
          <MessageCircle className="h-6 w-6 text-amber" />
          <h2 className="mt-3 font-display text-lg font-bold">WhatsApp</h2>
          <p className="mt-1 text-sm text-muted-foreground">Fastest response — send your last electricity bill.</p>
          <p className="mt-2 text-xs text-amber">Chat now →</p>
        </a>

        <a href="mailto:info@sunshinesolarltd.com" className="rounded-2xl border border-border bg-card p-6 hover:border-amber/50 transition-colors">
          <Mail className="h-6 w-6 text-amber" />
          <h2 className="mt-3 font-display text-lg font-bold">Email</h2>
          <p className="mt-1 text-sm text-muted-foreground">info@sunshinesolarltd.com</p>
          <p className="mt-2 text-xs text-muted-foreground">Replies within 4 business hours</p>
        </a>

        <div className="rounded-2xl border border-border bg-card p-6">
          <MapPin className="h-6 w-6 text-amber" />
          <h2 className="mt-3 font-display text-lg font-bold">Visit Us</h2>
          <p className="mt-1 text-sm text-muted-foreground">Lahore, Punjab, Pakistan</p>
          <p className="mt-2 text-xs text-muted-foreground inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> Site surveys across DHA, Bahria, Gulberg, Johar Town & more
          </p>
        </div>
      </section>
    </PageShell>
  );
}
