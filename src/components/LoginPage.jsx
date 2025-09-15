// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
// import '../styles/LoginPage.css';

// const LoginPage = ({ onLogin }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     rememberMe: false
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
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
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       // Mock user data based on email (for demo purposes)
//       let userData;
//       if (formData.email.includes('manager')) {
//         userData = {
//           name: 'John Manager',
//           email: formData.email,
//           role: 'Manager',
//           profilePhoto: 'https://randomuser.me/api/portraits/men/32.jpg'
//         };
//       } else {
//         userData = {
//           name: 'Jane Employee',
//           email: formData.email,
//           role: 'Employee',
//           profilePhoto: 'https://randomuser.me/api/portraits/women/44.jpg'
//         };
//       }
      
//       onLogin(userData);
//       navigate('/dashboard');
//     } catch (error) {
//       setErrors({ submit: 'Login failed. Please try again.' });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSocialLogin = (provider) => {
//     console.log(`Logging in with ${provider}`);
//     // Social login implementation would go here
//   };

//   return (
//     <div className="login-page">
//       <Header isLoggedIn={false} scrollPosition={0} />
      
//       <div className="login-container">
//         <div className="login-content">
//           <div className="login-left">
//             <div className="login-hero">
//               <h1>Welcome Back to <span className="brand">TaskMant</span></h1>
//               <p>Sign in to access your projects, tasks, and team collaboration tools.</p>
              
//               <div className="benefits-list">
//                 <div className="benefit-item">
//                   <div className="benefit-icon">
//                     <i className="fas fa-tasks"></i>
//                   </div>
//                   <div className="benefit-content">
//                     <h4>Manage Projects</h4>
//                     <p>Track progress and collaborate with your team</p>
//                   </div>
//                 </div>

//                 <div className="benefit-item">
//                   <div className="benefit-icon">
//                     <i className="fas fa-chart-line"></i>
//                   </div>
//                   <div className="benefit-content">
//                     <h4>Track Performance</h4>
//                     <p>Monitor productivity and project metrics</p>
//                   </div>
//                 </div>

//                 <div className="benefit-item">
//                   <div className="benefit-icon">
//                     <i className="fas fa-users"></i>
//                   </div>
//                   <div className="benefit-content">
//                     <h4>Team Collaboration</h4>
//                     <p>Work seamlessly with your entire team</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="testimonial">
//                 <div className="testimonial-content">
//                   <p>"TaskMant has revolutionized how our team works. We're 40% more productive since implementation."</p>
//                 </div>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">
//                     <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sarah Chen" />
//                   </div>
//                   <div>
//                     <h5>Sarah Chen</h5>
//                     <p>Project Manager, TechSolutions Inc.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="login-right">
//             <div className="login-form-container">
//               <div className="form-header">
//                 <h2>Sign In to Your Account</h2>
//                 <p>Enter your credentials to access your workspace</p>
//               </div>

//               <form className="login-form" onSubmit={handleSubmit}>
//                 {errors.submit && (
//                   <div className="error-message submit-error">
//                     <i className="fas fa-exclamation-circle"></i>
//                     {errors.submit}
//                   </div>
//                 )}

//                 <div className="form-group">
//                   <label htmlFor="email">Email Address</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-envelope"></i>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder="your@email.com"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className={errors.email ? 'error' : ''}
//                     />
//                   </div>
//                   {errors.email && <span className="error-text">{errors.email}</span>}
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="password">Password</label>
//                   <div className="input-with-icon">
//                     <i className="fas fa-lock"></i>
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       placeholder="Enter your password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                       className={errors.password ? 'error' : ''}
//                     />
//                   </div>
//                   {errors.password && <span className="error-text">{errors.password}</span>}
//                 </div>

//                 <div className="form-options">
//                   <label className="checkbox-container">
//                     <input
//                       type="checkbox"
//                       name="rememberMe"
//                       checked={formData.rememberMe}
//                       onChange={handleInputChange}
//                     />
//                     <span className="checkmark"></span>
//                     Remember me
//                   </label>
//                   <Link to="/forgot-password" className="forgot-password">
//                     Forgot password?
//                   </Link>
//                 </div>

//                 <button 
//                   type="submit" 
//                   className="btn btn-primary btn-login"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? (
//                     <>
//                       <i className="fas fa-spinner fa-spin"></i>
//                       Signing In...
//                     </>
//                   ) : (
//                     <>
//                       <span>Sign In</span>
//                       <i className="fas fa-arrow-right"></i>
//                     </>
//                   )}
//                 </button>

//                 <div className="divider">
//                   <span>Or continue with</span>
//                 </div>

