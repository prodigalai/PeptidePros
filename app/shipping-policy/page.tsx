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
                        <p className="text-sm italic">Last Updated: January 9, 2026</p>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Shipping Policy Overview</h2>
                            <p>
                                PeptideVault is committed to delivering your research products safely and efficiently. This policy outlines our shipping procedures, delivery times, and important information about receiving your order.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Domestic Shipping (United States)</h2>
                            <p>
                                We offer multiple shipping options for domestic orders:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Standard Shipping:</strong> 3-5 business days - $9.99</li>
                                <li><strong>Priority Shipping:</strong> 1-3 business days - $19.99</li>
                                <li><strong>Express Shipping:</strong> 1-2 business days - $29.99</li>
                                <li><strong>FREE Shipping:</strong> Available on all orders over $150 (Standard shipping)</li>
                            </ul>
                            <p className="mt-4">
                                All shipping times are estimates and begin from the date of shipment, not the date of order placement. Delivery times may vary based on your location and external factors such as weather or carrier delays.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Processing Time</h2>
                            <p>
                                All orders are carefully processed and quality-checked before shipment:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Standard processing time: 1-2 business days</li>
                                <li>Orders placed before 2:00 PM EST on business days are typically processed the same day</li>
                                <li>Orders placed after 2:00 PM EST or on weekends/holidays will be processed the next business day</li>
                                <li>Orders are not shipped or delivered on weekends or federal holidays</li>
                            </ul>
                            <p className="mt-4">
                                During peak seasons or promotional periods, processing times may be extended by 1-2 additional business days.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">International Shipping</h2>
                            <p>
                                We ship to select countries worldwide. International shipping details:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Delivery Time:</strong> 7-21 business days depending on destination</li>
                                <li><strong>Shipping Cost:</strong> Calculated at checkout based on destination and weight</li>
                                <li><strong>Customs and Duties:</strong> Customer is responsible for any customs fees, import duties, or taxes imposed by the destination country</li>
                                <li><strong>Restrictions:</strong> Some products may not be available for international shipping due to regulatory restrictions</li>
                            </ul>
                            <p className="mt-4">
                                Please check your local regulations regarding the import of research compounds before placing an international order. PeptideVault is not responsible for packages seized by customs or delayed due to customs clearance.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Shipping Carriers</h2>
                            <p>
                                We partner with reliable carriers to ensure safe delivery:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>USPS (United States Postal Service)</li>
                                <li>FedEx</li>
                                <li>UPS</li>
                                <li>DHL (for international shipments)</li>
                            </ul>
                            <p className="mt-4">
                                The carrier used for your order will be selected based on your location, shipping method chosen, and product requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Order Tracking</h2>
                            <p>
                                Once your order has shipped, you will receive:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>A shipping confirmation email with your tracking number</li>
                                <li>A link to track your package in real-time</li>
                                <li>Estimated delivery date</li>
                                <li>Carrier information</li>
                            </ul>
                            <p className="mt-4">
                                You can also track your order by logging into your account on our website and viewing your order history. Tracking information is typically updated within 24 hours of shipment.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Packaging and Handling</h2>
                            <p>
                                All products are packaged with care to ensure they arrive in perfect condition:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Discreet, professional packaging with no external product identification</li>
                                <li>Temperature-controlled packaging for sensitive products when necessary</li>
                                <li>Secure, tamper-evident seals on all products</li>
                                <li>Protective cushioning to prevent damage during transit</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Delivery Issues</h2>
                            <p>
                                If you experience any delivery issues:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Lost Package:</strong> If tracking shows your package as delivered but you haven't received it, please check with neighbors and your building management. Contact us within 48 hours if you still cannot locate it.</li>
                                <li><strong>Damaged Package:</strong> If your package arrives damaged, take photos before opening and contact us immediately at info@peptidevault.club</li>
                                <li><strong>Delayed Shipment:</strong> If your order is significantly delayed beyond the estimated delivery date, please contact us for assistance</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Address Changes</h2>
                            <p>
                                If you need to change your shipping address:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Contact us immediately if your order has not yet shipped</li>
                                <li>Once shipped, address changes must be made directly with the carrier</li>
                                <li>We cannot guarantee address changes after shipment</li>
                                <li>Ensure your shipping address is correct before completing your order</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">PO Boxes and Military Addresses</h2>
                            <p>
                                We ship to PO Boxes and APO/FPO/DPO military addresses via USPS. Please note that delivery times to military addresses may be longer than standard domestic shipping.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Contact Us</h2>
                            <p>
                                If you have any questions about our shipping policy or need assistance with your order, please contact us at:
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
