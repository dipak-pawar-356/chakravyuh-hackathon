import type { Metadata } from "next";
import { Inter, Orbitron } from 'next/font/google';
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ScrollContainer } from "sanity";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: "Chakravyuh 2.0 | Hackathon",
  description:
    "Official website of Chakravyuh 2.0 Hackathon by SVERI's College of Engineering, Pandharpur.",
  keywords: 'hackathon, coding, programming, innovation, SVERI, Chakravyuh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`{${inter.variable} ${orbitron.variable}`}>
        <body
          className="antialiased bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900"
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
