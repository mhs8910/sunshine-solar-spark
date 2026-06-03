import type { ReactNode } from "react";
import { Navbar } from "@/components/site/Navbar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyMobileCTA } from "@/components/site/StickyMobileCTA";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import type { BreadcrumbItem } from "@/lib/seo";

export function PageShell({
  breadcrumbs,
  children,
}: {
  breadcrumbs?: BreadcrumbItem[];
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <Breadcrumbs items={breadcrumbs} />
      ) : (
        <div className="pt-20" />
      )}
      <main>{children}</main>
      <SiteFooter />
      <StickyMobileCTA />
    </div>
  );
}

/** Standardized hero block for content pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="mx-auto max-w-5xl px-5 lg:px-8 pt-6 pb-12">
      {eyebrow && (
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber">{eyebrow}</p>
      )}
      <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
        {title}
      </h1>
      {intro && (
        <p className="mt-5 max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed">
          {intro}
        </p>
      )}
    </section>
  );
}
