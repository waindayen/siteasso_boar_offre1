import Database from 'better-sqlite3';

const db = new Database('database.sqlite');

// Sample project data
const sampleProjects = [
  {
    title: "École primaire au Sénégal",
    description: "Construction et équipement d'une école de 6 classes",
    category: "education",
    location: "Sénégal",
    image: "/education.jpg",
    progress: 75,
    goal: 50000,
    raised: 37500,
    startDate: new Date('2024-01-01').toISOString(),
    endDate: new Date('2024-12-31').toISOString()
  }
];

try {
  // Insert sample projects
  const stmt = db.prepare(`
    INSERT INTO projects (
      title, description, category, location, image, 
      progress, goal, raised, startDate, endDate
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const project of sampleProjects) {
    stmt.run(
      project.title,
      project.description,
      project.category,
      project.location,
      project.image,
      project.progress,
      project.goal,
      project.raised,
      project.startDate,
      project.endDate
    );
  }

  console.log('Database initialized successfully');
} catch (error) {
  console.error('Error initializing database:', error);
}