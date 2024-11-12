import { addDoc, getDocs, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { collection, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { httpsCallable, getFunctions } from 'firebase/functions';

const jobsCollection = collection(db, 'jobs');
const functions = getFunctions();

// Fonctions de gestion des offres d'emploi
export const createJob = async (jobData) => {
  try {
    const jobToSave = {
      ...jobData,
      createdAt: serverTimestamp(),
      status: 'active'
    };

    const docRef = await addDoc(jobsCollection, jobToSave);

    return {
      success: true,
      id: docRef.id,
      data: jobToSave
    };
  } catch (error) {
    console.error('Error creating job:', error);
    return {
      success: false,
      error: error.message || 'Failed to create job posting'
    };
  }
};

export const getJobs = async () => {
  try {
    const snapshot = await getDocs(jobsCollection);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting jobs:', error);
    throw error;
  }
};

export const getJob = async (jobId) => {
  try {
    const docRef = doc(db, 'jobs', jobId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      throw new Error('Job not found');
    }
  } catch (error) {
    console.error('Error getting job:', error);
    throw error;
  }
};

export const updateJob = async (jobId, jobData) => {
  try {
    const jobRef = doc(db, 'jobs', jobId);
    await updateDoc(jobRef, {
      ...jobData,
      updatedAt: serverTimestamp()
    });

    return {
      success: true,
      message: 'Job updated successfully'
    };
  } catch (error) {
    console.error('Error updating job:', error);
    return {
      success: false,
      error: error.message || 'Failed to update job posting'
    };
  }
};

export const deleteJob = async (jobId) => {
  try {
    const jobRef = doc(db, 'jobs', jobId);
    await deleteDoc(jobRef);

    return {
      success: true,
      message: 'Job deleted successfully'
    };
  } catch (error) {
    console.error('Error deleting job:', error);
    return {
      success: false,
      error: error.message || 'Failed to delete job posting'
    };
  }
};

// Fonction d'envoi de candidature par email
export const submitApplication = async (jobId, applicationData) => {
  try {
    // Récupérer les informations de l'offre
    const job = await getJob(jobId);

    // Convertir le fichier CV en base64
    const cvBase64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(applicationData.resume);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = error => reject(error);
    });

    // Préparer les données de la candidature
    const applicationToSend = {
      jobId,
      jobTitle: job.title,
      firstName: applicationData.firstName,
      lastName: applicationData.lastName,
      email: applicationData.email,
      phone: applicationData.phone,
      coverLetter: applicationData.coverLetter,
      portfolio: applicationData.portfolio,
      linkedin: applicationData.linkedin,
      availability: applicationData.availability,
      salary: applicationData.salary,
      cv: {
        filename: applicationData.resume.name,
        content: cvBase64,
        contentType: applicationData.resume.type
      },
      submittedAt: serverTimestamp()
    };

    // Appeler la Cloud Function pour envoyer l'email
    const sendApplicationEmail = httpsCallable(functions, 'sendApplicationEmail');
    const result = await sendApplicationEmail(applicationToSend);

    if (result.data.success) {
      return {
        success: true,
        message: 'Application sent successfully'
      };
    } else {
      throw new Error(result.data.error);
    }

  } catch (error) {
    console.error('Error submitting application:', error);
    return {
      success: false,
      error: error.message || 'Failed to submit application'
    };
  }
};