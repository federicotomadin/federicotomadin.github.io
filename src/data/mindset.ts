export interface MindsetPrinciple {
  title: string
  body: string
  tag?: string
}

export interface MindsetFramework {
  title: string
  subtitle?: string
  items: string[]
}

export const moneyTrident: MindsetFramework = {
  title: 'The Money Trident',
  subtitle: 'In any financial opportunity, you can only pick two. The third is always missing.',
  items: [
    'Fast and easy → not safe',
    'Fast and safe → not easy',
    'Easy and safe → not fast',
  ],
}

export const careerTriangle: MindsetFramework = {
  title: 'Professional Value Triangle',
  subtitle: 'Align your career around these three pillars.',
  items: [
    'High demand',
    'Hard to replace',
    'Ability to be the best (continuous improvement)',
  ],
}

export const principles: MindsetPrinciple[] = [
  {
    tag: 'Investment',
    title: 'The best investment is yourself',
    body: 'The best investment you can make is in yourself. The more you learn, the more value you can deliver. Time is linear and finite—you only have 24 hours—but knowledge multiplies what you do with that time.',
  },
  {
    tag: 'Career',
    title: 'Location matters',
    body: 'Put your work where it pays best. It is not just about working harder, but aligning your talent with markets that value it.',
  },
  {
    tag: 'Integrity',
    title: 'Faithful in little, faithful in much',
    body: 'If you are faithful in small things, you will be faithful in large ones. Be honest with yourself in small decisions—that is where character is built for the big ones.',
  },
  {
    tag: 'Value',
    title: 'Paid for value, not hours',
    body: 'You are not paid for what you do—you are paid for the value you deliver. What matters is not how long you work, but the impact you create.',
  },
  {
    tag: 'Planning',
    title: 'Your plan or someone else’s',
    body: 'Everyone has a plan to take your money. If you do not have a plan to keep it and grow it, you are part of someone else’s plan.',
  },
  {
    tag: 'Intellectual humility',
    title: 'What you think you know',
    body: 'It is not what you do not know that gets you into trouble—it is what you think you know.',
  },
  {
    tag: 'Knowledge',
    title: 'The asset no one can take',
    body: 'Knowledge is the only asset no one can take away from you.',
  },
  {
    tag: 'Risk',
    title: 'Conscious risk management',
    body: 'Risk management is not taking no risk at all—it is knowing which risk you are taking.',
  },
  {
    tag: 'Self-awareness',
    title: 'Fate or the unconscious',
    body: 'Until you make the unconscious conscious, it will direct your life and you will call it fate.',
  },
  {
    tag: 'Systems',
    title: 'The weakest link',
    body: 'A chain is only as strong as its weakest link.',
  },
]

export const compoundInterest = {
  title: 'Compound interest',
  body: 'Those who understand compound interest earn it; those who do not, pay it.',
}
