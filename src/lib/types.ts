export interface Donation {
  amount: number;
  projectId?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message?: string;
  frequency?: 'once' | 'monthly';
  status?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  image: string;
  progress: number;
  goal: number;
  raised: number;
  startDate: string;
  endDate: string;
  details: {
    challenge: string;
    solution: string;
    impact: string;
  };
}