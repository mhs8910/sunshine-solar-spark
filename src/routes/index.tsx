import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, PlayCircle, Sun, Zap, ShieldCheck, Cpu, Wrench, LineChart,
  Home, Building2, Factory, MapPin, CheckCircle2, AlertTriangle, Battery,
  Gauge, PanelTop, Plug, Phone, MessageCircle, Star, BadgeCheck, Award,
  Sparkles, ArrowUpRight, Receipt, Wallet, ChevronRight,
} from "lucide-react";

import heroImg from "@/assets/hero-solar.jpg";
import panelImg from "@/assets/panel.jpg";
import inverterImg from "@/assets/inverter.jpg";
import batteryImg from "@/assets/battery.jpg";

import { Navbar } from "@/components/site/Navbar";
import { StickyMobileCTA } from "@/components/site/StickyMobileCTA";
import { SolarCalculator } from "@/components/site/SolarCalculator";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sunshine Solar Energy — Premium Solar Installation in Lahore" },
      { name: "description", content: "Cut your electricity bill by 70–80%. Lahore's premium solar installer for homes, businesses and industries. AI-powered sizing, net metering & tier-1 equipment." },
      { property: "og:title", content: "Sunshine Solar Energy — Lahore" },
      { property: "og:description", content: "Premium residential, commercial & industrial solar in Lahore. Free estimate in 24 hours." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Sunshine Solar Energy",
          image: "/og-image.jpg",
          description: "Solar installation company in Lahore, Pakistan — residential, commercial & industrial solar systems with net metering.",
          address: { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" },
          areaServed: ["Lahore", "Punjab"],
          telephone: "+92-300-4242895",
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Index,
});

