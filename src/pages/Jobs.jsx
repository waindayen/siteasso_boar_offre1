import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getJobs } from '../lib/services/jobService';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const jobsData = await getJobs();
      setJobs(jobsData.filter(job => job.status === 'active'));
    } catch (error) {
      console.error('Error loading jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section - Responsive */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 py-16 sm:py-20 px-4 mt-16 sm:mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-emerald-300 font-medium tracking-wider text-sm">CARRIÈRES</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-4 sm:mb-6">
              Rejoignez notre équipe
            </h1>
            <p className="text-lg sm:text-xl text-emerald-100 leading-relaxed">
              Donnez du sens à votre carrière en contribuant à des projets à fort impact social et environnemental
            </p>
          </div>
        </div>
      </section>

      {/* Jobs List - Responsive */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 sm:gap-8">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 sm:mb-6">
                  <div className="w-full sm:w-auto">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{job.title}</h2>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <span className="inline-block bg-emerald-100 text-emerald-800 px-2 sm:px-3 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                      <span className="inline-block bg-emerald-100 text-emerald-800 px-2 sm:px-3 py-1 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="inline-block bg-emerald-100 text-emerald-800 px-2 sm:px-3 py-1 rounded-full text-sm">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/offres/${job.id}/postuler`}
                    className="w-full sm:w-auto text-center bg-emerald-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-emerald-700 transition-colors"
                  >
                    Postuler
                  </Link>
                </div>
                
                <div className="prose max-w-none mb-6">
                  <p className="text-gray-600 text-sm sm:text-base">{job.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3">Responsabilités</h3>
                    <div className="text-gray-600 text-sm sm:text-base whitespace-pre-line">
                      {job.responsibilities}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3">Prérequis</h3>
                    <div className="text-gray-600 text-sm sm:text-base whitespace-pre-line">
                      {job.requirements}
                    </div>
                  </div>
                </div>

                {job.salary && (
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
                    <p className="text-gray-600 text-sm sm:text-base">
                      <span className="font-semibold text-gray-900">Salaire : </span>
                      {job.salary}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {jobs.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <p className="text-gray-500">Aucune offre d'emploi disponible pour le moment</p>
              <p className="text-gray-500 mt-2">Revenez bientôt pour découvrir nos futures opportunités</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-24 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Vous ne trouvez pas le poste idéal ?
            </h2>
            <p className="text-emerald-100 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Envoyez-nous une candidature spontanée ! Nous sommes toujours à la recherche 
              de talents passionnés qui partagent nos valeurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-emerald-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-emerald-100 transition-colors duration-300"
              >
                Candidature spontanée
                <span className="ml-2">→</span>
              </Link>
              <a
                href="mailto:recrutement@ecosolidaire.org"
                className="bg-emerald-800/30 backdrop-blur-md text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-emerald-800/40 transition-colors duration-300 break-all sm:break-normal"
              >
                recrutement@ecosolidaire.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Jobs;