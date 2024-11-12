function ProjectsHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-900 to-emerald-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-emerald-300 font-medium tracking-wider text-sm">NOS PROJETS</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Des actions concrètes pour un impact durable
          </h1>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Découvrez nos projets en cours et comment nous agissons concrètement 
            pour l'éducation, l'environnement et le développement durable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projets"
              className="bg-white text-emerald-800 px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-100 transition-colors duration-300"
            >
              Voir les projets
              <span className="ml-2">↓</span>
            </a>
            <a
              href="/agir"
              className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-700 transition-colors duration-300"
            >
              Soutenir un projet
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsHero;