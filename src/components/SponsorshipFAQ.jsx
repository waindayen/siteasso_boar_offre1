function SponsorshipFAQ() {
  const faqs = [
    {
      question: "Comment est utilisé mon don mensuel ?",
      answer: "Votre don mensuel de 30€ est réparti entre la scolarité, les fournitures scolaires, le suivi médical et les activités extra-scolaires de votre filleul(e). Un rapport annuel détaillé vous est envoyé."
    },
    {
      question: "Puis-je échanger avec mon/ma filleul(e) ?",
      answer: "Oui, vous recevrez régulièrement des nouvelles, des photos et des lettres de votre filleul(e). Vous pouvez également lui écrire et échanger avec lui/elle."
    },
    {
      question: "Quelle est la durée minimale d'engagement ?",
      answer: "Pour assurer un suivi stable de l'enfant, nous demandons un engagement minimal d'un an. Vous pouvez bien sûr continuer au-delà de cette période."
    },
    {
      question: "Le parrainage est-il déductible des impôts ?",
      answer: "Oui, 66% du montant de votre parrainage est déductible de vos impôts. Un don de 30€ par mois ne vous coûte réellement que 10,20€ après déduction fiscale."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">
          Questions fréquentes
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Vous avez d'autres questions ? N'hésitez pas à nous contacter
          </p>
          <a
            href="/contact"
            className="inline-block bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full hover:bg-emerald-200 transition-colors duration-300"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
}

export default SponsorshipFAQ;