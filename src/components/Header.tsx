import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pendingTarget, setPendingTarget] = useState<string | null>(null);

  const handleNavigate = (targetId: string) => {
    setPendingTarget(targetId);
    setMobileOpen(false);
  };

  useEffect(() => {
    if (!mobileOpen && pendingTarget) {
      const idToScroll = pendingTarget;
      setPendingTarget(null);
      // Defer to next frames to ensure dialog unmount + overflow restore
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => {
          const el = document.getElementById(idToScroll);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            // Fallback: update hash so native jump can occur
            try {
              window.location.hash = `#${idToScroll}`;
            } catch {
              // no-op
            }
          }
        });
        // Cleanup second rAF if unmounted early
        return () => cancelAnimationFrame(raf2);
      });
      return () => cancelAnimationFrame(raf1);
    }
  }, [mobileOpen, pendingTarget]);

  return (
    <header className="bg-card shadow-sm border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Bewerbungswerkstatt Logo" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#angebote" className="text-foreground hover:text-primary transition-colors">Wie ich helfe</a>
            <a href="#problem" className="text-foreground hover:text-primary transition-colors">Problem</a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Nutzen</a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">Über mich</a>
            <a href="#kontakt" className="text-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
          </nav>
          <Button className="hidden md:flex" asChild>
            <a href="mailto:audelia@bewerbungswerkstatt.ch">Kontakt aufnehmen</a>
          </Button>
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Menü öffnen"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex flex-col gap-6"
                onOpenAutoFocus={(e) => e.preventDefault()}
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                <nav className="flex flex-col space-y-4">
                  <a
                    href="#angebote"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate("angebote");
                    }}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Wie ich helfe
                  </a>
                  <a
                    href="#problem"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate("problem");
                    }}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Problem
                  </a>
                  <a
                    href="#benefits"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate("benefits");
                    }}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Nutzen
                  </a>
                  <a
                    href="#team"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate("team");
                    }}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Über mich
                  </a>
                  <a
                    href="#kontakt"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate("kontakt");
                    }}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Kontakt
                  </a>
                </nav>
                <Button className="w-full" asChild>
                  <a href="mailto:audelia@bewerbungswerkstatt.ch">Kontakt aufnehmen</a>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;