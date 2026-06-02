export type BlogCategory =
  | "Solar Basics"
  | "Net Metering"
  | "Electricity Savings"
  | "Residential Solar"
  | "Commercial Solar"
  | "Industrial Solar"
  | "Solar Maintenance"
  | "Government Policies"
  | "Renewable Energy"
  | "Case Studies";

export const CATEGORIES: BlogCategory[] = [
  "Solar Basics",
  "Net Metering",
  "Electricity Savings",
  "Residential Solar",
  "Commercial Solar",
  "Industrial Solar",
  "Solar Maintenance",
  "Government Policies",
  "Renewable Energy",
  "Case Studies",
];

export interface BlogFAQ { q: string; a: string }

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  date: string; // ISO
  readingTime: number; // minutes
  tags: string[];
  image: string;
  featured?: boolean;
  popular?: boolean;
  content: { heading: string; body: string }[];
  faqs?: BlogFAQ[];
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=70`;

export const POSTS: BlogPost[] = [
  {
    slug: "complete-guide-to-solar-panels-in-pakistan",
    title: "The Complete Guide to Solar Panels in Pakistan (2026)",
    metaTitle: "Complete Guide to Solar Panels in Pakistan | Sunshine Solar",
    metaDescription:
      "Everything Pakistani homeowners and businesses need to know about solar panels in 2026 — types, costs, ROI, net metering and installer selection.",
    excerpt:
      "A practical, end-to-end guide to going solar in Pakistan — from panel types and inverters to net metering, payback periods and how to pick the right installer.",
    category: "Solar Basics",
    author: "Sunshine Solar Editorial",
    date: "2026-05-20",
    readingTime: 11,
    tags: ["solar panels", "pakistan", "guide", "lahore"],
    image: img("photo-1509391366360-2e959784a276"),
    featured: true,
    popular: true,
    content: [
      {
        heading: "Why solar makes sense in Pakistan",
        body: "Pakistan averages 5–7 peak sun hours daily and grid tariffs continue to rise. A correctly sized solar system pays for itself in 2.5–4 years and produces electricity for 25+ years, making it one of the highest-return investments available to a Pakistani household or business.",
      },
      {
        heading: "Types of solar systems",
        body: "There are three system types: grid-tied (cheapest, exports surplus via net metering), hybrid (adds battery backup for load-shedding) and off-grid (battery-only, used in rural areas). For most Lahore homes and businesses we recommend grid-tied or hybrid with a small battery bank.",
      },
      {
        heading: "Tier-1 equipment matters",
        body: "Stick to Tier-1 panels (Jinko, Longi, Canadian Solar, JA Solar) and reputable inverters (Huawei, Sungrow, Solis, Growatt). Tier-1 manufacturers offer 25–30 year linear performance warranties and remain solvent long enough to honor them.",
      },
      {
        heading: "Costs and payback in 2026",
        body: "A 10 kW residential system in Lahore costs roughly PKR 1.6–2.2 million installed. At current LESCO tariffs and net metering rates, expect a payback period of 3–4 years and lifetime savings exceeding PKR 12 million.",
      },
    ],
    faqs: [
      { q: "How long do solar panels last?", a: "Tier-1 panels carry 25–30 year linear performance warranties and typically still produce 80%+ of rated output at year 25." },
      { q: "Do panels work in cloudy weather?", a: "Yes, but at reduced output — typically 10–25% of rated capacity under heavy overcast. Annual yield calculations already account for this." },
    ],
  },
  {
    slug: "how-net-metering-works-in-pakistan",
    title: "How Net Metering Works in Pakistan",
    metaTitle: "How Net Metering Works in Pakistan | Sunshine Solar",
    metaDescription:
      "Net metering lets you sell excess solar power back to LESCO, IESCO, K-Electric and other DISCOs. Here's exactly how it works and how to apply.",
    excerpt:
      "Understand how NEPRA's net metering regulation lets your solar system spin your meter backwards — and how to apply through LESCO or IESCO.",
    category: "Net Metering",
    author: "Engr. Ali Raza",
    date: "2026-05-12",
    readingTime: 7,
    tags: ["net metering", "LESCO", "IESCO", "NEPRA"],
    image: img("photo-1497435334941-8c899ee9e8e9"),
    featured: true,
    popular: true,
    content: [
      {
        heading: "What is net metering?",
        body: "Net metering is a NEPRA-regulated billing mechanism that lets solar customers export surplus electricity to the grid and receive credit at the same unit price they pay. A bidirectional meter records both import and export, and your bill reflects the net consumption.",
      },
      {
        heading: "Who is eligible?",
        body: "Any consumer with a 3-phase connection and system size between 1 kW and 1 MW can apply. The system capacity cannot exceed your sanctioned load.",
      },
      {
        heading: "The application process",
        body: "Sunshine Solar handles the entire process: feasibility report, DISCO application, AEDB licensing, bidirectional meter installation and commissioning. Typical timeline is 30–60 days from system commissioning.",
      },
    ],
    faqs: [
      { q: "Do I get cash for surplus units?", a: "No — surplus units are credited against future bills. Unused credit rolls over month to month." },
    ],
  },
  {
    slug: "10-benefits-of-installing-solar-panels",
    title: "10 Benefits of Installing Solar Panels at Home",
    metaTitle: "10 Benefits of Installing Solar Panels | Sunshine Solar",
    metaDescription:
      "From 70–80% lower electricity bills to higher property value and energy independence — here are 10 proven benefits of going solar in 2026.",
    excerpt:
      "Solar isn't just about saving money — it raises property value, hedges against tariff hikes, and gives you energy independence during load-shedding.",
    category: "Electricity Savings",
    author: "Sunshine Solar Editorial",
    date: "2026-05-05",
    readingTime: 6,
    tags: ["benefits", "savings", "roi"],
    image: img("photo-1559302504-64aae6ca6b6d"),
    featured: true,
    popular: true,
    content: [
      { heading: "1. Cut bills by 70–80%", body: "A correctly sized system eliminates most of your grid consumption during daylight hours and uses net metering credits to offset evening usage." },
      { heading: "2. Hedge against tariff hikes", body: "Grid tariffs rise 10–20% annually. Solar locks in your cost of energy for 25+ years." },
      { heading: "3. Higher property value", body: "Recent appraisals in DHA and Bahria Town show solar-equipped homes commanding 4–6% premium." },
      { heading: "4. Energy independence", body: "Hybrid systems with batteries keep critical loads running during load-shedding." },
      { heading: "5. Low maintenance", body: "Panels have no moving parts. Annual cleaning is usually the only ongoing work." },
    ],
  },
  {
    slug: "how-much-can-solar-reduce-your-electricity-bill",
    title: "How Much Can Solar Actually Reduce Your Electricity Bill?",
    metaTitle: "How Much Can Solar Reduce Your Bill? | Sunshine Solar",
    metaDescription:
      "Real numbers from Lahore households — see exactly how much you can save monthly and annually with a 5 kW, 10 kW or 15 kW solar system.",
    excerpt:
      "Real numbers from real Lahore households, with bill-by-bill comparisons for 5 kW, 10 kW and 15 kW systems.",
    category: "Electricity Savings",
    author: "Engr. Hamza Sheikh",
    date: "2026-04-28",
    readingTime: 8,
    tags: ["savings", "bill", "calculator"],
    image: img("photo-1473341304170-971dccb5ac1e"),
    popular: true,
    content: [
      { heading: "The simple math", body: "If your household uses 800 units/month and pays PKR 60/unit, your monthly bill is PKR 48,000. A 10 kW system in Lahore generates ~1,300 units/month, fully offsetting consumption and exporting surplus to the grid." },
      { heading: "Sample customer: 10 kW in Johar Town", body: "Pre-solar bill: PKR 52,000/mo. Post-solar bill: PKR 4,800/mo (only fixed charges and protection fee). Annual savings: PKR 566,400." },
    ],
  },
  {
    slug: "residential-vs-commercial-solar-systems",
    title: "Residential vs Commercial Solar Systems: What's Different?",
    metaTitle: "Residential vs Commercial Solar | Sunshine Solar",
    metaDescription:
      "Compare residential and commercial solar systems — system size, inverter type, mounting, financing and ROI differences explained.",
    excerpt:
      "System sizing, three-phase inverters, mounting structures, financing and ROI all change when you move from a home rooftop to a commercial facility.",
    category: "Commercial Solar",
    author: "Sunshine Solar Editorial",
    date: "2026-04-20",
    readingTime: 7,
    tags: ["residential", "commercial", "comparison"],
    image: img("photo-1605980776566-0486c3ac7617"),
    content: [
      { heading: "System size", body: "Residential systems range from 3–15 kW. Commercial typically starts at 15 kW and runs up to 1 MW under net metering rules." },
      { heading: "Inverters and topology", body: "Homes usually use single-phase string inverters; commercial sites use three-phase string inverters or centralized inverters with monitoring." },
    ],
  },
  {
    slug: "solar-system-maintenance-guide",
    title: "Solar System Maintenance Guide for Pakistani Conditions",
    metaTitle: "Solar Maintenance Guide for Pakistan | Sunshine Solar",
    metaDescription:
      "Keep your solar system producing peak output year after year — cleaning schedules, inverter checks, monitoring and warranty claims explained.",
    excerpt:
      "Lahore's dust and summer heat reduce panel output by 5–15% if neglected. Here's a practical maintenance schedule.",
    category: "Solar Maintenance",
    author: "Engr. Ali Raza",
    date: "2026-04-10",
    readingTime: 5,
    tags: ["maintenance", "cleaning", "monitoring"],
    image: img("photo-1545209463-e2825498edbf"),
    content: [
      { heading: "Cleaning frequency", body: "In Lahore, monthly cleaning during dust season (April–June) and quarterly cleaning the rest of the year keeps soiling losses under 3%." },
      { heading: "Inverter health checks", body: "Modern inverters self-report faults via Wi-Fi. Review monthly production graphs and compare against expected yield." },
    ],
  },
  {
    slug: "common-solar-myths-in-pakistan",
    title: "7 Common Solar Myths in Pakistan — Debunked",
    metaTitle: "Common Solar Myths in Pakistan | Sunshine Solar",
    metaDescription:
      "\"Solar doesn't work in summer\", \"panels need batteries\", \"net metering takes years\" — we debunk the most common solar myths with real data.",
    excerpt:
      "Misinformation costs Pakistani families lakhs in lost savings. We tackle the seven most damaging solar myths head-on.",
    category: "Solar Basics",
    author: "Sunshine Solar Editorial",
    date: "2026-04-01",
    readingTime: 6,
    tags: ["myths", "facts", "education"],
    image: img("photo-1466611653911-95081537e5b7"),
    content: [
      { heading: "Myth: Solar panels stop working in extreme heat", body: "Panel efficiency does drop ~0.4% per °C above 25°C, but Lahore's strong irradiance more than offsets the heat coefficient. Real-world yield stays excellent through June." },
      { heading: "Myth: You need batteries to go solar", body: "Grid-tied systems with net metering don't need batteries. The grid acts as your battery, with surplus credited and used after sunset." },
    ],
  },
  {
    slug: "is-solar-worth-it-in-2026",
    title: "Is Solar Worth It in 2026? An Honest Pakistani Analysis",
    metaTitle: "Is Solar Worth It in 2026? | Sunshine Solar",
    metaDescription:
      "With changing net metering rules and falling panel prices, is 2026 still the right year to install solar in Pakistan? An honest breakdown.",
    excerpt:
      "With changing net metering buy-back rates and falling panel prices, here's an honest 2026 analysis of solar ROI in Pakistan.",
    category: "Electricity Savings",
    author: "Engr. Hamza Sheikh",
    date: "2026-03-22",
    readingTime: 9,
    tags: ["roi", "2026", "investment"],
    image: img("photo-1508514177221-188b1cf16e9d"),
    featured: true,
    content: [
      { heading: "Equipment prices in 2026", body: "Bifacial Tier-1 panels have dropped to ~PKR 28/W and Tier-1 inverters to ~PKR 12/W. A complete installed 10 kW system in Lahore averages PKR 1.7M." },
      { heading: "Payback math", body: "Even with revised buy-back tariffs, a typical Lahore household recovers their investment in 3.2–4.1 years — faster than any other asset class available." },
    ],
  },
  {
    slug: "understanding-hybrid-solar-systems",
    title: "Understanding Hybrid Solar Systems",
    metaTitle: "Understanding Hybrid Solar Systems | Sunshine Solar",
    metaDescription:
      "Hybrid solar systems combine grid-tied savings with battery backup for load-shedding. Learn how they work and when they're worth it.",
    excerpt:
      "Hybrid systems combine grid-tied savings with battery backup for load-shedding. Here's how to decide if a hybrid is right for you.",
    category: "Solar Basics",
    author: "Engr. Ali Raza",
    date: "2026-03-15",
    readingTime: 7,
    tags: ["hybrid", "battery", "backup"],
    image: img("photo-1532601224476-15c79f2f7a51"),
    content: [
      { heading: "How a hybrid inverter works", body: "Hybrid inverters route solar power to loads first, charge batteries with surplus and export remaining to the grid. During outages, batteries seamlessly power critical loads." },
      { heading: "Battery sizing", body: "Most Lahore homes choose 5–10 kWh lithium banks to cover essential loads (fans, lights, fridge, internet) for 4–8 hours." },
    ],
  },
  {
    slug: "how-to-choose-the-right-solar-installer",
    title: "How to Choose the Right Solar Installer in Pakistan",
    metaTitle: "How to Choose a Solar Installer in Pakistan | Sunshine Solar",
    metaDescription:
      "Not all solar installers are equal. Use this 10-point checklist to avoid scams, sub-tier equipment and poor workmanship.",
    excerpt:
      "Use this 10-point checklist before signing any solar contract — covering equipment authenticity, warranty enforcement and after-sales support.",
    category: "Solar Basics",
    author: "Sunshine Solar Editorial",
    date: "2026-03-08",
    readingTime: 8,
    tags: ["installer", "checklist", "buying guide"],
    image: img("photo-1581094794329-c8112a89af12"),
    popular: true,
    content: [
      { heading: "1. Verify AEDB licensing", body: "Only AEDB-certified installers can legally process net metering. Ask for the license number and verify on aedb.org." },
      { heading: "2. Demand serial-number authenticity proof", body: "Tier-1 manufacturers provide online serial number verification. Insist on photos of every panel and inverter serial sticker." },
      { heading: "3. Read the warranty contract", body: "Performance warranty (25 yr), product warranty (12 yr) and workmanship warranty (5+ yr) should all be in writing." },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelated(slug: string, limit = 3): BlogPost[] {
  const post = getPost(slug);
  if (!post) return [];
  return POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, limit);
}
