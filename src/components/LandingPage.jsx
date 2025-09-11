import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './Maincontent';

const LandingPage = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const featuresSectionRef = useRef(null);

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Intersection Observer for feature cards - FIXED VERSION
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsFeaturesVisible(true);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (featuresSectionRef.current) {
      observer.observe(featuresSectionRef.current);
    }

    return () => {
      if (featuresSectionRef.current) {
        observer.unobserve(featuresSectionRef.current);
      }
    };
  }, []);

  // Form handling with validation
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login submitted');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup submitted');
  };

  return (
    <div className="landing-container">
      {/* Animated background elements */}
      <div className="animated-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        scrollPosition={scrollPosition} 
      />
      
      <MainContent 
        activeTab={activeTab}
        onNavigate={onNavigate}
        isVisible={isFeaturesVisible}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        sectionRef={featuresSectionRef}
      />

      <Footer />
    </div>
  );
};

export default LandingPage;


























