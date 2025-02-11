import React, { useState } from 'react';
import { EventCard } from './EventCard';

export default function Events() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const handleRegisterClick = (event: any) => {
    setSelectedEvent(event);
    setShowRegistration(true);
  };

  const events = [
    {
      title: 'Web Development Workshop',
      date: 'March 15, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Computer Lab 1',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Tech Career Fair',
      date: 'April 5, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Main Auditorium',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Hackathon 2024',
      date: 'May 20-22, 2024',
      time: '48 Hours',
      location: 'Innovation Hub',
      image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="events" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for exciting events that will enhance your skills and expand your network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard 
              key={event.title} 
              {...event} 
              onRegister={() => handleRegisterClick(event)}
            />
          ))}
        </div>

        {/* Registration Modal */}
        {showRegistration && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
              {/* Close button */}
              <button 
                onClick={() => setShowRegistration(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-2xl font-bold mb-6">Register for {selectedEvent?.title}</h3>
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-600 mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-600 mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-600 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="studentId" className="block text-gray-600 mb-2">Student ID</label>
                  <input
                    type="text"
                    id="studentId"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="program" className="block text-gray-600 mb-2">Course/Program</label>
                  <select
                    id="program"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                    required
                  >
                    <option value="">Select your program</option>
                    <option value="cs">Computer Science</option>
                    <option value="it">Information Technology</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 mt-4"
                >
                  Register for Event
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}