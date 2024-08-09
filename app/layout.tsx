import type { Metadata } from "next";
import { Albert_Sans, Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Albert_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"], // Specify the weights you want to use
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={unbounded.className}>
        <main className="antialiased">{children}</main>
      </body>
    </html>
  );
}
