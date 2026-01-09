import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl font-light text-foreground mb-12">Terms of Service</h1>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Product Information</h2>
              <p>
                All products listed on PeptideVault are for research purposes only. Users are solely responsible for
                understanding and complying with all applicable laws and regulations regarding the purchase and use of
                products.
              </p>
              <p className="mt-4">
                Products are sold as-is with no warranty. We make no representation regarding the suitability of
                products for any particular purpose.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Limitation of Liability</h2>
              <p>
                In no event shall PeptideVault be liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">User Responsibility</h2>
              <p>
                Users are solely responsible for ensuring they have the proper qualifications, knowledge, and authority
                to purchase and use products from PeptideVault in accordance with all applicable laws.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Contact Information</h2>
              <p>
                For questions regarding these terms, please contact us at info@peptidevault.club.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
