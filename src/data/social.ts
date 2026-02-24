export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Mohammed-Elmasry', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohammed-hussein-almasry/',
    icon: 'linkedin',
  },
  { label: 'YouTube', href: 'https://www.youtube.com/@CodeBuster1994', icon: 'youtube' },
  { label: 'Email', href: 'mailto:hello@mohammedalmasry.com', icon: 'mail' },
];
