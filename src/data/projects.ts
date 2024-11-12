// Project data store
export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  image: string;
  progress: number;
  goal: number;
  raised: number;
  startDate: string;
  endDate: string;
  details: {
    challenge: string;
    solution: string;
    impact: string;
  };
  updates: Array<{
    date: string;
    title: string;
    content: string;
  }>;
  gallery: Array<{
    url: string;
    caption: string;
  }>;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "École primaire au Sénégal",
    description: "Construction et équipement d'une école de 6 classes pour 180 enfants",
    category: "education",
    location: "Sénégal",
    image: "/projects/school-senegal.jpg",
    progress: 75,
    goal: 50000,
    raised: 37500,
    startDate: "2023-09-01",
    endDate: "2024-08-31",
    details: {
      challenge: "Dans cette région rurale du Sénégal, plus de 200 enfants n'ont pas accès à l'éducation en raison de l'absence d'infrastructure scolaire adaptée.",
      solution: "Construction d'une école primaire moderne de 6 salles de classe, équipée de mobilier scolaire et de matériel pédagogique.",
      impact: "180 enfants scolarisés chaque année, création d'emplois locaux, développement communautaire."
    },
    updates: [
      {
        date: "2024-01-15",
        title: "Début de la construction",
        content: "Les travaux de fondation ont démarré avec la participation de la communauté locale."
      },
      {
        date: "2023-12-01",
        title: "Validation des plans",
        content: "Les plans architecturaux ont été approuvés par les autorités locales."
      }
    ],
    gallery: [
      {
        url: "/projects/school-1.jpg",
        caption: "Terrain du futur établissement"
      },
      {
        url: "/projects/school-2.jpg",
        caption: "Réunion avec la communauté"
      },
      {
        url: "/projects/school-3.jpg",
        caption: "Plans de l'école"
      }
    ]
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
    raised: 18000,
    startDate: "2023-10-01",
    endDate: "2024-09-30",
    details: {
      challenge: "La déforestation menace la biodiversité unique de Madagascar et les moyens de subsistance des communautés locales.",
      solution: "Programme de reforestation participative avec formation aux techniques d'agroforesterie durables.",
      impact: "Restauration de l'écosystème, création d'emplois verts, sécurité alimentaire améliorée."
    },
    updates: [
      {
        date: "2024-01-10",
        title: "Première phase de plantation",
        content: "5000 arbres plantés avec la participation de la communauté locale."
      }
    ],
    gallery: [
      {
        url: "/projects/forest-1.jpg",
        caption: "Site de reforestation"
      },
      {
        url: "/projects/forest-2.jpg",
        caption: "Formation des agriculteurs"
      }
    ]
  }
];