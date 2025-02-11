import React, { useState } from 'react';
import { EventCard } from './EventCard';
import RegistrationForm from './RegistrationForm';

export default function EventSection() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleRegisterClick = () => {
    setIsFormVisible(true); // Show the form when the button is clicked
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <EventCard date="March 15, 2024" time="2:00 PM - 5:00 PM" location="Computer Lab 1" onRegisterClick={handleRegisterClick} />
        <EventCard date="April 5, 2024" time="9:00 AM - 4:00 PM" location="Main Auditorium" onRegisterClick={handleRegisterClick} />
        <EventCard date="May 20-22, 2024" time="48 Hours" location="Innovation Hub" onRegisterClick={handleRegisterClick} />
      </div>

      {isFormVisible && <RegistrationForm />} {/* Conditionally render the form */}
    </div>
  );
} 