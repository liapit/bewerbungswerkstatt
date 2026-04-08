import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bewerbungswerkstatt.ch"),
  title: "Bewerbungswerkstatt – Professionelle CV-Beratung in der Deutschschweiz",
  description:
    "Bewerbungswerkstatt – Professionelle CV-Beratung für Fachkräfte in Tech, Finance und Back Office in der Deutschschweiz. Authentische Lebensläufe, keine KI-Massenware.",
  openGraph: {
    title: "Bewerbungswerkstatt – Professionelle CV-Beratung",
    description:
      "Professionelle CV-Beratung für Fachkräfte in der Deutschschweiz. Authentisch, menschlich, überzeugend.",
    type: "website",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
