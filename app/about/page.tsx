import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Beaker, Shield, Users, Zap, Microscope, FlaskConical, Globe, Award, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us | PeptideVault - Scientific Excellence",
  description: "Learn about PeptideVault' commitment to pharmaceutical purity, laboratory excellence, and advancing scientific research.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="relative mt-24">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[1500px] bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <Microscope className="h-4 w-4 text-accent" />
                <span className="text-accent text-xs font-bold tracking-widest uppercase">High Purity Standard</span>
              </div>

              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-tight tracking-tight">
                Pioneering <span className="text-accent italic">Scientific</span> <br />
                Excellence
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Advancing the frontiers of research with high quality control and verified compounds.
              </p>
            </div>

            <div className="relative aspect-[21/9] rounded-[48px] overflow-hidden border border-border shadow-2xl group">
              <img
                src="/hero-pharmaceutical-lab-research.jpg"
                alt="PeptideVault Advanced Research Facility"
                className="w-full h-full object-cover transform transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* Stat Strip */}
        <section className="py-12 border-y border-border bg-muted/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { value: "99%+", label: "Purity Focus" },
                { value: "500+", label: "Institutions Served" },
                { value: "100%", label: "Quality Verified" },
                { value: "24/7", label: "Professional Support" }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold text-foreground font-serif tracking-tight">{stat.value}</p>
                  <p className="text-xs font-bold text-accent uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Mission Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight">
                  Our Unyielding <br />
                  <span className="text-accent italic">Commitment to Purity</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded in a pursuit of quality, PeptideVault provides researchers with the high-fidelity tools necessary for breakthrough discoveries. We believe that integrity starts with the smallest molecule.
                  </p>
                  <p>
                    Every compound in our catalog is the result of rigorous verification. We work to ensure that every mg delivered is exactly what your research requires.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span className="text-sm font-medium text-foreground">Verified Batches</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span className="text-sm font-medium text-foreground">Quality Verification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span className="text-sm font-medium text-foreground">Secure Logistics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span className="text-sm font-medium text-foreground">Professional Compliance</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden border border-border shadow-2xl relative group">
                  <img
                    src="/wholesale-lab.png"
                    alt="Scientist in Lab"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-10 -left-10 bg-foreground text-background p-8 rounded-[32px] shadow-2xl space-y-2 hidden md:block border border-white/10">
                  <FlaskConical className="h-10 w-10 text-accent mb-4" />
                  <p className="text-2xl font-bold font-serif">99.8% Purity</p>
                  <p className="text-sm opacity-60">Verified Average Across All Batches</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">Operational Pillars</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                The core methodologies that define our position as industry leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Beaker,
                  title: "Quality Rigor",
                  desc: "Every batch is subjected to multi-stage testing to guarantee high purity levels.",
                  color: "bg-blue-500/10 text-blue-500"
                },
                {
                  icon: Shield,
                  title: "Chain of Custody",
                  desc: "We maintain absolute control from manufacturing to delivery, ensuring product integrity is never compromised.",
                  color: "bg-emerald-500/10 text-emerald-500"
                },
                {
                  icon: Globe,
                  title: "Global Outreach",
                  desc: "Facilitating research worldwide with expert customs handling and expedited global priority shipping.",
                  color: "bg-orange-500/10 text-orange-500"
                },
                {
                  icon: Users,
                  title: "Scientific Support",
                  desc: "Access a dedicated team of specialists who understand the complexities of your research parameters.",
                  color: "bg-purple-500/10 text-purple-500"
                }
              ].map((value, i) => (
                <div key={i} className="group p-8 bg-background border border-border rounded-[32px] hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <div className={`p-4 rounded-2xl w-fit mb-6 transition-transform group-hover:scale-110 duration-300 ${value.color}`}>
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Row */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="bg-foreground text-background rounded-[48px] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

              <div className="lg:w-1/2 space-y-8 relative z-10 text-center lg:text-left">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                  Driving <span className="text-accent underline decoration-accent/20 underline-offset-8">Research</span> <br />
                  Forward
                </h2>
                <p className="text-lg opacity-70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Our roadmap is built on constant innovation. We are continuously expanding our compound library and refining our analytical methods to stay ahead of scientific needs.
                </p>
                <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                  <Link href="/shop">
                    <Button size="lg" className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90 text-lg group">
                      Explore Catalog
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2 relative lg:h-[400px]">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 group">
                      <img src="/quality-assurance-lab-testing.jpg" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Lab Test" loading="lazy" />
                    </div>
                    <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 group">
                      <img src="/pharmaceutical-compound-liquid-research.jpg" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Liquid Compound" loading="lazy" />
                    </div>
                  </div>
                  <div className="space-y-6 pt-12">
                    <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 group">
                      <img src="/customer-success-research-team.jpg" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Research Team" loading="lazy" />
                    </div>
                    <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 [display:none] sm:block">
                      <div className="w-full h-full bg-accent/20 flex flex-col items-center justify-center text-center p-6">
                        <Award className="h-12 w-12 text-accent mb-2" />
                        <p className="text-xs font-bold uppercase tracking-widest text-accent">Excellence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
