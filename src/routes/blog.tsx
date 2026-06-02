import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search, Clock, Calendar, User, Tag, Sun, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { Navbar } from "@/components/site/Navbar";
import { Reveal } from "@/components/site/Motion";
import { POSTS, CATEGORIES, type BlogCategory } from "@/data/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Solar Insights & Guides — Sunshine Solar Energy Blog" },
      {
        name: "description",
        content:
          "Solar energy guides, net metering tips and electricity savings advice for Pakistani homes and businesses. Trusted insights from Lahore's premium solar installer.",
      },
      { property: "og:title", content: "Sunshine Solar Energy Blog" },
      {
        property: "og:description",
        content:
          "Solar guides, net metering and electricity-savings articles from Lahore's premium solar installer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Sunshine Solar Energy Blog",
          url: "/blog",
          publisher: {
            "@type": "Organization",
            name: "Sunshine Solar Energy",
          },
          blogPost: POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            datePublished: p.date,
            author: { "@type": "Person", name: p.author },
            url: `/blog/${p.slug}`,
          })),
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function BlogIndex() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<BlogCategory | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter((p) => {
      const catOk = activeCat === "All" || p.category === activeCat;
      if (!catOk) return false;
      if (!q) return true;
      const hay =
        p.title.toLowerCase() +
        " " +
        p.excerpt.toLowerCase() +
        " " +
        p.category.toLowerCase() +
        " " +
        p.tags.join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [query, activeCat]);

  const featured = POSTS.filter((p) => p.featured);
  const popular = POSTS.filter((p) => p.popular).slice(0, 4);
  const recent = [...POSTS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);

  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 bg-sun-glow">
          <div className="absolute inset-0 solar-grid opacity-60" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-amber" /> Sunshine Solar Journal
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl">
                Solar Insights, Guides &{" "}
                <span className="bg-amber-gradient bg-clip-text text-transparent">Energy Saving Tips</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                Learn how solar energy can reduce your electricity bills, increase property value, and help you achieve
                energy independence in Pakistan.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#articles"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  Explore Articles
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  to="/"
                  hash="calculator"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-accent transition-colors"
                >
                  Get Free Solar Assessment
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Featured */}
        {featured.length > 0 && (
          <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Featured</p>
                <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold tracking-tight">Editor's picks</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((p) => (
                <FeaturedCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}

        {/* Articles + Sidebar */}
        <section id="articles" className="mx-auto max-w-7xl px-5 lg:px-8 pb-24">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div>
              {/* Search + categories */}
              <div className="sticky top-20 z-20 -mx-5 lg:mx-0 px-5 lg:px-0 py-4 bg-background/85 backdrop-blur border-b border-border lg:border-0 lg:bg-transparent lg:backdrop-blur-0">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search articles by title, keyword or category…"
                    aria-label="Search blog posts"
                    className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm placeholder:text-muted-foreground ring-amber-focus"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <CatChip active={activeCat === "All"} onClick={() => setActiveCat("All")}>
                    All
                  </CatChip>
                  {CATEGORIES.map((c) => (
                    <CatChip key={c} active={activeCat === c} onClick={() => setActiveCat(c)}>
                      {c}
                    </CatChip>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                {filtered.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
                    <p className="font-display text-xl">No articles match your search.</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Try a different keyword or clear the filters.
                    </p>
                    <button
                      onClick={() => {
                        setQuery("");
                        setActiveCat("All");
                      }}
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-4 py-2 text-sm"
                    >
                      Reset
                    </button>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-6">
                    {filtered.map((p) => (
                      <BlogCard key={p.slug} post={p} />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-24 self-start">
              <SidebarBlock title="Popular Articles">
                <ul className="space-y-4">
                  {popular.map((p, i) => (
                    <li key={p.slug} className="flex gap-3">
                      <span className="font-display text-2xl font-bold text-amber leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: p.slug }}
                        className="text-sm font-medium hover:text-amber transition-colors line-clamp-3"
                      >
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </SidebarBlock>

              <SidebarBlock title="Categories">
                <ul className="space-y-2">
                  {CATEGORIES.map((c) => {
                    const count = POSTS.filter((p) => p.category === c).length;
                    return (
                      <li key={c}>
                        <button
                          onClick={() => {
                            setActiveCat(c);
                            document.getElementById("articles")?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="w-full flex items-center justify-between text-sm py-1.5 hover:text-amber transition-colors"
                        >
                          <span>{c}</span>
                          <span className="font-mono text-xs text-muted-foreground">{count}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </SidebarBlock>

              <SidebarBlock title="Recent Posts">
                <ul className="space-y-3">
                  {recent.map((p) => (
                    <li key={p.slug}>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: p.slug }}
                        className="block text-sm font-medium hover:text-amber transition-colors"
                      >
                        {p.title}
                      </Link>
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {fmtDate(p.date)}
                      </p>
                    </li>
                  ))}
                </ul>
              </SidebarBlock>

              <Newsletter />
            </aside>
          </div>
        </section>

        <CTABanner />
        <Footer />
      </main>

      <FloatingWhatsApp />
    </>
  );
}

function CatChip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
        active
          ? "bg-foreground text-primary-foreground border-foreground"
          : "border-border bg-card text-foreground/75 hover:text-foreground hover:border-foreground/30"
      }`}
    >
      {children}
    </button>
  );
}

function FeaturedCard({ post }: { post: (typeof POSTS)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:shadow-elevated transition-shadow"
    >
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-paper">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[11px] font-medium">
            <Tag className="h-3 w-3 text-amber" /> {post.category}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg font-semibold tracking-tight leading-snug group-hover:text-amber transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
          <div className="mt-4 flex items-center justify-between gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" /> {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {post.readingTime} min
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function BlogCard({ post }: { post: (typeof POSTS)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:shadow-elevated transition-shadow"
    >
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="block">
        <div className="relative aspect-[16/9] overflow-hidden bg-paper">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[11px] font-medium">
            {post.category}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-base md:text-lg font-semibold tracking-tight leading-snug group-hover:text-amber transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
          <div className="mt-4 flex items-center justify-between gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {fmtDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {post.readingTime} min
            </span>
          </div>
          <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 group-hover:text-amber transition-colors">
            Read More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function SidebarBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{title}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-foreground text-primary-foreground p-6 shadow-elevated">
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-amber/30 blur-3xl" aria-hidden />
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-foreground/60">Newsletter</p>
      <h3 className="mt-2 font-display text-xl font-semibold leading-snug">Stay Updated with Solar Trends</h3>
      <p className="mt-2 text-sm text-primary-foreground/70">
        Get monthly insights on solar savings, net metering and Pakistani energy policy.
      </p>
      {done ? (
        <p className="mt-4 rounded-lg bg-amber/15 text-amber px-3 py-2 text-sm">Thanks — you're subscribed.</p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="mt-4 space-y-2"
        >
          <input
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder:text-primary-foreground/40 ring-amber-focus"
          />
          <input
            type="email"
            required
            placeholder="Email address"
            className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder:text-primary-foreground/40 ring-amber-focus"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-amber-gradient text-foreground px-3 py-2.5 text-sm font-semibold"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}

function CTABanner() {
  return (
    <section className="border-t border-border bg-paper/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid md:grid-cols-[1fr_auto] items-center gap-8">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Ready to go solar?
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
            Ready to Cut Your Electricity Bills?
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Get a free, no-obligation solar assessment from Lahore's most trusted installer.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/"
            hash="calculator"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-5 py-3 text-sm font-medium"
          >
            Get a Free Solar Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/923004242895"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium"
          >
            <MessageCircle className="h-4 w-4 text-amber" /> Talk to a Solar Expert
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-paper/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-amber-gradient">
            <Sun className="h-4 w-4 text-foreground" />
          </span>
          <span className="font-display font-bold">Sunshine Solar Energy</span>
        </div>
        <div className="flex gap-5 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923004242895"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
