"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Star, FlaskConical } from "lucide-react"
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
    toast.success(`${product.name} added to cart`)
  }

  return (
    <div className="group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-muted rounded-lg">
          {/* Lab Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-background/80 backdrop-blur-md rounded border border-border/50 shadow-sm z-10">
            <FlaskConical className="h-3 w-3 text-emerald-400" />
            <span className="text-[10px] font-bold text-foreground tracking-widest uppercase">Lab Verified</span>
          </div>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Stock Badge */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
              <span className="text-background font-medium text-lg">Out of Stock</span>
            </div>
          )}
          {/* Discount Badge */}
          {product.originalPrice && (
            <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">
              Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </div>
          )}

          <Button
            onClick={handleAddToCart}
            className={`absolute bottom-4 left-4 right-4 bg-primary hover:bg-primary/90 transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="space-y-2">
        <Link href={`/product/${product.id}`}>
          <p className="text-xs text-accent font-medium tracking-wide uppercase">{product.category}</p>
          <h3 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                  }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-foreground">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  )
}
