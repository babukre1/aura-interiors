import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import Footer from "@/components/Footer";

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
