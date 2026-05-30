import React from 'react';

const services = [
  {
    icon: 'solar:monitor-smartphone-linear',
    gradient: 'from-violet-500/20 to-fuchsia-500/20',
    iconColor: 'text-violet-400',
    title: 'Applications Web',
    desc: "Création d'applications web modernes, dashboards, plateformes et outils métiers adaptés à vos besoins.",
    tags: ['Dashboards', 'Plateformes', 'Outils métiers'],
    delay: 0.2,
  },
  {
    icon: 'solar:server-2-linear',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400',
    title: 'APIs & Backend',
    desc: "Conception d'API, logique serveur, authentification et automatisation des processus pour connecter vos applications.",
    tags: ['REST', 'Auth', 'Automatisation'],
    delay: 0.25,
  },
  {
    icon: 'solar:palette-round-linear',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
    title: 'Interfaces & UX',
    desc: "Création d'interfaces modernes, interactives et optimisées pour une navigation fluide et intuitive.",
    tags: ['UI', 'Design system', 'Expérience utilisateur'],
    delay: 0.3,
  },
  {
    icon: 'solar:code-square-linear',
    gradient: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400',
    title: 'Performance & Qualité',
    desc: 'Optimisation des performances, qualité du code, tests et bonnes pratiques pour livrer des solutions fiables.',
    tags: ['Tests', 'Clean code', 'Maintenance'],
    delay: 0.4,
  },
  {
    icon: 'solar:layers-linear',
    gradient: 'from-sky-500/20 to-indigo-500/20',
    iconColor: 'text-sky-300',
    title: 'Architecture technique',
    desc: "Mise en place d'une base claire pour faire évoluer le projet sans complexité inutile.",
    tags: ['Structure', 'Scalabilité', 'Clarté'],
    delay: 0.45,
  },
  {
    icon: 'solar:refresh-linear',
    gradient: 'from-fuchsia-500/20 to-rose-500/20',
    iconColor: 'text-fuchsia-300',
    title: 'Maintenance & évolutivité',
    desc: "Suivi des corrections, améliorations et évolutions pour garder une application saine dans le temps.",
    tags: ['Support', 'Évolutions', 'Stabilité'],
    delay: 0.5,
  },
];

export default function ServicesSection() {
  return (
    <section
      className="z-10 xl:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92d0c40f-f813-47fd-a53a-5def9c2ca85c_800w.webp)] bg-cover mt-24 pt-12 pb-12 relative"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl animate-on-scroll" style={{ animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both' }}>
          <div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center">
            <iconify-icon icon="solar:box-linear" width="14" height="14" class="text-white-400"></iconify-icon>
            <span className="text-xs text-white/70">Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-white mt-5 drop-shadow-xl font-semibold tracking-tight">Ce que je propose</h2>
          <p className="text-base md:text-lg text-white/70 mt-4">Des solutions web complètes, du backend à l'interface, pensées pour la performance et la clarté.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl"
              style={{ animation: `fadeSlideIn 0.5s ease-in-out ${s.delay}s both` }}
            >
              <div className={`flex border-gradient before:rounded-lg bg-gradient-to-br ${s.gradient} w-12 h-12 rounded-lg items-center justify-center mb-4 ${s.iconColor}`}>
                <iconify-icon icon={s.icon} width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
