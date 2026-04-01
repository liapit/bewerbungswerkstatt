import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-hero text-hero-foreground min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-16 text-center max-w-4xl relative z-10">
        <span className="inline-block text-sm font-medium tracking-widest uppercase text-accent mb-6">
          Für Professionals in Tech, Banking & Back Office
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
          Heben Sie sich ab
          <br />
          <span className="text-accent">von der KI-generierten Masse</span>
        </h1>

        <p className="text-lg lg:text-xl text-hero-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Wir helfen Ihnen, Ihren besten Lebenslauf zu schreiben — authentisch,
          überzeugend und menschlich. Keine generischen Phrasen, sondern echte Worte,
          die Recruiter überzeugen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6"
            asChild
          >
            <a href="mailto:audelia@bewerbungswerkstatt.ch">Erstgespräch buchen — 95 CHF</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10 text-base px-8 py-6"
            asChild
          >
            <a href="#herausforderung">Mehr erfahren</a>
          </Button>
        </div>

        {/* CSS-only visual: Grid of identical CVs, one stands out */}
        <div className="max-w-lg mx-auto">
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {Array.from({ length: 8 }).map((_, i) => {
              const isHighlighted = i === 5;
              return (
                <div
                  key={i}
                  className={`aspect-[3/4] rounded-sm p-2 sm:p-3 flex flex-col justify-between transition-all duration-300 ${
                    isHighlighted
                      ? "border-2 border-accent bg-accent/10 scale-110 shadow-lg shadow-accent/20 z-10"
                      : "border border-white/15 bg-white/5"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div
                      className={`h-1 rounded-full w-3/4 ${
                        isHighlighted ? "bg-accent/50" : "bg-white/15"
                      }`}
                    />
                    <div
                      className={`h-1 rounded-full w-full ${
                        isHighlighted ? "bg-accent/40" : "bg-white/10"
                      }`}
                    />
                    <div
                      className={`h-1 rounded-full w-5/6 ${
                        isHighlighted ? "bg-accent/35" : "bg-white/10"
                      }`}
                    />
                    <div
                      className={`h-1 rounded-full w-2/3 ${
                        isHighlighted ? "bg-accent/30" : "bg-white/8"
                      }`}
                    />
                  </div>
                  <div className="space-y-1">
                    <div
                      className={`h-1 rounded-full w-full ${
                        isHighlighted ? "bg-accent/25" : "bg-white/8"
                      }`}
                    />
                    <div
                      className={`h-1 rounded-full w-4/5 ${
                        isHighlighted ? "bg-accent/20" : "bg-white/5"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-sm text-hero-foreground/40 mt-4">
            8 Bewerbungen. 7 identisch. Eine sticht heraus.
          </p>
        </div>
      </div>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </section>
  );
};

export default Hero;
