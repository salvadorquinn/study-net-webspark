
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleFindTutor = () => {
    navigate("/tutors");  // Navigate to tutors search page
  };

  const handleLearnMore = () => {
    navigate("/about");  // Navigate to about page
  };

  return (
    <section className="relative bg-gradient-to-r from-[#9b1f62] to-[#682161] pt-32 pb-16 md:pt-40 md:pb-24 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Path to <span className="text-[#3e3764]">Academic Excellence</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg opacity-90">
              Connect with Australia's best tutors and unlock your full potential. Personalized tutoring for all subjects and levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleFindTutor}
                className="bg-[#283043] hover:bg-[#3e3764] text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Find a Tutor
              </Button>
              <Button 
                variant="outline" 
                onClick={handleLearnMore}
                className="border-[#9b1f62] text-[#9b1f62] hover:bg-[#682161]/20 px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Students studying together"
                className="w-full h-auto object-cover filter brightness-75"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,208C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
