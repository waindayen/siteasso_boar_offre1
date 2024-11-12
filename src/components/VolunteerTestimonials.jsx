function VolunteerTestimonials() {
  const testimonials = [
    {
      quote: "Être bénévole chez EcoSolidaire m'a permis de donner du sens à mon engagement et de rencontrer des personnes extraordinaires.",
      author: "Marie L.",
      role: "Bénévole depuis 2 ans",
      image: "/volunteer-1.jpg"
    },
    {
      quote: "Une expérience enrichissante qui m'a fait grandir personnellement et professionnellement. Je recommande à 100% !",
      author: "Thomas B.",
      role: "Bénévole depuis 1 an",
      image: "/volunteer-2.jpg"
    },
    {
      quote: "J'apprécie particulièrement la flexibilité des missions et l'accompagnement de qualité fourni par l'équipe.",
      author: "Sarah M.",
      role: "Bénévole depuis 6 mois",
      image: "/volunteer-3.jpg"
    }
  ];

  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">
          Ils témoignent
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-lg mb-6">Vous aussi, rejoignez notre communauté de bénévoles engagés</p>
          <a
            href="#postuler"
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full text-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
          >
            Je deviens bénévole
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default VolunteerTestimonials;