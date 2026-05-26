import React, { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    // Create a synthetic anchor click so Lenis intercepts it on desktop
    const a = document.createElement('a');
    a.href = '#top';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    // Fallback for mobile (Lenis disabled)
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Retour en haut"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 50,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.12)',
        background: hovered
          ? 'rgba(255,255,255,0.10)'
          : 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: visible ? 1 : 0,
        transform: visible
          ? (hovered ? 'translateY(-3px) scale(1.08)' : 'translateY(0) scale(1)')
          : 'translateY(16px) scale(0.85)',
        transition: 'opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.34,1.2,0.64,1), background 0.25s ease, border-color 0.25s ease',
        pointerEvents: visible ? 'auto' : 'none',
        boxShadow: hovered
          ? '0 0 0 1px rgba(56,189,248,0.35), 0 8px 24px rgba(0,0,0,0.4), 0 0 16px rgba(56,189,248,0.12)'
          : '0 4px 16px rgba(0,0,0,0.3)',
        borderColor: hovered ? 'rgba(56,189,248,0.4)' : 'rgba(255,255,255,0.12)',
      }}
    >
      {/* Animated arrow */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        style={{
          color: hovered ? 'rgba(186,230,253,1)' : 'rgba(255,255,255,0.7)',
          transition: 'color 0.25s ease, transform 0.35s cubic-bezier(0.34,1.2,0.64,1)',
          transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
        }}
      >
        <path
          d="M8 12.5V3.5M8 3.5L4 7.5M8 3.5L12 7.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
