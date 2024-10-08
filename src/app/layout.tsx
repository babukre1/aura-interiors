import type { Metadata } from "next";
import { Inter, Sofia_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
const sofia = Sofia_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aura Interiors",
  description:
    "Aura Interiors is a specialized interior design agency with over 10 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Awesome Project</title>
      </head>
      <body className={sofia.className}>
        <div className="flex flex-col items-center justify-center">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-BZYHFQYD23" />
    </html>
  );
}
