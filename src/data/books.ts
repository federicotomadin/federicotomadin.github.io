export interface Book {
  title: string
  author: string
  description: string
  purchaseUrl: string
  purchaseLabel?: string
  language?: 'English' | 'Spanish'
  coverUrl: string
}

export const recommendedBooks: Book[] = [
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    description:
      'A handbook of agile software craftsmanship—how to write readable, maintainable code and refactor with confidence.',
    purchaseUrl: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
    purchaseLabel: 'Buy on Amazon',
    language: 'English',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/0132350882-L.jpg',
  },
  {
    title: 'Domain-Driven Design',
    author: 'Eric Evans',
    description:
      'Tackling complexity in the heart of software—strategic design, bounded contexts, and a shared language between domain experts and developers.',
    purchaseUrl: 'https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215',
    purchaseLabel: 'Buy on Amazon',
    language: 'English',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/0321125215-L.jpg',
  },
  {
    title: 'Clean Architecture',
    author: 'Robert C. Martin',
    description:
      "A craftsman's guide to software structure and design—independence of frameworks, testability, and rules for a sustainable architecture.",
    purchaseUrl: 'https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164',
    purchaseLabel: 'Buy on Amazon',
    language: 'English',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/0134494164-L.jpg',
  },
  {
    title: 'Software Architecture: The Hard Parts',
    author: 'Neal Ford, Mark Richards, Pramod Sadalage, Zhamak Dehghani',
    description:
      'Modern trade-off analyses for distributed architectures—service granularity, workflows, contracts, transactions, and the compromises that have no single best answer.',
    purchaseUrl: 'https://www.amazon.com/Software-Architecture-Modern-Tradeoff-Analysis/dp/1492086894',
    purchaseLabel: 'Buy on Amazon',
    language: 'English',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/1492086894-L.jpg',
  },
  {
    title: 'Head First Design Patterns',
    author: 'Eric Freeman, Elisabeth Robson',
    description:
      'A visual, brain-friendly guide to design patterns—build extensible, maintainable object-oriented software without drowning in abstract theory.',
    purchaseUrl: 'https://www.amazon.com/Head-First-Design-Patterns-Object-Oriented/dp/149207800X',
    purchaseLabel: 'Buy on Amazon (2nd ed.)',
    language: 'English',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/149207800X-L.jpg',
  },
  {
    title: "System Design Interview – An Insider's Guide: Volume 2",
    author: 'Alex Xu, Sahn Lam',
    description:
      'A step-by-step framework and 13 real interview questions—from proximity services and message queues to payment systems and stock exchanges.',
    purchaseUrl: 'https://www.amazon.com/System-Design-Interview-Insiders-Guide/dp/1736049119',
    purchaseLabel: 'Buy on Amazon',
    language: 'English',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/1736049119-L.jpg',
  },
  {
    title: 'Code: The Hidden Language of Computer Hardware and Software',
    author: 'Charles Petzold',
    description:
      'How computers really work—from switches and logic gates to microprocessors—explained without assuming prior technical knowledge.',
    purchaseUrl: 'https://www.amazon.com/Code-Hidden-Language-Computer-Hardware/dp/0137909101',
    purchaseLabel: 'Buy on Amazon',
    language: 'English',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/0137909101-L.jpg',
  },
  {
    title: 'Construyendo Sistemas Distribuidos',
    author: 'Iván Abad Andreu',
    description:
      'Design, scale, and evolve distributed systems—patterns, trade-offs, and real-world decisions beyond hype and unnecessary complexity.',
    purchaseUrl: 'https://www.netmentor.es/libros/construyendo-sistemas-distribuidos',
    purchaseLabel: 'Buy digital edition',
    language: 'Spanish',
    coverUrl: '/assets/img/books/construyendo-sistemas-distribuidos.jpg',
  },
  {
    title: 'Guía Completa de Desarrollo Full Stack con .NET',
    author: 'Iván Abad Andreu',
    description:
      'A deep dive into the .NET and C# ecosystem—from fundamentals to EF Core, DI, async programming, Docker, and REST APIs.',
    purchaseUrl: 'https://www.netmentor.es/libros/guia-completa-desarrollo-full-stack',
    purchaseLabel: 'Buy digital edition',
    language: 'Spanish',
    coverUrl: '/assets/img/books/guia-completa-full-stack-dotnet.jpg',
  },
]
