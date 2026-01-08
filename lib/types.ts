export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  address?: string
  city?: string
  state?: string
  zip?: string
  createdAt: Date
  updatedAt: Date
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  trackingNumber?: string
  shippingAddress: ShippingAddress
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  productId: string
  productName: string
  quantity: number
  price: number
  total: number
}

export interface ShippingAddress {
  firstName: string
  lastName: string
  address: string
  city: string
  state: string
  zip: string
  email: string
}

export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  rating: number
  title: string
  text: string
  createdAt: Date
}

export interface ProductSpecification {
  name: string
  value: string
}

export interface PeptideData {
  purityPercentage: number
  molWeight: number
  structure: string
  sequence?: string
}

export interface ResearchCompoundData {
  chemicalFormula: string
  molWeight: number
  concentration?: string
}

export interface SupplementData {
  servingSize: string
  servingsPerContainer: number
  activeIngredients: string[]
}

export type ProductCategory = "Peptides" | "Research Compounds" | "Health Supplements" | "Medical Accessories"
