export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/yourusername', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin',
  },
  { label: 'Twitter', href: 'https://twitter.com/yourusername', icon: 'twitter' },
  { label: 'Email', href: 'mailto:hello@mohammedalmasry.com', icon: 'mail' },
];
