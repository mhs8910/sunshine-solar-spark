import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  Link as LinkIcon,
  Sun,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { getPost, getRelated, type BlogPost } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post, related: getRelated(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
    const url = `/blog/${post.slug}`;
    return {
      meta: [
        { title: post.metaTitle },
        { name: "description", content: post.metaDescription },
        { property: "og:title", content: post.metaTitle },
        { property: "og:description", content: post.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: post.image },
        { property: "article:published_time", content: post.date },
        { property: "article:author", content: post.author },
        { property: "article:section", content: post.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.metaTitle },
        { name: "twitter:description", content: post.metaDescription },
        { name: "twitter:image", content: post.image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            image: post.image,
            datePublished: post.date,
            author: { "@type": "Person", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "Sunshine Solar Energy",
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            articleSection: post.category,
            keywords: post.tags.join(", "),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
        ...(post.faqs && post.faqs.length > 0
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: post.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                }),
              },
            ]
          : []),
      ],
    };
  },
  component: BlogPostPage,
});

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function BlogPostPage() {
  const { post, related } = Route.useLoaderData();
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const toc = useMemo(
    () => post.content.map((s) => ({ id: slugify(s.heading), label: s.heading })),
    [post],
  );

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? Math.min(100, (h.scrollTop / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shareUrl = typeof window !== "undefined" ? window.location.href : `/blog/${post.slug}`;
  const shareText = encodeURIComponent(post.title);
  const encUrl = encodeURIComponent(shareUrl);

  return (
    <>
      <Navbar />
      <div
        className="fixed top-16 inset-x-0 z-40 h-0.5 bg-amber origin-left"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden
      />
      <main className="bg-background text-foreground">
        {/* Breadcrumbs */}
        <div className="pt-28 pb-4 mx-auto max-w-4xl px-5 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground/80 truncate">{post.title}</span>
          </nav>
        </div>

        {/* Header */}
        <header className="mx-auto max-w-4xl px-5 lg:px-8 pb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/15 text-amber px-3 py-1 text-xs font-medium">
            <Tag className="h-3 w-3" /> {post.category}
          </span>
          <h1 className="mt-5 font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {fmtDate(post.date)}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readingTime} min read</span>
          </div>
        </header>

        {/* Featured image */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-paper aspect-[16/9]">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Content + TOC */}
        <section className="mx-auto max-w-6xl px-5 lg:px-8 py-12 grid lg:grid-cols-[1fr_240px] gap-12">
          <article className="min-w-0">
            {post.content.map((s) => (
              <section key={s.heading} id={slugify(s.heading)} className="scroll-mt-24 mt-10 first:mt-0">
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">{s.heading}</h2>
                <p className="mt-4 text-[17px] leading-relaxed text-foreground/85">{s.body}</p>
              </section>
            ))}

            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                  #{t}
                </span>
              ))}
            </div>

            {/* Share */}
            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-border pt-6">
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <Share2 className="h-4 w-4 text-amber" /> Share
              </span>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encUrl}`}
                target="_blank" rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:bg-accent"
                aria-label="Share on Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encUrl}`}
                target="_blank" rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:bg-accent"
                aria-label="Share on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encUrl}`}
                target="_blank" rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:bg-accent"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <button
                onClick={() => {
                  void navigator.clipboard.writeText(shareUrl).then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  });
                }}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 h-9 text-xs hover:bg-accent"
              >
                <LinkIcon className="h-3.5 w-3.5" /> {copied ? "Copied!" : "Copy link"}
              </button>
            </div>

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-14">
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                  Frequently Asked Questions
                </h2>
                <div className="mt-6 space-y-3">
                  {post.faqs.map((f) => (
                    <details key={f.q} className="group rounded-xl border border-border bg-card p-4 open:shadow-soft">
                      <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-medium">
                        {f.q}
                        <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                      </summary>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">On this page</p>
              <ul className="mt-4 space-y-2 border-l border-border">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className="block -ml-px border-l border-transparent pl-4 py-1 text-sm text-muted-foreground hover:text-foreground hover:border-amber transition-colors"
                    >
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-paper/60">
          <div className="mx-auto max-w-5xl px-5 lg:px-8 py-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Cut Your Electricity Bills?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Get a free, no-obligation solar assessment from Lahore's trusted installer.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                hash="calculator"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-5 py-3 text-sm font-medium"
              >
                Get Your Free Solar Assessment <ArrowRight className="h-4 w-4" />
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

        {/* Related */}
        {related.length > 0 && (
          <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Related articles</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:shadow-elevated transition-shadow"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-paper">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{p.category}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug group-hover:text-amber transition-colors line-clamp-2">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-amber">
                <ArrowLeft className="h-4 w-4" /> Back to all articles
              </Link>
            </div>
          </section>
        )}

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
      </main>

      <a
        href="https://wa.me/923004242895"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
