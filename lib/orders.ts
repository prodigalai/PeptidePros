import type { Order, OrderItem, ShippingAddress } from "./types"

// Mock orders database
const mockOrders: Order[] = [
  {
    id: "ORD-001",
    userId: "user-1",
    items: [
      {
        productId: "1",
        productName: "Melanotan 2 (MT-2) 10mg",
        quantity: 1,
        price: 36.95,
        total: 36.95,
      },
    ],
    subtotal: 36.95,
    shipping: 9.99,
    tax: 3.69,
    total: 50.63,
    status: "delivered",
    trackingNumber: "1Z999AA10123456784",
    shippingAddress: {
      firstName: "John",
      lastName: "Doe",
      address: "123 Research Lane",
      city: "Boston",
      state: "MA",
      zip: "02101",
      email: "john@example.com",
    },
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-05"),
  },
]

export function getOrdersByUserId(userId: string): Order[] {
  return mockOrders.filter((order) => order.userId === userId)
}

export function getOrderById(orderId: string): Order | undefined {
  return mockOrders.find((order) => order.id === orderId)
}

export function createOrder(userId: string, items: OrderItem[], shippingAddress: ShippingAddress): Order {
  const subtotal = items.reduce((sum, item) => sum + item.total, 0)
  const shipping = subtotal > 150 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const newOrder: Order = {
    id: `ORD-${Date.now()}`,
    userId,
    items,
    subtotal,
    shipping,
    tax,
    total,
    status: "processing",
    shippingAddress,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  mockOrders.push(newOrder)
  return newOrder
}

export function updateOrderStatus(orderId: string, status: Order["status"]): Order | undefined {
  const order = mockOrders.find((o) => o.id === orderId)
  if (order) {
    order.status = status
    order.updatedAt = new Date()
  }
  return order
}
