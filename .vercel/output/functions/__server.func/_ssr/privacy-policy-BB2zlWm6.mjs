import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { F as FileText, U as Users, S as Shield, a as Share2, C as Cookie, L as Lock, b as Clock, c as Scale, M as MessageSquare, d as Sun, A as ArrowLeft, e as ChevronUp, P as Phone, f as Mail, g as MapPin, h as ChevronRight } from "../_libs/lucide-react.mjs";
import { u as useReducedMotion, m as motion, a as useScroll, b as useSpring, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const sections = [{
  id: "introduction",
  label: "Introduction",
  icon: FileText
}, {
  id: "information-we-collect",
  label: "Information We Collect",
  icon: Users
}, {
  id: "how-we-use",
  label: "How We Use Your Data",
  icon: Shield
}, {
  id: "data-sharing",
  label: "Data Sharing & Disclosure",
  icon: Share2
}, {
  id: "cookies",
  label: "Cookies & Tracking",
  icon: Cookie
}, {
  id: "data-security",
  label: "Data Security",
  icon: Lock
}, {
  id: "data-retention",
  label: "Data Retention",
  icon: Clock
}, {
  id: "your-rights",
  label: "Your Rights",
  icon: Scale
}, {
  id: "children",
  label: "Children's Privacy",
  icon: Users
}, {
  id: "changes",
  label: "Policy Changes",
  icon: FileText
}, {
  id: "contact",
  label: "Contact Us",
  icon: MessageSquare
}];
function ScrollProgress() {
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "fixed top-0 left-0 right-0 h-[3px] bg-amber-gradient origin-left z-[60]", style: {
    scaleX
  } });
}
function PrivacyHeader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-gradient shadow-amber-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-5 w-5 text-foreground", strokeWidth: 2.25 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col leading-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base font-bold tracking-tight", children: "Sunshine Solar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "Energy · Lahore" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      "Back to home"
    ] })
  ] }) });
}
function TableOfContents({
  activeId
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen((v) => !v), className: "md:hidden fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-foreground text-primary-foreground shadow-elevated flex items-center justify-center", "aria-label": "Toggle table of contents", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: 20
    }, className: "md:hidden fixed inset-x-4 bottom-20 z-40 bg-card border border-border rounded-2xl shadow-elevated p-4 max-h-[60vh] overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TocList, { activeId }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden md:block sticky top-24 self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card/80 backdrop-blur border border-border p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4", children: "Table of Contents" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TocList, { activeId })
    ] }) })
  ] });
}
function TocList({
  activeId
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: sections.map((s) => {
    const isActive = s.id === activeId;
    const Icon = s.icon;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `#${s.id}`, onClick: (e) => {
      e.preventDefault();
      document.getElementById(s.id)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, className: `flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-all duration-200 ${isActive ? "bg-amber/10 text-foreground font-medium border border-amber/20" : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4 w-4 shrink-0 ${isActive ? "text-amber" : "text-muted-foreground/60"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.label }),
      isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5 ml-auto text-amber" })
    ] }) }, s.id);
  }) });
}
function PolicySection({
  id,
  title,
  icon: Icon,
  children
}) {
  const ref = reactExports.useRef(null);
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.section, { ref, id, initial: {
    opacity: 0,
    y: 24
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-80px"
  }, transition: {
    duration: reduce ? 0 : 0.5,
    ease: [0.16, 1, 0.3, 1]
  }, className: "scroll-mt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber/10 text-amber", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5", strokeWidth: 2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-semibold tracking-tight", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose-p:text-foreground/80 prose-p:leading-[1.8] prose-p:mb-4 prose-li:text-foreground/80 prose-li:leading-[1.8] prose-strong:text-foreground prose-strong:font-semibold", children })
  ] });
}
function ContactCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 24
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true
  }, transition: {
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1]
  }, className: "rounded-3xl bg-foreground text-primary-foreground p-8 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, className: "absolute -top-16 -right-10 h-48 w-48 rounded-full bg-amber-gradient opacity-40 blur-3xl", animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3]
    }, transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-gradient text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-semibold tracking-tight", children: "Contact Us" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 leading-relaxed mb-6 max-w-2xl", children: "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please reach out to us. We are committed to responding within 48 hours." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+923084048419", className: "group flex items-center gap-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5 hover:bg-primary-foreground/10 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-gradient text-foreground shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-[0.15em] text-primary-foreground/50", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium mt-0.5 group-hover:text-amber transition-colors", children: "+92 308 404 8419" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+923004242895", className: "group flex items-center gap-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5 hover:bg-primary-foreground/10 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-gradient text-foreground shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-[0.15em] text-primary-foreground/50", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium mt-0.5 group-hover:text-amber transition-colors", children: "+92 300 424 2895" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:shafiqhassan429@gmail.com", className: "group flex items-center gap-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5 hover:bg-primary-foreground/10 transition-colors sm:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-gradient text-foreground shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-[0.15em] text-primary-foreground/50", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium mt-0.5 group-hover:text-amber transition-colors", children: "shafiqhassan429@gmail.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5 sm:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-gradient text-foreground shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-[0.15em] text-primary-foreground/50", children: "Location" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium mt-0.5", children: "Lahore, Pakistan" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function PrivacyFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-paper/60 backdrop-blur", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8 py-14 grid md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-gradient shadow-amber-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-5 w-5 text-foreground", strokeWidth: 2.25 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold", children: "Sunshine Solar Energy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-md", children: "Lahore-based solar installation company delivering premium residential, commercial and industrial solar systems with net metering and 24/7 monitoring." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-amber transition-colors", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#services", className: "hover:text-amber transition-colors", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#projects", className: "hover:text-amber transition-colors", children: "Projects" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#faq", className: "hover:text-amber transition-colors", children: "FAQ" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Legal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "text-amber font-medium", children: "Privacy Policy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-amber transition-colors", children: "Terms & Conditions" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#calculator", className: "hover:text-amber transition-colors", children: "Contact Us" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Sunshine Solar Energy · Lahore, Punjab"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "hover:text-foreground transition-colors", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Terms" })
      ] })
    ] }) })
  ] });
}
function PrivacyPolicyPage() {
  const [activeId, setActiveId] = reactExports.useState(sections[0].id);
  const reduce = useReducedMotion();
  const observerRef = reactExports.useRef(null);
  const observeSections = reactExports.useCallback(() => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length > 0) {
        const topMost = visible.reduce((a, b) => a.boundingClientRect.top < b.boundingClientRect.top ? a : b);
        setActiveId(topMost.target.id);
      }
    }, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    });
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current?.observe(el);
    });
  }, []);
  reactExports.useEffect(() => {
    observeSections();
    return () => observerRef.current?.disconnect();
  }, [observeSections]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrivacyHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-sun-glow pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-12 sm:pt-20 sm:pb-16 relative", initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: reduce ? 0 : 0.6,
          ease: [0.16, 1, 0.3, 1]
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-amber/10 border border-amber/20 px-3 py-1.5 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-3.5 w-3.5 text-amber" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-amber", children: "Legal" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance", children: "Privacy Policy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl", children: "How Sunshine Solar Energy collects, uses, and protects your information." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "mx-auto max-w-7xl px-5 lg:px-8 pb-10", initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.2,
        duration: reduce ? 0 : 0.5
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
          "Last updated: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "June 1, 2025" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-5 lg:px-8 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableOfContents, { activeId }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(PolicySection, { id: "introduction", title: "Introduction", icon: FileText, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Sunshine Solar Energy ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our website, use our solar calculator, request a consultation, or engage with our solar installation services.' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "By using our website and services, you consent to the practices described in this policy. If you do not agree with any part of this policy, please discontinue use of our website and services immediately." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This policy applies to all customers, website visitors, and business partners in Lahore, Punjab, and across Pakistan. We adhere to applicable data protection laws and industry best practices." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(PolicySection, { id: "information-we-collect", title: "Information We Collect", icon: Users, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We collect different types of information to provide and improve our solar consultation, design, and installation services. The information we collect includes:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mt-6 mb-2", children: "Personal Information You Provide Directly" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 list-disc list-inside marker:text-amber", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Contact details:" }),
                " Full name, phone number, email address, and WhatsApp number."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Property information:" }),
                " Address, roof type, orientation, and approximate area."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Energy usage data:" }),
                " Monthly electricity bills, peak load requirements, and consumption patterns."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Business information:" }),
                " Company name, NTN, and business address (for commercial clients)."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Communication records:" }),
                " Emails, WhatsApp messages, and call notes from consultations."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mt-6 mb-2", children: "Information Collected Automatically" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 list-disc list-inside marker:text-amber", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Device data:" }),
                " IP address, browser type, operating system, and screen resolution."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Usage data:" }),
                " Pages visited, time spent on site, clicks, and solar calculator inputs."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cookies and tracking:" }),
                " See our Cookies section below for full details."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(PolicySection, { id: "how-we-use", title: "How We Use Your Data", icon: Shield, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We use your personal information for legitimate business purposes, always with the goal of delivering the best possible solar experience:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 list-disc list-inside marker:text-amber mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Solar system design and quoting:" }),
                " We analyse your energy bills, roof specifications, and location to generate accurate system sizing, equipment recommendations, and financial projections."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Project execution:" }),
                " Your contact and property details are shared with our installation, electrical, and structural teams to schedule site surveys and carry out the installation safely."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Net metering applications:" }),
                " We submit your details to LESCO and other relevant authorities on your behalf as part of our end-to-end service."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Customer support:" }),
                " We use your information to respond to inquiries, provide after-sales support, and send system monitoring alerts."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Service improvement:" }),
                " Aggregated, anonymised usage data helps us refine our solar calculator, website experience, and service offerings."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Marketing (with consent):" }),
                " We may send you updates about solar incentives, new products, or referral programmes. You can opt out at any time."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "We never sell your personal information to third parties for marketing purposes." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(PolicySection, { id: "data-sharing", title: "Data Sharing & Disclosure", icon: Share2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We only share your information when necessary to deliver our services or when legally required. The parties with whom we may share data include:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 list-disc list-inside marker:text-amber mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Equipment suppliers:" }),
                " We share serial numbers and installation addresses with tier-1 manufacturers (Jinko, Longi, Huawei, Solis, Sungrow) for warranty registration and after-sales support."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Utility companies:" }),
                " LESCO and other distribution companies receive your application data for net metering approval and bi-directional meter installation."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Regulatory bodies:" }),
                " We may disclose information to government authorities if required by law, court order, or to protect our legal rights."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Service providers:" }),
                " We engage trusted third parties for hosting, analytics, and customer relationship management under strict confidentiality agreements."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "All third parties are contractually bound to use your data solely for the specified purpose and to protect it with appropriate security measures." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(PolicySection, { id: "cookies", title: "Cookies & Tracking", icon: Cookie, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyse traffic, and personalise content. The types of cookies we use include:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 list-disc list-inside marker:text-amber mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Essential cookies:" }),
                " Required for core website functionality such as the solar calculator and form submissions."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Analytics cookies:" }),
                " Help us understand how visitors interact with our website so we can improve performance and content. We use Google Analytics and Facebook Pixel."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Preference cookies:" }),
                " Remember your settings and choices (such as calculator inputs) during your session."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "You can manage or disable cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our solar calculator and other interactive features." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(PolicySection, { id: "data-security", title: "Data Security", icon: Lock, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We implement robust technical and organisational measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 list-disc list-inside marker:text-amber mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Encryption:" }),
                " All data transmitted between your browser and our servers is protected using TLS/SSL encryption."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Access controls:" }),
                " Employee access to customer data is strictly limited to those who need it for their role and is protected by strong authentication."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Secure storage:" }),
                " Customer records are stored on encrypted servers with regular security audits and penetration testing."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Incident response:" }),
                " We maintain a breach notification procedure and will inform affected users promptly in the unlikely event of a data breach."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "While we take every reasonable precaution, no internet transmission is 100% secure. We encourage you to use strong passwords and keep your devices protected." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(PolicySection, { id: "data-retention", title: "Data Retention", icon: Clock, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 list-disc list-inside marker:text-amber mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Active customers:" }),
                " For the duration of your solar system's warranty period plus any applicable statutory limitation period."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Prospective customers:" }),
                " For 24 months after your last interaction with us, unless you request deletion earlier."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Website analytics:" }),
                " Aggregated, anonymised data may be retained indefinitely for business intelligence purposes."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "When data is no longer needed, we securely delete or anonymise it in accordance with our data disposal protocols." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(PolicySection, { id: "your-rights", title: "Your Rights", icon: Scale, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Under applicable Pakistani and international data protection laws, you have the following rights regarding your personal information:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 list-disc list-inside marker:text-amber mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Right to access:" }),
                " Request a copy of the personal data we hold about you."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Right to correction:" }),
                " Request that we update, correct, or complete inaccurate information."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Right to deletion:" }),
                " Request erasure of your personal data, subject to legal retention obligations."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Right to restrict processing:" }),
                " Ask us to limit how we use your data in certain circumstances."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Right to object:" }),
                " Opt out of marketing communications and certain types of automated processing."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Right to data portability:" }),
                " Receive your data in a structured, machine-readable format."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "To exercise any of these rights, please contact us using the details at the bottom of this page. We will respond within 30 days." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PolicySection, { id: "children", title: "Children's Privacy", icon: Users, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal data, please contact us immediately and we will take steps to delete such information." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(PolicySection, { id: "changes", title: "Policy Changes", icon: FileText, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or service offerings. When we make material changes, we will:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 list-disc list-inside marker:text-amber mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Update the "Last updated" date at the top of this page.' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Post a prominent notice on our website homepage for at least 30 days." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Notify active customers via email or WhatsApp where appropriate." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "Your continued use of our website and services after any changes constitutes acceptance of the revised policy. We encourage you to review this page periodically." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, {})
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrivacyFooter, {})
  ] });
}
export {
  PrivacyPolicyPage as component
};
