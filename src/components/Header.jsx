// import React from 'react';
// import '../styles/Header.css';
// const Header = ({ activeTab, setActiveTab, scrollPosition }) => {
//   return (
//     <header className={`landing-header ${scrollPosition > 50 ? 'scrolled' : ''}`}>
//       <div className="logo">
//         <i className="fas fa-tasks"></i>
//         <span>TaskMant</span>
//       </div>
//       <nav className="nav-buttons">
//         <button 
//           className={`nav-btn ${activeTab === 'login' ? 'active' : ''}`}
//           onClick={() => setActiveTab('login')}
//         >
//           Login
//         </button>
//         <button 
//           className={`nav-btn ${activeTab === 'signup' ? 'active' : ''}`}
//           onClick={() => setActiveTab('signup')}
//         >
//           Sign Up
//         </button>
//       </nav>
//     </header>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import '../styles/Header.css';

const Header = ({ activeTab, setActiveTab, scrollPosition, isLoggedIn, user, onLogout }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className={`landing-header ${scrollPosition > 50 ? 'scrolled' : ''} ${isLoggedIn ? 'logged-in' : ''}`}>
      <div className="logo">
        <i className="fas fa-tasks"></i>
        <span>TaskMant</span>
        {isLoggedIn && <span className="user-role-badge">{user?.role}</span>}
      </div>
      
      {isLoggedIn ? (
        <div className="user-profile">
          <button 
            className="profile-btn"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <i className="fas fa-user-circle"></i>
            <span>{user?.name}</span>
            <i className="fas fa-caret-down"></i>
          </button>
          
          {showProfileMenu && (
            <div className="profile-menu">
              <div className="profile-info">
                <img src={user?.profilePhoto || 'https://randomuser.me/api/portraits/men/45.jpg'} alt={user?.name} />
                <div>
                  <h4>{user?.name}</h4>
                  <p>{user?.role}</p>
                  <p>{user?.email}</p>
                </div>
              </div>
              <div className="menu-items">
                <button><i className="fas fa-user"></i> My Profile</button>
                <button><i className="fas fa-cog"></i> Settings</button>
                <button><i className="fas fa-question-circle"></i> Help</button>
                <button onClick={onLogout}><i className="fas fa-sign-out-alt"></i> Logout</button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <nav className="nav-buttons">
          <button 
            className={`nav-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button 
            className={`nav-btn ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;