"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star, FileText, ShieldCheck } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ReviewsSection } from "@/components/reviews-section"
import { products } from "@/lib/products"
import { getProductReviews, getAverageRating } from "@/lib/reviews"
import { useCart } from "@/lib/cart"
import { toast } from "sonner"

export function ProductDetail({ productId }: { productId: string }) {
  const product = products.find((p) => p.id === productId)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-2xl font-serif">Product not found</h1>
      </div>
    )
  }

  const reviews = getProductReviews(productId)
  const averageRating = getAverageRating(productId)

  const handleAddToCart = () => {
    addItem(product, quantity)
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pb-24">
        {/* Image Section */}
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-muted overflow-hidden rounded-lg">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>1 of 1 image</p>
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:pt-8">
          <div className="mb-6">
            <p className="text-sm text-accent font-medium tracking-wide uppercase mb-3">{product.category}</p>
            <h1 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(averageRating) ? "fill-accent text-accent" : "text-muted-foreground"
                      }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({reviews.length} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl font-semibold text-foreground">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
          </div>

          {/* Product Description */}
          <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

          {/* Specifications */}
          <div className="mb-8 p-4 bg-muted/30 border border-border rounded-lg">
            <p className="text-sm font-medium mb-2">Product Specifications</p>
            <div className="space-y-1 text-sm text-muted-foreground">
              {product.dosage && <p>Dosage: {product.dosage}</p>}
              {product.quantity && <p>Volume: {product.quantity}</p>}
              <p>Category: {product.category}</p>
              <p>Stock Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mb-8">
            <label className="text-sm font-medium block mb-3">Quantity</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 border border-border rounded hover:bg-muted transition-colors"
              >
                −
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 border border-border rounded hover:bg-muted transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 mb-4"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>

          {/* Lab Report Button */}
          <Button
            variant="outline"
            size="lg"
            className="w-full border-accent/20 hover:bg-accent/5 text-accent py-6 mb-8 group"
            onClick={() => toast.info("Redirecting to secure Lab Verification server...", {
              description: `Viewing CoA for Batch ${product.sku || 'N/A'}`
            })}
          >
            <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View Laboratory Certificate (CoA)
          </Button>

          <div className="flex items-center justify-center gap-4 py-4 border-y border-border mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground tracking-widest uppercase">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Third-Party Tested
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground tracking-widest uppercase">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              99%+ Purity Verified
            </div>
          </div>

          {/* Additional Info */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger className="text-sm font-medium">About This Product</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="info">
              <AccordionTrigger className="text-sm font-medium">Product Information</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed space-y-2">
                <div>
                  <p className="font-medium text-foreground">Category</p>
                  <p>{product.category}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Availability</p>
                  <p>{product.inStock ? "In Stock - Ships within 1-2 business days" : "Currently Out of Stock"}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Quality Assurance</p>
                  <p>Laboratory tested and verified for purity and potency</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger className="text-sm font-medium">Shipping & Returns</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                Fast, discreet shipping available. Orders typically arrive within 3-5 business days. All orders ship
                with tracking information. Returns accepted within 30 days of purchase for unopened products.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <ReviewsSection productId={productId} reviews={reviews} averageRating={averageRating} />
    </div>
  )
}
