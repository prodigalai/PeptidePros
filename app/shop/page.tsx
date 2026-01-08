import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ShopContent } from "@/components/shop-content"

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Suspense fallback={<div className="h-screen" />}>
        <ShopContent />
      </Suspense>
      <Footer />
    </div>
  )
}
