import Header from "@/components/Header";
import StickyNav from "@/components/StickyNav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import Offers from "@/components/Offers";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useRef } from "react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen">
      <StickyNav heroRef={heroRef} />
      {/* Header + Hero share a dark container so the header blends visually. */}
      <div ref={heroRef} className="bg-hero">
        <Header />
        <Hero />
      </div>
      <Problem />
      <Benefits />
      <Offers />
      <Testimonials />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
