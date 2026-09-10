import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import { waLink, GENERAL_BOOKING_MESSAGE, PHONE_TEL } from '../lib/whatsapp'

/**
 * Two persistent, accessible booking affordances that appear once the
 * visitor scrolls past the hero:
 *  - a tasteful floating WhatsApp button (tablet / desktop)
 *  - a compact sticky booking bar (mobile), with safe-area spacing
 */
export default function FloatingWhatsApp() {
  const [shown, setShown] = useState(false)
  const href = waLink(GENERAL_BOOKING_MESSAGE)

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 520)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Desktop / tablet floating button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp"
        className={`fixed bottom-6 right-6 z-40 hidden items-center gap-2.5 rounded-full bg-whatsapp py-3.5 pl-4 pr-6 text-white shadow-[0_16px_34px_-12px_rgba(37,211,102,0.75)] transition-all duration-300 hover:bg-whatsapp-dark hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 sm:flex ${
          shown ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="whitespace-nowrap text-sm font-medium">Book on WhatsApp</span>
      </a>

      {/* Mobile sticky booking bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-ivory/95 px-4 py-3 backdrop-blur-md transition-transform duration-300 sm:hidden ${
          shown ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
      >
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label="Call Sari Spa"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:bg-charcoal/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2.5 rounded-full bg-whatsapp py-3.5 text-sm font-semibold text-white shadow-[0_12px_26px_-12px_rgba(37,211,102,0.8)] transition-colors hover:bg-whatsapp-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Book on WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
