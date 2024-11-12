function MissionValues() {
  const values = [
    {
      icon: "🎓",
      title: "Éducation",
      description: "Nous croyons que l'éducation est la clé pour briser le cycle de la pauvreté et créer des opportunités durables pour tous.",
      points: [
        "Accès à une éducation de qualité",
        "Formation des enseignants",
        "Fourniture de matériel scolaire",
        "Programmes d'alphabétisation"
      ]
    },
    {
      icon: "🌱",
      title: "Écologie",
      description: "La protection de l'environnement est au cœur de nos actions pour assurer un avenir durable aux générations futures.",
      points: [
        "Reforestation et biodiversité",
        "Éducation environnementale",
        "Agriculture durable",
        "Gestion des déchets"
      ]
    },
    {
      icon: "🤝",
      title: "Solidarité",
      description: "Nous construisons des ponts entre les communautés et encourageons l'entraide pour un impact plus fort.",
      points: [
        "Projets communautaires",
        "Aide d'urgence",
        "Soutien aux familles",
        "Développement local"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-6">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{value.description}</p>
              <ul className="space-y-3">
                {value.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <h2 className="font-display text-3xl font-bold mb-8">Rejoignez notre mission</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/agir"
              className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
            >
              Comment agir
              <span className="inline-block ml-2">→</span>
            </a>
            <a
              href="/contact"
              className="bg-gray-100 text-gray-800 px-8 py-4 rounded-full text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Contactez-nous
              <span className="inline-block ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionValues;