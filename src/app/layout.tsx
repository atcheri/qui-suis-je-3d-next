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

const commonTitle = "Qui-suis je? Atch";
const commonDescription = "Non, ce n'est pas un site de rencontre.";
const commonImage = "/qui-suis-je-hero.png";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://atsuhiro.site"),
  title: commonTitle,
  description: commonDescription,
  manifest: "/manifest.json",
  themeColor: "#362F78",
  icons: {
    icon: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: commonTitle,
    description: commonDescription,
    images: [commonImage],
  },
  twitter: {
    title: commonTitle,
    description: commonDescription,
    images: [commonImage],
  },
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
