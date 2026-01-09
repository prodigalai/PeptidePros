"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, ShoppingBag } from "lucide-react"
import Link from "next/link"

const lookbookItems = [
  {
    id: 1,
    image: "/hero-pharmaceutical-lab-research.jpg",
    title: "Advanced Synthesis",
    description: "Multi-stage peptide synthesis environment utilizing automated peptide synthesizers for high-yield, high-purity production.",
    products: [
      { id: 1, name: "Melanotan 2 (MT-2) 10mg", price: 36.95 },
      { id: 3, name: "PT-141 (Bremelanotide) 10mg", price: 37.5 },
    ],
  },
  {
    id: 2,
    image: "/quality-assurance-lab-testing.jpg",
    title: "Analytical Verification",
    description: "Analytical protocols ensuring every batch meets our high purity standards before dispatch.",
    products: [
      { id: 2, name: "BPC 157 5mg", price: 47.25 },
      { id: 5, name: "Tirzepatide 5mg", price: 145.99 },
    ],
  },
  {
    id: 3,
    image: "/peptide-products-showcase.jpg",
    title: "Professional Provisioning",
    description: "Final quality checks and secure packaging of research compounds for global distribution.",
    products: [
      { id: 4, name: "CJC-1295 NO DAC 2mg", price: 43.25 },
      { id: 7, name: "Ipamorelin 2mg", price: 40.5 },
    ],
  },
  {
    id: 4,
    image: "/fast-secure-shipping.jpg",
    title: "Secure Logistics",
    description: "Professional, climate-controlled shipping logistics ensuring continuous compound integrity from lab to researcher.",
    products: [
      { id: 10, name: "Semaglutide 5mg", price: 125.5 },
      { id: 25, name: "Tesamorelin 2mg", price: 65.5 },
    ],
  },
  {
    id: 5,
    image: "/customer-success-research-team.jpg",
    title: "Technical Consultation",
    description: "Our team of specialists providing technical data and laboratory assistance to professional researchers.",
    products: [
      { id: 13, name: "Bacteriostatic Water 30ml", price: 14.5 },
      { id: 14, name: "Sterile Vials (Pack of 10)", price: 18.99 },
    ],
  },
  {
    id: 6,
    image: "/pharmaceutical-research-peptide-vial-laboratory.jpg",
    title: "Baseline Repository",
    description: "Extensive inventory of verified peptide standards maintained in high-precision cryogenic facilities.",
    products: [
      { id: 20, name: "AOD9604 5mg", price: 55.25 },
      { id: 23, name: "Epitalon 10mg", price: 58.5 },
    ],
  },
]

export function LookbookGallery() {
  const [selectedLook, setSelectedLook] = useState<(typeof lookbookItems)[0] | null>(null)

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lookbookItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedLook(item)}
              className="group relative aspect-[3/4] overflow-hidden bg-muted text-left"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-background">
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-2">{item.title}</h3>
                <p className="text-sm text-background/90 mb-4">{item.description}</p>
                <span className="inline-flex items-center text-sm font-medium">
                  Shop this look
                  <ShoppingBag className="ml-2 h-4 w-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedLook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4">
          <div className="relative bg-background max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedLook(null)}
            >
              <X className="h-5 w-5" />
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="aspect-[3/4] bg-muted">
                <img
                  src={selectedLook.image || "/placeholder.svg"}
                  alt={selectedLook.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-8 md:p-12">
                <h2 className="font-serif text-3xl font-light text-foreground mb-2">{selectedLook.title}</h2>
                <p className="text-muted-foreground mb-8">{selectedLook.description}</p>

                <h3 className="text-sm font-medium tracking-wider uppercase mb-4">Featured Products</h3>
                <div className="space-y-4">
                  {selectedLook.products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between py-4 border-b border-border">
                      <div>
                        <p className="font-medium text-foreground">{product.name}</p>
                        <p className="text-sm text-muted-foreground">${product.price}</p>
                      </div>
                      <Link href={`/product/${product.id}`}>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          View
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-8 bg-primary text-primary-foreground hover:bg-primary/90 py-6">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add All to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
