import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from './Header';
import ManagerDashboard from './ManagerDashboard';
import EmployeeDashboard from './EmployeeDashboard';
import "../styles/Dashboard.css"

const Dashboard = ({ user, onLogout }) => {
  // Role-based redirection
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="app">
      <Header 
        isLoggedIn={true}
        user={user}
        onLogout={onLogout}
        scrollPosition={0}
      />
      
      {user.role === 'MANAGER' ? (
        <ManagerDashboard user={user} />
      ) : (
        <EmployeeDashboard user={user} />
      )}
    </div>
  );
};

export default Dashboard;