function Section({ id, eyebrow, title, sub, children, className = "" }: {
  id?: string; eyebrow?: string; title?: string; sub?: string; children: React.ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 lg:px-8 py-20 sm:py-28 ${className}`}>
      {(eyebrow || title) && (
        <div className="max-w-3xl mb-12">
          {eyebrow && <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-3">{eyebrow}</p>}
          {title && <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">{title}</h2>}
          {sub && <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">{sub}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-sun-glow">
        <div className="absolute inset-0 solar-grid pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-soft">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/70">Lahore · Punjab · Pakistan</span>
            </div>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] font-semibold tracking-tight text-balance">
              Cut your electricity bill by up to{" "}
              <span className="relative inline-block">
                <span className="relative z-10">70–80%</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-amber/40 -z-0" aria-hidden />
              </span>{" "}
              with smart solar.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
              Lahore-based solar installation experts for homes, businesses and industries — with AI-powered sizing,
              net metering support and long-term system monitoring.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#calculator" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:bg-foreground/90 transition shadow-elevated">
                Get Free Solar Estimate
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#videos" className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-6 py-3.5 text-sm font-semibold hover:bg-muted transition">
                <PlayCircle className="h-4 w-4 text-amber" />
                Watch Project Videos
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {["Lahore Based", "Residential + Commercial + Industrial", "Net Metering", "Tier-1 Equipment", "24/7 Monitoring"].map((t) => (
                <div key={t} className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-foreground/75">
                  <CheckCircle2 className="h-4 w-4 text-amber" /> {t}
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[28px] overflow-hidden border border-border shadow-elevated bg-card">
              <img
                src={heroImg}
                alt="Premium rooftop solar installation in Lahore"
                width={1536}
                height={1280}
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-foreground/40 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-card/90 backdrop-blur px-3 py-1.5">
                <Sun className="h-3.5 w-3.5 text-amber" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em]">Live system · 8.4 kW</span>
              </div>
            </div>

            {/* Savings card */}
            <div className="absolute -bottom-8 -left-6 sm:-left-10 w-[260px] rounded-2xl bg-card border border-border shadow-elevated p-4 animate-float-slow">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Estimated Monthly Savings</p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="font-display text-3xl font-bold">Rs 34,500</span>
                <span className="text-xs text-muted-foreground">/ mo</span>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-[78%] bg-amber-gradient" />
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                <span>vs current bill</span><span className="text-amber">−78%</span>
              </div>
            </div>

            <div className="absolute -top-6 -right-4 hidden sm:block rounded-2xl bg-foreground text-primary-foreground p-3 shadow-elevated">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Producing now · 6.2 kW</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <Section
        id="calculator"
        eyebrow="Instant Estimate"
        title="See your solar savings in 30 seconds."
        sub="Slide your bill, pick your property type, and get a personalised system size, monthly savings and payback period — all before you pick up the phone."
      >
        <SolarCalculator />
      </Section>

      {/* WHY US */}
      <Section
        id="why"
        eyebrow="Why Sunshine Solar"
        title="Engineered for transparency. Built for the next 25 years."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Cpu, t: "AI-powered system sizing", d: "We analyse 12 months of your bills, roof orientation and load curve to recommend a perfectly sized system — no oversell, no undersize." },
            { icon: ShieldCheck, t: "Zero-hassle net metering", d: "We handle the full LESCO net metering application, documentation and bi-directional meter installation end to end." },
            { icon: LineChart, t: "24/7 monitoring support", d: "Every system ships with a live monitoring app and proactive alerts. We see issues before you do." },
            { icon: BadgeCheck, t: "Tier-1 panels & inverters", d: "Only Jinko, Longi, Huawei, Solis, Sungrow — verified by serial number, backed by global warranties." },
            { icon: Receipt, t: "Transparent quotation", d: "Itemised BOQs. No hidden fees. No surprise add-ons after installation day." },
            { icon: Factory, t: "Residential to industrial", d: "From a 5 kW home setup to 500 kW industrial arrays — one team, one accountability chain." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="group rounded-2xl bg-card border border-border p-6 hover:border-amber/40 hover:shadow-elevated transition">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber/10 text-foreground group-hover:bg-amber-gradient transition">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROBLEM / SOLUTION */}
      <Section
        id="problem"
        eyebrow="The Problem"
        title="Electricity in Pakistan keeps getting more expensive — and more unreliable."
      >
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-paper border border-border p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-3 py-1.5">
              <AlertTriangle className="h-3.5 w-3.5 text-destructive" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Without solar</span>
            </div>
            <ul className="mt-6 space-y-4">
              {[
                "Bills increasing 25–40% year over year",
                "Daily load-shedding hurting productivity",
                "Wrong system sizing wasting lakhs of rupees",
                "Counterfeit panels & inverters in the local market",
                "Confusing, slow net metering paperwork",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-destructive" />
                  <span className="text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-foreground text-primary-foreground p-8 relative overflow-hidden">
            <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-amber-gradient opacity-50 blur-3xl" />
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-gradient text-foreground px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Sunshine Solar way</span>
            </div>
            <h3 className="mt-6 font-display text-2xl sm:text-3xl font-semibold">
              One transparent partner — from your first bill audit to year-25 monitoring.
            </h3>
            <ul className="mt-6 space-y-3">
              {[
                "AI sizing tuned for Lahore irradiance & your load profile",
                "Only Tier-1, serial-verified equipment",
                "End-to-end LESCO net metering done for you",
                "Itemised quote — no hidden line items",
                "24/7 monitoring & dedicated after-sales WhatsApp",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-primary-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-amber mt-0.5 shrink-0" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        id="services"
        eyebrow="Services"
        title="Solar systems built for every scale."
      >
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Home, label: "Residential Solar", best: "Homes, villas, apartments", range: "3 kW – 20 kW systems", benefits: ["70–80% bill reduction", "Battery-ready hybrid inverters", "Net metering included"] },
            { icon: Building2, label: "Commercial Solar", best: "Offices, shops, clinics, schools", range: "15 kW – 100 kW systems", benefits: ["Daytime load offset", "Faster 3–4 yr payback", "ROI-focused engineering"] },
            { icon: Factory, label: "Industrial Solar", best: "Factories, mills, warehouses", range: "100 kW – 1 MW+ systems", benefits: ["Dedicated EPC team", "Structural & HT design", "Performance guarantees"] },
          ].map(({ icon: Icon, label, best, range, benefits }) => (
            <div key={label} className="group rounded-3xl bg-card border border-border p-7 flex flex-col hover:border-foreground/20 hover:shadow-elevated transition">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-gradient">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Service</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Best for: {best}</p>
              <p className="mt-1 font-mono text-xs text-foreground/70">{range}</p>
              <ul className="mt-5 space-y-2.5 flex-1">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-amber mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="#calculator" className="mt-6 inline-flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm font-medium hover:bg-foreground hover:text-primary-foreground transition">
                Get Quote <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* VIDEO GALLERY */}
      <VideoGallery />

      {/* CASE STUDIES */}
      <Section
        id="cases"
        eyebrow="Case Studies"
        title="Real Lahore projects, verified savings."
      >
        <div className="grid lg:grid-cols-3 gap-5">
          {[
            { client: "Residential · DHA Phase 6", size: "10 kW Hybrid", before: 78000, after: 14500, time: "4 days", eqp: "Jinko 580W · Huawei 10kTL", payback: "3.1 yrs" },
            { client: "Commercial · Gulberg", size: "35 kW On-Grid", before: 245000, after: 52000, time: "12 days", eqp: "Longi Hi-MO 6 · Sungrow 33kW", payback: "2.8 yrs" },
            { client: "Industrial · Sundar Estate", size: "220 kW On-Grid", before: 1850000, after: 410000, time: "26 days", eqp: "Canadian Solar · Huawei SUN2000-100", payback: "2.4 yrs" },
          ].map((c) => (
            <article key={c.client} className="rounded-3xl bg-card border border-border overflow-hidden hover:shadow-elevated transition">
              <div className="aspect-[16/9] relative bg-foreground/90 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,166,35,0.35),transparent_55%)]" />
                <PlayCircle className="h-14 w-14 text-amber relative z-10" />
                <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">YouTube · Project film</span>
              </div>
              <div className="p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{c.client}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{c.size}</h3>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <Metric label="Bill before" value={`Rs ${c.before.toLocaleString()}`} />
                  <Metric label="Bill after" value={`Rs ${c.after.toLocaleString()}`} accent />
                  <Metric label="Install time" value={c.time} />
                  <Metric label="Payback" value={c.payback} />
                </div>
                <p className="mt-4 text-xs text-muted-foreground font-mono">{c.eqp}</p>
                <a href="#calculator" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-amber transition">
                  See full project <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="process" eyebrow="How it works" title="From first call to first kWh in 5 steps.">
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { n: "01", t: "Free consultation", d: "WhatsApp or call. We listen to your goals." },
            { n: "02", t: "Bill & load analysis", d: "Send 6 months of bills. We model your usage." },
            { n: "03", t: "AI-powered sizing", d: "Right-sized system + itemised BOQ." },
            { n: "04", t: "Quote & approval", d: "Transparent pricing & milestone plan." },
            { n: "05", t: "Install + net meter + monitor", d: "Live in days. Monitored for life." },
          ].map((s, i) => (
            <div key={s.n} className="relative rounded-2xl bg-card border border-border p-5">
              <span className="font-mono text-[11px] tracking-[0.2em] text-amber">{s.n}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
              {i < 4 && <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-border" />}
            </div>
          ))}
        </div>
      </Section>

      {/* TRUST & PROOF */}
      <Section id="trust" eyebrow="Trust & Proof" title="Loved by homeowners. Trusted by businesses.">
        <div className="grid lg:grid-cols-3 gap-5 mb-10">
          <Stat big="4.9" label="Google rating" sub="220+ verified reviews" icon={Star} />
          <Stat big="600+" label="Projects installed" sub="Across Lahore & Punjab" icon={Award} />
          <Stat big="8 yrs" label="On the ground" sub="Lahore-based EPC team" icon={MapPin} />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { n: "Ahmed R.", r: "DHA, Lahore", q: "Bill dropped from 82k to 13k. Install was clean, paperwork done in 3 weeks. Couldn't be happier." },
            { n: "Hira K.", r: "Gulberg", q: "What sold me was the transparent BOQ. Every panel, every clamp, every wire — itemised." },
            { n: "Imran T.", r: "Sundar Industrial Estate", q: "220 kW system running flawlessly for 14 months. Their monitoring caught one inverter fault before we even noticed." },
          ].map((t) => (
            <div key={t.n} className="rounded-3xl bg-card border border-border p-6">
              <div className="flex items-center gap-1 text-amber">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.q}"</p>
              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                <span className="font-display font-semibold text-sm">{t.n}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{t.r}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {["25-yr panel warranty", "10-yr inverter warranty", "Tier-1 verified", "No hidden pricing"].map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5 rounded-full bg-paper border border-border px-4 py-2 text-xs font-medium">
              <BadgeCheck className="h-3.5 w-3.5 text-amber" /> {b}
            </span>
          ))}
        </div>
      </Section>

      {/* EQUIPMENT */}
      <Section id="equipment" eyebrow="Equipment & Technology" title="Only the gear we'd put on our own roofs.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { img: panelImg, icon: PanelTop, t: "Solar Panels", d: "Tier-1 mono-PERC & N-type modules from Jinko, Longi & Canadian Solar.", w: "25-year linear power warranty" },
            { img: inverterImg, icon: Plug, t: "Inverters", d: "Hybrid & on-grid inverters from Huawei, Solis, Sungrow, Growatt.", w: "10-year inverter warranty" },
            { img: batteryImg, icon: Battery, t: "Lithium Batteries", d: "LiFePO4 storage from Dyness, Pylontech and Huawei LUNA — battery-ready by default.", w: "6,000+ cycle life" },
          ].map(({ img, icon: Icon, t, d, w }) => (
            <div key={t} className="rounded-3xl bg-card border border-border overflow-hidden hover:shadow-elevated transition">
              <div className="aspect-[4/3] bg-paper">
                <img src={img} alt={t} loading="lazy" width={896} height={672} className="w-full h-full object-contain p-6" />
              </div>
              <div className="p-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-amber" />
                  <h3 className="font-display text-lg font-semibold">{t}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70">{w}</p>
              </div>
            </div>
          ))}
          {[
            { icon: Gauge, t: "Net Metering", d: "End-to-end LESCO/IESCO net metering application, approvals and bi-directional meter install." },
            { icon: LineChart, t: "Monitoring Dashboard", d: "Live production data, alerts and monthly performance reports on your phone." },
            { icon: Wrench, t: "After-sales Care", d: "Annual cleaning, on-call diagnostics and dedicated WhatsApp support line." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-3xl bg-paper border border-border p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-card border border-border">
                <Icon className="h-5 w-5 text-foreground" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>


      {/* LOCAL SEO */}
      <Section id="lahore" eyebrow="Serving Lahore & Punjab" title="The trusted solar company in Lahore.">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="text-sm text-foreground/80 leading-relaxed space-y-4 max-w-prose">
            <p>
              Sunshine Solar Energy is a Lahore-based solar installation company serving homes, businesses and
              industries across Punjab. From DHA and Bahria Town to Gulberg, Johar Town, Model Town and the
              industrial belts of Sundar, Raiwind and Kot Lakhpat — we deliver tier-1, net-metered solar systems
              with end-to-end care.
            </p>
            <p>
              Whether you're researching <strong>solar panel price in Lahore</strong>, planning a{" "}
              <strong>5 kW solar system</strong> for your home, or scoping a <strong>10 kW solar system</strong>{" "}
              for a small office, our energy advisors design every solution around your actual load profile —
              not generic rules of thumb.
            </p>
            <p>
              We handle the full <strong>net metering in Lahore</strong> process with LESCO, ensuring you earn
              credit for every excess unit you export back to the grid.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Solar company in Lahore",
              "Solar installation in Lahore",
              "Net metering in Lahore",
              "Solar panel price in Lahore",
              "5 kW solar system price",
              "10 kW solar system price",
              "Commercial solar Punjab",
              "Industrial solar Lahore",
            ].map((k) => (
              <div key={k} className="rounded-xl bg-paper border border-border p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Service</p>
                <p className="font-display font-semibold text-sm mt-1">{k}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="FAQ" title="Everything Lahore homeowners ask before going solar.">
        <FAQ />
      </Section>

      {/* FINAL CTA */}
      <section className="px-5 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-foreground text-primary-foreground relative overflow-hidden p-10 sm:p-16">
          <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-amber-gradient opacity-30 blur-3xl" />
          <div className="absolute inset-0 solar-grid opacity-30" aria-hidden />
          <div className="relative max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber">Ready when you are</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-balance">
              Ready to stop overpaying for electricity?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-primary-foreground/75 max-w-xl">
              Get a free solar estimate for your home, business or industrial site. Personalised proposal in
              under 24 hours — no obligation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#calculator" className="inline-flex items-center gap-2 rounded-full bg-amber-gradient text-foreground px-6 py-3.5 text-sm font-semibold hover:brightness-105 transition shadow-amber-glow">
                Get Free Solar Estimate <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://wa.me/923004242895" className="inline-flex items-center gap-2 rounded-full bg-card/10 border border-card/20 text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:bg-card/20 transition">
                <MessageCircle className="h-4 w-4" /> WhatsApp Sunshine Solar
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-xl p-3 ${accent ? "bg-amber/10" : "bg-muted"}`}>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className={`font-display font-semibold mt-0.5 ${accent ? "text-foreground" : ""}`}>{value}</p>
    </div>
  );
}

