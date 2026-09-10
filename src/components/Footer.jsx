import { MapPin, Phone } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import { NAV_LINKS, BUSINESS } from '../data/site'
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  waLink,
  GENERAL_BOOKING_MESSAGE,
} from '../lib/whatsapp'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-display text-3xl font-semibold">Sari Spa</p>
            <p className="mt-3 font-display text-lg italic text-lavender">
              {BUSINESS.tagline}
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <p className="eyebrow text-ivory/50">Explore</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/75 transition-colors hover:text-lavender"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="eyebrow text-ivory/50">Visit &amp; Book</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-ivory/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lavender" />
                <span>
                  Atlantis Hotels And Apartments, 9 Bimko Crescent, GRA Phase 3,
                  Port Harcourt, Rivers State
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-lavender" />
                <a href={`tel:${PHONE_TEL}`} className="transition-colors hover:text-lavender">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex gap-3">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-lavender" />
                <a
                  href={waLink(GENERAL_BOOKING_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-lavender"
                >
                  Book on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ivory/15 pt-6 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {BUSINESS.name}. All rights reserved.
          </p>
          <p>{BUSINESS.areaShort}</p>
        </div>
      </div>
    </footer>
  )
}
