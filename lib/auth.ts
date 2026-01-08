"use client"

import { useState, useEffect } from "react"

export interface User {
    id: string
    name: string
    email: string
    avatar?: string
    role: "customer" | "researcher" | "wholesaler"
}

const STORAGE_KEY = "peptide_pros_user"

export function useAuth() {
    const [user, setUser] = useState<User | null>(null)
    const [isInitialized, setIsInitialized] = useState(false)

    useEffect(() => {
        const savedUser = localStorage.getItem(STORAGE_KEY)
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser))
            } catch (e) {
                console.error("Failed to parse user from localStorage", e)
            }
        }
        setIsInitialized(true)
    }, [])

    const login = (userData: User) => {
        setUser(userData)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem(STORAGE_KEY)
    }

    const updateUser = (updates: Partial<User>) => {
        if (!user) return
        const newUser = { ...user, ...updates }
        setUser(newUser)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser))
    }

    return {
        user,
        isInitialized,
        login,
        logout,
        updateUser,
        isAuthenticated: !!user,
    }
}
