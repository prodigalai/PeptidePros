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
      <section className="relative pt-44 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 mb-8 w-fit px-4 py-2 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm">
                <Zap className="h-4 w-4 text-accent" />
                <p className="text-accent text-[10px] font-bold uppercase tracking-[0.2em]">Premium Research Grade</p>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl font-light text-foreground mb-8 text-balance leading-[1.1]">
                Research-Grade <span className="text-accent italic">Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-xl leading-relaxed">
                Discover premium peptides, research compounds, and health supplements sourced from trusted laboratories.
                Quality assured and professionally formulated for discerning researchers.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/shop">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-xs font-bold uppercase tracking-[0.2em] w-full sm:w-auto rounded-2xl shadow-2xl shadow-primary/20 gap-3"
                  >
                    Shop Products
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-10 py-7 text-xs font-bold uppercase tracking-[0.2em] border-border hover:bg-muted/50 w-full sm:w-auto rounded-2xl"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-border/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/5 rounded-lg border border-accent/10">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-[10px] font-bold text-foreground/60 uppercase tracking-widest">Quality Tested</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/5 rounded-lg border border-accent/10">
                    <Lock className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-[10px] font-bold text-foreground/60 uppercase tracking-widest">Secure Payments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/5 rounded-lg border border-accent/10">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-[10px] font-bold text-foreground/60 uppercase tracking-widest">Fast Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full min-h-96 order-1 lg:order-2 rounded-[32px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-border bg-muted/20">
              <img
                src="/g1.png"
                alt="Premium peptide products and research compounds"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-6 right-6 bg-accent/90 backdrop-blur-md text-accent-foreground px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl">
                Industry Leader
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/60 backdrop-blur-md rounded-2xl border border-white/20 hidden md:block">
                <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Quality Guaranteed</p>
                <p className="text-sm text-foreground/80 leading-relaxed">Multi-stage synthesis ensuring high purity standards for professional research.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">Why Choose PeptideVault?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              We deliver uncompromising quality and expertise to researchers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Quality First",
                description: "All products undergo strict quality control to ensure they meet our high purity standards.",
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
                image: "/g1.png",
                count: "250+",
              },
              {
                name: "Research Compounds",
                description: "Laboratory-certified pharmaceutical compounds",
                href: "/shop?category=compounds",
                image: "/Img1.jpg",
                count: "180+",
              },
              {
                name: "Health Supplements",
                description: "Premium wellness and nutritional products",
                href: "/shop?category=supplements",
                image: "/Img2.jpg",
                count: "320+",
              },
              {
                name: "Medical Accessories",
                description: "Professional-grade medical supplies",
                href: "/shop?category=accessories",
                image: "/Img3.jpg",
                count: "150+",
              },
            ].map((category, idx) => (
              <Link key={idx} href={category.href}>
                <div className="group relative h-72 rounded-lg overflow-hidden border border-border hover:border-accent transition-all cursor-pointer shadow-md hover:shadow-lg">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
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
                  "Quality control and verification",
                  "Consistent purity standards",
                  "Professional manufacturing processes",
                  "Full product documentation",
                  "Secure delivery options",
                  "Satisfaction guarantee",
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
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur px-4 py-3 rounded-lg border border-border">
                <p className="text-xs font-bold text-accent mb-1">Quality Guaranteed</p>
                <p className="text-xs text-foreground/70">Verified Content</p>
              </div>
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
                  loading="lazy"
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
