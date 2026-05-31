import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import {
  careerTriangle,
  compoundInterest,
  moneyTrident,
  principles,
} from '../data/mindset'

function FrameworkCard({ framework }: { framework: typeof moneyTrident }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface-light p-8">
      <h3 className="text-xl font-bold text-brand">{framework.title}</h3>
      {framework.subtitle && <p className="mt-2 text-sm text-white/60">{framework.subtitle}</p>}
      <ul className="mt-6 space-y-3">
        {framework.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed"
          >
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Mindset() {
  return (
    <>
      <PageHero
        title="Mental Frameworks"
        subtitle="Principles on money, career, and value—lessons I apply in work and life"
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-white/70">
          Ideas that helped me think more clearly about financial and professional decisions. These are
          not investment advice—they are mental models for evaluating opportunities, risk, and growth.
        </p>

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <FrameworkCard framework={moneyTrident} />
          <FrameworkCard framework={careerTriangle} />
        </div>

        <div className="mb-16 rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Featured</p>
          <h3 className="mt-3 text-2xl font-bold md:text-3xl">{compoundInterest.title}</h3>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">{compoundInterest.body}</p>
        </div>

        <h2 className="mb-8 text-2xl font-bold">Principles</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-surface-light p-6 transition hover:border-white/20"
            >
              {p.tag && (
                <span className="mb-3 w-fit rounded-full border border-brand/40 px-3 py-0.5 text-xs font-medium text-brand">
                  {p.tag}
                </span>
              )}
              <h3 className="font-bold leading-snug">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-surface-light p-8 text-center">
          <p className="text-white/70">
            Want to talk about career, technology, or how to deliver more value on your team?
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-full bg-brand px-8 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
