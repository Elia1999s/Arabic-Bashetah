export const siteConfig = {
  name: "ערבית בשטח",
  description: "קורס פרימיום בעברית לערבית מדוברת אמיתית.",
  priceOneTime: 2799,
  priceCommitmentMonthly: 499,
  commitmentMonths: 6,
  supportPhone: process.env.NEXT_PUBLIC_SUPPORT_PHONE ?? "0525077410",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "Eliasalem74@gmail.com",
  domainSuggestion: "arabicbashatah.co.il"
};

export const modules = [
  { title: "בסיס והגייה", count: 42 },
  { title: "ערבית מדוברת אמיתית", count: 96 },
  { title: "שמיעה, קצב ושטף", count: 88 },
  { title: "תרחישים ושטח", count: 74 }
];

export const lessons = [
  {
    slug: "natural-greetings",
    title: "ברכות ותגובות טבעיות",
    duration: "12:16",
    summary: "איך להישמע טבעי כבר מהשיעורים הראשונים.",
    moduleTitle: "ערבית מדוברת אמיתית",
    publicPreview: true
  },
  {
    slug: "listening-fast-speech",
    title: "להבין דיבור מהיר בלי להילחץ",
    duration: "12:11",
    summary: "שיעור שמלמד איך לפרק קצב דיבור אמיתי.",
    moduleTitle: "שמיעה, קצב ושטף",
    publicPreview: false
  }
];

export const planCards = [
  {
    key: "one_time",
    name: "מסלול פרימיום מלא",
    price: "₪2,799",
    subtitle: "תשלום חד פעמי",
    highlight: true,
    features: [
      "גישה מלאה ל־300+ שיעורים",
      "פתיחה מיידית אחרי תשלום",
      "גישה מכל מכשיר",
      "כולל כל העדכונים במסגרת הקורס"
    ]
  },
  {
    key: "commitment",
    name: "תוכנית תשלומים חודשית",
    price: "₪499",
    subtitle: "לחודש × 6 חודשי התחייבות",
    highlight: false,
    features: [
      "אותה גישה מלאה לקורס",
      "פריסה חודשית נוחה",
      "התחייבות ללא עצירה באמצע התקופה",
      "מסלול מתאים למי שרוצה לפרוס עלות"
    ]
  }
] as const;
