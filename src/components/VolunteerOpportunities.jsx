function VolunteerOpportunities() {
  const opportunities = [
    {
      icon: "🎓",
      title: "Éducation",
      description: "Participez à nos programmes éducatifs en tant que formateur ou mentor",
      missions: [
        "Animation d'ateliers",
        "Soutien scolaire",
        "Formation professionnelle",
        "Alphabétisation"
      ]
    },
    {
      icon: "🌱",
      title: "Environnement",
      description: "Contribuez à nos projets de protection de l'environnement",
      missions: [
        "Plantation d'arbres",
        "Sensibilisation écologique",
        "Gestion des déchets",
        "Agriculture durable"
      ]
    },
    {
      icon: "💻",
      title: "Communication",
      description: "Aidez-nous à sensibiliser et à mobiliser autour de nos actions",
      missions: [
        "Réseaux sociaux",
        "Création de contenu",
        "Relations presse",
        "Événementiel"
      ]
    },
    {
      icon: "📊",
      title: "Administration",
      description: "Soutenez notre organisation dans ses tâches administratives",
      missions: [
        "Gestion de projets",
        "Comptabilité",
        "Recherche de fonds",
        "Support logistique"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
            Nos opportunités de bénévolat
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Découvrez les différents domaines dans lesquels vous pouvez vous engager
          </p>
          <a
            href="#postuler"
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full text-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
          >
            Je veux m'engager
            <span className="ml-2">→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="bg-emerald-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">{opportunity.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
              <p className="text-gray-600 mb-6">{opportunity.description}</p>
              <div className="space-y-2 mb-6">
                {opportunity.missions.map((mission, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {mission}
                  </div>
                ))}
              </div>
              <a
                href="#postuler"
                className="inline-block text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Postuler pour cette mission
                <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-900 text-white rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Pourquoi nous rejoindre ?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Formation et accompagnement assurés</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Missions flexibles selon vos disponibilités</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Impact concret sur le terrain</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Expérience enrichissante et valorisante</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <a
                href="#postuler"
                className="inline-block bg-white text-emerald-800 px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-100 transition-colors duration-300"
              >
                Postuler maintenant
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VolunteerOpportunities;