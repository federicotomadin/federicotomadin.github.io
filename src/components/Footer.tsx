import { Link } from 'react-router-dom'
import { NAV_LINKS, SITE, SOCIAL } from '../constants'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-light">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <p className="text-white/70">
              If you want to know more from me, you can visit those sites related to my professional career.
            </p>
            <div className="mt-6 flex gap-4">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/70 transition hover:border-brand hover:text-brand"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark"
            >
              Let&apos;s Talk
            </a>
            <a
              href={SITE.cv}
              target="_blank"
              rel="noopener noreferrer"
              download={SITE.cv.startsWith('/') ? 'federico-tomadin-cv.pdf' : undefined}
              className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-medium text-white transition hover:border-brand hover:text-brand"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} All rights reserved by{' '}
            <a
              href="https://www.linkedin.com/in/federicotomadin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              {SITE.name}
            </a>
          </p>
          <nav className="flex flex-wrap gap-6">
            {NAV_LINKS.filter((l) => !l.children).map((link) => (
              <Link key={link.path} to={link.path} className="text-sm capitalize text-white/50 hover:text-brand">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
