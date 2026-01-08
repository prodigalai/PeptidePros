"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Star, FlaskConical, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"
import { useCart } from "@/lib/cart"
import { toast } from "sonner"

export function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product, 1)
    toast.success("Added to Cart", {
      description: `1 unit of ${product.name} added to your procurement list.`
    })
  }

  return (
    <div className="group animate-in fade-in duration-500" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-muted/20 rounded-[32px] border border-border/50 group-hover:border-accent/40 transition-all duration-500">
          {/* Lab Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-background/80 backdrop-blur-md rounded-full border border-border/50 shadow-xl z-10">
            <ShieldCheck className="h-3 w-3 text-emerald-400" />
            <span className="text-[9px] font-bold text-foreground tracking-[0.1em] uppercase">99%+ Purity</span>
          </div>

          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Stock Badge */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] flex items-center justify-center z-20">
              <span className="text-foreground/60 font-bold uppercase tracking-widest text-xs border border-foreground/20 px-4 py-2 rounded-full">Allocation Restricted</span>
            </div>
          )}

          {/* Discount Badge */}
          {product.originalPrice && (
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-accent/20">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </div>
          )}

          <div className={`absolute bottom-4 left-4 right-4 transition-all duration-500 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <Button
              onClick={handleAddToCart}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 rounded-2xl font-bold uppercase tracking-widest text-[9px] gap-2 shadow-2xl shadow-accent/20"
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="space-y-3 px-2">
        <Link href={`/product/${product.id}`}>
          <p className="text-[10px] text-accent font-bold tracking-[0.2em] uppercase">{product.category}</p>
          <h3 className="text-base font-serif font-light text-foreground group-hover:text-accent transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-serif text-foreground">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through opacity-50">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 bg-muted/10 px-2 py-1 rounded-full border border-border/50">
            <Star className="h-2.5 w-2.5 fill-accent text-accent" />
            <span className="text-[10px] font-bold text-muted-foreground">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
