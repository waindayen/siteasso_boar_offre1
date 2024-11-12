function ContactInfo() {
  const contactMethods = [
    {
      icon: "📞",
      title: "Par téléphone",
      description: "Du lundi au vendredi, 9h-18h",
      value: "+33 1 23 45 67 89"
    },
    {
      icon: "✉️",
      title: "Par email",
      description: "Nous vous répondons sous 24h",
      value: "contact@ecosolidaire.org"
    },
    {
      icon: "📍",
      title: "Nos bureaux",
      description: "Venez nous rencontrer",
      value: "123 rue de la Solidarité, 75001 Paris"
    }
  ];

  const socialNetworks = [
    {
      name: "Facebook",
      url: "https://facebook.com/ecosolidaire",
      icon: "facebook.svg"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ecosolidaire",
      icon: "twitter.svg"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/ecosolidaire",
      icon: "linkedin.svg"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/ecosolidaire",
      icon: "instagram.svg"
    }
  ];

  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-2">{method.description}</p>
              <p className="text-emerald-600 font-medium">{method.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
            Suivez-nous
          </h2>
          <div className="flex justify-center gap-6">
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <img
                  src={`/icons/${network.icon}`}
                  alt={network.name}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <iframe
              title="Notre localisation"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937586!2d2.3414926!3d48.8615622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzQxLjYiTiAywrAyMCczMC4xIkU!5e0!3m2!1sfr!2sfr!4v1635789876543!5m2!1sfr!2sfr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;