import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How much can I save with solar?", a: "Most Sunshine Solar customers cut their monthly electricity bills by 70–80%. Exact savings depend on system size, your usage pattern and net metering tariff." },
  { q: "What system size do I need?", a: "We use AI-powered sizing based on your last 6–12 months of bills, roof area and load profile. Typical homes need 5–10 kW, commercial 15–50 kW, industrial 50 kW+." },
  { q: "How long does installation take?", a: "Residential installations are usually completed in 3–5 days. Commercial and industrial timelines range from 1 to 4 weeks depending on system size and structural work." },
  { q: "Do you handle net metering?", a: "Yes — we handle the full LESCO / IESCO net metering application, documentation and bidirectional meter installation on your behalf." },
  { q: "What equipment do you use?", a: "Only Tier-1 panels (Jinko, Longi, Canadian Solar) and inverters (Huawei, Solis, Growatt, Sungrow). Every unit ships with serial-number authenticity verification." },
  { q: "Is solar worth it in Lahore?", a: "Lahore averages 5+ peak sun hours daily. With current grid tariffs, most systems pay for themselves in 2.5–4 years and continue producing for 25+ years." },
  { q: "Do you provide maintenance?", a: "Yes. Every installation includes 24/7 remote monitoring, annual cleaning visits and a dedicated after-sales WhatsApp line." },
  { q: "Can I add batteries later?", a: "Absolutely. All our hybrid inverters are battery-ready. You can start with grid-tied and add lithium storage when load-shedding or pricing changes." },
  { q: "How do YouTube project videos help verify work?", a: "Every featured project on our channel shows real installations with client testimonials, system specs and on-site footage — so you can verify our work before signing up." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-3xl bg-card border border-border overflow-hidden">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-muted/50 transition"
            >
              <span className="font-display text-base sm:text-lg font-semibold">{f.q}</span>
              <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-border transition ${isOpen ? "bg-amber-gradient" : "bg-card"}`}>
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 -mt-1 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
