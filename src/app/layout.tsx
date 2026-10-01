import type { Metadata, Viewport } from "next";
import { Noto_Kufi_Arabic, Tajawal } from "next/font/google";
import { siteConfig } from "@/config/site";
import { siteContent } from "@/content/site-content";
import "./globals.css";

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-noto-kufi",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteContent.seo.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteContent.seo.description,
  keywords: siteContent.seo.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "/",
    siteName: siteConfig.name,
    title: siteContent.seo.title,
    description: siteContent.seo.description,
  },
  twitter: {
    card: "summary",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#10241a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${notoKufi.variable} ${tajawal.variable}`}>
      <body className="bg-background font-body text-foreground antialiased">
        {/* في حال تعطيل JavaScript: يظهر المحتوى دون انتظار حركة الظهور */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
