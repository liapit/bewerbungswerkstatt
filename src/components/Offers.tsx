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
      </div>
    </section>
  );
};

export default Offers;
