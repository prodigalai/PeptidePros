"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/lib/cart"
import { toast } from "sonner"
import {
  ShieldCheck,
  Truck,
  CreditCard,
  ChevronRight,
  ChevronLeft,
  Lock,
  FlaskConical,
  CheckCircle2
} from "lucide-react"

type CheckoutStep = "details" | "payment" | "review"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, clearCart } = useCart()
  const [step, setStep] = useState<CheckoutStep>("details")
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  })

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = subtotal > 150 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step === "details") {
      if (!formData.email || !formData.firstName || !formData.address) {
        toast.error("Please provide all required shipping details")
        return
      }
      setStep("payment")
    } else if (step === "payment") {
      if (!formData.cardNumber || !formData.expiry) {
        toast.error("Please provide valid payment details")
        return
      }
      setStep("review")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate clinical payment processing
    setTimeout(() => {
      clearCart()
      setLoading(false)
      toast.success("Order Authorized Successfully", {
        description: "Your research compounds are being prepared for dispatch."
      })
      router.push("/order-confirmation")
    }, 2500)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-40 pb-24 px-4 text-center">
          <FlaskConical className="h-16 w-16 text-muted-foreground mx-auto mb-6 opacity-20" />
          <h1 className="text-3xl font-serif font-light mb-4 text-foreground">Procurement Terminal Empty</h1>
          <p className="text-muted-foreground mb-10">No items detected in current research batch.</p>
          <Button onClick={() => router.push("/shop")} variant="outline" className="rounded-full px-8 h-12 font-bold tracking-widest uppercase text-[10px]">
            Back to Repository
          </Button>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Checkout Flow */}
          <div className="lg:col-span-8 space-y-12">

            {/* Progress Header */}
            <div className="flex items-center justify-between relative max-w-lg mx-auto mb-16">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
              {[
                { id: "details", icon: Truck, label: "Logistics" },
                { id: "payment", icon: CreditCard, label: "Authorization" },
                { id: "review", icon: ShieldCheck, label: "Review" }
              ].map((s, i) => (
                <div key={s.id} className="relative z-10 flex flex-col items-center gap-3">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step === s.id ? "bg-accent border-accent text-accent-foreground shadow-lg shadow-accent/20" :
                      (i < ["details", "payment", "review"].indexOf(step)) ? "bg-emerald-500 border-emerald-500 text-white" : "bg-background border-border text-muted-foreground"
                    }`}>
                    {(i < ["details", "payment", "review"].indexOf(step)) ? <CheckCircle2 className="h-6 w-6" /> : <s.icon className="h-5 w-5" />}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${step === s.id ? "text-accent" : "text-muted-foreground"}`}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Form Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

              {step === "details" && (
                <div className="space-y-8">
                  <div className="p-8 bg-muted/20 border border-border/50 rounded-[32px] space-y-6">
                    <h2 className="text-xl font-serif font-light text-foreground">Secure Shipment Logistics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">Researcher Email</label>
                        <Input name="email" value={formData.email} onChange={handleChange} placeholder="clinical-contact@laboratory.com" className="h-12 rounded-xl bg-background border-border/50 focus:border-accent" />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">First Name</label>
                        <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="h-12 rounded-xl bg-background border-border/50" />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">Last Name</label>
                        <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="h-12 rounded-xl bg-background border-border/50" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">Delivery Address</label>
                        <Input name="address" value={formData.address} onChange={handleChange} placeholder="Facility Address / Apartment" className="h-12 rounded-xl bg-background border-border/50" />
                      </div>
                      <div className="grid grid-cols-3 gap-4 md:col-span-2">
                        <Input name="city" value={formData.city} onChange={handleChange} placeholder="City" className="h-12 rounded-xl bg-background border-border/50" />
                        <Input name="state" value={formData.state} onChange={handleChange} placeholder="State" className="h-12 rounded-xl bg-background border-border/50" />
                        <Input name="zip" value={formData.zip} onChange={handleChange} placeholder="ZIP Code" className="h-12 rounded-xl bg-background border-border/50" />
                      </div>
                    </div>
                  </div>
                  <Button onClick={handleNext} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 rounded-2xl font-bold tracking-widest uppercase text-xs gap-3">
                    Continue to Authorization <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {step === "payment" && (
                <div className="space-y-8">
                  <div className="p-8 bg-muted/20 border border-border/50 rounded-[32px] space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-serif font-light text-foreground">Secure Authorization</h2>
                      <Lock className="h-4 w-4 text-emerald-500" />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">Card Number</label>
                        <Input name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="4242 4242 4242 4242" className="h-12 rounded-xl bg-background border-border/50" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">Expiry Date</label>
                          <Input name="expiry" value={formData.expiry} onChange={handleChange} placeholder="MM/YY" className="h-12 rounded-xl bg-background border-border/50" />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">CVC CODE</label>
                          <Input name="cvc" value={formData.cvc} onChange={handleChange} placeholder="XXX" className="h-12 rounded-xl bg-background border-border/50" />
                        </div>
                      </div>
                    </div>
                    <p className="text-[10px] text-muted-foreground text-center">
                      All transactions are processed using high-security 256-bit AES encryption protocols.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Button onClick={() => setStep("details")} variant="outline" className="h-14 rounded-2xl px-8 flex items-center gap-2 font-bold tracking-widest uppercase text-xs">
                      <ChevronLeft className="h-4 w-4" /> Back
                    </Button>
                    <Button onClick={handleNext} className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 h-14 rounded-2xl font-bold tracking-widest uppercase text-xs gap-3">
                      Proceed to Final Review <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === "review" && (
                <div className="space-y-8">
                  <div className="p-8 bg-muted/20 border border-border/50 rounded-[32px] space-y-6">
                    <h2 className="text-xl font-serif font-light text-foreground">Final Protocol Authorization</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Shipping Destination</p>
                        <p className="text-sm font-medium">{formData.firstName} {formData.lastName}</p>
                        <p className="text-sm text-muted-foreground">{formData.address}, {formData.city}, {formData.state} {formData.zip}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Payment Protocol</p>
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-accent" />
                          <p className="text-sm font-medium">VISA ending in {formData.cardNumber.slice(-4) || "4242"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button onClick={handleSubmit} disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-16 rounded-2xl font-bold tracking-[0.2em] uppercase text-sm gap-3 shadow-2xl shadow-accent/40">
                    {loading ? "Authorizing Security clearance..." : "Authorize Procurement Mission"}
                  </Button>
                  <Button onClick={() => setStep("payment")} variant="ghost" className="w-full text-muted-foreground hover:text-foreground h-12 rounded-xl text-[10px] font-bold uppercase tracking-widest">
                    Modify Authorization Details
                  </Button>
                </div>
              )}

            </div>
          </div>

          {/* Allocation Sidebar */}
          <div className="lg:col-span-4">
            <div className="p-8 bg-background border border-border shadow-2xl shadow-accent/5 rounded-[40px] sticky top-32 space-y-8 overflow-hidden">
              <div className="absolute -top-12 -right-12 h-40 w-40 bg-accent/5 rounded-full blur-3xl" />

              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-1">Batch Allocation</h2>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Scientific Inventory Review</p>
              </div>

              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 no-scrollbar">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 group">
                    <div className="h-12 w-12 rounded-xl bg-muted overflow-hidden flex-shrink-0 border border-border/50">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 space-y-0.5">
                      <p className="text-[13px] font-medium leading-tight">{item.product.name}</p>
                      <div className="flex justify-between items-baseline">
                        <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tight">QTY: {item.quantity}</p>
                        <p className="text-sm font-serif font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-border/50">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground font-medium uppercase tracking-widest">Subtotal</span>
                  <span className="text-foreground font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground font-medium uppercase tracking-widest">Logistics</span>
                  <span className="text-foreground font-bold">{shipping === 0 ? "Comp." : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground font-medium uppercase tracking-widest">Gov. Tax</span>
                  <span className="text-foreground font-bold">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-border flex justify-between items-baseline">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Total Value</span>
                <div className="text-right">
                  <span className="text-3xl font-serif font-light text-foreground">${total.toFixed(2)}</span>
                  <p className="text-[9px] text-muted-foreground mt-1 uppercase tracking-widest font-bold">Secure USD Rate</p>
                </div>
              </div>

              <div className="p-4 bg-muted/30 rounded-2xl flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <p className="text-[10px] text-muted-foreground font-medium leading-relaxed">
                  Your data is encrypted using advanced clinical-standard security protocols to ensure complete research privacy.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
