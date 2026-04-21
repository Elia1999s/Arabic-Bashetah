import { PlanCard } from "@/components/plan-card";
import { SectionTitle } from "@/components/section-title";
import { planCards } from "@/lib/site";

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionTitle eyebrow="מסלולים" title="תמחור מעודכן לקורס פרימיום גדול" text="המחיר המלא הוא ₪2,799. התוכנית החודשית נשארת מסלול פריסה עם התחייבות, כדי שלא תהיה עצירה באמצע התקופה." />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {planCards.map((plan) => (
          <PlanCard key={plan.key} name={plan.name} subtitle={plan.subtitle} price={plan.price} features={plan.features} cta={plan.key === "one_time" ? "לקנייה מלאה" : "התחל בתוכנית חודשית"} highlight={plan.highlight} />
        ))}
      </div>
    </main>
  );
}
