import type { Metadata } from "next";
import { Playfair_Display, Mulish } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BNA Consulting | Accountants in London",
  description: "Expert team of English and Russian speaking accountants in London.",
};

import PageTransition from "@/components/PageTransition";
import GlobalLoader from "@/components/ui/GlobalLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${mulish.variable} antialiased`}
      >
        <Suspense fallback={null}>
            <GlobalLoader />
        </Suspense>
        <Navbar />
        <PageTransition>
            {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
