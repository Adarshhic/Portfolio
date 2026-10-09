import type { Metadata } from "next";
import { Figtree, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import ClickCanvas from "@/components/ClickCanvas";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/Adarshhic/Portfolio"),
  title: "Adarsh Mishra | Full Stack & Frontend Developer",
  description:
    "Adarsh Mishra is a Full Stack Developer and Frontend Developer Intern specializing in React, Next.js, Node.js, Express, MongoDB, and modern web engineering. Explore projects, skills, and resume.",
  keywords: [
    "Adarsh Mishra",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "Tailwind CSS",
    "Codzy",
    "Smart India Hackathon",
    "Software Engineer",
    "Lucknow",
    "India",
  ],
  authors: [{ name: "Adarsh Mishra" }],
  openGraph: {
    title: "Adarsh Mishra | Full Stack & Frontend Developer",
    description:
      "Building performant, real-world web applications with Next.js, React, Node.js, and modern cloud technologies. Open to full-stack and frontend roles.",
    url: "https://github.com/Adarshhic/Portfolio",
    siteName: "Adarsh Mishra Portfolio",
    images: [
      {
        url: "/images/profile/pfp-latest.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Mishra | Full Stack & Frontend Developer",
    description:
      "Full Stack Developer focused on React, Next.js, Node.js, and scalable web apps. Check out my projects and get in touch!",
    creator: "@adarshic",
    images: ["/images/profile/pfp-latest.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
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
      className={`${figtree.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#0b0d0e" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0b0d0e] text-white">
        <ClickCanvas />
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
