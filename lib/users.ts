import type { User } from "./types"

// Mock users database
const mockUsers: User[] = [
  {
    id: "user-1",
    email: "john@example.com",
    firstName: "John",
    lastName: "Doe",
    phone: "+1-555-0123",
    address: "123 Research Lane",
    city: "Boston",
    state: "MA",
    zip: "02101",
    createdAt: new Date("2025-01-01"),
    updatedAt: new Date("2025-01-01"),
  },
]

export function getUserById(userId: string): User | undefined {
  return mockUsers.find((user) => user.id === userId)
}

export function getUserByEmail(email: string): User | undefined {
  return mockUsers.find((user) => user.email === email)
}

export function createUser(userData: Omit<User, "id" | "createdAt" | "updatedAt">): User {
  const newUser: User = {
    ...userData,
    id: `user-${Date.now()}`,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  mockUsers.push(newUser)
  return newUser
}

export function updateUser(userId: string, updates: Partial<Omit<User, "id" | "createdAt">>): User | undefined {
  const user = mockUsers.find((u) => u.id === userId)
  if (user) {
    Object.assign(user, updates, { updatedAt: new Date() })
  }
  return user
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePassword(password: string): boolean {
  return password.length >= 8
}
