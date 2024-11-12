function Projects() {
  const projects = [
    {
      title: "Éducation pour tous",
      description: "Construction d'écoles et formation des enseignants dans les zones rurales",
      image: "/education.jpg",
      category: "Éducation"
    },
    {
      title: "Reforestation",
      description: "Plantation d'arbres et sensibilisation à la protection de l'environnement",
      image: "/reforestation.jpg",
      category: "Écologie"
    },
    {
      title: "Accès à l'eau",
      description: "Installation de puits et systèmes d'irrigation durables",
      image: "/water.jpg",
      category: "Infrastructure"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-600 font-medium tracking-wider text-sm">NOS PROJETS</span>
          <h2 className="font-display text-4xl font-bold text-gray-900 mt-4">Nos projets phares</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a
                  href="/projets"
                  className="inline-flex items-center text-emerald-600 font-medium group-hover:text-emerald-700"
                >
                  En savoir plus
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;