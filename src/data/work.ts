export interface WorkExperience {
  company: string
  role: string
  period?: string
  href: string
  /** Used for favicon: e.g. "terra.insure" */
  domain: string
  industry?: string
}

/** Professional experience — aligned with LinkedIn profile */
export const workExperiences: WorkExperience[] = [
  {
    company: 'Terra Insure',
    role: 'Full-stack Developer',
    industry: 'Insurance · Workers\' Comp',
    href: 'https://terra.insure/',
    domain: 'terra.insure',
  },
  {
    company: 'Defy Medical',
    role: 'Full-stack Developer',
    industry: 'Healthcare · Telemedicine',
    href: 'https://www.defymedical.com/',
    domain: 'defymedical.com',
  },
  {
    company: 'RISC Pro',
    role: 'Full-stack Developer',
    period: 'Nov 2023 – Nov 2025',
    industry: 'Compliance · FinTech',
    href: 'https://riscpro.com/',
    domain: 'riscpro.com',
  },
  {
    company: 'TheoremOne',
    role: 'Full-stack Developer',
    period: 'Nov 2022 – Oct 2023',
    industry: 'Consulting · Software',
    href: 'https://www.theoremone.co/',
    domain: 'theoremone.co',
  },
  {
    company: 'SimpliSafe',
    role: 'Full-stack Developer',
    period: 'Via TheoremOne',
    industry: 'Home Security · IoT',
    href: 'https://simplisafe.com/',
    domain: 'simplisafe.com',
  },
  {
    company: 'Liberty Mutual',
    role: 'Full Stack Developer',
    period: 'Via DMI',
    industry: 'Insurance',
    href: 'https://www.libertymutual.com/',
    domain: 'libertymutual.com',
  },
  {
    company: 'Tangol Tours',
    role: 'Full-stack Developer',
    period: 'Mar 2019 – Mar 2021',
    industry: 'Travel & Tourism',
    href: 'https://www.tangol.com/esp/',
    domain: 'tangol.com',
  },
  {
    company: 'SIDESYS IT Solutions',
    role: 'Backend Developer & Solution Architect',
    period: 'Mar 2021 – Mar 2022',
    industry: 'IT Consulting',
    href: 'https://sidesys.com/',
    domain: 'sidesys.com',
  },
  {
    company: 'DMI',
    role: 'Full Stack Developer',
    period: 'Mar 2022 – Nov 2022',
    industry: 'Digital Transformation',
    href: 'https://dminc.com/',
    domain: 'dminc.com',
  },
  {
    company: 'Plataforma 10',
    role: 'Backend Developer',
    period: 'Feb 2017 – Feb 2019',
    industry: 'E-commerce · Travel',
    href: 'https://www.plataforma10.com.ar/',
    domain: 'plataforma10.com.ar',
  },
]

export function faviconUrl(domain: string): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
}
