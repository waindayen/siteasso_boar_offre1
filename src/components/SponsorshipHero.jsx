function SponsorshipHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-900 to-emerald-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="text-emerald-300 font-medium tracking-wider text-sm">PARRAINAGE</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Changez la vie d'un enfant pour toujours
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Pour 30€ par mois, vous permettez à un enfant d'accéder à l'éducation, 
              aux soins de santé et à un avenir meilleur. Votre parrainage crée un 
              lien unique et transforme des vies.
            </p>
            <a
              href="#parrainer"
              className="inline-block bg-white text-emerald-800 px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-100 transition-colors duration-300"
            >
              Je parraine un enfant
              <span className="ml-2">→</span>
            </a>
          </div>
          <div className="relative">
            <img
              src="/children-education.jpg"
              alt="Enfants à l'école"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="text-4xl">💝</div>
                <div>
                  <div className="text-2xl font-bold text-emerald-800">1000+</div>
                  <div className="text-gray-600">Enfants parrainés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsorshipHero;