export default function LoginPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass rounded-[30px] p-8">
          <h1 className="text-3xl font-black">הרשמה ופתיחת חשבון</h1>
          <p className="mt-3 leading-7 text-slate-100/80">במערכת האמיתית זה יתחבר ל־Supabase Auth. המשתמש יירשם, ישלם, ורק אז יקבל גישה מלאה לקורס.</p>
          <div className="mt-8 grid gap-4">
            <input placeholder="שם מלא" className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-4 outline-none placeholder:text-slate-400" />
            <input placeholder="אימייל" className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-4 outline-none placeholder:text-slate-400" />
            <input type="password" placeholder="סיסמה" className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-4 outline-none placeholder:text-slate-400" />
            <button className="rounded-2xl bg-gradient-to-l from-fuchsia-500 to-orange-400 px-5 py-4 font-bold text-white">צור חשבון</button>
          </div>
        </div>
        <div className="glass rounded-[30px] p-8">
          <div className="text-sm text-slate-100/65">Backend / Frontend / Hosting</div>
          <h2 className="mt-2 text-2xl font-black">איך האתר עולה לאינטרנט באמת</h2>
          <div className="mt-6 grid gap-4">
            {["Frontend: Next.js עם Tailwind","Backend: Supabase או API Routes","Database: משתמשים, שיעורים, רכישות והתקדמות","Video Hosting: Bunny Stream","Payments: Stripe + PayPal","Hosting: Vercel + דומיין משלך"].map((line) => (
              <div key={line} className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-4 text-slate-100/85">{line}</div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
