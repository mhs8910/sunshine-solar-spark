import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useReducedMotion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef, useCallback } from "react";
import {
  Shield,
  Sun,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowLeft,
  FileText,
  Users,
  Lock,
  Cookie,
  Share2,
  Clock,
  Trash2,
  Scale,
  MessageSquare,
  ChevronUp,
} from "lucide-react";

/* ─────────────────────────── SEO & Route ─────────────────────────── */

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Sunshine Solar Energy Privacy Policy | Lahore Solar Solutions" },
      { name: "description", content: "Read Sunshine Solar Energy's Privacy Policy to understand how we collect, use, and protect customer information across our solar consultation, installation, and support services." },
      { property: "og:title", content: "Sunshine Solar Energy Privacy Policy | Lahore Solar Solutions" },
      { property: "og:description", content: "Read Sunshine Solar Energy's Privacy Policy to understand how we collect, use, and protect customer information across our solar consultation, installation, and support services." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "/privacy-policy" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy — Sunshine Solar Energy",
          description: "Privacy policy for Sunshine Solar Energy, Lahore-based solar installation company.",
          url: "/privacy-policy",
          lastReviewed: "2025-06-01",
          inLanguage: "en",
          isPartOf: { "@type": "WebSite", name: "Sunshine Solar Energy", url: "/" },
        }),
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

/* ─────────────────────────── Types ─────────────────────────── */

type SectionDef = {
  id: string;
  label: string;
  icon: React.ElementType;
};

const sections: SectionDef[] = [
  { id: "introduction", label: "Introduction", icon: FileText },
  { id: "information-we-collect", label: "Information We Collect", icon: Users },
  { id: "how-we-use", label: "How We Use Your Data", icon: Shield },
  { id: "data-sharing", label: "Data Sharing & Disclosure", icon: Share2 },
  { id: "cookies", label: "Cookies & Tracking", icon: Cookie },
  { id: "data-security", label: "Data Security", icon: Lock },
  { id: "data-retention", label: "Data Retention", icon: Clock },
  { id: "your-rights", label: "Your Rights", icon: Scale },
  { id: "children", label: "Children's Privacy", icon: Users },
  { id: "changes", label: "Policy Changes", icon: FileText },
  { id: "contact", label: "Contact Us", icon: MessageSquare },
];

/* ─────────────────────────── Components ─────────────────────────── */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-amber-gradient origin-left z-[60]"
      style={{ scaleX }}
    />
  );
}

function PrivacyHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 group"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-gradient shadow-amber-glow">
            <Sun className="h-5 w-5 text-foreground" strokeWidth={2.25} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight">Sunshine Solar</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Energy · Lahore
            </span>
          </span>
        </Link>

        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </nav>
    </header>
  );
}

function TableOfContents({ activeId }: { activeId: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="md:hidden fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-foreground text-primary-foreground shadow-elevated flex items-center justify-center"
        aria-label="Toggle table of contents"
      >
        {open ? <ChevronUp className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="md:hidden fixed inset-x-4 bottom-20 z-40 bg-card border border-border rounded-2xl shadow-elevated p-4 max-h-[60vh] overflow-y-auto"
          >
            <TocList activeId={activeId} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sticky */}
      <aside className="hidden md:block sticky top-24 self-start">
        <div className="rounded-2xl bg-card/80 backdrop-blur border border-border p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Table of Contents
          </p>
          <TocList activeId={activeId} />
        </div>
      </aside>
    </>
  );
}

