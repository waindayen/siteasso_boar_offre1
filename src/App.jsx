import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import useAuthStore from './lib/store/authStore';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Projects from './pages/Projects';
import Action from './pages/Action';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import Sponsorship from './pages/Sponsorship';
import Volunteer from './pages/Volunteer';
import Partnership from './pages/Partnership';
import Jobs from './pages/Jobs';
import JobApplication from './pages/JobApplication';
import SignInForm from './components/auth/SignInForm';
import SignUpForm from './components/auth/SignUpForm';
import ResetPasswordForm from './components/auth/ResetPasswordForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import CreateProject from './pages/dashboard/CreateProject';
import CreateJob from './pages/dashboard/CreateJob';
import JobsList from './pages/dashboard/JobsList';
import UserManagement from './pages/dashboard/UserManagement';
import ProjectsList from './pages/dashboard/ProjectsList';
import Statistics from './pages/dashboard/Statistics';

function App() {
  const { setUser } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      await setUser(user);
    });

    return () => unsubscribe();
  }, [setUser]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/mission" element={<><Navbar /><Mission /></>} />
        <Route path="/projets" element={<><Navbar /><Projects /></>} />
        <Route path="/agir" element={<><Navbar /><Action /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/faire-un-don" element={<><Navbar /><Donation /></>} />
        <Route path="/parrainage" element={<><Navbar /><Sponsorship /></>} />
        <Route path="/benevolat" element={<><Navbar /><Volunteer /></>} />
        <Route path="/partenariat" element={<><Navbar /><Partnership /></>} />
        <Route path="/offres" element={<><Navbar /><Jobs /></>} />
        <Route path="/offres/:id/postuler" element={<><Navbar /><JobApplication /></>} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/reset-password" element={<ResetPasswordForm />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/create-project"
          element={
            <ProtectedRoute>
              <CreateProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/create-job"
          element={
            <ProtectedRoute requiredRole="manager">
              <CreateJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/jobs"
          element={
            <ProtectedRoute requiredRole="manager">
              <JobsList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/projects"
          element={
            <ProtectedRoute requiredRole="manager">
              <ProjectsList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/users"
          element={
            <ProtectedRoute requiredRole="admin">
              <UserManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/statistics"
          element={
            <ProtectedRoute requiredRole="manager">
              <Statistics />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;