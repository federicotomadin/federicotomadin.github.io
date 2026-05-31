import { useState } from 'react'
import PageHero from '../components/PageHero'
import { faviconUrl, workExperiences, type WorkExperience } from '../data/work'
import { SOCIAL } from '../constants'

function CompanyLogo({ company, domain }: { company: string; domain: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span className="flex h-8 w-8 items-center justify-center text-sm font-bold text-brand">
        {company.charAt(0)}
      </span>
    )
  }

  return (
    <img
      src={faviconUrl(domain)}
      alt=""
      className="h-8 w-8 object-contain"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

function ExperienceCard({ job }: { job: WorkExperience }) {
  return (
    <a
      href={job.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-white/10 bg-surface-light p-6 transition hover:border-brand/50 hover:bg-white/[0.03]"
    >
      <div className="mb-4 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 p-2">
          <CompanyLogo company={job.company} domain={job.domain} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-bold leading-snug group-hover:text-brand">{job.company}</h3>
          <p className="mt-1 text-sm text-white/70">{job.role}</p>
        </div>
      </div>

      {job.period && (
        <p className="text-xs font-medium uppercase tracking-wider text-muted">{job.period}</p>
      )}
      {job.industry && <p className="mt-2 text-sm text-white/50">{job.industry}</p>}

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-0 transition group-hover:opacity-100">
        Visit website
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </span>
    </a>
  )
}

export default function Work() {
  const linkedIn = SOCIAL.find((s) => s.label === 'LinkedIn')

  return (
    <>
      <PageHero
        title="Experience"
        subtitle="Companies I've worked with — tap a card to visit their website"
      />

      <section className="mx-auto max-w-6xl px-4 py-20">
        {linkedIn && (
          <p className="mb-10 text-center text-white/70">
            Full career history on{' '}
            <a
              href={linkedIn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand hover:underline"
            >
              LinkedIn
            </a>
          </p>
        )}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workExperiences.map((job) => (
            <ExperienceCard key={job.company} job={job} />
          ))}
        </div>
      </section>
    </>
  )
}
