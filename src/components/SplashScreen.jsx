import React, { useEffect, useState } from 'react';

export default function SplashScreen({ onLoadingComplete }) {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 40;
      });
    }, 200);

    const timer = setTimeout(() => {
      setProgress(100);
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
        onLoadingComplete?.();
      }, 800);
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-9999 overflow-hidden transition-opacity duration-800 splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      
      {/* Gradient orb background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6">
        
        {/* Premium Text Reveal Animation */}
        <h1 className="text-center">
          {/* Brand/Text with letter reveal */}
          <div className="inline-block">
            <span className="block text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-3 overflow-hidden">
              {'YOYO'.split('').map((letter, i) => (
                <span
                  key={i}
                  className="inline-block premium-letter"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
            <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent premium-line mb-6" />
            <p className="text-xs sm:text-sm tracking-[0.3em] text-white/70 premium-subtitle">
              Experience Design
            </p>
          </div>
        </h1>
      </div>

      {/* Progress Bar - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
