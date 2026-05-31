import { useEffect, useState } from 'react'

export default function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 600)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-surface">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand border-t-transparent" />
    </div>
  )
}
