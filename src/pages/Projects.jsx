import ProjectsHero from '../components/ProjectsHero';
import ProjectsList from '../components/ProjectsList';
import ProjectsMap from '../components/ProjectsMap';
import ProjectsImpact from '../components/ProjectsImpact';

function Projects() {
  return (
    <main className="pt-32">
      <ProjectsHero />
      <ProjectsList />
      <ProjectsMap />
      <ProjectsImpact />
    </main>
  );
}

export default Projects;