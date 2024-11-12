import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

export async function createDonation(donation) {
  try {
    const donationData = {
      amount: parseInt(donation.amount),
      donorName: `${donation.firstName} ${donation.lastName}`.trim(),
      donorEmail: donation.email,
      donorPhone: donation.phone || null,
      message: donation.message || null,
      frequency: donation.frequency || 'once',
      status: 'completed',
      createdAt: new Date().toISOString()
    };

    // Validate required fields
    if (!donationData.amount || !donationData.donorName || !donationData.donorEmail) {
      throw new Error('Missing required fields');
    }

    const docRef = await addDoc(collection(db, 'donations'), donationData);

    return { 
      success: true, 
      data: { id: docRef.id, ...donationData },
      message: 'Donation created successfully'
    };
  } catch (error) {
    console.error('Donation service error:', error);
    return { 
      success: false, 
      error: error.message || 'An error occurred while processing the donation'
    };
  }
}

export async function getDonations() {
  try {
    const donationsRef = collection(db, 'donations');
    const q = query(donationsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const donations = [];
    querySnapshot.forEach((doc) => {
      donations.push({ id: doc.id, ...doc.data() });
    });

    return { 
      success: true, 
      data: donations,
      message: 'Donations retrieved successfully'
    };
  } catch (error) {
    console.error('Error getting donations:', error);
    return { 
      success: false, 
      error: error.message || 'An error occurred while retrieving donations'
    };
  }
}