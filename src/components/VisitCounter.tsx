import { useEffect, useState } from 'react'
import { GOATCOUNTER_URL } from '../constants'

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

  if (!count) return null

  return (
    <p className="text-sm text-white/50">
      <span className="font-medium text-white/70">{count}</span> {count === '1' ? 'visit' : 'visits'}
    </p>
  )
}
