import Reveal from '../components/Reveal'
import WhatsAppButton from '../components/WhatsAppButton'
import { BUSINESS } from '../data/site'

export default function BookingCTA() {
  return (
    <section className="bg-plum text-ivory">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-28">
        <Reveal>
          <span className="eyebrow text-ivory/70">Ready when you are</span>
          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl">
            Make time for yourself.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/85">
            Ready to slow down and unwind? Get in touch with Sari Spa to find an
            appointment that works for you.
          </p>
          <div className="mt-9 flex justify-center">
            <WhatsAppButton variant="green" size="lg">
              Book on WhatsApp
            </WhatsAppButton>
          </div>
          <p className="mt-5 text-sm text-ivory/60">{BUSINESS.areaShort}</p>
        </Reveal>
      </div>
    </section>
  )
}
