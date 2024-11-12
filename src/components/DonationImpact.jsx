function DonationImpact() {
  const impacts = [
    {
      icon: "📚",
      title: "Éducation",
      description: "Votre don permet de fournir du matériel scolaire et de former des enseignants"
    },
    {
      icon: "🌱",
      title: "Environnement",
      description: "Nous plantons des arbres et sensibilisons à la protection de l'environnement"
    },
    {
      icon: "💧",
      title: "Eau potable",
      description: "Construction de puits et systèmes d'irrigation pour les communautés"
    },
    {
      icon: "🏥",
      title: "Santé",
      description: "Accès aux soins médicaux et programmes de prévention"
    }
  ];

  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
            L'impact de votre don
          </h2>
          <p className="text-gray-600 text-lg">
            66% de votre don est déductible de vos impôts. Un don de 100€ ne vous coûte que 34€ après déduction fiscale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{impact.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{impact.title}</h3>
              <p className="text-gray-600">{impact.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous nous engageons à utiliser vos dons de manière responsable et transparente. 
            Chaque année, nous publions un rapport détaillé de l'utilisation des fonds.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DonationImpact;