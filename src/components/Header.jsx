import { Leaf } from 'lucide-react'

/**
 * Site header / top navigation.
 * Replace nav items with real routes when the site content is built.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <Leaf className="h-5 w-5 text-emerald-600" aria-hidden="true" />
          <span>Sari Spa</span>
        </a>
        <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
          <a href="#" className="hover:text-slate-900">
            About
          </a>
          <a href="#" className="hover:text-slate-900">
            Services
          </a>
          <a href="#" className="hover:text-slate-900">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
