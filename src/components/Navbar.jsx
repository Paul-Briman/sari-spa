import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import { NAV_LINKS, BUSINESS } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-charcoal/10 bg-ivory/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="font-display text-2xl font-semibold tracking-tight text-charcoal"
        >
          Sari Spa
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wide text-charcoal/80 transition-colors hover:text-plum"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <WhatsAppButton>Book on WhatsApp</WhatsAppButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-charcoal/5 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-ivory lg:hidden ${
          open ? 'border-b border-charcoal/10' : ''
        }`}
        style={{ maxHeight: open ? '28rem' : 0, transition: 'max-height 0.5s ease' }}
      >
        <ul className="flex flex-col gap-1 px-6 pb-4 pt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-lg text-charcoal/85 transition-colors hover:bg-lavender-soft hover:text-charcoal"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3 px-3">
            <WhatsAppButton size="lg" className="w-full" onClick={() => setOpen(false)}>
              Book on WhatsApp
            </WhatsAppButton>
            <p className="mt-3 text-center text-xs text-mocha">{BUSINESS.areaShort}</p>
          </li>
        </ul>
      </div>
    </header>
  )
}
