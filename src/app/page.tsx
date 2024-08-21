import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        
        <meta property="og:title" content="Aura Interiors" />
        <meta
          property="og:description"
          content="Check out this awesome project built with Next.js."
        />
        <meta
          property="og:image"
          content="https://aura-interiors.vercel.app/about-hero-image.jpg"
        />
        <meta property="og:url" content="https://aura-interiors.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Awesome Project" />

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
      <Container className="flex flex-col justify-center items-center">
        <HeroSection />
        <Portfolio />
        <Testimonials />
        <TrustedBy />
      </Container>
    </>
  );
}
