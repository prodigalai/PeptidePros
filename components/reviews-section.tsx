"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Review } from "@/lib/types"

interface ReviewsSectionProps {
  productId: string
  reviews: Review[]
  averageRating: number
}

export function ReviewsSection({ productId, reviews, averageRating }: ReviewsSectionProps) {
  const [sortBy, setSortBy] = useState<"helpful" | "newest">("newest")

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "newest") {
      return b.createdAt.getTime() - a.createdAt.getTime()
    }
    return 0
  })

  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((r) => r.rating === rating).length,
    percentage: (reviews.filter((r) => r.rating === rating).length / reviews.length) * 100,
  }))

  return (
    <div className="pt-12 border-t border-border">
      <h2 className="font-serif text-3xl font-light text-foreground mb-8">Customer Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Rating Summary */}
        <div className="space-y-4">
          <div>
            <div className="flex items-end gap-2 mb-2">
              <span className="font-serif text-5xl font-light text-foreground">{averageRating.toFixed(1)}</span>
              <span className="text-muted-foreground">out of 5</span>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(averageRating) ? "fill-accent text-accent" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-2">Based on {reviews.length} reviews</p>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="md:col-span-2 space-y-3">
          {ratingDistribution.map((dist) => (
            <div key={dist.rating} className="flex items-center gap-3">
              <div className="flex items-center gap-1 w-16">
                <span className="text-sm text-muted-foreground">{dist.rating}</span>
                <Star className="h-3 w-3 fill-accent text-accent" />
              </div>
              <div className="flex-1 bg-muted h-2 rounded-full overflow-hidden">
                <div className="bg-accent h-full transition-all" style={{ width: `${dist.percentage}%` }} />
              </div>
              <span className="text-sm text-muted-foreground w-10 text-right">{dist.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div className="mb-6 flex items-center justify-between">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "helpful" | "newest")}
          className="text-sm bg-background border border-border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-foreground cursor-pointer"
        >
          <option value="newest">Newest First</option>
          <option value="helpful">Most Helpful</option>
        </select>

        <Button variant="outline">Write a Review</Button>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {sortedReviews.length > 0 ? (
          sortedReviews.map((review) => (
            <div key={review.id} className="border border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-foreground">{review.userName}</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < review.rating ? "fill-accent text-accent" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="font-medium text-foreground mb-2">{review.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{review.text}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-muted-foreground py-8">No reviews yet. Be the first to review this product!</p>
        )}
      </div>
    </div>
  )
}
