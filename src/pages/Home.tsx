import { useEffect, useState, type CSSProperties } from 'react'
import { mainSkills, skills, testimonials } from '../data/home'
import { SITE } from '../constants'

function SkillBar({ label, value }: { label: string; value: number }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), 200)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-brand transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="order-2 md:order-1">
            <img
              src="/assets/img/hero/fede.png"
              alt="Federico Tomadin"
              className="mx-auto max-h-[420px] w-auto drop-shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {SITE.name}
              <br />
              <span className="text-brand">{SITE.title}</span>
            </h1>
            <p className="mt-4 text-lg text-muted">{SITE.location}</p>
          </div>
        </div>

        <div className="border-y border-white/10 bg-surface-light">
          <div className="mx-auto flex max-w-6xl flex-wrap justify-end gap-8 px-4 py-6 md:gap-16">
            <div className="text-right">
              <p className="text-xs uppercase tracking-wider text-muted">Phone</p>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-brand">
                {SITE.phone}
              </a>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-wider text-muted">Drop your Message</p>
              <a href={`mailto:${SITE.email}`} className="font-medium underline hover:text-brand">
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About + Skills */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">About Me</h2>
            <p className="text-white/70 leading-relaxed">
              With 8+ years experience developing software in different languages and tools my goal is to help build a
              quality product be able to achieve your goals as quickly as possible.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-brand">Main skills</p>
          </div>
          <div className="space-y-6">
            {skills.map((s) => (
              <SkillBar key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {mainSkills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-surface-light p-6 transition hover:border-brand/50 hover:shadow-[0_0_24px_-4px_var(--skill-color)]"
              style={{ '--skill-color': skill.color } as CSSProperties}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 p-2 transition group-hover:scale-110 group-hover:bg-white/10">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-sm font-semibold tracking-wide">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/10 bg-surface-light py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-12 text-3xl font-bold">Client Testimonial</h2>
          <blockquote className="text-lg leading-relaxed text-white/80">
            &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img
              src={testimonials[activeTestimonial].avatar}
              alt={testimonials[activeTestimonial].name}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-semibold">{testimonials[activeTestimonial].name}</p>
              <p className="text-sm text-muted">{testimonials[activeTestimonial].role}</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveTestimonial(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${i === activeTestimonial ? 'bg-brand' : 'bg-white/30'}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
