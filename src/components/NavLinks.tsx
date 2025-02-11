import React from 'react';

interface NavLinksProps {
  className?: string;
  itemClassName?: string;
  onClick?: () => void;
}

export function NavLinks({ className = '', itemClassName = '', onClick }: NavLinksProps) {
  const links = ['Home', 'About', 'Events', 'Contact'];
  
  return (
    <nav className={className}>
      {links.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className={`text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors ${itemClassName}`}
          onClick={onClick}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}