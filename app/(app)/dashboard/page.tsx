import Link from "next/link";
import { lessons, modules } from "@/lib/site";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-sm text-slate-200/65">אזור תלמידים</div>
          <h1 className="mt-2 text-3xl font-black md:text-4xl">שלום אורח, ברוך הבא למערכת</h1>
          <p className="mt-3 max-w-3xl text-slate-100/75">כאן התלמיד רואה קטלוג מסודר של ספריית הקורס, מצב גישה, התקדמות אישית, ורשימת שיעורים פתוחים ונעולים.</p>
        </div>
        <Link href="/lessons/natural-greetings" className="rounded-2xl bg-white px-5 py-4 font-bold text-slate-950">פתח שיעור</Link>
      </div>

      <div className="grid gap-6 xl:grid-cols-[320px,1fr]">
        <div className="glass rounded-[30px] p-5">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
            <div className="text-sm text-emerald-300">סטטוס גישה</div>
            <div className="mt-2 text-xl font-black">דמו פעיל</div>
            <div className="mt-2 text-sm text-slate-100/75">בגרסה האמיתית הסטטוס ייקבע לפי רכישה חד פעמית או מנוי בהתחייבות.</div>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/35 p-4">
            <div className="text-sm text-slate-200/65">התקדמות כללית</div>
            <div className="mt-3 h-3 rounded-full bg-white/10">
              <div className="h-3 w-[12%] rounded-full bg-gradient-to-l from-fuchsia-500 to-orange-400" />
            </div>
            <div className="mt-2 text-sm text-slate-100/75">12% הושלם</div>
          </div>

          <div className="mt-5">
            <div className="mb-3 text-sm text-slate-200/65">מודולים</div>
            <div className="grid gap-2">
              {modules.map((module, idx) => (
                <button key={module.title} className={`rounded-2xl border px-4 py-4 text-right ${idx === 0 ? "border-fuchsia-400/30 bg-fuchsia-400/10" : "border-white/10 bg-white/5"}`}>
                  <div className="font-semibold">{module.title}</div>
                  <div className="mt-1 text-xs text-slate-100/60">{module.count} שיעורים</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="glass rounded-[30px] p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-200/65">קטלוג שיעורים</div>
              <div className="text-2xl font-black">ספריית קורסים</div>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100/70">דמו</div>
          </div>
          <div className="grid gap-4">
            {lessons.map((lesson) => (
              <div key={lesson.slug} className="grid items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/35 p-4 md:grid-cols-[1fr,120px,150px]">
                <div>
                  <div className="font-semibold">{lesson.title}</div>
                  <div className="mt-1 text-sm text-slate-100/60">{lesson.summary}</div>
                </div>
                <div className="text-sm text-slate-200/65">{lesson.duration}</div>
                <Link href={`/lessons/${lesson.slug}`} className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950">פתח שיעור</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
