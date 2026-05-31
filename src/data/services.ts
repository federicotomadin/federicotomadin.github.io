export interface Service {
  title: string
  description: string
  href?: string
  icon: string
}

export const services: Service[] = [
  {
    title: 'Aero Star Aviation',
    description:
      'Corporate website for an FAA & AFAC certified MRO specializing in Embraer Phenom, Praetor, and Citation aircraft maintenance across North America.',
    href: 'https://www.aerostaraviation.aero/home',
    icon: 'https://www.google.com/s2/favicons?domain=aerostaraviation.aero&sz=128',
  },
  {
    title: 'E-commerce Site',
    description: 'Mobile and web E-commerce. Project made with mates from university.',
    href: 'https://www.saladaapp.com.ar',
    icon: '/assets/img/icon/saladaapp.ico',
  },
  {
    title: 'Merlin App',
    description: 'App PWA in order to connect consultants and teachers via Google Calendar API.',
    href: 'https://merlin.com.es',
    icon: '/assets/img/icon/merlin.ico',
  },
  {
    title: 'Excel validator',
    description: 'Internal system in .NET 5.0 C# to validate Excel files for entering them to IBM database.',
    icon: '/assets/img/icon/excelvalidator.ico',
  },
]
