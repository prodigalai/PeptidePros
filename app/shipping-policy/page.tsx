import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ShippingPolicyPage() {
    return (
        <div className="min-h-screen">
            <Navigation />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-serif text-5xl font-light text-foreground mb-12">Shipping & Delivery Policy</h1>

                    <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Domestic Shipping</h2>
                            <p>
                                We offer free priority shipping on all US orders over $150. For orders under $150, a standard shipping
                                fee applies which will be calculated at checkout.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Processing Time</h2>
                            <p>
                                All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or
                                holidays.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Delivery Estimates</h2>
                            <p>
                                Standard shipping: 3-5 business days.
                                Priority shipping: 1-3 business days.
                                Please note that delivery delays can occasionally occur.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">International Shipping</h2>
                            <p>
                                We ship to most countries worldwide. International shipping rates and delivery estimates vary by
                                location and will be displayed at checkout.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Tracking Your Order</h2>
                            <p>
                                Once your order has shipped, you will receive a confirmation email with a tracking number.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Contact Us</h2>
                            <p>
                                If you have any questions about our shipping policy, please contact us at info@peptidevault.club.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
