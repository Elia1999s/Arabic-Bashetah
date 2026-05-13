"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/format";

const links = [
  { href: "/", label: "דף בית" },
  { href: "/pricing", label: "תמחור" },
  { href: "/login", label: "הרשמה" },
  { href: "/dashboard", label: "אזור תלמידים" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500 via-orange-400 to-amber-300 text-slate-950 shadow-xl shadow-fuchsia-500/30">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <div className="text-lg font-black text-slate-900">ערבית בשטח</div>
            <div className="text-xs text-slate-500">קורס פרימיום בעברית לערבית מדוברת אמיתית</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2.5 text-sm font-medium transition",
                pathname === link.href
                  ? "bg-gradient-to-l from-fuchsia-500 to-orange-400 text-white shadow-lg shadow-fuchsia-500/20"
                  : "text-slate-600 hover:bg-slate-100/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/pricing" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.02]">
          התחל עכשיו
        </Link>
      </div>
    </header>
  );
}
