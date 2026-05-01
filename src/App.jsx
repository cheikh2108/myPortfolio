import React, { useEffect, useRef, useState } from 'react';
import TypeWords from './components/TypeWords';
import WorkCarousel from './components/WorkCarousel';
import AboutSection from './components/AboutSection';
import myProfileface from './images/myProfileface.jpeg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const heroContainerRef = useRef(null);
  const heroParallaxRef = useRef(null);

  useEffect(() => {
    // Setup generic scroll observers for standard sections
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          entry.target.classList.remove('section-exiting');
        } else if (entry.boundingClientRect.top < 0) {
          entry.target.classList.add('section-exiting');
        }
      });
    }, { threshold: 0.15, rootMargin: '-10% 0px -10% 0px' });

    document.querySelectorAll('section').forEach(sec => sectionObserver.observe(sec));

    // Observe animate-on-scroll elements
    const elementObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          elementObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });

    document.querySelectorAll(".animate-on-scroll").forEach(el => elementObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      elementObserver.disconnect();
    };
  }, []);

  useEffect(() => {
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
      const normalizedX = event.clientX / window.innerWidth - 0.5;
      const normalizedY = event.clientY / window.innerHeight - 0.5;
      mouseOffsetX = normalizedX;
      mouseOffsetY = normalizedY;
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
  }, []);

  const portfolioItems = [
    { cat: 'product', img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70bb19b3-d51f-47a2-8020-6261061a6a14_3840w.jpg', title: 'Dashboard SaaS', desc: 'Plateforme web • 2025', tags: ['React', 'API'] },
    { cat: 'environment', img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4a67840-05ba-4133-86ca-146954f90c15_800w.webp', title: 'Espace Admin', desc: 'Back-office métier • 2025', tags: ['Node.js', 'Auth'] },
    { cat: 'motion', img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c42603b-4f4a-422a-9ece-7460e8a24048_3840w.webp', title: 'Déploiement conteneurisé', desc: 'Docker & orchestration • 2024', tags: ['Docker', 'Compose'] },
    { cat: 'product', img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/673a4f97-d66d-40c8-a04b-44985ef5577b_3840w.jpg', title: 'Outil métier', desc: 'Application web interne • 2025', tags: ['Fullstack', 'CRUD'] },
    { cat: 'character', img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/541e199d-de17-4765-8fca-71b804cb9fb3_800w.webp', title: 'Portail utilisateur', desc: 'Expérience utilisateur • 2024', tags: ['Design system', 'DX'] },
    { cat: 'environment', img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4517a7d-638f-43bf-87fb-315a5f0690ff_3840w.webp', title: 'Tableau de bord', desc: 'Visibilité des données • 2025', tags: ['Data', 'Charts'] }
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>

      <div className="gradient-blur">
        <div></div><div></div><div></div><div></div>
      </div>

      <main id="main-content">
      <div ref={heroContainerRef} className="overflow-hidden relative" id="top">
        <div ref={heroParallaxRef} className="hero-parallax-layer absolute inset-0 -z-10 pointer-events-none hue-rotate-15 blur-sm">
          <iframe
            src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW"
            frameBorder="0"
            width="100%"
            height="100%"
            title="Decorative animated background"
            loading="lazy"
            aria-hidden="true"
            tabIndex={-1}
          ></iframe>
        </div>

        <header className="fixed z-20 bg-black/50 w-full top-0 backdrop-blur-xl" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both' }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between py-6 border-b border-white/[0.06]">
              <a href="#main-content" className="flex items-center gap-3">
                <span className="text-xl font-semibold tracking-tight">Baye Cheikh Diakhate</span>
              </a>
              <button 
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition ml-auto" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                type="button"
              >
                <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>
              </button>
              <nav className="hidden lg:flex items-center gap-8 text-sm text-white/70" aria-label="Main navigation">
                <a href="#portfolio" className="hover:text-white transition">Projets</a>
                <a href="#about" className="hover:text-white transition">À propos</a>
                <a href="#services" className="hover:text-white transition">Services</a>
                <a href="#process" className="hover:text-white transition">Process</a>
                <a href="#skills" className="hover:text-white transition">Skills</a>
                <a href="#contact" className="hover:text-white transition">Contact</a>
              </nav>
              <div className="flex items-center gap-3">
                <a href="#contact" className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white gap-2 text-sm font-medium text-white/80 tracking-tight bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 relative backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center hidden md:inline-flex">
                  Me contacter
                  <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                </a>
              </div>
            </div>
            
            <nav id="mobile-menu" aria-label="Mobile navigation" className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
              <div className="flex flex-col p-6 space-y-4">
                <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-base text-white/70 hover:text-white transition py-2">Projets</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base text-white/70 hover:text-white transition py-2">À propos</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base text-white/70 hover:text-white transition py-2">Services</a>
                <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-base text-white/70 hover:text-white transition py-2">Process</a>
                <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-base text-white/70 hover:text-white transition py-2">Skills</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-base text-white/70 hover:text-white transition py-2">Contact</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center justify-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white/80 bg-white/5 rounded-full px-5 py-3 mt-2">
                  Me contacter
                  <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                </a>
              </div>
            </nav>
          </div>
        </header>

        <section className="min-h-screen flex flex-col section-visible text-center pt-0 pr-6 pb-24 pl-6 relative items-center justify-center xl:pt-0 xl:pb-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 backdrop-blur-sm text-white/80 ring-1 ring-white/10 animate-badge">
            <iconify-icon icon="solar:code-square-linear" width="16" height="16"></iconify-icon>
            <span>Développeur fullstack orienté produits</span>
          </div>

          <h1 className="leading-[0.95] font-semibold text-white tracking-tight mt-0 mb-0 pt-24 pb-12" style={{ animation: 'titleEmergence 1.8s ease-out both' }}>
            <span className="block text-[10vw] sm:text-7xl lg:text-8xl text-center">
              <span className="flex w-full items-center justify-center gap-4 sm:gap-6">
                <img src={myProfileface} alt="Portrait de Baye Cheikh Diakhate" className="w-[10vw] h-[10vw] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px] rounded-full object-cover border-2 border-white/20 shadow-2xl" style={{ animation: 'portraitFall 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s both' }} fetchPriority="high" decoding="async" />
                <span>Creation</span>
              </span>
              <span className="block w-full text-white/85 animate-shimmer-mask [--shine:220%]">applications web</span>
              <span className="block w-full">mobiles</span>
            </span>
          </h1>

          <TypeWords 
            text="Développeur fullstack qui transforme des besoins concrets en applications web claires, rapides et fiables."
            className="max-w-3xl mx-auto text-lg md:text-xl text-white/80"
          />

          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#contact" className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-sky-400/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)] group ring-[#ffffff]/30 ring-1 text-base font-semibold text-white tracking-tight bg-neutral-950/95 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)] z-[2]">
              <span className="z-[1] group-hover:translate-x-1 transition-transform duration-300 relative">Voir mes projets</span>
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: 'linear-gradient(45deg, rgba(56,189,248,0.8) 0%, rgba(99,102,241,0.8) 50%, rgba(168,85,247,0.8) 100%)', animation: 'pulse 2s ease-in-out infinite' }}></span>
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full" style={{ boxShadow: '0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25)', background: 'radial-gradient(140% 160% at 50% -20%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.08) 35%, rgba(56,189,248,0.00) 60%)' }}></span>
            </a>
            <div className="inline-block group relative">
              <a href="#contact" className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white text-sm font-medium text-white/80 tracking-tight bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 relative backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center">
                <span className="relative">Démarrer un projet</span>
                <span aria-hidden="true" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{ background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)' }}></span>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap xl:py-24 text-xs text-white/60 mt-8 pt-24 pb-24 gap-x-6 gap-y-6 items-center justify-center" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both' }}>
            <span className="inline-flex items-center gap-1.5">
              <iconify-icon icon="solar:clock-circle-linear" width="16" height="16" class="text-white"></iconify-icon>
              2+ ans d’expérience
            </span>
            <span className="inline-flex items-center gap-1.5">
              <iconify-icon icon="solar:case-linear" width="16" height="16" class="text-white"></iconify-icon>
              Applications web et outils métiers
            </span>
            <span className="inline-flex items-center gap-1.5">
              <iconify-icon icon="solar:users-group-rounded-linear" width="16" height="16" class="text-white"></iconify-icon>
              Expérience utilisateur d’abord
            </span>
          </div>
        </section>
      </div>

      <div className="relative mt-12 md:mt-16">
        <WorkCarousel />
      </div>

      <section className="z-10 xl:py-24 mt-24 pt-12 pb-12 relative" id="portfolio">
        <div className="container lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
          <div className="max-w-3xl animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both' }}>
            <div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center">
              <iconify-icon icon="solar:gallery-linear" width="14" height="14" class="text-white-400"></iconify-icon>
              <span className="text-xs text-white/70">Projets sélectionnés</span>
            </div>
            <h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tight mt-5 drop-shadow-xl">
              Réalisations web
            </h2>
            <p className="text-base md:text-lg text-white/70 mt-4">
              Une sélection de projets web conçus pour être rapides, clairs et utiles.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-10 animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.15s both' }}>
            {['all', 'product', 'character', 'environment', 'motion'].map((filter) => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-btn px-4 py-2 rounded-full border border-white/10 text-sm transition ${activeFilter === filter ? 'active bg-white/10 text-white/80' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                aria-pressed={activeFilter === filter}
                type="button"
              >
                {filter === 'all' && 'Tous'}
                {filter === 'product' && 'Applications web'}
                {filter === 'character' && 'APIs & backend'}
                {filter === 'environment' && 'UI & UX'}
                {filter === 'motion' && 'Docker'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {portfolioItems.map((item, idx) => {
              const isVisible = activeFilter === 'all' || activeFilter === item.cat;
              return (
                <div 
                  key={idx}
                  className={`portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0 hidden'}`}
                  style={{ animation: `fadeSlideIn 0.5s ease-in-out ${0.2 + idx * 0.05}s both` }}
                >
                  <img src={item.img} alt={item.title} className="w-full aspect-square object-cover" loading="lazy" decoding="async" />
                  <div className="portfolio-overlay">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-xs text-white/60 mt-1">{item.desc}</p>
                    <div className="flex gap-2 mt-3">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both' }}>
            <a href="#contact" className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3">
              Voir tout le portfolio
              <iconify-icon icon="solar:export-linear" width="16" height="16"></iconify-icon>
            </a>
          </div>
        </div>
      </section>

      <AboutSection />

      <section className="z-10 xl:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92d0c40f-f813-47fd-a53a-5def9c2ca85c_3840w.webp)] bg-cover mt-24 pt-12 pb-12 relative" id="services">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both' }}>
            <div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center">
              <iconify-icon icon="solar:box-linear" width="14" height="14" class="text-white-400"></iconify-icon>
              <span className="text-xs text-white/70">Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white mt-5 drop-shadow-xl font-semibold tracking-tight">Ce que je propose</h2>
            <p className="text-base md:text-lg text-white/70 mt-4">Des solutions web complètes, du backend à l’interface, pensées pour la performance et la clarté.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both' }}>
              <div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4 text-violet-400">
                <iconify-icon icon="solar:monitor-smartphone-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">Applications Web</h3>
              <p className="mt-2 text-sm text-white/70">Création d’applications web modernes, dashboards, plateformes et outils métiers adaptés à vos besoins.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Dashboards', 'Plateformes', 'Outils métiers'].map(t => <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">{t}</span>)}
              </div>
            </div>

            <div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.25s both' }}>
              <div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4 text-cyan-400">
                <iconify-icon icon="solar:server-2-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">APIs & Backend</h3>
              <p className="mt-2 text-sm text-white/70">Conception d’API, logique serveur, authentification et automatisation des processus pour connecter vos applications.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['REST', 'Auth', 'Automatisation'].map(t => <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">{t}</span>)}
              </div>
            </div>

            <div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both' }}>
              <div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4 text-emerald-400">
                <iconify-icon icon="solar:palette-round-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">Interfaces & UX</h3>
              <p className="mt-2 text-sm text-white/70">Création d’interfaces modernes, interactives et optimisées pour une navigation fluide et intuitive.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['UI', 'Design system', 'Expérience utilisateur'].map(t => <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">{t}</span>)}
              </div>
            </div>

            <div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.4s both' }}>
              <div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4 text-amber-400">
                <iconify-icon icon="solar:code-square-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">Performance & Qualité</h3>
              <p className="mt-2 text-sm text-white/70">Optimisation des performances, qualité du code, tests et bonnes pratiques pour livrer des solutions fiables.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Tests', 'Scalabilité', 'Maintenance'].map(t => <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">{t}</span>)}
              </div>
            </div>

            <div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.45s both' }}>
              <div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-sky-500/20 to-indigo-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4 text-sky-300">
                <iconify-icon icon="solar:layers-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">Architecture technique</h3>
              <p className="mt-2 text-sm text-white/70">Mise en place d’une base claire pour faire évoluer le projet sans complexité inutile.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Structure', 'Scalabilité', 'Clarté'].map(t => <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">{t}</span>)}
              </div>
            </div>

            <div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both' }}>
              <div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-rose-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4 text-fuchsia-300">
                <iconify-icon icon="solar:refresh-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">Maintenance & évolutivité</h3>
              <p className="mt-2 text-sm text-white/70">Suivi des corrections, améliorations et évolutions pour garder une application saine dans le temps.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Support', 'Évolutions', 'Stabilité'].map(t => <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24 pb-24 relative" id="process">
        <div className="lg:px-8 max-w-5xl mr-auto ml-auto pr-6 pl-6">
          <div className="text-center mb-16 animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both' }}>
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border-gradient before:rounded-full rounded-full px-4 py-2 mb-6">
              <iconify-icon icon="solar:route-linear" width="16" height="16" class="text-white-400"></iconify-icon>
              <span className="text-xs text-white/70 font-medium">Mon processus</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">De l’idée à la mise en ligne</h2>
            <p className="text-white/70 mt-4 text-lg">Un workflow clair pour livrer des applications web solides, utiles et performantes.</p>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-12 bottom-12 w-px bg-gradient-to-b from-blue-500 to-cyan-500/0 hidden md:block"></div>
            <div className="space-y-6">
              {[
                { step: 1, title: 'Compréhension du besoin', desc: "Analyse du projet, des objectifs, des contraintes et du contexte métier pour cadrer la bonne solution." },
                { step: 2, title: 'Conception', desc: "Définition de la structure, des fonctionnalités et de l’expérience utilisateur avant d’écrire la moindre ligne de code." },
                { step: 3, title: 'Développement', desc: "Construction de l’application avec un focus sur la performance, la lisibilité du code et la robustesse." },
                { step: 4, title: 'Tests & livraison', desc: "Correction des bugs, optimisation et mise en ligne de la solution avec accompagnement si nécessaire." }
              ].map((item, idx) => (
                <div key={item.step} className="relative animate-on-scroll" style={{ animation: `fadeSlideIn 0.5s ease-in-out ${0.15 + idx * 0.05}s both` }}>
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center">
                      <span className="text-base font-bold">{item.step}</span>
                    </div>
                    <div className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
                      <h3 className="text-xl font-semibold tracking-tight mb-2">{item.title}</h3>
                      <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="z-10 xl:py-24 mt-24 pt-12 pb-12 relative" id="skills">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both' }}>
            <div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center">
              <iconify-icon icon="solar:code-square-linear" width="14" height="14" class="text-white-400"></iconify-icon>
              <span className="text-xs text-white/70">Skills</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white mt-5 drop-shadow-xl font-semibold tracking-tight">Langages et frameworks</h2>
            <p className="text-base md:text-lg text-white/70 mt-4">Une stack complète pour concevoir, développer et livrer des applications web solides et maintenables.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both' }}>
              <h3 className="text-xl font-semibold text-white tracking-tight">Frontend</h3>
              <p className="mt-2 text-sm text-white/70">Interfaces modernes, interactives et rapides.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['JavaScript', 'HTML', 'CSS', 'React', 'Tailwind CSS', 'Bootstrap', 'Vite'].map(skill => <span key={skill} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">{skill}</span>)}
              </div>
            </div>

            <div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.25s both' }}>
              <h3 className="text-xl font-semibold text-white tracking-tight">Backend</h3>
              <p className="mt-2 text-sm text-white/70">Logique serveur, APIs et architecture applicative.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Node.js', 'Express', 'REST API', 'PHP', 'Laravel'].map(skill => <span key={skill} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">{skill}</span>)}
              </div>
            </div>

            <div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both' }}>
              <h3 className="text-xl font-semibold text-white tracking-tight">Base de données</h3>
              <p className="mt-2 text-sm text-white/70">Gestion fiable et structurée des données.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['MySQL'].map(skill => <span key={skill} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">{skill}</span>)}
              </div>
            </div>

            <div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.35s both' }}>
              <h3 className="text-xl font-semibold text-white tracking-tight">Outils & collaboration</h3>
              <p className="mt-2 text-sm text-white/70">Versioning, déploiement et travail en équipe.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Docker'].map(skill => <span key={skill} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">{skill}</span>)}
              </div>
            </div>

            <div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl md:col-span-2 lg:col-span-2" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.4s both' }}>
              <h3 className="text-xl font-semibold text-white tracking-tight">Approche produit</h3>
              <p className="mt-2 text-sm text-white/70">Je privilégie une stack lisible, cohérente et adaptée au besoin réel du projet, pour livrer une base stable et évolutive.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Architecture claire', 'Code maintenable', 'Performance', 'UX propre'].map(skill => <span key={skill} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">{skill}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="z-10 bg-center xl:pt-32 xl:pb-32 bg-cover mt-24 pt-32 pb-32 relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c06498e9-85e2-4173-a1f6-86b1267897f0_3840w.jpg)]" id="contact">
        <div className="lg:px-8 max-w-4xl mr-auto ml-auto pr-6 pl-6">
          <div className="border-gradient before:rounded-3xl md:p-12 animate-on-scroll text-center bg-white/5 rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-xl" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both' }}>
            <div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center mb-6">
              <iconify-icon icon="solar:letter-linear" width="14" height="14" class="text-white-400"></iconify-icon>
              <span className="text-xs text-white/70">Contact</span>
            </div>
            <h2 className="text-3xl md:text-5xl text-white mb-4 font-semibold tracking-tight">Vous avez un projet en tête ?</h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Que vous ayez une idée, un besoin précis ou un cahier des charges, je peux vous aider à le transformer en application concrète.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-8">
              <a href="mailto:bcdiakhate2108@gmail.com" className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:opacity-90 transition text-sm font-semibold text-black bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full px-6 py-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                Démarrer un projet
                <iconify-icon icon="solar:letter-linear" width="16" height="16"></iconify-icon>
              </a>
              <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3">
                Planifier un échange
                <iconify-icon icon="solar:calendar-linear" width="16" height="16"></iconify-icon>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/60 border-t border-white/10 pt-6">
              <a href="https://www.linkedin.com/in/baye-cheikh-diakhate-57b28b349/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition">
                <iconify-icon icon="simple-icons:linkedin" width="16" height="16"></iconify-icon> LinkedIn
              </a>
              <a href="https://www.instagram.com/cheikhoodx/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition">
                <iconify-icon icon="simple-icons:instagram" width="16" height="16"></iconify-icon> Instagram
              </a>
              <a href="https://x.com/CheikhDev21" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition">
                <iconify-icon icon="simple-icons:x" width="16" height="16"></iconify-icon> Twitter
              </a>
              <a href="https://www.tiktok.com/@cheikhoodx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition">
                <iconify-icon icon="simple-icons:tiktok" width="16" height="16"></iconify-icon> TikTok
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="z-10 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-white/[0.06] border-t mt-20 pt-12 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-lg font-semibold">Baye Cheikh Diakhate</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Développeur fullstack orienté produits, spécialisé dans les applications web modernes, rapides et centrées sur l’utilisateur.
                </p>
                <div className="flex items-center gap-3">
                  <a href="https://www.linkedin.com/in/baye-cheikh-diakhate-57b28b349/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" aria-label="LinkedIn profile">
                    <iconify-icon icon="simple-icons:linkedin" width="16" height="16"></iconify-icon>
                  </a>
                  <a href="https://www.instagram.com/cheikhoodx/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" aria-label="Instagram profile">
                    <iconify-icon icon="simple-icons:instagram" width="16" height="16"></iconify-icon>
                  </a>
                  <a href="https://x.com/CheikhDev21" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" aria-label="X profile">
                    <iconify-icon icon="simple-icons:x" width="16" height="16"></iconify-icon>
                  </a>
                  <a href="https://www.tiktok.com/@cheikhoodx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" aria-label="TikTok profile">
                    <iconify-icon icon="simple-icons:tiktok" width="16" height="16"></iconify-icon>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li><a href="#portfolio" className="text-sm text-white/60 hover:text-white transition">Projets</a></li>
                  <li><a href="#about" className="text-sm text-white/60 hover:text-white transition">À propos</a></li>
                  <li><a href="#skills" className="text-sm text-white/60 hover:text-white transition">Skills</a></li>
                  <li><a href="#services" className="text-sm text-white/60 hover:text-white transition">Services</a></li>
                  <li><a href="#process" className="text-sm text-white/60 hover:text-white transition">Process</a></li>
                  <li><a href="#contact" className="text-sm text-white/60 hover:text-white transition">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
                <ul className="space-y-3">
                  <li><a href="#services" className="text-sm text-white/60 hover:text-white transition">Applications Web</a></li>
                  <li><a href="#services" className="text-sm text-white/60 hover:text-white transition">APIs & Backend</a></li>
                  <li><a href="#services" className="text-sm text-white/60 hover:text-white transition">Interfaces & UX</a></li>
                  <li><a href="#services" className="text-sm text-white/60 hover:text-white transition">Performance & Qualité</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Get in Touch</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-white/60">
                    <iconify-icon icon="solar:letter-linear" width="16" height="16" class="mt-0.5 flex-shrink-0"></iconify-icon>
                    <a href="mailto:bcdiakhate2108@gmail.com" className="hover:text-white transition">bcdiakhate2108@gmail.com</a>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/60">
                    <iconify-icon icon="solar:phone-linear" width="16" height="16" class="mt-0.5 flex-shrink-0"></iconify-icon>
                    <span><a href="tel:+221781832240">+221 78 183 22 40</a></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/60">
                    <iconify-icon icon="solar:map-point-linear" width="16" height="16" class="mt-0.5 flex-shrink-0"></iconify-icon>
                    <span>Dakar, Senegal</span>
                  </li>
                  <li className="mt-4">
                    <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition xl:text-blue-400">
                      Planifier un échange
                      <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
              <p className="text-xs text-white/50 text-center md:text-left">
                © {new Date().getFullYear()} Baye Cheikh Diakhate. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-xs text-white/60">
                <a href="#contact" className="hover:text-white transition">Privacy Policy</a>
                <a href="#contact" className="hover:text-white transition">Terms of Service</a>
                <a href="#contact" className="hover:text-white transition">Cookie Policy</a>
                <a href="#contact" className="hover:text-white transition">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
}