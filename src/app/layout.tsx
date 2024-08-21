import type { Metadata } from "next";
import { Inter, Sofia_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

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
      <Head>
        <title>Awesome Project</title>
        <meta property="og:title" content="Aura Interiors" />
        <meta
          property="og:description"
          content="Check out this awesome project built with Next.js."
        />
        <meta
          property="og:image"
          content="https://aura-interiors.vercel.app/Link-Preview-Image.jpg"
        />
        <meta property="og:url" content="https://aura-interiors.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Aura Interiors" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@babubkre" />
        <meta name="twitter:title" content="Awesome Project" />
        <meta
          name="twitter:description"
          content="Check out this awesome project built with Next.js."
        />
        <meta
          name="twitter:image"
          content="https://aura-interiors.vercel.app/about-hero-image.jpg"
        />
      </Head>
      <body className={sofia.className}>
        <div className="flex flex-col items-center justify-center">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
