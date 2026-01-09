"use client"

import Link from "next/link"
import { Mail, Phone, Cookie, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [showCookieBanner, setShowCookieBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowCookieBanner(true)
    }
  }, [])

  const handleCookieAction = (action: "allow" | "deny") => {
    localStorage.setItem("cookie-consent", action)
    setShowCookieBanner(false)
  }

  return (
    <footer className="bg-muted/20 border-t border-border mt-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl md:text-3xl font-light tracking-tight text-foreground">Peptide<span className="text-accent italic font-medium">Vault</span></span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md font-medium">
              The premier repository for high-purity research compounds. Quality tested and verified to ensure high standards of research integrity.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground group">
                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <a href="mailto:info@peptidevault.club" className="hover:text-foreground transition-colors font-medium">
                  info@peptidevault.club
                </a>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase mb-4 text-foreground">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=peptides"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Peptides
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=compounds"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Research Compounds
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=supplements"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Supplements
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase mb-4 text-foreground">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Technical FAQ
                </Link>
              </li>

            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} PeptideVault. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
            <Link href="/refund-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Refund Policy
            </Link>
            <Link href="/shipping-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-lg border-t border-border shadow-2xl animate-in slide-in-from-bottom duration-500">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Cookie className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-foreground">Cookie Consent</h4>
                <p className="text-xs text-muted-foreground max-w-xl">
                  We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Allow All", you consent to our use of cookies.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 md:flex-none uppercase tracking-widest text-[10px]"
                onClick={() => handleCookieAction("deny")}
              >
                Deny
              </Button>
              <Button
                variant="default"
                size="sm"
                className="flex-1 md:flex-none uppercase tracking-widest text-[10px]"
                onClick={() => handleCookieAction("allow")}
              >
                Allow All
              </Button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
