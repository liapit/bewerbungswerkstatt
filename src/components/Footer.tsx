const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-1">
            <p className="font-semibold text-foreground">Digital Trust Solutions GmbH</p>
            <p className="text-muted-foreground">Einsiedeln</p>
          </div>
          <div>
            <a href="mailto:audelia@babbev.com" className="text-primary hover:underline">
              audelia@babbev.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


