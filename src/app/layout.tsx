import type { Metadata } from "next"
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatedNavLinks } from "@/components/ui/animated-tabs"
import { ModeToggle } from "@/components/ui/theme-toggle"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import Transition from "@/components/transition"
import "./globals.css"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import type React from "react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Alexander Gervais Portfolio",
  description: "Alexander Gervais Portfolio Built with Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Transition>
            <nav className="top-0 z-50 sticky bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 border-b border-border/40 w-full">
              <div className="flex justify-between items-center mx-auto container">
                <Link href="/" className="font-semibold text-foreground/80 text-xl">
                  Alexander Gervais
                </Link>
                <div className="md:flex items-center gap-x-2 hidden">
                  <AnimatedNavLinks />
                  <ModeToggle />
                </div>
                <div className="md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <button className="p-2">
                        <Menu className="w-6 h-6" />
                      </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex flex-col justify-between min-w-64">
                      <SheetHeader>
                        <SheetTitle className="text-left">Navigation</SheetTitle>
                        <SheetDescription className="text-left">Click on a nav item to scroll to it</SheetDescription>
                      </SheetHeader>
                      <Separator />
                      <nav className="flex flex-col gap-4 h-full">
                        <SheetClose>
                        <AnimatedNavLinks />
                        </SheetClose>
                      </nav>
                      <SheetFooter>
                      <div className="flex justify-end p-4">
                        <ModeToggle />
                      </div>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </nav>
            <main className="mx-auto px-4 py-8 container">{children}</main>
            <Toaster />
            <Footer />
          </Transition>
        </ThemeProvider>
      </body>
    </html>
  )
}
