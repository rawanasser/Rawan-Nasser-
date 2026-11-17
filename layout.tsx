import type { Metadata } from "next";
import { Cinzel, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rawan Nasser — Software Developer | AI & Product Development",
  description:
    "Portfolio of Rawan Nasser, a software developer working across software engineering, AI, product development, UI/UX, and interactive digital experiences.",
  keywords: [
    "Rawan Nasser",
    "Software Developer",
    "AI & Product Development",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "PyTorch",
    "Computer Vision",
    "Systems Architecture",
  ],
  authors: [{ name: "Rawan Nasser" }],
  openGraph: {
    title: "Rawan Nasser — Software Developer | AI & Product Development",
    description:
      "I build ideas into systems. Software development, intelligent systems, product design, and digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rawan Nasser — Software Developer | AI & Product Development",
    description:
      "I build ideas into systems. Software development, intelligent systems, product design, and digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-ink-deep text-ivory min-h-screen selection:bg-gold selection:text-ink">
        {children}
      </body>
    </html>
  );
}
