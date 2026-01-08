import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, ShieldCheck, Truck, Award, Star, CheckCircle, Users, Clock, Lock, FlaskConical, Thermometer, Microscope } from "lucide-react"
import { Newsletter } from "@/components/newsletter"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Enhanced Image */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 mb-6 w-fit px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <Zap className="h-4 w-4 text-accent" />
                <p className="text-accent text-sm font-medium tracking-wide">Premium Research Grade</p>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 text-balance leading-tight">
                Research-Grade Excellence
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-xl leading-relaxed">
                Discover premium peptides, research compounds, and health supplements sourced from trusted laboratories.
                Quality assured and professionally formulated for discerning researchers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base tracking-wider w-full sm:w-auto"
                  >
                    Shop Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-6 text-base tracking-wider bg-transparent w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                  <span className="text-sm text-foreground/70">Lab Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-accent" />
                  <span className="text-sm text-foreground/70">Secure Ordering</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="text-sm text-foreground/70">Fast Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full min-h-96 order-1 lg:order-2 rounded-lg overflow-hidden shadow-2xl border border-border">
              <img
                src="/peptide-products-showcase.jpg"
                alt="Premium peptide products and research compounds"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                Industry Leader
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Products", value: "1000+" },
              { label: "Customers", value: "50K+" },
              { label: "Countries", value: "150+" },
              { label: "Years", value: "15+" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-sm text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">Why Choose PeptidePros?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              We deliver uncompromising quality and expertise to researchers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Lab Certified",
                description: "All products tested by professional laboratories with third-party verification",
              },
              {
                icon: ShieldCheck,
                title: "Secure Ordering",
                description: "Protected transactions, encrypted data, and confidential order processing",
              },
              {
                icon: Zap,
                title: "Premium Quality",
                description: "High purity and potency guaranteed with batch testing certificates",
              },
              {
                icon: Truck,
                title: "Fast Shipping",
                description: "Discreet packaging and rapid delivery to your location",
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Dedicated customer service team available 24/7 for all inquiries",
              },
              {
                icon: Star,
                title: "Best Pricing",
                description: "Competitive wholesale rates with bulk discount tiers up to 25% off",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 border border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
              >
                <feature.icon className="h-10 w-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories with Images */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">Product Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              Explore our comprehensive selection of research-grade products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Peptides",
                description: "Research-grade peptide compounds",
                href: "/shop?category=peptides",
                image: "/peptide-products-showcase.jpg",
                count: "250+",
              },
              {
                name: "Research Compounds",
                description: "Laboratory-certified pharmaceutical compounds",
                href: "/shop?category=compounds",
                image: "/quality-assurance-lab-testing.jpg",
                count: "180+",
              },
              {
                name: "Health Supplements",
                description: "Premium wellness and nutritional products",
                href: "/shop?category=supplements",
                image: "/customer-success-research-team.jpg",
                count: "320+",
              },
              {
                name: "Medical Accessories",
                description: "Professional-grade medical supplies",
                href: "/shop?category=accessories",
                image: "/fast-secure-shipping.jpg",
                count: "150+",
              },
            ].map((category, idx) => (
              <Link key={idx} href={category.href}>
                <div className="group relative h-72 rounded-lg overflow-hidden border border-border hover:border-accent transition-all cursor-pointer shadow-md hover:shadow-lg">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-6">
                    <div className="flex justify-between items-start">
                      <div />
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {category.count}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1 group-hover:text-accent transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/80 mb-4">{category.description}</p>
                      <div className="flex items-center text-accent">
                        <span className="text-sm font-medium">Browse Category</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
              Trusted by Researchers Worldwide
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              See what our customers say about our products and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Research Scientist, Harvard Medical",
                content:
                  "The quality of the peptides is exceptional. Every batch comes with comprehensive testing data and certificates. Highly professional.",
                rating: 5,
              },
              {
                name: "Prof. James Mitchell",
                role: "Pharmaceutical Researcher",
                content:
                  "Consistently reliable products and excellent customer support. They understand the research community's needs perfectly.",
                rating: 5,
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Clinical Research Director",
                content:
                  "Fast shipping, pristine packaging, and authentic products. PeptidePros is my go-to supplier for all research needs.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 border border-border rounded-lg bg-muted/30 hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-background to-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
                Premium Quality Standards
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Every product in our catalog undergoes rigorous quality control processes. We partner exclusively with
                certified laboratories and maintain the highest purity standards in the industry.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Third-party lab testing and verification",
                  "Batch-specific certificates of analysis",
                  "ISO 9001 certified manufacturing",
                  "Comprehensive product documentation",
                  "Secure cold chain delivery",
                  "Money-back guarantee",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about">
                <Button variant="outline" size="lg" className="px-8 py-6 text-base tracking-wider bg-transparent">
                  Learn Our Standards
                </Button>
              </Link>
            </div>

            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-2xl border border-border">
              <img
                src="/quality-assurance-lab-testing.jpg"
                alt="Premium quality standards and certifications"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur px-4 py-3 rounded-lg border border-border">
                <p className="text-xs font-bold text-accent mb-1">ISO 9001</p>
                <p className="text-xs text-foreground/70">Certified Quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale & Bulk Pricing Section with Image */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-2xl border border-border order-2 lg:order-1">
              <img
                src="/wholesale-bulk-pricing-showcase.jpg"
                alt="Wholesale and bulk pricing warehouse"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-accent text-accent-foreground px-6 py-3 rounded-lg border-2 border-accent-foreground/20">
                <p className="text-2xl font-bold">Save</p>
                <p className="text-sm font-medium">Up to 25%</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
                Wholesale & Bulk Discounts
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Order in bulk and receive significant discounts. Our wholesale program is designed for researchers,
                clinics, and businesses looking for cost-effective solutions without compromising quality.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { range: "10 units", discount: "10% OFF", savings: "$50-150" },
                  { range: "25 units", discount: "15% OFF", savings: "$200-500" },
                  { range: "50 units", discount: "20% OFF", savings: "$600-1500" },
                  { range: "100+ units", discount: "25% OFF", savings: "$2000+" },
                ].map((tier, idx) => (
                  <div
                    key={idx}
                    className="group p-4 bg-background border border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-foreground font-semibold group-hover:text-accent transition-colors">
                        {tier.range}
                      </span>
                      <span className="text-accent font-bold text-lg">{tier.discount}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{tier.savings} in savings</p>
                  </div>
                ))}
              </div>

              <Link href="/wholesale">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base tracking-wider w-full sm:w-auto"
                >
                  Request Wholesale Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <p className="text-xs text-muted-foreground mt-4">
                ✓ Dedicated account manager • ✓ Custom pricing • ✓ Priority support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              Our best-selling research compounds with premium quality and reliability
            </p>
          </div>

          <div className="text-center py-12">
            <Link href="/shop">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base tracking-wider"
              >
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Protocols Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                <Microscope className="h-4 w-4 text-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Scientific Guidance</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight">
                Standard <span className="text-accent">Research Protocols</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Proper handling and storage are critical for maintaining compound integrity. We provide comprehensive guides for professional research environments.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Thermometer,
                    title: "Storage Conditions",
                    desc: "Maintaining optimal temperatures (2-8°C for reconstituted, -20°C for lyophilized)."
                  },
                  {
                    icon: FlaskConical,
                    title: "Reconstitution Guide",
                    desc: "Step-by-step protocols for preparing compounds for laboratory analysis."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-border rounded-2xl bg-background/50 hover:border-accent/40 transition-colors">
                    <div className="p-3 bg-accent/10 rounded-xl h-fit">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative rounded-[40px] overflow-hidden border border-border group shadow-2xl">
                <img
                  src="/wholesale-lab.png"
                  alt="Laboratory Research"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/80 backdrop-blur-md rounded-2xl border border-white/10">
                  <p className="text-sm font-bold text-accent mb-1 tracking-widest uppercase">Protocol Library</p>
                  <p className="text-lg font-medium text-foreground">Access 50+ detailed research whitepapers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Browse our complete catalog of research-grade products or contact our team for personalized recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base tracking-wider"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="px-8 py-6 text-base tracking-wider bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </div>
  )
}
