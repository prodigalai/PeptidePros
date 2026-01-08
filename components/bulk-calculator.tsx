"use client"

import { useState, useMemo } from "react"
import { Slider } from "@/components/ui/slider"
import { TrendingUp, Calculator, ArrowRight, CheckCircle2 } from "lucide-react"

export function BulkCalculator() {
    const [quantity, setQuantity] = useState(5)
    const [unitPrice, setUnitPrice] = useState(50)

    const { discount, totalOriginal, totalDiscounted, savings } = useMemo(() => {
        let d = 0
        if (quantity >= 50) d = 25
        else if (quantity >= 20) d = 20
        else if (quantity >= 10) d = 15
        else if (quantity >= 5) d = 10

        const original = quantity * unitPrice
        const discounted = original * (1 - d / 100)
        return {
            discount: d,
            totalOriginal: original,
            totalDiscounted: discounted,
            savings: original - discounted
        }
    }, [quantity, unitPrice])

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/20 mb-4">
                        <Calculator className="h-4 w-4 text-accent" />
                        <span className="text-xs font-bold text-accent uppercase tracking-widest">Savings Simulator</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">Estimate Your <span className="text-accent">Bulk Savings</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Use our interactive tool to see how much you can save by scaling your research requirements.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 space-y-12 bg-muted/20 border border-border p-8 md:p-12 rounded-[32px] backdrop-blur-sm">
                        {/* Quantity Slider */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Research Quantity</label>
                                    <p className="text-3xl font-bold text-foreground mt-1">{quantity} <span className="text-lg font-normal text-muted-foreground">Units</span></p>
                                </div>
                                <div className="text-right">
                                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-bold rounded-lg border border-accent/20">
                                        {discount}% Discount Applied
                                    </span>
                                </div>
                            </div>
                            <Slider
                                value={[quantity]}
                                onValueChange={(val) => setQuantity(val[0])}
                                max={100}
                                min={1}
                                step={1}
                                className="py-4"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground font-medium uppercase tracking-tighter">
                                <span>1 Unit</span>
                                <span>25 Units</span>
                                <span>50 Units</span>
                                <span>75 Units</span>
                                <span>100+ Units</span>
                            </div>
                        </div>

                        {/* Price Input */}
                        <div className="space-y-6">
                            <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Average Unit Price ($)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-medium text-muted-foreground">$</span>
                                <input
                                    type="number"
                                    value={unitPrice}
                                    onChange={(e) => setUnitPrice(Number(e.target.value))}
                                    className="w-full h-16 bg-background border border-border rounded-2xl px-10 text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Results Card */}
                    <div className="bg-foreground text-background p-8 md:p-10 rounded-[32px] shadow-2xl relative overflow-hidden group border border-white/10">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <TrendingUp className="h-40 w-40 rotate-12" />
                        </div>

                        <div className="relative z-10 space-y-8">
                            <div>
                                <h3 className="text-[10px] font-bold opacity-40 uppercase tracking-[0.2em] mb-4">Allocation Summary</h3>
                                <div className="h-px w-full bg-background/10" />
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center text-xs font-medium opacity-50 uppercase tracking-widest">
                                    <span>Baseline Quote</span>
                                    <span className="line-through">${totalOriginal.toFixed(2)}</span>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Authorized Bulk Rate</p>
                                    <p className="text-6xl font-serif font-light tracking-tighter text-accent">${totalDiscounted.toFixed(2)}</p>
                                </div>

                                <div className="p-6 bg-accent/10 rounded-[24px] border border-accent/20">
                                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Institutional Savings</p>
                                    <p className="text-3xl font-serif font-light text-emerald-400">+ ${savings.toFixed(2)}</p>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-background/10">
                                <div className="flex items-center gap-3 text-[10px] opacity-70 font-bold uppercase tracking-widest">
                                    <CheckCircle2 className="h-4 w-4 text-accent" />
                                    Priority Logistics Included
                                </div>
                                <div className="flex items-center gap-3 text-[10px] opacity-70 font-bold uppercase tracking-widest">
                                    <CheckCircle2 className="h-4 w-4 text-accent" />
                                    Batch Reservation Lock
                                </div>
                            </div>

                            <button className="w-full h-16 bg-accent text-accent-foreground rounded-2xl font-bold uppercase tracking-widest text-xs inline-flex items-center justify-center gap-3 hover:bg-accent/90 transition-all active:scale-95 group shadow-xl shadow-accent/20">
                                Authorize This Rate
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
