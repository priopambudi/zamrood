import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/molecules/Footer";
import Navbar from "@/components/molecules/Navbar";

const albert = Albert_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"], // Specify the weights you want to use
});

export const metadata: Metadata = {
  title: "Zamrood by Pandooin | Premium Travel Experiences in Indonesia",
  description:
    "Experience the finest that Indonesia has to offer with Zamrood's curated selection of premium trips, ensuring comfort every step of the way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={albert.className}>
        <Navbar />
        <main className="antialiased">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
