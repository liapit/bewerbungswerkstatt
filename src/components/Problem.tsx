const Problem = () => {
  return (
    <section id="problem" className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <img
              src="/images/question.png"
              alt="Schüler mit Fragen am Laptop"
              className="w-full max-w-md lg:max-w-lg aspect-square rounded-2xl object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary">Problem</h2>
            <ul className="space-y-6 text-xl lg:text-2xl">
              <li className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary font-bold">?</span>
                <span>Schüler schreiben Bewerbungen mit KI.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary font-bold">?</span>
                <span>Jeder Schüler kann dadurch gleichgute Bewerbungen schreiben.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary font-bold">?</span>
                <span>Wie soll eine Person da herausstechen können?</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;


