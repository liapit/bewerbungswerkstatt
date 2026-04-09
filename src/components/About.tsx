"use client";

import consultantPortrait from "@/assets/consultant-portrait.jpg";
import type { StaticImageData } from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

const experts = [
  {
    name: "Audelia Babbev-Pittet",
    role: "Bewerbungsspezialistin im Finanz- Versicherungs- und Back Office Sektor",
    bio: [
      "Mit mehr als 5 Jahre Erfahrung in der Beratung von Stellensuchenden habe ich es mir zur Aufgabe gemacht, Sie dabei zu unterstützen, sich authentisch und überzeugend zu bewerben.",
      "Ich schreibe Bewerbungen mit Leidenschaft - und das widerspiegelt sich in jedem Text. In einer Welt voller KI-generierter Lebensläufe und Motivationsschreiben zeige ich Ihnen, wie Sie mit ehrlichen, menschlichen Worten den Unterschied machen. Als lokale Beraterin in der Deutschschweiz kenne ich den Markt und weiss, worauf Rekruter wirklich achten.",
    ],
    imageSrc: (consultantPortrait as StaticImageData).src,
    imageAlt: "Audelia Babbev-Pittet",
  },
  {
    name: "Daniel Babbev",
    role: "Bewerbungsspezialist im IT- und Finanzsektor",
    bio: [
      "Ich unterstütze unsere Kunden seit mehr als drei Jahren und habe mich auf darauf spezialisiert Ihr technischen Erfahrungen und Fähigkeiten überzeugend und professionell auf Papier zu bringen.",
      "Mein Fokus liegt auf Ihren Erfolgen und Arbeitsweisen - etwas, dass Sie persönlich ausmacht. Dadurch erkennt man Ihren Wert und den wertvollen Rucksack, den Sie mit sich tragen.",
    ],
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const About = () => {
  return (
    <section id="experten" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-12">Ihre Experten</h2>
          </ScrollReveal>

          <div className="space-y-16">
            {experts.map((expert, index) => (
              <div key={expert.name} className="grid lg:grid-cols-2 gap-12 items-center">
                <ScrollReveal className="flex justify-center lg:justify-start">
                  {expert.imageSrc ? (
                    <img
                      src={expert.imageSrc}
                      alt={expert.imageAlt ?? expert.name}
                      className="w-80 h-80 rounded-xl object-cover object-[50%_20%] shadow-lg"
                    />
                  ) : (
                    <div className="w-80 h-80 rounded-xl shadow-lg bg-primary/10 text-primary flex items-center justify-center text-7xl font-bold">
                      {getInitials(expert.name)}
                    </div>
                  )}
                </ScrollReveal>
                <ScrollReveal delay={index % 2 === 0 ? "delay-[200ms]" : "delay-[300ms]"}>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground">{expert.name}</h3>
                    <p className="text-sm font-medium text-accent uppercase tracking-wider">
                      {expert.role}
                    </p>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                      {expert.bio.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
