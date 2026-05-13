import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site";

const heebo = Heebo({ subsets: ["hebrew", "latin"], display: "swap" });

export const metadata: Metadata = {
  title: `${siteConfig.name} | קורס פרימיום בעברית לערבית מדוברת`,
  description: siteConfig.description
};

import { CookieBanner } from "@/components/cookie-banner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={heebo.className}>
      <body>
        <div className="relative min-h-screen grid-overlay">
          <SiteHeader />
          {children}
          <SiteFooter />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
