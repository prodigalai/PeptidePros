import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, TrendingUp, Award, Zap, ShieldCheck, Clock, Users, Mail, Phone, CheckCircle2 } from "lucide-react"
import { BulkCalculator } from "@/components/bulk-calculator"
import Link from "next/link"

export const metadata = {
  title: "Wholesale & Bulk Orders | PeptidePros",
  description: "Discover premium wholesale pricing and professional partnership opportunities for research compounds.",
}

export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1000px] bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <p className="text-accent text-sm font-medium tracking-wide uppercase">B2B Solutions</p>
                </div>

                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight">
                  Wholesale & <span className="text-accent">Bulk Pricing</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl text-balance">
                  Elevate your research with our premium wholesale program. We provide scalable solutions, dedicated support, and unmatched quality for professional institutions and large-scale projects.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="#contact-form">
                    <Button size="lg" className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 text-lg group">
                      Request a Quote
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-border hover:bg-muted/50">
                    Download Price List
                  </Button>
                </div>

                <div className="flex items-center gap-8 pt-8 border-t border-border">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-foreground">25%+</span>
                    <span className="text-sm text-muted-foreground">Max Discount</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-foreground">24h</span>
                    <span className="text-sm text-muted-foreground">Response Time</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-foreground">Global</span>
                    <span className="text-sm text-muted-foreground">Priority Shipping</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden border border-border shadow-2xl group">
                  <img
                    src="/wholesale-product.png"
                    alt="Premium Research Vials"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />

                  {/* Floating Info Card */}
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/80 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/20 rounded-xl">
                        <Award className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Lab-Certified Purity</p>
                        <p className="text-sm text-muted-foreground">Every batch rigorously tested</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">The Partnership Advantage</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                We don't just supply compounds; we partner in your research success with professional-grade logistics and terms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Tiered Pricing",
                  desc: "Automatic volume discounts starting from just 5 units, with custom quotes for bulk requirements.",
                  color: "bg-blue-500/10 text-blue-500"
                },
                {
                  icon: ShieldCheck,
                  title: "Quality Assurance",
                  desc: "Dedicated batch reservation and full CoA documentation for every order in your contract.",
                  color: "bg-emerald-500/10 text-emerald-500"
                },
                {
                  icon: Clock,
                  title: "Priority Handling",
                  desc: "Your orders bypass the standard queue with 24-hour processing and expedited global shipping.",
                  color: "bg-orange-500/10 text-orange-500"
                }
              ].map((benefit, i) => (
                <div key={i} className="group p-8 bg-background border border-border rounded-3xl hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className={`p-4 rounded-2xl w-fit mb-6 transition-transform group-hover:scale-110 duration-300 ${benefit.color}`}>
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Dashboard Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
                  <img
                    src="/wholesale-business.png"
                    alt="Analytics Illustration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-accent/5" />
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight">
                  Standard <span className="text-accent underline decoration-accent/20 underline-offset-8">Discount Tiers</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our transparent pricing structure ensures that the more you research, the more you save. Scale your operations efficiently with our predefined discount brackets.
                </p>

                <div className="space-y-4">
                  {[
                    { qty: "1-4 Units", discount: "Base Rate", savings: "Standard Pricing", highlight: false },
                    { qty: "5-9 Units", discount: "10% OFF", savings: "Save up to $4.70 / unit", highlight: true },
                    { qty: "10-19 Units", discount: "15% OFF", savings: "Save up to $7.05 / unit", highlight: true },
                    { qty: "20+ Units", discount: "20% OFF", savings: "Save up to $9.40 / unit", highlight: true },
                  ].map((row, i) => (
                    <div
                      key={row.qty}
                      className={`flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 ${row.highlight
                        ? 'bg-accent/5 border-accent/20 hover:border-accent/40 shadow-sm'
                        : 'bg-muted/30 border-border hover:border-muted-foreground/20'
                        }`}
                    >
                      <div>
                        <p className="font-medium text-foreground">{row.qty}</p>
                        <p className="text-sm text-muted-foreground mt-1">{row.savings}</p>
                      </div>
                      <div className={`text-xl font-bold ${row.highlight ? 'text-accent' : 'text-muted-foreground'}`}>
                        {row.discount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <BulkCalculator />

        {/* Contact Form Section */}
        <section id="contact-form" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-foreground text-background rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
              <div className="lg:w-2/5 p-12 lg:p-16 bg-accent text-accent-foreground relative overflow-hidden">
                <div className="relative z-10 space-y-8">
                  <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">Request a Custom Quote</h2>
                  <p className="text-lg text-accent-foreground/80 leading-relaxed">
                    Exceeding standard tiers? Our dedicated wholesale team will craft a bespoke pricing structure tailored to your specific volume and frequency requirements.
                  </p>

                  <div className="space-y-6 pt-8">
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm opacity-70">Email our team</p>
                        <p className="font-medium">wholesale@peptidepros.net</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm opacity-70">Direct sales line</p>
                        <p className="font-medium">1-888-391-1312</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-12">
                    <div className="flex -space-x-3 overflow-hidden">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-accent bg-accent-foreground/20 flex items-center justify-center text-xs font-bold">
                          AA
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm opacity-80">Joined by 500+ research institutions worldwide</p>
                  </div>
                </div>

                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <TrendingUp className="h-64 w-64 rotate-12" />
                </div>
              </div>

              <div className="lg:w-3/5 p-12 lg:p-16 bg-background">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground mr-1">First Name</label>
                      <Input placeholder="John" className="h-12 border-border focus:ring-accent" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground mr-1">Last Name</label>
                      <Input placeholder="Doe" className="h-12 border-border focus:ring-accent" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground mr-1">Organization Name</label>
                    <Input placeholder="Stanford Research Labs" className="h-12 border-border focus:ring-accent" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground mr-1">Business Email</label>
                      <Input type="email" placeholder="john@labs.org" className="h-12 border-border focus:ring-accent" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground mr-1">Phone Number</label>
                      <Input type="tel" placeholder="+1 (555) 000-0000" className="h-12 border-border focus:ring-accent" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground mr-1">Tell us about your needs</label>
                    <Textarea
                      placeholder="Please specify compounds, estimated monthly volumes, and any specific delivery requirements..."
                      className="min-h-[150px] border-border focus:ring-accent resize-none"
                      required
                    />
                  </div>

                  <Button size="lg" className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 text-lg group">
                    Send Quote Request
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Data is encrypted and handled according to HIPAA standards
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
