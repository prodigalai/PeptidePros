import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? Our support team is here to help with product selection and technical inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent mt-1" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">+1 (888) 391-1312</p>
                  <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent mt-1" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">info@peptidepros.net</p>
                  <p className="text-xs text-muted-foreground mt-1">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-accent mt-1" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday</p>
                  <p className="text-muted-foreground">9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="lg:col-span-2 space-y-6 bg-muted/30 border border-border rounded-lg p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input type="text" placeholder="First Name" required />
                <Input type="text" placeholder="Last Name" required />
              </div>
              <Input type="email" placeholder="Email Address" required />
              <Input type="text" placeholder="Subject" required />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6">
                Send Message
              </Button>
            </form>
          </div>

          {/* FAQ Preview */}
          <div className="bg-muted/10 border border-border rounded-lg p-8 text-center">
            <h2 className="font-serif text-2xl font-light text-foreground mb-4">Quick Answers</h2>
            <p className="text-muted-foreground mb-6">
              Most questions are answered in our FAQ section. Check there first for faster answers.
            </p>
            <Button variant="outline" className="bg-transparent">
              View FAQ
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
