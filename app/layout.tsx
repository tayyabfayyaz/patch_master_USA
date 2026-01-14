import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

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
    default: "PatchMasterUSA",
    template: "%s | PatchMasterUSA",
  },
  description:
    "PatchMasterUSA provides premium custom patches, including embroidered, woven, leather, PVC/rubber, and chenille patches, for brands and individuals worldwide.",
  keywords: [
    "custom patches",
    "embroidered patches",
    "woven patches",
    "leather patches",
    "PVC patches",
    "chenille patches",
    "PatchMasterUSA",
    "patches USA",
  ],
  authors: [{ name: "PatchMasterUSA" }],
  creator: "PatchMasterUSA",
  metadataBase: new URL("https://patchmasterusa.com"),
  openGraph: {
    title: "PatchMasterUSA - Premium Custom Patches",
    description:
      "Trusted manufacturer of custom embroidered, woven, leather, PVC, and chenille patches in the USA.",
    url: "https://patchmasterusa.com",
    siteName: "PatchMasterUSA",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/patch_13.png",
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
