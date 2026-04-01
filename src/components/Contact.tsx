import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="bg-hero text-hero-foreground py-20 lg:py-28">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Bereit für den nächsten Karriereschritt?
        </h2>
        <p className="text-xl text-hero-foreground/70 mb-12 leading-relaxed">
          Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
          Wir beraten Sie persönlich — in Einsiedeln oder in der Deutschschweiz.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center gap-3">
            <Mail className="w-6 h-6 text-accent" />
            <div>
              <p className="text-sm text-hero-foreground/50 mb-1">E-Mail</p>
              <a
                href="mailto:audelia@bewerbungswerkstatt.ch"
                className="text-white hover:text-accent transition-colors"
              >
                audelia@bewerbungswerkstatt.ch
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Phone className="w-6 h-6 text-accent" />
            <div>
              <p className="text-sm text-hero-foreground/50 mb-1">Telefon</p>
              <a
                href="tel:+41766295056"
                className="text-white hover:text-accent transition-colors"
              >
                076 629 50 56
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <MapPin className="w-6 h-6 text-accent" />
            <div>
              <p className="text-sm text-hero-foreground/50 mb-1">Standort</p>
              <p className="text-white">Einsiedeln / Deutschschweiz</p>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-10 py-6"
          asChild
        >
          <a href="mailto:audelia@bewerbungswerkstatt.ch">Erstgespräch buchen</a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
