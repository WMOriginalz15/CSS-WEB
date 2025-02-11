import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface SocialLink {
  icon: React.ComponentType<any>;
  label: string;
  href: string;
}

export function SocialLinks() {
  const socialLinks: SocialLink[] = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' }
  ];

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
      <div className="flex space-x-4">
        {socialLinks.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}