import { createProject, createDonation, createVolunteer, getProjects, getDonations, getVolunteers } from '../lib/db.js';

async function testDatabase() {
  try {
    // Test project creation
    const project = await createProject({
      title: "École au Sénégal",
      description: "Construction d'une école primaire",
      category: "education",
      location: "Sénégal",
      image: "/projects/school.jpg",
      goal: 50000
    });
    console.log('Project created:', project);

    // Test donation creation
    const donation = await createDonation({
      amount: 100,
      projectId: project.lastID,
      donorName: "John Doe",
      donorEmail: "john@example.com",
      donorPhone: "+33123456789",
      message: "Bon courage !",
      frequency: "once"
    });
    console.log('Donation created:', donation);

    // Test volunteer creation
    const volunteer = await createVolunteer({
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@example.com",
      phone: "+33987654321",
      skills: "Teaching",
      availability: "Weekends"
    });
    console.log('Volunteer created:', volunteer);

    // Test retrieving data
    const projects = await getProjects();
    console.log('All projects:', projects);

    const donations = await getDonations();
    console.log('All donations:', donations);

    const volunteers = await getVolunteers();
    console.log('All volunteers:', volunteers);

    console.log('Database test completed successfully!');
  } catch (error) {
    console.error('Database test failed:', error);
  }
}

testDatabase();