import WhatsAppIcon from './WhatsAppIcon'
import { waLink, GENERAL_BOOKING_MESSAGE } from '../lib/whatsapp'

/**
 * Primary conversion element — an anchor that opens WhatsApp with a
 * pre-filled message.
 *
 * @param {object} props
 * @param {string} [props.message] pre-filled text (defaults to general booking)
 * @param {'plum'|'green'|'outline'|'light'} [props.variant='plum']
 * @param {'md'|'lg'} [props.size='md']
 * @param {boolean} [props.showIcon=true]
 * @param {string} [props.children] label
 */
export default function WhatsAppButton({
  message = GENERAL_BOOKING_MESSAGE,
  variant = 'plum',
  size = 'md',
  showIcon = true,
  className = '',
  children = 'Book on WhatsApp',
  ...rest
}) {
  const base =
    'group inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

  const sizes = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-[0.95rem]',
  }

  const variants = {
    plum: 'bg-plum text-ivory hover:bg-plum-dark hover:-translate-y-0.5 shadow-soft focus-visible:ring-plum',
    green:
      'bg-whatsapp text-white shadow-[0_14px_30px_-12px_rgba(37,211,102,0.7)] hover:bg-whatsapp-dark hover:-translate-y-0.5 focus-visible:ring-whatsapp',
    outline:
      'border border-charcoal/25 bg-transparent text-charcoal hover:border-charcoal/60 hover:bg-charcoal/[0.04] focus-visible:ring-charcoal',
    light:
      'border border-ivory/40 bg-ivory/10 text-ivory backdrop-blur-sm hover:bg-ivory/20 hover:border-ivory focus-visible:ring-ivory',
  }

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {showIcon && (
        <WhatsAppIcon className="h-[1.15em] w-[1.15em] shrink-0 transition-transform duration-300 group-hover:scale-110" />
      )}
      <span>{children}</span>
    </a>
  )
}
