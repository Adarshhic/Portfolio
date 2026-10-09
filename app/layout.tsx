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
  metadataBase: new URL("https://manixh.vercel.app"),
  title: "Manish Kumar | Full Stack Developer | MERN & Java Full Stack",
  description:
    "Manish Kumar is a Full Stack Developer specializing in MERN Stack, Java Spring Boot, and building end-to-end applications. Explore projects, skills, and contact for collaborations.",
  keywords: [
    "Manish Kumar",
    "Full Stack Developer",
    "MERN Stack",
    "Java Developer",
    "Spring Boot",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Docker",
    "GitHub",
    "Portfolio",
    "Software Engineer",
    "India",
  ],
  authors: [{ name: "Manish Kumar" }],
  openGraph: {
    title: "Manish Kumar | Full Stack Developer | MERN & Java Full Stack",
    description:
      "Building real-world applications with Java, MERN Stack, microservices, and cloud technologies. Open to opportunities in software development.",
    url: "https://manixh.vercel.app/",
    siteName: "Manish Kumar Portfolio",
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
    title: "Manish Kumar | Full Stack Developer | MERN & Java Full Stack",
    description:
      "Full Stack Developer focused on Java, MERN, microservices, and cloud. Check out my projects and get in touch!",
    creator: "@Manixh02",
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
