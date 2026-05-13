"use client";

import { useState } from "react";
import { Upload, Link as LinkIcon, Check, Plus } from "lucide-react";

export default function UploadVideoPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-4xl animate-in fade-in zoom-in duration-500">
      <h1 className="text-3xl font-black text-slate-900 mb-2">העלאת וידאו והוספת שיעור</h1>
      <p className="text-slate-600 mb-8">כאן תוכל להוסיף שיעורים חדשים לקורס. אנחנו משתמשים ב-Bunny.net (או Vimeo) כדי לאחסן את הסרטונים בצורה מאובטחת, כך שרק משלמים יכולים לצפות.</p>

      <div className="grid gap-8 md:grid-cols-[1fr,300px]">
        <div className="glass rounded-[30px] p-8">
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">כותרת השיעור</label>
              <input required placeholder="למשל: ברכות טבעיות בערבית מדוברת" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">קישור לוידאו (מ-Bunny.net או Vimeo)</label>
              <div className="relative">
                <LinkIcon className="absolute right-4 top-3.5 h-5 w-5 text-slate-400" />
                <input required placeholder="https://video.bunnycdn.com/..." className="w-full rounded-2xl border border-slate-200 bg-white pr-11 pl-4 py-3 outline-none text-left focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400" dir="ltr" />
              </div>
              <p className="text-xs text-slate-500 mt-2">העתק את הקישור מהאזור האישי שלך באתר שבו העלית את הוידאו.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">משך השיעור (דקות)</label>
                <input required type="number" placeholder="למשל: 12" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">שיוך למודול</label>
                <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400">
                  <option>מודול 1: יסודות</option>
                  <option>מודול 2: שיחות רחוב</option>
                  <option>מודול 3: מתקדם</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">תקציר השיעור</label>
              <textarea rows={4} placeholder="מה התלמידים ילמדו בשיעור הזה?" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 resize-none"></textarea>
            </div>

            <button disabled={loading} className="mt-2 w-full rounded-2xl bg-gradient-to-l from-fuchsia-500 to-orange-400 py-4 font-bold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:-translate-y-0.5 flex justify-center items-center gap-2">
              {loading ? (
                "שומר נתונים..."
              ) : success ? (
                <>
                  <Check className="h-5 w-5" />
                  השיעור נשמר בהצלחה!
                </>
              ) : (
                <>
                  <Plus className="h-5 w-5" />
                  הוסף שיעור לקורס
                </>
              )}
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-4">
          <div className="glass rounded-[30px] p-6">
            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Upload className="h-5 w-5 text-emerald-500" />
              איך מעלים וידאו?
            </h3>
            <ol className="text-sm text-slate-600 space-y-3 mt-4 list-decimal list-inside">
              <li>היכנס לחשבון שלך ב-Vimeo או ב-Bunny.net.</li>
              <li>לחץ על Upload והעלה את קובץ הוידאו מהמחשב.</li>
              <li>וודא שההגדרות הן פרטיות (Private / Hidden) כך שרק מי שבאתר יוכל לצפות.</li>
              <li>העתק את כתובת הוידאו והדבק אותה כאן בטופס.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
