import { useEffect, useState } from "react";
import { Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Link } from "@tanstack/react-router";

const links = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/net-metering", label: "Net Metering" },
  { href: "/calculator", label: "Calculator" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 120], [4, 18]);
  const bgOpacity = useTransform(scrollY, [0, 120], [0.4, 0.85]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50 transition-colors"
      style={{
        backdropFilter: useTransform(blur, (b) => `blur(${b}px) saturate(140%)`),
        WebkitBackdropFilter: useTransform(blur, (b) => `blur(${b}px) saturate(140%)`),
        backgroundColor: useTransform(bgOpacity, (o) => `rgba(250,252,255,${o})`),
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <motion.span
              whileHover={{ rotate: 90, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 14 }}
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-gradient shadow-amber-glow"
            >
              <Sun className="h-5 w-5 text-foreground" strokeWidth={2.25} />
            </motion.span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-base font-bold tracking-tight">Sunshine Solar</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Energy · Lahore
              </span>
            </span>
          </Link>
        </motion.div>

        <div
          className="hidden md:flex items-center gap-2 relative"
          onMouseLeave={() => setHovered(null)}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onMouseEnter={() => setHovered(l.href)}
              className="relative px-3 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {hovered === l.href && (
                <motion.span
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-foreground/5 border border-border"
                />
              )}
              <span className="relative">{l.label}</span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="#calculator"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-foreground text-primary-foreground px-4 py-2 text-sm font-medium"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-[900ms] ease-out"
            />
            <span className="relative">Get Free Estimate</span>
          </motion.a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-foreground/80"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#calculator"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-primary-foreground px-4 py-3 text-sm font-medium"
              >
                Get Free Estimate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
