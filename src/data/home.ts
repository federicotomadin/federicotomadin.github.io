export interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'I had the opportunity to work with Fede on a project to expand a web portal for commercial customers of a large financial services company. Fede was a very good team member who actively participated in team ceremonies by asking good questions and giving his feedback and insights. He provided substantive contributions to our development work each sprint. Fede always brought a good attitude and was a pleasure to work with. I would welcome the chance to work with him again.',
    name: 'Mike Kane',
    role: 'Product Owner, Strategist, & Analyst Lead at DMI',
    avatar: '/assets/img/icon/mike_kane.png',
  },
  {
    quote:
      'Fede es un gran desarrollador. Trabajamos juntos en Sidesys IT Solutions donde ha demostrado que posee una gran capacidad técnica y resolutiva, sumado siempre a su interés por la investigación y constante capacitación para poder crecer y perfeccionarse. Sin dudas un excelente compañero y profesional!',
    name: 'Matias Bel',
    role: 'Analista Funcional - Scrum Master en SIDESYS IT SOLUTIONS',
    avatar: '/assets/img/icon/matias_bel.png',
  },
  {
    quote:
      'A very prolific software developer, always keen on researching for the best way to solve things and always writing clean and well-structured code. A great team-mate.',
    name: 'Dario Olinuck',
    role: '.NET Angular Full Stack Developer',
    avatar: '/assets/img/icon/dario_olinuck.png',
  },
  {
    quote:
      'Cursé algunas materias con Fede en la carrera, por lo que me tocó trabajar y estudiar juntos en varios cuatrimestres. Es un excelente compañero ya que es una persona sumamente responsable y comprometida.',
    name: 'Jonathan Aguilera',
    role: 'Software Engineer en Mercado Libre',
    avatar: '/assets/img/icon/jonathan_aguilera.png',
  },
  {
    quote:
      'Federico es una persona muy comprometida con los objetivos a cumplir. Cuenta con gran poder de planificación, además de tener gran capacidad técnica. Sin dudas me gustaría contar con él para cualquier proyecto!',
    name: 'Sebastian Gallay',
    role: 'Technical Leader | Software engineer',
    avatar: '/assets/img/icon/sebastian_gallay.png',
  },
]

export const skills = [
  { label: '.NET', value: 90 },
  { label: 'React', value: 85 },
  { label: 'Node', value: 80 },
  { label: 'Angular', value: 75 },
  { label: 'SQL', value: 85 },
]

export interface MainSkill {
  name: string
  icon: string
  color: string
}

export const mainSkills: MainSkill[] = [
  { name: '.NET', icon: '/assets/img/gallery/net_button.png', color: '#512BD4' },
  { name: 'React', icon: '/assets/img/gallery/react_buttom.png', color: '#61DAFB' },
  { name: 'Node', icon: '/assets/img/icon/node.svg', color: '#339933' },
  { name: 'Angular', icon: '/assets/img/gallery/angular_button.png', color: '#DD0031' },
  { name: 'SQL', icon: '/assets/img/icon/sql.svg', color: '#CC2927' },
]
