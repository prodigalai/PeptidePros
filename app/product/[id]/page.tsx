import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"
import { RelatedProducts } from "@/components/related-products"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        <ProductDetail productId={id} />
        <RelatedProducts currentProductId={id} />
      </main>

      <Footer />
    </div>
  )
}
