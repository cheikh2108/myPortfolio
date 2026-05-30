import React, { useEffect, useRef } from 'react';

const STARS = [
  { top: '8%',  left: '12%',  size: 2.5, dur: 4,  delay: 0,    opacity: 0.75, bright: true  },
  { top: '18%', left: '72%',  size: 1.5, dur: 6,  delay: 1.5,  opacity: 0.5,  bright: false },
  { top: '32%', left: '88%',  size: 2,   dur: 5,  delay: 0.8,  opacity: 0.65, bright: false },
  { top: '55%', left: '5%',   size: 1.5, dur: 7,  delay: 2.8,  opacity: 0.45, bright: false },
  { top: '70%', left: '60%',  size: 2,   dur: 5.5,delay: 1.2,  opacity: 0.55, bright: true  },
  { top: '80%', left: '25%',  size: 1.5, dur: 8,  delay: 0.4,  opacity: 0.4,  bright: false },
  { top: '45%', left: '50%',  size: 1,   dur: 4.5,delay: 3.5,  opacity: 0.35, bright: false },
  { top: '25%', left: '38%',  size: 2,   dur: 6,  delay: 2,    opacity: 0.55, bright: false },
  { top: '62%', left: '82%',  size: 1.5, dur: 5,  delay: 0.7,  opacity: 0.4,  bright: false },
  { top: '12%', left: '52%',  size: 1,   dur: 7.5,delay: 2.4,  opacity: 0.3,  bright: false },
  { top: '88%', left: '45%',  size: 2.5, dur: 4,  delay: 0.6,  opacity: 0.6,  bright: true  },
  { top: '40%', left: '18%',  size: 1.5, dur: 6.5,delay: 1.4,  opacity: 0.45, bright: false },
  { top: '5%',  left: '82%',  size: 1,   dur: 5.5,delay: 1.8,  opacity: 0.35, bright: false },
  { top: '75%', left: '38%',  size: 2,   dur: 7,  delay: 0.2,  opacity: 0.55, bright: false },
  { top: '52%', left: '68%',  size: 1,   dur: 4,  delay: 3.8,  opacity: 0.3,  bright: false },
  { top: '93%', left: '15%',  size: 1.5, dur: 8,  delay: 1,    opacity: 0.4,  bright: false },
  { top: '3%',  left: '30%',  size: 2,   dur: 5,  delay: 3.2,  opacity: 0.5,  bright: false },
  { top: '35%', left: '95%',  size: 1,   dur: 6,  delay: 0.5,  opacity: 0.35, bright: false },
  { top: '20%', left: '22%',  size: 1.5, dur: 5,  delay: 4.5,  opacity: 0.4,  bright: false },
  { top: '48%', left: '33%',  size: 1,   dur: 7,  delay: 2.2,  opacity: 0.3,  bright: false },
  { top: '67%', left: '78%',  size: 2,   dur: 4.5,delay: 1.6,  opacity: 0.5,  bright: false },
  { top: '15%', left: '60%',  size: 2.5, dur: 6,  delay: 0.9,  opacity: 0.65, bright: true  },
  { top: '82%', left: '68%',  size: 1,   dur: 5.5,delay: 3.5,  opacity: 0.3,  bright: false },
  { top: '58%', left: '42%',  size: 1.5, dur: 8,  delay: 2.8,  opacity: 0.4,  bright: false },
  { top: '10%', left: '44%',  size: 2,   dur: 5,  delay: 1.1,  opacity: 0.6,  bright: false },
  { top: '38%', left: '63%',  size: 1.5, dur: 6,  delay: 0.3,  opacity: 0.5,  bright: false },
  { top: '72%', left: '48%',  size: 2,   dur: 4.5,delay: 2.1,  opacity: 0.55, bright: true  },
  { top: '22%', left: '6%',   size: 1.5, dur: 7,  delay: 3.3,  opacity: 0.45, bright: false },
  { top: '90%', left: '78%',  size: 2,   dur: 5.5,delay: 1.7,  opacity: 0.5,  bright: false },
  { top: '44%', left: '90%',  size: 1.5, dur: 6.5,delay: 0.6,  opacity: 0.4,  bright: false },
];

const REPEL_RADIUS = 130;
const REPEL_STRENGTH = 55;

export default function Stars({ heroContainerRef }) {
  const starRefs = useRef([]);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const container = heroContainerRef.current;
    if (!container) return;

    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };

      starRefs.current.forEach((el, i) => {
        if (!el) return;
        const s = STARS[i];
        const starX = parseFloat(s.left) / 100 * container.offsetWidth;
        const starY = parseFloat(s.top)  / 100 * container.offsetHeight;
        const dx = mouse.current.x - starX;
        const dy = mouse.current.y - starY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
          const nx = -dx / dist * force;
          const ny = -dy / dist * force;
          el.style.setProperty('--repel-x', `${nx}px`);
          el.style.setProperty('--repel-y', `${ny}px`);
        } else {
          el.style.setProperty('--repel-x', '0px');
          el.style.setProperty('--repel-y', '0px');
        }
      });
    };

    const onLeave = () => {
      starRefs.current.forEach(el => {
        if (!el) return;
        el.style.setProperty('--repel-x', '0px');
        el.style.setProperty('--repel-y', '0px');
      });
    };

    container.addEventListener('mousemove', onMove, { passive: true });
    container.addEventListener('mouseleave', onLeave);
    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, [heroContainerRef]);

  return STARS.map((s, i) => (
    <span
      key={i}
      ref={el => starRefs.current[i] = el}
      className={`hero-star${s.bright ? ' bright' : ''}`}
      style={{
        top: s.top,
        left: s.left,
        width: `${s.size}px`,
        height: `${s.size}px`,
        '--star-opacity': s.opacity,
        animationDuration: `${s.dur}s`,
        animationDelay: `${s.delay}s`,
      }}
    />
  ));
}
