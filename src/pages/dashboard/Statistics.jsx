import { useState, useEffect } from 'react';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

function Statistics() {
  const [stats, setStats] = useState({
    totalDonations: 0,
    totalAmount: 0,
    projectsCount: 0,
    activeProjects: 0,
    completedProjects: 0,
    averageDonation: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStatistics();
  }, []);

  const loadStatistics = async () => {
    try {
      // Charger les dons
      const donationsSnapshot = await getDocs(collection(db, 'donations'));
      const donations = donationsSnapshot.docs.map(doc => doc.data());
      const totalAmount = donations.reduce((sum, donation) => sum + donation.amount, 0);

      // Charger les projets
      const projectsSnapshot = await getDocs(collection(db, 'projects'));
      const projects = projectsSnapshot.docs.map(doc => doc.data());
      const activeProjects = projects.filter(project => project.status === 'active').length;
      const completedProjects = projects.filter(project => project.status === 'completed').length;

      setStats({
        totalDonations: donations.length,
        totalAmount,
        projectsCount: projects.length,
        activeProjects,
        completedProjects,
        averageDonation: donations.length ? totalAmount / donations.length : 0
      });
    } catch (error) {
      console.error('Error loading statistics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Statistiques</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Total des dons</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">
                {stats.totalAmount.toLocaleString('fr-FR')}€
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Nombre de dons</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">
                {stats.totalDonations}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Don moyen</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">
                {stats.averageDonation.toLocaleString('fr-FR', { maximumFractionDigits: 2 })}€
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Total des projets</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stats.projectsCount}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Projets actifs</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stats.activeProjects}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Projets terminés</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stats.completedProjects}</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Statistics;