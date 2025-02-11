import React from 'react';
import { Heart, Target, Trophy } from 'lucide-react';
import { ValueCard } from './ValueCard';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Our Mission',
      description: 'To foster a vibrant community of computing students and empower them with practical skills for the tech industry.'
    },
    {
      icon: Target,
      title: 'Our Vision',
      description: 'To be the leading student society that bridges academic knowledge with industry practices in computing.'
    },
    {
      icon: Trophy,
      title: 'Our Values',
      description: 'Innovation, collaboration, continuous learning, and excellence in everything we do.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About CSS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Computing Students Society at Kings University College is dedicated to enhancing the academic and professional development of computing students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value) => (
            <ValueCard key={value.title} icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>
      </div>
    </section>
  );
}