import { notFound } from "next/navigation";
import { Check, Headphones } from "lucide-react";
import { lessons } from "@/lib/site";
import { VideoPlaceholder } from "@/components/video-placeholder";

type LessonPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = lessons.find((item) => item.slug === slug);

  if (!lesson) notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <div className="grid gap-6 xl:grid-cols-[1fr,360px]">
        <div className="glass rounded-[30px] p-6">
          <div className="text-sm text-slate-200/65">שיעור לדוגמה</div>
          <h1 className="mt-2 text-3xl font-black">{lesson.title}</h1>
          <div className="mt-6">
            <VideoPlaceholder title="נגן וידאו מקצועי יופיע כאן" subtitle="בגרסה האמיתית נחבר את זה ל־Bunny Stream. שם תעלה את כל הסרטונים שלך ותקבל נגן מהיר, מקצועי ומוגן יותר." />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="glass rounded-[26px] p-4"><div className="text-sm text-slate-200/65">משך שיעור</div><div className="mt-2 text-xl font-bold">{lesson.duration}</div></div>
            <div className="glass rounded-[26px] p-4"><div className="text-sm text-slate-200/65">סוג תוכן</div><div className="mt-2 text-xl font-bold">וידאו + תמלול</div></div>
            <div className="glass rounded-[26px] p-4"><div className="text-sm text-slate-200/65">מצב</div><div className="mt-2 text-xl font-bold text-emerald-300">{lesson.publicPreview ? "פתוח" : "לרוכשים בלבד"}</div></div>
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/35 p-5">
            <div className="text-lg font-bold">מה לומדים בשיעור הזה</div>
            <ul className="mt-4 grid gap-3 text-slate-100/80">
              <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 text-emerald-300" />ברכות בסיסיות שנשמעות טבעי</li>
              <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 text-emerald-300" />תגובות קצרות שאנשים באמת אומרים</li>
              <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 text-emerald-300" />מעבר מספר לימוד לדיבור אמיתי</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="glass rounded-[30px] p-6">
            <div className="text-sm text-slate-200/65">פעולות</div>
            <div className="mt-4 grid gap-3">
              <button className="rounded-2xl bg-gradient-to-l from-fuchsia-500 to-orange-400 px-5 py-4 font-bold text-white">סמן כהושלם</button>
              <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-semibold">הורד PDF</button>
              <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-semibold">לשיעור הבא</button>
            </div>
          </div>
          <div className="glass rounded-[30px] p-6">
            <div className="flex items-center gap-3"><Headphones className="h-5 w-5 text-cyan-300" /><div className="text-lg font-bold">מה עוד יהיה במערכת האמיתית</div></div>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-100/78">
              <p>חיפוש בין 300 שיעורים, פילטרים לפי רמה, דפי PDF, תמלול, וחיווי מדויק של מה נשאר ללמוד.</p>
              <p>אפשר גם אזור ניהול שבו אתה מעלה סרטון, בוחר מודול, וכותב שם שיעור בלי לגעת בקוד.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
