import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { createJob } from '../../lib/services/jobService';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

function CreateJob() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    location: '',
    department: '',
    description: '',
    requirements: '',
    responsibilities: '',
    salary: '',
    startDate: '',
    applicationDeadline: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const jobTypes = [
    'CDI',
    'CDD',
    'Stage',
    'Alternance',
    'Freelance'
  ];

  const departments = [
    'Administration',
    'Communication',
    'Développement',
    'Finance',
    'Ressources Humaines',
    'Technique',
    'Autre'
  ];

  const validateForm = () => {
    const errors = {};
    if (!formData.title) errors.title = 'Le titre est requis';
    if (!formData.type) errors.type = 'Le type de contrat est requis';
    if (!formData.location) errors.location = 'Le lieu est requis';
    if (!formData.department) errors.department = 'Le département est requis';
    if (!formData.description) errors.description = 'La description est requise';
    if (!formData.requirements) errors.requirements = 'Les prérequis sont requis';
    if (!formData.responsibilities) errors.responsibilities = 'Les responsabilités sont requises';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Veuillez remplir tous les champs requis');
      return;
    }

    setLoading(true);

    try {
      const result = await createJob(formData);
      
      if (result.success) {
        toast.success('Offre d\'emploi publiée avec succès !');
        navigate('/dashboard');
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.message || 'Erreur lors de la publication de l\'offre');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Publier une offre d'emploi</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Titre du poste*
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 ${
                  formErrors.title ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {formErrors.title && (
                <p className="mt-1 text-sm text-red-500">{formErrors.title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de contrat*
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 ${
                  formErrors.type ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Sélectionner un type</option>
                {jobTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {formErrors.type && (
                <p className="mt-1 text-sm text-red-500">{formErrors.type}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lieu*
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 ${
                  formErrors.location ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {formErrors.location && (
                <p className="mt-1 text-sm text-red-500">{formErrors.location}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Département*
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 ${
                  formErrors.department ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Sélectionner un département</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              {formErrors.department && (
                <p className="mt-1 text-sm text-red-500">{formErrors.department}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description du poste*
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 ${
                formErrors.description ? 'border-red-500' : 'border-gray-300'
              }`}
            ></textarea>
            {formErrors.description && (
              <p className="mt-1 text-sm text-red-500">{formErrors.description}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Prérequis*
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 ${
                formErrors.requirements ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Formation, expérience, compétences requises..."
            ></textarea>
            {formErrors.requirements && (
              <p className="mt-1 text-sm text-red-500">{formErrors.requirements}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Responsabilités*
            </label>
            <textarea
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 ${
                formErrors.responsibilities ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Principales missions et responsabilités..."
            ></textarea>
            {formErrors.responsibilities && (
              <p className="mt-1 text-sm text-red-500">{formErrors.responsibilities}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Salaire (optionnel)
              </label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="ex: 35-45k€ annuel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date limite de candidature
              </label>
              <input
                type="date"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
            >
              {loading ? 'Publication...' : 'Publier l\'offre'}
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default CreateJob;