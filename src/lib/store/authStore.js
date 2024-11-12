import { create } from 'zustand';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail
} from 'firebase/auth';

const useAuthStore = create((set) => ({
  user: null,
  userRole: null,
  loading: true,
  setUser: async (user) => {
    if (user) {
      // Get user role from Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const role = userDoc.exists() ? userDoc.data().role : 'poster';
      set({ user, userRole: role, loading: false });
    } else {
      set({ user: null, userRole: null, loading: false });
    }
  },
  setLoading: (loading) => set({ loading }),
  signIn: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
  signUp: async (email, password, role) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Save user role in Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email,
        role,
        createdAt: new Date().toISOString()
      });
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
  signOut: async () => {
    try {
      await firebaseSignOut(auth);
      set({ user: null, userRole: null });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
  resetPassword: async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}));

export default useAuthStore;