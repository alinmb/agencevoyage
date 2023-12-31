import type { Metadata } from "next";
import "./globals.css";
import Narvbar from "@/components/Narvbar";

export const metadata: Metadata = {
  title: "XXX",
  description:
    "Agence de voyage spécialement dans les campements en montagnes, les randonnées et bien plus encore.",
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
        {children}
      </body>
    </html>
  );
}
