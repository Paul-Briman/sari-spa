import { MapPin } from 'lucide-react'
import WhatsAppButton from '../components/WhatsAppButton'
import { IMAGES, BUSINESS } from '../data/site'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ivory">
      {/* soft ambient wash echoing the photography's purple light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-lavender-soft blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-40">
        {/* Copy */}
        <div className="reveal is-visible">
          <div className="flex items-center gap-3 text-plum">
            <span className="h-px w-8 bg-plum/50" aria-hidden="true" />
            <span className="eyebrow">Sari Spa · Port Harcourt</span>
          </div>

          <h1 className="mt-6 text-5xl leading-[1.05] text-charcoal sm:text-6xl md:text-7xl">
            Your space to
            <br />
            <span className="italic text-plum">unwind.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-mocha">
            A calm, comfortable spa in the heart of GRA Phase 3. Step away from
            the rush of the day, slow down, and give yourself time to relax and
            feel renewed.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton size="lg">Book on WhatsApp</WhatsAppButton>
            <a
              href="#treatments"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/20 px-8 py-4 text-[0.95rem] font-medium text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal/50 hover:bg-charcoal/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
            >
              Explore Treatments
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-taupe">
            <MapPin className="h-4 w-4 text-plum" />
            <span>{BUSINESS.areaShort}</span>
          </div>
        </div>

        {/* Image */}
        <div className="reveal is-visible relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-charcoal/10 shadow-lift">
            <img
              src={IMAGES.treatmentRoom}
              alt="Treatment room at Sari Spa in Port Harcourt"
              className="aspect-[4/5] w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 to-transparent" />
          </div>

          {/* small overlapping detail card */}
          <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-plum/20 bg-ivory/95 px-5 py-4 shadow-soft backdrop-blur sm:block">
            <p className="font-display text-lg italic text-charcoal">
              Relax. Restore.
              <br />
              Feel renewed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
