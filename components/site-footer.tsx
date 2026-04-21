import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#12061d]/60">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-2 md:px-8">
        <div>
          <div className="text-lg font-black">{siteConfig.name}</div>
          <div className="mt-2 text-sm text-slate-200/65">מערכת קורסים בנויה ל־Next.js, Supabase, Bunny Stream, Stripe ו־Vercel.</div>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100/78">UI יוקרתי</div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100/78">מוכן ל־Hosting</div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100/78">מותאם ל־300 שיעורים</div>
        </div>
      </div>
    </footer>
  );
}
