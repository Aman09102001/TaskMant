import React, { useRef } from 'react';
import '../styles/MainContent.css';

const MainContent = ({ activeTab, onNavigate, isVisible, handleLogin, handleSignup, sectionRef }) => {
  return (
    <main className="landing-main">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="animate-typing">Your Project Management Solution</h1>
          <p className="hero-description fade-in">
            TaskMant is a powerful project management tool that helps your team organize, 
            prioritize, and collaborate on tasks. Simplify complex projects and boost productivity.
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary floating"
              onClick={() => onNavigate('companyRegister')}
            >
              <i className="fas fa-building"></i>
              Company Registration
            </button>
            <button 
              className="btn btn-secondary floating"
              onClick={() => onNavigate('login')}
            >
              <i className="fas fa-sign-in-alt"></i>
              Login
            </button>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
              alt="Project Management" 
              className="parallax-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>

      <div className="features-section" ref={sectionRef}>
        <h2 className={`section-title ${isVisible ? 'animate-from-bottom' : ''}`}>TaskMant Features</h2>
        <div className="features-grid">
          <div className={`feature-card ${isVisible ? 'animate-from-left' : ''}`}>
            <div className="feature-content">
              <div className="feature-icon">
                <i className="fas fa-ticket-alt"></i>
              </div>
              <h3>Ticket Management</h3>
              <p>Create tasks as tickets and assign points based on difficulty level</p>
            </div>
            <div className="feature-hover-content">
              <p>Advanced filtering and prioritization tools</p>
              <button className="btn-feature-more">Learn more</button>
            </div>
          </div>
          
          <div className={`feature-card ${isVisible ? 'animate-from-bottom' : ''}`}>
            <div className="feature-content">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Team Management</h3>
              <p>Add employees, assign roles, and allocate tasks efficiently</p>
            </div>
            <div className="feature-hover-content">
              <p>Role-based permissions and team analytics</p>
              <button className="btn-feature-more">Learn more</button>
            </div>
          </div>
          
          <div className={`feature-card ${isVisible ? 'animate-from-right' : ''}`}>
            <div className="feature-content">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Progress Tracking</h3>
              <p>Monitor and analyze project progress in real-time</p>
            </div>
            <div className="feature-hover-content">
              <p>Customizable dashboards and reporting</p>
              <button className="btn-feature-more">Learn more</button>
            </div>
          </div>
        </div>
      </div>

      {/* Auth forms with enhanced animations */}
      <div className="auth-container">
        {activeTab === 'login' && (
          <div className="auth-form slide-in">
            <h3>Login to Your Account</h3>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email or Username</label>
                <input type="text" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
                <div className="password-actions">
                  <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <a href="#forgot" className="forgot-password">Forgot password?</a>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-auth">
                <span>Login</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
            <div className="social-login">
              <p>Or login with</p>
              <div className="social-buttons">
                <button className="btn-social google">
                  <i className="fab fa-google"></i>
                </button>
                <button className="btn-social github">
                  <i className="fab fa-github"></i>
                </button>
                <button className="btn-social linkedin">
                  <i className="fab fa-linkedin"></i>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'signup' && (
          <div className="auth-form slide-in">
            <h3>Create New Account</h3>
            <form onSubmit={handleSignup}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Create a password" required />
                <div className="password-strength">
                  <div className="strength-bar">
                    <div className="strength-fill"></div>
                  </div>
                  <span className="strength-text">Password strength</span>
                </div>
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm your password" required />
              </div>
              <div className="form-group checkbox-group">
                <label className="checkbox-container">
                  <input type="checkbox" required />
                  <span className="checkmark"></span>
                  I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-auth">
                <span>Sign Up</span>
                <i className="fas fa-user-plus"></i>
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Additional sections */}
      <div className="testimonials-section">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"TaskMant transformed how our team collaborates. We've seen a 45% increase in productivity since implementation."</p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Sarah Johnson" />
              <div>
                <h4>Sarah Johnson</h4>
                <p>Project Manager, TechCorp</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"The intuitive interface and powerful features make TaskMant stand out from other project management tools."</p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Chen" />
              <div>
                <h4>Michael Chen</h4>
                <p>CTO, StartupHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Boost Your Team's Productivity?</h2>
          <p>Join thousands of teams already using TaskMant to streamline their workflow</p>
          <button className="btn btn-primary btn-large">Get Started Free</button>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
