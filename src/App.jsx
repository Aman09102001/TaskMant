import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/style.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import SignUP from './components/SignUP';
import Dashboard from './components/Dashboard';
import ManagerDashboard from './components/ManagerDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import ProjectView from "./components/ProjectView";

// Protected Route Component
const ProtectedRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/login" replace />;
};

// Role-based Protected Route
const RoleBasedRoute = ({ user, role, children }) => {
  if (!user) return <Navigate to="/login" replace />;
  return user.role === role ? children : <Navigate to="/dashboard" replace />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([
    { id: 1, project: 'Website Redesign', manager: 'Sarah Williams', allocated: 40, remaining: 15, progress: 65 },
    { id: 2, project: 'Mobile App Design', manager: 'Robert Brown', allocated: 20, remaining: 5, progress: 75 },
    { id: 3, project: 'Database Optimization', manager: 'Sarah Williams', allocated: 30, remaining: 20, progress: 35 },
    { id: 4, project: 'User Testing', manager: 'Michael Chen', allocated: 15, remaining: 10, progress: 35 }
  ]);

  // Check for existing login on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('taskmant_user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setIsLoggedIn(true);
      setUser(userData);
    }
  }, []);

  // Handle login
  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem('taskmant_user', JSON.stringify(userData));
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('taskmant_user');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout} />} />
          <Route 
            path="/login" 
            element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <LoginPage onLogin={handleLogin} />} 
          />
          <Route 
            path="/signup" 
            element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <SignUP onLogin={handleLogin} />} 
          />
          <Route 
            path="/company-register" 
            element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <RegistrationPage />} 
          />

          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute user={user}>
                {user?.role === 'Manager' ? (
                  <Navigate to="/manager" replace />
                ) : user?.role === 'Employee' ? (
                  <Navigate to="/employee" replace />
                ) : (
                  <Dashboard user={user} onLogout={handleLogout} />
                )}
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/manager/*" 
            element={
              <RoleBasedRoute user={user} role="Manager">
                <ManagerDashboard user={user} onLogout={handleLogout} />
              </RoleBasedRoute>
            } 
          />


          <Route
  path="/manager/project-view"
  element={
    <RoleBasedRoute user={user} role="Manager">
      <ProjectView />
    </RoleBasedRoute>
  }
/>

          <Route 
            path="/employee/*" 
            element={
              <RoleBasedRoute user={user} role="Employee">
                <EmployeeDashboard user={user} tasks={tasks} setTasks={setTasks} onLogout={handleLogout} />
              </RoleBasedRoute>
            } 
          />


          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



