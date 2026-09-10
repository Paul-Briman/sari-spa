import { HandHeart, Sparkles } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import { waLink } from '../lib/whatsapp'

const ICONS = { HandHeart, Sparkles }

/**
 * A treatment category: icon, title, description and a service-specific
 * WhatsApp booking CTA.
 */
export default function ServiceCard({ service }) {
  const Icon = ICONS[service.icon] ?? Sparkles

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-charcoal/10 bg-ivory p-8 transition-all duration-500 hover:-translate-y-1 hover:border-plum/30 hover:shadow-lift">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lavender-soft text-plum transition-colors duration-500 group-hover:bg-plum group-hover:text-ivory">
        <Icon className="h-6 w-6" strokeWidth={1.6} />
      </span>

      <h3 className="mt-6 text-2xl text-charcoal">{service.name}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-mocha">{service.description}</p>

      <a
        href={waLink(service.message)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-charcoal/15 px-5 py-2.5 text-sm font-medium text-charcoal transition-all duration-300 hover:border-plum hover:bg-plum hover:text-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-plum focus-visible:ring-offset-2"
        aria-label={`Book ${service.name} on WhatsApp`}
      >
        <WhatsAppIcon className="h-4 w-4" />
        Book on WhatsApp
      </a>
    </article>
  )
}
