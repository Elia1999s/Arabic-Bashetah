export default function LoginPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass rounded-[30px] p-8">
          <h1 className="text-3xl font-black text-slate-900">התחברות לאזור האישי</h1>
          <p className="mt-3 leading-7 text-slate-600">הזן את הפרטים שלך כדי להתחבר או ליצור חשבון חדש ולקבל גישה לכל תכני הקורס.</p>
          <div className="mt-8 grid gap-4">
            <input placeholder="שם מלא" className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400" />
            <input placeholder="אימייל" className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400" />
            <input type="password" placeholder="סיסמה" className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400" />
            <button className="rounded-2xl bg-gradient-to-l from-fuchsia-500 to-orange-400 px-5 py-4 font-bold text-white shadow-lg shadow-fuchsia-500/20 hover:scale-[1.02] transition-transform">צור חשבון / התחבר</button>
          </div>
        </div>
        <div className="glass rounded-[30px] p-8">
          <div className="text-sm text-slate-500">הלימוד בקצב שלך</div>
          <h2 className="mt-2 text-2xl font-black text-slate-900">למה ללמוד ערבית איתנו?</h2>
          <div className="mt-6 grid gap-4">
            {["גישה לכל החיים לכל התכנים","מאות שעות וידאו באיכות גבוהה","מערכת חכמה למעקב אחר התקדמות אישית","תרגול והאזנה לדיבור בשטח","תמיכה מלאה לאורך כל הדרך","מותאם במיוחד לדוברי עברית"].map((line) => (
              <div key={line} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-700 shadow-sm flex items-center gap-3">
                 <div className="h-2 w-2 rounded-full bg-emerald-500" />
                 {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
