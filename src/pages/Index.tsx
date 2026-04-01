import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import Offers from "@/components/Offers";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
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
