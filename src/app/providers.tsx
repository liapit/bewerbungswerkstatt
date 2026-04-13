"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useState } from "react";
import { ContactDialogProvider } from "@/lib/contact-dialog-context";
import ContactFormDialog from "@/components/ContactFormDialog";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ContactDialogProvider>
          <Toaster />
          <Sonner />
          <ContactFormDialog />
          {children}
        </ContactDialogProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
