import type { Metadata } from "next";
import { NTR } from "next/font/google"; // Import the specific Google font

import "./globals.css";

// Configure the font instance
const ntrFont = NTR({
  weight: "400",          // NTR is a single-weight font (400)
  subsets: ["latin"],     // Define the character subsets
  variable: "--font-ntr", // Assign a custom CSS variable name
  display: "swap",        // Prevents invisible text shifts while loading
});



 

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "A personal portfolio website showcasing my skills, projects, and experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${ntrFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
