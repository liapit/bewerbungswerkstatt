"use client";

import consultantPortrait from "@/assets/consultant-portrait.jpg";
import type { StaticImageData } from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

const About = () => {
  return (
    <section id="expertin" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="flex justify-center lg:justify-start">
              <img
                src={(consultantPortrait as StaticImageData).src}
                alt="Audelia Babbev-Pittet"
                className="w-80 h-80 rounded-xl object-cover object-[50%_20%] shadow-lg"
              />
            </ScrollReveal>
            <ScrollReveal delay="delay-[200ms]">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                  Ihre Expertin
                </h2>
                <h3 className="text-2xl font-bold text-foreground">
                  Audelia Babbev-Pittet
                </h3>
                <p className="text-sm font-medium text-accent uppercase tracking-wider">
                  Bewerbungsspezialistin
                </p>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Mit mehr als 5 Jahre Erfahrung in der Beratung von Stellensuchenden habe ich
                    es mir zur Aufgabe gemacht, Sie dabei zu unterstützen,
                    sich authentisch und überzeugend zu bewerben.
                  </p>
                  <p>
                    Ich schreibe Bewerbungen mit Leidenschaft — und das widerspiegelt
                    sich in jedem Text. In einer Welt voller KI-generierter Lebensläufe und Motivationsschreiben
                    zeige ich Ihnen, wie Sie mit ehrlichen, menschlichen Worten den
                    Unterschied machen. Als lokale Beraterin in der Deutschschweiz kenne
                    ich den Markt und weiss, worauf Recruiter wirklich achten.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
