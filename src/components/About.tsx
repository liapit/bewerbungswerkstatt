import consultantPortrait from "@/assets/consultant-portrait.jpg";

const About = () => {
  return (
    <section id="ueber-mich" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <img 
                src={consultantPortrait}
                alt="Beraterin Portrait" 
                className="w-80 h-80 rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                Über mich
              </h2>
              <h3 className="text-2xl font-bold text-foreground">
                Sarah Müller
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Als erfahrene Karriereberaterin unterstütze ich seit über 8 Jahren junge Menschen dabei, ihren Weg in die Berufswelt zu finden. Mit meiner Expertise in Personalwesen und Coaching helfe ich dabei, Stärken zu entdecken und den passenden Berufseinstieg zu gestalten.
                </p>
                <p>
                  Meine Mission ist es, jedem Einzelnen das Selbstvertrauen und die Werkzeuge zu geben, die für eine erfolgreiche Bewerbung und den Start ins Berufsleben notwendig sind.
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