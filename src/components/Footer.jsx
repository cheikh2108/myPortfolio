import React from 'react';

export default function Footer() {
  return (
    <footer className="z-10 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-white/[0.06] border-t mt-20 pt-12 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-semibold">Baye Cheikh Diakhate</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Développeur fullstack orienté produits, spécialisé dans les applications web modernes, rapides et centrées sur l'utilisateur.
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
                <a href="https://github.com/cheikh2108" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" aria-label="GitHub profile">
                  <iconify-icon icon="simple-icons:github" width="16" height="16"></iconify-icon>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-sm text-white/60 hover:text-white transition">À propos</a></li>
                <li><a href="#portfolio" className="text-sm text-white/60 hover:text-white transition">Projets</a></li>
                <li><a href="#skills" className="text-sm text-white/60 hover:text-white transition">Skills</a></li>
                <li><a href="#services" className="text-sm text-white/60 hover:text-white transition">Services</a></li>
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
                  <a href="mailto:cheikh.dev21@gmail.com" className="hover:text-white transition">cheikh.dev21@gmail.com</a>
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
  );
}
