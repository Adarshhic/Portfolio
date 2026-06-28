import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk, Dancing_Script, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-grotesk",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-dancing-script",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Adarsh Mishra — Full Stack Developer",
  description: "Portfolio of Adarsh Mishra, a Full Stack Developer and competitive programmer from Lucknow, India.",
  openGraph: {
    title: "Adarsh Mishra — Full Stack Developer",
    description: "Portfolio of Adarsh Mishra, a Full Stack Developer and competitive programmer from Lucknow, India.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${spaceGrotesk.variable} ${dancingScript.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#F2F0EB" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