function Stat({ big, label, sub, icon: Icon }: { big: string; label: string; sub: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="rounded-3xl bg-card border border-border p-7 flex items-start gap-5">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber/10">
        <Icon className="h-5 w-5 text-foreground" />
      </span>
      <div>
        <p className="font-display text-4xl font-bold">{big}</p>
        <p className="font-display text-sm font-semibold mt-1">{label}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
      </div>
    </div>
  );
}

function VideoGallery() {
  return (
    <Section id="videos" eyebrow="Project Films" title="See our work, on camera.">
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 rounded-3xl overflow-hidden bg-card border border-border">
          <div className="aspect-video bg-foreground relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,166,35,0.35),transparent_55%)]" />
            <PlayCircle className="h-20 w-20 text-amber relative z-10" />
            <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">Featured · YouTube</span>
          </div>
          <div className="p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Featured project</p>
            <h3 className="mt-1 font-display text-2xl font-semibold">35 kW commercial install · Gulberg</h3>
            <p className="mt-2 text-sm text-muted-foreground">From site survey to first kWh — full project walkthrough with the client.</p>
            <a href="#calculator" className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-5 py-2.5 text-sm font-semibold">
              Request Similar System <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {["Residential", "Commercial", "Industrial", "Reviews"].map((cat) => (
            <button key={cat} className="rounded-2xl bg-paper border border-border px-4 py-3 text-left hover:bg-card transition flex items-center justify-between">
              <span className="font-display font-semibold text-sm">{cat}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Shorts ›</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { t: "8 kW Hybrid · DHA", s: "Residential" },
          { t: "12 kW · Bahria Town", s: "Residential" },
          { t: "50 kW Office · MM Alam", s: "Commercial" },
          { t: "220 kW Mill · Sundar", s: "Industrial" },
        ].map((v) => (
          <div key={v.t} className="rounded-2xl overflow-hidden bg-card border border-border group cursor-pointer">
            <div className="aspect-[9/12] bg-foreground relative flex items-end justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(245,166,35,0.3),transparent_60%)]" />
              <PlayCircle className="h-10 w-10 text-amber absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition" />
              <div className="relative z-10 p-3 w-full bg-gradient-to-t from-foreground to-transparent">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-amber">{v.s}</p>
                <p className="font-display text-xs font-semibold text-primary-foreground mt-0.5">{v.t}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-gradient">
              <Sun className="h-5 w-5 text-foreground" strokeWidth={2.25} />
            </span>
            <span className="font-display text-lg font-bold">Sunshine Solar Energy</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Lahore-based solar installation company delivering premium residential, commercial and industrial solar
            systems with net metering and 24/7 monitoring.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["DHA", "Bahria Town", "Gulberg", "Johar Town", "Model Town", "Sundar", "Raiwind", "Kot Lakhpat"].map((a) => (
              <span key={a} className="inline-flex items-center gap-1 rounded-full bg-card border border-border px-3 py-1 text-xs">
                <MapPin className="h-3 w-3 text-amber" /> {a}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="#services" className="hover:text-amber">Services</a></li>
            <li><a href="#projects" className="hover:text-amber">Projects</a></li>
            <li><a href="#equipment" className="hover:text-amber">Equipment</a></li>
            <li><a href="#faq" className="hover:text-amber">FAQ</a></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-amber" /> +92 300 4242895</li>
            <li className="flex items-center gap-2"><MessageCircle className="h-3.5 w-3.5 text-amber" /> WhatsApp us</li>
            <li><a href="#" className="hover:text-amber">Google Business Profile</a></li>
            <li><a href="#" className="hover:text-amber">Facebook</a></li>
            <li><a href="#" className="hover:text-amber">Instagram · YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} Sunshine Solar Energy · Lahore, Punjab
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