//                 <div className="social-login-buttons">
//                   <button 
//                     type="button" 
//                     className="btn-social google"
//                     onClick={() => handleSocialLogin('Google')}
//                   >
//                     <i className="fab fa-google"></i>
//                     Google
//                   </button>
//                   <button 
//                     type="button" 
//                     className="btn-social microsoft"
//                     onClick={() => handleSocialLogin('Microsoft')}
//                   >
//                     <i className="fab fa-microsoft"></i>
//                     Microsoft
//                   </button>
//                   <button 
//                     type="button" 
//                     className="btn-social linkedin"
//                     onClick={() => handleSocialLogin('LinkedIn')}
//                   >
//                     <i className="fab fa-linkedin"></i>
//                     LinkedIn
//                   </button>
//                 </div>

//                 <div className="signup-link">
//                   <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
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

// export default LoginPage;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
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
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      let userData;
      if (formData.email.includes('manager')) {
        userData = {
          name: 'John Manager',
          email: formData.email,
          role: 'Manager',
          profilePhoto: 'https://randomuser.me/api/portraits/men/32.jpg'
        };
      } else {
        userData = {
          name: 'Jane Employee',
          email: formData.email,
          role: 'Employee',
          profilePhoto: 'https://randomuser.me/api/portraits/women/44.jpg'
        };
      }
      
      onLogin(userData);
      navigate('/dashboard');
    } catch (error) {
      setErrors({ submit: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="login-page">
      <Header isLoggedIn={false} scrollPosition={0} />
      
      <div className="login-container">
        <div className="login-content">
          <div className="login-left">
            <div className="login-hero">
              <h1>Welcome Back to <span className="brand">TaskMant</span></h1>
              <p>Sign in to access your projects, tasks, and team collaboration tools.</p>

              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon"><i className="fas fa-tasks"></i></div>
                  <div className="benefit-content">
                    <h4>Manage Projects</h4>
                    <p>Track progress and collaborate with your team</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon"><i className="fas fa-chart-line"></i></div>
                  <div className="benefit-content">
                    <h4>Track Performance</h4>
                    <p>Monitor productivity and project metrics</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon"><i className="fas fa-users"></i></div>
                  <div className="benefit-content">
                    <h4>Team Collaboration</h4>
                    <p>Work seamlessly with your entire team</p>
                  </div>
                </div>
              </div>

              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"TaskMant has revolutionized how our team works. We're 40% more productive since implementation."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sarah Chen" />
                  </div>
                  <div>
                    <h5>Sarah Chen</h5>
                    <p>Project Manager, TechSolutions Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="login-right">
            <div className="login-form-container">
              <div className="form-header">
                <h2>Sign In to Your Account</h2>
                <p>Enter your credentials to access your workspace</p>
              </div>

              <form className="login-form" onSubmit={handleSubmit}>
                {errors.submit && (
                  <div className="error-message submit-error">
                    <i className="fas fa-exclamation-circle"></i>
                    {errors.submit}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-with-icon">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'error' : ''}
                    />
                  </div>
                  {errors.email && <span className="error-text">{errors.email}</span>}
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
                      value={formData.password}
                      onChange={handleInputChange}
                      className={errors.password ? 'error' : ''}
                    />
                  </div>
                  {errors.password && <span className="error-text">{errors.password}</span>}
                </div>

                <div className="form-options">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-login"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Signing In...
                    </>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <i className="fas fa-arrow-right"></i>
                    </>
                  )}
                </button>

                {/* 🚀 Quick Test Login Buttons */}
                <div className="quick-login">
                  <p>Quick Test Logins:</p>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                      onLogin({
                        name: 'John Manager',
                        email: 'manager@test.com',
                        role: 'Manager',
                        profilePhoto: 'https://randomuser.me/api/portraits/men/32.jpg'
                      });
                      navigate('/dashboard');
                    }}
                  >
                    Login as Manager
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      onLogin({
                        name: 'Jane Employee',
                        email: 'employee@test.com',
                        role: 'Employee',
                        profilePhoto: 'https://randomuser.me/api/portraits/women/44.jpg'
                      });
                      navigate('/dashboard');
                    }}
                  >
                    Login as Employee
                  </button>
                </div>

                <div className="divider">
                  <span>Or continue with</span>
                </div>

                <div className="social-login-buttons">
                  <button type="button" className="btn-social google" onClick={() => handleSocialLogin('Google')}>
                    <i className="fab fa-google"></i> Google
                  </button>
                  <button type="button" className="btn-social microsoft" onClick={() => handleSocialLogin('Microsoft')}>
                    <i className="fab fa-microsoft"></i> Microsoft
                  </button>
                  <button type="button" className="btn-social linkedin" onClick={() => handleSocialLogin('LinkedIn')}>
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </button>
                </div>

                <div className="signup-link">
                  <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
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
