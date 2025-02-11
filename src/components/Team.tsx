import React from 'react';
import { TeamMember } from './team/TeamMember';
import { executives } from '../data/executives';

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated executive team working to enhance the computing student experience at Kings University College.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executives.map((executive) => (
            <TeamMember key={executive.id} {...executive} />
          ))}
        </div>
      </div>
    </section>
  );
}