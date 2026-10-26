import React from 'react';
import myFace2 from '../images/myface2.webp';

export default function AboutSection() {
  return (
    <section className="z-10 xl:py-24 mt-24 pt-12 pb-12 relative" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-center">

          <div className="lg:col-span-5 relative animate-on-scroll" style={{ animation: 'fadeSlideIn 0.6s ease-in-out 0.1s both' }}>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] max-h-[600px]">
              <img
                src={myFace2}
                alt="Baye Cheikh Diakhate"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur mb-5 animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.15s both' }}>
              <span className="text-xs text-white/70">À propos</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-white font-semibold tracking-tight leading-tight drop-shadow-xl animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both' }}>
              Créer des applications utiles et performantes
            </h2>

            <div className="mt-6 space-y-4 text-base md:text-lg text-white/70 leading-relaxed animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.28s both' }}>
              <p>
                Je suis Baye Cheikh Diakhate, développeur fullstack orienté produits, avec une forte appétence pour la création d'applications web modernes.
              </p>
              <p>
                J'interviens sur l'ensemble d'un projet, du backend à l'interface utilisateur, en privilégiant la performance, la simplicité et une expérience fluide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="rounded-xl border-gradient before:rounded-xl bg-white/5 p-6 animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.35s both' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border-gradient before:rounded-lg text-blue-400">
                    <iconify-icon icon="solar:medal-star-linear" width="20" height="20"></iconify-icon>
                  </div>
                  <h3 className="text-lg font-semibold">3 plateformes SaaS</h3>
                </div>
                <p className="text-sm text-white/60">
                  Gestion Immo, Planora360 et SatisClient, conçues du backend à l'interface
                </p>
              </div>

              <div className="overflow-hidden border-gradient before:rounded-2xl bg-white/5 rounded-2xl p-6 backdrop-blur-xl animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.42s both' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border-gradient before:rounded-lg text-cyan-400">
                    <iconify-icon icon="solar:cup-star-linear" width="20" height="20"></iconify-icon>
                  </div>
                  <h3 className="text-lg font-semibold">Qualité produit</h3>
                </div>
                <p className="text-sm text-white/60">
                  Focus sur la qualité, la fiabilité et l'expérience utilisateur
                </p>
              </div>
            </div>

            <div className="mt-8 animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both' }}>
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
