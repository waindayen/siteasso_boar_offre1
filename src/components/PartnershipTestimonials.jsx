function PartnershipTestimonials() {
  const testimonials = [
    {
      quote: "Notre partenariat avec EcoSolidaire a permis de concrétiser notre engagement RSE et de fédérer nos équipes autour de projets porteurs de sens.",
      author: "Sophie Martin",
      role: "Directrice RSE, Entreprise A",
      logo: "/partner-1.png"
    },
    {
      quote: "Un accompagnement professionnel et des projets à fort impact qui correspondent parfaitement à nos valeurs d'entreprise.",
      author: "Pierre Dubois",
      role: "PDG, Entreprise B",
      logo: "/partner-2.png"
    },
    {
      quote: "Grâce à ce partenariat, nous avons pu développer des actions concrètes et mesurables en faveur de l'environnement et de l'éducation.",
      author: "Marie Lambert",
      role: "Responsable Communication, Entreprise C",
      logo: "/partner-3.png"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">
          Ils nous font confiance
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-emerald-50 rounded-xl p-8">
              <img
                src={testimonial.logo}
                alt="Logo partenaire"
                className="h-12 mb-6"
              />
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <div className="font-bold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnershipTestimonials;