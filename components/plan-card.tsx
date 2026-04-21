import { Check } from "lucide-react";
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
  return (
    <div className={cn("glass rounded-[30px] p-7", highlight && "ring-1 ring-fuchsia-400/35")}>
      <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/90">
        {highlight ? "המסלול המרכזי" : "מסלול פריסה"}
      </div>
      <div className="mt-4 text-sm text-slate-200/70">{subtitle}</div>
      <div className="mt-2 text-3xl font-black md:text-4xl">{name}</div>
      <div className="mt-4 text-5xl font-black">{price}</div>
      <div className="mt-6 grid gap-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3 rounded-2xl bg-slate-950/35 px-4 py-3">
            <Check className="mt-0.5 h-5 w-5 text-emerald-300" />
            <span className="text-slate-100/85">{feature}</span>
          </div>
        ))}
      </div>
      <button className={cn("mt-6 w-full rounded-2xl px-5 py-4 text-base font-bold transition hover:-translate-y-0.5", highlight ? "bg-gradient-to-l from-fuchsia-500 to-orange-400 text-white" : "bg-white text-slate-950") }>
        {cta}
      </button>
    </div>
  );
}
