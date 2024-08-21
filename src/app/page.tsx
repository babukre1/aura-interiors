import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import Head from "next/head";

export default function Home() {
  return (

      <Container className="flex flex-col justify-center items-center">
        <HeroSection />
        <Portfolio />
        <Testimonials />
        <TrustedBy />
      </Container>
  );
}
