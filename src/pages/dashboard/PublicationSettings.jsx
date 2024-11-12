import { useState } from 'react';
import { toast } from 'react-hot-toast';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

function PublicationSettings() {
  const [settings, setSettings] = useState({
    requireApproval: true,
    maxImagesPerProject: 5,
    minDescriptionLength: 100,
    maxDescriptionLength: 1000,
    allowedCategories: ['education', 'environment', 'health', 'social'],
    autoPublishForTrustedUsers: false,
    notifyAdminOnNewProject: true,
    projectExpirationDays: 90,
  });

  const [newCategory, setNewCategory] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim() && !settings.allowedCategories.includes(newCategory.trim())) {
      setSettings(prev => ({
        ...prev,
        allowedCategories: [...prev.allowedCategories, newCategory.trim()]
      }));
      setNewCategory('');
    }
  };

  const handleRemoveCategory = (category) => {
    setSettings(prev => ({
      ...prev,
      allowedCategories: prev.allowedCategories.filter(c => c !== category)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ici, vous pouvez ajouter la logique pour sauvegarder les paramètres dans Firebase
      toast.success('Paramètres de publication mis à jour');
    } catch (error) {
      toast.error('Erreur lors de la mise à jour des paramètres');
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Paramètres de publication</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Paramètres généraux */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Paramètres généraux</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Approbation requise</label>
                <input
                  type="checkbox"
                  name="requireApproval"
                  checked={settings.requireApproval}
                  onChange={handleChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-gray-700">Publication automatique pour les utilisateurs de confiance</label>
                <input
                  type="checkbox"
                  name="autoPublishForTrustedUsers"
                  checked={settings.autoPublishForTrustedUsers}
                  onChange={handleChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-gray-700">Notifier l'administrateur pour les nouveaux projets</label>
                <input
                  type="checkbox"
                  name="notifyAdminOnNewProject"
                  checked={settings.notifyAdminOnNewProject}
                  onChange={handleChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
              </div>
            </div>
          </div>

          {/* Limites et restrictions */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Limites et restrictions</h2>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre maximum d'images par projet
                </label>
                <input
                  type="number"
                  name="maxImagesPerProject"
                  value={settings.maxImagesPerProject}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Durée d'expiration des projets (jours)
                </label>
                <input
                  type="number"
                  name="projectExpirationDays"
                  value={settings.projectExpirationDays}
                  onChange={handleChange}
                  min="30"
                  max="365"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Longueur minimale de la description
                </label>
                <input
                  type="number"
                  name="minDescriptionLength"
                  value={settings.minDescriptionLength}
                  onChange={handleChange}
                  min="50"
                  max="500"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Longueur maximale de la description
                </label>
                <input
                  type="number"
                  name="maxDescriptionLength"
                  value={settings.maxDescriptionLength}
                  onChange={handleChange}
                  min="500"
                  max="5000"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Gestion des catégories */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Catégories autorisées</h2>
            
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Nouvelle catégorie"
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
                <button
                  onClick={handleAddCategory}
                  type="button"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
                >
                  Ajouter
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {settings.allowedCategories.map((category) => (
                  <span
                    key={category}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800"
                  >
                    {category}
                    <button
                      type="button"
                      onClick={() => handleRemoveCategory(category)}
                      className="ml-2 inline-flex items-center p-0.5 rounded-full text-emerald-400 hover:bg-emerald-200 hover:text-emerald-500"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default PublicationSettings;