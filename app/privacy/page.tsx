import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl font-light text-foreground mb-12">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-sm italic">Last Updated: January 9, 2026</p>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Introduction</h2>
              <p>
                PeptideVault ("we," "us," or "our") operates peptidevault.club (the "Website"). This Privacy Policy informs you of our policies regarding
                the collection, use, disclosure, and protection of personal data when you use our Service and the choices you have
                associated with that data. By using our Service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Information We Collect</h2>
              <p>
                We collect several different types of information for various purposes to provide and improve our
                Service to you:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Personal Data:</strong> Email address, full name, shipping address, billing address, phone number (optional)</li>
                <li><strong>Usage Data:</strong> Browser type, pages visited, time spent on pages, referring URLs, device identifiers</li>
                <li><strong>Device Data:</strong> IP address, browser type and version, operating system, unique device identifiers</li>
                <li><strong>Payment Data:</strong> Payment information is processed securely through our payment processor Razorpay. We do not store complete credit card numbers or CVV codes on our servers.</li>
                <li><strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to track activity on our Service and hold certain information.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">How We Use Your Information</h2>
              <p>PeptideVault uses the collected data for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To process and fulfill your orders</li>
                <li>To provide customer support and respond to inquiries</li>
                <li>To send order confirmations, shipping updates, and transactional emails</li>
                <li>To improve our Website and services</li>
                <li>To detect, prevent, and address technical issues and fraudulent activity</li>
                <li>To send promotional communications (with your consent, which you can withdraw at any time)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Payment Processing</h2>
              <p>
                All payment transactions are processed through Razorpay, a PCI-DSS compliant payment gateway. When you make a purchase, your payment information is transmitted directly to Razorpay using industry-standard SSL encryption. We do not store your complete credit card details on our servers. Razorpay's use of your personal information is governed by their privacy policy, which can be found at <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://razorpay.com/privacy/</a>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Data Sharing and Disclosure</h2>
              <p>We may share your personal information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Service Providers:</strong> We share data with third-party service providers who perform services on our behalf (e.g., payment processing, shipping, email delivery)</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your personal information may be transferred</li>
                <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your explicit consent</li>
              </ul>
              <p className="mt-4">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Data Security</h2>
              <p>
                The security of your data is important to us. We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure servers with restricted access</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Order and transaction data is typically retained for 7 years for tax and accounting purposes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Access:</strong> Request access to your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your personal data</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
              </ul>
              <p className="mt-4">To exercise these rights, please contact us at info@peptidevault.club.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Children's Privacy</h2>
              <p>
                Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">International Data Transfers</h2>
              <p>
                Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our Service, you consent to such transfers.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
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
