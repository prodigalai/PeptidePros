import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LookbookGallery } from "@/components/lookbook-gallery"

export default function LookbookPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Visual Documentation</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-foreground tracking-tight">Environmental <span className="text-accent italic">Showcase</span></h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            Explore the clinical environments and advanced laboratory protocols that define our scientific excellence.
          </p>
        </div>

        <LookbookGallery />
      </main>

      <Footer />
    </div>
  )
}
