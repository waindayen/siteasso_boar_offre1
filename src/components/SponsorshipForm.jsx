function SponsorshipForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour votre engagement ! Nous vous contacterons très prochainement pour finaliser votre parrainage.');
  };

  return (
    <section id="parrainer" className="py-24 bg-emerald-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
            Formulaire de parrainage
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <label className="text-lg font-semibold text-gray-900 block">
                Vos coordonnées
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Prénom"
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <input
                  type="text"
                  placeholder="Nom"
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <input
                  type="text"
                  placeholder="Adresse"
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 md:col-span-2"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-lg font-semibold text-gray-900 block">
                Préférences de parrainage
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Âge de l'enfant</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                    <option value="">Sans préférence</option>
                    <option value="3-6">3-6 ans</option>
                    <option value="7-10">7-10 ans</option>
                    <option value="11-14">11-14 ans</option>
                    <option value="15-18">15-18 ans</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Genre</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                    <option value="">Sans préférence</option>
                    <option value="fille">Fille</option>
                    <option value="garcon">Garçon</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-lg font-semibold text-gray-900 block">
                Message personnel
              </label>
              <textarea
                placeholder="Pourquoi souhaitez-vous parrainer un enfant ?"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              ></textarea>
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3">
                <input type="checkbox" required className="mt-1" />
                <span className="text-gray-600 text-sm">
                  Je m'engage à parrainer un enfant pour un minimum d'un an et j'accepte les conditions générales de parrainage
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-emerald-700 transition-colors duration-300"
            >
              Je confirme mon parrainage
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

export default SponsorshipForm;