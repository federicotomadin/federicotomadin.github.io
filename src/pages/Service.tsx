import PageHero from '../components/PageHero'
import { services } from '../data/services'

export default function Service() {
  return (
    <>
      <PageHero title="Freelance experience" subtitle="Projects as a freelance developer" />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="mb-12 text-2xl font-bold">Projects as a freelance developer</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex gap-6 rounded-2xl border border-white/10 bg-surface-light p-8 transition hover:border-brand/50"
            >
              <img src={service.icon} alt="" className="h-12 w-12 shrink-0" />
              <div>
                {service.href ? (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold hover:text-brand"
                  >
                    {service.title}
                  </a>
                ) : (
                  <h3 className="text-xl font-bold">{service.title}</h3>
                )}
                <p className="mt-3 text-white/70">{service.description}</p>
                {service.href && (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-brand hover:underline"
                  >
                    Click to go to the site →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
