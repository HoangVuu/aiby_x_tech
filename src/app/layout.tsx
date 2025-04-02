import type { Metadata } from "next";

import "./globals.css";
import "../styles/themes.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TitleManager from "../components/TitleManager";

export const metadata: Metadata = {
  title: "Technify",
  description: "Innovative technology solutions for a better future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TitleManager />
        <div>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
