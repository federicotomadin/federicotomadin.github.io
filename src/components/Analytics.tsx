import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { GOATCOUNTER_URL } from '../constants'

type GoatCounter = {
  no_onload?: boolean
  count?: (vars: { path: string }) => void
}

declare global {
  interface Window {
    goatcounter?: GoatCounter
  }
}

const SCRIPT_ID = 'goatcounter-script'

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
    window.goatcounter?.count?.({ path: location.pathname + location.search })
  }, [location.pathname, location.search])

  return null
}
