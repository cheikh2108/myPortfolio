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
    <div className={`fixed inset-0 flex items-center justify-center bg-black z-9999 overflow-hidden transition-opacity duration-800 splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full pointer-events-none"
            style={{
              '--delay': `${i * 0.1}s`,
              '--duration': `${3 + Math.random() * 2}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.8), rgba(99, 102, 241, 0.3))`,
              left: `calc(10% + ${i * 5}%)`,
              bottom: '-10vh',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        
        {/* Gradient background blur */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-indigo-500/10 to-transparent blur-3xl w-96 h-96 -top-48 left-1/2 -translate-x-1/2 pointer-events-none" />

        {/* Title */}
        <h1 className="splash-title relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 sm:mb-4 tracking-tighter bg-gradient-to-r from-white via-purple-300 to-indigo-300 bg-clip-text text-transparent">
          <span className="splash-text block">Baye Cheikh</span>
          <span className="splash-text delay-1 block">Diakhate</span>
        </h1>

        {/* Subtitle */}
        <p className="splash-subtitle text-xs sm:text-sm md:text-base text-white/60 mb-8 sm:mb-12 tracking-widest uppercase font-medium">
          Developer • Builder • Creator
        </p>

        {/* Loader */}
        <div className="splash-loader flex flex-col items-center gap-4 sm:gap-6">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16">
            <div className="loader-ring absolute inset-0 rounded-full" />
            <div className="loader-ring absolute inset-2 rounded-full" />
            <div className="loader-ring absolute inset-4 rounded-full" />
          </div>
          <p className="text-white text-xs sm:text-sm font-medium tracking-widest">
            BAYE CHEIKH DIAKHATE
          </p>
        </div>

        {/* Loading text */}
        <p className="splash-loading-text text-xs sm:text-sm text-white/50 tracking-widest uppercase">
          Loading experience...
        </p>
      </div>
    </div>
  );
}
