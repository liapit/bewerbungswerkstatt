import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const Contact = () => {
  return (
    <section id="kontakt" className="bg-hero text-hero-foreground py-20 lg:py-28">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Bereit für den nächsten Karriereschritt?
          </h2>
          <p className="text-xl text-hero-foreground/70 mb-12 leading-relaxed">
            Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
            Wir beraten Sie persönlich — in Einsiedeln oder in der Deutschschweiz.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Mail, label: "E-Mail", value: "audelia@bewerbungswerkstatt.ch", href: "mailto:audelia@bewerbungswerkstatt.ch" },
            { icon: Phone, label: "Telefon", value: "076 629 50 56", href: "tel:+41766295056" },
            { icon: MapPin, label: "Standort", value: "Einsiedeln / Deutschschweiz", href: null },
          ].map((item, i) => (
            <ScrollReveal key={item.label} delay={i > 0 ? `delay-[${i * 100}ms]` : ""}>
              <div className="flex flex-col items-center gap-3">
                <item.icon className="w-6 h-6 text-accent" />
                <div>
                  <p className="text-sm text-hero-foreground/50 mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white">{item.value}</p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay="delay-[300ms]">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-10 py-6"
            asChild
          >
            <a href="mailto:audelia@bewerbungswerkstatt.ch">Erstgespräch buchen</a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
