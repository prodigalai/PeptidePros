"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag, Menu, X, LogIn, Headphones, Package, User, LogOut } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart"
import { useAuth } from "@/lib/auth"

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { getItemCount } = useCart()
  const { user, isAuthenticated, isInitialized, logout } = useAuth()
  const cartCount = getItemCount()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0  left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top Banner */}
      <div className="bg-primary/10 border-b border-border hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-xs text-foreground/70">
          <p>FREE PRIORITY SHIPPING on all US orders over $150</p>
          <div className="flex items-center gap-4">
            <Link href="/pros-rewards" className="hover:text-foreground transition-colors">
              Register now to SAVE 25%
            </Link>
            <Link href="/profile" className="hover:text-foreground transition-colors font-medium">
              My Account
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <span className="font-serif text-xl md:text-2xl font-light tracking-wide text-foreground">PeptideVault</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm tracking-wider uppercase transition-colors py-2 ${isActive(link.href) ? "text-foreground font-bold" : "text-foreground/70 hover:text-foreground"
                    }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full shadow-[0_0_8px_rgba(var(--accent),0.5)]" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* <Link href="/contact" className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm">
              <Headphones className="h-4 w-4 text-accent" />
              <span className="hidden md:inline text-foreground/70 hover:text-foreground">Support</span>
            </Link>
            <Link href="/profile?tab=orders" className="hidden sm:block">
              <Button variant="ghost" className={`gap-2 ${isActive("/profile?tab=orders") ? "text-accent bg-accent/5 border border-accent/20" : "text-foreground/70"}`}>
                <Package className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider hidden lg:inline">Orders</span>
              </Button>
            </Link> */}

            {/* User Profile / Login */}
            {/* {isInitialized && isAuthenticated && user ? (
              <div className="hidden sm:flex items-center gap-2">
                <Link href="/profile">
                  <Button variant="ghost" className={`gap-2 h-10 px-3 rounded-xl hover:bg-muted ${isActive("/profile") ? "bg-accent/10 border border-accent/20" : ""}`}>
                    <div className="h-6 w-6 rounded-full overflow-hidden border border-border">
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <span className="text-xs font-bold text-foreground tracking-tight hidden lg:inline">{user.name}</span>
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  onClick={() => {
                    logout()
                    toast.success("Signed out successfully")
                  }}
                  className="h-10 px-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10 gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider hidden lg:inline">Logout</span>
                </Button>
              </div>
            ) : (
              <Link href="/login" className="hidden sm:block">
                <Button variant="ghost" className={`gap-2 px-3 ${isActive("/login") ? "text-accent bg-accent/5 border border-accent/20" : "text-foreground/70"}`}>
                  <LogIn className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider hidden lg:inline">Login</span>
                </Button>
              </Link>
            )} */}

            {/* Surprise Package Button */}
            <Link href="/surprise-package" className="hidden sm:block">
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white font-bold tracking-wider uppercase gap-2 shadow-[0_0_15px_rgba(22,163,74,0.5)] transition-all hover:scale-105"
              >
                <Package className="h-4 w-4" />
                <span className="hidden lg:inline">Surprise Package</span>
              </Button>
            </Link>

            <Link href="/cart">
              <Button
                variant="ghost"
                className={`relative gap-2 px-3 ${isActive("/cart") ? "text-accent bg-accent/5 border border-accent/20" : "text-foreground/70"}`}
              >
                <ShoppingBag className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider hidden lg:inline">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-accent-foreground text-[10px] flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-base tracking-wider uppercase transition-all ${isActive(link.href)
                  ? "bg-accent/10 text-accent font-bold border-l-4 border-accent"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 mt-4 border-t border-border space-y-2">
              {isInitialized && isAuthenticated && user ? (
                <Link
                  href="/profile"
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base tracking-wider uppercase ${isActive("/profile") ? "bg-accent/10 text-accent font-bold" : "text-foreground/70"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  My Profile ({user.name})
                </Link>
              ) : (
                <Link
                  href="/login"
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base tracking-wider uppercase ${isActive("/login") ? "bg-accent/10 text-accent font-bold" : "text-foreground/70"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogIn className="h-5 w-5" />
                  Login
                </Link>
              )}
              {isInitialized && isAuthenticated && (
                <button
                  onClick={() => {
                    logout()
                    setMobileMenuOpen(false)
                    toast.success("Signed out successfully")
                  }}
                  className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-base tracking-wider uppercase text-destructive hover:bg-destructive/10"
                >
                  <LogOut className="h-5 w-5" />
                  Sign Out
                </button>
              )}
              <Link
                href="/profile?tab=orders"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base tracking-wider uppercase ${pathname.includes("tab=orders") ? "bg-accent/10 text-accent font-bold" : "text-foreground/70"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Package className="h-5 w-5" />
                My Orders
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
