import Reveal from '../components/Reveal'

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="eyebrow text-plum">About Sari Spa</span>
        </Reveal>
        <Reveal>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl leading-snug text-charcoal sm:text-4xl md:text-[2.75rem]">
            Sari Spa is a space to slow down, switch off and take care of
            yourself.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mocha">
            Tucked inside Atlantis Hotels &amp; Apartments in GRA Phase 3, Port
            Harcourt, Sari Spa is a calm, private setting for rest and wellness.
            The focus is simple: a clean, comfortable environment and warm,
            professional care, so you can unwind and leave feeling refreshed.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
