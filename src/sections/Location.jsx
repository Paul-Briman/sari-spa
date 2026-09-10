import { MapPin, Phone, Navigation } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import WhatsAppButton from '../components/WhatsAppButton'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { BUSINESS, IMAGES } from '../data/site'
import { PHONE_DISPLAY, PHONE_TEL, waLink, GENERAL_BOOKING_MESSAGE } from '../lib/whatsapp'

export default function Location() {
  return (
    <section id="contact" className="bg-ivory py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Visit / Contact"
          title="Find us in GRA Phase 3"
          lead="We're inside Atlantis Hotels & Apartments in Port Harcourt. Reach us on WhatsApp for the fastest response, or give us a call."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Premises image */}
          <Reveal className="overflow-hidden rounded-3xl border border-charcoal/10 shadow-soft">
            <img
              src={IMAGES.premises}
              alt="Sari Spa premises at Atlantis Hotels and Apartments in Port Harcourt"
              loading="lazy"
              className="h-full min-h-[20rem] w-full object-cover"
            />
          </Reveal>

          {/* Details */}
          <Reveal className="flex flex-col justify-center gap-6 rounded-3xl border border-charcoal/10 bg-cream p-8 shadow-soft sm:p-10">
            <div>
              <h3 className="text-2xl text-charcoal">{BUSINESS.name}</h3>
            </div>

            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-plum" strokeWidth={1.7} />
              <p className="text-charcoal/85">
                {BUSINESS.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-plum" strokeWidth={1.7} />
              <div>
                <p className="text-sm text-mocha">Phone</p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-lg text-charcoal transition-colors hover:text-plum"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <WhatsAppIcon className="mt-1 h-5 w-5 shrink-0 text-plum" />
              <div>
                <p className="text-sm text-mocha">WhatsApp</p>
                <a
                  href={waLink(GENERAL_BOOKING_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-charcoal transition-colors hover:text-plum"
                >
                  Book via WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton className="w-full sm:w-auto">Book on WhatsApp</WhatsAppButton>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 text-sm font-medium text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal/50 hover:bg-charcoal/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 sm:w-auto"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
