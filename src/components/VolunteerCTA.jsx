function VolunteerCTA() {
  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h2 className="font-display text-3xl font-bold mb-6">
                Vous avez des questions ?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre équipe est là pour vous guider dans votre démarche solidaire. 
                N'hésitez pas à nous contacter pour en savoir plus sur nos actions 
                et comment vous pouvez contribuer.
              </p>
              <div className="space-y-4">
                <a
                  href="/contact"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contactez-nous
                  <span className="inline-block ml-2">→</span>
                </a>
                <a
                  href="tel:+33123456789"
                  className="block text-emerald-600 hover:text-emerald-700"
                >
                  <span className="font-medium">Par téléphone :</span> +33 1 23 45 67 89
                </a>
              </div>
            </div>
            <div className="relative min-h-[400px]">
              <img
                src="/volunteer.jpg"
                alt="Volunteers working together"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VolunteerCTA;