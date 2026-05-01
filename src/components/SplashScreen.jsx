import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

export default function SplashScreen({ onLoadingComplete }) {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading - in real app, trigger when content is ready
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
        onLoadingComplete?.();
      }, 800);
    }, 2500); // Show splash for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      {/* Animated background particles */}
      <div className="splash-particles">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              '--delay': `${i * 0.1}s`,
              '--duration': `${3 + Math.random() * 2}s`,
              '--size': `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="splash-content">
        <div className="splash-gradient-bg" />
        
        <h1 className="splash-title">
          <span className="splash-text">Baye Cheikh</span>
          <span className="splash-text delay-1">Diakhate</span>
        </h1>

        <p className="splash-subtitle">Developer • Builder • Creator</p>

        {/* Animated loader */}
        <div className="splash-loader">
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
        </div>

        <p className="splash-loading-text">Loading experience...</p>
      </div>
    </div>
  );
}
