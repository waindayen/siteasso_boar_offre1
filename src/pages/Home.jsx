import Hero from '../components/Hero';
import Impact from '../components/Impact';
import Projects from '../components/Projects';
import TestSupabase from '../components/TestSupabase';

function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <TestSupabase />
      </div>
      <Impact />
      <Projects />
    </main>
  );
}

export default Home;