import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-D3l_se_v.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$3 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sunshine Solar Energy — Solar Installation in Lahore" },
      { name: "description", content: "Cut your electricity bill by 70–80% with Sunshine Solar. Lahore's trusted residential, commercial & industrial solar installer with net metering and tier-1 equipment." },
      { name: "author", content: "Sunshine Solar Energy" },
      { property: "og:title", content: "Sunshine Solar Energy — Solar Installation in Lahore" },
      { property: "og:description", content: "Cut your electricity bill by 70–80% with Sunshine Solar. Lahore's trusted residential, commercial & industrial solar installer with net metering and tier-1 equipment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sunshine Solar Energy — Solar Installation in Lahore" },
      { name: "twitter:description", content: "Cut your electricity bill by 70–80% with Sunshine Solar. Lahore's trusted residential, commercial & industrial solar installer with net metering and tier-1 equipment." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1ea459e4-e89d-476a-9bec-d896aea8233b/id-preview-692c1cea--59cdd01b-dba0-40d1-bb68-9397dd46a595.lovable.app-1780134893832.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1ea459e4-e89d-476a-9bec-d896aea8233b/id-preview-692c1cea--59cdd01b-dba0-40d1-bb68-9397dd46a595.lovable.app-1780134893832.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1176024467991038');fbq('track', 'PageView');`
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "noscript",
        {
          dangerouslySetInnerHTML: {
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1176024467991038&ev=PageView&noscript=1" />`
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$3.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const BASE_URL = "https://sunshine-solar-spark.lovable.app";
const Route$2 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$1 = () => import("./privacy-policy-BB2zlWm6.mjs");
const Route$1 = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{
      title: "Sunshine Solar Energy Privacy Policy | Lahore Solar Solutions"
    }, {
      name: "description",
      content: "Read Sunshine Solar Energy's Privacy Policy to understand how we collect, use, and protect customer information across our solar consultation, installation, and support services."
    }, {
      property: "og:title",
      content: "Sunshine Solar Energy Privacy Policy | Lahore Solar Solutions"
    }, {
      property: "og:description",
      content: "Read Sunshine Solar Energy's Privacy Policy to understand how we collect, use, and protect customer information across our solar consultation, installation, and support services."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/privacy-policy"
    }, {
      name: "twitter:card",
      content: "summary"
    }],
    links: [{
      rel: "canonical",
      href: "/privacy-policy"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Privacy Policy — Sunshine Solar Energy",
        description: "Privacy policy for Sunshine Solar Energy, Lahore-based solar installation company.",
        url: "/privacy-policy",
        lastReviewed: "2025-06-01",
        inLanguage: "en",
        isPartOf: {
          "@type": "WebSite",
          name: "Sunshine Solar Energy",
          url: "/"
        }
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-a8IBIWUJ.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Sunshine Solar Energy — Solar Installation in Lahore"
    }, {
      name: "description",
      content: "Cut your electricity bill by 70–80% with Lahore's premium solar installer. AI-powered sizing, net metering and tier-1 panels for homes and businesses."
    }, {
      property: "og:title",
      content: "Sunshine Solar Energy — Lahore"
    }, {
      property: "og:description",
      content: "Premium residential, commercial & industrial solar in Lahore. Free estimate in 24 hours."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Sunshine Solar Energy",
        image: "/og-image.jpg",
        description: "Solar installation company in Lahore, Pakistan — residential, commercial & industrial solar systems with net metering.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lahore",
          addressRegion: "Punjab",
          addressCountry: "PK"
        },
        areaServed: ["Lahore", "Punjab"],
        telephone: "+92-300-4242895",
        priceRange: "$$"
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{
          "@type": "Question",
          name: "How much can I save with solar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Sunshine Solar customers cut their monthly electricity bills by 70–80%. Exact savings depend on system size, your usage pattern and net metering tariff."
          }
        }, {
          "@type": "Question",
          name: "What system size do I need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We use AI-powered sizing based on your last 6–12 months of bills, roof area and load profile. Typical homes need 5–10 kW, commercial 15–50 kW, industrial 50 kW+."
          }
        }, {
          "@type": "Question",
          name: "How long does installation take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Residential installations are usually completed in 3–5 days. Commercial and industrial timelines range from 1 to 4 weeks depending on system size and structural work."
          }
        }, {
          "@type": "Question",
          name: "Do you handle net metering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — we handle the full LESCO / IESCO net metering application, documentation and bidirectional meter installation on your behalf."
          }
        }, {
          "@type": "Question",
          name: "What equipment do you use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only Tier-1 panels (Jinko, Longi, Canadian Solar) and inverters (Huawei, Solis, Growatt, Sungrow). Every unit ships with serial-number authenticity verification."
          }
        }, {
          "@type": "Question",
          name: "Is solar worth it in Lahore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lahore averages 5+ peak sun hours daily. With current grid tariffs, most systems pay for themselves in 2.5–4 years and continue producing for 25+ years."
          }
        }, {
          "@type": "Question",
          name: "Do you provide maintenance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every installation includes 24/7 remote monitoring, annual cleaning visits and a dedicated after-sales WhatsApp line."
          }
        }, {
          "@type": "Question",
          name: "Can I add batteries later?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. All our hybrid inverters are battery-ready. You can start with grid-tied and add lithium storage when load-shedding or pricing changes."
          }
        }, {
          "@type": "Question",
          name: "How do YouTube project videos help verify work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every featured project on our channel shows real installations with client testimonials, system specs and on-site footage — so you can verify our work before signing up."
          }
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$2.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$3
});
const PrivacyPolicyRoute = Route$1.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$3
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  PrivacyPolicyRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
