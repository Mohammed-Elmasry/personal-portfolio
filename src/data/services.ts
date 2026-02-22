export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'Modern, responsive web applications built with React, Next.js, Astro, and other cutting-edge technologies.',
    icon: 'globe',
  },
  {
    title: 'API Development',
    description:
      'Robust REST and GraphQL APIs designed for performance, security, and scalability.',
    icon: 'code',
  },
  {
    title: 'Mobile Development',
    description:
      'Cross-platform mobile apps using React Native and Flutter that feel native on every device.',
    icon: 'smartphone',
  },
  {
    title: 'DevOps & Cloud',
    description:
      'CI/CD pipelines, containerization, and cloud infrastructure on AWS, GCP, or Azure.',
    icon: 'cloud',
  },
  {
    title: 'Technical Consulting',
    description:
      'Architecture reviews, technology selection, and strategic guidance for your technical challenges.',
    icon: 'lightbulb',
  },
  {
    title: 'Performance Optimization',
    description:
      'Speed audits, Core Web Vitals improvements, and database query optimization.',
    icon: 'zap',
  },
];
