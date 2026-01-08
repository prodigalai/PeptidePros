"use client"

import { useState } from "react"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { SearchBar } from "@/components/search-bar"
import { products } from "@/lib/products"

export function ShopContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("featured")
  const [searchQuery, setSearchQuery] = useState<string>("")

  const filteredCount =
    selectedCategory === "all"
      ? products.length
      : products.filter((p) => p.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory).length

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground mb-4 text-balance">
              Premium Research Products
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Browse our comprehensive collection of research-grade peptides, compounds, and health supplements
            </p>
          </div>

          <div className="flex justify-center">
            <SearchBar />
          </div>
        </div>
      </section>

      <main className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <ProductFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
            productCount={filteredCount}
          />

          {/* Product Grid */}
          <ProductGrid filters={{ category: selectedCategory, sort: sortBy }} />
        </div>
      </main>
    </>
  )
}
