"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Loader2, Phone, Mail, Calendar, User, ShieldAlert } from "lucide-react";
import { format } from "date-fns";
import { he } from "date-fns/locale";

type Lead = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  notes: string;
  created_at: string;
};

export default function LeadsAdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple protection for the admin page
    if (password === "admin123") {
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      setError("סיסמה שגויה");
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      
      if (!supabaseUrl || !supabaseKey) {
        throw new Error("Missing Supabase credentials");
      }

      const supabase = createClient(supabaseUrl, supabaseKey);
      
      const { data, error: sbError } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (sbError) throw sbError;
      
      setLeads(data || []);
    } catch (err: any) {
      console.error(err);
      setError("שגיאה בטעינת הנתונים: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="glass w-full max-w-md rounded-3xl p-8">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-red-100 p-4 text-red-600">
              <ShieldAlert className="h-8 w-8" />
            </div>
          </div>
          <h1 className="mb-2 text-center text-2xl font-bold text-slate-900">אזור ניהול מאובטח</h1>
          <p className="mb-6 text-center text-sm text-slate-500">רק לך יש גישה לעמוד זה.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="הכנס סיסמת מנהל"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                dir="ltr"
              />
            </div>
            {error && <div className="text-sm text-red-500">{error}</div>}
            <button type="submit" className="w-full rounded-xl bg-slate-900 py-3 font-bold text-white transition hover:bg-slate-800">
              כניסה
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-black text-slate-900">ניהול מתעניינים</h1>
            <p className="mt-2 text-slate-500">רשימת האנשים שהשאירו פרטים בדף ההרשמה</p>
          </div>
          <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
            {leads.length} לידים בסך הכל
          </div>
        </div>

        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-fuchsia-500" />
          </div>
        ) : error ? (
          <div className="rounded-2xl bg-red-50 p-4 text-red-600">{error}</div>
        ) : leads.length === 0 ? (
          <div className="glass flex h-64 flex-col items-center justify-center rounded-3xl">
            <User className="mb-4 h-12 w-12 text-slate-300" />
            <div className="text-lg font-medium text-slate-500">אין עדיין מתעניינים רשומים</div>
          </div>
        ) : (
          <div className="glass overflow-hidden rounded-3xl">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-sm">
                <thead className="bg-slate-50/50 text-slate-500">
                  <tr>
                    <th className="px-6 py-4 font-medium">שם מלא</th>
                    <th className="px-6 py-4 font-medium">טלפון</th>
                    <th className="px-6 py-4 font-medium">אימייל</th>
                    <th className="px-6 py-4 font-medium">תאריך הרשמה</th>
                    <th className="px-6 py-4 font-medium">הערות</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="transition-colors hover:bg-slate-50/50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900">{lead.full_name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <a href={`tel:${lead.phone}`} className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 transition hover:bg-emerald-100" dir="ltr">
                          <Phone className="h-3.5 w-3.5" />
                          {lead.phone}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <a href={`mailto:${lead.email}`} className="inline-flex items-center gap-1.5 text-slate-600 transition hover:text-fuchsia-600">
                          <Mail className="h-3.5 w-3.5" />
                          {lead.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {format(new Date(lead.created_at), "dd/MM/yyyy HH:mm", { locale: he })}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="max-w-xs truncate text-slate-500" title={lead.notes}>
                          {lead.notes || "-"}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
