import type { Metadata } from "next";
import { Roboto_Slab, Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto_Slab({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qui-suis je? Atch",
  description: "Non, ce n'est pas un site de rencontre.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
