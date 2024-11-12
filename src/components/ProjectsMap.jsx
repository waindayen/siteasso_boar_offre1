function ProjectsMap() {
  const regions = [
    {
      name: "Afrique",
      projects: 15,
      countries: ["Sénégal", "Mali", "Madagascar", "Maroc"],
      coordinates: { x: 45, y: 45 }
    },
    {
      name: "Asie",
      projects: 12,
      countries: ["Cambodge", "Vietnam", "Laos"],
      coordinates: { x: 70, y: 35 }
    },
    {
      name: "Amérique Latine",
      projects: 8,
      countries: ["Pérou", "Bolivie", "Équateur"],
      coordinates: { x: 25, y: 55 }
    }
  ];

  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
            Notre présence dans le monde
          </h2>
          <p className="text-gray-600 text-lg">
            Découvrez où nous agissons et l'impact de nos projets à travers le monde
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/world-map.svg"
              alt="Carte du monde"
              className="w-full"
            />
            {regions.map((region, index) => (
              <div
                key={index}
                className="absolute w-4 h-4 bg-emerald-500 rounded-full cursor-pointer transform hover:scale-150 transition-transform duration-300"
                style={{left: `${region.coordinates.x}%`, top: `${region.coordinates.y}%`}}
              >
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-lg shadow-lg opacity-0 pointer-events-none transition-opacity duration-300 whitespace-nowrap">
                  <strong>{region.name}</strong>
                  <p className="text-sm text-gray-600">{region.projects} projets</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-8">
            {regions.map((region, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{region.name}</h3>
                <p className="text-gray-600 mb-4">
                  {region.projects} projets actifs dans {region.countries.length} pays
                </p>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country, idx) => (
                    <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-600">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsMap;