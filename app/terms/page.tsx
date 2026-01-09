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
            <p className="text-sm italic">Last Updated: January 9, 2026</p>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using peptidevault.club (the "Website"), you accept and agree to be bound by the terms and provisions of this
                agreement. If you do not agree to abide by these terms, please do not use this Service. These Terms of Service constitute a legally binding agreement between you and PeptideVault.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Product Information</h2>
              <p>
                All products listed on PeptideVault are for research purposes only and are not intended for human consumption. Users are solely responsible for
                understanding and complying with all applicable laws and regulations regarding the purchase, possession, and use of
                products in their jurisdiction.
              </p>
              <p className="mt-4">
                Products are sold as-is with no warranty of merchantability or fitness for a particular purpose. We make no representation regarding the suitability of
                products for any specific application. All product descriptions, specifications, and images are provided for informational purposes and may not be entirely accurate.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Pricing and Payment</h2>
              <p>
                All prices are listed in USD and are subject to change without notice. We reserve the right to modify prices at any time. The price charged will be the price displayed at the time of order placement.
              </p>
              <p className="mt-4">
                Payment is processed securely through Razorpay. By providing payment information, you represent and warrant that you are authorized to use the designated payment method. We accept major credit cards, debit cards, and other payment methods as displayed at checkout.
              </p>
              <p className="mt-4">
                You agree to pay all charges incurred by you or any users of your account at the prices in effect when such charges are incurred. You are also responsible for any applicable taxes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Order Acceptance</h2>
              <p>
                We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing or product information, or suspected fraudulent activity. If your order is cancelled after payment has been processed, we will issue a full refund to your original payment method.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Shipping and Delivery</h2>
              <p>
                We ship to addresses within the United States and select international locations. Shipping times and costs vary by destination and are calculated at checkout. Title and risk of loss pass to you upon delivery to the carrier. Please refer to our Shipping Policy for detailed information.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Returns and Refunds</h2>
              <p>
                Due to the nature of our products, returns are generally not accepted once the product seal is broken. Please refer to our Refund Policy for complete details on our return and refund procedures, including conditions for damaged or incorrect shipments.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Intellectual Property</h2>
              <p>
                All content on this Website, including but not limited to text, graphics, logos, images, and software, is the property of PeptideVault or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">User Conduct</h2>
              <p>
                You agree not to use the Website for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Website. You agree not to attempt to gain unauthorized access to any portion of the Website or any systems or networks connected to the Website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Disclaimer of Warranties</h2>
              <p>
                THE WEBSITE AND ALL PRODUCTS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL PEPTIDEVAULT, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Your use or inability to use the Service</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from the Service</li>
                <li>Any bugs, viruses, or other harmful code transmitted through the Service</li>
                <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Service</li>
              </ul>
              <p className="mt-4">
                OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE SIX (6) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless PeptideVault and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the Website or products, your violation of these Terms, or your violation of any rights of another.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">User Responsibility</h2>
              <p>
                Users are solely responsible for ensuring they have the proper qualifications, knowledge, licenses, and authority
                to purchase and use products from PeptideVault in accordance with all applicable federal, state, and local laws and regulations. You represent and warrant that you are purchasing products for legitimate research purposes only.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Governing Law and Dispute Resolution</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on this page with a new "Last Updated" date. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Contact Information</h2>
              <p>
                For questions regarding these terms, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> info@peptidevault.club<br />
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
