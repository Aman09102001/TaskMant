// import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import '../styles/SignUp.css';

// const SignUP = ({ onNavigate, setActiveTab }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     companyName: '',
//     phoneNumber: '',
//     agreeToTerms: false,
//     receiveNewsletter: true
//   });

//   const [passwordStrength, setPasswordStrength] = useState(0);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));

//     // Password strength calculation
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
//     if (passwordStrength < 75) return '#ffa500';
//     return '#4caf50';
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
    
//     if (!formData.agreeToTerms) {
//       alert('Please agree to the terms and conditions');
//       return;
//     }

//     console.log('Registration data:', formData);
//     // Yahan aap actual registration logic implement karenge
//   };

//   return (
//     <div className="registration-page">
//       {/* Animated background */}
//       <div className="animated-bg">
//         <div className="shape shape-1"></div>
//         <div className="shape shape-2"></div>
//         <div className="shape shape-3"></div>
//       </div>

//       <Header 
//         activeTab="signup" 
//         setActiveTab={setActiveTab} 
//         scrollPosition={0} 
//       />
      
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
//                 <div className="name-fields">
//                   <div className="form-group">
//                     <label htmlFor="firstName">First Name</label>
//                     <input
//                       type="text"
//                       id="firstName"
//                       name="firstName"
//                       placeholder="John"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="lastName">Last Name</label>
//                     <input
//                       type="text"
//                       id="lastName"
//                       name="lastName"
//                       placeholder="Doe"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="email">Work Email</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-envelope"></i>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder="john@company.com"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="companyName">Company Name (Optional)</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-building"></i>
//                     <input
//                       type="text"
//                       id="companyName"
//                       name="companyName"
//                       placeholder="Your Company Inc."
//                       value={formData.companyName}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="phoneNumber">Phone Number (Optional)</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-phone"></i>
//                     <input
//                       type="tel"
//                       id="phoneNumber"
//                       name="phoneNumber"
//                       placeholder="+1 (555) 123-4567"
//                       value={formData.phoneNumber}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="password">Password</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-lock"></i>
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       placeholder="Create a strong password"
//                       value={formData.password}
//                       onChange={handleInputChange}
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
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="confirmPassword">Confirm Password</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-lock"></i>
//                     <input
//                       type="password"
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       placeholder="Confirm your password"
//                       value={formData.confirmPassword}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
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

//                 <button type="submit" className="btn btn-primary btn-register">
//                   <span>Create Account</span>
//                   <i className="fas fa-user-plus"></i>
//                 </button>

//                 <div className="divider">
//                   <span>Or sign up with</span>
//                 </div>

//                 <div className="social-registration-buttons">
//                   <button type="button" className="btn-social google">
//                     <i className="fab fa-google"></i>
//                     Google
//                   </button>
//                   <button type="button" className="btn-social microsoft">
//                     <i className="fab fa-microsoft"></i>
//                     Microsoft
//                   </button>
//                   <button type="button" className="btn-social linkedin">
//                     <i className="fab fa-linkedin"></i>
//                     LinkedIn
//                   </button>
//                 </div>

//                 <div className="login-link">
//                   <p>Already have an account? <button type="button" onClick={() => setActiveTab('login')}>Sign in here</button></p>
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





// import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import '../styles/SignUp.css';

// const SignUP = ({ onNavigate, setActiveTab }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     companyId: '',
//     phoneNumber: '',
//     role: 'Employee', // Default role
//     managerId: '',
//     department: '',
//     position: '',
//     profilePhoto: null,
//     agreeToTerms: false,
//     receiveNewsletter: true
//   });

//   const [passwordStrength, setPasswordStrength] = useState(0);
//   const [profilePreview, setProfilePreview] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
    
//     if (type === 'file') {
//       const file = files[0];
//       setFormData(prev => ({
//         ...prev,
//         [name]: file
//       }));
      
//       // Create preview for profile picture
//       if (file) {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           setProfilePreview(reader.result);
//         };
//         reader.readAsDataURL(file);
//       } else {
//         setProfilePreview(null);
//       }
//     } else {
//       setFormData(prev => ({
//         ...prev,
//         [name]: type === 'checkbox' ? checked : value
//       }));
//     }

//     // Password strength calculation
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
//     if (passwordStrength < 75) return '#ffa500';
//     return '#4caf50';
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
    
//     if (!formData.agreeToTerms) {
//       alert('Please agree to the terms and conditions');
//       return;
//     }

//     // Additional validation for employee role
//     if (formData.role === 'Employee' && !formData.managerId) {
//       alert('Please enter your Manager ID');
//       return;
//     }

