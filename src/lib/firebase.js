import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCpgbBV-Up4eZkLndI9YxsKmFFOM_5Tdbw",
  authDomain: "siteinternet-541e0.firebaseapp.com",
  projectId: "siteinternet-541e0",
  storageBucket: "siteinternet-541e0.appspot.com",
  messagingSenderId: "271079879728",
  appId: "1:271079879728:web:1a31ee2e7b874b79aba9f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Initialize collections
export const projectsCollection = collection(db, 'projects');
export const donationsCollection = collection(db, 'donations');
export const volunteersCollection = collection(db, 'volunteers');

// Test database connection
export const testConnection = async () => {
  try {
    // Test reading from projects collection
    const snapshot = await getDocs(projectsCollection);
    console.log('Firebase connection successful');
    return true;
  } catch (error) {
    console.error('Firebase connection error:', error);
    return false;
  }
};

// Export app as default
export default app;