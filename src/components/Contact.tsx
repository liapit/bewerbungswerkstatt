import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-background py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-8">
              Lassen Sie uns gemeinsam Ihre Schüler für die Zukunft stärken.
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Senden Sie mir doch einen Terminvorschlag, bei denen wir diskutieren können wann ich Ihre Schüler unterstützen darf:
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">E‑Mail</h3>
                  <p className="text-foreground">audelia@babbev.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                  <p className="text-foreground">076 629 50 56</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Standort</h3>
                  <p className="text-foreground">Einsiedeln</p>
                </div>
              </div>
            </div>
            <Button size="lg" className="px-8 py-4 text-lg">Termin vorschlagen</Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/solution.png"
              alt="Illustration"
              className="w-full max-w-md lg:max-w-lg rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;