import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans_Arabic, Alexandria } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { clinic } from "@/lib/clinic";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

const alexandria = Alexandria({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-alexandria",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nassifmhm302-beep.github.io/2care-medical-center-site"),
  title: {
    default: "2Care | مجمع توكير الطبي — طب وتجميل الأسنان والجلدية في الرياض",
    template: "%s | 2Care",
  },
  description: clinic.shortDescription,
  keywords: [
    "2Care",
    "مجمع توكير الطبي",
    "عيادة أسنان الرياض",
    "تجميل أسنان",
    "عيادة جلدية الرياض",
    "حجز موعد أسنان",
  ],
  openGraph: {
    title: "2Care | مجمع توكير الطبي",
    description: clinic.shortDescription,
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${ibmPlexSansArabic.variable} ${alexandria.variable}`}
    >
      <body className="bg-white text-[var(--color-text)] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
