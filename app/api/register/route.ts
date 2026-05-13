import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, notes } = await req.json();

    if (!fullName || !email || !phone) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { error } = await supabase
        .from("leads")
        .insert([{ full_name: fullName, email, phone, notes }]);

      if (error) {
        console.error("DB error", error);
      }
    } else {
      console.warn("Supabase credentials missing, simulating DB save");
    }

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
        subject: "🎉 ליד חדש נרשם לקורס ערבית בשטח!",
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #0f172a;">נרשם חדש במערכת!</h2>
            <p>להלן פרטי המתעניין החדש:</p>
            <ul style="list-style: none; padding: 0;">
              <li><strong>שם מלא:</strong> ${fullName}</li>
              <li><strong>אימייל:</strong> ${email}</li>
              <li><strong>טלפון:</strong> ${phone}</li>
              <li><strong>הערות:</strong> ${notes || "אין הערות"}</li>
            </ul>
            <p style="margin-top: 20px; font-size: 12px; color: #64748b;">הודעה זו נשלחה אוטומטית ממערכת ערבית בשטח.</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.warn("SMTP credentials missing, skipping email notification");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
