import { SectionTitle } from "@/components/section-title";
import { Users, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "פאנל ניהול",
};

export default function AdminPage() {
  return (
    <div>
      <SectionTitle eyebrow="ניהול מערכת" title="ברוך הבא לפאנל הניהול" text="מכאן תוכל לנהל את המערכת, לראות מתעניינים, ולהעלות תכנים חדשים." />
      
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/admin/leads" className="glass group rounded-3xl p-8 transition-transform hover:-translate-y-1">
          <div className="mb-4 inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
            <Users className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">מתעניינים ולידים</h3>
          <p className="mt-2 text-slate-600">צפה ברשימת האנשים שהשאירו פרטים בדף ההרשמה.</p>
        </Link>
        
        <Link href="/admin/upload-video" className="glass group rounded-3xl p-8 transition-transform hover:-translate-y-1">
          <div className="mb-4 inline-flex rounded-2xl bg-cyan-100 p-4 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
            <BookOpen className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">העלאת וידאו ושיעורים</h3>
          <p className="mt-2 text-slate-600">העלה וידאו חדש למערכת והוסף שיעור לקורס.</p>
        </Link>

        <Link href="/admin/upload-photo" className="glass group rounded-3xl p-8 transition-transform hover:-translate-y-1">
          <div className="mb-4 inline-flex rounded-2xl bg-fuchsia-100 p-4 text-fuchsia-600 group-hover:bg-fuchsia-500 group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">תמונת מורה</h3>
          <p className="mt-2 text-slate-600">העלה את התמונה שלך שתוצג בעמוד הראשי.</p>
        </Link>
      </div>
    </div>
  );
}
