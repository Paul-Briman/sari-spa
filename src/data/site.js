// -------------------------------------------------------------------
// Single source of truth for Sari Spa content.
// Only facts actually provided about the business are used here — no
// invented prices, hours, staff, awards or services.
// -------------------------------------------------------------------
import { serviceBookingMessage } from '../lib/whatsapp'

// Real Sari Spa photography (portrait phone photos).
import treatmentRoom from '../assets/sari spa 3.png' // clean treatment room interior
import inTreatment from '../assets/sari spa 1.png' // guest receiving a treatment
import premises from '../assets/sari spa 2.png' // building exterior / premises

export const IMAGES = {
  treatmentRoom,
  inTreatment,
  premises,
}

export const BUSINESS = {
  name: 'Sari Spa',
  tagline: 'Your space to unwind.',
  city: 'Port Harcourt',
  areaShort: 'GRA Phase 3, Port Harcourt',
  addressLines: [
    'Atlantis Hotels And Apartments',
    '9 Bimko Crescent',
    'GRA Phase 3',
    'Port Harcourt 500272',
    'Rivers State, Nigeria',
  ],
  addressInline:
    'Atlantis Hotels And Apartments, 9 Bimko Crescent, GRA Phase 3, Port Harcourt, Rivers State',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      'Atlantis Hotels And Apartments, 9 Bimko Crescent, GRA Phase 3, Port Harcourt, Rivers State, Nigeria',
    ),
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Experience', href: '#experience' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

// Only confirmed offerings — presented as broad categories, not a fabricated menu.
export const SERVICES = [
  {
    id: 'massage',
    name: 'Massage',
    icon: 'HandHeart',
    description:
      'Relax, release tension and leave feeling lighter. A calming massage to help your body and mind slow down.',
    booking: 'massage',
  },
  {
    id: 'spa-wellness',
    name: 'Spa & Wellness',
    icon: 'Sparkles',
    description:
      'Take time to unwind in a calm, comfortable environment — a quiet pause from the pace of everyday life.',
    booking: 'spa & wellness session',
  },
]

export const SERVICES_WITH_MESSAGES = SERVICES.map((s) => ({
  ...s,
  message: serviceBookingMessage(s.booking),
}))

// Why Sari Spa — grounded strictly in the real reviews and setting.
export const WHY_POINTS = [
  {
    icon: 'Wind',
    title: 'Peaceful atmosphere',
    body: 'A calm environment designed to help you slow down and truly relax.',
  },
  {
    icon: 'Heart',
    title: 'Professional care',
    body: 'Guests highlight the warm, attentive and professional service.',
  },
  {
    icon: 'Sparkles',
    title: 'Clean & comfortable',
    body: 'A spotless, comfortable setting that guests notice from the moment they arrive.',
  },
  {
    icon: 'Moon',
    title: 'A space to reset',
    body: 'Step away from everyday stress and leave feeling refreshed.',
  },
]

// Real guest reviews. Truncated ones are kept exactly as provided — the missing
// endings are NOT invented. No names are fabricated.
export const REVIEWS = [
  {
    quote:
      'I had a wonderful experience at Sari Spa. The atmosphere was peaceful, clean, and relaxing from the moment I arrived. The staff were warm, professional, and attentive, making me feel completely comfortable. The treatment was refreshing and …',
    name: 'Verified Guest',
  },
  {
    quote:
      'Sari Spa was exactly what I needed. The massage was so relaxing and the staff made me feel well taken care of. I left feeling light, calm, and happy. Thank you for the peace 💆‍♀️ I recommend Sari Spa and would definitely be coming back …',
    name: 'Telbisum Aggrey',
  },
  {
    quote:
      'Excellent Services, Comfortable Environment, and a safe Haven for all your body’s stress relief needs.',
    name: 'Alfred Olotu',
  },
]
