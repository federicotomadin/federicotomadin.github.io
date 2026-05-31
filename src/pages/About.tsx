import PageHero from '../components/PageHero'
import { SITE } from '../constants'

export default function About() {
  return (
    <>
      <PageHero title="About" subtitle="Full stack developer based in Reconquista, Santa Fe" />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">About Me</h2>
            <p className="mb-4 text-white/70 leading-relaxed">
              With 8+ years experience developing software in different languages and tools my goal is to help build a
              quality product be able to achieve your goals as quickly as possible.
            </p>
            <p className="text-white/70 leading-relaxed">
              I specialize in full stack development with a strong focus on backend systems, cloud infrastructure, and
              modern frontend frameworks. Based in {SITE.location}, I work with teams worldwide.
            </p>
          </div>
          <div>
            <img
              src="/assets/img/gallery/about1.png"
              alt="About Federico Tomadin"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {[
            { value: '8+ years', label: 'of experience' },
            { value: 'Multiple', label: 'industry awards' },
            { value: 'Global', label: 'remote collaboration' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-surface-light p-8 text-center">
              <p className="text-3xl font-bold text-brand">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
