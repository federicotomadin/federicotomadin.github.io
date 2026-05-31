import PageHero from '../components/PageHero'
import { recommendedBooks } from '../data/books'

export default function Books() {
  return (
    <>
      <PageHero
        title="Recommended Books"
        subtitle="Titles that shaped how I think about code, architecture, and building systems"
      />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-white/70">
          A curated list of books I recommend for developers who want to go deeper—clean code,
          domain modeling, architecture, distributed systems, and full stack with .NET.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {recommendedBooks.map((book) => (
            <article
              key={book.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-surface-light p-8 transition hover:border-brand/40"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold leading-snug">{book.title}</h3>
                  <p className="mt-1 text-sm text-brand">{book.author}</p>
                </div>
                {book.language && (
                  <span className="shrink-0 rounded-full border border-white/15 px-3 py-0.5 text-xs text-muted">
                    {book.language}
                  </span>
                )}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-white/70">{book.description}</p>
              <a
                href={book.purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline"
              >
                {book.purchaseLabel ?? 'Get the book'}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
