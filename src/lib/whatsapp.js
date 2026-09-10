// Central WhatsApp helper so every CTA builds a correct, working wa.me deep
// link with Sari Spa's international Nigerian number.

// 0707 279 5537 -> international format (drop leading 0, prefix 234)
export const WHATSAPP_NUMBER = '2347072795537'
export const PHONE_DISPLAY = '0707 279 5537'
export const PHONE_TEL = '+2347072795537'

/**
 * Build a wa.me deep link, optionally with a pre-filled message.
 * @param {string} [message] plain-text message; URL-encoded here.
 * @returns {string}
 */
export function waLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** Generic "book a treatment" message. */
export const GENERAL_BOOKING_MESSAGE =
  "Hi Sari Spa, I'd like to book a spa treatment. Please can you share your available appointments?"

/** Massage-specific booking message. */
export const MASSAGE_BOOKING_MESSAGE =
  "Hi Sari Spa, I'm interested in booking a massage. Please can you share your available appointments?"

/**
 * Service-specific booking message.
 * @param {string} service e.g. "spa & wellness session"
 */
export function serviceBookingMessage(service) {
  return `Hi Sari Spa, I'm interested in booking a ${service}. Please can you share your available appointments?`
}
