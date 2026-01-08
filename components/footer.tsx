import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/20 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-light tracking-wide text-foreground">PharmaVault</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Premium research-grade medical products and pharmaceutical compounds for professionals and researchers.
              Quality assured, laboratory tested, and professionally sourced.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@pharmavault.com" className="hover:text-foreground transition-colors">
                info@pharmavault.com
              </a>
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
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PharmaVault. All rights reserved. For research use only.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
