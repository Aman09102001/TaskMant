// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
// import '../styles/SignUp.css';

// const SignUP = ({ onLogin }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     companyId: '',
//     phoneNumber: '',
//     department: '',
//     position: '',
//     role: 'Employee',
//     managerId: '',
//     password: '',
//     confirmPassword: '',
//     agreeToTerms: false,
//     receiveNewsletter: false,
//     profilePhoto: null
//   });
  
//   const [profilePreview, setProfilePreview] = useState(null);
//   const [passwordStrength, setPasswordStrength] = useState(0);
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
    
//     if (type === 'file') {
//       const file = files[0];
//       setFormData({
//         ...formData,
//         [name]: file
//       });
      
//       // Create preview for profile photo
//       if (file) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           setProfilePreview(e.target.result);
//         };
//         reader.readAsDataURL(file);
//       } else {
//         setProfilePreview(null);
//       }
//       return;
//     }
    
//     const newValue = type === 'checkbox' ? checked : value;
//     setFormData({
//       ...formData,
//       [name]: newValue
//     });
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
    
//     // Calculate password strength when password changes
//     if (name === 'password') {
//       calculatePasswordStrength(value);
//     }
//   };

//   const calculatePasswordStrength = (password) => {
//     let strength = 0;
    
//     if (password.length >= 8) strength += 25;
//     if (/[A-Z]/.test(password)) strength += 25;
//     if (/[0-9]/.test(password)) strength += 25;
//     if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    
//     setPasswordStrength(strength);
//   };

//   const getPasswordStrengthColor = () => {
//     if (passwordStrength < 50) return '#ff4d4d';
//     if (passwordStrength < 75) return '#ffa64d';
//     return '#2ecc71';
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.firstName) newErrors.firstName = 'First name is required';
//     if (!formData.lastName) newErrors.lastName = 'Last name is required';
    
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (!formData.companyId) newErrors.companyId = 'Company ID is required';
//     if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
//     if (!formData.department) newErrors.department = 'Department is required';
//     if (!formData.position) newErrors.position = 'Position is required';
    
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters';
//     }
    
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
    
//     if (!formData.agreeToTerms) {
//       newErrors.agreeToTerms = 'You must agree to the terms and conditions';
//     }
    
//     // Additional validation for employee role
//     if (formData.role === 'Employee' && !formData.managerId) {
//       newErrors.managerId = 'Manager ID is required for employees';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;
    
//     setIsLoading(true);
    
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       // After successful registration, login the user
//       const userData = {
//         name: `${formData.firstName} ${formData.lastName}`,
//         email: formData.email,
//         role: formData.role,
//         profilePhoto: profilePreview || 'https://randomuser.me/api/portraits/men/45.jpg'
//       };
      
//       onLogin(userData);
//       navigate('/dashboard');
//     } catch (error) {
//       setErrors({ submit: 'Registration failed. Please try again.' });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSocialRegistration = (provider) => {
//     console.log(`Registering with ${provider}`);
//     // Social registration implementation would go here
//   };

//   return (
//     <div className="registration-page">
//       <Header isLoggedIn={false} scrollPosition={0} />
      
//       <div className="registration-container">
//         <div className="registration-content">
//           <div className="registration-left">
//             <div className="registration-hero">
//               <h1>Join <span className="brand">TaskMant</span> Today</h1>
//               <p>Create your account and start managing projects efficiently with our powerful collaboration tools.</p>
              
//               <div className="benefits-list">
//                 <div className="benefit-item">
//                   <div className="benefit-icon">
//                     <i className="fas fa-rocket"></i>
//                   </div>
//                   <div className="benefit-content">
//                     <h4>Fast Setup</h4>
//                     <p>Get started in minutes with our intuitive onboarding process</p>
//                   </div>
//                 </div>

//                 <div className="benefit-item">
//                   <div className="benefit-icon">
//                     <i className="fas fa-shield-alt"></i>
//                   </div>
//                   <div className="benefit-content">
//                     <h4>Secure Platform</h4>
//                     <p>Enterprise-grade security for your data and projects</p>
//                   </div>
//                 </div>

//                 <div className="benefit-item">
//                   <div className="benefit-icon">
//                     <i className="fas fa-graduation-cap"></i>
//                   </div>
//                   <div className="benefit-content">
//                     <h4>Free Training</h4>
//                     <p>Access comprehensive tutorials and resources</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="testimonial">
//                 <div className="testimonial-content">
//                   <p>"TaskMant transformed how our team works. We're 40% more productive since switching!"</p>
//                 </div>
//                 <div className="testimonial-author">
//                   <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sarah Chen" />
//                   <div>
//                     <h5>Sarah Chen</h5>
//                     <p>Project Manager, TechSolutions Inc.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="registration-right">
//             <div className="registration-form-container">
//               <div className="form-header">
//                 <h2>Create Your Account</h2>
//                 <p>Get started with your 14-day free trial</p>
//               </div>

//               <form className="registration-form" onSubmit={handleSubmit}>
//                 {errors.submit && (
//                   <div className="error-message submit-error">
//                     <i className="fas fa-exclamation-circle"></i>
//                     {errors.submit}
//                   </div>
//                 )}

