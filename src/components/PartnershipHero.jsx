function PartnershipHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-900 to-emerald-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="text-emerald-300 font-medium tracking-wider text-sm">PARTENARIAT ENTREPRISE</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Engagez votre entreprise dans une démarche solidaire
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Développez votre RSE en soutenant des projets à fort impact social et environnemental. 
              Ensemble, créons un partenariat sur mesure qui correspond à vos valeurs et objectifs.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-emerald-800 px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-100 transition-colors duration-300"
            >
              Devenir partenaire
              <span className="ml-2">→</span>
            </a>
          </div>
          <div className="relative">
            <img
              src="/partnership.jpg"
              alt="Partenariat entreprise"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🤝</div>
                <div>
                  <div className="text-2xl font-bold text-emerald-800">50+</div>
                  <div className="text-gray-600">Entreprises partenaires</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnershipHero;