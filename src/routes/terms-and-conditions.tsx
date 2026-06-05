import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { buildPageHead, breadcrumbSchema, ldScript, webPageSchema } from "@/lib/seo";

const PATH = "/terms-and-conditions";
const TITLE = "Terms & Conditions | Sunshine Solar Energy";
const DESC =
  "Terms and conditions governing the use of Sunshine Solar Energy's website, quotations, contracts and installation services across Pakistan.";

const SECTIONS = [
  { h: "1. Acceptance of Terms", b: "By accessing the Sunshine Solar Energy website or engaging our services, you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of the site." },
  { h: "2. Services", b: "Sunshine Solar Energy provides solar consultation, design, installation, net metering and maintenance services in Pakistan. All proposals, quotations and timelines are estimates until a written contract is signed." },
  { h: "3. Quotations & Pricing", b: "Quotations are valid for 14 days from the date of issue. Prices may change due to fluctuation in equipment costs, taxes, duties or currency rates. Final pricing is confirmed in the signed installation agreement." },
  { h: "4. Payment Terms", b: "Standard payment is 50% advance, 40% on equipment delivery, 10% on commissioning. Custom payment plans available for commercial and industrial projects." },
  { h: "5. Warranties", b: "Panels: 25-year linear performance warranty (manufacturer). Inverters: 10-12 year warranty (manufacturer). Workmanship: 5-year warranty (Sunshine Solar). Net metering and DISCO interconnection are subject to DISCO and AEDB regulations." },
  { h: "6. Customer Responsibilities", b: "Customers must provide accurate site information, electrical load details, and required documents (CNIC, ownership papers, latest bill) for net metering applications. Roof structural integrity is the customer's responsibility unless a paid structural assessment is included." },
  { h: "7. Limitation of Liability", b: "Sunshine Solar Energy's liability is limited to the value of the installation contract. We are not liable for indirect, consequential or punitive damages, including loss of revenue or business interruption." },
  { h: "8. Intellectual Property", b: "All content on this website — text, graphics, logos, images, designs — is the property of Sunshine Solar Energy and protected under Pakistani copyright law. Unauthorized reproduction is prohibited." },
  { h: "9. Governing Law", b: "These Terms are governed by the laws of the Islamic Republic of Pakistan. Any disputes shall be resolved in the courts of Lahore, Punjab." },
  { h: "10. Changes to Terms", b: "We may update these Terms from time to time. Continued use of the site after changes constitutes acceptance of the revised Terms." },
];

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => {
    const { meta, links } = buildPageHead({ title: TITLE, description: DESC, path: PATH });
    return {
      meta,
      links,
      scripts: [
        ldScript(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Terms & Conditions", path: PATH }])),
      ],
    };
  },
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Home", path: "/" }, { label: "Terms & Conditions", path: PATH }]}>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        intro={`Last updated: ${new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}. Please read these Terms carefully before using our website or services.`}
      />

      <section className="mx-auto max-w-3xl px-5 lg:px-8 pb-20 space-y-6">
        {SECTIONS.map((s) => (
          <div key={s.h}>
            <h2 className="font-display text-xl font-bold">{s.h}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.b}</p>
          </div>
        ))}

        <div className="mt-10 pt-6 border-t border-border text-sm text-muted-foreground">
          <p>
            For questions about these Terms, contact us at{" "}
            <a className="text-amber" href="mailto:info@sunshinesolarltd.com">info@sunshinesolarltd.com</a>
            {" "}or +92-300-4242895.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
