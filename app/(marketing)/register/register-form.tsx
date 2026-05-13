"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

export function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("משהו השתבש, אנא נסה שוב");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "שגיאה בחיבור לשרת");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="glass rounded-[30px] p-8 text-center animate-in fade-in zoom-in duration-500">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-slate-900">תודה על ההרשמה!</h3>
        <p className="text-slate-600">הפרטים שלך נקלטו בהצלחה. ניצור איתך קשר בהקדם.</p>
      </div>
    );
  }

  return (
    <div className="glass rounded-[30px] p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="fullName">שם מלא</label>
          <input 
            required
            id="fullName"
            name="fullName"
            type="text" 
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 transition-colors"
            placeholder="ישראל ישראלי"
          />
        </div>
        
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">אימייל</label>
          <input 
            required
            id="email"
            name="email"
            type="email" 
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 transition-colors"
            placeholder="israel@example.com"
            dir="ltr"
          />
        </div>
        
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="phone">טלפון</label>
          <input 
            required
            id="phone"
            name="phone"
            type="tel" 
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 transition-colors"
            placeholder="050-0000000"
            dir="ltr"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="notes">הערות (אופציונלי)</label>
          <textarea 
            id="notes"
            name="notes"
            rows={3}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 transition-colors"
            placeholder="אשמח לדעת עוד על מועדי הקורס..."
          />
        </div>

        {error && (
          <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-fuchsia-500 to-orange-400 px-4 py-3.5 font-bold text-white transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
        >
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "שלח פרטים"}
        </button>
      </form>
    </div>
  );
}
