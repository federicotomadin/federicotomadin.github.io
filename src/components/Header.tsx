import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../constants'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-bold text-white">
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-sm font-medium capitalize transition-colors hover:text-brand ${isActive ? 'text-brand' : 'text-white/80'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-brand px-5 py-2 text-sm font-medium text-brand transition hover:bg-brand hover:text-white lg:inline-block"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 bg-surface-light px-4 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-sm font-medium capitalize ${isActive ? 'text-brand' : 'text-white/80'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-full border border-brand px-5 py-2 text-center text-sm font-medium text-brand"
          >
            Let&apos;s Talk
          </a>
        </nav>
      )}
    </header>
  )
}
