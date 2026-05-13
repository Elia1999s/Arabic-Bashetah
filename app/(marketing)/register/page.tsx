import { SectionTitle } from "@/components/section-title";
import { RegisterForm } from "./register-form";

export const metadata = {
  title: "הרשמה מוקדמת | ערבית בשטח",
  description: "הרשמה לתוכנית הפרימיום ללימוד ערבית",
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-xl px-4 md:px-8">
        <SectionTitle 
          eyebrow="צעד ראשון" 
          title="השאר פרטים ונחזור אליך" 
          text="הירשם עכשיו לקבלת גישה מוקדמת ופרטים נוספים על קורס הפרימיום ללימוד ערבית מדוברת."
        />
        
        <div className="mt-10">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}
