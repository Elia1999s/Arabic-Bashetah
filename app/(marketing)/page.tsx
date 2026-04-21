import Link from "next/link";
import { Crown, CreditCard, GraduationCap, Layers3, Mail, Phone, Star } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { VideoPlaceholder } from "@/components/video-placeholder";
import { modules, siteConfig } from "@/lib/site";

const stats = [
  { value: "300+", label: "שיעורים מתוכננים" },
  { value: "12 דק׳", label: "ממוצע לשיעור" },
  { value: "60+", label: "שעות תוכן" },
  { value: "100%", label: "עברית ברורה" }
];

export default function HomePage() {
  const totalLessons = modules.reduce((sum, module) => sum + module.count, 0);

  return (
    <main>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/25 bg-white/10 px-4 py-2 text-sm text-fuchsia-100 backdrop-blur-xl">
            <Crown className="h-4 w-4" />
            מוצר פרימיום במחיר פרימיום — עם חוויית אתר בהתאם
          </div>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            לדבר ערבית <span className="bg-gradient-to-l from-fuchsia-300 via-orange-200 to-cyan-200 bg-clip-text text-transparent">ברמה אחרת</span>
            <br className="hidden md:block" />
            עם קורס שבנוי כמו מערכת אמיתית
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100/85 md:text-xl">
            {siteConfig.name} הוא מותג לימוד מלא: דף בית מרשים, מערכת תלמידים מקצועית, לוגיקת רכישה, נעילת תוכן, ספריית וידאו עצומה וחוויית משתמש שמתאימה למוצר פרימיום.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/pricing" className="rounded-2xl bg-gradient-to-l from-fuchsia-500 to-orange-400 px-6 py-4 text-base font-bold text-white shadow-xl shadow-fuchsia-500/25 transition hover:-translate-y-0.5">
              צפה במסלולים
            </Link>
            <Link href="/lessons/natural-greetings" className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/15">
              צפה בדוגמת שיעור
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-[30px] p-4">
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="mt-1 text-slate-100/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-[30px] p-4">
          <div className="rounded-[24px] border border-white/10 bg-slate-950/45 p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-300/70">תצוגה מקדימה</div>
                <div className="text-xl font-bold">אזור תלמידים – ערבית בשטח</div>
              </div>
              <div className="rounded-xl bg-emerald-400/15 px-3 py-1 text-sm text-emerald-300">Premium</div>
            </div>
            <div className="grid gap-4 md:grid-cols-[250px,1fr]">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-4 text-sm text-slate-300/70">ספריית מודולים</div>
                <div className="grid gap-2">
                  {modules.map((module) => (
                    <div key={module.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-3">
                      <div className="font-semibold">{module.title}</div>
                      <div className="mt-1 text-xs text-slate-300/65">{module.count} שיעורים</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/15 via-slate-900/80 to-cyan-500/10 p-5">
                <VideoPlaceholder title="נגן שיעור מקצועי + תמלול + קבצים" subtitle="מערכת שנראית ברמה שמצדיקה קורס יקר, עם הרבה מאוד תוכן ותחושת מוצר חזקה." />
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <div className="glass rounded-[26px] p-4">
                    <div className="text-xs text-slate-200/70">מחיר מלא</div>
                    <div className="mt-2 text-2xl font-black">₪2,799</div>
                  </div>
                  <div className="glass rounded-[26px] p-4">
                    <div className="text-xs text-slate-200/70">היקף</div>
                    <div className="mt-2 text-xl font-black">{totalLessons}+ שיעורים</div>
                  </div>
                  <div className="glass rounded-[26px] p-4">
                    <div className="text-xs text-slate-200/70">גישה</div>
                    <div className="mt-2 text-xl font-black text-emerald-300">מיידית</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-16">
        <SectionTitle eyebrow="נבנה למוצר יקר" title="מי שמשלם הרבה כסף צריך לראות אתר שנראה בהתאם" text="עיצוב צבעוני, עמוק, נקי, עם שכבות רקע, כרטיסים מזכוכית, היררכיה ברורה, טיפוגרפיה טובה וחוויית משתמש שמרגישה מותג אמיתי." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { icon: Layers3, title: "UI מושקע", text: "כפתורים, צבעים, אפקטים, עומק חזותי ומראה פרימיום." },
            { icon: CreditCard, title: "לוגיקה עסקית", text: "רכישה מלאה או תוכנית תשלומים בהתחייבות ללא עצירה באמצע." },
            { icon: GraduationCap, title: "מערכת קורסים אמיתית", text: "300+ שיעורים, התקדמות, נעילת תוכן, נגן וידאו וחוויית תלמיד." }
          ].map((item) => (
            <div key={item.title} className="glass rounded-[30px] p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500/40 to-orange-400/40 text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-100/78">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <div className="glass grid gap-6 rounded-[30px] p-7 md:grid-cols-[1.1fr,0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
              <Star className="h-3.5 w-3.5" />
              מה מקבלים בפועל
            </div>
            <h3 className="mt-4 text-3xl font-black">ספריית תוכן עצומה, מסודרת, ונעימה ללמידה</h3>
            <p className="mt-4 leading-8 text-slate-100/80">
              אם אתה בונה קורס של בערך 300 שיעורים, האתר חייב לדעת לנהל עומס תוכן: חלוקה למודולים, חיפוש, סינון, מצב התקדמות, ותצוגה חכמה של שיעורים פתוחים ונעולים.
            </p>
          </div>
          <div className="grid gap-3">
            {["קטלוג קורסים ומודולים","נגן וידאו מוגן","תמלול וקבצים לכל שיעור","התקדמות אישית","אזור רכישות וחשבונית","דף בית שיווקי פתוח לאינטרנט"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-4 text-slate-100/85">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <div className="glass grid gap-6 rounded-[30px] p-6 md:grid-cols-[1fr,1fr]">
          <div>
            <div className="text-sm text-slate-200/65">פרטי קשר באתר</div>
            <h3 className="mt-2 text-2xl font-black">יצירת קשר ומכירה</h3>
            <p className="mt-3 leading-7 text-slate-100/78">האתר כולל מקום ברור לפרטי הקשר שלך, כדי שמי שמתרשם יוכל להגיע אליך גם ישירות.</p>
          </div>
          <div className="grid gap-3">
            <a href={`tel:${siteConfig.supportPhone}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-4">
              <Phone className="h-5 w-5 text-emerald-300" />
              <span className="font-medium">{siteConfig.supportPhone}</span>
            </a>
            <a href={`mailto:${siteConfig.supportEmail}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-4">
              <Mail className="h-5 w-5 text-cyan-300" />
              <span className="font-medium">{siteConfig.supportEmail}</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
