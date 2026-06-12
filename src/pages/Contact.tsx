import { type FormEvent, useState } from 'react'
import PageHero from '../components/PageHero'
import { SITE } from '../constants'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)

    if (!accessKey) {
      if (import.meta.env.PROD) {
        setStatus('error')
        return
      }

      const subject = encodeURIComponent(String(formData.get('subject') || 'Portfolio contact'))
      const body = encodeURIComponent(
        `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`,
      )
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
      setStatus('idle')
      return
    }

    try {
      formData.append('access_key', accessKey)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = (await response.json()) as { success?: boolean }
      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero title="Contact Me" />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="Reconquista map"
            src="https://maps.google.com/maps?q=Reconquista,Santa+Fe,Argentina&z=12&output=embed"
            className="h-72 w-full md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-8 text-2xl font-bold">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Enter Message"
                className="w-full rounded-xl border border-white/10 bg-surface-light px-4 py-3 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
              />
              <div className="grid gap-6 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="rounded-xl border border-white/10 bg-surface-light px-4 py-3 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="rounded-xl border border-white/10 bg-surface-light px-4 py-3 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                />
              </div>
              <input
                name="subject"
                required
                placeholder="Enter Subject"
                className="w-full rounded-xl border border-white/10 bg-surface-light px-4 py-3 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="rounded-full bg-brand px-8 py-3 font-medium text-white transition hover:bg-brand-dark disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending…' : 'Send'}
              </button>
              {status === 'success' && (
                <p className="text-sm text-green-400">Message sent! I&apos;ll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400">
                  Something went wrong. Email me at{' '}
                  <a href={`mailto:${SITE.email}`} className="text-brand underline">
                    {SITE.email}
                  </a>
                  .
                </p>
              )}
              {!accessKey && import.meta.env.DEV && (
                <p className="text-xs text-muted">
                  Set <code className="text-brand">VITE_WEB3FORMS_ACCESS_KEY</code> in <code>.env</code> for serverless
                  form delivery.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-8">
            {[
              { title: 'Reconquista, Santa Fe, Argentina', detail: 'CP3560' },
              { title: SITE.phone, detail: 'Mon to Fri 9am to 6pm' },
              { title: SITE.email, detail: 'Send me your query anytime!' },
            ].map((info) => (
              <div key={info.title} className="rounded-xl border border-white/10 bg-surface-light p-6">
                <h3 className="font-semibold">{info.title}</h3>
                <p className="mt-1 text-sm text-muted">{info.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
