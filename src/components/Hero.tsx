const Hero = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
              Bewerbungswerkstatt
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Dein Weg zum erfolgreichen Berufseinstieg
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Jetzt starten
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                Mehr erfahren
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/lovable-uploads/9b6744e7-639c-452f-b4b4-abe789aebc58.png" 
              alt="Person with questions" 
              className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;