function TocList({ activeId }: { activeId: string }) {
  return (
    <ul className="space-y-1">
      {sections.map((s) => {
        const isActive = s.id === activeId;
        const Icon = s.icon;
        return (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
                isActive
                  ? "bg-amber/10 text-foreground font-medium border border-amber/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-amber" : "text-muted-foreground/60"}`} />
              <span>{s.label}</span>
              {isActive && <ChevronRight className="h-3.5 w-3.5 ml-auto text-amber" />}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function PolicySection({
  id,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduce ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-28"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber/10 text-amber">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="prose-p:text-foreground/80 prose-p:leading-[1.8] prose-p:mb-4 prose-li:text-foreground/80 prose-li:leading-[1.8] prose-strong:text-foreground prose-strong:font-semibold">
        {children}
      </div>
    </motion.section>
  );
}

function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl bg-foreground text-primary-foreground p-8 relative overflow-hidden"
    >
      <motion.div
        aria-hidden
        className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-amber-gradient opacity-40 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-gradient text-foreground">
            <MessageSquare className="h-5 w-5" />
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">Contact Us</h2>
        </div>
        <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-2xl">
          If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please reach out to us. We are committed to responding within 48 hours.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="tel:+923084048419"
            className="group flex items-center gap-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5 hover:bg-primary-foreground/10 transition-colors"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-gradient text-foreground shrink-0">
              <Phone className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-primary-foreground/50">Phone</p>
              <p className="text-sm font-medium mt-0.5 group-hover:text-amber transition-colors">+92 308 404 8419</p>
            </div>
          </a>

          <a
            href="tel:+923004242895"
            className="group flex items-center gap-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5 hover:bg-primary-foreground/10 transition-colors"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-gradient text-foreground shrink-0">
              <Phone className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-primary-foreground/50">Phone</p>
              <p className="text-sm font-medium mt-0.5 group-hover:text-amber transition-colors">+92 300 424 2895</p>
            </div>
          </a>

          <a
            href="mailto:shafiqhassan429@gmail.com"
            className="group flex items-center gap-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5 hover:bg-primary-foreground/10 transition-colors sm:col-span-2"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-gradient text-foreground shrink-0">
              <Mail className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-primary-foreground/50">Email</p>
              <p className="text-sm font-medium mt-0.5 group-hover:text-amber transition-colors">shafiqhassan429@gmail.com</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5 sm:col-span-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-gradient text-foreground shrink-0">
              <MapPin className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-primary-foreground/50">Location</p>
              <p className="text-sm font-medium mt-0.5">Lahore, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PrivacyFooter() {
  return (
    <footer className="border-t border-border bg-paper/60 backdrop-blur">
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
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-amber transition-colors">Home</Link></li>
            <li><a href="/#services" className="hover:text-amber transition-colors">Services</a></li>
            <li><a href="/#projects" className="hover:text-amber transition-colors">Projects</a></li>
            <li><a href="/#faq" className="hover:text-amber transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Legal</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/privacy-policy" className="text-amber font-medium">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-amber transition-colors">Terms & Conditions</Link></li>
            <li><a href="/#calculator" className="hover:text-amber transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} Sunshine Solar Energy · Lahore, Punjab
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── Main Page ─────────────────────────── */

function PrivacyPolicyPage() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const reduce = useReducedMotion();

  const observerRef = useRef<IntersectionObserver | null>(null);

  const observeSections = useCallback(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one closest to top of viewport
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveId(topMost.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current?.observe(el);
    });
  }, []);

  useEffect(() => {
    observeSections();
    return () => observerRef.current?.disconnect();
  }, [observeSections]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <PrivacyHeader />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-sun-glow pointer-events-none" />
        <motion.div
          className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-12 sm:pt-20 sm:pb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber/10 border border-amber/20 px-3 py-1.5 mb-6">
              <Shield className="h-3.5 w-3.5 text-amber" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber">Legal</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Privacy Policy
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              How Sunshine Solar Energy collects, uses, and protects your information.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Last Updated ── */}
      <motion.div
        className="mx-auto max-w-7xl px-5 lg:px-8 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: reduce ? 0 : 0.5 }}
      >
        <div className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Last updated: <span className="text-foreground font-medium">June 1, 2025</span>
          </span>
        </div>
      </motion.div>

      {/* ── Main Content Grid ── */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-16">
          <TableOfContents activeId={activeId} />

          <div className="space-y-16">
            <PolicySection id="introduction" title="Introduction" icon={FileText}>
              <p>
                Sunshine Solar Energy ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our website, use our solar calculator, request a consultation, or engage with our solar installation services.
              </p>
              <p>
                By using our website and services, you consent to the practices described in this policy. If you do not agree with any part of this policy, please discontinue use of our website and services immediately.
              </p>
              <p>
                This policy applies to all customers, website visitors, and business partners in Lahore, Punjab, and across Pakistan. We adhere to applicable data protection laws and industry best practices.
              </p>
            </PolicySection>

            <PolicySection id="information-we-collect" title="Information We Collect" icon={Users}>
              <p>
                We collect different types of information to provide and improve our solar consultation, design, and installation services. The information we collect includes:
              </p>
              <p className="font-semibold text-foreground mt-6 mb-2">Personal Information You Provide Directly</p>
              <ul className="space-y-2 list-disc list-inside marker:text-amber">
                <li><strong>Contact details:</strong> Full name, phone number, email address, and WhatsApp number.</li>
                <li><strong>Property information:</strong> Address, roof type, orientation, and approximate area.</li>
                <li><strong>Energy usage data:</strong> Monthly electricity bills, peak load requirements, and consumption patterns.</li>
                <li><strong>Business information:</strong> Company name, NTN, and business address (for commercial clients).</li>
                <li><strong>Communication records:</strong> Emails, WhatsApp messages, and call notes from consultations.</li>
              </ul>
              <p className="font-semibold text-foreground mt-6 mb-2">Information Collected Automatically</p>
              <ul className="space-y-2 list-disc list-inside marker:text-amber">
                <li><strong>Device data:</strong> IP address, browser type, operating system, and screen resolution.</li>
                <li><strong>Usage data:</strong> Pages visited, time spent on site, clicks, and solar calculator inputs.</li>
                <li><strong>Cookies and tracking:</strong> See our Cookies section below for full details.</li>
              </ul>
            </PolicySection>

            <PolicySection id="how-we-use" title="How We Use Your Data" icon={Shield}>
              <p>
                We use your personal information for legitimate business purposes, always with the goal of delivering the best possible solar experience:
              </p>
              <ul className="space-y-3 list-disc list-inside marker:text-amber mt-4">
                <li>
                  <strong>Solar system design and quoting:</strong> We analyse your energy bills, roof specifications, and location to generate accurate system sizing, equipment recommendations, and financial projections.
                </li>
                <li>
                  <strong>Project execution:</strong> Your contact and property details are shared with our installation, electrical, and structural teams to schedule site surveys and carry out the installation safely.
                </li>
                <li>
                  <strong>Net metering applications:</strong> We submit your details to LESCO and other relevant authorities on your behalf as part of our end-to-end service.
                </li>
                <li>
                  <strong>Customer support:</strong> We use your information to respond to inquiries, provide after-sales support, and send system monitoring alerts.
                </li>
                <li>
                  <strong>Service improvement:</strong> Aggregated, anonymised usage data helps us refine our solar calculator, website experience, and service offerings.
                </li>
                <li>
                  <strong>Marketing (with consent):</strong> We may send you updates about solar incentives, new products, or referral programmes. You can opt out at any time.
                </li>
              </ul>
              <p className="mt-4">
                We never sell your personal information to third parties for marketing purposes.
              </p>
            </PolicySection>

            <PolicySection id="data-sharing" title="Data Sharing & Disclosure" icon={Share2}>
              <p>
                We only share your information when necessary to deliver our services or when legally required. The parties with whom we may share data include:
              </p>
              <ul className="space-y-3 list-disc list-inside marker:text-amber mt-4">
                <li>
                  <strong>Equipment suppliers:</strong> We share serial numbers and installation addresses with tier-1 manufacturers (Jinko, Longi, Huawei, Solis, Sungrow) for warranty registration and after-sales support.
                </li>
                <li>
                  <strong>Utility companies:</strong> LESCO and other distribution companies receive your application data for net metering approval and bi-directional meter installation.
                </li>
                <li>
                  <strong>Regulatory bodies:</strong> We may disclose information to government authorities if required by law, court order, or to protect our legal rights.
                </li>
                <li>
                  <strong>Service providers:</strong> We engage trusted third parties for hosting, analytics, and customer relationship management under strict confidentiality agreements.
                </li>
              </ul>
              <p className="mt-4">
                All third parties are contractually bound to use your data solely for the specified purpose and to protect it with appropriate security measures.
              </p>
            </PolicySection>

            <PolicySection id="cookies" title="Cookies & Tracking" icon={Cookie}>
              <p>
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyse traffic, and personalise content. The types of cookies we use include:
              </p>
              <ul className="space-y-3 list-disc list-inside marker:text-amber mt-4">
                <li>
                  <strong>Essential cookies:</strong> Required for core website functionality such as the solar calculator and form submissions.
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Help us understand how visitors interact with our website so we can improve performance and content. We use Google Analytics and Facebook Pixel.
                </li>
                <li>
                  <strong>Preference cookies:</strong> Remember your settings and choices (such as calculator inputs) during your session.
                </li>
              </ul>
              <p className="mt-4">
                You can manage or disable cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our solar calculator and other interactive features.
              </p>
            </PolicySection>

            <PolicySection id="data-security" title="Data Security" icon={Lock}>
              <p>
                We implement robust technical and organisational measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction:
              </p>
              <ul className="space-y-3 list-disc list-inside marker:text-amber mt-4">
                <li><strong>Encryption:</strong> All data transmitted between your browser and our servers is protected using TLS/SSL encryption.</li>
                <li><strong>Access controls:</strong> Employee access to customer data is strictly limited to those who need it for their role and is protected by strong authentication.</li>
                <li><strong>Secure storage:</strong> Customer records are stored on encrypted servers with regular security audits and penetration testing.</li>
                <li><strong>Incident response:</strong> We maintain a breach notification procedure and will inform affected users promptly in the unlikely event of a data breach.</li>
              </ul>
              <p className="mt-4">
                While we take every reasonable precaution, no internet transmission is 100% secure. We encourage you to use strong passwords and keep your devices protected.
              </p>
            </PolicySection>

            <PolicySection id="data-retention" title="Data Retention" icon={Clock}>
              <p>
                We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law:
              </p>
              <ul className="space-y-3 list-disc list-inside marker:text-amber mt-4">
                <li><strong>Active customers:</strong> For the duration of your solar system's warranty period plus any applicable statutory limitation period.</li>
                <li><strong>Prospective customers:</strong> For 24 months after your last interaction with us, unless you request deletion earlier.</li>
                <li><strong>Website analytics:</strong> Aggregated, anonymised data may be retained indefinitely for business intelligence purposes.</li>
              </ul>
              <p className="mt-4">
                When data is no longer needed, we securely delete or anonymise it in accordance with our data disposal protocols.
              </p>
            </PolicySection>

            <PolicySection id="your-rights" title="Your Rights" icon={Scale}>
              <p>
                Under applicable Pakistani and international data protection laws, you have the following rights regarding your personal information:
              </p>
              <ul className="space-y-3 list-disc list-inside marker:text-amber mt-4">
                <li><strong>Right to access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Right to correction:</strong> Request that we update, correct, or complete inaccurate information.</li>
                <li><strong>Right to deletion:</strong> Request erasure of your personal data, subject to legal retention obligations.</li>
                <li><strong>Right to restrict processing:</strong> Ask us to limit how we use your data in certain circumstances.</li>
                <li><strong>Right to object:</strong> Opt out of marketing communications and certain types of automated processing.</li>
                <li><strong>Right to data portability:</strong> Receive your data in a structured, machine-readable format.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us using the details at the bottom of this page. We will respond within 30 days.
              </p>
            </PolicySection>

            <PolicySection id="children" title="Children's Privacy" icon={Users}>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal data, please contact us immediately and we will take steps to delete such information.
              </p>
            </PolicySection>

            <PolicySection id="changes" title="Policy Changes" icon={FileText}>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or service offerings. When we make material changes, we will:
              </p>
              <ul className="space-y-2 list-disc list-inside marker:text-amber mt-4">
                <li>Update the "Last updated" date at the top of this page.</li>
                <li>Post a prominent notice on our website homepage for at least 30 days.</li>
                <li>Notify active customers via email or WhatsApp where appropriate.</li>
              </ul>
              <p className="mt-4">
                Your continued use of our website and services after any changes constitutes acceptance of the revised policy. We encourage you to review this page periodically.
              </p>
            </PolicySection>

            <ContactCard />
          </div>
        </div>
      </div>

      <PrivacyFooter />
    </div>
  );
}

/* ─────────────────────────── AnimatePresence import bridge ─────────────────────────── */

import { AnimatePresence } from "motion/react";
