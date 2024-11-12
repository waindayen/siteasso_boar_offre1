function ActionWays() {
  const actions = [
    {
      title: "Faire un don",
      description: "Soutenez nos projets grâce à un don ponctuel ou mensuel. Chaque contribution compte pour réaliser nos missions.",
      icon: "💝",
      cta: {
        text: "Faire un don",
        link: "/faire-un-don"
      },
      benefits: [
        "Déduction fiscale de 66%",
        "Don sécurisé",
        "Reçu fiscal automatique",
        "Transparence sur l'utilisation"
      ]
    },
    {
      title: "Devenir bénévole",
      description: "Rejoignez notre communauté de bénévoles et participez activement à nos projets sur le terrain.",
      icon: "🤝",
      cta: {
        text: "Rejoindre l'équipe",
        link: "/benevolat"
      },
      benefits: [
        "Formation assurée",
        "Missions flexibles",
        "Impact direct",
        "Expérience enrichissante"
      ]
    },
    {
      title: "Parrainer un enfant",
      description: "Changez la vie d'un enfant en lui permettant d'accéder à l'éducation et à un avenir meilleur.",
      icon: "👶",
      cta: {
        text: "Parrainer",
        link: "/parrainage"
      },
      benefits: [
        "Suivi personnalisé",
        "Échanges réguliers",
        "Impact durable",
        "Relation privilégiée"
      ]
    },
    {
      title: "Entreprises partenaires",
      description: "Engagez votre entreprise dans une démarche solidaire et développez votre RSE avec nous.",
      icon: "🏢",
      cta: {
        text: "Devenir partenaire",
        link: "/partenariat"
      },
      benefits: [
        "Projets sur mesure",
        "Visibilité",
        "Impact social",
        "Engagement RSE"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {actions.map((action, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">{action.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{action.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{action.description}</p>
              
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">Les avantages :</h4>
                <ul className="space-y-2">
                  {action.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href={action.cta.link}
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors duration-300"
              >
                {action.cta.text}
                <span className="inline-block ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActionWays;