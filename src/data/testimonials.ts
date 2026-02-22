export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow Inc.',
    content:
      'Mohammed delivered our platform redesign ahead of schedule. His attention to detail and proactive communication made the entire process seamless.',
  },
  {
    name: 'James Rodriguez',
    role: 'Founder',
    company: 'StartupLab',
    content:
      'Working with Mohammed was a game-changer. He transformed our MVP into a production-ready application that our users love.',
  },
  {
    name: 'Emily Watson',
    role: 'Product Manager',
    company: 'DataSync',
    content:
      'Exceptional problem-solver who consistently finds elegant solutions to complex technical challenges. Highly recommended.',
  },
];
