import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen">
            <Navigation />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-serif text-5xl font-light text-foreground mb-12">Cookie Policy</h1>

                    <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">What Are Cookies</h2>
                            <p>
                                Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored
                                in your web browser and allows the Service or a third-party to recognize you and make your next visit
                                easier and the Service more useful to you.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">How We Use Cookies</h2>
                            <p>
                                When you use and access the Service, we may place a number of cookies files in your web browser. We use
                                cookies for the following purposes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>To enable certain functions of the Service</li>
                                <li>To provide analytics</li>
                                <li>To store your preferences</li>
                                <li>To enable advertisements delivery, including behavioral advertising</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Third-Party Cookies</h2>
                            <p>
                                In addition to our own cookies, we may also use various third-parties cookies to report usage statistics
                                of the Service, deliver advertisements on and through the Service, and so on. We use Razorpay for
                                payment processing which may set cookies for security and functionality.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">What Are Your Choices Regarding Cookies</h2>
                            <p>
                                If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit
                                the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept
                                them, you might not be able to use all of the features we offer, you may not be able to store your
                                preferences, and some of our pages might not display properly.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Contact Us</h2>
                            <p>
                                If you have any questions about our Cookie Policy, please contact us at info@peptidevault.club.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
