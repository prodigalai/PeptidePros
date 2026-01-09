export interface Product {
  id: string
  name: string
  category: string
  price: number
  originalPrice?: number
  image: string
  description: string
  rating: number
  reviews: number
  inStock: boolean
  dosage?: string
  quantity?: string
  sku?: string
  bulkDiscounts?: BulkDiscount[]
}

export interface BulkDiscount {
  minQuantity: number
  maxQuantity: number
  discount: number // percentage
  label: string
}

export const bulkDiscountTiers: BulkDiscount[] = [
  { minQuantity: 5, maxQuantity: 9, discount: 10, label: "5-9 units: Save 10%" },
  { minQuantity: 10, maxQuantity: 19, discount: 15, label: "10-19 units: Save 15%" },
  { minQuantity: 20, maxQuantity: 49, discount: 20, label: "20-49 units: Save 20%" },
  { minQuantity: 50, maxQuantity: Number.POSITIVE_INFINITY, discount: 25, label: "50+ units: Save 25%" },
]

export const products: Product[] = [
  // PEPTIDES
  {
    id: "1",
    name: "Melanotan 2 (MT-2) 10mg",
    category: "Peptides",
    price: 36.95,
    originalPrice: 47.99,
    image: "/g1.png",
    description:
      "Research-grade Melanotan 2 peptide for laboratory use. High purity formulation sourced from trusted suppliers.",
    rating: 4.8,
    reviews: 247,
    inStock: true,
    dosage: "10mg",
    sku: "SR-WHME-JEVC",
    bulkDiscounts: bulkDiscountTiers,
  },
  {
    id: "2",
    name: "PT-141 (Bremelanotide) 10mg",
    category: "Peptides",
    price: 37.5,
    originalPrice: 59.99,
    image: "/g2.png",
    description:
      "Premium research peptide PT-141 for scientific studies. Quality tested with 98% purity minimum.",
    rating: 4.9,
    reviews: 189,
    inStock: true,
    dosage: "10mg",
    sku: "SR-WHPT-SEVC",
    bulkDiscounts: bulkDiscountTiers,
  },
  {
    id: "3",
    name: "BPC 157 5mg",
    category: "Peptides",
    price: 47.25,
    originalPrice: 56.0,
    image: "/g3.png",
    description: "Body Protection Compound 157 - Research grade peptide for laboratory research and analysis.",
    rating: 4.7,
    reviews: 312,
    inStock: true,
    dosage: "5mg",
    sku: "SG-BPC1-1571",
    bulkDiscounts: bulkDiscountTiers,
  },
  {
    id: "4",
    name: "CJC-1295 NO DAC and IPAMORELIN BLEND (2mg each = 4mg total)",
    category: "Peptides",
    price: 43.25,
    originalPrice: 55.79,
    image: "/g4.png",
    description: "Dual peptide blend combining CJC-1295 NO DAC and IPAMORELIN for comprehensive research applications.",
    rating: 4.6,
    reviews: 156,
    inStock: true,
    dosage: "2mg each",
    sku: "BL-CJCN-IPAM",
    bulkDiscounts: bulkDiscountTiers,
  },
  {
    id: "5",
    name: "BPC 157 and TB-500 BLEND (2mg each = 4mg total)",
    category: "Peptides",
    price: 45.99,
    originalPrice: 59.99,
    image: "/g5.png",
    description:
      "Synergistic peptide blend combining BPC 157 and TB-500 (Thymosin B4) for enhanced research potential.",
    rating: 4.7,
    reviews: 203,
    inStock: true,
    dosage: "2mg each",
    sku: "BL-BPC-TB500",
    bulkDiscounts: bulkDiscountTiers,
  },
  {
    id: "6",
    name: "SERMORELIN 2mg",
    category: "Peptides",
    price: 23.99,
    originalPrice: 33.0,
    image: "/g6.png",
    description: "Growth hormone-releasing hormone (GHRH) analog for advanced research purposes. USA sourced.",
    rating: 4.8,
    reviews: 178,
    inStock: true,
    dosage: "2mg",
    sku: "SR-WHPT-SERM",
    bulkDiscounts: bulkDiscountTiers,
  },
  {
    id: "7",
    name: "CJC-1295 with DAC, IPAM, GHRP-2 BLEND (2mg each = 6mg)",
    category: "Peptides",
    price: 69.25,
    originalPrice: 90.0,
    image: "/g7.png",
    description: "Triple peptide blend for comprehensive research applications. Maximum potency formulation.",
    rating: 4.9,
    reviews: 289,
    inStock: true,
    dosage: "2mg each",
    sku: "BL-CJCD-IPAM-GHRP2",
    bulkDiscounts: bulkDiscountTiers,
  },
  {
    id: "8",
    name: "IPAMORELIN 2mg",
    category: "Peptides",
    price: 23.99,
    originalPrice: 33.0,
    image: "/g8.png",
    description: "Selective growth hormone secretagogue for research applications. High stability formulation.",
    rating: 4.8,
    reviews: 234,
    inStock: true,
    dosage: "2mg",
    sku: "SR-IPAM-JEVC",
    bulkDiscounts: bulkDiscountTiers,
  },
  {
    id: "9",
    name: "TB-500 (Thymosin B4) 2mg",
    category: "Peptides",
    price: 37.25,
    originalPrice: 47.99,
    image: "/g9.png",
    description: "Thymosin B4 analog for tissue regeneration and cellular support research.",
    rating: 4.7,
    reviews: 167,
    inStock: true,
    dosage: "2mg",
    sku: "SG-TMB4-0502",
    bulkDiscounts: bulkDiscountTiers,
  },

  // SARMS AND LIQUIDS
  {
    id: "10",
    name: "Tadalafil 30mg/ml @ 30ml",
    category: "SARMS and Liquids",
    price: 32.5,
    originalPrice: 47.99,
    image: "/g10.png",
    description: "Research-grade pharmaceutical compound for laboratory analysis. PDE5 inhibitor class.",
    rating: 4.7,
    reviews: 203,
    inStock: true,
    quantity: "30ml",
    sku: "SR-CHEM-TDFL",
    bulkDiscounts: bulkDiscountTiers,
  },
  {
    id: "11",
    name: "Sildenafil Citrate 25mg/ml @ 30ml",
    category: "SARMS and Liquids",
    price: 29.5,
    originalPrice: 44.99,
    image: "/g11.png",
    description: "High-purity research compound for scientific investigation. Quality tested.",
    rating: 4.8,
    reviews: 178,
    inStock: true,
    quantity: "30ml",
    sku: "SR-CHEM-SILD",
    bulkDiscounts: bulkDiscountTiers,
  },
]

export const categories = [
  { id: "all", name: "All Products" },
  { id: "peptides", name: "Peptides" },
  { id: "sarms-and-liquids", name: "SARMS and Liquids" },
  { id: "supplements", name: "Health Supplements" },
  { id: "accessories", name: "Medical Accessories" },
]

// Helper function to calculate bulk discount
export function getBulkDiscount(quantity: number, discounts: BulkDiscount[] = bulkDiscountTiers): number {
  for (const tier of discounts) {
    if (quantity >= tier.minQuantity && quantity <= tier.maxQuantity) {
      return tier.discount
    }
  }
  return 0
}

// Helper function to calculate discounted price
export function getDiscountedPrice(
  price: number,
  quantity: number,
  discounts: BulkDiscount[] = bulkDiscountTiers,
): number {
  const discountPercent = getBulkDiscount(quantity, discounts)
  return price * (1 - discountPercent / 100)
}
