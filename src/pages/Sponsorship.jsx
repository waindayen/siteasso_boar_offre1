import SponsorshipHero from '../components/SponsorshipHero';
import SponsorshipProcess from '../components/SponsorshipProcess';
import SponsorshipForm from '../components/SponsorshipForm';
import SponsorshipFAQ from '../components/SponsorshipFAQ';

function Sponsorship() {
  return (
    <main className="pt-32">
      <SponsorshipHero />
      <SponsorshipProcess />
      <SponsorshipForm />
      <SponsorshipFAQ />
    </main>
  );
}

export default Sponsorship;