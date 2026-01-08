"use client"

import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export function RelatedProducts({ currentProductId }: { currentProductId?: string }) {
  // Get products from the same category, excluding the current one
  const currentProduct = products.find(p => p.id === currentProductId)
  const related = products
    .filter(p => p.id !== currentProductId && p.category === currentProduct?.category)
    .slice(0, 3)

  // Fallback to any products if no same-category products found
  const displayProducts = related.length > 0 ? related : products.filter(p => p.id !== currentProductId).slice(0, 3)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40 pb-32 border-t border-border/50 pt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">Scientific Repository</p>
          <h2 className="font-serif text-4xl font-light text-foreground">Complementary <span className="text-accent italic">Compounds</span></h2>
        </div>
        <p className="text-sm text-muted-foreground font-medium max-w-sm">Explore additional research assets that align with your current procurement objectives.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
