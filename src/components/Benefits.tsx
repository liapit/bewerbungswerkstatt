const Benefits = () => {
  return (
    <section id="benefits" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-12">Nutzen für die Schüler</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-6">
            <div className="mx-auto h-[7.5rem] w-[7.5rem] rounded-full bg-accent flex items-center justify-center overflow-hidden">
              <img src="/images/lightbulb.png" alt="Notizbuch Icon" className="h-[6.25rem] w-[6.25rem] lg:h-[7.5rem] lg:w-[7.5rem] object-contain" />
            </div>
            <p className="text-xl text-foreground">Eigene Interessen & Stärken kennenlernen</p>
          </div>
          <div className="space-y-6">
            <div className="mx-auto h-[7.5rem] w-[7.5rem] rounded-full bg-accent flex items-center justify-center overflow-hidden">
              <img src="/images/notebook.png" alt="Rakete Icon" className="h-[6.25rem] w-[6.25rem] lg:h-[7.5rem] lg:w-[7.5rem] object-contain" />
            </div>
            <p className="text-xl text-foreground">Top Bewerbungsunterlagen erstellen können</p>
          </div>
          <div className="space-y-6">
            <div className="mx-auto h-[7.5rem] w-[7.5rem] rounded-full bg-accent flex items-center justify-center overflow-hidden">
              <img src="/images/rocket.png" alt="Glühbirne Icon" className="h-[6.25rem] w-[6.25rem] lg:h-[7.5rem] lg:w-[7.5rem] object-contain" />
            </div>
            <p className="text-xl text-foreground">Sich selbstbewusst präsentieren können.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;


