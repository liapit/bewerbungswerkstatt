const Benefits = () => {
  return (
    <section id="benefits" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-12">Nutzen für die Schüler</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-6">
            <div className="mx-auto h-24 w-24 rounded-full bg-accent" />
            <p className="text-xl text-foreground">Eigene Interessen & Stärken kennenlernen</p>
          </div>
          <div className="space-y-6">
            <div className="mx-auto h-24 w-24 rounded-full bg-accent" />
            <p className="text-xl text-foreground">Top Bewerbungsunterlagen erstellen können</p>
          </div>
          <div className="space-y-6">
            <div className="mx-auto h-24 w-24 rounded-full bg-accent" />
            <p className="text-xl text-foreground">Sich selbstbewusst präsentieren können.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;


