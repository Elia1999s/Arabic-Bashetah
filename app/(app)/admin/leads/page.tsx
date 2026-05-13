import { SectionTitle } from "@/components/section-title";
import { createClient } from "@supabase/supabase-js";
import { Phone, Mail, Clock, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "ניהול מתעניינים | פאנל ניהול",
};

export const revalidate = 0; // Disable caching for this page

export default async function LeadsPage() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  let leads: any[] = [];
  let dbError = false;

  if (supabaseUrl && supabaseUrl !== "https://mock.supabase.co" && supabaseKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching leads:", error);
        dbError = true;
      } else {
        leads = data || [];
      }
    } catch (err) {
      console.error(err);
      dbError = true;
    }
  } else {
    // We are in mock mode, provide dummy data so the user can see the table
    dbError = true;
    leads = [
      {
        id: "1",
        full_name: "אליאס פלוני",
        email: "elias@example.com",
        phone: "050-1234567",
        notes: "מעוניין בקורס למתחילים",
        created_at: new Date().toISOString(),
      },
      {
        id: "2",
        full_name: "ישראל ישראלי",
        email: "israel@example.com",
        phone: "052-7654321",
        notes: "אפשר לחזור אליי בערב?",
        created_at: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      },
      {
        id: "3",
        full_name: "דוד משה",
        email: "david@example.com",
        phone: "054-9876543",
        notes: "",
        created_at: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      }
    ];
  }

  return (
    <div>
      <SectionTitle 
        eyebrow="פאנל ניהול" 
        title="טבלת מתעניינים (לידים)" 
        text="כאן תוכל לצפות בכל מי שהשאיר פרטים בדף ההרשמה." 
      />

      {dbError && (
        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-800">
          <ShieldAlert className="mt-1 h-6 w-6 shrink-0" />
          <div>
            <h3 className="text-lg font-bold">מצב תצוגה מקדימה (Mock Data)</h3>
            <p className="mt-1 text-sm opacity-90">
              מסד הנתונים טרם הוגדר (חסרים מפתחות Supabase אמיתיים ב-<code>.env.local</code>). 
              אנו מציגים כעת נתוני דמה (Mock) כדי שתוכל לראות איך הטבלה תיראה.
            </p>
          </div>
        </div>
      )}

      <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm text-slate-600">
            <thead className="border-b border-slate-200 bg-slate-50 text-slate-900">
              <tr>
                <th scope="col" className="px-6 py-4 font-bold">שם מלא</th>
                <th scope="col" className="px-6 py-4 font-bold">טלפון</th>
                <th scope="col" className="px-6 py-4 font-bold">אימייל</th>
                <th scope="col" className="px-6 py-4 font-bold">תאריך הרשמה</th>
                <th scope="col" className="px-6 py-4 font-bold">הערות</th>
                <th scope="col" className="px-6 py-4 font-bold text-center">פעולות</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    לא נמצאו מתעניינים.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="transition-colors hover:bg-slate-50">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900">
                      {lead.full_name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4" dir="ltr">
                      {lead.phone}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left" dir="ltr">
                      {lead.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Clock className="h-4 w-4" />
                        {new Date(lead.created_at).toLocaleDateString("he-IL", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4 max-w-[200px] truncate" title={lead.notes}>
                      {lead.notes || "-"}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <a 
                          href={`tel:${lead.phone}`} 
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-colors hover:bg-emerald-500 hover:text-white"
                          title="התקשר"
                        >
                          <Phone className="h-4 w-4" />
                        </a>
                        <a 
                          href={`mailto:${lead.email}`} 
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white"
                          title="שלח אימייל"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
