import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed z-20 bg-black/50 w-full top-0 backdrop-blur-xl" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-6 border-b border-white/[0.06]">
          <a href="/" className="flex items-center gap-3">
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
            <a href="#about" className="hover:text-white transition">À propos</a>
            <a href="#portfolio" className="hover:text-white transition">Projets</a>
            <a href="#services" className="hover:text-white transition">Services</a>
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
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base text-white/70 hover:text-white transition py-2">À propos</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-base text-white/70 hover:text-white transition py-2">Projets</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base text-white/70 hover:text-white transition py-2">Services</a>
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
  );
}
