const testimonials = [
  {
    name: "Basil N.",
    review:
      "Ich bin absolut fasziniert von dem Motivationsschreiben von Audelia. Ich hatte sogar mein erstes Interview meiner jetzigen Stelle Dank ihr!",
  },
  {
    name: "Melissa H.",
    review:
      "Ich bin schon mehrere Jahre Kundin von Bewerbungswerkstatt und habe bereits einige Interviews ergattert dank ihren Bewerbungsdossiers. :) ",
  },
  {
    name: "Sarah M.",
    review:
      "Ich bin absolut zufrieden mit den Ratschlägen und natürlich mit meinen neuen Bewerbungsunterlagen, mit denen ich sofort erste Intervies ergattert habe.",
  },
  {
    name: "Raphael P.",
    review:
      "Das Team hat mir geholfen meine Bewerbungsunterlagen professionell zu erstellen und ich wurde zu mehreren ersten Interviews eingeladen!",
  },
  {
    name: "Emilie H.",
    review:
      "Ich habe die Beratung und die Dossier-Updates sehr geschätzt. Das Team kennt ihr Businessbereich sehr gut.",
  },
  {
    name: "Alessia A.",
    review:
      "Ich bin sehr dankbar für das Upgrade meines Lebenslaufes und Motivationsschreiben.",
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

import { ScrollReveal } from "@/components/ScrollReveal";

const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/50 overflow-hidden">
      <ScrollReveal className="container mx-auto px-6 mb-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-primary text-center">
          Das sagen unsere Kunden
        </h2>
      </ScrollReveal>

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
