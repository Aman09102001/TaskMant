import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/LoginPage.css';

const LoginPage = ({ onNavigate, setActiveTab }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', loginData);
    // Yahan aap actual login logic implement karenge
  };

  return (
    <div className="login-page">
      {/* Animated background */}
      <div className="animated-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <Header 
        activeTab="login" 
        setActiveTab={setActiveTab} 
        scrollPosition={0} 
      />
      
      <div className="login-container">
        <div className="login-content">
          <div className="login-left">
            <div className="login-hero">
              <h1>Welcome Back to <span className="brand">TaskMant</span></h1>
              <p>Manage your projects efficiently with our powerful tools. Get back to your workspace and continue your productivity journey.</p>
              
              <div className="features-list">
                <div className="feature-item">
                  <i className="fas fa-rocket"></i>
                  <span>Fast and Secure Access</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-shield-alt"></i>
                  <span>Enterprise-grade Security</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-users"></i>
                  <span>Collaborate with Your Team</span>
                </div>
              </div>

              <div className="login-stats">
                <div className="stat">
                  <h3>10K+</h3>
                  <p>Active Users</p>
                </div>
                <div className="stat">
                  <h3>95%</h3>
                  <p>Satisfaction Rate</p>
                </div>
                <div className="stat">
                  <h3>24/7</h3>
                  <p>Support Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="login-right">
            <div className="login-form-container">
              <div className="form-header">
                <h2>Sign In to Your Account</h2>
                <p>Enter your credentials to continue</p>
              </div>

              <form className="login-form" onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-with-icon">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={loginData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-with-icon">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-options">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={loginData.rememberMe}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <a href="#forgot" className="forgot-password">Forgot password?</a>
                </div>

                <button type="submit" className="btn btn-primary btn-login">
                  <span>Sign In</span>
                  <i className="fas fa-arrow-right"></i>
                </button>

                <div className="divider">
                  <span>Or continue with</span>
                </div>

                <div className="social-login-buttons">
                  <button type="button" className="btn-social google">
                    <i className="fab fa-google"></i>
                    Google
                  </button>
                  <button type="button" className="btn-social github">
                    <i className="fab fa-github"></i>
                    GitHub
                  </button>
                  <button type="button" className="btn-social linkedin">
                    <i className="fab fa-linkedin"></i>
                    LinkedIn
                  </button>
                </div>

                <div className="signup-link">
                  <p>Don't have an account? <button type="button" onClick={() => setActiveTab('signup')}>Sign up now</button></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;