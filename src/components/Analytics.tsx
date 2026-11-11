import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CLARITY_PROJECT_ID, GOATCOUNTER_URL } from '../constants'

type GoatCounter = {
  no_onload?: boolean
  count?: (vars: { path: string }) => void
}

type Clarity = ((...args: unknown[]) => void) & { q?: unknown[][] }

declare global {
  interface Window {
    goatcounter?: GoatCounter
    clarity?: Clarity
  }
}

const SCRIPT_ID = 'goatcounter-script'
const CLARITY_SCRIPT_ID = 'clarity-script'

function currentPath() {
  return window.location.pathname + window.location.search
}

export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    if (!GOATCOUNTER_URL || document.getElementById(SCRIPT_ID)) return

    // Page views are sent manually on route changes, since this is an SPA.
    window.goatcounter = { no_onload: true }
    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.async = true
    script.src = 'https://gc.zgo.at/count.js'
    script.dataset.goatcounter = `${GOATCOUNTER_URL}/count`
    script.onload = () => window.goatcounter?.count?.({ path: currentPath() })
    document.body.appendChild(script)
  }, [])

  useEffect(() => {
    if (!CLARITY_PROJECT_ID || document.getElementById(CLARITY_SCRIPT_ID)) return

    // Queue calls made before the Clarity script finishes loading.
    const clarity: Clarity = (...args) => {
      clarity.q = clarity.q ?? []
      clarity.q.push(args)
    }
    window.clarity = window.clarity ?? clarity
    const script = document.createElement('script')
    script.id = CLARITY_SCRIPT_ID
    script.async = true
    script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`
    document.head.appendChild(script)
  }, [])

  useEffect(() => {
    window.goatcounter?.count?.({ path: location.pathname + location.search })
  }, [location.pathname, location.search])

  return null
}
