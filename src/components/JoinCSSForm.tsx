import React from 'react';
import { X } from 'lucide-react';

interface JoinCSSFormProps {
  onClose: () => void;
}

export default function JoinCSSForm({ onClose }: JoinCSSFormProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Register for Web Development Workshop</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-[#0281ab]">
          <X className="w-6 h-6" />
        </button>
      </div>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0281ab] focus:border-transparent"
              placeholder="First Name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0281ab] focus:border-transparent"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0281ab] focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0281ab] focus:border-transparent"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">
            Student ID
          </label>
          <input
            type="text"
            id="studentId"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0281ab] focus:border-transparent"
            placeholder="Student ID"
          />
        </div>
        <div>
          <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
            Course/Program
          </label>
          <select
            id="program"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0281ab] focus:border-transparent"
          >
            <option>Select your program</option>
            <option>Web Development</option>
            <option>Software Engineering</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-[#0281ab] text-white rounded-lg hover:bg-[#026f9b] transition-colors"
        >
          Register for Event
        </button>
      </form>
    </div>
  );
} 