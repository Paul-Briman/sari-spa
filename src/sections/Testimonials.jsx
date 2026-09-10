import SectionHeading from '../components/SectionHeading'
import TestimonialCard from '../components/TestimonialCard'
import Reveal from '../components/Reveal'
import { REVIEWS } from '../data/site'

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-lavender-soft py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Kind Words"
          title="From our guests"
          lead="Real experiences shared by people who've spent time at Sari Spa."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 100} className="h-full">
              <TestimonialCard review={review} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
