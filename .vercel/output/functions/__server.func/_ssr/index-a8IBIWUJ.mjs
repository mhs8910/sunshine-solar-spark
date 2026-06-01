import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { i as Cpu, j as ShieldCheck, k as ChartLine, B as BadgeCheck, R as Receipt, l as Factory, T as TriangleAlert, m as Sparkles, n as CircleCheck, H as House, o as Building2, p as ArrowUpRight, q as CirclePlay, r as ArrowRight, s as Star, t as Award, g as MapPin, u as PanelTop, v as Plug, w as Battery, G as Gauge, W as Wrench, x as MessageCircle, d as Sun, X, y as Menu, Z as Zap, z as Calculator, D as Send, h as ChevronRight, E as Minus, I as Plus, P as Phone } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence, u as useReducedMotion, c as useMotionValue, b as useSpring, a as useScroll, d as useTransform, e as useMotionTemplate, f as useInView, g as animate } from "../_libs/framer-motion.mjs";
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
const panelImg = "/assets/panel-BER1Yufs.jpg";
const inverterImg = "/assets/inverter-CCJAN5cy.jpg";
const batteryImg = "/assets/battery-BDe_qirX.jpg";
const links = [
  { href: "#calculator", label: "Calculator" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#equipment", label: "Equipment" },
  { href: "#faq", label: "FAQ" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [hovered, setHovered] = reactExports.useState(null);
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 120], [4, 18]);
  const bgOpacity = useTransform(scrollY, [0, 120], [0.4, 0.85]);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      className: "fixed top-0 inset-x-0 z-50 transition-colors",
      style: {
        backdropFilter: useTransform(blur, (b) => `blur(${b}px) saturate(140%)`),
        WebkitBackdropFilter: useTransform(blur, (b) => `blur(${b}px) saturate(140%)`),
        backgroundColor: useTransform(bgOpacity, (o) => `rgba(250,252,255,${o})`),
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.a,
            {
              href: "#top",
              className: "flex items-center gap-2 group",
              initial: { opacity: 0, x: -8 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    whileHover: { rotate: 90, scale: 1.05 },
                    transition: { type: "spring", stiffness: 200, damping: 14 },
                    className: "relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-gradient shadow-amber-glow",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-5 w-5 text-foreground", strokeWidth: 2.25 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col leading-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base font-bold tracking-tight", children: "Sunshine Solar" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "Energy · Lahore" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "hidden md:flex items-center gap-2 relative",
              onMouseLeave: () => setHovered(null),
              children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: l.href,
                  onMouseEnter: () => setHovered(l.href),
                  className: "relative px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors",
                  children: [
                    hovered === l.href && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.span,
                      {
                        layoutId: "nav-pill",
                        transition: { type: "spring", stiffness: 380, damping: 32 },
                        className: "absolute inset-0 rounded-full bg-foreground/5 border border-border"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: l.label })
                  ]
                },
                l.href
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.a,
            {
              href: "#calculator",
              whileHover: { scale: 1.04 },
              whileTap: { scale: 0.97 },
              className: "group relative inline-flex items-center overflow-hidden rounded-full bg-foreground text-primary-foreground px-4 py-2 text-sm font-medium",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    "aria-hidden": true,
                    className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-[900ms] ease-out"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: "Get Free Estimate" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen((v) => !v),
              className: "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card",
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
            className: "md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-4 flex flex-col gap-3", children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  onClick: () => setOpen(false),
                  className: "py-2 text-foreground/80",
                  children: l.label
                },
                l.href
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#calculator",
                  onClick: () => setOpen(false),
                  className: "mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-primary-foreground px-4 py-3 text-sm font-medium",
                  children: "Get Free Estimate"
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
function StickyMobileCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden fixed bottom-3 inset-x-3 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 rounded-2xl bg-foreground/95 backdrop-blur p-2 shadow-elevated", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "tel:+923004242895",
        className: "inline-flex items-center justify-center gap-2 rounded-xl bg-card text-foreground py-3 text-sm font-medium",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
          " Call"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "https://wa.me/923004242895",
        className: "inline-flex items-center justify-center gap-2 rounded-xl bg-amber-gradient text-foreground py-3 text-sm font-semibold",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
          " WhatsApp"
        ]
      }
    )
  ] }) });
}
function CountUp({
  to,
  duration = 1.6,
  prefix = "",
  suffix = "",
  decimals = 0,
  format
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [val, setVal] = reactExports.useState(reduce ? to : 0);
  reactExports.useEffect(() => {
    if (!inView || reduce) return;
    const ctrl = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v)
    });
    return () => ctrl.stop();
  }, [inView, to, duration, reduce]);
  const text = format ? format(val) : val.toFixed(decimals);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    prefix,
    text,
    suffix
  ] });
}
function fmtPKR(n) {
  return "Rs " + Math.round(n).toLocaleString("en-PK");
}
function SolarCalculator() {
  const [bill, setBill] = reactExports.useState(45e3);
  const [type, setType] = reactExports.useState("Home");
  const [city, setCity] = reactExports.useState("Lahore");
  const [name, setName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  const { systemKw, savings, payback, est } = reactExports.useMemo(() => {
    const kWh = bill / 60;
    let factor = 1;
    if (type === "Business") factor = 1.1;
    if (type === "Industrial") factor = 1.25;
    const systemKw2 = Math.max(3, Math.round(kWh / 120 * factor));
    const savings2 = bill * 0.75;
    const costPerKw = type === "Industrial" ? 165e3 : type === "Business" ? 175e3 : 185e3;
    const totalCost = systemKw2 * costPerKw;
    const payback2 = Math.max(2.2, +(totalCost / (savings2 * 12)).toFixed(1));
    return { systemKw: systemKw2, savings: savings2, payback: payback2, est: totalCost };
  }, [bill, type]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "calculator", className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-6 lg:gap-10 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber/10 text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: "Step 01 · Solar Sizing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: "Instant Solar Savings Calculator" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-baseline justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Monthly electricity bill" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-foreground", children: fmtPKR(bill) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "range",
              min: 5e3,
              max: 5e5,
              step: 1e3,
              value: bill,
              onChange: (e) => setBill(+e.target.value),
              className: "w-full accent-[color:var(--amber)]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-mono text-[10px] text-muted-foreground mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Rs 5k" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Rs 500k" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Property type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-muted", children: ["Home", "Business", "Industrial"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setType(t),
              className: `text-sm py-2 rounded-lg transition ${type === t ? "bg-card shadow-soft text-foreground" : "text-muted-foreground hover:text-foreground"}`,
              children: t
            },
            t
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "City / area" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: city,
              onChange: (e) => setCity(e.target.value),
              className: "w-full h-11 px-4 rounded-xl bg-muted border border-transparent focus:border-amber ring-amber-focus text-sm",
              placeholder: "e.g. DHA, Lahore"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 grid sm:grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "System size", value: `${systemKw} kW`, accent: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Est. monthly savings", value: fmtPKR(savings) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Payback period", value: `${payback} yrs` })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 rounded-3xl bg-foreground text-primary-foreground p-6 sm:p-8 shadow-elevated relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-12 -right-12 h-44 w-44 rounded-full bg-amber-gradient opacity-40 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.2em] text-amber", children: "Step 02 · Free Report" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold mt-1", children: "Get your detailed report on WhatsApp" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/70 mt-2", children: "We'll send a personalised solar proposal, system layout and bill-saving breakdown — usually within 24 hours." }),
      submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl bg-card/10 border border-card/15 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold", children: "Report on the way" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-primary-foreground/80 mt-2", children: [
          "Thank you ",
          name || "there",
          ". Our energy advisor will WhatsApp you at ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-amber", children: phone }),
          " shortly."
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: (e) => {
            e.preventDefault();
            setSubmitted(true);
          },
          className: "mt-6 space-y-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                required: true,
                value: name,
                onChange: (e) => setName(e.target.value),
                placeholder: "Full name",
                className: "w-full h-11 px-4 rounded-xl bg-card/10 border border-card/15 placeholder:text-primary-foreground/40 text-sm ring-amber-focus"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                required: true,
                type: "tel",
                value: phone,
                onChange: (e) => setPhone(e.target.value),
                placeholder: "WhatsApp number (e.g. 03xx-xxxxxxx)",
                className: "w-full h-11 px-4 rounded-xl bg-card/10 border border-card/15 placeholder:text-primary-foreground/40 text-sm ring-amber-focus"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  readOnly: true,
                  value: city,
                  className: "w-full h-11 px-4 rounded-xl bg-card/5 border border-card/10 text-sm font-mono text-primary-foreground/70"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  readOnly: true,
                  value: fmtPKR(bill),
                  className: "w-full h-11 px-4 rounded-xl bg-card/5 border border-card/10 text-sm font-mono text-primary-foreground/70"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                className: "w-full inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-amber-gradient text-foreground font-semibold text-sm hover:brightness-105 transition",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
                  " Send My Free Solar Report"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[10px] text-primary-foreground/50 text-center pt-1", children: [
              "Est. system cost: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber", children: fmtPKR(est) }),
              " · No spam, ever."
            ] })
          ]
        }
      )
    ] })
  ] }) });
}
function Stat({ label, value, accent }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      className: `rounded-2xl p-4 border transition-colors ${accent ? "bg-amber/10 border-amber/30" : "bg-muted border-border"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 6 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -6 },
            transition: { duration: 0.25 },
            className: "font-display text-2xl font-semibold mt-1 tabular-nums",
            children: value
          },
          value
        ) })
      ]
    },
    value
  );
}
const faqs = [
  { q: "How much can I save with solar?", a: "Most Sunshine Solar customers cut their monthly electricity bills by 70–80%. Exact savings depend on system size, your usage pattern and net metering tariff." },
  { q: "What system size do I need?", a: "We use AI-powered sizing based on your last 6–12 months of bills, roof area and load profile. Typical homes need 5–10 kW, commercial 15–50 kW, industrial 50 kW+." },
  { q: "How long does installation take?", a: "Residential installations are usually completed in 3–5 days. Commercial and industrial timelines range from 1 to 4 weeks depending on system size and structural work." },
  { q: "Do you handle net metering?", a: "Yes — we handle the full LESCO / IESCO net metering application, documentation and bidirectional meter installation on your behalf." },
  { q: "What equipment do you use?", a: "Only Tier-1 panels (Jinko, Longi, Canadian Solar) and inverters (Huawei, Solis, Growatt, Sungrow). Every unit ships with serial-number authenticity verification." },
  { q: "Is solar worth it in Lahore?", a: "Lahore averages 5+ peak sun hours daily. With current grid tariffs, most systems pay for themselves in 2.5–4 years and continue producing for 25+ years." },
  { q: "Do you provide maintenance?", a: "Yes. Every installation includes 24/7 remote monitoring, annual cleaning visits and a dedicated after-sales WhatsApp line." },
  { q: "Can I add batteries later?", a: "Absolutely. All our hybrid inverters are battery-ready. You can start with grid-tied and add lithium storage when load-shedding or pricing changes." },
  { q: "How do YouTube project videos help verify work?", a: "Every featured project on our channel shows real installations with client testimonials, system specs and on-site footage — so you can verify our work before signing up." }
];
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border rounded-3xl bg-card border border-border overflow-hidden", children: faqs.map((f, i) => {
    const isOpen = open === i;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setOpen(isOpen ? null : i),
          className: "w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-muted/50 transition",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base sm:text-lg font-semibold", children: f.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex h-8 w-8 items-center justify-center rounded-full border border-border transition ${isOpen ? "bg-amber-gradient" : "bg-card"}`, children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
          ]
        }
      ),
      isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-6 -mt-1 text-sm text-muted-foreground leading-relaxed max-w-3xl", children: f.a })
    ] }, i);
  }) });
}
function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
  once = true
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  if (reduce) return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className, children });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once, margin: "-80px" },
      variants: {
        hidden: { opacity: 0, y, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }
        }
      },
      children
    }
  );
}
function Stagger({
  children,
  className,
  delayChildren = 0.05,
  stagger = 0.08
}) {
  const reduce = useReducedMotion();
  if (reduce) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-60px" },
      variants: {
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } }
      },
      children
    }
  );
}
function StaggerItem({
  children,
  className,
  y = 22
}) {
  const reduce = useReducedMotion();
  if (reduce) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      variants: {
        hidden: { opacity: 0, y, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
      },
      children
    }
  );
}
function TiltCard({
  children,
  className = "",
  intensity = 8
}) {
  const ref = reactExports.useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [intensity, -intensity]), {
    stiffness: 180,
    damping: 18
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-intensity, intensity]), {
    stiffness: 180,
    damping: 18
  });
  const glareX = useTransform(mx, (v) => `${v * 100}%`);
  const glareY = useTransform(my, (v) => `${v * 100}%`);
  function onMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }
  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      onMouseMove: onMove,
      onMouseLeave: onLeave,
      style: {
        rotateX: rx,
        rotateY: ry,
        transformPerspective: 1e3,
        transformStyle: "preserve-3d"
      },
      className: `relative ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: "translateZ(0)" }, children }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-500 mix-blend-overlay",
            style: {
              background: useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(255,255,255,0.55), transparent 55%)`
            }
          }
        )
      ]
    }
  );
}
function MagneticButton({
  children,
  href,
  className = "",
  strength = 0.35,
  onClick,
  ariaLabel
}) {
  const ref = reactExports.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reduce = useReducedMotion();
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });
  function onMove(e) {
    if (reduce) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }
  const Tag = href ? motion.a : motion.button;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Tag,
    {
      ref,
      href,
      onClick,
      "aria-label": ariaLabel,
      onMouseMove: onMove,
      onMouseLeave: reset,
      style: { x: sx, y: sy },
      className: `group relative inline-flex items-center justify-center overflow-hidden isolate ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-[900ms] ease-out"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 inline-flex items-center gap-2", children })
      ]
    }
  );
}
function SolarEcosystem() {
  const ref = reactExports.useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const reduce = useReducedMotion();
  const sx = useSpring(mx, { stiffness: 60, damping: 14 });
  const sy = useSpring(my, { stiffness: 60, damping: 14 });
  const sunX = useTransform(sx, (v) => v * -18);
  const sunY = useTransform(sy, (v) => v * -18);
  const panelX = useTransform(sx, (v) => v * 12);
  const panelY = useTransform(sy, (v) => v * 12);
  const batteryX = useTransform(sx, (v) => v * 22);
  const batteryY = useTransform(sy, (v) => v * 22);
  const homeX = useTransform(sx, (v) => v * -8);
  const homeY = useTransform(sy, (v) => v * -8);
  reactExports.useEffect(() => {
    if (reduce) return;
    function onMove(e) {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
      my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduce]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "relative w-full h-[460px] rounded-[28px] overflow-hidden border border-border bg-card shadow-elevated",
      style: { perspective: 1200 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#FFF7E8] via-[#FAFCFF] to-[#E8F1FB]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(245,166,35,0.35),transparent_55%),radial-gradient(circle_at_15%_85%,rgba(10,110,189,0.18),transparent_60%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 solar-grid opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "absolute inset-0 w-full h-full",
            viewBox: "0 0 600 460",
            preserveAspectRatio: "none",
            "aria-hidden": true,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "flow-amber", x1: "0", y1: "0", x2: "1", y2: "0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#F5A623", stopOpacity: "0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#F5A623", stopOpacity: "1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#F5A623", stopOpacity: "0" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "flow-sky", x1: "0", y1: "0", x2: "1", y2: "0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#0A6EBD", stopOpacity: "0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#0A6EBD", stopOpacity: "0.9" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#0A6EBD", stopOpacity: "0" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M 470,90 C 400,150 340,180 300,210",
                  stroke: "rgba(245,166,35,0.25)",
                  strokeWidth: "1.5",
                  fill: "none",
                  strokeDasharray: "2 6"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M 300,235 C 230,260 180,290 150,330",
                  stroke: "rgba(10,110,189,0.25)",
                  strokeWidth: "1.5",
                  fill: "none",
                  strokeDasharray: "2 6"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M 175,355 C 250,355 330,355 400,340",
                  stroke: "rgba(10,110,189,0.25)",
                  strokeWidth: "1.5",
                  fill: "none",
                  strokeDasharray: "2 6"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "3.5", fill: "url(#flow-amber)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "animateMotion",
                {
                  dur: "3.2s",
                  repeatCount: "indefinite",
                  path: "M 470,90 C 400,150 340,180 300,210"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "3", fill: "#F5A623", opacity: "0.9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "animateMotion",
                {
                  dur: "3.2s",
                  begin: "1.1s",
                  repeatCount: "indefinite",
                  path: "M 470,90 C 400,150 340,180 300,210"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "3", fill: "#0A6EBD", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "animateMotion",
                {
                  dur: "3.6s",
                  repeatCount: "indefinite",
                  path: "M 300,235 C 230,260 180,290 150,330"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "3", fill: "#0A6EBD", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "animateMotion",
                {
                  dur: "3.6s",
                  begin: "1.4s",
                  repeatCount: "indefinite",
                  path: "M 300,235 C 230,260 180,290 150,330"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "3", fill: "#0A6EBD", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "animateMotion",
                {
                  dur: "4s",
                  repeatCount: "indefinite",
                  path: "M 175,355 C 250,355 330,355 400,340"
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            style: { x: sunX, y: sunY },
            className: "absolute top-8 right-10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                animate: { rotate: 360 },
                transition: { duration: 60, repeat: Infinity, ease: "linear" },
                className: "relative h-24 w-24 rounded-full bg-amber-gradient shadow-amber-glow flex items-center justify-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-10 w-10 text-foreground", strokeWidth: 1.6 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full ring-4 ring-amber/30 animate-ping" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            style: { x: panelX, y: panelY, rotateX: 38, rotateZ: -8 },
            className: "absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-1.5 p-2 rounded-xl bg-gradient-to-br from-[#1a2b4a] to-[#0a1730] shadow-elevated", children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0.4 },
                  animate: { opacity: [0.45, 0.85, 0.45] },
                  transition: {
                    duration: 2.6,
                    repeat: Infinity,
                    delay: i * 0.12,
                    ease: "easeInOut"
                  },
                  className: "h-7 w-10 rounded-sm bg-gradient-to-br from-[#3a6fa8] to-[#1f4475] border border-[#4d7fb0]/40"
                },
                i
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-1.5 w-full bg-foreground/70 rounded-sm" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            style: { x: batteryX, y: batteryY },
            className: "absolute left-8 bottom-20",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border shadow-elevated p-3 backdrop-blur-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Battery, { className: "h-4 w-4 text-amber" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em]", children: "Battery" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1.5 w-28 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: "20%" },
                  animate: { width: ["20%", "92%", "20%"] },
                  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  className: "h-full bg-amber-gradient"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 font-mono text-[10px] text-muted-foreground", children: "Storing surplus" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            style: { x: homeX, y: homeY },
            className: "absolute right-10 bottom-16",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-foreground text-primary-foreground p-3 shadow-elevated", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-4 w-4 text-amber" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em]", children: "Your home" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3 text-amber" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] text-amber", children: "6.2 kW live" })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            animate: { y: [0, -6, 0] },
            transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            className: "absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-card/90 backdrop-blur px-3 py-1.5 border border-border",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-amber animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em]", children: "Live system · 8.4 kW" })
            ]
          }
        )
      ]
    }
  );
}
function AmbientBackground() {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full",
        style: {
          background: "radial-gradient(closest-side, rgba(245,166,35,0.25), transparent 70%)"
        },
        animate: reduce ? void 0 : { x: [0, 30, -20, 0], y: [0, 20, -10, 0] },
        transition: { duration: 22, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute -bottom-40 -left-40 h-[560px] w-[560px] rounded-full",
        style: {
          background: "radial-gradient(closest-side, rgba(10,110,189,0.18), transparent 70%)"
        },
        animate: reduce ? void 0 : { x: [0, -20, 30, 0], y: [0, -15, 10, 0] },
        transition: { duration: 26, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute top-1/3 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full",
        style: {
          background: "radial-gradient(closest-side, rgba(245,166,35,0.10), transparent 70%)"
        },
        animate: reduce ? void 0 : { scale: [1, 1.15, 1] },
        transition: { duration: 14, repeat: Infinity, ease: "easeInOut" }
      }
    )
  ] });
}
function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });
  const [enabled, setEnabled] = reactExports.useState(false);
  const reduce = useReducedMotion();
  reactExports.useEffect(() => {
    if (reduce) return;
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
  }, [reduce]);
  reactExports.useEffect(() => {
    if (!enabled) return;
    function onMove(e) {
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, x, y]);
  if (!enabled) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      "aria-hidden": true,
      style: {
        x: sx,
        y: sy,
        background: "radial-gradient(closest-side, rgba(245,166,35,0.18), transparent 70%)"
      },
      className: "pointer-events-none fixed top-0 left-0 z-[5] h-[400px] w-[400px] rounded-full blur-2xl mix-blend-multiply"
    }
  );
}
function LoadingScreen() {
  const [show, setShow] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-background",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.85, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            className: "relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-gradient shadow-amber-glow",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-8 w-8 text-foreground", strokeWidth: 2 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  className: "absolute inset-0 rounded-2xl ring-2 ring-amber/40",
                  animate: { scale: [1, 1.35], opacity: [0.7, 0] },
                  transition: { duration: 1.2, repeat: Infinity, ease: "easeOut" }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold tracking-tight text-foreground", children: "Sunshine Solar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[2px] w-40 overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { x: "-100%" },
              animate: { x: "100%" },
              transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] },
              className: "h-full w-full bg-amber-gradient"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: "Charging your energy story" })
        ] })
      ] })
    }
  ) });
}
function Section({
  id,
  eyebrow,
  title,
  sub,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: `mx-auto max-w-7xl px-5 lg:px-8 py-20 sm:py-28 ${className}`, children: [
    (eyebrow || title) && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-3", children: eyebrow }),
      title && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance", children: title }),
      sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl", children: sub })
    ] }) }),
    children
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", className: "min-h-screen relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AmbientBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CursorGlow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "calculator", eyebrow: "Instant Estimate", title: "See your solar savings in 30 seconds.", sub: "Slide your bill, pick your property type, and get a personalised system size, monthly savings and payback period — all before you pick up the phone.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SolarCalculator, {}) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "why", eyebrow: "Why Sunshine Solar", title: "Engineered for transparency. Built for the next 25 years.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [{
        icon: Cpu,
        t: "AI-powered system sizing",
        d: "We analyse 12 months of your bills, roof orientation and load curve to recommend a perfectly sized system — no oversell, no undersize."
      }, {
        icon: ShieldCheck,
        t: "Zero-hassle net metering",
        d: "We handle the full LESCO net metering application, documentation and bi-directional meter installation end to end."
      }, {
        icon: ChartLine,
        t: "24/7 monitoring support",
        d: "Every system ships with a live monitoring app and proactive alerts. We see issues before you do."
      }, {
        icon: BadgeCheck,
        t: "Tier-1 panels & inverters",
        d: "Only Jinko, Longi, Huawei, Solis, Sungrow — verified by serial number, backed by global warranties."
      }, {
        icon: Receipt,
        t: "Transparent quotation",
        d: "Itemised BOQs. No hidden fees. No surprise add-ons after installation day."
      }, {
        icon: Factory,
        t: "Residential to industrial",
        d: "From a 5 kW home setup to 500 kW industrial arrays — one team, one accountability chain."
      }].map(({
        icon: Icon,
        t,
        d
      }) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TiltCard, { className: "h-full rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full rounded-2xl bg-card/80 backdrop-blur border border-border p-6 hover:border-amber/40 hover:shadow-elevated transition-all duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { whileHover: {
          scale: 1.08,
          rotate: 6
        }, transition: {
          type: "spring",
          stiffness: 240,
          damping: 16
        }, className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber/10 text-foreground group-hover:bg-amber-gradient group-hover:shadow-amber-glow transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5", strokeWidth: 2 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-lg font-semibold", children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: d })
      ] }) }) }, t)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "problem", eyebrow: "The Problem", title: "Electricity in Pakistan keeps getting more expensive — and more unreliable.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-paper/80 backdrop-blur border border-border p-8 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-card border border-border px-3 py-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5 text-destructive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em]", children: "Without solar" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-4", children: ["Bills increasing 25–40% year over year", "Daily load-shedding hurting productivity", "Wrong system sizing wasting lakhs of rupees", "Counterfeit panels & inverters in the local market", "Confusing, slow net metering paperwork"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-destructive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: p })
          ] }, p)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-foreground text-primary-foreground p-8 relative overflow-hidden h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, className: "absolute -top-16 -right-10 h-48 w-48 rounded-full bg-amber-gradient opacity-50 blur-3xl", animate: {
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }, transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-amber-gradient text-foreground px-3 py-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em]", children: "Sunshine Solar way" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl sm:text-3xl font-semibold", children: "One transparent partner — from your first bill audit to year-25 monitoring." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: ["AI sizing tuned for Lahore irradiance & your load profile", "Only Tier-1, serial-verified equipment", "End-to-end LESCO net metering done for you", "Itemised quote — no hidden line items", "24/7 monitoring & dedicated after-sales WhatsApp"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-primary-foreground/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-amber mt-0.5 shrink-0" }),
            " ",
            p
          ] }, p)) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "services", eyebrow: "Services", title: "Solar systems built for every scale.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "grid md:grid-cols-3 gap-5", children: [{
        icon: House,
        label: "Residential Solar",
        best: "Homes, villas, apartments",
        range: "3 kW – 20 kW systems",
        benefits: ["70–80% bill reduction", "Battery-ready hybrid inverters", "Net metering included"]
      }, {
        icon: Building2,
        label: "Commercial Solar",
        best: "Offices, shops, clinics, schools",
        range: "15 kW – 100 kW systems",
        benefits: ["Daytime load offset", "Faster 3–4 yr payback", "ROI-focused engineering"]
      }, {
        icon: Factory,
        label: "Industrial Solar",
        best: "Factories, mills, warehouses",
        range: "100 kW – 1 MW+ systems",
        benefits: ["Dedicated EPC team", "Structural & HT design", "Performance guarantees"]
      }].map(({
        icon: Icon,
        label,
        best,
        range,
        benefits
      }) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TiltCard, { intensity: 6, className: "h-full rounded-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full rounded-3xl bg-card/85 backdrop-blur border border-border p-7 flex flex-col hover:border-foreground/20 hover:shadow-elevated transition-all duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { whileHover: {
            rotate: -6,
            scale: 1.06
          }, className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-gradient shadow-amber-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Service" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl font-semibold", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
          "Best for: ",
          best
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-mono text-xs text-foreground/70", children: range }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2.5 flex-1", children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-amber mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
        ] }, b)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#calculator", className: "mt-6 group/btn relative overflow-hidden inline-flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm font-medium hover:bg-foreground hover:text-primary-foreground transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Get Quote" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 relative z-10 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" })
        ] })
      ] }) }) }, label)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VideoGallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "cases", eyebrow: "Case Studies", title: "Real Lahore projects, verified savings.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "grid lg:grid-cols-3 gap-5", children: [{
        client: "Residential · DHA Phase 6",
        size: "10 kW Hybrid",
        before: 78e3,
        after: 14500,
        time: "4 days",
        eqp: "Jinko 580W · Huawei 10kTL",
        payback: "3.1 yrs"
      }, {
        client: "Commercial · Gulberg",
        size: "35 kW On-Grid",
        before: 245e3,
        after: 52e3,
        time: "12 days",
        eqp: "Longi Hi-MO 6 · Sungrow 33kW",
        payback: "2.8 yrs"
      }, {
        client: "Industrial · Sundar Estate",
        size: "220 kW On-Grid",
        before: 185e4,
        after: 41e4,
        time: "26 days",
        eqp: "Canadian Solar · Huawei SUN2000-100",
        payback: "2.4 yrs"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TiltCard, { intensity: 5, className: "h-full rounded-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group rounded-3xl bg-card/85 backdrop-blur border border-border overflow-hidden hover:shadow-elevated transition-all duration-500 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[16/9] relative bg-foreground/90 flex items-center justify-center overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,166,35,0.45),transparent_55%)]", animate: {
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }, transition: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: {
            scale: 1.18
          }, transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-14 w-14 text-amber relative z-10" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70", children: "YouTube · Project film" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: c.client }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-xl font-semibold", children: c.size }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Bill before", value: `Rs ${c.before.toLocaleString()}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Bill after", value: `Rs ${c.after.toLocaleString()}`, accent: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Install time", value: c.time }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Payback", value: c.payback })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground font-mono", children: c.eqp }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#calculator", className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-amber transition group/link", children: [
            "See full project",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover/link:translate-x-1" })
          ] })
        ] })
      ] }) }) }, c.client)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "process", eyebrow: "How it works", title: "From first call to first kWh in 5 steps.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessTimeline, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "trust", eyebrow: "Trust & Proof", title: "Loved by homeowners. Trusted by businesses.", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { className: "grid lg:grid-cols-3 gap-5 mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedStat, { icon: Star, label: "Google rating", sub: "220+ verified reviews", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: 4.9, decimals: 1 }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedStat, { icon: Award, label: "Projects installed", sub: "Across Lahore & Punjab", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: 600, suffix: "+" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedStat, { icon: MapPin, label: "On the ground", sub: "Lahore-based EPC team", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: 8, suffix: " yrs" }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "grid md:grid-cols-3 gap-5", children: [{
          n: "Ahmed R.",
          r: "DHA, Lahore",
          q: "Bill dropped from 82k to 13k. Install was clean, paperwork done in 3 weeks. Couldn't be happier."
        }, {
          n: "Hira K.",
          r: "Gulberg",
          q: "What sold me was the transparent BOQ. Every panel, every clamp, every wire — itemised."
        }, {
          n: "Imran T.",
          r: "Sundar Industrial Estate",
          q: "220 kW system running flawlessly for 14 months. Their monitoring caught one inverter fault before we even noticed."
        }].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TiltCard, { intensity: 5, className: "h-full rounded-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card/85 backdrop-blur border border-border p-6 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 text-amber", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm leading-relaxed text-foreground/85", children: [
            '"',
            t.q,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-border flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-sm", children: t.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: t.r })
          ] })
        ] }) }) }, t.n)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: ["25-yr panel warranty", "10-yr inverter warranty", "Tier-1 verified", "No hidden pricing"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-paper border border-border px-4 py-2 text-xs font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-3.5 w-3.5 text-amber" }),
          " ",
          b
        ] }, b)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "equipment", eyebrow: "Equipment & Technology", title: "Only the gear we'd put on our own roofs.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: [
        [{
          img: panelImg,
          icon: PanelTop,
          t: "Solar Panels",
          alt: "Tier-1 monocrystalline solar panel",
          d: "Tier-1 mono-PERC & N-type modules from Jinko, Longi & Canadian Solar.",
          w: "25-year linear power warranty"
        }, {
          img: inverterImg,
          icon: Plug,
          t: "Inverters",
          alt: "Hybrid solar inverter system",
          d: "Hybrid & on-grid inverters from Huawei, Solis, Sungrow, Growatt.",
          w: "10-year inverter warranty"
        }, {
          img: batteryImg,
          icon: Battery,
          t: "Lithium Batteries",
          alt: "LiFePO4 lithium solar battery",
          d: "LiFePO4 storage from Dyness, Pylontech and Huawei LUNA — battery-ready by default.",
          w: "6,000+ cycle life"
        }].map(({
          img,
          icon: Icon,
          t,
          alt,
          d,
          w
        }) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TiltCard, { intensity: 6, className: "h-full rounded-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card/85 backdrop-blur border border-border overflow-hidden hover:shadow-elevated transition h-full group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] bg-paper overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: img, alt, loading: "lazy", width: 896, height: 672, className: "w-full h-full object-contain p-6", whileHover: {
            scale: 1.08
          }, transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-amber" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: t })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: d }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70", children: w })
          ] })
        ] }) }) }, t)),
        [{
          icon: Gauge,
          t: "Net Metering",
          d: "End-to-end LESCO/IESCO net metering application, approvals and bi-directional meter install."
        }, {
          icon: ChartLine,
          t: "Monitoring Dashboard",
          d: "Live production data, alerts and monthly performance reports on your phone."
        }, {
          icon: Wrench,
          t: "After-sales Care",
          d: "Annual cleaning, on-call diagnostics and dedicated WhatsApp support line."
        }].map(({
          icon: Icon,
          t,
          d
        }) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TiltCard, { intensity: 5, className: "h-full rounded-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-paper/80 backdrop-blur border border-border p-6 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-card border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-lg font-semibold", children: t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: d })
        ] }) }) }, t))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "lahore", eyebrow: "Serving Lahore & Punjab", title: "The trusted solar company in Lahore.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-foreground/80 leading-relaxed space-y-4 max-w-prose", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sunshine Solar Energy is a Lahore-based solar installation company serving homes, businesses and industries across Punjab. From DHA and Bahria Town to Gulberg, Johar Town, Model Town and the industrial belts of Sundar, Raiwind and Kot Lakhpat — we deliver tier-1, net-metered solar systems with end-to-end care." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Whether you're researching ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "solar panel price in Lahore" }),
            ", planning a",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "5 kW solar system" }),
            " for your home, or scoping a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "10 kW solar system" }),
            " ",
            "for a small office, our energy advisors design every solution around your actual load profile — not generic rules of thumb."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "We handle the full ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "net metering in Lahore" }),
            " process with LESCO, ensuring you earn credit for every excess unit you export back to the grid."
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "grid grid-cols-2 gap-3", children: ["Solar company in Lahore", "Solar installation in Lahore", "Net metering in Lahore", "Solar panel price in Lahore", "5 kW solar system price", "10 kW solar system price", "Commercial solar Punjab", "Industrial solar Lahore"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
          y: -4
        }, transition: {
          type: "spring",
          stiffness: 280,
          damping: 18
        }, className: "rounded-xl bg-paper/80 backdrop-blur border border-border p-4 hover:border-amber/40 hover:shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm mt-1", children: k })
        ] }) }, k)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "faq", eyebrow: "FAQ", title: "Everything Lahore homeowners ask before going solar.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-5 lg:px-8 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl rounded-[32px] bg-foreground text-primary-foreground relative overflow-hidden p-10 sm:p-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, className: "absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-amber-gradient opacity-30 blur-3xl", animate: {
          scale: [1, 1.2, 1],
          x: [0, -30, 0]
        }, transition: {
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, className: "absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-sky-gradient opacity-20 blur-3xl", animate: {
          scale: [1, 1.15, 1],
          x: [0, 30, 0]
        }, transition: {
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 solar-grid opacity-30", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-amber", children: "Ready when you are" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-balance", children: "Ready to stop overpaying for electricity?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base sm:text-lg text-primary-foreground/75 max-w-xl", children: "Get a free solar estimate for your home, business or industrial site. Personalised proposal in under 24 hours — no obligation." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(MagneticButton, { href: "#calculator", className: "rounded-full bg-amber-gradient text-foreground px-6 py-3.5 text-sm font-semibold shadow-amber-glow", children: [
              "Get Free Solar Estimate ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(MagneticButton, { href: "https://wa.me/923004242895", className: "rounded-full bg-card/10 border border-card/20 text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:bg-card/20 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
              " WhatsApp Sunshine Solar"
            ] })
          ] })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyMobileCTA, {})
  ] });
}
function Hero() {
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.3]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, className: "relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 solar-grid pointer-events-none", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
        y: yText,
        opacity
      }, className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { y: 16, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-3 py-1.5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-flex h-1.5 w-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-amber animate-ping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-amber" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/70", children: "Lahore · Punjab · Pakistan" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] font-semibold tracking-tight text-balance", children: [
          "Cut your electricity bill by up to",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 bg-gradient-to-br from-foreground via-foreground to-[#5B6573] bg-clip-text text-transparent", children: "70–80%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
              scaleX: 0
            }, animate: {
              scaleX: 1
            }, transition: {
              duration: 1.1,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }, style: {
              originX: 0
            }, className: "absolute inset-x-0 bottom-1 h-3 bg-amber/40 -z-0", "aria-hidden": true })
          ] }),
          " ",
          "with smart solar."
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.18, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base sm:text-lg text-muted-foreground max-w-xl", children: "Lahore-based solar installation experts for homes, businesses and industries — with AI-powered sizing, net metering support and long-term system monitoring." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.28, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(MagneticButton, { href: "#calculator", className: "rounded-full bg-foreground text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-elevated", children: [
            "Get Free Solar Estimate",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(MagneticButton, { href: "#videos", className: "rounded-full bg-card/80 backdrop-blur border border-border px-6 py-3.5 text-sm font-semibold hover:bg-muted transition", strength: 0.2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-4 w-4 text-amber" }),
            "Watch Project Videos"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-10 flex flex-wrap gap-x-6 gap-y-3", stagger: 0.05, children: ["Lahore Based", "Residential + Commercial + Industrial", "Net Metering", "Tier-1 Equipment", "24/7 Monitoring"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 text-xs sm:text-sm text-foreground/75", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-amber" }),
          " ",
          t
        ] }) }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
        y: yVisual
      }, className: "lg:col-span-5 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SolarEcosystem, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 30,
          scale: 0.9
        }, animate: {
          opacity: 1,
          y: 0,
          scale: 1
        }, transition: {
          duration: 0.9,
          delay: 0.9,
          ease: [0.16, 1, 0.3, 1]
        }, className: "absolute -bottom-8 -left-6 sm:-left-10 w-[260px] rounded-2xl bg-card/95 backdrop-blur-xl border border-border shadow-elevated p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { animate: {
          y: [0, -4, 0]
        }, transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Estimated Monthly Savings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-3xl font-bold", children: [
              "Rs ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: 34500, format: (n) => Math.round(n).toLocaleString() })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "/ mo" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            width: 0
          }, whileInView: {
            width: "78%"
          }, viewport: {
            once: true
          }, transition: {
            duration: 1.4,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1]
          }, className: "h-full bg-amber-gradient" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between font-mono text-[10px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "vs current bill" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber", children: "−78%" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: -20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.9,
          delay: 1.1,
          ease: [0.16, 1, 0.3, 1]
        }, className: "absolute -top-6 -right-4 hidden sm:block rounded-2xl bg-foreground text-primary-foreground p-3 shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-amber" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em]", children: "Producing now · 6.2 kW" })
        ] }) })
      ] })
    ] })
  ] });
}
function ProcessTimeline() {
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"]
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const steps = [{
    n: "01",
    t: "Free consultation",
    d: "WhatsApp or call. We listen to your goals."
  }, {
    n: "02",
    t: "Bill & load analysis",
    d: "Send 6 months of bills. We model your usage."
  }, {
    n: "03",
    t: "AI-powered sizing",
    d: "Right-sized system + itemised BOQ."
  }, {
    n: "04",
    t: "Quote & approval",
    d: "Transparent pricing & milestone plan."
  }, {
    n: "05",
    t: "Install + net meter + monitor",
    d: "Live in days. Monitored for life."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute left-0 right-0 top-[34px] h-px bg-border" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: {
      scaleX: lineScale,
      originX: 0
    }, className: "hidden md:block absolute left-0 right-0 top-[34px] h-px bg-amber-gradient" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "grid md:grid-cols-5 gap-4 relative", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
      y: -4
    }, transition: {
      type: "spring",
      stiffness: 260,
      damping: 18
    }, className: "relative rounded-2xl bg-card/85 backdrop-blur border border-border p-5 h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-gradient text-foreground font-mono text-[11px] tracking-[0.05em] shadow-amber-glow", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-lg font-semibold", children: s.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: s.d }),
      i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "hidden md:block absolute -right-3 top-[27px] h-5 w-5 text-border" })
    ] }) }, s.n)) })
  ] });
}
function Metric({
  label,
  value,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl p-3 ${accent ? "bg-amber/10" : "bg-muted"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-display font-semibold mt-0.5 ${accent ? "text-foreground" : ""}`, children: value })
  ] });
}
function AnimatedStat({
  icon: Icon,
  label,
  sub,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TiltCard, { intensity: 4, className: "h-full rounded-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card/85 backdrop-blur border border-border p-7 flex items-start gap-5 h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { whileHover: {
      rotate: 12,
      scale: 1.08
    }, transition: {
      type: "spring",
      stiffness: 220,
      damping: 14
    }, className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-foreground" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl font-bold tabular-nums", children }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-semibold mt-1", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: sub })
    ] })
  ] }) });
}
function VideoGallery() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "videos", eyebrow: "Project Films", title: "See our work, on camera.", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TiltCard, { intensity: 4, className: "lg:col-span-2 rounded-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl overflow-hidden bg-card/85 backdrop-blur border border-border group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video bg-foreground relative flex items-center justify-center overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,166,35,0.4),transparent_55%)]", animate: {
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }, transition: {
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: {
            scale: 1.15
          }, transition: {
            type: "spring",
            stiffness: 200,
            damping: 14
          }, className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-20 w-20 text-amber" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70", children: "Featured · YouTube" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: "Featured project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-2xl font-semibold", children: "35 kW commercial install · Gulberg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "From site survey to first kWh — full project walkthrough with the client." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(MagneticButton, { href: "#calculator", className: "mt-5 rounded-full bg-foreground text-primary-foreground px-5 py-2.5 text-sm font-semibold", children: [
            "Request Similar System ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "flex flex-col gap-3", children: ["Residential", "Commercial", "Industrial", "Reviews"].map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { whileHover: {
        x: 6
      }, transition: {
        type: "spring",
        stiffness: 320,
        damping: 20
      }, className: "w-full rounded-2xl bg-paper/80 backdrop-blur border border-border px-4 py-3 text-left hover:bg-card transition flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-sm", children: cat }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "Shorts ›" })
      ] }) }, cat)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-6 grid grid-cols-2 md:grid-cols-4 gap-4", children: [{
      t: "8 kW Hybrid · DHA",
      s: "Residential"
    }, {
      t: "12 kW · Bahria Town",
      s: "Residential"
    }, {
      t: "50 kW Office · MM Alam",
      s: "Commercial"
    }, {
      t: "220 kW Mill · Sundar",
      s: "Industrial"
    }].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TiltCard, { intensity: 8, className: "rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden bg-card/85 backdrop-blur border border-border group cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[9/12] bg-foreground relative flex items-end justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(245,166,35,0.35),transparent_60%)]", animate: {
        scale: [1, 1.1, 1]
      }, transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: {
        scale: 1.2
      }, transition: {
        type: "spring",
        stiffness: 220,
        damping: 14
      }, className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-10 w-10 text-amber" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 p-3 w-full bg-gradient-to-t from-foreground to-transparent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[9px] uppercase tracking-[0.18em] text-amber", children: v.s }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs font-semibold text-primary-foreground mt-0.5", children: v.t })
      ] })
    ] }) }) }) }, v.t)) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-paper/60 backdrop-blur relative z-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8 py-14 grid md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-gradient shadow-amber-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-5 w-5 text-foreground", strokeWidth: 2.25 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold", children: "Sunshine Solar Energy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-md", children: "Lahore-based solar installation company delivering premium residential, commercial and industrial solar systems with net metering and 24/7 monitoring." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: ["DHA", "Bahria Town", "Gulberg", "Johar Town", "Model Town", "Sundar", "Raiwind", "Kot Lakhpat"].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-card border border-border px-3 py-1 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 text-amber" }),
          " ",
          a
        ] }, a)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-amber transition-colors", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#projects", className: "hover:text-amber transition-colors", children: "Projects" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#equipment", className: "hover:text-amber transition-colors", children: "Equipment" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faq", className: "hover:text-amber transition-colors", children: "FAQ" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Legal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "hover:text-amber transition-colors", children: "Privacy Policy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-amber transition-colors", children: "Terms & Conditions" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#calculator", className: "hover:text-amber transition-colors", children: "Contact Us" }) })
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
export {
  Index as component
};
