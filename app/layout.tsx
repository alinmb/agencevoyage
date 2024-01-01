import type { Metadata } from "next";
import "./globals.css";
import Narvbar from "@/components/Narvbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hilink - Votre partenaire d'aventure.",
  description:
    "Agence de voyage spécialisé dans les treks en montagnes, les randonnées et bien plus encore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Narvbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
