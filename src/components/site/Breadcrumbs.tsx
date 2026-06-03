import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import type { BreadcrumbItem } from "@/lib/seo";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-7xl px-5 lg:px-8 pt-24 pb-2"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path} className="inline-flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3 opacity-50" />}
              {last ? (
                <span className="text-foreground/80">{c.label}</span>
              ) : (
                <Link
                  to={c.path}
                  className="inline-flex items-center gap-1 hover:text-amber transition-colors"
                >
                  {i === 0 && <Home className="h-3 w-3" />}
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