//                 {/* Profile Photo at the Top */}
//                 <div className="form-group profile-photo-top">
//                   <label htmlFor="profilePhoto">Profile Photo</label>
//                   <div className="profile-upload-container">
//                     <div className="profile-preview">
//                       {profilePreview ? (
//                         <img src={profilePreview} alt="Profile preview" />
//                       ) : (
//                         <i className="fas fa-user-circle"></i>
//                       )}
//                     </div>
//                     <div className="profile-upload">
//                       <label htmlFor="profilePhoto" className="profile-upload-btn">
//                         <i className="fas fa-upload"></i> Choose Photo
//                       </label>
//                       <input
//                         type="file"
//                         id="profilePhoto"
//                         name="profilePhoto"
//                         accept="image/*"
//                         onChange={handleInputChange}
//                         style={{ display: 'none' }}
//                       />
//                       <span className="profile-upload-text">
//                         {formData.profilePhoto ? formData.profilePhoto.name : 'No file chosen'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="name-fields">
//                   <div className="form-group">
//                     <label htmlFor="firstName">First Name *</label>
//                     <input
//                       type="text"
//                       id="firstName"
//                       name="firstName"
//                       placeholder="John"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       className={errors.firstName ? 'error' : ''}
//                       required
//                     />
//                     {errors.firstName && <span className="error-text">{errors.firstName}</span>}
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="lastName">Last Name *</label>
//                     <input
//                       type="text"
//                       id="lastName"
//                       name="lastName"
//                       placeholder="Doe"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       className={errors.lastName ? 'error' : ''}
//                       required
//                     />
//                     {errors.lastName && <span className="error-text">{errors.lastName}</span>}
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="email">Work Email *</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-envelope"></i>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder="john@company.com"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className={errors.email ? 'error' : ''}
//                       required
//                     />
//                   </div>
//                   {errors.email && <span className="error-text">{errors.email}</span>}
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="companyId">Company ID *</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-building"></i>
//                     <input
//                       type="text"
//                       id="companyId"
//                       name="companyId"
//                       placeholder="Enter your company ID"
//                       value={formData.companyId}
//                       onChange={handleInputChange}
//                       className={errors.companyId ? 'error' : ''}
//                       required
//                     />
//                   </div>
//                   {errors.companyId && <span className="error-text">{errors.companyId}</span>}
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="phoneNumber">Phone Number *</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-phone"></i>
//                     <input
//                       type="tel"
//                       id="phoneNumber"
//                       name="phoneNumber"
//                       placeholder="+1 (555) 123-4567"
//                       value={formData.phoneNumber}
//                       onChange={handleInputChange}
//                       className={errors.phoneNumber ? 'error' : ''}
//                       required
//                     />
//                   </div>
//                   {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="department">Department *</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-users"></i>
//                     <input
//                       type="text"
//                       id="department"
//                       name="department"
//                       placeholder="e.g., Engineering, Marketing"
//                       value={formData.department}
//                       onChange={handleInputChange}
//                       className={errors.department ? 'error' : ''}
//                       required
//                     />
//                   </div>
//                   {errors.department && <span className="error-text">{errors.department}</span>}
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="position">Position *</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-briefcase"></i>
//                     <input
//                       type="text"
//                       id="position"
//                       name="position"
//                       placeholder="e.g., Developer, Designer"
//                       value={formData.position}
//                       onChange={handleInputChange}
//                       className={errors.position ? 'error' : ''}
//                       required
//                     />
//                   </div>
//                   {errors.position && <span className="error-text">{errors.position}</span>}
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="role">Role *</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-user-tag"></i>
//                     <select
//                       id="role"
//                       name="role"
//                       value={formData.role}
//                       onChange={handleInputChange}
//                       required
//                     >
//                       <option value="Employee">Employee</option>
//                       <option value="Manager">Manager</option>
//                       <option value="CEO">CEO</option>
//                     </select>
//                   </div>
//                 </div>

//                 {formData.role === 'Employee' && (
//                   <div className="form-group">
//                     <label htmlFor="managerId">Manager ID *</label>
//                     <div className="input-with-icon">
//                       <i className="fas fa-user-shield"></i>
//                       <input
//                         type="text"
//                         id="managerId"
//                         name="managerId"
//                         placeholder="Enter your manager's ID"
//                         value={formData.managerId}
//                         onChange={handleInputChange}
//                         className={errors.managerId ? 'error' : ''}
//                         required
//                       />
//                     </div>
//                     {errors.managerId && <span className="error-text">{errors.managerId}</span>}
//                   </div>
//                 )}

