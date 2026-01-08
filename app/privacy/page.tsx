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
            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Introduction</h2>
              <p>
                PeptidePros ("we," "us," or "our") operates the website. This page informs you of our policies regarding
                the collection, use, and disclosure of personal data when you use our Service and the choices you have
                associated with that data.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Information Collection and Use</h2>
              <p>
                We collect several different types of information for various purposes to provide and improve our
                Service to you:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Personal Data: Email address, name, phone number, address</li>
                <li>Usage Data: Browser type, pages visited, time spent, referring URLs</li>
                <li>Device Data: IP address, browser type, operating system</li>
                <li>Payment Data: Processed securely through encrypted channels</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Security of Data</h2>
              <p>
                The security of your data is important to us but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at info@peptidepros.net or call
                +1 (888) 391-1312.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
