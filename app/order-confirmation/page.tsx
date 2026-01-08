"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Package, ArrowRight, ShieldCheck, FileText } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function OrderConfirmationPage() {
  const [orderId, setOrderId] = useState("")

  useEffect(() => {
    setOrderId(`PP-${Math.random().toString(36).substr(2, 6).toUpperCase()}-${Math.floor(Math.random() * 900) + 100}`)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-40 pb-24 px-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
        <div className="max-w-3xl mx-auto text-center space-y-12">

          <div className="relative inline-block">
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
            <div className="relative h-24 w-24 bg-accent text-accent-foreground rounded-[32px] flex items-center justify-center mx-auto shadow-2xl shadow-accent/40 animate-in zoom-in duration-700">
              <CheckCircle2 className="h-12 w-12" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground tracking-tight">Protocol <span className="text-accent italic">Authorized</span></h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto font-medium">
              Your research allocation has been secured. A clinical confirmation summary has been dispatched to your registered laboratory email.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-8 bg-muted/20 border border-border/50 rounded-[32px] space-y-6 relative overflow-hidden group hover:border-accent/30 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <FileText className="h-20 w-20" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Order Authorization ID</p>
                <p className="text-2xl font-serif font-light text-foreground">{orderId}</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-accent px-3 py-1 bg-accent/10 rounded-full border border-accent/20 w-fit">
                <ShieldCheck className="h-3.5 w-3.5" />
                SECURITY CLEARED
              </div>
            </div>

            <div className="p-8 bg-muted/20 border border-border/50 rounded-[32px] space-y-6 relative overflow-hidden group hover:border-accent/30 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Package className="h-20 w-20" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Allocation Status</p>
                <p className="text-2xl font-serif font-light text-foreground">Awaiting Dispatch</p>
              </div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">EST. DELIVERY: 2-3 BUSINESS DAYS</p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/profile?tab=orders">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-16 px-10 rounded-2xl font-bold tracking-widest uppercase text-xs gap-3 shadow-xl shadow-accent/20">
                Monitor Dispatch <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/shop">
              <Button size="lg" variant="ghost" className="h-16 px-10 rounded-2xl font-bold uppercase tracking-widest text-[10px] border border-border/50 hover:bg-muted/50">
                Procure Additional Batch
              </Button>
            </Link>
          </div>

          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest pt-12">
            Secure Session Verified • Clinical Grade Fulfillment
          </p>

        </div>
      </main>

      <Footer />
    </div>
  )
}
