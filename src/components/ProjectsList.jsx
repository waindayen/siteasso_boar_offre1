import { Link } from 'react-router-dom';

function ProjectsList() {
  const categories = [
    { id: 'all', name: 'Tous les projets' },
    { id: 'education', name: 'Éducation' },
    { id: 'environment', name: 'Environnement' },
    { id: 'water', name: "Accès à l'eau" },
    { id: 'health', name: 'Santé' }
  ];

  const projects = [
    {
      id: 1,
      title: "École primaire au Sénégal",
      description: "Construction et équipement d'une école de 6 classes pour 180 enfants",
      category: "education",
      location: "Sénégal",
      image: "/projects/school-senegal.jpg",
      progress: 75,
      goal: 50000,
      raised: 37500
    },
    {
      id: 2,
      title: "Reforestation Madagascar",
      description: "Plantation de 10 000 arbres et formation à l'agroforesterie",
      category: "environment",
      location: "Madagascar",
      image: "/projects/forest-madagascar.jpg",
      progress: 60,
      goal: 30000,
      raised: 18000
    }
  ];

  return (
    <section id="projets" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className="px-6 py-2 rounded-full text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors duration-300"
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.location}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{project.raised.toLocaleString('fr-FR')}€ collectés</span>
                    <span>Objectif : {project.goal.toLocaleString('fr-FR')}€</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-emerald-500 h-2 rounded-full"
                      style={{width: `${project.progress}%`}}
                    ></div>
                  </div>
                </div>
                <Link
                  to={`/projets/${project.id}/soutenir`}
                  className="block text-center bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors duration-300"
                >
                  Soutenir ce projet
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsList;