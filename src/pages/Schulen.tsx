import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Users,
  User,
  FilePenLine,
  FolderCheck,
  Search,
  Lightbulb,
  ClipboardCheck,
  MessageSquare,
  UserCheck,
  HelpCircle,
  Mic,
  Dumbbell,
  Globe,
} from "lucide-react";
import { useEffect, useState } from "react";
import consultantPortrait from "@/assets/consultant-portrait.jpg";

const Schulen = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pendingTarget, setPendingTarget] = useState<string | null>(null);

  const handleNavigate = (targetId: string) => {
    setPendingTarget(targetId);
    setMobileOpen(false);
  };

  useEffect(() => {
    if (!mobileOpen && pendingTarget) {
      const idToScroll = pendingTarget;
      setPendingTarget(null);
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => {
          const el = document.getElementById(idToScroll);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            try {
              window.location.hash = `#${idToScroll}`;
            } catch {
              // no-op
            }
          }
        });
        return () => cancelAnimationFrame(raf2);
      });
      return () => cancelAnimationFrame(raf1);
    }
  }, [mobileOpen, pendingTarget]);

  return (
    <div className="schulen-theme min-h-screen">
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/images/logo.png" alt="Bewerbungswerkstatt Logo" className="h-12 w-auto" />
            </div>
            <nav className="hidden min-[900px]:flex space-x-8">
              <a href="#problem" className="text-foreground hover:text-primary transition-colors">Problem</a>
              <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Nutzen</a>
              <a href="#angebote" className="text-foreground hover:text-primary transition-colors">Wie ich helfe</a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">Über mich</a>
              <a href="#kontakt" className="text-foreground hover:text-primary transition-colors">Kontakt</a>
            </nav>
            <Button className="hidden min-[900px]:flex" asChild>
              <a href="mailto:audelia@bewerbungswerkstatt.ch">Kontakt aufnehmen</a>
            </Button>
            <div className="min-[900px]:hidden">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Menü öffnen">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="flex flex-col gap-6"
                  onOpenAutoFocus={(e) => e.preventDefault()}
                  onCloseAutoFocus={(e) => e.preventDefault()}
                >
                  <nav className="flex flex-col space-y-4">
                    <a href="#problem" onClick={(e) => { e.preventDefault(); handleNavigate("problem"); }} className="text-foreground hover:text-primary transition-colors">Problem</a>
                    <a href="#benefits" onClick={(e) => { e.preventDefault(); handleNavigate("benefits"); }} className="text-foreground hover:text-primary transition-colors">Nutzen</a>
                    <a href="#angebote" onClick={(e) => { e.preventDefault(); handleNavigate("angebote"); }} className="text-foreground hover:text-primary transition-colors">Wie ich helfe</a>
                    <a href="#team" onClick={(e) => { e.preventDefault(); handleNavigate("team"); }} className="text-foreground hover:text-primary transition-colors">Über mich</a>
                    <a href="#kontakt" onClick={(e) => { e.preventDefault(); handleNavigate("kontakt"); }} className="text-foreground hover:text-primary transition-colors">Kontakt</a>
                  </nav>
                  <Button className="w-full" asChild>
                    <a href="mailto:audelia@bewerbungswerkstatt.ch">Kontakt aufnehmen</a>
                  </Button>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight text-center lg:text-left">
                Ich mache Schüler fit für die Lehrstellensuche
              </h1>
              <ul className="space-y-4 max-w-2xl mx-auto lg:mx-0">
                <li className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 aspect-square flex-shrink-0 items-center justify-center rounded-full bg-accent text-primary font-bold">✓</span>
                  <span className="text-xl lg:text-2xl text-foreground">Bewerbungen, die Herausstechen und packend sind</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 aspect-square flex-shrink-0 items-center justify-center rounded-full bg-accent text-primary font-bold">✓</span>
                  <span className="text-xl lg:text-2xl text-foreground">Tipps für das Motivationsschreiben und den Lebenslauf</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 aspect-square flex-shrink-0 items-center justify-center rounded-full bg-accent text-primary font-bold">✓</span>
                  <span className="text-xl lg:text-2xl text-foreground">Fit sein für den Bewerbungsprozess</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img src="/images/person_laptop.png" alt="Illustration" className="w-full max-w-md lg:max-w-lg rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <img src="/images/question.png" alt="Schüler mit Fragen am Laptop" className="w-full max-w-md lg:max-w-lg aspect-square rounded-2xl object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-primary">Problem</h2>
              <ul className="space-y-6 text-xl lg:text-2xl">
                <li className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary font-bold">?</span>
                  <span>Ganz viele Schüler arbeiten nach Vorlage und schreiben mit KI.</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary font-bold">?</span>
                  <span>Das resultiert in vielen gleichartigen Bewerbungsschreiben.</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary font-bold">?</span>
                  <span>Wie soll ein Schüler da herausstechen können?</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-12">Nutzen für die Schüler</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-6">
              <div className="mx-auto h-[7.5rem] w-[7.5rem] rounded-full bg-accent flex items-center justify-center overflow-hidden">
                <img src="/images/notebook.png" alt="Notizbuch Icon" className="h-[6.25rem] w-[6.25rem] lg:h-[7.5rem] lg:w-[7.5rem] object-contain" />
              </div>
              <p className="text-xl text-foreground">Top Bewerbungsunterlagen erstellen können</p>
            </div>
            <div className="space-y-6">
              <div className="mx-auto h-[7.5rem] w-[7.5rem] rounded-full bg-accent flex items-center justify-center overflow-hidden">
                <img src="/images/lightbulb.png" alt="Glühbirne Icon" className="h-[6.25rem] w-[6.25rem] lg:h-[7.5rem] lg:w-[7.5rem] object-contain" />
              </div>
              <p className="text-xl text-foreground">Eigene Interessen & Stärken kennenlernen</p>
            </div>
            <div className="space-y-6">
              <div className="mx-auto h-[7.5rem] w-[7.5rem] rounded-full bg-accent flex items-center justify-center overflow-hidden">
                <img src="/images/rocket.png" alt="Rakete Icon" className="h-[6.25rem] w-[6.25rem] lg:h-[7.5rem] lg:w-[7.5rem] object-contain" />
              </div>
              <p className="text-xl text-foreground">Sich selbstbewusst präsentieren können</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="angebote" className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">Wie ich helfe</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6 mx-auto">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-center text-primary mb-8">1 Doppellektion</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FilePenLine className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Was gehört in ein Motivationsschreiben und einen CV, was nicht?</span>
                </div>
                <div className="flex items-start gap-3">
                  <Search className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Wie schreibe ich ein Motivationsschreiben, sodass es nicht wie alle anderen aussieht?</span>
                </div>
                <div className="flex items-start gap-3">
                  <FolderCheck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Wie muss der Lebenslauf angepasst werden?</span>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Allgemeine Tipps zum Bewerbungsprozess</span>
                </div>
                <div className="flex items-start gap-3">
                  <ClipboardCheck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Feedback Motivationsschreiben und CV für jeder Schüler und jede Schülerin</span>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6 mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-center text-primary mb-8">Mehrere Doppellektionen</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FilePenLine className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Was gehört in ein Motivationsschreiben und einen Lebenslauf, was nicht?</span>
                </div>
                <div className="flex items-start gap-3">
                  <FolderCheck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Wie sieht ein vollständiges Bewerbungsdossier aus?</span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Unterstützung, Feedback & Korrektur Motivationsschreiben und Lebenslauf</span>
                </div>
                <div className="flex items-start gap-3">
                  <Search className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Wie Untersuche ich eine Stellenbeschreibung und die Firma?</span>
                </div>
                <div className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Wie beim Schnuppern und Bewerbungsgespräch auftreten?</span>
                </div>
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Häufigsten Fragen beim Bewerbungsgespräch diskutieren und vorbereiten</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mic className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Wie beim Bewerbungsgespräch auftreten?</span>
                </div>
                <div className="flex items-start gap-3">
                  <Dumbbell className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Bewerbungsgespräche trainieren</span>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Professionell online Auftreten</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="team" className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-start">
                <img src={consultantPortrait} alt="Beraterin Portrait" className="w-80 h-80 rounded-2xl object-cover object-[50%_20%]" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary">Über mich</h2>
                <h3 className="text-2xl font-bold text-foreground">Audelia Babbev-Pittet, Bewerbungsspezialistin</h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>Ich habe mir zum Ziel gesetzt Schülern zu helfen, aus der Masse herauszustechen mit nahbaren Bewerbungen.</p>
                  <p>Ich schreibe Bewerbungen mit Leidenschaft und das widerspiegelt sich im Text. Das möchte ich gerne an sie weitergeben! Mit den heutigen KI‑Tools kann das eine Herausforderung sein, jedoch zeige ich den Schülern wie sie es erfolgreich schaffen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-8">
                Lassen Sie uns gemeinsam Ihre Schüler bei der Lehrstellensuche unterstützen!
              </h2>
              <p className="text-xl text-muted-foreground mb-12">Kontaktieren Sie mich ganz unverbindlich:</p>
              <div className="grid grid-cols-1 gap-8 mb-12 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <img src="/images/email.png" alt="E‑Mail Icon" className="w-16 h-16" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E‑Mail</h3>
                    <p className="text-foreground">audelia@bewerbungswerkstatt.ch</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <img src="/images/tel.png" alt="Telefon Icon" className="w-16 h-16" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                    <p className="text-foreground">076 629 50 56</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <img src="/images/marker.png" alt="Standort Icon" className="w-16 h-16" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Standort</h3>
                    <p className="text-foreground">Einsiedeln</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="px-8 py-4 text-lg" asChild>
                <a href="mailto:audelia@bewerbungswerkstatt.ch">Kontaktieren Sie mich</a>
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img src="/images/solution.png" alt="Illustration" className="w-full max-w-md lg:max-w-lg rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted border-t">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-1">
              <p className="font-semibold text-foreground">Digital Trust Solutions GmbH</p>
              <p className="text-muted-foreground">Einsiedeln</p>
            </div>
            <div>
              <a href="mailto:audelia@bewerbungswerkstatt.ch" className="text-primary hover:underline">
                audelia@bewerbungswerkstatt.ch
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Schulen;
