import { addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage, projectsCollection } from '../firebase';

export const createProject = async (projectData, imageFile) => {
  try {
    // Upload image first
    const imageRef = ref(storage, `projects/${Date.now()}-${imageFile.name}`);
    const uploadResult = await uploadBytes(imageRef, imageFile);
    const imageUrl = await getDownloadURL(uploadResult.ref);

    // Create project document
    const projectToSave = {
      title: projectData.title,
      description: projectData.description,
      country: projectData.country,
      region: projectData.region || '',
      category: projectData.category,
      goal: Number(projectData.goal),
      image: imageUrl,
      status: 'active',
      progress: 0,
      raised: 0,
      createdAt: serverTimestamp()
    };

    // Save to Firestore
    const docRef = await addDoc(projectsCollection, projectToSave);

    return {
      success: true,
      id: docRef.id,
      data: projectToSave
    };

  } catch (error) {
    console.error('Error creating project:', error);
    return {
      success: false,
      error: error.message || 'Failed to create project'
    };
  }
};

export const getProjects = async () => {
  try {
    const snapshot = await getDocs(projectsCollection);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting projects:', error);
    throw error;
  }
};