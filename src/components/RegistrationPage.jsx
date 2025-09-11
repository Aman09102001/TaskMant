import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/RegistrationPage.css';

const RegistrationPage = ({ onNavigate, setActiveTab }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyDomain: '',
    companyDescription: '',
    agreeToTerms: false,
    companyLogo: null
  });

  const [logoPreview, setLogoPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'file') {
      const file = e.target.files[0];
      if (file) {
        setFormData(prev => ({
          ...prev,
          [name]: file
        }));
        
        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setLogoPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    console.log('Company registration data:', formData);
    // Yahan aap actual registration logic implement karenge
  };

  return (
    <div className="registration-page">
      {/* Animated background */}
      <div className="animated-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <Header 
        activeTab="company-register" 
        setActiveTab={setActiveTab} 
        scrollPosition={0} 
      />
      
      <div className="registration-container">
        <div className="registration-content">
          <div className="registration-left">
            <div className="registration-hero">
              <h1>Register Your <span className="brand">Company</span></h1>
              <p>Set up your company account on TaskMant and empower your team with powerful project management tools.</p>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <div className="benefit-content">
                    <h4>Company Workspace</h4>
                    <p>Dedicated workspace for your entire organization</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="benefit-content">
                    <h4>Team Management</h4>
                    <p>Invite and manage your team members easily</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="benefit-content">
                    <h4>Advanced Analytics</h4>
                    <p>Track productivity and project progress</p>
                  </div>
                </div>
              </div>

              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"TaskMant helped us streamline our workflow and improved team collaboration by 60% in just 3 months."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar-circle">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex Johnson" />
                  </div>
                  <div>
                    <h5>Alex Johnson</h5>
                    <p>CTO, TechInnovate Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="registration-right">
            <div className="registration-form-container">
              <div className="form-header">
                <h2>Company Registration</h2>
                <p>Create your company account and get started</p>
              </div>

              <form className="registration-form" onSubmit={handleSubmit}>
                {/* Company Logo Upload - Circular */}
                <div className="form-group">
                  <label htmlFor="companyLogo">Company Logo</label>
                  <div className="logo-upload-container">
                    <div className="logo-preview-circle">
                      {logoPreview ? (
                        <img src={logoPreview} alt="Company logo preview" />
                      ) : (
                        <i className="fas fa-building"></i>
                      )}
                    </div>
                    <label htmlFor="companyLogo" className="logo-upload-btn">
                      <i className="fas fa-upload"></i>
                      Upload Logo
                      <input
                        type="file"
                        id="companyLogo"
                        name="companyLogo"
                        accept="image/*"
                        onChange={handleInputChange}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>
                </div>

                {/* Company Information */}
                <div className="form-group">
                  <label htmlFor="companyName">Company Name *</label>
                  <div className="input-with-icon">
                    <i className="fas fa-building"></i>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="Your Company Name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="companyDomain">Company Domain *</label>
                  <div className="input-with-icon">
                    <i className="fas fa-globe"></i>
                    <input
                      type="text"
                      id="companyDomain"
                      name="companyDomain"
                      placeholder="yourcompany"
                      value={formData.companyDomain}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="domain-hint">
                    Your workspace URL: {formData.companyDomain ? `${formData.companyDomain}.taskmant.com` : 'yourcompany.taskmant.com'}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="companyDescription">Company Description</label>
                  <textarea
                    id="companyDescription"
                    name="companyDescription"
                    placeholder="Brief description of your company..."
                    value={formData.companyDescription}
                    onChange={handleInputChange}
                    rows="3"
                    className="description-textarea"
                  />
                </div>

                <div className="form-options">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="checkmark"></span>
                    I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-register">
                  <i className="fas fa-building"></i>
                  <span>Create Company Account</span>
                </button>

                <div className="login-link">
                  <p>Already have a company account? <button type="button" onClick={() => setActiveTab('login')}>Sign in here</button></p>
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

export default RegistrationPage;