import React, { useState } from 'react';
import Header from './Header';
import '../styles/Dashboard.css';
import ManagerDashboard from './ManagerDashboard';
import EmployeeDashboard from './EmployeeDashboard';

const Dashboard = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@company.com',
    role: 'Manager', // Change to 'Employee' to see the employee view
    profilePhoto: 'https://randomuser.me/api/portraits/men/45.jpg'
  });

  const handleLogout = () => {
    alert('Logging out...');
    // Here you would typically clear authentication tokens and redirect to login
  };

  return (
    <div className="app">
      <Header user={user} onLogout={handleLogout} />
      {user.role === 'Manager' ? <ManagerDashboard /> : <EmployeeDashboard />}
    </div>
  );
};

export default Dashboard;