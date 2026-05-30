import { useMemo, useState } from "react";
import { Calculator, Send, Sparkles } from "lucide-react";

type PropertyType = "Home" | "Business" | "Industrial";

function fmtPKR(n: number) {
  return "Rs " + Math.round(n).toLocaleString("en-PK");
}

export function SolarCalculator() {
  const [bill, setBill] = useState(45000);
  const [type, setType] = useState<PropertyType>("Home");
  const [city, setCity] = useState("Lahore");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { systemKw, savings, payback, est } = useMemo(() => {
    // Rough heuristic: PKR/kWh ~ 60. kWh = bill/60. kW system ≈ kWh / (avg 4 sun-hours * 30)
    const kWh = bill / 60;
    let factor = 1;
    if (type === "Business") factor = 1.1;
    if (type === "Industrial") factor = 1.25;
    const systemKw = Math.max(3, Math.round((kWh / 120) * factor));
    const savings = bill * 0.75;
    const costPerKw = type === "Industrial" ? 165000 : type === "Business" ? 175000 : 185000;
    const totalCost = systemKw * costPerKw;
    const payback = Math.max(2.2, +(totalCost / (savings * 12)).toFixed(1));
    return { systemKw, savings, payback, est: totalCost };
  }, [bill, type]);

  return (
    <div id="calculator" className="relative">
      <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">
        {/* Inputs */}
        <div className="lg:col-span-3 rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-soft">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber/10 text-foreground">
              <Calculator className="h-5 w-5" />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Step 01 · Solar Sizing</p>
              <h3 className="font-display text-xl font-semibold">Instant Solar Savings Calculator</h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className="flex items-baseline justify-between mb-2">
                <span className="text-sm font-medium">Monthly electricity bill</span>
                <span className="font-mono text-sm text-foreground">{fmtPKR(bill)}</span>
              </label>
              <input
                type="range"
                min={5000}
                max={500000}
                step={1000}
                value={bill}
                onChange={(e) => setBill(+e.target.value)}
                className="w-full accent-[color:var(--amber)]"
              />
              <div className="flex justify-between font-mono text-[10px] text-muted-foreground mt-1">
                <span>Rs 5k</span><span>Rs 500k</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Property type</label>
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-muted">
                {(["Home", "Business", "Industrial"] as PropertyType[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`text-sm py-2 rounded-lg transition ${
                      type === t ? "bg-card shadow-soft text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">City / area</label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full h-11 px-4 rounded-xl bg-muted border border-transparent focus:border-amber ring-amber-focus text-sm"
                placeholder="e.g. DHA, Lahore"
              />
            </div>
          </div>

          <div className="mt-7 grid sm:grid-cols-3 gap-3">
            <Stat label="System size" value={`${systemKw} kW`} accent />
            <Stat label="Est. monthly savings" value={fmtPKR(savings)} />
            <Stat label="Payback period" value={`${payback} yrs`} />
          </div>
        </div>

        {/* Lead capture */}
        <div className="lg:col-span-2 rounded-3xl bg-foreground text-primary-foreground p-6 sm:p-8 shadow-elevated relative overflow-hidden">
          <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-amber-gradient opacity-40 blur-2xl" />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">Step 02 · Free Report</p>
          <h3 className="font-display text-2xl font-semibold mt-1">Get your detailed report on WhatsApp</h3>
          <p className="text-sm text-primary-foreground/70 mt-2">
            We'll send a personalised solar proposal, system layout and bill-saving breakdown — usually within 24 hours.
          </p>

          {submitted ? (
            <div className="mt-6 rounded-2xl bg-card/10 border border-card/15 p-5">
              <div className="flex items-center gap-2 text-amber">
                <Sparkles className="h-5 w-5" />
                <span className="font-display font-semibold">Report on the way</span>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-2">
                Thank you {name || "there"}. Our energy advisor will WhatsApp you at <span className="font-mono text-amber">{phone}</span> shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-6 space-y-3"
            >
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full h-11 px-4 rounded-xl bg-card/10 border border-card/15 placeholder:text-primary-foreground/40 text-sm ring-amber-focus"
              />
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="WhatsApp number (e.g. 03xx-xxxxxxx)"
                className="w-full h-11 px-4 rounded-xl bg-card/10 border border-card/15 placeholder:text-primary-foreground/40 text-sm ring-amber-focus"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  readOnly
                  value={city}
                  className="w-full h-11 px-4 rounded-xl bg-card/5 border border-card/10 text-sm font-mono text-primary-foreground/70"
                />
                <input
                  readOnly
                  value={fmtPKR(bill)}
                  className="w-full h-11 px-4 rounded-xl bg-card/5 border border-card/10 text-sm font-mono text-primary-foreground/70"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-amber-gradient text-foreground font-semibold text-sm hover:brightness-105 transition"
              >
                <Send className="h-4 w-4" /> Send My Free Solar Report
              </button>
              <p className="font-mono text-[10px] text-primary-foreground/50 text-center pt-1">
                Est. system cost: <span className="text-amber">{fmtPKR(est)}</span> · No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-2xl p-4 border ${accent ? "bg-amber/10 border-amber/30" : "bg-muted border-border"}`}>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="font-display text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
}
