import WhatsAppButton from '../components/WhatsAppButton'
import Reveal from '../components/Reveal'
import { IMAGES } from '../data/site'

export default function Experience() {
  return (
    <section id="experience" className="bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-7xl items-stretch gap-0 lg:grid-cols-2">
        {/* Image */}
        <Reveal className="relative min-h-[24rem] overflow-hidden lg:min-h-[40rem]">
          <img
            src={IMAGES.treatmentRoom}
            alt="Calm treatment room at Sari Spa in Port Harcourt"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: '50% 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent lg:bg-gradient-to-r" />
        </Reveal>

        {/* Copy */}
        <div className="flex items-center px-6 py-20 sm:px-12 lg:px-16">
          <Reveal className="max-w-lg">
            <span className="eyebrow text-lavender">The Experience</span>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl md:text-6xl">
              Designed for your
              <span className="italic text-lavender"> pause.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ivory/75">
              Arrive, breathe out, and let the day fall away. In a quiet,
              softly-lit room, unhurried care takes over — time that is simply
              yours.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ivory/75">
              You settle in, you slow down, and you leave feeling lighter than
              when you walked in.
            </p>
            <div className="mt-9">
              <WhatsAppButton variant="green" size="lg">
                Book on WhatsApp
              </WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
