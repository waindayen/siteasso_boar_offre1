import VolunteerHero from '../components/VolunteerHero';
import VolunteerOpportunities from '../components/VolunteerOpportunities';
import VolunteerForm from '../components/VolunteerForm';
import VolunteerTestimonials from '../components/VolunteerTestimonials';

function Volunteer() {
  return (
    <main className="pt-32">
      <VolunteerHero />
      <VolunteerOpportunities />
      <VolunteerTestimonials />
      <VolunteerForm />
    </main>
  );
}

export default Volunteer;