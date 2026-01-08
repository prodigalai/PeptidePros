"use client"

import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

interface ProductGridProps {
  filters: {
    category: string
    sort: string
  }
}

export function ProductGrid({ filters }: ProductGridProps) {
  let filteredProducts = [...products]

  // Filter by category
  if (filters.category !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.category.toLowerCase().replace(/\s+/g, "-") === filters.category,
    )
  }

  // Sort products
  switch (filters.sort) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating)
      break
    case "newest":
      filteredProducts.reverse()
      break
    case "featured":
    default:
      // Keep original order
      break
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  )
}
