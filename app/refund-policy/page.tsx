import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function RefundPolicyPage() {
    return (
        <div className="min-h-screen">
            <Navigation />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-serif text-5xl font-light text-foreground mb-12">Refund & Cancellation Policy</h1>

                    <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Refunds</h2>
                            <p>
                                Due to the nature of our products being for research purposes, we generally do not offer refunds once
                                a product has been shipped and the seal is broken. However, if there is a mistake with your order or
                                if the product is damaged during transit, please contact us within 7 days of receipt.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Cancellations</h2>
                            <p>
                                Orders can be cancelled within 24 hours of placement, provided they have not yet been shipped. Once
                                an order is marked as shipped, it cannot be cancelled.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Damaged Goods</h2>
                            <p>
                                If you receive a damaged product, please take a photo and send it to info@peptidevault.club along with
                                your order number. We will investigate and send a replacement if the claim is verified.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Process for Refund</h2>
                            <p>
                                If a refund is approved, it will be processed and a credit will automatically be applied to your
                                original method of payment (e.g., via Razorpay) within 5-7 business days.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Contact Us</h2>
                            <p>
                                For any questions regarding refunds or cancellations, please contact us at info@peptidevault.club.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
