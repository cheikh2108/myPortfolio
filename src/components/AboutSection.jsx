import React, { useEffect, useRef, useState } from 'react';
import myFace2 from '../images/myface2.png';

const aboutImages = [
  myFace2,
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70bb19b3-d51f-47a2-8020-6261061a6a14_3840w.jpg",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b854164-e5f6-4f39-a78c-f75ccbc5ff69_3840w.jpg",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04545374-057d-4527-9043-c2ee9b0d7f09_1600w.webp"
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        const idx = slideRefs.current.indexOf(visible.target);
        if (idx !== -1 && idx !== activeIndex) {
          setActiveIndex(idx);
        }
      }
    }, {
      root: scrollRef.current,
      threshold: [0.4, 0.7],
    });

    slideRefs.current.forEach(slide => {
      if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, [activeIndex]);

  return (
    <section className="z-10 xl:py-24 bg-center mt-24 pt-12 pb-12 relative" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          
          <div className="lg:col-span-5 relative overflow-hidden rounded-2xl h-[600px]">
            <div className="about-image-container absolute inset-0">
              {aboutImages.map((src, idx) => (
                <img 
                  key={idx}
                  src={src} 
                  alt={`Baye Cheikh Diakhate - View ${idx + 1}`} 
                  loading="lazy"
                  decoding="async"
                  className={`about-image aspect-square w-full h-full object-cover absolute inset-0 ${idx === activeIndex ? 'active' : ''}`}
                  style={{
                    transform: idx === activeIndex ? 'translateY(0)' : idx < activeIndex ? 'translateY(-24px)' : 'translateY(24px)',
                  }}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              ref={scrollRef}
              id="aboutScroll"
              data-lenis-prevent
              data-lenis-prevent-wheel
              data-lenis-prevent-touch
              className="h-[600px] overflow-y-auto snap-y snap-mandatory pr-1 scroll-smooth"
            >
              
              <article ref={el => slideRefs.current[0] = el} className={`about-content-item snap-start min-h-[600px] flex items-center ${activeIndex === 0 ? 'active' : ''}`}>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
                    <span className="text-xs text-white/70">À propos</span>
                  </div>
                  <h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Créer des applications utiles et performantes
                  </h2>
                  <p className="text-base md:text-lg text-white/70 mt-6">
                    Je suis Baye Cheikh Diakhate, développeur fullstack orienté produits, avec une forte appétence pour la création d’applications web modernes.
                  </p>
                  <p className="text-base md:text-lg text-white/70 mt-4">
                    J’interviens sur l’ensemble d’un projet, du backend à l’interface utilisateur, en privilégiant la performance, la simplicité et une expérience fluide.
                  </p>
                </div>
              </article>

              <article ref={el => slideRefs.current[1] = el} className={`about-content-item snap-start min-h-[600px] flex items-center ${activeIndex === 1 ? 'active' : ''}`}>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
                    <span className="text-xs text-white/70">Applications web</span>
                  </div>
                  <h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Concevoir des interfaces claires et efficaces
                  </h2>
                  <p className="text-base md:text-lg text-white/70 mt-6">
                    Des dashboards, plateformes et outils métiers pensés pour simplifier l’usage et accélérer les tâches.
                  </p>
                  <p className="text-base md:text-lg text-white/70 mt-4">
                    Je cherche à livrer des interfaces lisibles, stables et rapides, avec une attention constante à la qualité du code.
                  </p>
                </div>
              </article>

              <article ref={el => slideRefs.current[2] = el} className={`about-content-item snap-start min-h-[600px] flex items-center ${activeIndex === 2 ? 'active' : ''}`}>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
                    <span className="text-xs text-white/70">Backend & APIs</span>
                  </div>
                  <h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Connecter les briques du produit proprement
                  </h2>
                  <p className="text-base md:text-lg text-white/70 mt-6">
                    Je conçois des APIs et des systèmes backend qui structurent les données, sécurisent les échanges et facilitent l’évolution du produit.
                  </p>
                  <p className="text-base md:text-lg text-white/70 mt-4">
                    L’objectif est d’obtenir une base technique fiable, claire et facile à maintenir dans la durée.
                  </p>
                </div>
              </article>

              <article ref={el => slideRefs.current[3] = el} className={`about-content-item snap-start min-h-[600px] flex items-center ${activeIndex === 3 ? 'active' : ''}`}>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
                    <span className="text-xs text-white/70">Qualité & performance</span>
                  </div>
                  <h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Livrer une base solide et maintenable
                  </h2>
                  <p className="text-base md:text-lg text-white/70 mt-6">
                    Tests, optimisation et amélioration continue font partie de mon approche pour obtenir des applications rapides et robustes.
                  </p>
                  <p className="text-base md:text-lg text-white/70 mt-4">
                    Je privilégie des choix techniques simples, lisibles et efficaces pour éviter la complexité inutile.
                  </p>
                </div>
              </article>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="rounded-xl border-gradient before:rounded-xl bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border-gradient before:rounded-lg text-blue-400">
                    <iconify-icon icon="solar:medal-star-linear" width="20" height="20"></iconify-icon>
                  </div>
                  <h3 className="text-lg font-semibold">2+ ans</h3>
                </div>
                <p className="text-sm text-white/60">
                  Expérience orientée développement web et produits digitaux
                </p>
              </div>

              <div className="overflow-hidden border-gradient before:rounded-2xl bg-white/5 rounded-2xl p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border-gradient before:rounded-lg text-cyan-400">
                    <iconify-icon icon="solar:cup-star-linear" width="20" height="20"></iconify-icon>
                  </div>
                  <h3 className="text-lg font-semibold">Qualité produit</h3>
                </div>
                <p className="text-sm text-white/60">
                  Focus sur la qualité, la fiabilité et l’expérience utilisateur
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a href="#contact" className="group inline-flex min-w-[140px] transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white text-sm font-medium text-white/80 bg-white/5 rounded-full px-5 py-3 relative backdrop-blur-xl items-center justify-center">
                <span>Parlons du projet</span>
                <span aria-hidden="true" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{ background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)' }}></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}