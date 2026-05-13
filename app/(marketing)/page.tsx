"use client";

import Link from "next/link";
import { Crown, CreditCard, GraduationCap, Layers3, Mail, Phone, Star, ArrowLeft, Play, Users, Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { VideoPlaceholder } from "@/components/video-placeholder";
import { modules, siteConfig } from "@/lib/site";
import { motion } from "framer-motion";

const stats = [
  { value: "300+", label: "שיעורים מתוכננים" },
  { value: "12 דק׳", label: "ממוצע לשיעור" },
  { value: "60+", label: "שעות תוכן" },
  { value: "100%", label: "עברית ברורה" }
];

export default function HomePage() {
  const totalLessons = modules.reduce((sum, module) => sum + module.count, 0);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
        {/* Decorative elements */}
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-fuchsia-300/40 blur-[100px]" />
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-300/30 blur-[120px]" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-2 text-sm text-fuchsia-700 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 animate-pulse-glow" />
            הפלטפורמה המתקדמת ביותר ללימוד ערבית
          </motion.div>
          
          <h1 className="text-5xl font-black leading-tight text-slate-900 md:text-7xl">
            לדבר ערבית <span className="bg-gradient-to-l from-fuchsia-500 via-orange-400 to-cyan-500 bg-clip-text text-transparent">בביטחון מלא</span>
            <br className="hidden md:block" />
            בקצב שלך.
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            {siteConfig.description} האתר שלנו מציע חוויית למידה מתקדמת עם מאות סרטוני וידאו, מערכת מעקב התקדמות אישית, וממשק נוח שמאפשר לך ללמוד מכל מקום ובכל זמן.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link href="/pricing" className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-l from-fuchsia-500 to-orange-400 px-8 py-4 text-lg font-bold text-white shadow-[0_0_40px_rgba(217,70,239,0.2)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(217,70,239,0.3)]">
              <span className="relative z-10">הצטרף עכשיו</span>
              <ArrowLeft className="relative z-10 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>
            
            <Link href="/register" className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-slate-700 backdrop-blur-md transition-all hover:bg-slate-50 hover:shadow-sm">
              <Users className="h-5 w-5" />
              הרשמה מוקדמת
            </Link>
          </motion.div>
          
          <div className="mt-12 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                key={stat.label} 
                className="glass rounded-[24px] p-5 transition-transform hover:-translate-y-1"
              >
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-700">{stat.value}</div>
                <div className="mt-2 text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 hidden md:block"
        >
          <div className="glass animate-float rounded-[30px] p-5 shadow-xl">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-500">תצוגה מקדימה למערכת</div>
                  <div className="text-2xl font-bold text-slate-900 mt-1">אזור תלמידים מתקדם</div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 border border-emerald-200">
                  <Crown className="h-4 w-4" />
                  Premium
                </div>
              </div>
              <div className="grid gap-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-1 relative group cursor-pointer">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                     <div className="w-16 h-16 rounded-full bg-fuchsia-500/80 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(217,70,239,0.6)] group-hover:scale-110 transition-transform">
                       <Play className="h-6 w-6 text-white ml-1" fill="currentColor" />
                     </div>
                  </div>
                  <VideoPlaceholder title="נגן וידאו מתקדם ברזולוציה גבוהה" subtitle="חווית צפייה חלקה עם אפשרות למעקב התקדמות אוטומטי." />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                     <div className="text-xs text-slate-500 mb-1">מודולים</div>
                     <div className="font-bold text-lg text-slate-900">{modules.length} שלבים</div>
                   </div>
                   <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                     <div className="text-xs text-slate-500 mb-1">גישה</div>
                     <div className="font-bold text-lg text-emerald-600">לכל החיים</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Summary Section */}
      <section className="relative z-20 mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionTitle 
          eyebrow="מה אנחנו עושים" 
          title="המערכת המושלמת ללימוד ערבית" 
          text="בנינו את הפלטפורמה הזו במיוחד עבור דוברי עברית שרוצים ללמוד ערבית מדוברת בצורה הקלה, המהירה והאינטראקטיבית ביותר. האתר משלב שיעורי וידאו ברמה גבוהה עם מערכת למידה חכמה." 
        />
        
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { 
              icon: Play, 
              title: "שיעורי וידאו באיכות פרימיום", 
              text: "מעל 300 סרטוני וידאו מקצועיים שילמדו אותך ערבית שלב אחר שלב, מאפס ועד לדיבור שוטף." 
            },
            { 
              icon: GraduationCap, 
              title: "מערכת תלמידים חכמה", 
              text: "מעקב אחר ההתקדמות שלך, סימון שיעורים שהושלמו, וגישה מיידית לכל התכנים לאחר התשלום." 
            },
            { 
              icon: CreditCard, 
              title: "תשלום מאובטח וגישה מיידית", 
              text: "שלם פעם אחת ₪2,399 וקבל גישה מיידית ובלתי מוגבלת לכל תכני הקורס מכל מכשיר." 
            }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              key={item.title} 
              className="glass relative overflow-hidden rounded-[30px] p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-100 blur-2xl group-hover:bg-fuchsia-200 transition-colors" />
              <div className="relative z-10">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-orange-400 text-white shadow-lg shadow-fuchsia-500/20">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Course Content Summary */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass grid gap-8 rounded-[40px] p-8 md:grid-cols-[1.2fr,0.8fr] md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-slate-50/40" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-4 py-1.5 text-sm font-medium text-slate-700 backdrop-blur-md">
              <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
              למה לבחור בנו?
            </div>
            <h3 className="mt-6 text-4xl font-black leading-tight text-slate-900">השקעה אחת, <br/><span className="text-transparent bg-clip-text bg-gradient-to-l from-fuchsia-500 to-orange-400">ידע לכל החיים</span></h3>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              בניגוד לקורסים אחרים, המערכת שלנו נבנתה במיוחד כדי לתת לך חווית משתמש מושלמת. ברגע שאתה נרשם ומשלם, נפתח בפניך עולם שלם של תוכן וידאו, תרגולים ומעקב התקדמות שיאפשר לך ללמוד בקצב שלך.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/pricing" className="rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition-transform hover:scale-105">
                לרכישת הקורס
              </Link>
            </div>
          </div>
          <div className="relative z-10 flex flex-col justify-center gap-3">
            {["ספריית וידאו ענקית עם מעל 300 שיעורים","ממשק משתמש נוח ומתקדם","מעקב התקדמות אישי לכל תלמיד","אזור רכישה מאובטח (Stripe)","תמיכה מלאה וליווי צמוד","גישה מכל מחשב, טאבלט או סמארטפון"].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={item} 
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/60 px-5 py-4 shadow-sm backdrop-blur-sm"
              >
                <div className="rounded-full bg-emerald-100 p-1 text-emerald-600">
                  <Star className="h-4 w-4" />
                </div>
                <span className="font-medium text-slate-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8">
        <div className="glass flex flex-col md:flex-row items-center justify-between gap-8 rounded-[30px] p-8 relative overflow-hidden">
           <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-fuchsia-500/5 to-transparent pointer-events-none" />
           <div className="relative z-10 max-w-xl">
             <h3 className="text-3xl font-black mb-4 text-slate-900">יש לך שאלות? אנחנו כאן!</h3>
             <p className="text-slate-600 text-lg">רוצה להתייעץ לפני הרשמה? השאר פרטים בדף ההרשמה או צור איתנו קשר ישירות.</p>
           </div>
           <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
             <a href={`tel:${siteConfig.supportPhone}`} className="group flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 transition-all hover:bg-slate-50 hover:border-emerald-200 hover:shadow-sm">
                <div className="rounded-full bg-emerald-100 p-2 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="font-bold text-lg text-slate-900" dir="ltr">{siteConfig.supportPhone}</span>
             </a>
             <a href={`mailto:${siteConfig.supportEmail}`} className="group flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 transition-all hover:bg-slate-50 hover:border-cyan-200 hover:shadow-sm">
                <div className="rounded-full bg-cyan-100 p-2 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-bold text-lg text-slate-900">{siteConfig.supportEmail}</span>
             </a>
           </div>
        </div>
      </section>
    </main>
  );
}
