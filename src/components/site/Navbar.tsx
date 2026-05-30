import { useEffect, useState } from "react";
import { Sun, Menu, X } from "lucide-react";

const links = [
  { href: "#calculator", label: "Calculator" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#equipment", label: "Equipment" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-gradient shadow-amber-glow">
            <Sun className="h-5 w-5 text-foreground" strokeWidth={2.25} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight">Sunshine Solar</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Energy · Lahore</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#calculator" className="inline-flex items-center rounded-full bg-foreground text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition">
            Get Free Estimate
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-foreground/80">
                {l.label}
              </a>
            ))}
            <a href="#calculator" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-primary-foreground px-4 py-3 text-sm font-medium">
              Get Free Estimate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
