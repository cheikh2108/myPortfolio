import React from 'react';

export default function ContactSection() {
  return (
    <section
      className="z-10 bg-center xl:pt-32 xl:pb-32 bg-cover mt-24 pt-32 pb-32 relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c06498e9-85e2-4173-a1f6-86b1267897f0_3840w.jpg)]"
      id="contact"
    >
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
            <a
              href="mailto:bcdiakhate2108@gmail.com"
              className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:opacity-90 transition text-sm font-semibold text-black bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full px-6 py-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
            >
              Démarrer un projet
              <iconify-icon icon="solar:letter-linear" width="16" height="16"></iconify-icon>
            </a>
            <a
              href="https://cal.com/cheikhoodx/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3"
            >
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
            <a href="https://github.com/cheikh2108" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition">
              <iconify-icon icon="simple-icons:github" width="16" height="16"></iconify-icon> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
