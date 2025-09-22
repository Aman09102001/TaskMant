import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

// const Header = ({ scrollPosition, isLoggedIn, user, onLogout }) => {
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const navigate = useNavigate();
//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   if (isLoggedIn) {
//     return (
//       <header className={`dashboard-header ${scrollPosition > 50 ? 'scrolled' : ''}`}>
//         <div className="logo" onClick={() => handleNavigation('/dashboard')} style={{cursor: 'pointer'}}>
//           <i className="fas fa-tasks"></i>
//           <span>TaskMant</span>
//           <span className="user-role-badge">{user?.role}</span>
//         </div>
        
//         <div className="user-profile">
//           <button 
//             className="profile-btn"
//             onClick={() => setShowProfileMenu(!showProfileMenu)}
//           >
//             <i className="fas fa-user-circle"></i>
//             <span>{user?.firstName}</span>
//             <i className="fas fa-caret-down"></i>
//           Profile</button>
          
//           {showProfileMenu && (
//             <div className="profile-menu">
//               <div className="profile-info">
//                 <img src={user?.profilePhoto || 'https://randomuser.me/api/portraits/men/45.jpg'} alt={user?.name} />
//                 <div>
//                   <h4>{user?.firstName}</h4>
//                   <p>{user?.role}</p>
//                   <p>{user?.email}</p>
//                 </div>
//               </div>
//               <div className="menu-items">
//                 <button onClick={() => handleNavigation('/profile')}>
//                   <i className="fas fa-user"></i> My Profile
//                 </button>
//                 <button onClick={() => handleNavigation('/settings')}>
//                   <i className="fas fa-cog"></i> Settings
//                 </button>
//                 <button onClick={() => handleNavigation('/help')}>
//                   <i className="fas fa-question-circle"></i> Help
//                 </button>
//                 <button onClick={onLogout}>
//                   <i className="fas fa-sign-out-alt"></i> Logout
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>
//     );
//   }

//   return (
//     <header className={`landing-header ${scrollPosition > 50 ? 'scrolled' : ''}`}>
//       <div className="logo" onClick={() => handleNavigation('/')} style={{cursor: 'pointer'}}>
//         <i className="fas fa-tasks"></i>
//         <span>TaskMant</span>
//       </div>
//       <nav className="nav-buttons">
//         <button 
//           className="nav-btn"
//           onClick={() => handleNavigation('/login')}
//         >
//           Login
//         </button>
//         <button 
//           className="nav-btn"
//           onClick={() => handleNavigation('/signup')}
//         >
//           Sign Up
//         </button>
//       </nav>
//     </header>
//   );
// };

// export default Header;













const Header = ({ scrollPosition, isLoggedIn, user, onLogout }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  // You can handle navigation directly here
  const handleNavigation = (path) => {
    navigate(path);
  };

  if (isLoggedIn) {
    return (
      <header className={`dashboard-header ${scrollPosition > 50 ? 'scrolled' : ''}`}>
        <div className="logo" onClick={() => handleNavigation('/dashboard')} style={{ cursor: 'pointer' }}>
          <i className="fas fa-tasks"></i>
          <span>TaskMant</span>
          <span className="user-role-badge">{user?.role}</span>
        </div>

        <div className="user-profile">
          <button 
            className="profile-btn"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <i className="fas fa-user-circle"></i>
            <span>{user?.firstName}</span>
            <i className="fas fa-caret-down"></i>
          </button>

          {showProfileMenu && (
            <div className="profile-menu">
              <div className="profile-info">
                <img src={user?.profilePhoto || 'https://randomuser.me/api/portraits/men/45.jpg'} alt={user?.name} />
                <div>
                  <h4>{user?.firstName}</h4>
                  <p>{user?.role}</p>
                  <p>{user?.email}</p>
                </div>
              </div>
              <div className="menu-items">
                <button onClick={() => handleNavigation('/profile')}>
                  <i className="fas fa-user"></i> My Profile
                </button>
                <button onClick={() => handleNavigation('/settings')}>
                  <i className="fas fa-cog"></i> Settings
                </button>
                <button onClick={() => handleNavigation('/help')}>
                  <i className="fas fa-question-circle"></i> Help
                </button>
                <button onClick={() => {
                  onLogout();  // Perform any additional logout actions here
                  // navigate('/login');  // Redirect to the home page
                }}>
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  }

  return (
    <header className={`landing-header ${scrollPosition > 50 ? 'scrolled' : ''}`}>
      <div className="logo" onClick={() => handleNavigation('/')} style={{ cursor: 'pointer' }}>
        <i className="fas fa-tasks"></i>
        <span>TaskMant</span>
      </div>
      <nav className="nav-buttons">
        <button 
          className="nav-btn"
          onClick={() => handleNavigation('/login')}
        >
          Login
        </button>
        <button 
          className="nav-btn"
          onClick={() => handleNavigation('/signup')}
        >
          Sign Up
        </button>
      </nav>
    </header>
  );
};

export default Header;
