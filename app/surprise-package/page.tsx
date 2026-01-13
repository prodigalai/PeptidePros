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
        amount: "500",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "US"
    })
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        
        // Handle phone number - only allow 10 digits
        if (name === "phone") {
            // Remove all non-digit characters
            const digitsOnly = value.replace(/\D/g, "")
            // Limit to 10 digits
            const limitedDigits = digitsOnly.slice(0, 10)
            setFormData((prev) => ({ ...prev, [name]: limitedDigits }))
        } else if (name === "amount") {
            // Handle amount - remove $ sign and allow only numbers and decimal point
            let cleanedValue = value.replace(/[^0-9.]/g, "")
            // Remove leading zeros except for decimal numbers
            if (cleanedValue.length > 1 && cleanedValue[0] === '0' && cleanedValue[1] !== '.') {
                cleanedValue = cleanedValue.replace(/^0+/, '') || '0'
            }
            // Allow only one decimal point
            const parts = cleanedValue.split(".")
            const formattedValue = parts.length > 2 
                ? parts[0] + "." + parts.slice(1).join("")
                : cleanedValue
            setFormData((prev) => ({ ...prev, [name]: formattedValue }))
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }))
        }
    }

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validation - Check all required fields
        if (!formData.age || !formData.gender || !formData.focusArea || !formData.amount || !formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.state || !formData.zip) {
            toast.error("Please fill in all required fields, including complete billing address.")
            return
        }

        // Validate name length (minimum 5 characters)
        if (formData.firstName.trim().length < 5) {
            toast.error("First name must be at least 5 characters long")
            return
        }
        
        if (formData.lastName.trim().length < 5) {
            toast.error("Last name must be at least 5 characters long")
            return
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address")
            return
        }

        // Validate phone number (must be 10 digits)
        const phoneDigits = formData.phone.replace(/\D/g, "")
        if (phoneDigits.length !== 10) {
            toast.error("Phone number must be exactly 10 digits")
            return
        }

        // Parse and validate amount - ensure it's a valid number in dollars
        const cleanedAmount = formData.amount ? formData.amount.toString().replace(/[^0-9.]/g, "") : "0"
        const baseAmount = parseFloat(cleanedAmount)
        
        if (isNaN(baseAmount) || baseAmount < 5) {
            toast.error("Minimum package value is $5.")
            return
        }

        // Calculate platform fee (15%)
        const platformFee = baseAmount * 0.15
        // Calculate total (base amount + platform fee)
        const totalAmount = baseAmount + platformFee

        setLoading(true)

        try {
            // In a real app, you'd probably save the order to your DB first
            // and then initiate payment. For now, we follow the user's flow.

            // Send total amount (base + 15% platform fee) in dollars
            const response = await fetch('https://peptide-445ed25dbf1d.herokuapp.com/api/payment/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    phone_number: formData.phone ? `+1${formData.phone}` : "",
                    amount: totalAmount, // Total amount (base + 15% platform fee)
                    currency: "USD",
                    address: formData.address,
                    country: formData.country,
                    city: formData.city,
                    state: formData.state,
                    zip: formData.zip,
                    redirect_url: window.location.origin + '/payment-success',
                    order_id: `SURPRISE-${Date.now()}`
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: "Server error occurred" }))
                toast.error("Payment Failed", {
                    description: errorData.message || `Server error: ${response.status} ${response.statusText}`
                });
                setLoading(false);
                return;
            }

            const result = await response.json();

            if (result.success && result.payment_url) {
                toast.success("Redirecting to secure payment gateway...")
                window.location.href = result.payment_url;
            } else {
                toast.error("Payment Initialization Failed", {
                    description: result.message || "Payment initialization failed. Please try again."
                });
                setLoading(false);
            }
        } catch (error: any) {
            console.error('Payment error:', error);
            
            let errorMessage = "Payment request failed. Please try again."
            if (error.message) {
                errorMessage = error.message
            } else if (error instanceof TypeError && error.message.includes('fetch')) {
                errorMessage = "Network error. Please check your connection and try again."
            }
            
            toast.error("Payment Request Failed", {
                description: errorMessage
            });
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
                    <div className="inline-flex items-center justify-center p-2 bg-accent/10 rounded-full mb-2 animate-pulse">
                        <Sparkles className="h-5 w-5 text-accent" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-light text-foreground tracking-tight">
                        The Surprise Package
                    </h1>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
                        Tell us about yourself, and our algorithm will curate a premium selection of vitamins and supplements tailored specifically to your biology and goals.
                    </p>
                </div>



                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Form Section */}
                    <div className="lg:col-span-7 space-y-8">
                        <form onSubmit={handleSubmit} className="space-y-8">

                            {/* Investment Section */}
                            <div className="p-8 bg-card border border-border/50 rounded-[32px] space-y-6 shadow-sm">
                                <h2 className="text-xl font-serif font-light text-foreground flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-bold">1</span>
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

                                        <div className="grid grid-cols-4 gap-2 mb-2">
                                            {["100", "500", "1000", "10000"].map((preset) => (
                                                <Button
                                                    key={preset}
                                                    type="button"
                                                    variant={formData.amount === preset ? "default" : "outline"}
                                                    onClick={() => handleSelectChange("amount", preset)}
                                                    className={`h-10 text-xs font-bold ${formData.amount === preset
                                                        ? "bg-accent text-accent-foreground border-accent shadow-lg shadow-accent/20 scale-105"
                                                        : "hover:bg-accent/10 hover:border-accent/50 text-muted-foreground"
                                                        } transition-all duration-300`}
                                                >
                                                    ${preset}
                                                </Button>
                                            ))}
                                        </div>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-serif text-lg">$</span>
                                            <Input
                                                name="amount"
                                                type="text"
                                                min="5"
                                                value={formData.amount}
                                                onChange={handleInputChange}
                                                className="h-16 pl-8 text-3xl font-bold bg-background border-2 border-border/50 focus:border-accent text-black rounded-xl shadow-inner placeholder:text-muted-foreground/20"
                                                placeholder="20.00"
                                            />
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-bold uppercase tracking-widest">USD</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground ml-1">Minimum $5. No upper limit. Higher budget allows for more premium compounds.</p>
                                    </div>

                                    <div className="mt-8 rounded-2xl overflow-hidden border border-border/50 relative group">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                        <img
                                            src="/g11.png"
                                            alt="Premium Selection"
                                            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <p className="text-white text-xs font-bold uppercase tracking-widest">Premium Collection</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Personal Details */}
                            <div className="p-8 bg-card border border-border/50 rounded-[32px] space-y-6 shadow-sm">
                                <h2 className="text-xl font-serif font-light text-foreground flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-bold">2</span>
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

                            {/* Billing & Shipment Details */}
                            <div className="p-8 bg-card border border-border/50 rounded-[32px] space-y-6 shadow-sm">
                                <h2 className="text-xl font-serif font-light text-foreground flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-bold">3</span>
                                    Billing & Logistics
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">First Name</label>
                                        <Input
                                            name="firstName"
                                            placeholder="First Name (min 5 characters)"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            minLength={5}
                                            className="h-12 rounded-xl bg-background border-border/50 focus:border-accent"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Last Name</label>
                                        <Input
                                            name="lastName"
                                            placeholder="Last Name (min 5 characters)"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            minLength={5}
                                            className="h-12 rounded-xl bg-background border-border/50 focus:border-accent"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Email Address</label>
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="james@example.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="h-12 rounded-xl bg-background border-border/50 focus:border-accent"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Phone Number</label>
                                        <Input
                                            name="phone"
                                            type="tel"
                                            placeholder="1234567890"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            maxLength={10}
                                            pattern="[0-9]{10}"
                                            className="h-12 rounded-xl bg-background border-border/50 focus:border-accent"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Street Address</label>
                                        <Input
                                            name="address"
                                            placeholder="123 Health Ave, Suite 100"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="h-12 rounded-xl bg-background border-border/50 focus:border-accent"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 md:col-span-2">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">City</label>
                                            <Input
                                                name="city"
                                                placeholder="New York"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="h-12 rounded-xl bg-background border-border/50 focus:border-accent"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">State</label>
                                            <Input
                                                name="state"
                                                placeholder="NY"
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                className="h-12 rounded-xl bg-background border-border/50 focus:border-accent"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">ZIP Code</label>
                                            <Input
                                                name="zip"
                                                placeholder="10001"
                                                value={formData.zip}
                                                onChange={handleInputChange}
                                                className="h-12 rounded-xl bg-background border-border/50 focus:border-accent"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Checkout/Summary Section */}
                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
                        <div className="p-8 bg-slate-900 border border-slate-800 rounded-[40px] space-y-8 relative overflow-hidden text-white shadow-2xl">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-2">
                                    <h2 className="font-serif text-3xl font-light text-white">Package Summary</h2>
                                    <div className="bg-slate-800 p-2 rounded-full">
                                        <ShieldCheck className="h-5 w-5 text-emerald-400" />
                                    </div>
                                </div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    Secure Transaction
                                </p>
                            </div>

                            <div className="space-y-4 relative z-10">
                                <div className="flex justify-between items-center py-4 border-b border-slate-700">
                                    <span className="text-sm font-medium text-slate-400">Profile Status</span>
                                    <span className="flex items-center gap-2 text-sm font-bold text-emerald-400">
                                        <CheckCircle2 className="h-4 w-4" />
                                        {formData.age && formData.gender && formData.focusArea ? "Complete" : "Incomplete"}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Base Curated Value</span>
                                        <span className="font-bold text-white">${parseFloat(formData.amount || "0").toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Platform Fee (15%)</span>
                                        <span className="font-bold text-white">${(parseFloat(formData.amount || "0") * 0.15).toFixed(2)}</span>
                                    </div>
                                    {formData.subscription === "recurring" && (
                                        <div className="flex justify-between text-sm text-emerald-400">
                                            <span>Subscription Benefit</span>
                                            <span className="font-bold">Priority Processing</span>
                                        </div>
                                    )}
                                </div>

                                <div className="pt-6 border-t border-slate-700 flex justify-between items-baseline">
                                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">Total Due</span>
                                    <span className="text-4xl font-serif font-light text-white">${(parseFloat(formData.amount || "0") * 1.15).toFixed(2)}</span>
                                </div>
                            </div>

                            <Button
                                onClick={handleSubmit}
                                className="relative w-full h-16 rounded-2xl font-bold tracking-[0.2em] uppercase text-sm overflow-hidden group transition-all hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(var(--accent),0.5)]"
                                disabled={loading}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-200 via-accent to-amber-200 opacity-90 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                                <span className="relative z-10 text-black flex items-center justify-center gap-2">
                                    {loading ? "Processing Securely..." : (
                                        <>
                                            Proceed to Checkout
                                            <ShieldCheck className="h-4 w-4" />
                                        </>
                                    )}
                                </span>
                            </Button>


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
