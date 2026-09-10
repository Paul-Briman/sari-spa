import { Star, Quote } from 'lucide-react'

export default function TestimonialCard({ review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-charcoal/10 bg-ivory p-7 shadow-soft">
      <Quote className="h-8 w-8 text-plum/25" aria-hidden="true" />

      <div className="mt-4 flex gap-1" aria-label="Rated 5 out of 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-plum text-plum" />
        ))}
      </div>

      <blockquote className="mt-4 flex-1 font-display text-xl leading-relaxed text-charcoal">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-charcoal/10 pt-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lavender-soft font-display text-lg font-semibold text-plum">
          {review.name.charAt(0)}
        </span>
        <span className="text-sm font-medium text-charcoal/80">— {review.name}</span>
      </figcaption>
    </figure>
  )
}
