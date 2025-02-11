import React from 'react';

export default function RegistrationForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4">Registration Form</h2>
      {/* Your form fields go here */}
      <form>
        <input type="text" placeholder="Name" className="border p-2 mb-4 w-full" />
        <input type="email" placeholder="Email" className="border p-2 mb-4 w-full" />
        <button type="submit" className="bg-[#0281ab] text-white px-4 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
}
