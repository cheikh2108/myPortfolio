import React from 'react';

const skillGroups = [
  {
    title: 'Frontend',
    desc: 'Interfaces modernes, interactives et rapides.',
    skills: ['JavaScript', 'HTML', 'CSS', 'React', 'Tailwind CSS', 'Bootstrap', 'Vite'],
    delay: 0.2,
    span: '',
  },
  {
    title: 'Backend',
    desc: 'Logique serveur, APIs et architecture applicative.',
    skills: ['Node.js', 'Express', 'REST API', 'PHP', 'Laravel'],
    delay: 0.25,
    span: '',
  },
  {
    title: 'Base de données',
    desc: 'Gestion fiable et structurée des données.',
    skills: ['MySQL', 'Supabase'],
    delay: 0.3,
    span: '',
  },
  {
    title: 'Outils & collaboration',
    desc: 'Versioning, déploiement et travail en équipe.',
    skills: ['Git', 'GitHub', 'Docker'],
    delay: 0.35,
    span: '',
  },
  {
    title: 'Approche produit',
    desc: 'Je privilégie une stack lisible, cohérente et adaptée au besoin réel du projet, pour livrer une base stable et évolutive.',
    skills: ['Architecture claire', 'Code maintenable', 'Performance', 'UX propre'],
    delay: 0.4,
    span: 'md:col-span-2 lg:col-span-2',
  },
];

export default function SkillsSection() {
  return (
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
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl ${group.span}`}
              style={{ animation: `fadeSlideIn 0.5s ease-in-out ${group.delay}s both` }}
            >
              <h3 className="text-xl font-semibold text-white tracking-tight">{group.title}</h3>
              <p className="mt-2 text-sm text-white/70">{group.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
