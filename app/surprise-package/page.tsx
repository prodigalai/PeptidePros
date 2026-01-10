"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import { Sparkles, Gift, CheckCircle2, ShieldCheck, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { useCart } from "@/lib/cart"

export default function SurprisePackagePage() {
    const router = useRouter()
    const { addItem } = useCart()
    const [formData, setFormData] = useState({
        age: "",
        gender: "",
        healthIssues: "",
        focusArea: "",
        preferences: "",
        subscription: "one-time",
        amount: "50",
    })
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validation
        if (!formData.age || !formData.gender || !formData.focusArea || !formData.amount) {
            toast.error("Please fill in all required fields to generate your package.")
            return
        }

        const amount = parseFloat(formData.amount)
        if (isNaN(amount) || amount < 5) {
            toast.error("Minimum package value is $5.")
            return
        }

        setLoading(true)

        // Create the custom Surprise Package product
        const surpriseProduct = {
            id: `surprise-${Date.now()}`,
            name: `Surprise Package (${formData.focusArea.charAt(0).toUpperCase() + formData.focusArea.slice(1)})`,
            category: "Surprise",
            price: amount,
            image: "/g11.png", // Using a generic supplement image
            description: `Curated package for ${formData.age}yo ${formData.gender}. Focus: ${formData.focusArea}. ${formData.healthIssues ? `Health Notes: ${formData.healthIssues}. ` : ""}${formData.preferences ? `Preferences: ${formData.preferences}` : ""}`,
            rating: 5,
            reviews: 0,
            inStock: true,
            sku: "SURPRISE-PKG",
            quantity: "1 Box"
        }

        // Add to cart and redirect
        // Small delay to show the loading state/animation
        await new Promise(resolve => setTimeout(resolve, 800))

        addItem(surpriseProduct, 1)
        toast.success("Package Generated & Added to Cart", {
            description: "Redirecting to checkout..."
        })

        router.push("/checkout")
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
                    <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-4 animate-pulse">
                        <Sparkles className="h-6 w-6 text-accent" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-light text-foreground tracking-tight">
                        The Surprise Package
                    </h1>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
                        Tell us about yourself, and our algorithm will curate a premium selection of vitamins and supplements tailored specifically to your biology and goals.
                    </p>
                </div>

                {/* Sneak Peek Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 opacity-80 hover:opacity-100 transition-opacity duration-500">
                    {[
                        { src: "/g1.png", label: "Premium Complex" },
                        { src: "/g3.png", label: "Vitality Boosters" },
                        { src: "/g5.png", label: "Essential Oils" },
                        { src: "/g7.png", label: "Recovery Agents" }
                    ].map((item, i) => (
                        <div key={i} className="relative group overflow-hidden rounded-2xl bg-muted/20 border border-border/50 aspect-square">
                            <img
                                src={item.src}
                                alt={item.label}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white text-xs font-bold uppercase tracking-widest">{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Form Section */}
                    <div className="lg:col-span-7 space-y-8">
                        <form onSubmit={handleSubmit} className="space-y-8">

                            {/* Personal Details */}
                            <div className="p-8 bg-card border border-border/50 rounded-[32px] space-y-6 shadow-sm">
                                <h2 className="text-xl font-serif font-light text-foreground flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-bold">1</span>
                                    Biological Profile
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Age</label>
                                        <Input
                                            name="age"
                                            type="number"
                                            placeholder="e.g. 35"
                                            value={formData.age}
                                            onChange={handleInputChange}
                                            className="h-12 rounded-xl bg-background border-border/50 focus:border-accent"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Gender</label>
                                        <Select onValueChange={(val) => handleSelectChange("gender", val)}>
                                            <SelectTrigger className="h-12 rounded-xl bg-background border-border/50 focus:border-accent">
                                                <SelectValue placeholder="Select Gender" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="male">Male</SelectItem>
                                                <SelectItem value="female">Female</SelectItem>
                                                <SelectItem value="other">Other / Prefer not to say</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Primary Focus Area</label>
                                        <Select onValueChange={(val) => handleSelectChange("focusArea", val)}>
                                            <SelectTrigger className="h-12 rounded-xl bg-background border-border/50 focus:border-accent">
                                                <SelectValue placeholder="What are your main goals?" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="energy">Energy & Vitality</SelectItem>
                                                <SelectItem value="sleep">Sleep & Recovery</SelectItem>
                                                <SelectItem value="immunity">Immunity & Defense</SelectItem>
                                                <SelectItem value="stress">Stress & Mood</SelectItem>
                                                <SelectItem value="fitness">Fitness & Performance</SelectItem>
                                                <SelectItem value="beauty">Skin, Hair & Nails</SelectItem>
                                                <SelectItem value="general">General Wellness</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Health Considerations (Optional)</label>
                                        <Textarea
                                            name="healthIssues"
                                            placeholder="List any allergies, health conditions, or dietary restrictions..."
                                            value={formData.healthIssues}
                                            onChange={handleInputChange}
                                            className="min-h-[100px] rounded-xl bg-background border-border/50 focus:border-accent resize-none p-4"
                                        />
                                    </div>

                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Specific Preferences / Dislikes</label>
                                        <Textarea
                                            name="preferences"
                                            placeholder="e.g. I prefer pills over powder, I love Vitamin C, I dislike mint flavor..."
                                            value={formData.preferences}
                                            onChange={handleInputChange}
                                            className="min-h-[100px] rounded-xl bg-background border-border/50 focus:border-accent resize-none p-4"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Investment Section */}
                            <div className="p-8 bg-card border border-border/50 rounded-[32px] space-y-6 shadow-sm">
                                <h2 className="text-xl font-serif font-light text-foreground flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-bold">2</span>
                                    Your Investment
                                </h2>

                                <div className="space-y-6">
                                    <RadioGroup defaultValue="one-time" onValueChange={(val) => handleSelectChange("subscription", val)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <RadioGroupItem value="one-time" id="one-time" className="peer sr-only" />
                                            <label
                                                htmlFor="one-time"
                                                className="flex flex-col items-center justify-between rounded-2xl border-2 border-muted bg-transparent p-4 hover:bg-accent/5 hover:text-accent-foreground peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/5 [&:has([data-state=checked])]:border-accent cursor-pointer transition-all h-full"
                                            >
                                                <Gift className="mb-3 h-6 w-6 text-muted-foreground peer-data-[state=checked]:text-accent" />
                                                <span className="text-sm font-bold uppercase tracking-wider">One-Time Surprise</span>
                                                <span className="text-xs text-muted-foreground mt-1 text-center">Single curated box</span>
                                            </label>
                                        </div>
                                        <div>
                                            <RadioGroupItem value="recurring" id="recurring" className="peer sr-only" />
                                            <label
                                                htmlFor="recurring"
                                                className="flex flex-col items-center justify-between rounded-2xl border-2 border-muted bg-transparent p-4 hover:bg-accent/5 hover:text-accent-foreground peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/5 [&:has([data-state=checked])]:border-accent cursor-pointer transition-all h-full relative overflow-hidden"
                                            >
                                                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[9px] font-bold px-2 py-1 rounded-bl-xl uppercase tracking-wider">Save 10%</div>
                                                <Zap className="mb-3 h-6 w-6 text-muted-foreground peer-data-[state=checked]:text-accent" />
                                                <span className="text-sm font-bold uppercase tracking-wider">Monthly Refill</span>
                                                <span className="text-xs text-muted-foreground mt-1 text-center">Auto-replenish your health</span>
                                            </label>
                                        </div>
                                    </RadioGroup>

                                    <div className="space-y-4 pt-4 border-t border-border/50">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Set Your Budget</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-serif text-lg">$</span>
                                            <Input
                                                name="amount"
                                                type="number"
                                                min="5"
                                                step="1"
                                                value={formData.amount}
                                                onChange={handleInputChange}
                                                className="h-16 pl-8 text-2xl font-serif rounded-xl bg-background border-border/50 focus:border-accent"
                                            />
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-bold uppercase tracking-widest">USD</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground ml-1">Minimum $5. No upper limit. Higher budget allows for more premium compounds.</p>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>

                    {/* Checkout/Summary Section */}
                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
                        <div className="p-8 bg-primary/5 border border-primary/10 rounded-[40px] space-y-8 backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute -top-24 -right-24 h-64 w-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

                            <div>
                                <h2 className="font-serif text-3xl font-light text-foreground mb-2">Package Summary</h2>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Ready for Curation</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-4 border-b border-border/50">
                                    <span className="text-sm font-medium text-muted-foreground">Profile Status</span>
                                    <span className="flex items-center gap-2 text-sm font-bold text-emerald-600">
                                        <CheckCircle2 className="h-4 w-4" />
                                        {formData.age && formData.gender && formData.focusArea ? "Complete" : "Incomplete"}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Base Curated Value</span>
                                        <span className="font-bold">${parseInt(formData.amount || "0").toFixed(2)}</span>
                                    </div>
                                    {formData.subscription === "recurring" && (
                                        <div className="flex justify-between text-sm text-emerald-600">
                                            <span>Subscription Benefit</span>
                                            <span className="font-bold">Priority Processing</span>
                                        </div>
                                    )}
                                </div>

                                <div className="pt-6 border-t border-border flex justify-between items-baseline">
                                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Total Due</span>
                                    <span className="text-4xl font-serif font-light text-foreground">${Math.max(5, parseInt(formData.amount || "0")).toFixed(2)}</span>
                                </div>
                            </div>

                            <Button
                                onClick={handleSubmit}
                                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-16 rounded-2xl font-bold tracking-[0.2em] uppercase text-sm shadow-xl shadow-accent/20 transition-all hover:scale-[1.02]"
                                disabled={loading}
                            >
                                {loading ? "Processing Securely..." : "Proceed to Checkout"}
                            </Button>

                            <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest font-bold opacity-70">
                                <ShieldCheck className="h-4 w-4" />
                                Secure SSL Encrypted Payment
                            </div>
                        </div>

                        <div className="p-6 bg-card border border-border/50 rounded-3xl">
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">What's Inside?</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-sm text-muted-foreground">
                                    <div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 mt-0.5">
                                        <CheckCircle2 className="h-3 w-3" />
                                    </div>
                                    Premium, lab-tested supplements matched to your profile
                                </li>
                                <li className="flex gap-3 text-sm text-muted-foreground">
                                    <div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 mt-0.5">
                                        <CheckCircle2 className="h-3 w-3" />
                                    </div>
                                    Detailed focus cards explaining each compound
                                </li>
                                <li className="flex gap-3 text-sm text-muted-foreground">
                                    <div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 mt-0.5">
                                        <CheckCircle2 className="h-3 w-3" />
                                    </div>
                                    Exclusive wellness guide based on your focus area
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )
}
