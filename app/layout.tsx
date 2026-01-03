import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";

/* ✅ Font configuration (SAFE with App Router) */
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

/* ✅ Global SEO Metadata */
export const metadata: Metadata = {
  title: {
    default: "Araish Constructors",
    template: "%s | Araish Constructors",
  },
  description:
    "Araish Constructors provides premium construction materials, waterproofing solutions, and civil construction services across Pakistan.",
  keywords: [
    "construction",
    "building materials",
    "civil construction",
    "waterproofing",
    "Araish Constructors",
  ],
  authors: [{ name: "Araish Constructors" }],
  creator: "Araish Constructors",
  metadataBase: new URL("https://araishconstructors.com"),
  openGraph: {
    title: "Araish Constructors",
    description:
      "Trusted supplier of construction materials and civil construction solutions in Pakistan.",
    url: "https://araishconstructors.com",
    siteName: "Araish Constructors",
    locale: "en_US",
    type: "website",
  },
};

import Providers from "@/app/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          font-sans 
          bg-white 
          text-gray-900
        `}
      >
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
