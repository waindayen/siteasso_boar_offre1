function ProjectsImpact() {
  const impacts = [
    {
      number: "50+",
      label: "Projets actifs",
      icon: "🌟"
    },
    {
      number: "25",
      label: "Pays d'intervention",
      icon: "🌍"
    },
    {
      number: "100k+",
      label: "Bénéficiaires",
      icon: "👥"
    },
    {
      number: "2M€",
      label: "Fonds collectés",
      icon: "💰"
    }
  ];

  const objectives = [
    {
      icon: "🎯",
      title: "Objectifs 2024",
      points: [
        "Lancer 20 nouveaux projets",
        "Étendre notre présence à 5 nouveaux pays",
        "Doubler le nombre de bénéficiaires",
        "Renforcer nos partenariats locaux"
      ]
    },
    {
      icon: "📊",
      title: "Notre impact",
      points: [
        "90% des fonds directement aux projets",
        "Suivi rigoureux des résultats",
        "Évaluation continue des besoins",
        "Transparence totale"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center transform transition-transform duration-300 hover:scale-105">
              <div className="text-4xl mb-4">{impact.icon}</div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">{impact.number}</div>
              <div className="text-gray-600 font-medium">{impact.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {objectives.map((objective, index) => (
            <div key={index} className="bg-emerald-50 rounded-xl p-8">
              <div className="text-4xl mb-6">{objective.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{objective.title}</h3>
              <ul className="space-y-4">
                {objective.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="/agir"
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-700 transition-colors duration-300"
          >
            Contribuer à notre impact
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsImpact;