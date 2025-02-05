"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Codepen, Linkedin, Mail, Phone, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: "https://github.com/freddymaster", icon: Github, label: "GitHub" },
    { href: "https://codepen.io/freddymaster", icon: Codepen, label: "CodePen" },
    { href: "https://www.linkedin.com/in/alexander-gervais-a1baa32a5/", icon: Linkedin, label: "LinkedIn" },
  ]

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <footer className="bg-background border-t">
      <div className="px-4 py-12 container">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="flex flex-col space-y-4"

          >
            <h2 className="font-bold text-2xl">Alexander Gervais</h2>
            <p className="text-muted-foreground text-sm">
              Web developer passionate about creating beautiful and functional websites.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button key={link.label} variant="outline" size="icon" asChild>
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="w-4 h-4" />
                    <span className="sr-only">{link.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href} className="inline-flex items-center text-muted-foreground hover:underline">
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-semibold text-lg">Stay Connected</h3>
            <div className="group flex items-center space-x-2 text-muted-foreground text-sm">
              <Mail className="w-4 h-4" />
              <Link href="mailto:aj@gervaisunplugged.com" className="inline-flex items-center hover:underline">
                aj@gervaisunplugged.com
                <ExternalLink className="opacity-0 group-hover:opacity-100 ml-1 w-3 h-3 transition-opacity" />
              </Link>
            </div>
            <div className="group flex items-center space-x-2 text-muted-foreground text-sm">
              <Phone className="w-4 h-4" />
              <Link href="tel:+17747010774" className="inline-flex items-center hover:underline">
                +1 (774) 701 0774
                <ExternalLink className="opacity-0 group-hover:opacity-100 ml-1 w-3 h-3 transition-opacity" />
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-muted-foreground text-sm">© {currentYear} Alexander Gervais. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

