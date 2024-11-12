import { useState } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';

function Dashboard() {
  const [period, setPeriod] = useState('month');

  const stats = [
    {
      title: "Dons totaux",
      value: "15 750€",
      change: "+12.3%",
      positive: true
    },
    {
      title: "Nouveaux donateurs",
      value: "48",
      change: "+8.1%",
      positive: true
    },
    {
      title: "Projets actifs",
      value: "12",
      change: "0%",
      positive: true
    },
    {
      title: "Taux de conversion",
      value: "3.2%",
      change: "-0.4%",
      positive: false
    }
  ];

  const recentDonations = [
    {
      donor: "Marie Dupont",
      amount: "100€",
      project: "École au Sénégal",
      date: "Il y a 2 heures"
    },
    {
      donor: "Jean Martin",
      amount: "50€",
      project: "Reforestation Madagascar",
      date: "Il y a 3 heures"
    },
    {
      donor: "Sophie Lambert",
      amount: "75€",
      project: "Accès à l'eau",
      date: "Il y a 5 heures"
    }
  ];

  return (
    <DashboardLayout>
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <div className="flex gap-2">
          {['day', 'week', 'month', 'year'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                period === p
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p className={`ml-2 text-sm font-medium ${
                stat.positive ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Derniers dons</h2>
          <div className="space-y-4">
            {recentDonations.map((donation, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{donation.donor}</p>
                  <p className="text-sm text-gray-500">{donation.project}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-emerald-600">{donation.amount}</p>
                  <p className="text-sm text-gray-500">{donation.date}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-sm text-emerald-600 hover:text-emerald-700 font-medium">
            Voir tous les dons →
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Projets en cours</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-gray-900">École au Sénégal</p>
                <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">
                  En cours
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>37 500€ collectés</span>
                <span>Objectif: 50 000€</span>
              </div>
            </div>
          </div>
          <button className="mt-4 text-sm text-emerald-600 hover:text-emerald-700 font-medium">
            Voir tous les projets →
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;