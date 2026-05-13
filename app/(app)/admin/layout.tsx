import Link from "next/link";
import { Users, Video, LayoutDashboard } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen pt-20">
      <aside className="w-64 border-l border-slate-200 bg-white/60 p-6 hidden md:block">
        <h2 className="mb-6 text-xl font-bold text-slate-900">פאנל ניהול</h2>
        <nav className="flex flex-col gap-2">
          <Link href="/admin" className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors text-slate-700 hover:bg-slate-100/80">
            <LayoutDashboard className="h-5 w-5 text-fuchsia-500" />
            ראשי
          </Link>
          <Link href="/admin/leads" className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors text-slate-700 hover:bg-slate-100/80">
            <Users className="h-5 w-5 text-emerald-600" />
            מתעניינים (לידים)
          </Link>
          <Link href="/admin/upload-video" className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors text-slate-700 hover:bg-slate-100/80">
            <Video className="h-5 w-5 text-cyan-600" />
            העלאת וידאו
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 md:p-10">
        {children}
      </main>
    </div>
  );
}
