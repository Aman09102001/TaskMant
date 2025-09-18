// import React, { useState, useRef, useEffect } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import MainContent from './MainContent';

// const LandingPage = ({ isLoggedIn, user, onLogout }) => {
//   const [activeTab, setActiveTab] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleNavigate = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Login logic will be implemented later
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();
//     // Signup logic will be implemented later
//   };

//   const handleScroll = () => {
//     const position = window.pageYOffset;
//     setScrollPosition(position);

//     // Check if features section is in viewport
//     if (sectionRef.current) {
//       const rect = sectionRef.current.getBoundingClientRect();
//       setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="landing-page">
//       <Header 
//         scrollPosition={scrollPosition} 
//         isLoggedIn={isLoggedIn} 
//         user={user} 
//         onLogout={onLogout} 
//       />
//       <MainContent 
//         activeTab={activeTab} 
//         onNavigate={handleNavigate} 
//         isVisible={isVisible} 
//         handleLogin={handleLogin} 
//         handleSignup={handleSignup} 
//         sectionRef={sectionRef} 
//       />
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;




import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import '../styles/LandingPage.css'

const LandingPage = ({ isLoggedIn, user, onLogout }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic will be implemented later
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Signup logic will be implemented later
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    // Check if features section is in viewport
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="landing-page">
      <Header 
        scrollPosition={scrollPosition} 
        isLoggedIn={isLoggedIn} 
        user={user} 
        onLogout={onLogout} 
      />
      <MainContent 
        activeTab={activeTab} 
        isVisible={isVisible} 
        handleLogin={handleLogin} 
        handleSignup={handleSignup} 
        sectionRef={sectionRef} 
      />
      <Footer />
    </div>
  );
};

export default LandingPage;
