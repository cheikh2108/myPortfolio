import React, { useState } from 'react';
import studyMatiere from '../images/study-planner-dashboard.webp';
import todolist from '../images/todolist.webp';
import tackoMenu from '../images/tackodelices-hero-section.webp';
import difashionCollection from '../images/djifashion-hero.webp';
import cloudFichier from '../images/cloud-dashboard.webp';
import voteSection from '../images/vote-hero.jpeg';

const portfolioItems = [
  { cat: 'product',   img: studyMatiere,       title: 'MyStudyPlanner',    desc: 'Gestion de tâches académiques • 2026',                                                                                           tags: ['React', 'Vite', 'Tailwind'],                    github: 'https://github.com/cheikh2108/MyStudyPlanner',      site: 'https://mystudyplanner.appwrite.network/' },
  { cat: 'product',   img: todolist,           title: 'TodoList',          desc: 'Application de gestion de tâches simple, rapide et responsive • 2026',                                                          tags: ['First Project', 'React', 'Appwrite'],           github: 'https://github.com/cheikh2108/todolist-react',      site: 'https://todolist-react.appwrite.network' },
  { cat: 'product',   img: tackoMenu,          title: 'Tacko Délices',     desc: 'Application web de restaurant avec gestion en temps réel • 2026',                                                               tags: ['React', 'Supabase'],                            github: 'https://github.com/cheikh2108/Tacko-delices',       site: 'https://www.tackodelices.foo' },
  { cat: 'wordpress', img: difashionCollection,title: 'DJI Fashion',       desc: 'Boutique mode élégante avec catalogue produits, gestion panier et paiement sécurisé • 2026',                                   tags: ['WordPress', 'WooCommerce', 'E-commerce'],                                                                    site: 'https://djifashion.com/' },
  { cat: 'devops',    img: cloudFichier,       title: 'Arsonry Local Cloud',desc: 'Système de mini-cloud interne fournissant DNS, SMB, FTP, HTTP, bases de données et interface de gestion de fichiers avec quotas.', tags: ['Docker', 'DevOps'],                           github: 'https://github.com/ibzocraft/arsonry-local-cloud' },
  { cat: 'product',   img: voteSection,        title: 'Plateforme-vote',   desc: "Plateforme électorale sécurisée et anonyme pour les établissements avec vérification d'accès, scrutin anonyme et suivi administratif en temps réel • 2026", tags: ['Next.js', 'TypeScript', 'Supabase'], github: 'https://github.com/cheikh2108/Plateforme-vote', site: 'https://plateforme-vote.vercel.app' },
];

const portfolioFilters = [
  { value: 'all',       label: 'Tous' },
  { value: 'product',   label: 'Applications web' },
  { value: 'devops',    label: 'Docker & déploiement' },
  { value: 'wordpress', label: 'WordPress & e-commerce' },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section className="z-10 xl:py-24 mt-24 pt-12 pb-12 relative" id="portfolio">
      <div className="container lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
        <div className="max-w-3xl animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both' }}>
          <div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center">
            <iconify-icon icon="solar:gallery-linear" width="14" height="14" class="text-white-400"></iconify-icon>
            <span className="text-xs text-white/70">Projets sélectionnés</span>
          </div>
          <h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tight mt-5 drop-shadow-xl">
            Mes réalisations web
          </h2>
          <p className="text-base md:text-lg text-white/70 mt-4">
            Une sélection de projets web conçus pour être rapides, clairs et utiles.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-10 animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.15s both' }}>
          {portfolioFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`filter-btn px-4 py-2 rounded-full border border-white/10 text-sm transition ${activeFilter === filter.value ? 'active bg-white/10 text-white/80' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
              aria-pressed={activeFilter === filter.value}
              type="button"
            >
              {filter.label}
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
                <img src={item.img} alt={item.title} className="w-full aspect-square object-cover object-left" loading="lazy" decoding="async" />
                <div className="portfolio-overlay">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/20 flex gap-2 flex-wrap">
                    {item.site && (
                      <a href={item.site} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition inline-flex items-center gap-1">
                        <iconify-icon icon="solar:arrow-right-up-linear" width="14" height="14"></iconify-icon>
                        Voir le site
                      </a>
                    )}
                    {item.github && (
                      <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 transition inline-flex items-center gap-1">
                        <iconify-icon icon="simple-icons:github" width="14" height="14"></iconify-icon>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both' }}>
          <a href="https://github.com/cheikh2108" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3">
            Voir tout le portfolio
            <iconify-icon icon="simple-icons:github" width="16" height="16"></iconify-icon>
          </a>
        </div>
      </div>
    </section>
  );
}