//                 <div className="form-group">
//                   <label htmlFor="password">Password *</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-lock"></i>
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       placeholder="Create a strong password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                       className={errors.password ? 'error' : ''}
//                       required
//                     />
//                   </div>
//                   <div className="password-strength">
//                     <div className="strength-bar">
//                       <div 
//                         className="strength-fill"
//                         style={{
//                           width: `${passwordStrength}%`,
//                           backgroundColor: getPasswordStrengthColor()
//                         }}
//                       ></div>
//                     </div>
//                     <span className="strength-text">
//                       {passwordStrength < 50 ? 'Weak' : passwordStrength < 75 ? 'Good' : 'Strong'}
//                     </span>
//                   </div>
//                   {errors.password && <span className="error-text">{errors.password}</span>}
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="confirmPassword">Confirm Password *</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-lock"></i>
//                     <input
//                       type="password"
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       placeholder="Confirm your password"
//                       value={formData.confirmPassword}
//                       onChange={handleInputChange}
//                       className={errors.confirmPassword ? 'error' : ''}
//                       required
//                     />
//                   </div>
//                   {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
//                 </div>

//                 <div className="form-options">
//                   <label className="checkbox-container">
//                     <input
//                       type="checkbox"
//                       name="agreeToTerms"
//                       checked={formData.agreeToTerms}
//                       onChange={handleInputChange}
//                       required
//                     />
//                     <span className="checkmark"></span>
//                     I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
//                   </label>
//                   {errors.agreeToTerms && <span className="error-text">{errors.agreeToTerms}</span>}

//                   <label className="checkbox-container">
//                     <input
//                       type="checkbox"
//                       name="receiveNewsletter"
//                       checked={formData.receiveNewsletter}
//                       onChange={handleInputChange}
//                     />
//                     <span className="checkmark"></span>
//                     Send me product updates and tips
//                   </label>
//                 </div>

//                 <button 
//                   type="submit" 
//                   className="btn btn-primary btn-register"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? (
//                     <>
//                       <i className="fas fa-spinner fa-spin"></i>
//                       Creating Account...
//                     </>
//                   ) : (
//                     <>
//                       <span>Create Account</span>
//                       <i className="fas fa-user-plus"></i>
//                     </>
//                   )}
//                 </button>

//                 <div className="divider">
//                   <span>Or sign up with</span>
//                 </div>

//                 <div className="social-registration-buttons">
//                   <button 
//                     type="button" 
//                     className="btn-social google"
//                     onClick={() => handleSocialRegistration('Google')}
//                   >
//                     <i className="fab fa-google"></i>
//                     Google
//                   </button>
//                   <button 
//                     type="button" 
//                     className="btn-social microsoft"
//                     onClick={() => handleSocialRegistration('Microsoft')}
//                   >
//                     <i className="fab fa-microsoft"></i>
//                     Microsoft
//                   </button>
//                   <button 
//                     type="button" 
//                     className="btn-social linkedin"
//                     onClick={() => handleSocialRegistration('LinkedIn')}
//                   >
//                     <i className="fab fa-linkedin"></i>
//                     LinkedIn
//                   </button>
//                 </div>

//                 <div className="login-link">
//                   <p>Already have an account? <a href="/login">Sign in here</a></p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SignUP;


// src/components/SignUP.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import '../styles/SignUp.css';

const SignUP = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyId: '', // maps to companyDomain
    role:'EMPLOYEE',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';

    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    if (!formData.companyId) newErrors.companyId = 'Company domain is required';

    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setIsLoading(true);

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        companyDomain: formData.companyId
      };

      const response = await axios.post('http://localhost:5000/api/auth/register', payload);

      if (response.data.success) {
       
        const user = response.data.data.user;
         console.log(user);
        const token = response.data.data.token;

        localStorage.setItem('authToken', token); // store JWT token
        onLogin(user); // set user in parent component
        navigate('/dashboard'); // redirect after signup
      } else {
        setErrors({ submit: response.data.message || 'Registration failed' });
      }
    } catch (error) {
      setErrors({ submit: error.response?.data?.message || error.message || 'Registration failed' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="registration-page">
      <Header isLoggedIn={false} scrollPosition={0} />

      <div className="registration-container">
        <div className="registration-content">
          <div className="registration-left">
            <div className="registration-hero">
              <h1>Join <span className="brand">TaskMant</span> Today</h1>
              <p>Create your account and start managing projects efficiently.</p>
            </div>
          </div>

          <div className="registration-right">
            <div className="registration-form-container">
              <div className="form-header">
                <h2>Create Your Account</h2>
              </div>

              <form className="registration-form" onSubmit={handleSubmit}>
                {errors.submit && (
                  <div className="error-message submit-error">
                    {errors.submit}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className={errors.firstName ? 'error' : ''}
                    required
                  />
                  {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className={errors.lastName ? 'error' : ''}
                    required
                  />
                  {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className={errors.email ? 'error' : ''}
                    required
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="companyId">Company Domain *</label>
                  <input
                    type="text"
                    id="companyId"
                    name="companyId"
                    value={formData.companyId}
                    onChange={handleInputChange}
                    placeholder="example.com"
                    className={errors.companyId ? 'error' : ''}
                    required
                  />
                  {errors.companyId && <span className="error-text">{errors.companyId}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="role">Role *</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                  >
                    <option value="EMPLOYEE">Employee</option>
                    <option value="MANAGER">Manager</option>
                    <option value="CEO">CEO</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password *</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className={errors.password ? 'error' : ''}
                    required
                  />
                  {errors.password && <span className="error-text">{errors.password}</span>}
                </div>

                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUP;
