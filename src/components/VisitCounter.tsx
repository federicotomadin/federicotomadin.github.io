import { useEffect, useState } from 'react'
import { CLARITY_PROJECT_ID, GOATCOUNTER_URL } from '../constants'

const ANALYTICS_URL = CLARITY_PROJECT_ID
  ? `https://clarity.microsoft.com/projects/view/${CLARITY_PROJECT_ID}/`
  : GOATCOUNTER_URL

export default function VisitCounter() {
  const [count, setCount] = useState<string | null>(null)

  useEffect(() => {
    if (!GOATCOUNTER_URL) return
    const controller = new AbortController()

    fetch(`${GOATCOUNTER_URL}/counter/TOTAL.json`, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { count?: string } | null) => {
        if (data?.count) setCount(data.count)
      })
      .catch(() => {})

    return () => controller.abort()
  }, [])

  if (!count || !ANALYTICS_URL) return null

  return (
    <a
      href={ANALYTICS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-white/50 transition hover:text-brand"
      title="View analytics"
    >
      <span className="font-medium text-white/70">{count}</span> {count === '1' ? 'visit' : 'visits'}
    </a>
  )
}
