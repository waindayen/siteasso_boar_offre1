import React from 'react';

function Impact() {
  const stats = [
    {
      number: "10K+",
      label: "Enfants soutenus",
      icon: "👥"
    },
    {
      number: "50+",
      label: "Projets réalisés",
      icon: "🌟"
    },
    {
      number: "25",
      label: "Pays d'action",
      icon: "🌍"
    },
    {
      number: "1000+",
      label: "Bénévoles",
      icon: "❤️"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-emerald-600 font-medium tracking-wider text-sm">NOTRE IMPACT</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Des actions concrètes pour un changement durable
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center transform transition-transform duration-300 hover:scale-105 p-4">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-5xl font-bold text-emerald-600 mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;