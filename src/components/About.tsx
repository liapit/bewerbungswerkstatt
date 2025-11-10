import consultantPortrait from "@/assets/consultant-portrait.jpg";

const About = () => {
  return (
    <section id="team" className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <img 
                src={consultantPortrait}
                alt="Beraterin Portrait" 
                className="w-80 h-80 rounded-2xl object-cover object-[50%_20%]"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                Über mich
              </h2>
              <h3 className="text-2xl font-bold text-foreground">
                Audelia Babbev-Pittet, Bewerbungscoach
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Ich habe mir zum Ziel gesetzt Schülern zu helfen, aus der Masse herauszustechen mit nahbaren Bewerbungen.
                </p>
                <p>
                  Ich schreibe Bewerbungen mit Leidenschaft und das widerspiegelt sich im Text. Das möchte ich gerne an sie weitergeben! Mit den heutigen KI‑Tools kann das eine Herausforderung sein, jedoch zeige ich den Schülern wie sie es erfolgreich schaffen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;