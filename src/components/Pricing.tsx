"use client";

import { Button } from "@/components/ui/button";
import { Check, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const plans = [
  {
    tag: "Einstieg",
    title: "Analyse & Erstgespräch",
    price: "95",
    duration: "Online Besprechung bis zu 45 Minuten",
    features: [
      "Analyse Ihrer aktuellen Unterlagen",
      "Identifikation der grössten Verbesserungspotenziale",
      "Konkreter Massnahmenplan",
      "Vollständig online",
      "Unverbindlich",
    ],
    cta: "Termin vereinbaren",
    guarantee: "Nicht zufrieden? Volle Rückerstattung.",
    highlighted: true,
  },
  {
    tag: "Weiterführend",
    title: "CV-Review & Bearbeitung",
    price: "75",
    duration: "pro Stunde",
    features: [
      "Detaillierte Überarbeitung Lebenslauf",
      "Motivationsschreiben Optimierung",
      "Laufende Anpassungen & Feedback",
      "Auf Ihre Zielbranche zugeschnitten",
    ],
    cta: "Kontakt aufnehmen",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="preise" className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
            Transparente Preise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Faire Stundensätze, keine versteckten Kosten.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.title} delay={i > 0 ? "delay-[200ms]" : ""}>
              <div
                className={`bg-card rounded-xl p-8 shadow-sm flex flex-col h-full ${
                  plan.highlighted
                    ? "border-2 border-accent ring-1 ring-accent/20"
                    : "border border-border"
                }`}
              >
                <span
                  className={`inline-block self-start text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6 ${
                    plan.highlighted
                      ? "bg-accent/15 text-accent"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {plan.tag}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.title}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl lg:text-5xl font-extrabold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-lg text-muted-foreground ml-2">
                    CHF
                  </span>
                  <p className="text-muted-foreground mt-1">{plan.duration}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : ""
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <a href="mailto:audelia@bewerbungswerkstatt.ch">{plan.cta}</a>
                </Button>
                {plan.guarantee && (
                  <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    {plan.guarantee}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
