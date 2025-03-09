import type { Metadata } from "next";
import { Geist, Geist_Mono, Averia_Libre, Gabarito, Josefin_Sans, Jost } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const averiaLibre = Averia_Libre({
  variable: "--font-averia-libre",
  subsets: ["latin"],
  weight: "400",
});

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nakul Chouksey | Builder & Developer",
  description: "Building web apps, startups, and cool stuff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${averiaLibre.variable}
          ${gabarito.variable}
          ${josefinSans.variable}
          ${jost.variable}
          antialiased bg-black
        `}
      >
        <div className="z-30 pointer-events-none bg-gradient-to-t from-transparent via-transparent to-black w-full h-3/5 fixed top-0"></div>
        {children}
        <Analytics />
        <div className="z-30 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black w-full h-3/5 fixed bottom-0"></div>
      </body>
    </html>
  );
}
