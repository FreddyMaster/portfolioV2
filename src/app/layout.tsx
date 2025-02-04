import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimatedNavLinks } from "@/components/ui/animated-tabs";
import { ModeToggle } from "@/components/ui/theme-toggle";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster"
import Transition from "@/components/transition";

import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexander Gervais Portfolio",
  description: "Alexander Gervais Portfolio Built with Next.js",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Transition>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <nav className="top-0 z-50 sticky bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 border-b border-border/40 w-full">
              <div className="flex justify-between items-center mx-auto container">
                <Link href="/" className="font-semibold text-foreground/80 text-xl">Alexander Gervais</Link>
                <div className="flex items-center gap-x-2">
                  <AnimatedNavLinks />
                  <ModeToggle />
                </div>
              </div>
            </nav>
            {children}
            <Toaster />
            <Footer />
          </ThemeProvider>
        </Transition>
      </body>
    </html>
  );
}
