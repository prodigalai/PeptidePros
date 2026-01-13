"use client"

import type React from "react"
import { useState, useEffect } from "react"
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
  const [clientIP, setClientIP] = useState<string>("")

  // Get client IP on component mount
  useEffect(() => {
    // Option 1: Get IP from ipify.org
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setClientIP(data.ip))
      .catch(() => {
        // Fallback: Try ipapi.co
        fetch('https://ipapi.co/ip/')
          .then(res => res.text())
          .then(ip => setClientIP(ip.trim()))
          .catch(() => {
            // Second fallback: Try another service
            fetch('https://api.ipify.org?format=text')
              .then(res => res.text())
              .then(ip => setClientIP(ip.trim()))
              .catch(() => setClientIP(""))
          })
      })
  }, [])

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "US",
    cardNumber: "",
    expiry: "",
    cvc: "",
  })

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = subtotal > 150 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    // Handle phone number - only allow 10 digits (no country code)
    if (name === "phone") {
      // Remove all non-digit characters
      const digitsOnly = value.replace(/\D/g, "")
      // Limit to 10 digits
      const limitedDigits = digitsOnly.slice(0, 10)
      setFormData((prev) => ({ ...prev, [name]: limitedDigits }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleNext = () => {
    if (step === "details") {
      // Validate all required fields including address fields
      if (!formData.email || !formData.firstName || !formData.lastName || !formData.phone || 
          !formData.address || !formData.country || !formData.city || !formData.state || !formData.zip) {
        toast.error("Please provide all required shipping details")
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
      
      setStep("payment")
    } else if (step === "payment") {
      if (!formData.cardNumber || !formData.expiry) {
        toast.error("Please provide valid payment details")
        return
      }
      
      // Validate card number (remove spaces and check length)
      const cardDigits = formData.cardNumber.replace(/\D/g, "")
      if (cardDigits.length < 13 || cardDigits.length > 19) {
        toast.error("Please enter a valid card number")
        return
      }
      
      // Validate expiry date format (MM/YY)
      const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/
      if (!expiryRegex.test(formData.expiry)) {
        toast.error("Please enter expiry date in MM/YY format")
        return
      }
      
      setStep("review")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Final validation before submission
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.phone || 
        !formData.address || !formData.country || !formData.city || !formData.state || !formData.zip) {
      toast.error("Please provide all required shipping details")
      setLoading(false)
      return
    }
    
    if (formData.firstName.trim().length < 5) {
      toast.error("First name must be at least 5 characters long")
      setLoading(false)
      return
    }
    
    if (formData.lastName.trim().length < 5) {
      toast.error("Last name must be at least 5 characters long")
      setLoading(false)
      return
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address")
      setLoading(false)
      return
    }
    
    const phoneDigits = formData.phone.replace(/\D/g, "")
    if (phoneDigits.length !== 10) {
      toast.error("Phone number must be exactly 10 digits")
      setLoading(false)
      return
    }

    try {
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
          amount: Math.round(total * 100), // Convert to cents
          currency: "USD",
          address: formData.address,
          country: formData.country,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
          // ip_address: clientIP, // Send client IP from frontend
          id_address: "3.209.172.72",
          redirect_url: window.location.origin + '/payment-success',
          order_id: `ORD-${Date.now()}`
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Server error occurred" }))
        
        // Handle backend validation errors with missing/empty fields
        let errorDescription = errorData.message || `Server error: ${response.status} ${response.statusText}`
        
        if (errorData.empty_fields && errorData.empty_fields.length > 0) {
          const fields = errorData.empty_fields.map((field: string) => field.charAt(0).toUpperCase() + field.slice(1).toLowerCase()).join(", ")
          errorDescription = `Please fill in: ${fields}`
        }
        
        if (errorData.missing_fields && errorData.missing_fields.length > 0) {
          const fields = errorData.missing_fields.map((field: string) => field.charAt(0).toUpperCase() + field.slice(1).toLowerCase()).join(", ")
          errorDescription = errorDescription + (errorDescription.includes("Please") ? ` and ${fields}` : `Missing: ${fields}`)
        }
        
        toast.error("Payment Failed", {
          description: errorDescription
        });
        setLoading(false);
        return;
      }

      const result = await response.json();

      if (result.success && result.payment_url) {
        toast.success("Redirecting to PayAgency Secure Terminal...")
        window.location.href = result.payment_url;
      } else {
        // Handle backend validation errors
        let errorDescription = result.message || "Payment initialization failed. Please try again."
        
        if (result.empty_fields && result.empty_fields.length > 0) {
          const fields = result.empty_fields.map((field: string) => field.charAt(0).toUpperCase() + field.slice(1).toLowerCase()).join(", ")
          errorDescription = `Please fill in: ${fields}`
        }
        
        if (result.missing_fields && result.missing_fields.length > 0) {
          const fields = result.missing_fields.map((field: string) => field.charAt(0).toUpperCase() + field.slice(1).toLowerCase()).join(", ")
          errorDescription = errorDescription + (errorDescription.includes("Please") ? ` and ${fields}` : `Missing: ${fields}`)
        }
        
        toast.error("Payment Failed", {
          description: errorDescription
        });
        setLoading(false);
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      
      let errorMessage = "Payment gateway communication failure."
      if (error.message) {
        errorMessage = error.message
      } else if (error instanceof TypeError && error.message.includes('fetch')) {
        errorMessage = "Network error. Please check your connection and try again."
      }
      
      toast.error("Process Halted", {
        description: errorMessage
      });
      setLoading(false);
    }
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
                      <div className="md:col-span-1">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">Researcher Email *</label>
                        <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="clinical-contact@laboratory.com" required className="h-12 rounded-xl bg-background border-border/50 focus:border-accent" />
                      </div>
                      <div className="md:col-span-1">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">Phone Number *</label>
                        <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="1234567890" required maxLength={10} pattern="[0-9]{10}" className="h-12 rounded-xl bg-background border-border/50 focus:border-accent" />
                        <p className="text-[9px] text-muted-foreground mt-1 ml-1">Don't add country code. Enter 10 digits only.</p>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">First Name *</label>
                        <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name (min 5 characters)" required minLength={5} className="h-12 rounded-xl bg-background border-border/50" />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">Last Name *</label>
                        <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name (min 5 characters)" required minLength={5} className="h-12 rounded-xl bg-background border-border/50" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">Delivery Address *</label>
                        <Input name="address" value={formData.address} onChange={handleChange} placeholder="Facility Address / Apartment" required className="h-12 rounded-xl bg-background border-border/50" />
                      </div>
                      <div className="grid grid-cols-4 gap-4 md:col-span-2">
                        <div className="md:col-span-1">
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">Country *</label>
                          <select 
                            name="country" 
                            value={formData.country} 
                            onChange={handleChange} 
                            required
                            className="h-12 w-full rounded-xl bg-background border border-border/50 px-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                          >
                            <option value="US">United States</option>
                            <option value="GB">United Kingdom</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="IT">Italy</option>
                            <option value="ES">Spain</option>
                            <option value="NL">Netherlands</option>
                            <option value="BE">Belgium</option>
                            <option value="CH">Switzerland</option>
                            <option value="AT">Austria</option>
                            <option value="SE">Sweden</option>
                            <option value="NO">Norway</option>
                            <option value="DK">Denmark</option>
                            <option value="FI">Finland</option>
                            <option value="IE">Ireland</option>
                            <option value="PT">Portugal</option>
                            <option value="GR">Greece</option>
                            <option value="PL">Poland</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="HU">Hungary</option>
                            <option value="RO">Romania</option>
                            <option value="BG">Bulgaria</option>
                            <option value="HR">Croatia</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="EE">Estonia</option>
                            <option value="LV">Latvia</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MT">Malta</option>
                            <option value="CY">Cyprus</option>
                            <option value="JP">Japan</option>
                            <option value="KR">South Korea</option>
                            <option value="CN">China</option>
                            <option value="IN">India</option>
                            <option value="SG">Singapore</option>
                            <option value="HK">Hong Kong</option>
                            <option value="MY">Malaysia</option>
                            <option value="TH">Thailand</option>
                            <option value="ID">Indonesia</option>
                            <option value="PH">Philippines</option>
                            <option value="VN">Vietnam</option>
                            <option value="NZ">New Zealand</option>
                            <option value="BR">Brazil</option>
                            <option value="MX">Mexico</option>
                            <option value="AR">Argentina</option>
                            <option value="CL">Chile</option>
                            <option value="CO">Colombia</option>
                            <option value="PE">Peru</option>
                            <option value="ZA">South Africa</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="IL">Israel</option>
                            <option value="TR">Turkey</option>
                            <option value="RU">Russia</option>
                            <option value="UA">Ukraine</option>
                          </select>
                        </div>
                        <div className="md:col-span-1">
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">City *</label>
                          <Input name="city" value={formData.city} onChange={handleChange} placeholder="City" required className="h-12 rounded-xl bg-background border-border/50" />
                        </div>
                        <div className="md:col-span-1">
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">State *</label>
                          <Input name="state" value={formData.state} onChange={handleChange} placeholder="State" required className="h-12 rounded-xl bg-background border-border/50" />
                        </div>
                        <div className="md:col-span-1">
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">ZIP/Postal Code *</label>
                          <Input name="zip" value={formData.zip} onChange={handleChange} placeholder="10001" required className="h-12 rounded-xl bg-background border-border/50" />
                        </div>
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
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" loading="lazy" />
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
