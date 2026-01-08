import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/20 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl md:text-3xl font-light tracking-tight text-foreground">Peptide<span className="text-accent italic font-medium">Pros</span></span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md font-medium">
              The premier repository for high-purity research compounds. Every batch is HPLC/MS verified at independent clinical facilities to ensure absolute research integrity.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground group">
                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <a href="mailto:info@peptidepros.net" className="hover:text-foreground transition-colors font-medium">
                  info@peptidepros.net
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground group">
                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                <span className="font-medium">+1 (888) 391-1312</span>
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
              <li>
                <Link href="/wholesale" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Bulk Procurement
                </Link>
              </li>
              <li>
                <Link href="/pros-rewards" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Research Council
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} PeptidePros. Clinical Grade Standards. All rights reserved.
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
