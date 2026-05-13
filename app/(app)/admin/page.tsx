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
      
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Link href="/admin/leads" className="glass group rounded-3xl p-8 transition-transform hover:-translate-y-1">
          <div className="mb-4 inline-flex rounded-2xl bg-emerald-500/20 p-4 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
            <Users className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold">מתעניינים ולידים</h3>
          <p className="mt-2 text-slate-300">צפה ברשימת האנשים שהשאירו פרטים בדף ההרשמה.</p>
        </Link>
        
        <Link href="/admin/upload-video" className="glass group rounded-3xl p-8 transition-transform hover:-translate-y-1">
          <div className="mb-4 inline-flex rounded-2xl bg-cyan-500/20 p-4 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
            <BookOpen className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold">העלאת וידאו ושיעורים</h3>
          <p className="mt-2 text-slate-300">העלה וידאו חדש למערכת והוסף שיעור לקורס.</p>
        </Link>
      </div>
    </div>
  );
}
