"use client";

import { useRef, useState, useEffect } from "react";
import {
  ClipboardCheck,
  MessageSquare,
  FilePenLine,
  MapPin,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const services = [
  {
    icon: ClipboardCheck,
    title: "1:1 CV-Review & Beratung",
    text: "Persönliche Analyse Ihres Lebenslaufs mit einem Experten. Wir identifizieren Schwachstellen und erarbeiten gemeinsam eine überzeugende Darstellung Ihrer Laufbahn.",
  },
  {
    icon: MessageSquare,
    title: "Detailliertes Feedback",
    text: "Konkrete, umsetzbare Verbesserungsvorschläge — nicht generische Tipps, sondern auf Ihre Branche und Position zugeschnittene Empfehlungen.",
  },
  {
    icon: FilePenLine,
    title: "Schreiben & Optimierung",
    text: "Professionelle Überarbeitung oder Neuerstellung von Lebenslauf und Motivationsschreiben. Jedes Wort wird sorgfältig gewählt.",
  },
  {
    icon: MapPin,
    title: "Lokale Expertise",
    text: "Unsere Berater kennen den Arbeitsmarkt in der Deutschschweiz — von Tech-Startups über Banken bis zu Back-Office-Positionen.",
  },
];

const Offers = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [bgY, setBgY] = useState(60);

  useEffect(() => {
    const handleScroll = () => {
      const el = bannerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setBgY(40 + Math.max(0, Math.min(1, progress)) * 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="angebot" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
            Unsere Dienstleistungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Massgeschneiderte Unterstützung für Ihre Karriere in der Deutschschweiz.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i > 0 ? `delay-[${i * 100}ms]` : ""}>
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 max-w-5xl mx-auto">
          <div
            ref={bannerRef}
            className="relative rounded-2xl overflow-hidden min-h-[180px] flex items-center justify-center"
            style={{
              backgroundImage: "url(/images/zurich-panorama.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: `center ${bgY}%`,
            }}
          >
            <div className="absolute inset-0 bg-primary/80" />
            <div className="relative text-center text-white px-8 py-10">
              <div className="text-5xl mb-4">🇨🇭</div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                Lokal verankert. Persönlich engagiert.
              </h3>
              <p className="text-white/80 max-w-xl mx-auto leading-relaxed">
                Unsere Berater leben und arbeiten in der Deutschschweiz — sie kennen den Markt, die Kultur und die Erwartungen Ihrer zukünftigen Arbeitgeber.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Offers;
