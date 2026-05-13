"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/format";

type PlanCardProps = {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

export function PlanCard({ name, subtitle, price, features, cta, highlight }: PlanCardProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: "mock_price_id", email: "" })
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("glass rounded-[30px] p-7", highlight && "ring-1 ring-fuchsia-500/30")}>
      <div className={cn("inline-flex rounded-full px-3 py-1 text-xs font-bold", highlight ? "bg-fuchsia-100 text-fuchsia-700" : "bg-slate-100 text-slate-700")}>
        {highlight ? "המסלול המרכזי" : "מסלול פריסה"}
      </div>
      <div className="mt-4 text-sm text-slate-500">{subtitle}</div>
      <div className="mt-2 text-3xl font-black md:text-4xl text-slate-900">{name}</div>
      <div className="mt-4 text-5xl font-black text-slate-900">{price}</div>
      <div className="mt-6 grid gap-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3">
            <Check className="mt-0.5 h-5 w-5 text-emerald-500" />
            <span className="text-slate-700">{feature}</span>
          </div>
        ))}
      </div>
      <button 
        onClick={handleCheckout}
        disabled={loading}
        className={cn("mt-6 w-full flex justify-center items-center gap-2 rounded-2xl px-5 py-4 text-base font-bold transition hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0", highlight ? "bg-gradient-to-l from-fuchsia-500 to-orange-400 text-white shadow-lg shadow-fuchsia-500/20" : "bg-slate-900 text-white") }
      >
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : cta}
      </button>
    </div>
  );
}
