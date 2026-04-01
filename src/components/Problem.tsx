import { ScrollReveal } from "@/components/ScrollReveal";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useCountUp } from "@/hooks/use-count-up";

interface StatData {
  target: number;
  suffix: string;
  label: string;
  subtext: string;
}

const stats: StatData[] = [
  {
    target: 300,
    suffix: "+",
    label: "Bewerbungen pro Stelle",
    subtext: "Der Wettbewerb war noch nie so gross.",
  },
  {
    target: 85,
    suffix: "%",
    label: "identische KI-Lebensläufe",
    subtext: "ChatGPT, gleiche Prompts, gleiche Resultate.",
  },
  {
    target: 8,
    suffix: " Sek.",
    label: "für den ersten Eindruck",
    subtext: "So lange schaut ein Recruiter Ihren CV an.",
  },
];

function StatCard({ stat, delay }: { stat: StatData; delay: string }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const display = useCountUp(
    stat.target,
    isVisible,
    stat.target <= 10 ? 800 : stat.target <= 100 ? 1200 : 1500,
    stat.suffix
  );

  return (
    <div
      ref={ref}
      className={`bg-card rounded-xl p-8 border-l-4 border-accent shadow-sm transition-[opacity,transform] duration-700 ease-out ${delay} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 sm:translate-y-4"
      }`}
    >
      <p className="text-5xl lg:text-7xl font-extrabold text-primary mb-2 tabular-nums">
        {display}
      </p>
      <p className="text-lg font-semibold text-foreground mb-1">
        {stat.label}
      </p>
      <p className="text-muted-foreground">{stat.subtext}</p>
    </div>
  );
}

const Problem = () => {
  return (
    <section id="herausforderung" className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
            Die Realität des Schweizer Arbeitsmarkts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kennen Sie das? Hunderte Bewerbungen verschickt, nur generische Absagen erhalten.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              delay={i > 0 ? `delay-[${i * 150}ms]` : ""}
            />
          ))}
        </div>

        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Der Schweizer Arbeitsmarkt erlebt den stärksten Wettbewerb seit über
            10 Jahren. Alle benutzen dieselben KI-Tools, um dieselben generischen
            Lebensläufe und Motivationsschreiben zu erstellen. Ihr CV sieht aus wie
            jeder andere — und landet auf demselben Stapel.
          </p>

          <p className="text-center mt-6">
            <a
              href="https://www.seco.admin.ch/seco/de/home/Publikationen_Dienstleistungen/Publikationen_und_Formulare/Arbeit/Arbeitslosenversicherung/Die_Lage_auf_dem_Arbeitsmarkt/lage_arbeitsmarkt_2026.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary underline underline-offset-4"
            >
              Offizieller Arbeitsmarktbericht 2026 (SECO)
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Problem;
