interface PageHeroProps {
  title: string
  subtitle?: string
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="border-b border-white/10 bg-surface-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-bold capitalize tracking-tight md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 text-lg text-muted">{subtitle}</p>}
      </div>
    </section>
  )
}
