import React from 'react';
import { SocialLinks } from './footer/SocialLinks';
import { QuickLinks } from './footer/QuickLinks';
import { ContactInfo } from './footer/ContactInfo';
import { Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold">CSS KUC</h3>
            </div>
            <p className="text-gray-400">
              Computing Students Society at Kings University College, dedicated to fostering excellence in technology education.
            </p>
          </div>
          <QuickLinks />
          <ContactInfo />
          <SocialLinks />
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Computing Students Society - Kings University College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}