const Problem = () => {
  const stats = [
    {
      number: "300+",
      label: "Bewerbungen pro Stelle",
      subtext: "Der Wettbewerb war noch nie so gross.",
    },
    {
      number: "85%",
      label: "identische KI-Lebensläufe",
      subtext: "ChatGPT, gleiche Prompts, gleiche Resultate.",
    },
    {
      number: "8 Sek.",
      label: "für den ersten Eindruck",
      subtext: "So lange schaut ein Recruiter Ihren CV an.",
    },
  ];

  return (
    <section id="herausforderung" className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
            Die Realität des Schweizer Arbeitsmarkts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kennen Sie das? Hunderte Bewerbungen verschickt, nur generische Absagen erhalten.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-xl p-8 border-l-4 border-accent shadow-sm"
            >
              <p className="text-5xl lg:text-7xl font-extrabold text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-muted-foreground">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed">
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
      </div>
    </section>
  );
};

export default Problem;
