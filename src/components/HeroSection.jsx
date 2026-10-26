import React, { useEffect, useRef, useState } from 'react';
import TypeWords from './TypeWords';
import Stars from './Stars';
import Navbar from './Navbar';
import myProfileface from '../images/myProfileface.webp';

const SHOOTING_STARS = [
  { top: '6%',  left: '8%',  dur: 9,  delay: 0 },
  { top: '28%', left: '55%', dur: 14, delay: 4 },
  { top: '55%', left: '20%', dur: 11, delay: 8 },
];

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const heroContainerRef = useRef(null);
  const heroParallaxRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let rafId = 0;
    let mouseOffsetX = 0;
    let mouseOffsetY = 0;

    const updateParallax = () => {
      rafId = 0;
      if (!heroContainerRef.current || !heroParallaxRef.current) return;

      const rect = heroContainerRef.current.getBoundingClientRect();
      const height = Math.max(rect.height, 1);
      const progress = Math.min(Math.max(-rect.top / height, 0), 1);

      const scrollShiftY = progress * 72;
      const driftX = mouseOffsetX * 12;
      const driftY = mouseOffsetY * 10;

      heroParallaxRef.current.style.transform = `translate3d(${driftX}px, ${scrollShiftY + driftY}px, 0) scale(1.14)`;
      heroParallaxRef.current.style.opacity = `${1 - progress * 0.32}`;
    };

    const requestParallaxFrame = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateParallax);
    };

    const onMouseMove = (event) => {
      mouseOffsetX = event.clientX / window.innerWidth - 0.5;
      mouseOffsetY = event.clientY / window.innerHeight - 0.5;
      requestParallaxFrame();
    };

    window.addEventListener('scroll', requestParallaxFrame, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    requestParallaxFrame();

    return () => {
      window.removeEventListener('scroll', requestParallaxFrame);
      window.removeEventListener('mousemove', onMouseMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  return (
    <div ref={heroContainerRef} className="overflow-hidden relative" id="top">
      <div ref={heroParallaxRef} className="hero-parallax-layer absolute inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
        <Stars heroContainerRef={heroContainerRef} />
        {SHOOTING_STARS.map((s, i) => (
          <span
            key={i}
            className="hero-shooting-star"
            style={{
              top: s.top,
              left: s.left,
              animationDuration: `${s.dur}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <Navbar />

      <section className="min-h-screen flex flex-col section-visible text-center px-6 relative items-center justify-center pt-[calc(7rem+0.7cm)] pb-12">
        <h1 className="leading-[0.95] font-semibold text-white tracking-tight pb-8" style={{ animation: 'titleEmergence 1.8s ease-out both' }}>
          <span className="block text-[10vw] sm:text-7xl lg:text-8xl text-center">
            <span className="flex w-full items-center justify-center gap-4 sm:gap-6">
              <img
                src={myProfileface}
                alt="Portrait de Baye Cheikh Diakhate"
                className="w-[10vw] h-[10vw] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px] rounded-full object-cover border-2 border-white/20 shadow-2xl"
                style={{ animation: 'portraitFall 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s both' }}
                fetchpriority="high"
                decoding="async"
              />
              <span>Création</span>
            </span>
            <span className="block w-full text-white/85 animate-shimmer-mask [--shine:220%]">applications web</span>
            <span className="block w-full"> et mobiles</span>
          </span>
        </h1>

        <TypeWords
          text="Développeur fullstack qui transforme des besoins concrets en applications web claires, rapides et fiables."
          className="max-w-3xl mx-auto text-lg md:text-xl text-white/80"
        />

        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#contact" className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-sky-400/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)] group ring-[#ffffff]/30 ring-1 text-base font-semibold text-white tracking-tight bg-neutral-950/95 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)] z-[2]">
            <span className="z-[1] group-hover:translate-x-1 transition-transform duration-300 relative">Voir mes projets</span>
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: 'linear-gradient(45deg, rgba(56,189,248,0.8) 0%, rgba(99,102,241,0.8) 50%, rgba(168,85,247,0.8) 100%)' }}></span>
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full" style={{ boxShadow: '0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25)', background: 'radial-gradient(140% 160% at 50% -20%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.08) 35%, rgba(56,189,248,0.00) 60%)' }}></span>
          </a>
          <div className="inline-block group relative">
            <a href="#contact" className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white text-sm font-medium text-white/80 tracking-tight bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 relative backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center">
              <span className="relative">Démarrer un projet</span>
              <span aria-hidden="true" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{ background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)' }}></span>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap text-xs text-white/60 mt-16 xl:mt-24 gap-x-6 gap-y-6 items-center justify-center" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both' }}>
          <span className="inline-flex items-center gap-1.5">
            <iconify-icon icon="solar:clock-circle-linear" width="16" height="16" class="text-white"></iconify-icon>
            5 projets en ligne
          </span>
          <span className="inline-flex items-center gap-1.5">
            <iconify-icon icon="solar:case-linear" width="16" height="16" class="text-white"></iconify-icon>
            Applications web et outils métiers
          </span>
          <span className="inline-flex items-center gap-1.5">
            <iconify-icon icon="solar:users-group-rounded-linear" width="16" height="16" class="text-white"></iconify-icon>
            Expérience utilisateur d'abord
          </span>
        </div>
      </section>
    </div>
  );
}
