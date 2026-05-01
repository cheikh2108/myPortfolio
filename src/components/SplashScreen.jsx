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
      }, 1000);
    }, 3200);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  const firstName = 'Baye Cheikh';
  const lastName = 'Diakhate';
  const subtitle = 'Developer • Builder • Creator';

  return (
    <div className={`fixed inset-0 z-9999 overflow-hidden transition-opacity duration-1000 premium-loader ${fadeOut ? 'loader-fade-out' : ''}`}>
      {/* Solid Black Background - 100% Opaque */}
      <div className="absolute inset-0 bg-black" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-black to-black pointer-events-none" />

      {/* Premium Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        
        {/* Decorative top line */}
        <div className="premium-top-line mb-12" />

        {/* Main Content */}
        <div className="text-center">
          {/* First Name */}
          <h1 className="overflow-hidden">
            <div className="inline-block">
              {firstName.split('').map((char, i) => (
                <span
                  key={`first-${i}`}
                  className="inline-block premium-char"
                  style={{
                    animationDelay: `${i * 0.04}s`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
          </h1>

          {/* Last Name */}
          <h2 className="overflow-hidden">
            <div className="inline-block">
              {lastName.split('').map((char, i) => (
                <span
                  key={`last-${i}`}
                  className="inline-block premium-char"
                  style={{
                    animationDelay: `${(firstName.length + 1 + i) * 0.04}s`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
          </h2>

          {/* Decorative divider line */}
          <div className="premium-divider my-8" />

          {/* Subtitle */}
          <p className="premium-subtitle text-xs sm:text-sm tracking-[0.3em] text-white/70 uppercase">
            {subtitle.split('').map((char, i) => (
              <span
                key={`subtitle-${i}`}
                className="inline-block premium-char-subtitle"
                style={{
                  animationDelay: `${(firstName.length + lastName.length + 2 + i) * 0.02}s`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </p>
        </div>

        {/* Decorative bottom line */}
        <div className="premium-bottom-line mt-12" />
      </div>

      {/* Subtle progress indicator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent loader-progress" />
    </div>
  );
}
