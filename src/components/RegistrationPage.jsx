import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/RegistrationPage.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyDomain: '',
    companyDescription: '',
    agreeToTerms: false,
    companyLogo: null
  });
  const [logoPreview, setLogoPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      const file = files[0];
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
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.companyName) {
      newErrors.companyName = 'Company name is required';
    }
    
    if (!formData.companyDomain) {
      newErrors.companyDomain = 'Company domain is required';
    } else if (!/^[a-zA-Z0-9-]+$/.test(formData.companyDomain)) {
      newErrors.companyDomain = 'Domain can only contain letters, numbers, and hyphens';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Company registration data:', formData);
      alert('Company registered successfully!');
      navigate('/signup');
    } catch (error) {
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="registration-page">
      {/* Animated background */}
      <div className="animated-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <Header isLoggedIn={false} scrollPosition={0} />
      
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
                {errors.submit && (
                  <div className="error-message submit-error">
                    <i className="fas fa-exclamation-circle"></i>
                    {errors.submit}
                  </div>
                )}

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
                      className={errors.companyName ? 'error' : ''}
                      required
                    />
                  </div>
                  {errors.companyName && <span className="error-text">{errors.companyName}</span>}
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
                      className={errors.companyDomain ? 'error' : ''}
                      required
                    />
                  </div>
                  <div className="domain-hint">
                    Your workspace URL: {formData.companyDomain ? `${formData.companyDomain}.taskmant.com` : 'yourcompany.taskmant.com'}
                  </div>
                  {errors.companyDomain && <span className="error-text">{errors.companyDomain}</span>}
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
                  {errors.agreeToTerms && <span className="error-text">{errors.agreeToTerms}</span>}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-register"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-building"></i>
                      <span>Create Company Account</span>
                    </>
                  )}
                </button>

                <div className="login-link">
                  <p>Already have a company account? <a href="/login">Sign in here</a></p>
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