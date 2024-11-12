function SponsorshipProcess() {
  const steps = [
    {
      icon: "✍️",
      title: "Inscription",
      description: "Remplissez le formulaire de parrainage avec vos informations"
    },
    {
      icon: "🤝",
      title: "Mise en relation",
      description: "Nous vous présentons l'enfant que vous allez parrainer"
    },
    {
      icon: "📬",
      title: "Premier contact",
      description: "Recevez une lettre et des photos de votre filleul(e)"
    },
    {
      icon: "💌",
      title: "Suivi régulier",
      description: "Échangez des nouvelles et suivez ses progrès"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
            Comment fonctionne le parrainage ?
          </h2>
          <p className="text-gray-600 text-lg">
            Un processus simple pour créer un lien unique et durable avec votre filleul(e)
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-emerald-200"></div>
              )}
              <div className="bg-emerald-50 p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-50 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Votre parrainage comprend
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Scolarité et fournitures scolaires</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Suivi médical régulier</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Activités extra-scolaires</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Correspondance régulière</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">30€/mois</div>
              <p className="text-gray-600 mb-4">soit 10,20€ après déduction fiscale</p>
              <a
                href="#parrainer"
                className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-700 transition-colors duration-300"
              >
                Je parraine maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsorshipProcess;