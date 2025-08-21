import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card shadow-sm border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/91a47700-6bba-4769-8e5d-c52da851bc42.png" 
              alt="Bewerbungswerkstatt Logo" 
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#angebote" className="text-foreground hover:text-primary transition-colors">
              Angebote
            </a>
            <a href="#ueber-mich" className="text-foreground hover:text-primary transition-colors">
              Über mich
            </a>
            <a href="#kontakt" className="text-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
          </nav>
          <Button className="hidden md:flex">
            Termin buchen
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;