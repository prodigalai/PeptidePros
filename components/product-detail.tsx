"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star, FileText, ShieldCheck, Microscope, FlaskConical, Thermometer, Database, ArrowRight, Minus, Plus, Info } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ReviewsSection } from "@/components/reviews-section"
import { products } from "@/lib/products"
import { getProductReviews, getAverageRating } from "@/lib/reviews"
import { useCart } from "@/lib/cart"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"

export function ProductDetail({ productId }: { productId: string }) {
  const product = products.find((p) => p.id === productId)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const specData = useMemo(() => {
    if (!product) return null;
    // Mock additional scientific data based on category
    if (product.category === "Peptides") {
      return {
        formula: "C₁₂H₂₀N₄O₄S₂",
        molecularWeight: "356.4 g/mol",
        cas: "135111-11-2",
        purity: "99.1% by HPLC",
        appearance: "Lyophilized White Powder",
        storage: "-20°C Long-term",
        shelfLife: "24 Months"
      }
    }
    return {
      formula: "N/A",
      molecularWeight: "Variable",
      cas: "Institutional Access Only",
      purity: "Pharmaceutical Grade",
      appearance: "Liquid/Powder",
      storage: "Room Temperature / Rec.",
      shelfLife: "18-24 Months"
    }
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center">
        <h1 className="text-4xl font-serif font-light">Compound Not Found</h1>
        <p className="text-muted-foreground mt-4">The requested batch ID does not exist in our central repository.</p>
        <Button variant="outline" className="mt-8 rounded-full" asChild>
          <a href="/shop">Return to Inventory</a>
        </Button>
      </div>
    )
  }

  const reviews = getProductReviews(productId)
  const averageRating = getAverageRating(productId)

  const handleAddToCart = () => {
    addItem(product, quantity)
    toast.success("Added to Cart", {
      description: `${quantity} unit${quantity > 1 ? 's' : ''} of ${product.name} authorized for procurement.`
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-24">

        {/* Visual Documentation Section */}
        <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="relative aspect-square md:aspect-video lg:aspect-[4/3] bg-muted/30 overflow-hidden rounded-[40px] border border-border/50 group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-6 left-6 flex flex-col gap-3">
              <Badge className="bg-background/80 backdrop-blur-md text-foreground border-border/100 px-4 py-1.5 rounded-full font-bold text-[10px] tracking-widest uppercase">
                Batch: {product.sku?.split('-')[2] || 'V24-001'}
              </Badge>
              <Badge className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full font-bold text-[10px] tracking-widest uppercase shadow-lg shadow-accent/20">
                {product.inStock ? "Authorized for Dispatch" : "Out of Stock"}
              </Badge>
            </div>
          </div>

          {/* Scientific Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Purity", value: specData?.purity, icon: ShieldCheck },
              { label: "Formula", value: specData?.formula, icon: FlaskConical },
              { label: "Molecular W.", value: specData?.molecularWeight, icon: Microscope },
              { label: "Storage", value: specData?.storage, icon: Thermometer },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-muted/10 border border-border/50 rounded-[24px] space-y-2 hover:bg-muted/20 transition-colors">
                <item.icon className="h-4 w-4 text-accent" />
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{item.label}</p>
                <p className="text-sm font-medium text-foreground truncate">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Procurement Sidebar */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit animate-in fade-in slide-in-from-right duration-700">
          <div className="p-10 bg-muted/20 border border-border/100 rounded-[48px] backdrop-blur-xl space-y-8 relative overflow-hidden shadow-2xl shadow-accent/5">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Database className="h-32 w-32" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="space-y-2">
                <p className="text-xs text-accent font-bold tracking-[0.2em] uppercase">{product.category}</p>
                <h1 className="font-serif text-4xl font-light text-foreground leading-tight tracking-tight">{product.name}</h1>
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-3 w-3 ${i < Math.floor(averageRating) ? "fill-accent text-accent" : "text-muted-foreground/30"}`} />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-2">{reviews.length} Research Reviews</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-5xl font-serif font-light text-foreground">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through decoration-accent/40 decoration-2">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                {product.description}
              </p>

              <div className="space-y-4 pt-4 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Allocation Quantity</label>
                  <div className="flex items-center gap-6 bg-background rounded-full border border-border/50 p-1 px-4 h-12">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-muted-foreground hover:text-accent transition-colors"><Minus className="h-4 w-4" /></button>
                    <span className="w-6 text-center font-bold text-sm tracking-widest">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="text-muted-foreground hover:text-accent transition-colors"><Plus className="h-4 w-4" /></button>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    className="w-full h-16 bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl font-bold uppercase tracking-widest text-xs gap-3 shadow-xl shadow-accent/20 transition-all active:scale-95"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-16 rounded-2xl font-bold uppercase tracking-widest text-[10px] border border-border/50 hover:bg-muted/50 gap-3"
                    onClick={() => toast.info("Technical Verification", { description: "Redirecting to secure CoA repository..." })}
                  >
                    <FileText className="h-4 w-4 text-accent" />
                    Technical Data Sheet
                  </Button>
                </div>
              </div>

              <div className="p-4 bg-accent/5 rounded-2xl border border-accent/20 flex gap-4">
                <Info className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Research Utilization Only</p>
                  <p className="text-[10px] text-muted-foreground font-medium leading-relaxed">This compound is intended solely for laboratory in-vitro investigation. Institutional clearance is mandatory.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications Accordion */}
      <section className="mb-24">
        <div className="max-w-4xl">
          <h2 className="font-serif text-3xl font-light mb-8">Technical Documentation</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="specs" className="border border-border rounded-[28px] px-8 bg-muted/5">
              <AccordionTrigger className="font-bold uppercase tracking-widest text-[10px] py-6 hover:no-underline">Compound Specifications</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pb-6">
                  {[
                    { label: "Systematic Name", value: product.name },
                    { label: "CAS Number", value: specData?.cas },
                    { label: "Batch Reference", value: product.sku },
                    { label: "Appearance", value: specData?.appearance },
                    { label: "Concentration", value: product.dosage || "99% Peak Purity" },
                    { label: "Retest Date", value: "Q4 2025" },
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-border/40">
                      <span className="text-xs font-bold text-muted-foreground uppercase">{spec.label}</span>
                      <span className="text-xs font-medium text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="handling" className="border border-border rounded-[28px] px-8 bg-muted/5">
              <AccordionTrigger className="font-bold uppercase tracking-widest text-[10px] py-6 hover:no-underline">Handling & Stability Protocols</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-8 font-medium">
                Store at 2-8°C for short-term utilize. For long-term integrity, maintain at -20°C. Once reconstituted, compound remains stable for 14 days under refrigeration. Avoid repeated freeze-thaw cycles and direct ultraviolet exposure. All handling must occur in certified biosafety environments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="shipping" className="border border-border rounded-[28px] px-8 bg-muted/5">
              <AccordionTrigger className="font-bold uppercase tracking-widest text-[10px] py-6 hover:no-underline">Logistics & Compliance</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-8 font-medium">
                Dispatched in vacuum-sealed, tamper-evident professional packaging. Zero external branding for institutional privacy. Real-time telemetry tracking provided upon authorization. Compliance with ISO 9001:2015 synthesis standards guaranteed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <ReviewsSection productId={productId} reviews={reviews} averageRating={averageRating} />
    </div>
  )
}
