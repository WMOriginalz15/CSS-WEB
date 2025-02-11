import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  onRegister: () => void;
}

export function EventCard({ title, date, time, location, image, onRegister }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="space-y-2 ai-style-change-2" style={{ marginBottom: '16px' }}>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{location}</span>
          </div>
        </div>
        <a
          href="#register"
          className="text-center px-4 py-2 bg-[#0281ab] text-white rounded-lg hover:bg-[#026f9b] transition-colors"
          style={{ marginTop: '32px' }}
          onClick={onRegister}
        >
          Register Now
        </a>
      </div>
    </div>
  );
}