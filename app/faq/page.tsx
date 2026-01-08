"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, HelpCircle, MessageSquare, ShieldCheck, Truck, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  const faqs = [
    {
      category: "Laboratory Standards",
      icon: ShieldCheck,
      items: [
        {
          q: "Are your products laboratory tested?",
          a: "Every batch undergoes rigorous third-party HPLC/MS analysis, purity verification, and sterility testing at independent ISO-certified facilities.",
        },
        {
          q: "What purity levels are guaranteed?",
          a: "We mandate a minimum purity threshold of 99% for all research compounds. Batch-specific Certificates of Analysis (CoA) are available in your research portal.",
        },
      ],
    },
    {
      category: "Logistics & Dispatch",
      icon: Truck,
      items: [
        {
          q: "How discreet is the shipping process?",
          a: "All shipments are dispatched in professional, nondescript clinical packaging. Zero external branding or compound names are visible to ensure research privacy.",
        },
        {
          q: "What are the priority shipping timelines?",
          a: "Domestic orders are processed within 24 hours. Priority research shipping typically arrives within 2-3 business days with full real-time telemetry tracking.",
        },
      ],
    },
    {
      category: "Secure Authorization",
      icon: CreditCard,
      items: [
        {
          q: "What payment protocols do you accept?",
          a: "We accept all major credit cards through secure 256-bit AES encryption. For enhanced privacy, we also support Bitcoin and Ethereum research grants.",
        },
        {
          q: "Is my institutional data secure?",
          a: "All researcher data is siloed and encrypted. We maintain zero-knowledge infrastructure for sensitive laboratory and payment information.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 rounded-full border border-accent/20">
              <HelpCircle className="h-4 w-4 text-accent" />
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Inquiry Knowledge Base</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-balance">
              How can we assist your <span className="text-accent italic font-medium">Research?</span>
            </h1>
            <div className="max-w-2xl mx-auto relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
              <input
                type="text"
                placeholder="Search the laboratory knowledge base..."
                className="w-full h-16 pl-14 pr-8 rounded-[24px] bg-muted/30 border border-border/50 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all text-sm font-medium"
              />
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="px-4 max-w-5xl mx-auto space-y-16">
          {faqs.map((section, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-4">
                <div className="h-14 w-14 rounded-[20px] bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <section.icon className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-serif text-3xl font-light text-foreground">{section.category}</h2>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-[0.15em] leading-relaxed">Technical guidance and procedural information regarding our {section.category.toLowerCase()}.</p>
              </div>

              <div className="lg:col-span-8 animate-in fade-in slide-in-from-right-4 duration-700">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {section.items.map((item, itemIdx) => (
                    <AccordionItem
                      key={itemIdx}
                      value={`${idx}-${itemIdx}`}
                      className="border border-border/100 rounded-[28px] px-8 bg-muted/10 hover:bg-muted/20 hover:border-accent/30 transition-all duration-300"
                    >
                      <AccordionTrigger className="py-6 text-left text-base font-semibold text-foreground hover:no-underline hover:text-accent transition-colors">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-muted-foreground leading-relaxed font-medium text-sm">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          ))}
        </section>

        {/* Global Support */}
        <section className="px-4 mt-32">
          <div className="max-w-5xl mx-auto p-12 bg-gradient-to-br from-accent to-accent/80 rounded-[48px] relative overflow-hidden text-accent-foreground text-center shadow-2xl shadow-accent/40">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <MessageSquare className="h-40 w-40 rotate-12" />
            </div>
            <div className="relative z-10 space-y-6">
              <h3 className="font-serif text-4xl font-light">Further Technical Inquiries?</h3>
              <p className="max-w-xl mx-auto text-accent-foreground/80 font-medium">Our clinical support specialists are available 24/7 to provide detailed compound specifications and logistics assistance.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white rounded-full h-14 px-10 font-bold uppercase tracking-widest text-[10px]" asChild>
                  <a href="/contact">Direct Inquiry</a>
                </Button>
                <Button variant="secondary" className="bg-white text-accent hover:bg-white/90 rounded-full h-14 px-10 font-bold uppercase tracking-widest text-[10px]">
                  Call Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
