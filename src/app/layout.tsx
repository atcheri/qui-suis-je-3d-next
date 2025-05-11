import type { Metadata } from "next";
import { Roboto_Slab, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import manifest from "./manifest.json";

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
  const { name: title, description } = manifest;
  return (
    <html lang="en">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="A-T-C-H" key="title" />
        <meta name="description" content={description} />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="mask-icon" href="/itsutsu-inazuma.svg" color="#362F78"></link>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/qui-suis-je-hero.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/qui-suis-je-hero.png" />
        {/* <meta name="twitter:site" content= />
        <meta name="twitter:creator" content= /> */}
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
