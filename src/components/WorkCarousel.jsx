import React from 'react';

const cardsData = [
  {
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/591d6a3f-93a6-4185-a67b-d397be21fd6a_1600w.jpg",
    icon: "solar:monitor-linear",
    category: "Web App • Dashboard",
    title: "Admin Analytics",
    desc: "Tableau de bord pour piloter les métriques clés"
  },
  {
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/103e9b5d-1921-4cd5-a80d-9445881f318d_1600w.webp",
    icon: "solar:server-linear",
    category: "Backend • API",
    title: "Service Connect",
    desc: "API sécurisée pour synchroniser les données"
  },
  {
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/564dc5fb-0d4e-42cb-9136-c3b630185122_1600w.webp",
    icon: "solar:palette-linear",
    category: "UI • Design System",
    title: "Interface Kit",
    desc: "Composants cohérents pour accélérer le développement"
  },
  {
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49aac4dd-9624-4c88-ab00-4c68f0f0bfe8_1600w.jpg",
    icon: "solar:code-square-linear",
    category: "Fullstack • Product",
    title: "Client Portal",
    desc: "Espace client pour gérer les demandes et le suivi"
  },
  {
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d030941-0aa9-425b-908f-655b1984c946_1600w.jpg",
    icon: "solar:shield-check-linear",
    category: "Performance • Quality",
    title: "Core Stack",
    desc: "Base technique stable, testée et maintenable"
  }
];

export default function WorkCarousel() {
  return (
    <section data-section className="xl:pt-24 pt-32 pb-32">
      <div className="container max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
        <div className="max-w-3xl animate-on-scroll" style={{ animation: 'fadeSlideIn 0.6s ease-in-out 0.1s both' }}>
          <h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tight mt-5 drop-shadow-xl">
            Aperçu de projets web
          </h2>
          <p className="text-base md:text-lg text-white/70 mt-4">
            Une sélection de réalisations orientées produit, backend et expérience utilisateur.
          </p>
        </div>
        
        <div className="relative mt-8 animate-on-scroll" style={{ animation: 'fadeSlideIn 0.7s ease-in-out 0.2s both' }}>
          <div 
            className="flex overflow-x-auto md:gap-8 md:pt-16 md:px-8 max-w-7xl pt-6 pr-8 pb-6 pl-8 gap-x-6 gap-y-6" 
            style={{ WebkitOverflowScrolling: 'touch' }} 
            id="work-carousel"
          >
            {cardsData.map((card, idx) => {
              const delay = 0.22 + idx * 0.08;
              return (
                <article 
                  key={idx}
                  className="group relative shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 bg-neutral-900/40 animate-on-scroll shadow-[0_25px_100px_-20px_rgba(0,0,0,0.7)] ring-white/20"
                  style={{
                    transition: 'transform 300ms ease, opacity 300ms ease',
                    animation: `fadeSlideIn 0.7s ease-in-out ${delay}s both`
                  }}
                >
                  <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <div className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
                        <iconify-icon icon={card.icon} class="text-lime-300" width="14" height="14"></iconify-icon>
                      </span>
                      {card.category}
                    </div>
                    <div className="mt-2.5 flex items-end justify-between gap-3">
                      <div>
                        <h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                          {card.title}
                        </h3>
                        <p className="text-sm md:text-base text-white/70">
                          {card.desc}
                        </p>
                      </div>
                      <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" aria-label={`Open ${card.title} project details`}>
                        <iconify-icon icon="solar:arrow-right-up-linear" width="20" height="20"></iconify-icon>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)' }}></div>
    </section>
  );
}