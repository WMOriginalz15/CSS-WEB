import React, { useState } from 'react';
import { Code, Users, BookOpen } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import JoinCSSForm from './JoinCSSForm';
import Modal from './Modal';

export default function Hero() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleJoinClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseModal = () => {
    setIsFormVisible(false);
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#FCFCFC] to-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-[#3D3D3D] mb-6">
              Computing Students <span className="text-[#0281ab]">Society</span>
            </h1>
            <p className="text-lg text-[#717171] mb-8">
              Empowering future tech leaders at Kings University College through innovation, collaboration, and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={handleJoinClick}
                className="px-8 py-3 bg-[#0281ab] text-white rounded-lg hover:bg-[#026f9b] transition-colors"
              >
                Join CSS
              </button>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-[#0281ab] text-[#0281ab] rounded-lg hover:bg-[#FCFCFC] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
              alt="Students collaborating"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon={Code}
            title="Technical Workshops"
            description="Regular coding sessions and tech workshops"
          />
          <FeatureCard
            icon={Users}
            title="Community"
            description="Strong network of computing students"
          />
          <FeatureCard
            icon={BookOpen}
            title="Resources"
            description="Access to learning materials and mentorship"
          />
        </div>
      </div>

      <Modal isOpen={isFormVisible} onClose={handleCloseModal}>
        <JoinCSSForm onClose={handleCloseModal} />
      </Modal>
    </section>
  );
}