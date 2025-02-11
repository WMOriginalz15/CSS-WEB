import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { Executive } from '../../types/executive';

export function TeamMember({ name, position, image, email, linkedin }: Executive) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="mb-4" style={{ color: '#0281ab' }}>{position}</p>
        <div className="flex space-x-4">
          <a
            href={`mailto:${email}`}
            className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            aria-label={`Email ${name}`}
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            aria-label={`${name}'s LinkedIn profile`}
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}