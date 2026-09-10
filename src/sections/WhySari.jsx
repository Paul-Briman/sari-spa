import { Wind, Heart, Sparkles, Moon } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { WHY_POINTS } from '../data/site'

const ICONS = { Wind, Heart, Sparkles, Moon }

export default function WhySari() {
  return (
    <section className="bg-ivory py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Sari Spa"
          title="Small things, done with care"
          lead="What guests notice — and mention again and again."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_POINTS.map((point, i) => {
            const Icon = ICONS[point.icon] ?? Sparkles
            return (
              <Reveal
                key={point.title}
                delay={(i % 4) * 80}
                className="flex h-full flex-col rounded-2xl border border-charcoal/10 bg-cream p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory text-plum">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-xl text-charcoal">{point.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-mocha">
                  {point.body}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