//     console.log('Registration data:', formData);
//     // Yahan aap actual registration logic implement karenge
//   };

//   return (
//     <div className="registration-page">
//       {/* Animated background */}
//       <div className="animated-bg">
//         <div className="shape shape-1"></div>
//         <div className="shape shape-2"></div>
//         <div className="shape shape-3"></div>
//       </div>

//       <Header 
//         activeTab="signup" 
//         setActiveTab={setActiveTab} 
//         scrollPosition={0} 
//       />
      
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
//                 <div className="name-fields">
//                   <div className="form-group">
//                     <label htmlFor="firstName">First Name</label>
//                     <input
//                       type="text"
//                       id="firstName"
//                       name="firstName"
//                       placeholder="John"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="lastName">Last Name</label>
//                     <input
//                       type="text"
//                       id="lastName"
//                       name="lastName"
//                       placeholder="Doe"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="email">Work Email</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-envelope"></i>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder="john@company.com"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="companyId">Company ID</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-building"></i>
//                     <input
//                       type="text"
//                       id="companyId"
//                       name="companyId"
//                       placeholder="Enter your company ID"
//                       value={formData.companyId}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="phoneNumber">Phone Number</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-phone"></i>
//                     <input
//                       type="tel"
//                       id="phoneNumber"
//                       name="phoneNumber"
//                       placeholder="+1 (555) 123-4567"
//                       value={formData.phoneNumber}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="department">Department</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-users"></i>
//                     <input
//                       type="text"
//                       id="department"
//                       name="department"
//                       placeholder="e.g., Engineering, Marketing"
//                       value={formData.department}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="position">Position</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-briefcase"></i>
//                     <input
//                       type="text"
//                       id="position"
//                       name="position"
//                       placeholder="e.g., Developer, Designer"
//                       value={formData.position}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="role">Role</label>
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
//                     <label htmlFor="managerId">Manager ID</label>
//                     <div className="input-with-icon">
//                       <i className="fas fa-user-shield"></i>
//                       <input
//                         type="text"
//                         id="managerId"
//                         name="managerId"
//                         placeholder="Enter your manager's ID"
//                         value={formData.managerId}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   </div>
//                 )}

//                 <div className="form-group">
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

//                 <div className="form-group">
//                   <label htmlFor="password">Password</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-lock"></i>
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       placeholder="Create a strong password"
//                       value={formData.password}
//                       onChange={handleInputChange}
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
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="confirmPassword">Confirm Password</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-lock"></i>
//                     <input
//                       type="password"
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       placeholder="Confirm your password"
//                       value={formData.confirmPassword}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
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

//                 <button type="submit" className="btn btn-primary btn-register">
//                   <span>Create Account</span>
//                   <i className="fas fa-user-plus"></i>
//                 </button>

//                 <div className="divider">
//                   <span>Or sign up with</span>
//                 </div>

//                 <div className="social-registration-buttons">
//                   <button type="button" className="btn-social google">
//                     <i className="fab fa-google"></i>
//                     Google
//                   </button>
//                   <button type="button" className="btn-social microsoft">
//                     <i className="fab fa-microsoft"></i>
//                     Microsoft
//                   </button>
//                   <button type="button" className="btn-social linkedin">
//                     <i className="fab fa-linkedin"></i>
//                     LinkedIn
//                   </button>
//                 </div>

//                 <div className="login-link">
//                   <p>Already have an account? <button type="button" onClick={() => setActiveTab('login')}>Sign in here</button></p>
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






import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/SignUp.css';

