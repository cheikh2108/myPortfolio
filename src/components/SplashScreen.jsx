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
    <>
      <style>{`
        @keyframes float-up {
          0% {
            opacity: 0;
            transform: translate3d(0, 0, 0) scale(0);
            filter: blur(0px);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translate3d(var(--tx, 50px), -120vh, 0) scale(1);
            filter: blur(1px);
          }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes title-appear {
          0% {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
            filter: blur(12px);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: blur(0px);
          }
        }

        @keyframes subtitle-appear {
          0% {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes spin-ring {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes loader-appear {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .particle {
          animation: float-up var(--duration, 5s) ease-in forwards;
          animation-delay: var(--delay, 0s);
        }

        .splash-title {
          animation: gradient-shift 3s ease infinite;
          background-size: 200% 200%;
        }

        .splash-text {
          animation: title-appear 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .splash-text.delay-1 {
          animation-delay: 0.3s;
        }

        .splash-subtitle {
          animation: subtitle-appear 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .loader-ring {
          border: 2px solid transparent;
          will-change: transform;
        }

        .loader-ring:nth-child(1) {
          border-top-color: rgb(168, 85, 247);
          border-right-color: rgba(168, 85, 247, 0.5);
          animation: spin-ring 2s linear infinite;
        }

        .loader-ring:nth-child(2) {
          border-top-color: rgb(99, 102, 241);
          border-right-color: rgba(99, 102, 241, 0.5);
          animation: spin-ring 1.5s linear infinite reverse;
        }

        .loader-ring:nth-child(3) {
          border-top-color: rgb(56, 189, 248);
          border-right-color: rgba(56, 189, 248, 0.5);
          animation: spin-ring 1s linear infinite;
        }

        .splash-loader {
          animation: loader-appear 0.8s ease-out 0.9s forwards;
          opacity: 0;
        }

        .splash-loading-text {
          animation: text-appear 0.6s ease-out 1.2s forwards;
          opacity: 0;
        }

        @keyframes text-appear {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .splash-screen.fade-out {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>

      <div className={`fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-9999 overflow-hidden transition-opacity duration-800 splash-screen ${fadeOut ? 'fade-out' : ''}`}>
        
        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle absolute rounded-full pointer-events-none"
              style={{
                '--delay': `${i * 0.1}s`,
                '--duration': `${3 + Math.random() * 2}s`,
                '--size': `${2 + Math.random() * 4}px`,
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
    </>
  );
}
