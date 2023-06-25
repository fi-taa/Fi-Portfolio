import React from 'react';

const HeroSection = () => {
  const handleClick = () => {
    // Scroll to the next section/page
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <>
      <div className='h-screen flex flex-col md:flex-row relative'>
        <div className='h-1/2 md:h-full w-full flex items-center justify-center'>
          <img src='h1.jpg' className='max-w-full max-h-full'/>
        </div>
        <div className='h-1/2 md:h-full w-full flex items-center justify-center'>
          <img src='h2.jpg' className='h-3/4 md:max-w-full md:max-h-full'/>
        </div>
        <svg
          className="absolute bottom-0 left-1/2 transform-translate-x-1/2 mb-8 animate-bounce w-6 h-6 text-white cursor-pointer bg-slate-700/80 rounded-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </>
  );
};

export default HeroSection;
