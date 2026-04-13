"use client";

import { useContactDialog } from "@/lib/contact-dialog-context";

const Footer = () => {
  const { openDialog } = useContactDialog();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-1">
            <p className="font-semibold">Digital Trust Solutions GmbH</p>
            <p className="text-primary-foreground/60 text-sm">Einsiedeln</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
            <button
              onClick={openDialog}
              className="text-primary-foreground/70 hover:text-white transition-colors"
            >
              audelia@bewerbungswerkstatt.ch
            </button>
            <a
              href="tel:+41766295056"
              className="text-primary-foreground/70 hover:text-white transition-colors"
            >
              076 629 50 56
            </a>
            <a
              href="/schulen"
              className="text-primary-foreground/70 hover:text-white transition-colors"
            >
              Für Stellensuchende im IT-, Finanz-, Versicherungsbereich und Back-Office
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-sm text-primary-foreground/40">
          © 2026 Digital Trust Solutions GmbH
        </div>
      </div>
    </footer>
  );
};

export default Footer;
