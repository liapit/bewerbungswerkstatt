"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Herausforderung", id: "herausforderung" },
  { label: "Lösung", id: "loesung" },
  { label: "Angebot", id: "angebot" },
  { label: "Preise", id: "preise" },
  { label: "Expertin", id: "expertin" },
  { label: "Kontakt", id: "kontakt" },
];

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
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => {
          const el = document.getElementById(idToScroll);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            try {
              window.location.hash = `#${idToScroll}`;
            } catch {
              // no-op
            }
          }
        });
        return () => cancelAnimationFrame(raf2);
      });
      return () => cancelAnimationFrame(raf1);
    }
  }, [mobileOpen, pendingTarget]);

  return (
    <header className="relative z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img
            src="/images/logo_darkmode.png"
            alt="Bewerbungswerkstatt Logo"
            className="h-10 w-auto"
          />
          <nav className="hidden min-[900px]:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-hero-foreground/70 hover:text-hero-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button
            className="hidden min-[900px]:flex bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => document.getElementById("preise")?.scrollIntoView({ behavior: "smooth" })}
          >
            Erstgespräch buchen
          </Button>
          <div className="min-[900px]:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-hero-foreground hover:bg-hero-foreground/10"
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
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate(item.id);
                      }}
                      className="text-lg text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => handleNavigate("preise")}
                >
                  Erstgespräch buchen
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
