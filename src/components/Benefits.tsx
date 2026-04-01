import { ArrowRight, ArrowDown } from "lucide-react";

const transformations = [
  {
    bad: `„Mit großem Interesse habe ich Ihre Ausschreibung für die Position...\u201D`,
    explanation: `Nutzlos — generischer Einstieg. „ß\u201D ist nicht Schweizerdeutsch, wir schreiben „ss\u201D.`,
    good: "Sofort schreiben, was Sie am Unternehmen konkret interessiert",
  },
  {
    bad: `„Sehr geehrte Damen und Herren\u201D`,
    explanation: "Generische Anrede — zeigt keine Recherche",
    good: "Die zuständige Person namentlich ansprechen",
  },
  {
    bad: `„Hiermit bewerbe ich mich...\u201D`,
    explanation: "Nutzlos — sagt nur das Offensichtliche",
    good: "Direkt mit Ihrem Mehrwert oder Interesse einsteigen",
  },
  {
    bad: `„Mit freundlichen Grüssen,\u201D`,
    explanation: "Komma nach Grussformel ist nicht Schweizer Konvention",
    good: `„Freundliche Grüsse\u201D (ohne Komma)`,
  },
];

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

        {/* Transformation examples */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-3">
            Der Unterschied auf einen Blick
          </h3>
          <p className="text-section-dark-foreground/60 text-center mb-8 text-sm">
            Typische Fehler in Schweizer Bewerbungen — und wie es besser geht.
          </p>
          <div className="space-y-4">
            {transformations.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-white/5 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0"
              >
                {/* Bad example */}
                <div className="flex-1">
                  <div>
                    <p className="text-red-300 font-medium leading-relaxed">
                      {item.bad}
                    </p>
                    <p className="text-section-dark-foreground/50 text-sm mt-1.5">
                      {item.explanation}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center sm:px-5">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                    <ArrowRight className="hidden sm:block w-6 h-6 text-accent stroke-[3]" />
                    <ArrowDown className="block sm:hidden w-6 h-6 text-accent stroke-[3]" />
                  </div>
                </div>

                {/* Good example */}
                <div className="flex-1">
                  <div>
                    <p className="text-emerald-300 font-medium leading-relaxed">
                      {item.good}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
