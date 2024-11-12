function PartnershipBenefits() {
  const benefits = [
    {
      icon: "🎯",
      title: "RSE & Impact",
      description: "Renforcez votre démarche RSE avec des projets concrets et mesurables",
      points: [
        "Projets alignés avec les ODD",
        "Mesure d'impact détaillée",
        "Reporting personnalisé",
        "Communication transparente"
      ]
    },
    {
      icon: "💪",
      title: "Engagement des collaborateurs",
      description: "Mobilisez vos équipes autour de projets porteurs de sens",
      points: [
        "Mécénat de compétences",
        "Journées solidaires",
        "Team building solidaire",
        "Formations thématiques"
      ]
    },
    {
      icon: "📢",
      title: "Visibilité & Communication",
      description: "Valorisez votre engagement sociétal auprès de vos parties prenantes",
      points: [
        "Communication dédiée",
        "Contenu personnalisé",
        "Événements communs",
        "Relations presse"
      ]
    }
  ];

  const programs = [
    {
      title: "Programme Starter",
      price: "5 000€/an",
      features: [
        "1 projet dédié",
        "Rapport d'impact annuel",
        "Communication basique",
        "1 journée solidaire"
      ]
    },
    {
      title: "Programme Business",
      price: "15 000€/an",
      features: [
        "3 projets dédiés",
        "Rapports trimestriels",
        "Pack communication complet",
        "4 journées solidaires",
        "Formation RSE"
      ]
    },
    {
      title: "Programme Enterprise",
      price: "Sur mesure",
      features: [
        "Projets illimités",
        "Suivi personnalisé",
        "Stratégie RSE dédiée",
        "Events sur mesure",
        "Formation continue"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
            Les avantages du partenariat
          </h2>
          <p className="text-gray-600 text-lg">
            Un partenariat gagnant-gagnant pour votre entreprise et la société
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-emerald-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>
              <ul className="space-y-2">
                {benefit.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
            Nos programmes
          </h2>
          <p className="text-gray-600 text-lg">
            Choisissez la formule qui correspond le mieux à vos objectifs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
              <div className="text-3xl font-bold text-emerald-600 mb-6">{program.price}</div>
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors duration-300"
              >
                En savoir plus
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnershipBenefits;