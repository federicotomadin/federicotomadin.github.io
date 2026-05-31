export const SITE = {
  name: 'Federico Tomadin',
  title: 'Full stack developer',
  location: 'Reconquista, Santa Fe — Argentina',
  email: 'federicotomadin@gmail.com',
  phone: '+54 (911) 5476-1605',
  whatsapp:
    'https://api.whatsapp.com/send?text=I would like to talk with you about&phone=1154761605',
  cv: import.meta.env.VITE_CV_URL ?? '/cv/federico-tomadin-cv.pdf',
} as const

export const SOCIAL = [
  { label: 'Twitter', href: 'https://twitter.com/federicotomadin' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/federicotomadin/' },
  { label: 'GitHub', href: 'https://github.com/federicotomadin' },
  { label: 'GitLab', href: 'https://gitlab.com/federicotomadin' },
] as const

export type NavLink = {
  label: string
  path: string
  children?: readonly { label: string; path: string }[]
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/work' },
  { label: 'Mindset', path: '/mindset' },
  { label: 'Books', path: '/books' },
  { label: 'Service', path: '/service' },
  { label: 'Contact', path: '/contact' },
]
