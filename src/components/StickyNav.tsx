"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface StickyNavProps {
  heroRef: React.RefObject<HTMLDivElement | null>;
}

const StickyNav = ({ heroRef }: StickyNavProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [heroRef]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <img
            src="/images/logo.png"
            alt="Bewerbungswerkstatt Logo"
            className="h-8 w-auto"
          />
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="mailto:audelia@bewerbungswerkstatt.ch">Erstgespräch buchen</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default StickyNav;
