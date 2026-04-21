# ערבית בשטח — Next.js starter

זהו בסיס אמיתי לפרויקט האתר שלך.

## מה יש בפנים
- Next.js App Router
- Tailwind CSS
- מבנה שיווקי מלא
- דפי תמחור, התחברות, דשבורד, שיעור
- קבצי Supabase schema
- API mock ל-checkout ו-webhook
- הכנה ל-Bunny Stream
- הכנה ל-Vercel

## איך להריץ מקומית
```bash
npm install
cp .env.example .env.local
npm run dev
```

## מה לחבר כדי להפוך את זה לאתר אמיתי
1. **Supabase**
   - פתח פרויקט חדש.
   - הרץ את `supabase/schema.sql` ב-SQL editor.
   - העתק את ה-URL וה-ANON KEY ל-`.env.local`.

2. **Stripe**
   - פתח שני מוצרים:
     - מסלול פרימיום מלא: ₪2,799 חד פעמי
     - תוכנית תשלומים: ₪499 לחודש × 6 חודשים
   - חבר את המפתחות ל-`.env.local`.
   - החלף את `app/api/checkout/route.ts` בלוגיקה של יצירת Stripe Checkout session.
   - החלף את `app/api/webhooks/stripe/route.ts` ב-webhook אמיתי שמעדכן orders/subscriptions.

3. **Bunny Stream**
   - פתח Video Library.
   - צור Pull Zone / CDN hostname.
   - הוסף את פרטי Bunny ל-`.env.local`.
   - לכל שיעור תשמור `bunny_video_guid` בטבלת `lessons`.

4. **Vercel**
   - העלה את הפרויקט ל-GitHub.
   - היכנס ל-Vercel > New Project > Import.
   - חבר את ה-Environment Variables.
   - Deploy.

5. **Domain**
   - קנה דומיין אצל ספק דומיינים.
   - ב-Vercel הוסף את הדומיין.
   - עדכן DNS לפי ההוראות של Vercel.

## אחרי שאתה מצלם 300 סרטונים
1. סדר תיקיות במחשב:
   - 01-foundation
   - 02-speaking
   - 03-listening
   - 04-scenarios
2. לכל סרטון תן שם קבוע:
   - `001-natural-greetings.mp4`
   - `002-common-responses.mp4`
3. העלה את כל הסרטונים ל-Bunny Stream.
4. שמור בקובץ Sheet או CSV:
   - title
   - slug
   - module
   - duration
   - bunny_video_guid
   - is_preview
5. יבא את הנתונים ל-Supabase לטבלת `lessons`.
6. חבר כל שיעור למודול.
7. בחר 3–5 שיעורים פתוחים בחינם לטעימה.
8. כתוב תקציר קצר ו-PDF לכל שיעור חשוב.
9. בדוק שכל שיעור נפתח רק למשתמש עם גישה.
10. רק אחרי זה תתחיל שיווק.

## מה אני ממליץ לך לעשות בפועל במהלך 10 החודשים
### חודשים 1–2
- בניית שפה עיצובית
- הקמה טכנית של האתר
- בניית אזור ניהול בסיסי

### חודשים 3–7
- צילום והעלאת השיעורים
- ניקוי סאונד
- יצירת thumbnails
- תמלול וארגון שיעורים

### חודשים 8–9
- בדיקות משתמשים
- בדיקות תשלום
- בדיקות גישה והרשאות
- שיפור דף מכירה

### חודש 10
- העלאת האתר לדומיין
- חיבור אנליטיקות
- פתיחת קמפיינים ושיווק

## מה עדיין לא חובר כאן
- Supabase auth בפועל
- Stripe checkout session בפועל
- webhook אמיתי
- Bunny upload workflow
- admin panel להוספת שיעורים בלי קוד

אלה החלקים הבאים שכדאי לבנות מיד אחרי שהבסיס הזה נבדק.
