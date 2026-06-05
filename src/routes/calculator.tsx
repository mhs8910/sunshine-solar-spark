import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SolarCalculator } from "@/components/site/SolarCalculator";
import { buildPageHead, breadcrumbSchema, ldScript, webPageSchema } from "@/lib/seo";

const PATH = "/calculator";
const TITLE = "Solar Savings Calculator Pakistan | Sunshine Solar Energy";
const DESC =
  "Free online solar calculator for Pakistan. Estimate your system size, monthly savings, payback period and ROI based on your current LESCO / IESCO electricity bill.";

export const Route = createFileRoute("/calculator")({
  head: () => {
    const { meta, links } = buildPageHead({ title: TITLE, description: DESC, path: PATH });
    return {
      meta,
      links,
      scripts: [
        ldScript(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Calculator", path: PATH }])),
        ldScript(
          webPageSchema({
            title: TITLE,
            description: DESC,
            path: PATH,
            breadcrumbs: [{ label: "Home", path: "/" }, { label: "Calculator", path: PATH }],
          }),
        ),
      ],
    };
  },
  component: CalculatorPage,
});

function CalculatorPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Home", path: "/" }, { label: "Calculator", path: PATH }]}>
      <PageHero
        eyebrow="Solar Calculator"
        title="Estimate Your Solar Savings in 30 Seconds"
        intro="Enter your average monthly electricity bill and we'll calculate your ideal system size, upfront cost, monthly savings and payback period — using real LESCO / IESCO tariffs and Lahore irradiance data."
      />
      <section className="mx-auto max-w-5xl px-5 lg:px-8 pb-20">
        <SolarCalculator />
      </section>
    </PageShell>
  );
}
