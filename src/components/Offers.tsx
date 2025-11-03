import { Users, User, FileText, Search, MessageSquare, Target, CheckCircle } from "lucide-react";

const Offers = () => {
  return (
    <section id="angebote" className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
            Wie ich helfe
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Gruppenlektionen */}
          <div className="bg-card rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6 mx-auto">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-center text-primary mb-8">
              Einzelne Lektion
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Was gehört in ein Motivationsschreiben, was nicht?</span>
              </div>
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Wie Untersuche ich eine Stellenbeschreibeung und die Firma?</span>
              </div>
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Wie sieht ein vollständiges Bewerbungsdossier aus?</span>
              </div>
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Professionell online Auftreten.</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Häufigsten Fragen beim Bewerbungsgespräch diskutieren.</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Wie beim Bewerbungsgespräch auftreten?.</span>
              </div>
            </div>
          </div>

          {/* Individueller Fokus */}
          <div className="bg-card rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6 mx-auto">
              <User className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-center text-primary mb-8">
              Mehrere Lektionen
            </h3>
            <div className="space-y-4">
              
            <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Was gehört in ein Motivationsschreiben, was nicht?</span>
              </div>
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Wie Untersuche ich eine Stellenbeschreibeung und die Firma?</span>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Individuelles Stärken- und Interessenprofil kreieren und diskutieren.</span>
              </div>
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Wie sieht ein vollständiges Bewerbungsdossier aus?</span>
              </div>
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Professionell online Auftreten.</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Häufigsten Fragen beim Bewerbungsgespräch diskutieren und vorbereiten.</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Wie beim Bewerbungsgespräch auftreten? Individuell auf die Stelle der Schüler.</span>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Wie Untersuche ich eine Stellenbeschreibung und die Firma?</span>
              </div>
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Was gehört zu einem Bewerbungsdossier? (Theorie)</span>
              </div>
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Professionell online Auftreten. (Theorie)</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Häufigsten Fragen beim Bewerbungsgespräch diskutieren und vorbereiten.</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Wie beim Bewerbungsgespräch auftreten? Individuell auf die Stellen der Schüler angepasst.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Schreiben, Feedback & Korrektur Motivationsschreiben und CV</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Bewerbungsgespräche realitätsnah trainieren</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;