import type { Review } from "@/lib/types"

export const reviews: Review[] = [
  {
    id: "1",
    productId: "1",
    userId: "user-001",
    userName: "Dr. James M.",
    rating: 5,
    title: "Exceptional purity and quality",
    text: "I've been ordering from PeptidePros for over a year. The quality and purity of their peptides is consistently excellent. Fast shipping and discreet packaging. Highly recommended for serious researchers.",
    createdAt: new Date("2024-01-10"),
  },
  {
    id: "2",
    productId: "1",
    userId: "user-002",
    userName: "Sarah K.",
    rating: 5,
    title: "Reliable source for quality products",
    text: "Great customer service and the products are exactly as described. Very professional and trustworthy. Will definitely order again.",
    createdAt: new Date("2024-01-08"),
  },
  {
    id: "3",
    productId: "2",
    userId: "user-003",
    userName: "Michael T.",
    rating: 4,
    title: "Good quality, fast shipping",
    text: "The product arrived quickly and is of good quality. Minor issue with packaging but overall very satisfied.",
    createdAt: new Date("2024-01-05"),
  },
  {
    id: "4",
    productId: "3",
    userId: "user-004",
    userName: "Emma R.",
    rating: 5,
    title: "Best peptides I've found",
    text: "After trying several sources, this is by far the best. The potency and purity are unmatched. The customer support team is also very responsive.",
    createdAt: new Date("2024-01-02"),
  },
  {
    id: "5",
    productId: "4",
    userId: "user-005",
    userName: "David L.",
    rating: 4,
    title: "Solid product, good value",
    text: "Good quality peptides at reasonable prices. The bulk discounts are helpful for regular users.",
    createdAt: new Date("2023-12-28"),
  },
]

export function getProductReviews(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export function getAverageRating(productId: string): number {
  const productReviews = getProductReviews(productId)
  if (productReviews.length === 0) return 0
  const sum = productReviews.reduce((acc, r) => acc + r.rating, 0)
  return sum / productReviews.length
}
