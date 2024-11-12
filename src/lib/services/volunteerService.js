import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

export async function submitVolunteerApplication(volunteerData) {
  try {
    const volunteerDoc = {
      firstName: volunteerData.firstName,
      lastName: volunteerData.lastName,
      email: volunteerData.email,
      phone: volunteerData.phone || null,
      skills: volunteerData.domain,
      availability: volunteerData.availability,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    const docRef = await addDoc(collection(db, 'volunteers'), volunteerDoc);

    return { 
      success: true,
      id: docRef.id,
      message: 'Application submitted successfully'
    };
  } catch (error) {
    console.error('Error submitting volunteer application:', error);
    return { 
      success: false, 
      error: error.message || 'An error occurred while submitting your application.'
    };
  }
}