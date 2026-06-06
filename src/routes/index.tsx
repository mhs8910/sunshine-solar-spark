import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, PlayCircle, Sun, Zap, ShieldCheck, Cpu, Wrench, LineChart,
  Home, Building2, Factory, MapPin, CheckCircle2, AlertTriangle, Battery,
  Gauge, PanelTop, Plug, Phone, MessageCircle, Star, BadgeCheck, Award,
  Sparkles, ArrowUpRight, Receipt, ChevronRight,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import panelImg from "@/assets/panel.jpg";
import inverterImg from "@/assets/inverter.jpg";
import batteryImg from "@/assets/battery.jpg";

import { Navbar } from "@/components/site/Navbar";
import { StickyMobileCTA } from "@/components/site/StickyMobileCTA";
import { SolarCalculator } from "@/components/site/SolarCalculator";
import { FAQ } from "@/components/site/FAQ";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Motion";
import { TiltCard } from "@/components/site/TiltCard";
import { MagneticButton } from "@/components/site/MagneticButton";
import { CountUp } from "@/components/site/CountUp";
import { SolarEcosystem } from "@/components/site/SolarEcosystem";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { CursorGlow } from "@/components/site/CursorGlow";
import { LoadingScreen } from "@/components/site/LoadingScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solar Company in Lahore | Net Metering & Tier-1 Panels | Sunshine Solar Energy" },
      { name: "description", content: "Lahore's top-rated solar company. Cut bills 70–80% with tier-1 panels, LESCO net metering & 25-yr warranties. 600+ installs · 4.9★. Free estimate in 24 hours." },
      { name: "keywords", content: "solar company Lahore, solar installation Lahore, net metering Lahore, solar panel price Pakistan, 5kW solar system price, 10kW solar system, residential solar Lahore, commercial solar Pakistan, industrial solar Punjab" },
      { name: "geo.region", content: "PK-PB" },
      { name: "geo.placename", content: "Lahore" },
      { name: "geo.position", content: "31.5204;74.3587" },
      { name: "ICBM", content: "31.5204, 74.3587" },
      { property: "og:title", content: "Solar Company in Lahore | Sunshine Solar Energy" },
      { property: "og:description", content: "Premium residential, commercial & industrial solar in Lahore. 600+ installs · 4.9★ · Free estimate in 24 hours." },
      { property: "og:url", content: "https://sunshine-solar-spark.lovable.app/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Solar Company in Lahore | Sunshine Solar Energy" },
      { name: "twitter:description", content: "Cut bills 70–80%. Tier-1 panels, LESCO net metering & 25-yr warranties. Free estimate in 24 hours." },
    ],
    links: [{ rel: "canonical", href: "https://sunshine-solar-spark.lovable.app/" }],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://sunshine-solar-spark.lovable.app/#webpage",
          url: "https://sunshine-solar-spark.lovable.app/",
          name: "Sunshine Solar Energy — Solar Installation in Lahore",
          description: "Cut your electricity bill by 70–80% with Lahore's premium solar installer.",
          isPartOf: { "@id": "https://sunshine-solar-spark.lovable.app/#website" },
          about: { "@id": "https://sunshine-solar-spark.lovable.app/#localbusiness" },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: "https://sunshine-solar-spark.lovable.app/favicon.ico",
          },
          inLanguage: "en-PK",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How much can I save with solar?", acceptedAnswer: { "@type": "Answer", text: "Most Sunshine Solar customers cut their monthly electricity bills by 70–80%. Exact savings depend on system size, your usage pattern and net metering tariff." } },
            { "@type": "Question", name: "What system size do I need?", acceptedAnswer: { "@type": "Answer", text: "We use AI-powered sizing based on your last 6–12 months of bills, roof area and load profile. Typical homes need 5–10 kW, commercial 15–50 kW, industrial 50 kW+." } },
            { "@type": "Question", name: "How long does installation take?", acceptedAnswer: { "@type": "Answer", text: "Residential installations are usually completed in 3–5 days. Commercial and industrial timelines range from 1 to 4 weeks depending on system size and structural work." } },
            { "@type": "Question", name: "Do you handle net metering?", acceptedAnswer: { "@type": "Answer", text: "Yes — we handle the full LESCO / IESCO net metering application, documentation and bidirectional meter installation on your behalf." } },
            { "@type": "Question", name: "What equipment do you use?", acceptedAnswer: { "@type": "Answer", text: "Only Tier-1 panels (Jinko, Longi, Canadian Solar) and inverters (Huawei, Solis, Growatt, Sungrow). Every unit ships with serial-number authenticity verification." } },
            { "@type": "Question", name: "Is solar worth it in Lahore?", acceptedAnswer: { "@type": "Answer", text: "Lahore averages 5+ peak sun hours daily. With current grid tariffs, most systems pay for themselves in 2.5–4 years and continue producing for 25+ years." } },
            { "@type": "Question", name: "Do you provide maintenance?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every installation includes 24/7 remote monitoring, annual cleaning visits and a dedicated after-sales WhatsApp line." } },
            { "@type": "Question", name: "Can I add batteries later?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. All our hybrid inverters are battery-ready. You can start with grid-tied and add lithium storage when load-shedding or pricing changes." } },
            { "@type": "Question", name: "How do YouTube project videos help verify work?", acceptedAnswer: { "@type": "Answer", text: "Every featured project on our channel shows real installations with client testimonials, system specs and on-site footage — so you can verify our work before signing up." } },
          ],
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
        <Reveal>
          <div className="max-w-3xl mb-12">
            {eyebrow && <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-3">{eyebrow}</p>}
            {title && <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">{title}</h2>}
            {sub && <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">{sub}</p>}
          </div>
        </Reveal>
      )}
      {children}
    </section>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen relative">
      <LoadingScreen />
      <AmbientBackground />
      <CursorGlow />
      <Navbar />

      <main>
      <Hero />


      {/* CALCULATOR */}
      <Section
        id="calculator"
        eyebrow="Instant Estimate"
        title="See your solar savings in 30 seconds."
        sub="Slide your bill, pick your property type, and get a personalised system size, monthly savings and payback period — all before you pick up the phone."
      >
        <Reveal delay={0.05}>
          <SolarCalculator />
        </Reveal>
      </Section>

      {/* WHY US */}
      <Section
        id="why"
        eyebrow="Why Sunshine Solar"
        title="Engineered for transparency. Built for the next 25 years."
      >
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Cpu, t: "AI-powered system sizing", d: "We analyse 12 months of your bills, roof orientation and load curve to recommend a perfectly sized system — no oversell, no undersize." },
            { icon: ShieldCheck, t: "Zero-hassle net metering", d: "We handle the full LESCO net metering application, documentation and bi-directional meter installation end to end." },
            { icon: LineChart, t: "24/7 monitoring support", d: "Every system ships with a live monitoring app and proactive alerts. We see issues before you do." },
            { icon: BadgeCheck, t: "Tier-1 panels & inverters", d: "Only Jinko, Longi, Huawei, Solis, Sungrow — verified by serial number, backed by global warranties." },
            { icon: Receipt, t: "Transparent quotation", d: "Itemised BOQs. No hidden fees. No surprise add-ons after installation day." },
            { icon: Factory, t: "Residential to industrial", d: "From a 5 kW home setup to 500 kW industrial arrays — one team, one accountability chain." },
          ].map(({ icon: Icon, t, d }) => (
            <StaggerItem key={t}>
              <TiltCard className="h-full rounded-2xl">
                <div className="group h-full rounded-2xl bg-card/80 backdrop-blur border border-border p-6 hover:border-amber/40 hover:shadow-elevated transition-all duration-500">
                  <motion.span
                    whileHover={{ scale: 1.08, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 240, damping: 16 }}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber/10 text-foreground group-hover:bg-amber-gradient group-hover:shadow-amber-glow transition"
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </motion.span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* PROBLEM / SOLUTION */}
      <Section
        id="problem"
        eyebrow="The Problem"
        title="Electricity in Pakistan keeps getting more expensive — and more unreliable."
      >
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-3xl bg-paper/80 backdrop-blur border border-border p-8 h-full">
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
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-3xl bg-foreground text-primary-foreground p-8 relative overflow-hidden h-full">
              <motion.div
                aria-hidden
                className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-amber-gradient opacity-50 blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
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
          </Reveal>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" eyebrow="Services" title="Solar systems built for every scale.">
        <Stagger className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Home, label: "Residential Solar", best: "Homes, villas, apartments", range: "3 kW – 20 kW systems", benefits: ["70–80% bill reduction", "Battery-ready hybrid inverters", "Net metering included"] },
            { icon: Building2, label: "Commercial Solar", best: "Offices, shops, clinics, schools", range: "15 kW – 100 kW systems", benefits: ["Daytime load offset", "Faster 3–4 yr payback", "ROI-focused engineering"] },
            { icon: Factory, label: "Industrial Solar", best: "Factories, mills, warehouses", range: "100 kW – 1 MW+ systems", benefits: ["Dedicated EPC team", "Structural & HT design", "Performance guarantees"] },
          ].map(({ icon: Icon, label, best, range, benefits }) => (
            <StaggerItem key={label}>
              <TiltCard intensity={6} className="h-full rounded-3xl">
                <div className="group h-full rounded-3xl bg-card/85 backdrop-blur border border-border p-7 flex flex-col hover:border-foreground/20 hover:shadow-elevated transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <motion.span
                      whileHover={{ rotate: -6, scale: 1.06 }}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-gradient shadow-amber-glow"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.span>
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
                  <Link to="/services" className="mt-6 group/btn relative overflow-hidden inline-flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm font-medium hover:bg-foreground hover:text-primary-foreground transition">
                    <span className="relative z-10">Explore {label}</span>
                    <ArrowUpRight className="h-4 w-4 relative z-10 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <VideoGallery />

      {/* CASE STUDIES */}
      <Section id="cases" eyebrow="Case Studies" title="Real Lahore projects, verified savings.">
        <Stagger className="grid lg:grid-cols-3 gap-5">
          {[
            { client: "Residential · DHA Phase 6", size: "10 kW Hybrid", before: 78000, after: 14500, time: "4 days", eqp: "Jinko 580W · Huawei 10kTL", payback: "3.1 yrs" },
            { client: "Commercial · Gulberg", size: "35 kW On-Grid", before: 245000, after: 52000, time: "12 days", eqp: "Longi Hi-MO 6 · Sungrow 33kW", payback: "2.8 yrs" },
            { client: "Industrial · Sundar Estate", size: "220 kW On-Grid", before: 1850000, after: 410000, time: "26 days", eqp: "Canadian Solar · Huawei SUN2000-100", payback: "2.4 yrs" },
          ].map((c) => (
            <StaggerItem key={c.client}>
              <TiltCard intensity={5} className="h-full rounded-3xl">
                <article className="group rounded-3xl bg-card/85 backdrop-blur border border-border overflow-hidden hover:shadow-elevated transition-all duration-500 h-full">
                  <div className="aspect-[16/9] relative bg-foreground/90 flex items-center justify-center overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,166,35,0.45),transparent_55%)]"
                      animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div whileHover={{ scale: 1.18 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                      <PlayCircle className="h-14 w-14 text-amber relative z-10" />
                    </motion.div>
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
                    <Link to="/case-studies" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-amber transition group/link">
                      See full project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="process" eyebrow="How it works" title="From first call to first kWh in 5 steps.">
        <ProcessTimeline />
      </Section>

      {/* TRUST & PROOF */}
      <Section id="trust" eyebrow="Trust & Proof" title="Loved by homeowners. Trusted by businesses.">
        <Stagger className="grid lg:grid-cols-3 gap-5 mb-10">
          <StaggerItem>
            <AnimatedStat icon={Star} label="Google rating" sub="220+ verified reviews">
              <CountUp to={4.9} decimals={1} />
            </AnimatedStat>
          </StaggerItem>
          <StaggerItem>
            <AnimatedStat icon={Award} label="Projects installed" sub="Across Lahore & Punjab">
              <CountUp to={600} suffix="+" />
            </AnimatedStat>
          </StaggerItem>
          <StaggerItem>
            <AnimatedStat icon={MapPin} label="On the ground" sub="Lahore-based EPC team">
              <CountUp to={8} suffix=" yrs" />
            </AnimatedStat>
          </StaggerItem>
        </Stagger>

        <Stagger className="grid md:grid-cols-3 gap-5">
          {[
            { n: "Ahmed R.", r: "DHA, Lahore", q: "Bill dropped from 82k to 13k. Install was clean, paperwork done in 3 weeks. Couldn't be happier." },
            { n: "Hira K.", r: "Gulberg", q: "What sold me was the transparent BOQ. Every panel, every clamp, every wire — itemised." },
            { n: "Imran T.", r: "Sundar Industrial Estate", q: "220 kW system running flawlessly for 14 months. Their monitoring caught one inverter fault before we even noticed." },
          ].map((t) => (
            <StaggerItem key={t.n}>
              <TiltCard intensity={5} className="h-full rounded-3xl">
                <div className="rounded-3xl bg-card/85 backdrop-blur border border-border p-6 h-full">
                  <div className="flex items-center gap-1 text-amber">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.q}"</p>
                  <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                    <span className="font-display font-semibold text-sm">{t.n}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{t.r}</span>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-3">
            {["25-yr panel warranty", "10-yr inverter warranty", "Tier-1 verified", "No hidden pricing"].map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 rounded-full bg-paper border border-border px-4 py-2 text-xs font-medium">
                <BadgeCheck className="h-3.5 w-3.5 text-amber" /> {b}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* EQUIPMENT */}
      <Section id="equipment" eyebrow="Equipment & Technology" title="Only the gear we'd put on our own roofs.">
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { img: panelImg, icon: PanelTop, t: "Solar Panels", alt: "Tier-1 monocrystalline solar panel", d: "Tier-1 mono-PERC & N-type modules from Jinko, Longi & Canadian Solar.", w: "25-year linear power warranty" },
            { img: inverterImg, icon: Plug, t: "Inverters", alt: "Hybrid solar inverter system", d: "Hybrid & on-grid inverters from Huawei, Solis, Sungrow, Growatt.", w: "10-year inverter warranty" },
            { img: batteryImg, icon: Battery, t: "Lithium Batteries", alt: "LiFePO4 lithium solar battery", d: "LiFePO4 storage from Dyness, Pylontech and Huawei LUNA — battery-ready by default.", w: "6,000+ cycle life" },

          ].map(({ img, icon: Icon, t, alt, d, w }) => (
            <StaggerItem key={t}>
              <TiltCard intensity={6} className="h-full rounded-3xl">
                <div className="rounded-3xl bg-card/85 backdrop-blur border border-border overflow-hidden hover:shadow-elevated transition h-full group">
                  <div className="aspect-[4/3] bg-paper overflow-hidden">
                    <motion.img
                      src={img}
                      alt={alt}

                      loading="lazy"
                      width={896}
                      height={672}
                      className="w-full h-full object-contain p-6"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    />
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
              </TiltCard>
            </StaggerItem>
          ))}
          {[
            { icon: Gauge, t: "Net Metering", d: "End-to-end LESCO/IESCO net metering application, approvals and bi-directional meter install." },
            { icon: LineChart, t: "Monitoring Dashboard", d: "Live production data, alerts and monthly performance reports on your phone." },
            { icon: Wrench, t: "After-sales Care", d: "Annual cleaning, on-call diagnostics and dedicated WhatsApp support line." },
          ].map(({ icon: Icon, t, d }) => (
            <StaggerItem key={t}>
              <TiltCard intensity={5} className="h-full rounded-3xl">
                <div className="rounded-3xl bg-paper/80 backdrop-blur border border-border p-6 h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-card border border-border">
                    <Icon className="h-5 w-5 text-foreground" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* LOCAL SEO */}
      <Section id="lahore" eyebrow="Serving Lahore & Punjab" title="The trusted solar company in Lahore.">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Reveal>
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
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-3">
            {[
              { k: "Solar company in Lahore", to: "/about" as const },
              { k: "Solar installation in Lahore", to: "/services" as const },
              { k: "Net metering in Lahore", to: "/net-metering" as const },
              { k: "Solar panel price in Lahore", to: "/pricing" as const },
              { k: "5 kW solar system price", to: "/pricing" as const },
              { k: "10 kW solar system price", to: "/pricing" as const },
              { k: "Commercial solar Punjab", to: "/services" as const },
              { k: "Industrial solar Lahore", to: "/services" as const },
            ].map(({ k, to }) => (
              <StaggerItem key={k}>
                <Link to={to} className="block">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 280, damping: 18 }}
                    className="rounded-xl bg-paper/80 backdrop-blur border border-border p-4 hover:border-amber/40 hover:shadow-soft"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Service</p>
                    <p className="font-display font-semibold text-sm mt-1">{k}</p>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="FAQ" title="Everything Lahore homeowners ask before going solar.">
        <Reveal>
          <FAQ />
        </Reveal>
      </Section>

      {/* FINAL CTA */}
      <section className="px-5 lg:px-8 pb-24">
        <Reveal>
          <div className="mx-auto max-w-7xl rounded-[32px] bg-foreground text-primary-foreground relative overflow-hidden p-10 sm:p-16">
            <motion.div
              aria-hidden
              className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-amber-gradient opacity-30 blur-3xl"
              animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-sky-gradient opacity-20 blur-3xl"
              animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
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
                <MagneticButton
                  href="#calculator"
                  className="rounded-full bg-amber-gradient text-foreground px-6 py-3.5 text-sm font-semibold shadow-amber-glow"
                >
                  Get Free Solar Estimate <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton
                  href="https://wa.me/923004242895"
                  className="rounded-full bg-card/10 border border-card/20 text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:bg-card/20 transition"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Sunshine Solar
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      </main>

      <Footer />
      <StickyMobileCTA />

    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.3]);

  return (
    <section ref={ref} className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 solar-grid pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div style={{ y: yText, opacity }} className="lg:col-span-7">
          <Reveal y={16}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-3 py-1.5 shadow-soft">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-amber animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/70">Lahore · Punjab · Pakistan</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] font-semibold tracking-tight text-balance">
              Lahore's trusted solar company —{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-br from-foreground via-foreground to-[#5B6573] bg-clip-text text-transparent">cut your bill 70–80%</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ originX: 0 }}
                  className="absolute inset-x-0 bottom-1 h-3 bg-amber/40 -z-0"
                  aria-hidden
                />
              </span>{" "}
              with tier-1 solar.
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
              Premium residential, commercial & industrial solar installation in Lahore with end-to-end LESCO
              net metering, AI-powered sizing and 25-year warranties. 600+ systems installed across Punjab.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <span className="flex text-amber">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-3.5 w-3.5 fill-current" />)}</span>
                <span className="font-semibold">4.9</span>
                <span className="text-muted-foreground">· 220+ Google reviews</span>
              </span>
              <span className="text-muted-foreground hidden sm:inline">·</span>
              <span className="inline-flex items-center gap-1.5 text-foreground/80"><BadgeCheck className="h-4 w-4 text-amber" /> 600+ installs · 8 yrs in Lahore</span>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/calculator"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-elevated hover:opacity-95 transition"
              >
                Get Free Solar Estimate
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:+923004242895"
                className="inline-flex items-center gap-2 rounded-full bg-amber-gradient text-foreground px-6 py-3.5 text-sm font-semibold shadow-amber-glow hover:opacity-95 transition"
              >
                <Phone className="h-4 w-4" /> Call +92-300-4242895
              </a>
              <a
                href="https://wa.me/923004242895"
                className="inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur border border-border px-6 py-3.5 text-sm font-semibold hover:bg-muted transition"
              >
                <MessageCircle className="h-4 w-4 text-amber" /> WhatsApp
              </a>
            </div>
          </Reveal>

          <Stagger className="mt-10 flex flex-wrap gap-x-6 gap-y-3" stagger={0.05}>
            {["LESCO Net Metering", "Tier-1 Jinko · Huawei", "25-yr Panel Warranty", "24/7 Monitoring", "Free Site Survey"].map((t) => (
              <StaggerItem key={t}>
                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-foreground/75">
                  <CheckCircle2 className="h-4 w-4 text-amber" /> {t}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </motion.div>

        <motion.div style={{ y: yVisual }} className="lg:col-span-5 relative">
          <Reveal delay={0.1} y={40}>
            <SolarEcosystem />
          </Reveal>

          {/* Floating savings card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-8 -left-6 sm:-left-10 w-[260px] rounded-2xl bg-card/95 backdrop-blur-xl border border-border shadow-elevated p-4"
          >
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Estimated Monthly Savings</p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="font-display text-3xl font-bold">
                  Rs <CountUp to={34500} format={(n) => Math.round(n).toLocaleString()} />
                </span>
                <span className="text-xs text-muted-foreground">/ mo</span>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "78%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-amber-gradient"
                />
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                <span>vs current bill</span><span className="text-amber">−78%</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -top-6 -right-4 hidden sm:block rounded-2xl bg-foreground text-primary-foreground p-3 shadow-elevated"
          >
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Producing now · 6.2 kW</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const steps = [
    { n: "01", t: "Free consultation", d: "WhatsApp or call. We listen to your goals." },
    { n: "02", t: "Bill & load analysis", d: "Send 6 months of bills. We model your usage." },
    { n: "03", t: "AI-powered sizing", d: "Right-sized system + itemised BOQ." },
    { n: "04", t: "Quote & approval", d: "Transparent pricing & milestone plan." },
    { n: "05", t: "Install + net meter + monitor", d: "Live in days. Monitored for life." },
  ];

  return (
    <div ref={ref} className="relative">
      {/* progress line (desktop) */}
      <div className="hidden md:block absolute left-0 right-0 top-[34px] h-px bg-border" />
      <motion.div
        style={{ scaleX: lineScale, originX: 0 }}
        className="hidden md:block absolute left-0 right-0 top-[34px] h-px bg-amber-gradient"
      />
      <Stagger className="grid md:grid-cols-5 gap-4 relative">
        {steps.map((s, i) => (
          <StaggerItem key={s.n}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="relative rounded-2xl bg-card/85 backdrop-blur border border-border p-5 h-full"
            >
              <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-gradient text-foreground font-mono text-[11px] tracking-[0.05em] shadow-amber-glow">
                {s.n}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
              {i < steps.length - 1 && (
                <ChevronRight className="hidden md:block absolute -right-3 top-[27px] h-5 w-5 text-border" />
              )}
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
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

function AnimatedStat({
  icon: Icon,
  label,
  sub,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <TiltCard intensity={4} className="h-full rounded-3xl">
      <div className="rounded-3xl bg-card/85 backdrop-blur border border-border p-7 flex items-start gap-5 h-full">
        <motion.span
          whileHover={{ rotate: 12, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber/10"
        >
          <Icon className="h-5 w-5 text-foreground" />
        </motion.span>
        <div>
          <p className="font-display text-4xl font-bold tabular-nums">{children}</p>
          <p className="font-display text-sm font-semibold mt-1">{label}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
        </div>
      </div>
    </TiltCard>
  );
}

function VideoGallery() {
  return (
    <Section id="videos" eyebrow="Project Films" title="See our work, on camera.">
      <div className="grid lg:grid-cols-3 gap-5">
        <Reveal>
          <TiltCard intensity={4} className="lg:col-span-2 rounded-3xl">
            <div className="rounded-3xl overflow-hidden bg-card/85 backdrop-blur border border-border group">
              <div className="aspect-video bg-foreground relative flex items-center justify-center overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,166,35,0.4),transparent_55%)]"
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className="relative z-10"
                >
                  <PlayCircle className="h-20 w-20 text-amber" />
                </motion.div>
                <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">Featured · YouTube</span>
              </div>
              <div className="p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Featured project</p>
                <h3 className="mt-1 font-display text-2xl font-semibold">35 kW commercial install · Gulberg</h3>
                <p className="mt-2 text-sm text-muted-foreground">From site survey to first kWh — full project walkthrough with the client.</p>
                <MagneticButton
                  href="#calculator"
                  className="mt-5 rounded-full bg-foreground text-primary-foreground px-5 py-2.5 text-sm font-semibold"
                >
                  Request Similar System <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </TiltCard>
        </Reveal>

        <Stagger className="flex flex-col gap-3">
          {["Residential", "Commercial", "Industrial", "Reviews"].map((cat) => (
            <StaggerItem key={cat}>
              <motion.button
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
                className="w-full rounded-2xl bg-paper/80 backdrop-blur border border-border px-4 py-3 text-left hover:bg-card transition flex items-center justify-between"
              >
                <span className="font-display font-semibold text-sm">{cat}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Shorts ›</span>
              </motion.button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <Stagger className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { t: "8 kW Hybrid · DHA", s: "Residential" },
          { t: "12 kW · Bahria Town", s: "Residential" },
          { t: "50 kW Office · MM Alam", s: "Commercial" },
          { t: "220 kW Mill · Sundar", s: "Industrial" },
        ].map((v) => (
          <StaggerItem key={v.t}>
            <TiltCard intensity={8} className="rounded-2xl">
              <div className="rounded-2xl overflow-hidden bg-card/85 backdrop-blur border border-border group cursor-pointer">
                <div className="aspect-[9/12] bg-foreground relative flex items-end justify-center overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(245,166,35,0.35),transparent_60%)]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 220, damping: 14 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <PlayCircle className="h-10 w-10 text-amber" />
                  </motion.div>
                  <div className="relative z-10 p-3 w-full bg-gradient-to-t from-foreground to-transparent">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-amber">{v.s}</p>
                    <p className="font-display text-xs font-semibold text-primary-foreground mt-0.5">{v.t}</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-paper/60 backdrop-blur relative z-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-gradient shadow-amber-glow">
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
            <li><a href="#services" className="hover:text-amber transition-colors">Services</a></li>
            <li><a href="#projects" className="hover:text-amber transition-colors">Projects</a></li>
            <li><a href="#equipment" className="hover:text-amber transition-colors">Equipment</a></li>
            <li><Link to="/blog" className="hover:text-amber transition-colors">Blog</Link></li>
            <li><a href="#faq" className="hover:text-amber transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Legal</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-amber transition-colors">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-amber transition-colors">Terms & Conditions</Link></li>
            <li><a href="#calculator" className="hover:text-amber transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} Sunshine Solar Energy · Lahore, Punjab
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
