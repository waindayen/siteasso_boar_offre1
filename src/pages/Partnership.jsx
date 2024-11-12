import PartnershipHero from '../components/PartnershipHero';
import PartnershipBenefits from '../components/PartnershipBenefits';
import PartnershipForm from '../components/PartnershipForm';
import PartnershipTestimonials from '../components/PartnershipTestimonials';

function Partnership() {
  return (
    <main className="pt-32">
      <PartnershipHero />
      <PartnershipBenefits />
      <PartnershipTestimonials />
      <PartnershipForm />
    </main>
  );
}

export default Partnership;