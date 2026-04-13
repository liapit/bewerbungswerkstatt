import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Bitte geben Sie Ihren Namen ein (mind. 2 Zeichen).")
    .max(100, "Name darf maximal 100 Zeichen lang sein."),
  email: z
    .string()
    .email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  message: z
    .string()
    .min(10, "Ihre Nachricht sollte mindestens 10 Zeichen enthalten.")
    .max(5000, "Nachricht darf maximal 5000 Zeichen lang sein."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
