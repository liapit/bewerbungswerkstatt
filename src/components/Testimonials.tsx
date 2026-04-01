const testimonials = [
  {
    name: "Lena M.",
    review:
      "Dank der CV-Beratung habe ich innerhalb von zwei Wochen drei Einladungen zum Vorstellungsgespräch erhalten. Absolut empfehlenswert!",
  },
  {
    name: "Marco S.",
    review:
      "Die Überarbeitung meines Lebenslaufs war Gold wert. Endlich werde ich von Recruitern kontaktiert.",
  },
  {
    name: "Sarah K.",
    review:
      "Professionell, schnell und auf den Punkt. Mein Motivationsschreiben hat sofort überzeugt.",
  },
  {
    name: "Thomas R.",
    review:
      "Als Quereinsteiger wusste ich nicht, wie ich mich präsentieren soll. Bewerbungswerkstatt hat das perfekt gelöst.",
  },
  {
    name: "Julia W.",
    review:
      "Sehr persönliche Beratung. Man merkt, dass hier echte Experten am Werk sind.",
  },
  {
    name: "Fabian H.",
    review:
      "Nach Jahren ohne Bewerbung war ich unsicher. Das Team hat mir Sicherheit und einen top Lebenslauf gegeben.",
  },
];

const TestimonialCard = ({
  name,
  review,
}: {
  name: string;
  review: string;
}) => (
  <div className="flex-shrink-0 w-80 bg-card rounded-xl p-6 shadow-sm border border-border">
    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
      &laquo;{review}&raquo;
    </p>
    <p className="text-foreground font-semibold text-sm">{name}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-primary text-center">
          Das sagen unsere Kunden
        </h2>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-scroll">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
          {/* Duplicate for seamless loop */}
          {testimonials.map((t) => (
            <TestimonialCard key={t.name + "-dup"} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
