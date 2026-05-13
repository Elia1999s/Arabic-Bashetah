import { SectionTitle } from "@/components/section-title";

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
      <SectionTitle
        eyebrow="תנאי שימוש ופרטיות"
        title="מדיניות פרטיות ותנאי שימוש"
        text="הפרטיות שלך חשובה לנו. אנא קרא את המדיניות שלנו כדי להבין כיצד אנו אוספים ומשתמשים במידע שלך."
      />
      
      <div className="glass mt-12 space-y-8 rounded-[40px] p-8 text-slate-600 md:p-12">
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">1. איסוף מידע</h2>
          <p className="leading-relaxed">
            אנו אוספים מידע שאתה מספק לנו ישירות, כגון בעת יצירת חשבון, רכישת קורס, או יצירת קשר עם שירות הלקוחות. מידע זה עשוי לכלול את שמך, כתובת הדוא"ל שלך, מספר הטלפון ופרטי התשלום.
          </p>
        </section>
        
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">2. שימוש במידע</h2>
          <p className="leading-relaxed">
            אנו משתמשים במידע שאנו אוספים כדי לספק, לתחזק ולשפר את השירותים שלנו. אנו עשויים גם להשתמש במידע כדי לשלוח לך עדכונים, הצעות מיוחדות ותכנים שיווקיים (תוכל לבטל את ההרשמה בכל עת).
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">3. עוגיות (Cookies)</h2>
          <p className="leading-relaxed">
            האתר שלנו משתמש ב-"עוגיות" (Cookies) ובטכנולוגיות מעקב דומות כדי לעקוב אחר הפעילות בשירות שלנו ולהחזיק במידע מסוים. עוגיות הן קבצים עם כמות קטנה של נתונים שעשויים לכלול מזהה אנונימי ייחודי.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">4. אבטחת מידע אישי ופרטי תשלום</h2>
          <p className="leading-relaxed">
            אבטחת המידע שלך חשובה לנו. פרטי התשלום שלך <strong>מוצפנים באופן מלא</strong> ואינם נשמרים בשרתים שלנו, אלא מנוהלים על ידי חברות סליקה מובילות ומאובטחות בתקנים המחמירים ביותר (כגון PCI-DSS). אין לאף גורם, כולל להנהלת האתר, גישה לפרטי האשראי המלאים שלך.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">5. שיתוף מידע</h2>
          <p className="leading-relaxed">
            איננו מוכרים, סוחרים או משכירים את המידע האישי שלך לצדדים שלישיים. אנו עשויים לשתף מידע עם ספקי שירות צד שלישי מהימנים המסייעים לנו בתפעול האתר שלנו, בניהול העסק שלנו או במתן שירות לך, כל עוד צדדים אלו מסכימים לשמור על סודיות מידע זה.
          </p>
        </section>
        
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">6. שינויים במדיניות זו</h2>
          <p className="leading-relaxed">
            אנו עשויים לעדכן את מדיניות הפרטיות שלנו מעת לעת. אנו נודיע לך על כל שינוי על ידי פרסום מדיניות הפרטיות החדשה בדף זה.
          </p>
        </section>
      </div>
    </main>
  );
}
