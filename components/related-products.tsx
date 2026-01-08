import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export function RelatedProducts() {
  const relatedProducts = products.slice(0, 3)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pb-24 border-t border-border pt-24">
      <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-8 text-center">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
