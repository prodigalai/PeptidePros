"use client"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, ChevronDown, Check } from "lucide-react"
import { categories } from "@/lib/products"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ProductFiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  sortBy: string
  onSortChange: (sort: string) => void
  productCount: number
}

const sortOptions = [
  { id: "featured", name: "Featured" },
  { id: "newest", name: "Newest Arrivals" },
  { id: "price-low", name: "Price: Low to High" },
  { id: "price-high", name: "Price: High to Low" },
  { id: "rating", name: "Top Rated" },
]

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  productCount,
}: ProductFiltersProps) {
  const currentSortName = sortOptions.find(opt => opt.id === sortBy)?.name || "Sort By"

  return (
    <div className="mb-12 space-y-8">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
        {categories.map((category) => {
          const isActive = selectedCategory === category.id
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300
                ${isActive
                  ? "bg-accent text-accent-foreground shadow-[0_0_20px_rgba(var(--accent),0.3)] scale-105"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted border border-border/50 hover:border-accent/30"
                }
              `}
            >
              {category.name}
            </button>
          )
        })}
      </div>

      {/* Control Bar */}
      <div className="flex items-center justify-between py-6 px-4 bg-muted/20 border border-border/50 rounded-2xl backdrop-blur-sm gap-4">
        <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
          <div className="p-2 bg-background rounded-lg border border-border/50">
            <SlidersHorizontal className="h-4 w-4 text-accent" />
          </div>
          <span className="hidden sm:inline">Showing</span>
          <span className="text-foreground font-bold">{productCount}</span>
          <span className="hidden sm:inline">Results</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-11 px-4 border-border/50 bg-background hover:bg-muted text-sm font-medium gap-2 rounded-xl">
              <span className="text-muted-foreground font-normal">Sort:</span>
              {currentSortName}
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px] p-2 rounded-xl">
            {sortOptions.map((option) => (
              <DropdownMenuItem
                key={option.id}
                onClick={() => onSortChange(option.id)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${sortBy === option.id ? "bg-accent/10 text-accent font-medium" : ""
                  }`}
              >
                {option.name}
                {sortBy === option.id && <Check className="h-4 w-4" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
