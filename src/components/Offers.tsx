import { Users, User, FileText, Search, MessageSquare, Target, CheckCircle } from "lucide-react";

const Offers = () => {
  return (
    <section id="angebote" className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
            Unsere Angebote
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Modul 2 - Gruppensessions */}
          <div className="bg-card rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6 mx-auto">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-center text-primary mb-8">
              Modul 2 –<br />Gruppensessions
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Stärken- & Interessenprofil vertiefen</span>
              </div>
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Stellenanzeigen & Firmen untersuchen (Praxisübungen)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Professioneller Online-Auftritt (LinkedIn, Social Media)</span>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Erster Eindruck & Auftreten trainieren</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Bewerbungsgespräche in Gruppen üben</span>
              </div>
            </div>
          </div>

          {/* Modul 3 - Einzelcoaching */}
          <div className="bg-card rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6 mx-auto">
              <User className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-center text-primary mb-8">
              Modul 3 –<br />Einzelcoaching
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Individuelle Analyse von Stärken & Interessen</span>
              </div>
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Gezielte Untersuchung von Firmen & Stellen</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Feedback & Korrektur: CV Motivationsschreiben</span>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Realistische Bewerbungsgespräche trainieren</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Auftreten & Wortwahl verbessern</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;