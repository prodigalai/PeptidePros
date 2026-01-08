"use client"

import { useState, useCallback } from "react"
import { Search, X } from "lucide-react"
import { products } from "@/lib/products"
import Link from "next/link"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const filteredProducts = query
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase()),
        )
        .slice(0, 8)
    : []

  const handleClear = useCallback(() => {
    setQuery("")
    setIsOpen(false)
  }, [])

  return (
    <div className="relative w-full max-w-md">
      <div className="relative flex items-center">
        <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => query && setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {query && (
          <button onClick={handleClear} className="absolute right-3 text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            <div className="divide-y divide-border">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={handleClear}
                  className="flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors"
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-10 w-10 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-sm text-muted-foreground">No products found</div>
          )}
        </div>
      )}
    </div>
  )
}
