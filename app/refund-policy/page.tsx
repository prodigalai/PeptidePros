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
                        <p className="text-sm italic">Last Updated: January 9, 2026</p>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Refund Policy Overview</h2>
                            <p>
                                At PeptideVault, we strive to ensure customer satisfaction with every purchase. Due to the specialized nature of our research products, we have established the following refund and cancellation policy to protect both our customers and the integrity of our products.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Refunds</h2>
                            <p>
                                Due to the nature of our products being for research purposes and the strict storage requirements, we generally do not offer refunds once
                                a product has been shipped and the seal is broken. However, we understand that issues may arise, and we will consider refund requests in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Incorrect Order:</strong> If you receive a product that is different from what you ordered</li>
                                <li><strong>Damaged Product:</strong> If the product arrives damaged or defective due to shipping or manufacturing issues</li>
                                <li><strong>Quality Issues:</strong> If the product does not meet our stated quality standards</li>
                            </ul>
                            <p className="mt-4">
                                To be eligible for a refund, you must contact us within <strong>7 days of receipt</strong> with photographic evidence of the issue and your order number. Our team will review your request and respond within 2-3 business days.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Cancellations</h2>
                            <p>
                                Orders can be cancelled within <strong>24 hours of placement</strong>, provided they have not yet been processed or shipped. Once
                                an order is marked as "Processing" or "Shipped," it cannot be cancelled. To cancel an order, please contact us immediately at info@peptidevault.club with your order number.
                            </p>
                            <p className="mt-4">
                                If your cancellation request is approved, a full refund will be issued to your original payment method within 5-7 business days.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Non-Refundable Items</h2>
                            <p>The following items are non-refundable:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Products with broken seals or that have been opened</li>
                                <li>Products that have been improperly stored after delivery</li>
                                <li>Products purchased during promotional sales or clearance events (unless defective)</li>
                                <li>Shipping and handling fees</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Damaged or Defective Products</h2>
                            <p>
                                If you receive a damaged or defective product, please take clear photos showing:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>The product packaging</li>
                                <li>The product itself</li>
                                <li>Any visible damage or defects</li>
                                <li>The shipping label and box (if applicable)</li>
                            </ul>
                            <p className="mt-4">
                                Send these photos along with your order number to <strong>info@peptidevault.club</strong> within 7 days of delivery. We will investigate your claim and, if verified, send a replacement product or issue a full refund at our discretion.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Refund Processing</h2>
                            <p>
                                If a refund is approved, it will be processed as follows:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Refunds are issued to the original payment method used for the purchase</li>
                                <li>Processing time: 5-7 business days from approval</li>
                                <li>Payment gateway (Razorpay) processing: Additional 3-5 business days</li>
                                <li>Total time to see funds in your account: 8-12 business days</li>
                            </ul>
                            <p className="mt-4">
                                You will receive an email confirmation once your refund has been processed. Please note that the time it takes for the refund to appear in your account depends on your bank or credit card issuer's processing times.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Exchanges</h2>
                            <p>
                                We do not offer direct product exchanges. If you need a different product, please request a refund for the original item (if eligible) and place a new order for the desired product.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Shipping Costs</h2>
                            <p>
                                Original shipping costs are non-refundable unless the return is due to our error (wrong item sent, damaged product, etc.). If you are approved for a refund due to our error, we will also refund the original shipping cost and provide a prepaid return label.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Late or Missing Refunds</h2>
                            <p>
                                If you haven't received your refund within the expected timeframe:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Check your bank account or credit card statement again</li>
                                <li>Contact your credit card company or bank - it may take time for the refund to be officially posted</li>
                                <li>If you've done all of this and still have not received your refund, please contact us at info@peptidevault.club</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Contact Us</h2>
                            <p>
                                For any questions regarding refunds or cancellations, please contact us at:
                            </p>
                            <p className="mt-4">
                                <strong>Email:</strong> info@peptidevault.club<br />
                                <strong>Response Time:</strong> Within 24-48 hours<br />
                                <strong>Website:</strong> peptidevault.club
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