const SignUP = ({ onNavigate, setActiveTab }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyId: '',
    phoneNumber: '',
    role: 'Employee', // Default role
    managerId: '',
    department: '',
    position: '',
    profilePhoto: null,
    agreeToTerms: false,
    receiveNewsletter: true
  });

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [profilePreview, setProfilePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      const file = files[0];
      setFormData(prev => ({
        ...prev,
        [name]: file
      }));
      
      // Create preview for profile picture
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfilePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setProfilePreview(null);
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }

    // Password strength calculation
    if (name === 'password') {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 50) return '#ff4d4d';
    if (passwordStrength < 75) return '#ffa500';
    return '#4caf50';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    // Additional validation for employee role
    if (formData.role === 'Employee' && !formData.managerId) {
      alert('Please enter your Manager ID');
      return;
    }

    console.log('Registration data:', formData);
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
        activeTab="signup" 
        setActiveTab={setActiveTab} 
        scrollPosition={0} 
      />
      
      <div className="registration-container">
        <div className="registration-content">
          <div className="registration-left">
            <div className="registration-hero">
              <h1>Join <span className="brand">TaskMant</span> Today</h1>
              <p>Create your account and start managing projects efficiently with our powerful collaboration tools.</p>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div className="benefit-content">
                    <h4>Fast Setup</h4>
                    <p>Get started in minutes with our intuitive onboarding process</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="benefit-content">
                    <h4>Secure Platform</h4>
                    <p>Enterprise-grade security for your data and projects</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="benefit-content">
                    <h4>Free Training</h4>
                    <p>Access comprehensive tutorials and resources</p>
                  </div>
                </div>
              </div>

              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"TaskMant transformed how our team works. We're 40% more productive since switching!"</p>
                </div>
                <div className="testimonial-author">
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sarah Chen" />
                  <div>
                    <h5>Sarah Chen</h5>
                    <p>Project Manager, TechSolutions Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="registration-right">
            <div className="registration-form-container">
              <div className="form-header">
                <h2>Create Your Account</h2>
                <p>Get started with your 14-day free trial</p>
              </div>

              <form className="registration-form" onSubmit={handleSubmit}>
                {/* Profile Photo at the Top */}
                <div className="form-group profile-photo-top">
                  <label htmlFor="profilePhoto">Profile Photo</label>
                  <div className="profile-upload-container">
                    <div className="profile-preview">
                      {profilePreview ? (
                        <img src={profilePreview} alt="Profile preview" />
                      ) : (
                        <i className="fas fa-user-circle"></i>
                      )}
                    </div>
                    <div className="profile-upload">
                      <label htmlFor="profilePhoto" className="profile-upload-btn">
                        <i className="fas fa-upload"></i> Choose Photo
                      </label>
                      <input
                        type="file"
                        id="profilePhoto"
                        name="profilePhoto"
                        accept="image/*"
                        onChange={handleInputChange}
                        style={{ display: 'none' }}
                      />
                      <span className="profile-upload-text">
                        {formData.profilePhoto ? formData.profilePhoto.name : 'No file chosen'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="name-fields">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Work Email</label>
                  <div className="input-with-icon">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="companyId">Company ID</label>
                  <div className="input-with-icon">
                    <i className="fas fa-building"></i>
                    <input
                      type="text"
                      id="companyId"
                      name="companyId"
                      placeholder="Enter your company ID"
                      value={formData.companyId}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <div className="input-with-icon">
                    <i className="fas fa-phone"></i>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="department">Department</label>
                  <div className="input-with-icon">
                    <i className="fas fa-users"></i>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      placeholder="e.g., Engineering, Marketing"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <div className="input-with-icon">
                    <i className="fas fa-briefcase"></i>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      placeholder="e.g., Developer, Designer"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <div className="input-with-icon">
                    <i className="fas fa-user-tag"></i>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Employee">Employee</option>
                      <option value="Manager">Manager</option>
                      <option value="CEO">CEO</option>
                    </select>
                  </div>
                </div>

                {formData.role === 'Employee' && (
                  <div className="form-group">
                    <label htmlFor="managerId">Manager ID</label>
                    <div className="input-with-icon">
                      <i className="fas fa-user-shield"></i>
                      <input
                        type="text"
                        id="managerId"
                        name="managerId"
                        placeholder="Enter your manager's ID"
                        value={formData.managerId}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-with-icon">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="password-strength">
                    <div className="strength-bar">
                      <div 
                        className="strength-fill"
                        style={{
                          width: `${passwordStrength}%`,
                          backgroundColor: getPasswordStrengthColor()
                        }}
                      ></div>
                    </div>
                    <span className="strength-text">
                      {passwordStrength < 50 ? 'Weak' : passwordStrength < 75 ? 'Good' : 'Strong'}
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="input-with-icon">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
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

                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      name="receiveNewsletter"
                      checked={formData.receiveNewsletter}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    Send me product updates and tips
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-register">
                  <span>Create Account</span>
                  <i className="fas fa-user-plus"></i>
                </button>

                <div className="divider">
                  <span>Or sign up with</span>
                </div>

                <div className="social-registration-buttons">
                  <button type="button" className="btn-social google">
                    <i className="fab fa-google"></i>
                    Google
                  </button>
                  <button type="button" className="btn-social microsoft">
                    <i className="fab fa-microsoft"></i>
                    Microsoft
                  </button>
                  <button type="button" className="btn-social linkedin">
                    <i className="fab fa-linkedin"></i>
                    LinkedIn
                  </button>
                </div>

                <div className="login-link">
                  <p>Already have an account? <button type="button" onClick={() => setActiveTab('login')}>Sign in here</button></p>
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

export default SignUP;