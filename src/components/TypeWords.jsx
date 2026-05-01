import React, { useEffect, useRef, useState } from 'react';

export default function TypeWords({ text, stagger = 0.2, duration = 2, ease = 'ease-in-out', delay = 0.4, className = '' }) {
  const ref = useRef(null);
  const [isIn, setIsIn] = useState(false);
  const words = text.replace(/\s+/g, ' ').split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIn(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2 });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <p 
      ref={ref} 
      className={`type-words ${isIn ? 'is-in' : ''} ${className}`}
      style={{
        '--stagger': `${stagger}s`,
        '--dur': `${duration}s`,
        '--ease': ease,
        '--delay': `${delay}s`
      }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="w" style={{ '--i': i }}>
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
}