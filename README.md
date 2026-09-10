# Sari Spa

Marketing website for **Sari Spa** — a calm, premium spa and wellness space in
GRA Phase 3, Port Harcourt (inside Atlantis Hotels & Apartments). It's a
modern, mobile-first single-page React site built to convert visitors into
bookings, with every call-to-action routing to WhatsApp.

**Highlights**

- Conversion-focused: a persistent "Book on WhatsApp" CTA, per-service WhatsApp
  buttons with pre-filled messages, a floating button and a mobile sticky bar,
  all using `https://wa.me/2347072795537`.
- Restrained, editorial design — warm ivory/charcoal palette with sophisticated
  purple accents that complement the real photography, Fraunces + Inter type,
  and subtle scroll reveals that respect `prefers-reduced-motion`.
- Uses the business's own photography (`src/assets/`) — no stock imagery.
- Honest content only: real guest reviews and confirmed offerings; no invented
  prices, hours, staff, awards or services.
- Fully responsive, accessible (semantic HTML, keyboard focus states), and
  SEO-ready (title, meta description, Open Graph).
- Content lives in [`src/data/site.js`](src/data/site.js) and the WhatsApp
  number/messages in [`src/lib/whatsapp.js`](src/lib/whatsapp.js) for easy editing.

## Tech stack

- **[React 19](https://react.dev/)** — UI library
- **[Vite 7](https://vite.dev/)** — build tool and dev server
- **JavaScript (JSX)** — no TypeScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling via the official Vite plugin
- **[Lucide React](https://lucide.dev/)** — lightweight icon set
- **ESLint** — linting

Deployed on **[Vercel](https://vercel.com/)** (zero-config: Vite is detected automatically).

## Project structure

```
sari-spa/
├── public/              # Static assets served as-is (favicon, OG image)
├── src/
│   ├── assets/          # Real Sari Spa photography (imported by data/site.js)
│   ├── components/      # Reusable UI (Navbar, ServiceCard, WhatsAppButton…)
│   ├── sections/        # Page sections (Hero, Treatments, Testimonials…)
│   ├── data/site.js     # All site content: services, reviews, imagery, contact
│   ├── lib/whatsapp.js  # WhatsApp number + deep-link / message helpers
│   ├── App.jsx          # Root component / page layout
│   ├── main.jsx         # App entry point
│   └── index.css        # Tailwind theme tokens + global base styles
├── index.html           # HTML entry point
├── vite.config.js       # Vite + React + Tailwind config
└── eslint.config.js     # ESLint config
```

## Getting started

Requires **Node.js 20.19+ or 22.12+**.

### Installation

```bash
npm install
```

### Development

Start the dev server with hot-module reloading:

```bash
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

### Production build

Create an optimized build in `dist/`:

```bash
npm run build
```

### Production preview

Serve the built `dist/` locally to verify the production output:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Environment variables

Copy `.env.example` to `.env` (gitignored) and add any variables. Only names
prefixed with `VITE_` are exposed to the client bundle. **Never commit real
secrets** — no API keys, passwords, or credentials belong in this repository.
