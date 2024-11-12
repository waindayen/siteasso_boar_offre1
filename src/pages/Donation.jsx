import DonationForm from '../components/DonationForm';
import DonationImpact from '../components/DonationImpact';

function Donation() {
  return (
    <main className="pt-32">
      <DonationForm />
      <DonationImpact />
    </main>
  );
}

export default Donation;