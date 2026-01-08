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
                    <div className="bg-foreground text-background p-8 md:p-10 rounded-[32px] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
                            <TrendingUp className="h-24 w-24" />
                        </div>

                        <div className="relative z-10 space-y-8">
                            <h3 className="text-xl font-medium opacity-80 border-b border-background/10 pb-4">Estimated Totals</h3>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center text-sm opacity-60">
                                    <span>Regular Price</span>
                                    <span className="line-through">${totalOriginal.toFixed(2)}</span>
                                </div>

                                <div className="space-y-1">
                                    <p className="text-sm font-medium opacity-60">Your Bulk Price</p>
                                    <p className="text-5xl font-bold tracking-tight text-accent">${totalDiscounted.toFixed(2)}</p>
                                </div>

                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="text-sm opacity-60 mb-1 font-medium">Total Savings</p>
                                    <p className="text-2xl font-bold text-emerald-400">+ ${savings.toFixed(2)}</p>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-2 text-sm opacity-80 font-medium">
                                    <CheckCircle2 className="h-4 w-4 text-accent" />
                                    Free Global Priority Shipping
                                </div>
                                <div className="flex items-center gap-2 text-sm opacity-80 font-medium">
                                    <CheckCircle2 className="h-4 w-4 text-accent" />
                                    Dedicated Account Manager
                                </div>
                            </div>

                            <button className="w-full h-14 bg-accent text-accent-foreground rounded-2xl font-bold text-lg inline-flex items-center justify-center gap-2 hover:bg-accent/90 transition-all active:scale-95 group">
                                Lock in this Price
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
