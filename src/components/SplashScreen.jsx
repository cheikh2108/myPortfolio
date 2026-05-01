import React, { useEffect, useState } from 'react';

export default function SplashScreen({ onLoadingComplete }) {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
        onLoadingComplete?.();
      }, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black z-9999 overflow-hidden ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-800`}>
      
      {/* Simple loader content */}
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4 animate-fade-in">
          Baye Cheikh<br />Diakhate
        </h1>
        <p className="text-sm sm:text-base text-gray-400 tracking-widest uppercase animate-fade-in-delay">
          Developer • Builder • Creator
        </p>
      </div>
    </div>
  );
}
