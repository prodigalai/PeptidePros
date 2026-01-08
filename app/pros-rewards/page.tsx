"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Gift, Zap, TrendingUp, ShieldCheck, FlaskConical, Award, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function ProRewardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-24">
        {/* Elite Hero Section */}
        <section className="px-4 mb-32 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Award className="h-4 w-4 text-accent" />
              <p className="text-accent text-[10px] font-bold uppercase tracking-[0.2em]">Scientific Excellence Program</p>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl font-light text-foreground tracking-tight leading-[0.95]">
              Join the <span className="text-accent italic font-medium">Research Council</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              An exclusive tier for established researchers. Access baseline 25% allocation grants, priority batch verification, and technical assistance.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <Link href="/login">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 rounded-2xl h-16 font-bold tracking-widest uppercase text-xs shadow-2xl shadow-accent/20 gap-3">
                  Apply for Council Access <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="ghost" className="h-16 px-10 rounded-2xl font-bold uppercase tracking-widest text-[10px] border border-border/50 hover:bg-muted/50">
                View Tier Structure
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="px-4 max-w-7xl mx-auto mb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "25% Grant Discount",
                desc: "Immediate 25% allocation reduction applied to every procurement batch automatically.",
                tag: "PERMANENT"
              },
              {
                icon: FlaskConical,
                title: "Priority CoAs",
                desc: "Get initial access to new batch verification reports before they go public.",
                tag: "EXCLUSIVE"
              },
              {
                icon: Star,
                title: "Research Points",
                desc: "Earn 1.5x points on all orders. Redeem for complimentary lab supplies and shipping.",
                tag: "ENHANCED"
              }
            ].map((benefit, i) => (
              <div key={i} className="group relative p-10 bg-muted/20 border border-border/50 rounded-[40px] hover:bg-background hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500">
                <div className="h-14 w-14 rounded-[20px] bg-accent/10 flex items-center justify-center mb-8 border border-accent/20 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <span className="text-[10px] font-bold text-accent tracking-widest mb-4 block">{benefit.tag}</span>
                <h3 className="text-2xl font-serif font-light text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tiers Section */}
        <section className="px-4 max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl font-light">Advancement Pathway</h2>
            <p className="text-muted-foreground uppercase text-[10px] font-bold tracking-[0.2em]">Scale your research capabilities</p>
          </div>

          <div className="space-y-4">
            {[
              { name: "Researcher", spend: "$0 - $1,000", perks: "Standard CoA access, 1x points", active: false },
              { name: "Senior Fellow", spend: "$1,000 - $5,000", perks: "10% store credit, Priority Support", active: true },
              { name: "Principal Investigator", spend: "$5,000+", perks: "25% Grant, Direct Rep access, Free Shipping", active: false }
            ].map((tier, i) => (
              <div key={i} className={`p-8 rounded-[32px] border flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-500 ${tier.active ? "bg-accent text-accent-foreground border-accent shadow-xl shadow-accent/20 scale-105" : "bg-muted/10 border-border/50 opacity-60 hover:opacity-100"}`}>
                <div>
                  <h4 className="text-xl font-serif font-medium mb-1">{tier.name}</h4>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${tier.active ? "text-accent-foreground/70" : "text-muted-foreground"}`}>ANNUAL ALLOCATION: {tier.spend}</p>
                </div>
                <div className="flex-1 max-w-md">
                  <p className="text-sm font-medium leading-relaxed">{tier.perks}</p>
                </div>
                {tier.active ? (
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full border border-white/20">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Active Status</span>
                  </div>
                ) : (
                  <Button variant="ghost" className="rounded-full text-[10px] font-bold uppercase tracking-widest h-10 border border-border/50">View Requirements</Button>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
