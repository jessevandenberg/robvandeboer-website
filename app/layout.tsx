import type { Metadata } from "next";
import { Playfair_Display, Heebo } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tegelhandel Rob v.d. Boer",
  description: "Tegels met karakter voor badkamer, keuken en meer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${playfairDisplay.variable} ${heebo.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
