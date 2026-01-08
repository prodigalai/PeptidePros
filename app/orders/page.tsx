"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function OrdersRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/profile?tab=orders")
  }, [router])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        <p className="text-muted-foreground animate-pulse">Redirecting to secure orders dashboard...</p>
      </div>
    </div>
  )
}
