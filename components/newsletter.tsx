"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Sparkles, ShieldCheck, ArrowRight } from "lucide-react"
import { toast } from "sonner"

export function Newsletter() {
    const [email, setEmail] = useState("")

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            toast.success("Protocol Authorized", {
                description: "Your institutional email has been authorized for clinical updates."
            })
            setEmail("")
        }
    }

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground text-background relative overflow-hidden">
            {/* Abstract Background element */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20">
                            <Sparkles className="h-4 w-4 text-accent" />
                            <span className="text-xs font-bold text-accent uppercase tracking-widest">Stay Informed</span>
                        </div>

                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                            Join the <span className="italic text-accent">Research Circle</span>
                        </h2>

                        <p className="text-lg opacity-70 leading-relaxed max-w-md">
                            Receive exclusive laboratory insights, early access to new compounds, and professional wholesale opportunities directly to your inbox.
                        </p>

                        <div className="flex flex-wrap gap-6 pt-4">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="h-5 w-5 text-accent" />
                                <span className="text-sm font-medium opacity-80">No Spam, Ever</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="h-5 w-5 text-accent" />
                                <span className="text-sm font-medium opacity-80">Unsubscribe Anytime</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl">
                            <form onSubmit={handleSubscribe} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium opacity-60 ml-1">Professional Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 opacity-40" />
                                        <Input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="researcher@institution.org"
                                            className="h-16 bg-white/10 border-white/20 pl-12 focus:ring-accent text-lg rounded-2xl placeholder:opacity-40"
                                            required
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full h-16 bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold rounded-2xl group transition-all active:scale-95"
                                >
                                    Join Now
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>

                                <p className="text-center text-xs opacity-40 leading-relaxed">
                                    By joining, you agree to our Terms of Service and Privacy Policy. We value your data security as much as our lab standards.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
