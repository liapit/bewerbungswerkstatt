const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-background py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight text-center lg:text-left">
              Wir machen Schüler fit für die Zukunft
            </h1>
            <ul className="space-y-4 max-w-2xl mx-auto lg:mx-0">
              <li className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary font-bold">✓</span>
                <span className="text-xl lg:text-2xl text-foreground">Coaching für die Lehrstellensuche</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary font-bold">✓</span>
                <span className="text-xl lg:text-2xl text-foreground">Interessen und Stärken identifizieren</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary font-bold">✓</span>
                <span className="text-xl lg:text-2xl text-foreground">Fit sein für den Bewerbungsprozess</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/lovable-uploads/9b6744e7-639c-452f-b4b4-abe789aebc58.png"
              alt="Illustration"
              className="w-full max-w-md lg:max-w-lg rounded-2xl"
            />
          </div>
        </div>
      </div>
      {/* decorative arc motif */}
      <div className="pointer-events-none absolute -bottom-48 -right-48 h-96 w-96 rounded-[50%] bg-secondary opacity-60 blur-[1px]" />
    </section>
  );
};

export default Hero;