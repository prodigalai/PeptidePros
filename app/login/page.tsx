"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { useAuth } from "@/lib/auth"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { login, isAuthenticated, isInitialized } = useAuth()

  useEffect(() => {
    if (isInitialized && isAuthenticated) {
      router.push("/profile")
    }
  }, [isInitialized, isAuthenticated, router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate login
    setTimeout(() => {
      setLoading(false)

      // Dummy User Data
      const dummyUser = {
        id: "usr_12345",
        name: email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1),
        email: email,
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&q=80",
        role: "researcher" as const
      }

      login(dummyUser)
      toast.success(`Welcome back, ${dummyUser.name}!`)
      router.push("/profile")
    }, 1500)
  }

  if (!isInitialized) return null

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your PeptidePros account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 bg-muted/30 border border-border rounded-2xl p-8 backdrop-blur-sm">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email Address</label>
              <Input
                type="email"
                placeholder="you@example.com"
                className="bg-background"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                className="bg-background"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="rounded border-border accent-accent" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-accent hover:text-accent/80 transition-colors font-medium">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base tracking-wide rounded-xl shadow-lg shadow-primary/10"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Verifying...
                </div>
              ) : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/contact" className="text-accent hover:text-accent/80 transition-colors font-bold uppercase tracking-tight text-sm">
                Apply for Access
              </Link>
            </p>
          </div>

          <div className="mt-12 bg-accent/5 border border-accent/20 rounded-2xl p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="text-accent font-bold">Demo mode:</span> Use any email and password to test the premium dashboard.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
