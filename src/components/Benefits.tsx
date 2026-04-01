const steps = [
  {
    number: "1",
    title: "Menschliche Analyse",
    text: "Ein echter Experte analysiert Ihren Lebenslauf — nicht ein Algorithmus, sondern jemand, der den Schweizer Arbeitsmarkt kennt.",
  },
  {
    number: "2",
    title: "Erster Eindruck optimieren",
    text: "Struktur, Layout, Kernaussagen — wir optimieren alles, was in den ersten 8 Sekunden zählt.",
  },
  {
    number: "3",
    title: "Ehrlicher, menschlicher Text",
    text: "Keine generischen KI-Phrasen. Echte Worte, die Ihre tatsächlichen Stärken und Erfahrungen zeigen.",
  },
];

const Benefits = () => {
  return (
    <section id="loesung" className="bg-section-dark text-section-dark-foreground py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            So machen Sie den Unterschied
          </h2>
          <p className="text-lg text-section-dark-foreground/70 max-w-2xl mx-auto">
            Drei Schritte zu einer Bewerbung, die wirklich überzeugt.
          </p>
        </div>

        {/* Three steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto mb-20">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-section-dark-foreground/70 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Before / After comparison */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Der Unterschied auf einen Blick
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="rounded-xl p-6 bg-white/5 border border-red-500/30">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-red-400 bg-red-500/10 px-3 py-1 rounded-full mb-4">
                Typisch KI-generiert
              </span>
              <p className="text-section-dark-foreground/80 leading-relaxed italic">
                «Ich bin ein motivierter und ergebnisorientierter Fachmann mit
                ausgezeichneten kommunikativen Fähigkeiten und einer nachgewiesenen
                Erfolgsbilanz bei der Erzielung von Ergebnissen in schnelllebigen
                Umgebungen.»
              </p>
            </div>

            {/* After */}
            <div className="rounded-xl p-6 bg-white/5 border border-accent/30">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                Von uns optimiert
              </span>
              <p className="text-section-dark-foreground/80 leading-relaxed italic">
                «In meiner Rolle bei der Zürcher Kantonalbank habe ich das
                Onboarding-Verfahren für 200+ Kunden neu strukturiert — die
                Bearbeitungszeit sank um 35%. Ich suche eine Position, in der ich
                operative Prozesse weiter verbessern kann.»
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
