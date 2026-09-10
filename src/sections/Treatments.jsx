import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import Reveal from '../components/Reveal'
import WhatsAppButton from '../components/WhatsAppButton'
import { SERVICES_WITH_MESSAGES, IMAGES } from '../data/site'

export default function Treatments() {
  return (
    <section id="treatments" className="bg-ivory py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Treatments"
          title="Time set aside for you"
          lead="Simple, considered ways to relax — book the one you're after in seconds on WhatsApp."
        />

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* In-treatment visual (not labelled as a specific service) */}
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-charcoal/10 shadow-lift">
              <img
                src={IMAGES.inTreatment}
                alt="Spa treatment in progress at Sari Spa"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Service categories */}
          <div className="grid gap-6 sm:grid-cols-2">
            {SERVICES_WITH_MESSAGES.map((service, i) => (
              <Reveal key={service.id} delay={i * 90} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}

            <Reveal className="sm:col-span-2">
              <div className="flex flex-col items-start gap-4 rounded-2xl bg-lavender-soft px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-mocha">
                  Not sure what you need? Message us and we&apos;ll help you plan
                  your visit.
                </p>
                <WhatsAppButton className="shrink-0">Book on WhatsApp</WhatsAppButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
