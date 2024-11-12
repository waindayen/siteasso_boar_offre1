import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export async function testConnection() {
  try {
    // Test connection by attempting to get donations collection
    const querySnapshot = await getDocs(collection(db, 'donations'));
    const donations = [];
    querySnapshot.forEach((doc) => {
      donations.push({ id: doc.id, ...doc.data() });
    });
    
    return {
      success: true,
      data: donations,
      message: donations.length ? 'Connection successful' : 'Connection successful, no data'
    };
  } catch (error) {
    console.error('Database error:', error);
    return {
      success: false,
      error: error.message,
      message: 'Database connection error'
    };
  }
}

export async function insertDonation(data) {
  try {
    const donationData = {
      amount: parseInt(data.amount),
      donorName: `${data.firstName} ${data.lastName}`,
      donorEmail: data.email,
      donorPhone: data.phone || null,
      message: data.message || null,
      frequency: data.frequency || 'once',
      status: 'completed',
      createdAt: new Date().toISOString()
    };

    const docRef = await addDoc(collection(db, 'donations'), donationData);
    return { 
      success: true, 
      data: { id: docRef.id, ...donationData }
    };
  } catch (error) {
    console.error('Error:', error);
    return { 
      success: false, 
      error: error.message || 'Error processing donation'
    };
  }
}