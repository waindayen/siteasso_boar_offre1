import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { submitVolunteerApplication } from '../lib/services/volunteerService';

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  domain: '',
  availability: '',
  motivation: '',
  gdprConsent: false
};

function VolunteerForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.domain) {
      newErrors.domain = 'Veuillez sélectionner un domaine';
    }
    if (!formData.availability) {
      newErrors.availability = 'Veuillez sélectionner une disponibilité';
    }
    if (!formData.motivation.trim()) {
      newErrors.motivation = 'Veuillez expliquer vos motivations';
    }
    if (!formData.gdprConsent) {
      newErrors.gdprConsent = 'Veuillez accepter le traitement de vos données';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Veuillez corriger les erreurs dans le formulaire');
      return;
    }

    setLoading(true);

    try {
      const result = await submitVolunteerApplication(formData);
      
      if (!result.success) {
        throw new Error(result.error);
      }

      toast.success('Votre candidature a été envoyée avec succès !');
      setFormData(INITIAL_FORM_STATE);
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.message || 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="postuler" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
            Rejoignez l'aventure
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <label className="text-lg font-semibold text-gray-900 block">
                Vos coordonnées
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Prénom"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Nom"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Téléphone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-lg font-semibold text-gray-900 block">
                Vos centres d'intérêt
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Domaine d'intervention</label>
                  <select
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 ${
                      errors.domain ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Choisir un domaine</option>
                    <option value="education">Éducation</option>
                    <option value="environment">Environnement</option>
                    <option value="communication">Communication</option>
                    <option value="admin">Administration</option>
                  </select>
                  {errors.domain && (
                    <p className="mt-1 text-sm text-red-500">{errors.domain}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Disponibilité</label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 ${
                      errors.availability ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Choisir une disponibilité</option>
                    <option value="ponctual">Ponctuelle</option>
                    <option value="regular">Régulière</option>
                    <option value="flexible">Flexible</option>
                  </select>
                  {errors.availability && (
                    <p className="mt-1 text-sm text-red-500">{errors.availability}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-lg font-semibold text-gray-900 block">
                Votre motivation
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Parlez-nous de vous et de vos motivations..."
                rows="4"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 ${
                  errors.motivation ? 'border-red-500' : 'border-gray-300'
                }`}
              ></textarea>
              {errors.motivation && (
                <p className="mt-1 text-sm text-red-500">{errors.motivation}</p>
              )}
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="gdprConsent"
                  checked={formData.gdprConsent}
                  onChange={handleChange}
                  className={`mt-1 ${errors.gdprConsent ? 'border-red-500' : ''}`}
                />
                <span className="text-gray-600 text-sm">
                  J'accepte que mes données soient utilisées pour le traitement de ma candidature
                </span>
              </label>
              {errors.gdprConsent && (
                <p className="text-sm text-red-500">{errors.gdprConsent}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-emerald-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Envoi en cours...
                </span>
              ) : (
                'Envoyer ma candidature'
              )}
            </button>

            <div className="text-center text-sm text-gray-600">
              <p>🔒 Vos données personnelles sont protégées</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default VolunteerForm;