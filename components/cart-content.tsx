"use client"

import { Button } from "@/components/ui/button"
import { Minus, Plus, X, ShoppingBag, ShieldCheck, Truck, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/lib/cart"
import { toast } from "sonner"

export function CartContent() {
  const { items, removeItem, updateQuantity } = useCart()

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = subtotal > 150 ? 0 : 9.99
  const tax = subtotal * 0.08
  const platformFee = (subtotal + shipping + tax) * 0.15 // 15% platform fee
  const total = subtotal + shipping + tax + platformFee

  if (items.length === 0) {
    return (
      <div className="text-center py-24 animate-in fade-in zoom-in duration-500">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-8">
          <ShoppingBag className="h-10 w-10 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-serif font-light mb-4 text-foreground">Shopping Cart Empty</h2>
        <p className="text-muted-foreground mb-10 max-w-sm mx-auto">Your shopping cart is currently empty. Shop our collection of high-quality compounds.</p>
        <Link href="/shop">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 rounded-full h-14 font-bold tracking-widest uppercase text-xs">
            Start Shopping
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* List of Compounds */}
      <div className="lg:col-span-8 space-y-4">
        <div className="flex items-center justify-between pb-6 border-b border-border/50">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Items ({items.length})</h2>
          <span className="text-[10px] font-bold text-accent px-3 py-1 bg-accent/10 rounded-full border border-accent/20">SECURE CHECKOUT</span>
        </div>

        <div className="space-y-4 pt-4">
          {items.map((item) => (
            <div key={item.product.id} className="group relative flex flex-col sm:flex-row gap-6 p-6 bg-muted/20 border border-border/50 rounded-[24px] hover:border-accent/40 transition-all duration-300">
              {/* Product Image */}
              <div className="relative w-full sm:w-32 h-40 bg-background overflow-hidden rounded-2xl border border-border/50 flex-shrink-0">
                <img
                  src={item.product.image || "/placeholder.svg"}
                  alt={item.product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Product Details */}
              <div className="flex-1 flex flex-col justify-between py-1">
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-xl font-medium text-foreground">{item.product.name}</h3>
                      <p className="text-[10px] font-bold text-accent uppercase tracking-[0.15em] mt-1.5">{item.product.category}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        removeItem(item.product.id)
                        toast.error("Item Removed", {
                          description: `${item.product.name} has been removed from your cart.`
                        })
                      }}
                      className="h-9 w-9 rounded-full hover:bg-destructive/10 hover:text-destructive group-hover:bg-background transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Quality Guaranteed</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-1 p-1 bg-background/50 border border-border/50 rounded-xl">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        updateQuantity(item.product.id, item.quantity - 1)
                        toast.info("Inventory Updated", {
                          description: `Decreased allocation of ${item.product.name}.`
                        })
                      }}
                      className="h-8 w-8 rounded-lg hover:bg-muted"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm w-10 text-center font-bold font-mono">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        updateQuantity(item.product.id, item.quantity + 1)
                        toast.success("Inventory Updated", {
                          description: `Increased allocation of ${item.product.name}.`
                        })
                      }}
                      className="h-8 w-8 rounded-lg hover:bg-muted"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <p className="text-xl font-serif font-light text-foreground">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Summary */}
      <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
        <div className="p-8 bg-background border border-border shadow-2xl shadow-accent/5 rounded-[32px] space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <ShoppingBag className="h-32 w-32 rotate-12" />
          </div>

          <div className="relative z-10">
            <h2 className="font-serif text-2xl font-light text-foreground mb-1">Order Summary</h2>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Order Summary</p>
          </div>

          <div className="space-y-4 relative z-10 pt-4 border-t border-border/50">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-foreground font-medium">{shipping === 0 ? "Complimentary" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax</span>
              <span className="text-foreground font-medium">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Platform Fee (15%)</span>
              <span className="text-foreground font-medium">${platformFee.toFixed(2)}</span>
            </div>

            {subtotal < 150 && (
              <div className="p-4 bg-accent/5 border border-accent/20 rounded-2xl flex items-center gap-3">
                <Truck className="h-4 w-4 text-accent" />
                <p className="text-[11px] text-accent/80 font-medium leading-tight">
                  Increase procurement to <span className="font-bold underline">$150.00</span> for complimentary priority logistics.
                </p>
              </div>
            )}

            <div className="pt-6 border-t border-border flex justify-between items-baseline">
              <span className="text-sm font-bold uppercase tracking-widest text-foreground">Total</span>
              <div className="text-right">
                <span className="font-serif text-4xl font-light text-foreground">${total.toFixed(2)}</span>
                <p className="text-[10px] text-muted-foreground mt-1">All fees included</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 relative z-10 pt-4">
            <Link href="/checkout">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 rounded-2xl font-bold tracking-widest uppercase text-xs gap-3 shadow-xl shadow-accent/20">
                Secure Checkout <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/shop">
              <Button variant="ghost" className="w-full text-muted-foreground hover:text-foreground hover:bg-muted/50 h-12 rounded-xl text-xs font-bold uppercase tracking-[0.15em]">
                Continue Shopping
              </Button>
            </Link>
          </div>

          <div className="pt-6 border-t border-border/50 flex items-center justify-center gap-6 opacity-40">
            <div className="grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all cursor-crosshair">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
            </div>
            <div className="grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all cursor-crosshair">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            </div>
            <div className="grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all cursor-crosshair">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin" className="h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
