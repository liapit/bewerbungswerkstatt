import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-8">
            Kontakt
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Bereit für den nächsten Schritt? Kontaktieren Sie mich für ein kostenloses Beratungsgespräch.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                <p className="text-muted-foreground">info@bewerbungswerkstatt.de</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                <p className="text-muted-foreground">+49 123 456 789</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Standort</h3>
                <p className="text-muted-foreground">München, Deutschland</p>
              </div>
            </div>
          </div>
          
          <Button size="lg" className="px-8 py-4 text-lg">
            Kostenloses Beratungsgespräch buchen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;