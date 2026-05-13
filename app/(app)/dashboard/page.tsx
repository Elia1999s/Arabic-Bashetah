import Link from "next/link";
import { lessons, modules } from "@/lib/site";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-sm text-slate-500">אזור תלמידים</div>
          <h1 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">שלום אורח, ברוך הבא למערכת</h1>
          <p className="mt-3 max-w-3xl text-slate-600">כאן התלמיד רואה קטלוג מסודר של ספריית הקורס, מצב גישה, התקדמות אישית, ורשימת שיעורים פתוחים ונעולים.</p>
        </div>
        <Link href="/lessons/natural-greetings" className="rounded-2xl bg-slate-900 px-5 py-4 font-bold text-white transition hover:bg-slate-800">פתח שיעור</Link>
      </div>

      <div className="grid gap-6 xl:grid-cols-[320px,1fr]">
        <div className="glass rounded-[30px] p-5">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="text-sm text-emerald-700 font-medium">סטטוס גישה</div>
            <div className="mt-2 text-xl font-black text-slate-900">דמו פעיל</div>
            <div className="mt-2 text-sm text-slate-600">בגרסה האמיתית הסטטוס ייקבע לפי רכישה חד פעמית או מנוי בהתחייבות.</div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm text-slate-500">התקדמות כללית</div>
            <div className="mt-3 h-3 rounded-full bg-slate-100">
              <div className="h-3 w-[12%] rounded-full bg-gradient-to-l from-fuchsia-500 to-orange-400" />
            </div>
            <div className="mt-2 text-sm text-slate-600">12% הושלם</div>
          </div>

          <div className="mt-5">
            <div className="mb-3 text-sm text-slate-500">מודולים</div>
            <div className="grid gap-2">
              {modules.map((module, idx) => (
                <button key={module.title} className={`rounded-2xl border px-4 py-4 text-right transition hover:scale-[1.01] ${idx === 0 ? "border-fuchsia-200 bg-fuchsia-50" : "border-slate-200 bg-white"}`}>
                  <div className={`font-semibold ${idx === 0 ? "text-fuchsia-900" : "text-slate-900"}`}>{module.title}</div>
                  <div className={`mt-1 text-xs ${idx === 0 ? "text-fuchsia-700" : "text-slate-500"}`}>{module.count} שיעורים</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="glass rounded-[30px] p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-500">קטלוג שיעורים</div>
              <div className="text-2xl font-black text-slate-900">ספריית קורסים</div>
            </div>
            <div className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm text-slate-600 font-medium">דמו</div>
          </div>
          <div className="grid gap-4">
            {lessons.map((lesson) => (
              <div key={lesson.slug} className="grid items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr,120px,150px]">
                <div>
                  <div className="font-semibold text-slate-900">{lesson.title}</div>
                  <div className="mt-1 text-sm text-slate-500">{lesson.summary}</div>
                </div>
                <div className="text-sm text-slate-600">{lesson.duration}</div>
                <Link href={`/lessons/${lesson.slug}`} className="rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800">פתח שיעור</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
