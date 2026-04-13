"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface ContactDialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  openDialog: () => void;
}

const ContactDialogContext = createContext<ContactDialogContextValue | null>(
  null,
);

export function ContactDialogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const openDialog = useCallback(() => setOpen(true), []);

  return (
    <ContactDialogContext.Provider value={{ open, setOpen, openDialog }}>
      {children}
    </ContactDialogContext.Provider>
  );
}

export function useContactDialog() {
  const ctx = useContext(ContactDialogContext);
  if (!ctx)
    throw new Error(
      "useContactDialog must be used within ContactDialogProvider",
    );
  return ctx;
}
