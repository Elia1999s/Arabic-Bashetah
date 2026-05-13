"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { cn } from "@/lib/format";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-slate-200 bg-white/90 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl md:bottom-6 md:left-6 md:right-auto md:max-w-md md:rounded-3xl md:border md:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600">
            <Cookie className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900">אנחנו משתמשים בעוגיות (Cookies)</h4>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              כדי להבטיח שתקבלו את החוויה הטובה ביותר באתר שלנו. בהמשך הגלישה באתר, אתם מסכימים ל
              <Link href="/privacy" className="font-medium text-fuchsia-600 hover:underline">
                מדיניות הפרטיות
              </Link>{" "}
              שלנו.
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="shrink-0 text-slate-400 hover:text-slate-600"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-4 flex gap-3">
        <button
          onClick={acceptCookies}
          className="w-full rounded-xl bg-slate-900 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
        >
          אני מסכים/ה
        </button>
      </div>
    </div>
  );
}
