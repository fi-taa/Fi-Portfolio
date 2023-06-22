import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage: `url('/bg1.jpeg')`,
        }}
      />
      <div className="relative flex flex-col items-center justify-center h-full">
        <img
          className="w-40 h-40 rounded-full mb-4 mt-20"
          src="/hero1.png"
          alt="Profile"
        />
        <h1 className="text-4xl font-bold text-gray-100 mb-2">Fita Wegene</h1>
        <p className="text-lg text-white animate-pulse">Web Developer and Graphics Designer</p>
        <div className="mt-auto mb-6">
          <svg
            className="animate-bounce w-6 h-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
