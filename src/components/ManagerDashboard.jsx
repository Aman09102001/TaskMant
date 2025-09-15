// import React, { useState } from 'react';

// const ManagerDashboard = ({ user, onLogout }) => {
//   const [activeNav, setActiveNav] = useState('projects');
//   const [projects, setProjects] = useState([
//     { id: 1, name: 'Website Redesign', employees: 5, status: 'In Progress', completion: 65 },
//     { id: 2, name: 'Mobile App Development', employees: 8, status: 'On Track', completion: 80 },
//     { id: 3, name: 'Marketing Campaign', employees: 3, status: 'Delayed', completion: 30 },
//     { id: 4, name: 'Product Launch', employees: 10, status: 'Planning', completion: 15 }
//   ]);

//   const renderContent = () => {
//     switch(activeNav) {
//       case 'projects':
//         return (
//           <div className="table-container">
//             <h2>Project Overview</h2>
//             <table className="data-table">
//               <thead>
//                 <tr>
//                   <th>Project Name</th>
//                   <th>Employees</th>
//                   <th>Status</th>
//                   <th>Completion</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {projects.map(project => (
//                   <tr key={project.id}>
//                     <td>{project.name}</td>
//                     <td>{project.employees}</td>
//                     <td>
//                       <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
//                         {project.status}
//                       </span>
//                     </td>
//                     <td>
//                       <div className="progress-container">
//                         <div className="progress-bar">
//                           <div 
//                             className="progress-fill" 
//                             style={{width: `${project.completion}%`}}
//                           ></div>
//                         </div>
//                         <span>{project.completion}%</span>
//                       </div>
//                     </td>
//                     <td>
//                       <button className="action-btn view-btn">
//                         <i className="fas fa-eye"></i> View
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         );
//       case 'createProject':
//         return (
//           <div className="form-container">
//             <h2>Create New Project</h2>
//             <form className="project-form">
//               <div className="form-group">
//                 <label>Project Name</label>
//                 <input type="text" placeholder="Enter project name" />
//               </div>
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea placeholder="Project description"></textarea>
//               </div>
//               <div className="form-group">
//                 <label>Team Members</label>
//                 <select multiple>
//                   <option>John Doe (Developer)</option>
//                   <option>Jane Smith (Designer)</option>
//                   <option>Mike Johnson (QA)</option>
//                   <option>Sarah Williams (Manager)</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Timeline</label>
//                 <div className="date-inputs">
//                   <input type="date" placeholder="Start Date" />
//                   <input type="date" placeholder="End Date" />
//                 </div>
//               </div>
//               <button type="submit" className="submit-btn">Create Project</button>
//             </form>
//           </div>
//         );
//       case 'assignTask':
//         return (
//           <div className="form-container">
//             <h2>Assign Task to Employee</h2>
//             <form className="task-form">
//               <div className="form-group">
//                 <label>Select Employee</label>
//                 <select>
//                   <option>John Doe</option>
//                   <option>Jane Smith</option>
//                   <option>Mike Johnson</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Task Title</label>
//                 <input type="text" placeholder="Task title" />
//               </div>
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea placeholder="Task description"></textarea>
//               </div>
//               <div className="form-group">
//                 <label>Priority</label>
//                 <select>
//                   <option>Low</option>
//                   <option>Medium</option>
//                   <option>High</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Due Date</label>
//                 <input type="date" />
//               </div>
//               <button type="submit" className="submit-btn">Assign Task</button>
//             </form>
//           </div>
//         );
//       case 'performance':
//         return (
//           <div className="performance-container">
//             <h2>Employee Performance Tracking</h2>
//             <div className="metrics-grid">
//               <div className="metric-card">
//                 <h3>Productivity</h3>
//                 <div className="metric-value">78%</div>
//                 <div className="metric-trend up">+5% from last week</div>
//               </div>
//               <div className="metric-card">
//                 <h3>Tasks Completed</h3>
//                 <div className="metric-value">42/50</div>
//                 <div className="metric-trend up">+8% from last week</div>
//               </div>
//               <div className="metric-card">
//                 <h3>Average Time per Task</h3>
//                 <div className="metric-value">3.2h</div>
//                 <div className="metric-trend down">-0.7h from last week</div>
//               </div>
//               <div className="metric-card">
//                 <h3>Quality Score</h3>
//                 <div className="metric-value">92%</div>
//                 <div className="metric-trend">No change</div>
//               </div>
//             </div>
            
//             <div className="performance-table">
//               <h3>Employee Performance Details</h3>
//               <table className="data-table">
//                 <thead>
//                   <tr>
//                     <th>Employee</th>
//                     <th>Role</th>
//                     <th>Tasks Completed</th>
//                     <th>Productivity</th>
//                     <th>Quality Score</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>John Doe</td>
//                     <td>Developer</td>
//                     <td>15/18</td>
//                     <td>85%</td>
//                     <td>94%</td>
//                   </tr>
//                   <tr>
//                     <td>Jane Smith</td>
//                     <td>Designer</td>
//                     <td>12/15</td>
//                     <td>80%</td>
//                     <td>89%</td>
//                   </tr>
//                   <tr>
//                     <td>Mike Johnson</td>
//                     <td>QA Engineer</td>
//                     <td>20/22</td>
//                     <td>91%</td>
//                     <td>96%</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         );
//       default:
//         return <div>Select an option from the navigation</div>;
//     }
//   };

//   return (
//     <div className="dashboard">
//       <div className="dashboard-header">
//         <h1>Manager Dashboard</h1>
//         <p>Welcome back, {user?.name}</p>
//       </div>
      
//       <nav className="manager-nav">
//         <button 
//           className={activeNav === 'projects' ? 'active' : ''}
//           onClick={() => setActiveNav('projects')}
//         >
//           <i className="fas fa-project-diagram"></i>
//           <span>Projects Overview</span>
//         </button>
//         <button 
//           className={activeNav === 'createProject' ? 'active' : ''}
//           onClick={() => setActiveNav('createProject')}
//         >
//           <i className="fas fa-plus-circle"></i>
//           <span>Create New Project</span>
//         </button>
//         <button 
//           className={activeNav === 'assignTask' ? 'active' : ''}
//           onClick={() => setActiveNav('assignTask')}
//         >
//           <i className="fas fa-tasks"></i>
//           <span>Assign Task</span>
//         </button>
//         <button 
//           className={activeNav === 'performance' ? 'active' : ''}
//           onClick={() => setActiveNav('performance')}
//         >
//           <i className="fas fa-chart-line"></i>
//           <span>Track Performance</span>
//         </button>
//         <button>
//           <i className="fas fa-exclamation-circle"></i>
//           <span>Employee Problems (3)</span>
//         </button>
//         <button>
//           <i className="fas fa-bell"></i>
//           <span>Notifications</span>
//         </button>
//       </nav>
      
//       <main className="dashboard-content">
//         {renderContent()}
//       </main>
//     </div>
//   );
// };

// export default ManagerDashboard;




// import React, { useState } from 'react';
// import '../styles/Dashboard.css'; // Make sure CSS file exists for dashboard styling

// const ManagerDashboard = ({ user, onLogout }) => {
//   const [activeNav, setActiveNav] = useState('projects');
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const [projects, setProjects] = useState([
//     { id: 1, name: 'Website Redesign', employees: 5, status: 'In Progress', completion: 65 },
//     { id: 2, name: 'Mobile App Development', employees: 8, status: 'On Track', completion: 80 },
//     { id: 3, name: 'Marketing Campaign', employees: 3, status: 'Delayed', completion: 30 },
//     { id: 4, name: 'Product Launch', employees: 10, status: 'Planning', completion: 15 }
//   ]);

//   const handleNavigation = (nav) => setActiveNav(nav);

//   const renderContent = () => {
//     switch(activeNav) {
//       case 'projects':
//         return (
//           <div className="table-container">
//             <h2>Project Overview</h2>
//             <table className="data-table">
//               <thead>
//                 <tr>
//                   <th>Project Name</th>
//                   <th>Employees</th>
//                   <th>Status</th>
//                   <th>Completion</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {projects.map(project => (
//                   <tr key={project.id}>
//                     <td>{project.name}</td>
//                     <td>{project.employees}</td>
//                     <td>
//                       <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
//                         {project.status}
//                       </span>
//                     </td>
//                     <td>
//                       <div className="progress-container">
//                         <div className="progress-bar">
//                           <div 
//                             className="progress-fill" 
//                             style={{width: `${project.completion}%`}}
//                           ></div>
//                         </div>
//                         <span>{project.completion}%</span>
//                       </div>
//                     </td>
//                     <td>
//                       <button className="action-btn view-btn">
//                         <i className="fas fa-eye"></i> View
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         );
//       case 'createProject':
//         return (
//           <div className="form-container">
//             <h2>Create New Project</h2>
//             <form className="project-form">
//               <div className="form-group">
//                 <label>Project Name</label>
//                 <input type="text" placeholder="Enter project name" />
//               </div>
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea placeholder="Project description"></textarea>
//               </div>
//               <div className="form-group">
//                 <label>Team Members</label>
//                 <select multiple>
//                   <option>John Doe (Developer)</option>
//                   <option>Jane Smith (Designer)</option>
//                   <option>Mike Johnson (QA)</option>
//                   <option>Sarah Williams (Manager)</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Timeline</label>
//                 <div className="date-inputs">
//                   <input type="date" placeholder="Start Date" />
//                   <input type="date" placeholder="End Date" />
//                 </div>
//               </div>
//               <button type="submit" className="submit-btn">Create Project</button>
//             </form>
//           </div>
//         );
//       case 'assignTask':
//         return (
//           <div className="form-container">
//             <h2>Assign Task to Employee</h2>
//             <form className="task-form">
//               <div className="form-group">
//                 <label>Select Employee</label>
//                 <select>
//                   <option>John Doe</option>
//                   <option>Jane Smith</option>
//                   <option>Mike Johnson</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Task Title</label>
//                 <input type="text" placeholder="Task title" />
//               </div>
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea placeholder="Task description"></textarea>
//               </div>
//               <div className="form-group">
//                 <label>Priority</label>
//                 <select>
//                   <option>Low</option>
//                   <option>Medium</option>
//                   <option>High</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Due Date</label>
//                 <input type="date" />
//               </div>
//               <button type="submit" className="submit-btn">Assign Task</button>
//             </form>
//           </div>
//         );
//       case 'performance':
//         return (
//           <div className="performance-container">
//             <h2>Employee Performance Tracking</h2>
//             <div className="metrics-grid">
//               <div className="metric-card">
//                 <h3>Productivity</h3>
//                 <div className="metric-value">78%</div>
//                 <div className="metric-trend up">+5% from last week</div>
//               </div>
//               <div className="metric-card">
//                 <h3>Tasks Completed</h3>
//                 <div className="metric-value">42/50</div>
//                 <div className="metric-trend up">+8% from last week</div>
//               </div>
//               <div className="metric-card">
//                 <h3>Average Time per Task</h3>
//                 <div className="metric-value">3.2h</div>
//                 <div className="metric-trend down">-0.7h from last week</div>
//               </div>
//               <div className="metric-card">
//                 <h3>Quality Score</h3>
//                 <div className="metric-value">92%</div>
//                 <div className="metric-trend">No change</div>
//               </div>
//             </div>
            
//             <div className="performance-table">
//               <h3>Employee Performance Details</h3>
//               <table className="data-table">
//                 <thead>
//                   <tr>
//                     <th>Employee</th>
//                     <th>Role</th>
//                     <th>Tasks Completed</th>
//                     <th>Productivity</th>
//                     <th>Quality Score</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>John Doe</td>
//                     <td>Developer</td>
//                     <td>15/18</td>
//                     <td>85%</td>
//                     <td>94%</td>
//                   </tr>
//                   <tr>
//                     <td>Jane Smith</td>
//                     <td>Designer</td>
//                     <td>12/15</td>
//                     <td>80%</td>
//                     <td>89%</td>
//                   </tr>
//                   <tr>
//                     <td>Mike Johnson</td>
//                     <td>QA Engineer</td>
//                     <td>20/22</td>
//                     <td>91%</td>
//                     <td>96%</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         );
//       default:
//         return <div>Select an option from the navigation</div>;
//     }
//   };

//   return (
//     <div className="dashboard">
//       {/* Header */}
//       <header className="dashboard-header">
//         <div className="logo" style={{cursor: 'pointer'}}>
//           <i className="fas fa-tasks"></i>
//           <span>TaskMant</span>
//         </div>

//         <div className="user-profile">
//           <button className="profile-btn" onClick={() => setShowProfileMenu(!showProfileMenu)}>
//             <i className="fas fa-user-circle"></i>
//             <span>{user?.name}</span>
//             <i className="fas fa-caret-down"></i>
//           </button>

//           {showProfileMenu && (
//             <div className="profile-menu">
//               <div className="profile-info">
//                 <img src={user?.profilePhoto || 'https://randomuser.me/api/portraits/men/45.jpg'} alt={user?.name} />
//                 <div>
//                   <h4>{user?.name}</h4>
//                   <p>{user?.role}</p>
//                   <p>{user?.email}</p>
//                 </div>
//               </div>
//               <div className="menu-items">
//                 <button>Profile</button>
//                 <button>Settings</button>
//                 <button onClick={onLogout}>Logout</button>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Sidebar Navigation */}
//       <nav className="manager-nav">
//         <button className={activeNav === 'projects' ? 'active' : ''} onClick={() => handleNavigation('projects')}>
//           <i className="fas fa-project-diagram"></i>
//           <span>Projects Overview</span>
//         </button>
//         <button className={activeNav === 'createProject' ? 'active' : ''} onClick={() => handleNavigation('createProject')}>
//           <i className="fas fa-plus-circle"></i>
//           <span>Create New Project</span>
//         </button>
//         <button className={activeNav === 'assignTask' ? 'active' : ''} onClick={() => handleNavigation('assignTask')}>
//           <i className="fas fa-tasks"></i>
//           <span>Assign Task</span>
//         </button>
//         <button className={activeNav === 'performance' ? 'active' : ''} onClick={() => handleNavigation('performance')}>
//           <i className="fas fa-chart-line"></i>
//           <span>Track Performance</span>
//         </button>
//         <button>
//           <i className="fas fa-exclamation-circle"></i>
//           <span>Employee Problems (3)</span>
//         </button>
//         <button>
//           <i className="fas fa-bell"></i>
//           <span>Notifications</span>
//         </button>
//       </nav>

//       {/* Main Content */}
//       <main className="dashboard-content">
//         {renderContent()}
//       </main>
//     </div>
//   );
// };

// export default ManagerDashboard;






// import React, { useState } from 'react';
// import '../styles/Dashboard.css'; // Make sure CSS file exists for dashboard styling

// const ManagerDashboard = ({ user, onLogout }) => {
//   const [activeNav, setActiveNav] = useState('projects');
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const [projects, setProjects] = useState([
//     { id: 1, name: 'Website Redesign', employees: 5, status: 'In Progress', completion: 65 },
//     { id: 2, name: 'Mobile App Development', employees: 8, status: 'On Track', completion: 80 },
//     { id: 3, name: 'Marketing Campaign', employees: 3, status: 'Delayed', completion: 30 },
//     { id: 4, name: 'Product Launch', employees: 10, status: 'Planning', completion: 15 }
//   ]);

//   // For new project creation
//   const [newProject, setNewProject] = useState({
//     name: '',
//     description: '',
//     teamMembers: [],
//     totalHours: '',
//     startDate: '',
//     endDate: ''
//   });

//   const handleNavigation = (nav) => setActiveNav(nav);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProject(prev => ({ ...prev, [name]: value }));
//   };

//   const handleTeamChange = (e) => {
//     const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
//     setNewProject(prev => ({ ...prev, teamMembers: selectedOptions }));
//   };

//   const handleCreateProject = (e) => {
//     e.preventDefault();
//     const project = {
//       id: projects.length + 1,
//       name: newProject.name,
//       employees: newProject.teamMembers.length,
//       status: 'Planning',
//       completion: 0,
//       totalHours: newProject.totalHours
//     };
//     setProjects(prev => [...prev, project]);
//     setNewProject({
//       name: '',
//       description: '',
//       teamMembers: [],
//       totalHours: '',
//       startDate: '',
//       endDate: ''
//     });
//     alert('Project created successfully!');
//   };

//   const renderContent = () => {
//     switch(activeNav) {
//       case 'projects':
//         return (
//           <div className="table-container">
//             <h2>Project Overview</h2>
//             <table className="data-table">
//               <thead>
//                 <tr>
//                   <th>Project Name</th>
//                   <th>Employees</th>
//                   <th>Status</th>
//                   <th>Completion</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {projects.map(project => (
//                   <tr key={project.id}>
//                     <td>{project.name}</td>
//                     <td>{project.employees}</td>
//                     <td>
//                       <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
//                         {project.status}
//                       </span>
//                     </td>
//                     <td>
//                       <div className="progress-container">
//                         <div className="progress-bar">
//                           <div 
//                             className="progress-fill" 
//                             style={{width: `${project.completion}%`}}
//                           ></div>
//                         </div>
//                         <span>{project.completion}%</span>
//                       </div>
//                     </td>
//                     <td>
//                       <button className="action-btn view-btn">
//                         <i className="fas fa-eye"></i> View
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         );

//       case 'createProject':
//         return (
//           <div className="form-container">
//             <h2>Create New Project</h2>
//             <form className="project-form" onSubmit={handleCreateProject}>
//               <div className="form-group">
//                 <label>Project Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={newProject.name}
//                   onChange={handleInputChange}
//                   placeholder="Enter project name"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea
//                   name="description"
//                   value={newProject.description}
//                   onChange={handleInputChange}
//                   placeholder="Project description"
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Team Members</label>
//                 <select multiple value={newProject.teamMembers} onChange={handleTeamChange}>
//                   <option>John Doe (Developer)</option>
//                   <option>Jane Smith (Designer)</option>
//                   <option>Mike Johnson (QA)</option>
//                   <option>Sarah Williams (Manager)</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Total Hours</label>
//                 <input
//                   type="number"
//                   name="totalHours"
//                   value={newProject.totalHours}
//                   onChange={handleInputChange}
//                   placeholder="Enter total hours"
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Timeline</label>
//                 <div className="date-inputs">
//                   <input
//                     type="date"
//                     name="startDate"
//                     value={newProject.startDate}
//                     onChange={handleInputChange}
//                   />
//                   <input
//                     type="date"
//                     name="endDate"
//                     value={newProject.endDate}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <button type="submit" className="submit-btn">Create Project</button>
//             </form>
//           </div>
//         );

//       // Inside the renderContent switch-case for 'assignTask':
// case 'assignTask':
//   return (
//     <div className="form-container">
//       <h2>Assign Task to Employee</h2>
//       <form className="task-form">
//         <div className="form-group">
//           <label>Select Project</label>
//           <select name="project">
//             {projects.map(project => (
//               <option key={project.id} value={project.name}>{project.name}</option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Select Employee</label>
//           <select name="employee">
//             <option>John Doe</option>
//             <option>Jane Smith</option>
//             <option>Mike Johnson</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Task Title</label>
//           <input type="text" placeholder="Task title" />
//         </div>
//         <div className="form-group">
//           <label>Description</label>
//           <textarea placeholder="Task description"></textarea>
//         </div>
//         <div className="form-group">
//           <label>Priority</label>
//           <select>
//             <option>Low</option>
//             <option>Medium</option>
//             <option>High</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Allotted Hours</label>
//           <input type="number" placeholder="Enter allotted hours" />
//         </div>
//         <div className="form-group">
//           <label>Due Date</label>
//           <input type="date" />
//         </div>
//         <button type="submit" className="submit-btn">Assign Task</button>
//       </form>
//     </div>
//   );

//       case 'performance':
//         return (
//           <div className="performance-container">
//             <h2>Employee Performance Tracking</h2>
//             <div className="metrics-grid">
//               <div className="metric-card">
//                 <h3>Productivity</h3>
//                 <div className="metric-value">78%</div>
//                 <div className="metric-trend up">+5% from last week</div>
//               </div>
//               <div className="metric-card">
//                 <h3>Tasks Completed</h3>
//                 <div className="metric-value">42/50</div>
//                 <div className="metric-trend up">+8% from last week</div>
//               </div>
//               <div className="metric-card">
//                 <h3>Average Time per Task</h3>
//                 <div className="metric-value">3.2h</div>
//                 <div className="metric-trend down">-0.7h from last week</div>
//               </div>
//               <div className="metric-card">
//                 <h3>Quality Score</h3>
//                 <div className="metric-value">92%</div>
//                 <div className="metric-trend">No change</div>
//               </div>
//             </div>
            
//             <div className="performance-table">
//               <h3>Employee Performance Details</h3>
//               <table className="data-table">
//                 <thead>
//                   <tr>
//                     <th>Employee</th>
//                     <th>Role</th>
//                     <th>Tasks Completed</th>
//                     <th>Productivity</th>
//                     <th>Quality Score</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>John Doe</td>
//                     <td>Developer</td>
//                     <td>15/18</td>
//                     <td>85%</td>
//                     <td>94%</td>
//                   </tr>
//                   <tr>
//                     <td>Jane Smith</td>
//                     <td>Designer</td>
//                     <td>12/15</td>
//                     <td>80%</td>
//                     <td>89%</td>
//                   </tr>
//                   <tr>
//                     <td>Mike Johnson</td>
//                     <td>QA Engineer</td>
//                     <td>20/22</td>
//                     <td>91%</td>
//                     <td>96%</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         );

//       default:
//         return <div>Select an option from the navigation</div>;
//     }
//   };

//   return (
//     <div className="dashboard">
//       {/* Header */}
//       <header className="dashboard-header">
//         <div className="logo" style={{cursor: 'pointer'}}>
//           <i className="fas fa-tasks"></i>
//           <span>TaskMant</span>
//         </div>

//         <div className="user-profile">
//           <button className="profile-btn" onClick={() => setShowProfileMenu(!showProfileMenu)}>
//             <i className="fas fa-user-circle"></i>
//             <span>{user?.name}</span>
//             <i className="fas fa-caret-down"></i>
//           </button>

//           {showProfileMenu && (
//             <div className="profile-menu">
//               <div className="profile-info">
//                 <img src={user?.profilePhoto || 'https://randomuser.me/api/portraits/men/45.jpg'} alt={user?.name} />
//                 <div>
//                   <h4>{user?.name}</h4>
//                   <p>{user?.role}</p>
//                   <p>{user?.email}</p>
//                 </div>
//               </div>
//               <div className="menu-items">
//                 <button>Profile</button>
//                 <button>Settings</button>
//                 <button onClick={onLogout}>Logout</button>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Sidebar Navigation */}
//       <nav className="manager-nav">
//         <button className={activeNav === 'projects' ? 'active' : ''} onClick={() => handleNavigation('projects')}>
//           <i className="fas fa-project-diagram"></i>
//           <span>Projects Overview</span>
//         </button>
//         <button className={activeNav === 'createProject' ? 'active' : ''} onClick={() => handleNavigation('createProject')}>
//           <i className="fas fa-plus-circle"></i>
//           <span>Create New Project</span>
//         </button>
//         <button className={activeNav === 'assignTask' ? 'active' : ''} onClick={() => handleNavigation('assignTask')}>
//           <i className="fas fa-tasks"></i>
//           <span>Assign Task</span>
//         </button>
//         <button className={activeNav === 'performance' ? 'active' : ''} onClick={() => handleNavigation('performance')}>
//           <i className="fas fa-chart-line"></i>
//           <span>Track Performance</span>
//         </button>
//         <button>
//           <i className="fas fa-exclamation-circle"></i>
//           <span>Employee Problems (3)</span>
//         </button>
//         <button>
//           <i className="fas fa-bell"></i>
//           <span>Notifications</span>
//         </button>
//       </nav>

//       {/* Main Content */}
//       <main className="dashboard-content">
//         {renderContent()}
//       </main>
//     </div>
//   );
// };

// export default ManagerDashboard;




// import React, { useState } from 'react';
// import '../styles/Dashboard.css'; // Make sure CSS file exists for dashboard styling

// const ManagerDashboard = ({ user, onLogout }) => {
//   const [activeNav, setActiveNav] = useState('projects');
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const [projects, setProjects] = useState([
//     { id: 1, name: 'Website Redesign', employees: 5, status: 'In Progress', completion: 65 },
//     { id: 2, name: 'Mobile App Development', employees: 8, status: 'On Track', completion: 80 },
//     { id: 3, name: 'Marketing Campaign', employees: 3, status: 'Delayed', completion: 30 },
//     { id: 4, name: 'Product Launch', employees: 10, status: 'Planning', completion: 15 }
//   ]);

//   const [newProject, setNewProject] = useState({
//     name: '',
//     description: '',
//     teamMembers: [],
//     totalHours: '',
//     startDate: '',
//     endDate: ''
//   });

//   const [employeeProblems, setEmployeeProblems] = useState([
//     { id: 1, employee: 'John Doe', problem: 'Task deadline unclear', status: 'Pending' },
//     { id: 2, employee: 'Jane Smith', problem: 'Need access to design tool', status: 'Pending' },
//     { id: 3, employee: 'Mike Johnson', problem: 'Server not responding', status: 'Resolved' }
//   ]);

//   const handleNavigation = (nav) => setActiveNav(nav);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProject(prev => ({ ...prev, [name]: value }));
//   };

//   const handleTeamChange = (e) => {
//     const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
//     setNewProject(prev => ({ ...prev, teamMembers: selectedOptions }));
//   };

//   const handleCreateProject = (e) => {
//     e.preventDefault();
//     const project = {
//       id: projects.length + 1,
//       name: newProject.name,
//       employees: newProject.teamMembers.length,
//       status: 'Planning',
//       completion: 0,
//       totalHours: newProject.totalHours
//     };
//     setProjects(prev => [...prev, project]);
//     setNewProject({
//       name: '',
//       description: '',
//       teamMembers: [],
//       totalHours: '',
//       startDate: '',
//       endDate: ''
//     });
//     alert('Project created successfully!');
//   };

//   const renderContent = () => {
//     switch(activeNav) {
//       case 'projects':
//         return (
//           <div className="table-container">
//             <h2>Project Overview</h2>
//             <table className="data-table">
//               <thead>
//                 <tr>
//                   <th>Project Name</th>
//                   <th>Employees</th>
//                   <th>Status</th>
//                   <th>Completion</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {projects.map(project => (
//                   <tr key={project.id}>
//                     <td>{project.name}</td>
//                     <td>{project.employees}</td>
//                     <td>
//                       <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
//                         {project.status}
//                       </span>
//                     </td>
//                     <td>
//                       <div className="progress-container">
//                         <div className="progress-bar">
//                           <div 
//                             className="progress-fill" 
//                             style={{width: `${project.completion}%`}}
//                           ></div>
//                         </div>
//                         <span>{project.completion}%</span>
//                       </div>
//                     </td>
//                     <td>
//                       <button className="action-btn view-btn">
//                         <i className="fas fa-eye"></i> View
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         );

//       case 'createProject':
//         return (
//           <div className="form-container">
//             <h2>Create New Project</h2>
//             <form className="project-form" onSubmit={handleCreateProject}>
//               <div className="form-group">
//                 <label>Project Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={newProject.name}
//                   onChange={handleInputChange}
//                   placeholder="Enter project name"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea
//                   name="description"
//                   value={newProject.description}
//                   onChange={handleInputChange}
//                   placeholder="Project description"
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Team Members</label>
//                 <select multiple value={newProject.teamMembers} onChange={handleTeamChange}>
//                   <option>John Doe (Developer)</option>
//                   <option>Jane Smith (Designer)</option>
//                   <option>Mike Johnson (QA)</option>
//                   <option>Sarah Williams (Manager)</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Total Hours</label>
//                 <input
//                   type="number"
//                   name="totalHours"
//                   value={newProject.totalHours}
//                   onChange={handleInputChange}
//                   placeholder="Enter total hours"
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Timeline</label>
//                 <div className="date-inputs">
//                   <input
//                     type="date"
//                     name="startDate"
//                     value={newProject.startDate}
//                     onChange={handleInputChange}
//                   />
//                   <input
//                     type="date"
//                     name="endDate"
//                     value={newProject.endDate}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <button type="submit" className="submit-btn">Create Project</button>
//             </form>
//           </div>
//         );

//       case 'assignTask':
//         return (
//           <div className="form-container">
//             <h2>Assign Task to Employee</h2>
//             <form className="task-form">
//               <div className="form-group">
//                 <label>Select Project</label>
//                 <select name="project">
//                   {projects.map(project => (
//                     <option key={project.id} value={project.name}>{project.name}</option>
//                   ))}
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Select Employee</label>
//                 <select name="employee">
//                   <option>John Doe</option>
//                   <option>Jane Smith</option>
//                   <option>Mike Johnson</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Task Title</label>
//                 <input type="text" placeholder="Task title" />
//               </div>
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea placeholder="Task description"></textarea>
//               </div>
//               <div className="form-group">
//                 <label>Priority</label>
//                 <select>
//                   <option>Low</option>
//                   <option>Medium</option>
//                   <option>High</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Allotted Hours</label>
//                 <input type="number" placeholder="Enter allotted hours" />
//               </div>
//               <div className="form-group">
//                 <label>Due Date</label>
//                 <input type="date" />
//               </div>
//               <button type="submit" className="submit-btn">Assign Task</button>
//             </form>
//           </div>
//         );

//       // New Case 1: Query Section for Employee Problems
//       // New Case 1: Query Section for Employee Problems (Editable Status)
// case 'employeeQueries':
//   const handleStatusChange = (id, newStatus) => {
//     setEmployeeProblems(prev =>
//       prev.map(query =>
//         query.id === id ? { ...query, status: newStatus } : query
//       )
//     );
//   };

//   const handleSubmitQueries = (e) => {
//     e.preventDefault();
//     // Here you can send employeeProblems to backend via API
//     console.log("Updated Employee Queries:", employeeProblems);
//     alert("Employee queries updated successfully!");
//   };

//   return (
//     <div className="table-container">
//       <h2>Employee Queries</h2>
//       <form onSubmit={handleSubmitQueries}>
//         <table className="data-table">
//           <thead>
//             <tr>
//               <th>Employee</th>
//               <th>Problem</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employeeProblems.map(query => (
//               <tr key={query.id}>
//                 <td>{query.employee}</td>
//                 <td>{query.problem}</td>
//                 <td>
//                   <select
//                     value={query.status}
//                     onChange={(e) => handleStatusChange(query.id, e.target.value)}
//                   >
//                     <option>Pending</option>
//                     <option>In Progress</option>
//                     <option>Resolved</option>
//                     <option>Closed</option>
//                   </select>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button type="submit" className="submit-btn" style={{ marginTop: '10px' }}>
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );


//       // New Case 2: Send Notification or Warning to Employee
//       case 'sendNotification':
//         return (
//           <div className="form-container">
//             <h2>Send Notification / Warning</h2>
//             <form className="task-form">
//               <div className="form-group">
//                 <label>Select Employee</label>
//                 <select>
//                   <option>John Doe</option>
//                   <option>Jane Smith</option>
//                   <option>Mike Johnson</option>
//                   <option>Sarah Williams</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Type</label>
//                 <select>
//                   <option>Notification</option>
//                   <option>Warning</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Message</label>
//                 <textarea placeholder="Write your message here..."></textarea>
//               </div>
//               <button type="submit" className="submit-btn">Send</button>
//             </form>
//           </div>
//         );

//       case 'performance':
//         return (
//           <div className="performance-container">
//             <h2>Employee Performance Tracking</h2>
//             <div className="metrics-grid">
//               <div className="metric-card">
//                 <h3>Productivity</h3>
//                 <div className="metric-value">78%</div>
//                 <div className="metric-trend up">+5% from last week</div>
//               </div>
//               <div className="metric-card">
//                 <h3>Tasks Completed</h3>
//                 <div className="metric-value">42/50</div>
//                 <div className="metric-trend up">+8% from last week</div>
//               </div>
//               <div className="metric-card">
//                 <h3>Average Time per Task</h3>
//                 <div className="metric-value">3.2h</div>
//                 <div className="metric-trend down">-0.7h from last week</div>
//               </div>
//               <div className="metric-card">
//                 <h3>Quality Score</h3>
//                 <div className="metric-value">92%</div>
//                 <div className="metric-trend">No change</div>
//               </div>
//             </div>
            
//             <div className="performance-table">
//               <h3>Employee Performance Details</h3>
//               <table className="data-table">
//                 <thead>
//                   <tr>
//                     <th>Employee</th>
//                     <th>Role</th>
//                     <th>Tasks Completed</th>
//                     <th>Productivity</th>
//                     <th>Quality Score</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>John Doe</td>
//                     <td>Developer</td>
//                     <td>15/18</td>
//                     <td>85%</td>
//                     <td>94%</td>
//                   </tr>
//                   <tr>
//                     <td>Jane Smith</td>
//                     <td>Designer</td>
//                     <td>12/15</td>
//                     <td>80%</td>
//                     <td>89%</td>
//                   </tr>
//                   <tr>
//                     <td>Mike Johnson</td>
//                     <td>QA Engineer</td>
//                     <td>20/22</td>
//                     <td>91%</td>
//                     <td>96%</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         );

//       default:
//         return <div>Select an option from the navigation</div>;
//     }
//   };

//   return (
//     <div className="dashboard">
//       {/* Header */}
//       <header className="dashboard-header">
//         <div className="logo" style={{cursor: 'pointer'}}>
//           <i className="fas fa-tasks"></i>
//           <span>TaskMant</span>
//         </div>

//         <div className="user-profile">
//           <button className="profile-btn" onClick={() => setShowProfileMenu(!showProfileMenu)}>
//             <i className="fas fa-user-circle"></i>
//             <span>{user?.name}</span>
//             <i className="fas fa-caret-down"></i>
//           </button>

//           {showProfileMenu && (
//             <div className="profile-menu">
//               <div className="profile-info">
//                 <img src={user?.profilePhoto || 'https://randomuser.me/api/portraits/men/45.jpg'} alt={user?.name} />
//                 <div>
//                   <h4>{user?.name}</h4>
//                   <p>{user?.role}</p>
//                   <p>{user?.email}</p>
//                 </div>
//               </div>
//               <div className="menu-items">
//                 <button>Profile</button>
//                 <button>Settings</button>
//                 <button onClick={onLogout}>Logout</button>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Sidebar Navigation */}
//       <nav className="manager-nav">
//         <button className={activeNav === 'projects' ? 'active' : ''} onClick={() => handleNavigation('projects')}>
//           <i className="fas fa-project-diagram"></i>
//           <span>Projects Overview</span>
//         </button>
//         <button className={activeNav === 'createProject' ? 'active' : ''} onClick={() => handleNavigation('createProject')}>
//           <i className="fas fa-plus-circle"></i>
//           <span>Create New Project</span>
//         </button>
//         <button className={activeNav === 'assignTask' ? 'active' : ''} onClick={() => handleNavigation('assignTask')}>
//           <i className="fas fa-tasks"></i>
//           <span>Assign Task</span>
//         </button>
//         <button className={activeNav === 'performance' ? 'active' : ''} onClick={() => handleNavigation('performance')}>
//           <i className="fas fa-chart-line"></i>
//           <span>Track Performance</span>
//         </button>
//         <button className={activeNav === 'employeeQueries' ? 'active' : ''} onClick={() => handleNavigation('employeeQueries')}>
//           <i className="fas fa-exclamation-circle"></i>
//           <span>Employee Problems</span>
//         </button>
//         <button className={activeNav === 'sendNotification' ? 'active' : ''} onClick={() => handleNavigation('sendNotification')}>
//           <i className="fas fa-bell"></i>
//           <span>Send Notification</span>
//         </button>
//       </nav>

//       {/* Main Content */}
//       <main className="dashboard-content">
//         {renderContent()}
//       </main>
//     </div>
//   );
// };

// export default ManagerDashboard;




// yha pr pop modal work kr rha h

// import React, { useState } from "react";
// import "../styles/Dashboard.css";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const ManagerDashboard = ({ user, onLogout }) => {
//   const [activeNav, setActiveNav] = useState("projects");
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const [showProjectModal, setShowProjectModal] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);
 


//   const [projects, setProjects] = useState([
//     {
//       id: 1,
//       name: "Website Redesign",
//       employees: [
//         { name: "John Doe", role: "Developer", allottedHours: 40, timeTaken: 38 },
//         { name: "Jane Smith", role: "Designer", allottedHours: 35, timeTaken: 36 }
//       ],
//       status: "In Progress",
//       completion: 65
//     },
//     {
//       id: 2,
//       name: "Mobile App Development",
//       employees: [
//         { name: "Mike Johnson", role: "QA", allottedHours: 30, timeTaken: 28 },
//         { name: "Sarah Williams", role: "Manager", allottedHours: 50, timeTaken: 48 }
//       ],
//       status: "On Track",
//       completion: 80
//     }
//   ]);

//   const [newProject, setNewProject] = useState({
//     name: "",
//     description: "",
//     teamMembers: [],
//     totalHours: "",
//     startDate: "",
//     endDate: ""
//   });

//   const [employeeProblems, setEmployeeProblems] = useState([
//     { id: 1, employee: "John Doe", problem: "Task deadline unclear", status: "Pending" },
//     { id: 2, employee: "Jane Smith", problem: "Need access to design tool", status: "Pending" },
//     { id: 3, employee: "Mike Johnson", problem: "Server not responding", status: "Resolved" }
//   ]);

//   const handleNavigation = (nav) => setActiveNav(nav);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProject((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleTeamChange = (e) => {
//     const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
//     setNewProject((prev) => ({ ...prev, teamMembers: selectedOptions }));
//   };

//   const handleCreateProject = (e) => {
//     e.preventDefault();
//     const project = {
//       id: projects.length + 1,
//       name: newProject.name,
//       employees: newProject.teamMembers.map((name) => ({
//         name,
//         role: "Employee",
//         allottedHours: 40,
//         timeTaken: 0
//       })),
//       status: "Planning",
//       completion: 0
//     };
//     setProjects((prev) => [...prev, project]);
//     setNewProject({
//       name: "",
//       description: "",
//       teamMembers: [],
//       totalHours: "",
//       startDate: "",
//       endDate: ""
//     });
//     alert("Project created successfully!");
//   };

//   const handleStatusChange = (id, newStatus) => {
//     setEmployeeProblems((prev) =>
//       prev.map((query) => (query.id === id ? { ...query, status: newStatus } : query))
//     );
//   };

//   const handleSubmitQueries = (e) => {
//     e.preventDefault();
//     console.log("Updated Employee Queries:", employeeProblems);
//     alert("Employee queries updated successfully!");
//   };

//   const openProjectModal = (project) => {
//     setSelectedProject(project);
//     setShowProjectModal(true);
//   };

//   const closeProjectModal = () => {
//     setSelectedProject(null);
//     setShowProjectModal(false);
//   };




//   const renderContent = () => {
//     switch (activeNav) {
//       case "projects":
//         return (
//           <div className="table-container">
//             <h2>Project Overview</h2>
//             <table className="data-table">
//               <thead>
//                 <tr>
//                   <th>Project Name</th>
//                   <th>Employees</th>
//                   <th>Status</th>
//                   <th>Completion</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {projects.map((project) => (
//                   <tr key={project.id}>
//                     <td>{project.name}</td>
//                     <td>{project.employees.length}</td>
//                     <td>
//                       <span
//                         className={`status-badge ${project.status
//                           .toLowerCase()
//                           .replace(" ", "-")}`}
//                       >
//                         {project.status}
//                       </span>
//                     </td>
//                     <td>
//                       <div className="progress-container">
//                         <div className="progress-bar">
//                           <div
//                             className="progress-fill"
//                             style={{ width: `${project.completion}%` }}
//                           ></div>
//                         </div>
//                         <span>{project.completion}%</span>
//                       </div>
//                     </td>
//                     <td>
//                       <button
//                         className="action-btn view-btn"
//                         onClick={() => openProjectModal(project)}
//                       >
//                         <i className="fas fa-eye"></i> View
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* Project Modal */}
//             {showProjectModal && selectedProject && (
//               <div className="modal">
//                 <div className="modal-content">
//                   <h3>{selectedProject.name} - Details</h3>
//                   <button className="close-btn" onClick={closeProjectModal}>
//                     X
//                   </button>
//                   <table className="data-table">
//                     <thead>
//                       <tr>
//                         <th>Employee</th>
//                         <th>Role</th>
//                         <th>Allotted Hours</th>
//                         <th>Time Taken</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {selectedProject.employees.map((emp, idx) => (
//                         <tr key={idx}>
//                           <td>{emp.name}</td>
//                           <td>{emp.role}</td>
//                           <td>{emp.allottedHours}</td>
//                           <td>{emp.timeTaken}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>

//                   {/* Chart */}
//                   <div style={{ width: "80%", margin: "20px auto" }}>
//                     <Bar
//                       data={{
//                         labels: selectedProject.employees.map((e) => e.name),
//                         datasets: [
//                           {
//                             label: "Allotted Hours",
//                             data: selectedProject.employees.map((e) => e.allottedHours),
//                             backgroundColor: "rgba(75, 192, 192, 0.6)"
//                           },
//                           {
//                             label: "Time Taken",
//                             data: selectedProject.employees.map((e) => e.timeTaken),
//                             backgroundColor: "rgba(153, 102, 255, 0.6)"
//                           }
//                         ]
//                       }}
//                       options={{ responsive: true }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         );

//       case "createProject":
//         return (
//           <div className="form-container">
//             <h2>Create New Project</h2>
//             <form className="project-form" onSubmit={handleCreateProject}>
//               <div className="form-group">
//                 <label>Project Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={newProject.name}
//                   onChange={handleInputChange}
//                   placeholder="Enter project name"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea
//                   name="description"
//                   value={newProject.description}
//                   onChange={handleInputChange}
//                   placeholder="Project description"
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Team Members</label>
//                 <select multiple value={newProject.teamMembers} onChange={handleTeamChange}>
//                   <option>John Doe</option>
//                   <option>Jane Smith</option>
//                   <option>Mike Johnson</option>
//                   <option>Sarah Williams</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Total Hours</label>
//                 <input
//                   type="number"
//                   name="totalHours"
//                   value={newProject.totalHours}
//                   onChange={handleInputChange}
//                   placeholder="Enter total hours"
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Timeline</label>
//                 <div className="date-inputs">
//                   <input
//                     type="date"
//                     name="startDate"
//                     value={newProject.startDate}
//                     onChange={handleInputChange}
//                   />
//                   <input
//                     type="date"
//                     name="endDate"
//                     value={newProject.endDate}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <button type="submit" className="submit-btn">
//                 Create Project
//               </button>
//             </form>
//           </div>
//         );

//       case "assignTask":
//         return (
//           <div className="form-container">
//             <h2>Assign Task to Employee</h2>
//             <form className="task-form">
//               <div className="form-group">
//                 <label>Select Project</label>
//                 <select name="project">
//                   {projects.map((project) => (
//                     <option key={project.id} value={project.name}>
//                       {project.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Select Employee</label>
//                 <select name="employee">
//                   <option>John Doe</option>
//                   <option>Jane Smith</option>
//                   <option>Mike Johnson</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Task Title</label>
//                 <input type="text" placeholder="Task title" />
//               </div>
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea placeholder="Task description"></textarea>
//               </div>
//               <div className="form-group">
//                 <label>Priority</label>
//                 <select>
//                   <option>Low</option>
//                   <option>Medium</option>
//                   <option>High</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Allotted Hours</label>
//                 <input type="number" placeholder="Enter allotted hours" />
//               </div>
//               <div className="form-group">
//                 <label>Due Date</label>
//                 <input type="date" />
//               </div>
//               <button type="submit" className="submit-btn">
//                 Assign Task
//               </button>
//             </form>
//           </div>
//         );

//       case "employeeQueries":
//         return (
//           <div className="table-container">
//             <h2>Employee Queries</h2>
//             <form onSubmit={handleSubmitQueries}>
//               <table className="data-table">
//                 <thead>
//                   <tr>
//                     <th>Employee</th>
//                     <th>Problem</th>
//                     <th>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {employeeProblems.map((query) => (
//                     <tr key={query.id}>
//                       <td>{query.employee}</td>
//                       <td>{query.problem}</td>
//                       <td>
//                         <select
//                           value={query.status}
//                           onChange={(e) => handleStatusChange(query.id, e.target.value)}
//                         >
//                           <option>Pending</option>
//                           <option>In Progress</option>
//                           <option>Resolved</option>
//                           <option>Closed</option>
//                         </select>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <button type="submit" className="submit-btn" style={{ marginTop: "10px" }}>
//                 Save Changes
//               </button>
//             </form>
//           </div>
//         );

//       case "sendNotification":
//         return (
//           <div className="form-container">
//             <h2>Send Notification / Warning</h2>
//             <form className="task-form">
//               <div className="form-group">
//                 <label>Select Employee</label>
//                 <select>
//                   <option>John Doe</option>
//                   <option>Jane Smith</option>
//                   <option>Mike Johnson</option>
//                   <option>Sarah Williams</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Type</label>
//                 <select>
//                   <option>Notification</option>
//                   <option>Warning</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Message</label>
//                 <textarea placeholder="Write your message here..."></textarea>
//               </div>
//               <button type="submit" className="submit-btn">
//                 Send
//               </button>
//             </form>
//           </div>
//         );

//       default:
//         return <div>Select an option from the navigation</div>;
//     }
//   };

//   return (
//     <div className="dashboard">
//       {/* Header */}
//       <header className="dashboard-header">
//         <div className="logo" style={{ cursor: "pointer" }}>
//           <i className="fas fa-tasks"></i>
//           <span>TaskMant</span>
//         </div>

//         <div className="user-profile">
//           <button
//             className="profile-btn"
//             onClick={() => setShowProfileMenu(!showProfileMenu)}
//           >
//             <i className="fas fa-user-circle"></i>
//             <span>{user?.name}</span>
//             <i className="fas fa-caret-down"></i>
//           </button>

//           {showProfileMenu && (
//             <div className="profile-menu">
//               <div className="profile-info">
//                 <img
//                   src={user?.profilePhoto || "https://randomuser.me/api/portraits/men/45.jpg"}
//                   alt={user?.name}
//                 />
//                 <div>
//                   <h4>{user?.name}</h4>
//                   <p>{user?.role}</p>
//                   <p>{user?.email}</p>
//                 </div>
//               </div>
//               <div className="menu-items">
//                 <button>Profile</button>
//                 <button>Settings</button>
//                 <button onClick={onLogout}>Logout</button>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Sidebar Navigation */}
//       <nav className="manager-nav">
//         <button
//           className={activeNav === "projects" ? "active" : ""}
//           onClick={() => handleNavigation("projects")}
//         >
//           <i className="fas fa-project-diagram"></i>
//           <span>Projects Overview</span>
//         </button>
//         <button
//           className={activeNav === "createProject" ? "active" : ""}
//           onClick={() => handleNavigation("createProject")}
//         >
//           <i className="fas fa-plus-circle"></i>
//           <span>Create New Project</span>
//         </button>
//         <button
//           className={activeNav === "assignTask" ? "active" : ""}
//           onClick={() => handleNavigation("assignTask")}
//         >
//           <i className="fas fa-tasks"></i>
//           <span>Assign Task</span>
//         </button>
//         <button
//           className={activeNav === "employeeQueries" ? "active" : ""}
//           onClick={() => handleNavigation("employeeQueries")}
//         >
//           <i className="fas fa-exclamation-circle"></i>
//           <span>Employee Problems</span>
//         </button>
//         <button
//           className={activeNav === "sendNotification" ? "active" : ""}
//           onClick={() => handleNavigation("sendNotification")}
//         >
//           <i className="fas fa-bell"></i>
//           <span>Send Notification</span>
//         </button>
//       </nav>

//       {/* Main Content */}
//       <main className="dashboard-content">{renderContent()}</main>
//     </div>
//   );
// };

// export default ManagerDashboard;
//////////////////////////////////////////////////////////





import React, { useState } from "react";
import "../styles/Dashboard.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { useNavigate } from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ManagerDashboard = ({ user, onLogout }) => {
  const [activeNav, setActiveNav] = useState("projects");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navigate = useNavigate();

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      employees: [
        { name: "John Doe", role: "Developer", allottedHours: 40, timeTaken: 38 },
        { name: "Jane Smith", role: "Designer", allottedHours: 35, timeTaken: 36 }
      ],
      status: "In Progress",
      completion: 65
    },
    {
      id: 2,
      name: "Mobile App Development",
      employees: [
        { name: "Mike Johnson", role: "QA", allottedHours: 30, timeTaken: 28 },
        { name: "Sarah Williams", role: "Manager", allottedHours: 50, timeTaken: 48 }
      ],
      status: "On Track",
      completion: 80
    }
  ]);

  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    teamMembers: [],
    totalHours: "",
    startDate: "",
    endDate: ""
  });

  const [employeeProblems, setEmployeeProblems] = useState([
    { id: 1, employee: "John Doe", problem: "Task deadline unclear", status: "Pending" },
    { id: 2, employee: "Jane Smith", problem: "Need access to design tool", status: "Pending" },
    { id: 3, employee: "Mike Johnson", problem: "Server not responding", status: "Resolved" }
  ]);

  const handleNavigation = (nav) => setActiveNav(nav);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleTeamChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setNewProject((prev) => ({ ...prev, teamMembers: selectedOptions }));
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    const project = {
      id: projects.length + 1,
      name: newProject.name,
      employees: newProject.teamMembers.map((name) => ({
        name,
        role: "Employee",
        allottedHours: 40,
        timeTaken: 0
      })),
      status: "Planning",
      completion: 0
    };
    setProjects((prev) => [...prev, project]);
    setNewProject({
      name: "",
      description: "",
      teamMembers: [],
      totalHours: "",
      startDate: "",
      endDate: ""
    });
    alert("Project created successfully!");
  };

  const handleStatusChange = (id, newStatus) => {
    setEmployeeProblems((prev) =>
      prev.map((query) => (query.id === id ? { ...query, status: newStatus } : query))
    );
  };

  const handleSubmitQueries = (e) => {
    e.preventDefault();
    console.log("Updated Employee Queries:", employeeProblems);
    alert("Employee queries updated successfully!");
  };

  const renderContent = () => {
    switch (activeNav) {
      case "projects":
        return (
          <div className="table-container">
            <h2>Project Overview</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Employees</th>
                  <th>Status</th>
                  <th>Completion</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>{project.employees.length}</td>
                    <td>
                      <span
                        className={`status-badge ${project.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td>
                      <div className="progress-container">
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: `${project.completion}%` }}
                          ></div>
                        </div>
                        <span>{project.completion}%</span>
                      </div>
                    </td>
                    <td>
                      <button
                        className="action-btn view-btn"
                        onClick={() =>
                          navigate("/manager/project-view", { state: { project } })
                        }
                      >
                        <i className="fas fa-eye"></i> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "createProject":
        return (
          <div className="form-container">
            <h2>Create New Project</h2>
            <form className="project-form" onSubmit={handleCreateProject}>
              <div className="form-group">
                <label>Project Name</label>
                <input
                  type="text"
                  name="name"
                  value={newProject.name}
                  onChange={handleInputChange}
                  placeholder="Enter project name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={newProject.description}
                  onChange={handleInputChange}
                  placeholder="Project description"
                />
              </div>
              <div className="form-group">
                <label>Team Members</label>
                <select multiple value={newProject.teamMembers} onChange={handleTeamChange}>
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                  <option>Mike Johnson</option>
                  <option>Sarah Williams</option>
                </select>
              </div>
              <div className="form-group">
                <label>Total Hours</label>
                <input
                  type="number"
                  name="totalHours"
                  value={newProject.totalHours}
                  onChange={handleInputChange}
                  placeholder="Enter total hours"
                />
              </div>
              <div className="form-group">
                <label>Timeline</label>
                <div className="date-inputs">
                  <input
                    type="date"
                    name="startDate"
                    value={newProject.startDate}
                    onChange={handleInputChange}
                  />
                  <input
                    type="date"
                    name="endDate"
                    value={newProject.endDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Create Project
              </button>
            </form>
          </div>
        );

      case "assignTask":
        return (
          <div className="form-container">
            <h2>Assign Task to Employee</h2>
            <form className="task-form">
              <div className="form-group">
                <label>Select Project</label>
                <select name="project">
                  {projects.map((project) => (
                    <option key={project.id} value={project.name}>
                      {project.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Select Employee</label>
                <select name="employee">
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                  <option>Mike Johnson</option>
                </select>
              </div>
              <div className="form-group">
                <label>Task Title</label>
                <input type="text" placeholder="Task title" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea placeholder="Task description"></textarea>
              </div>
              <div className="form-group">
                <label>Priority</label>
                <select>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
              <div className="form-group">
                <label>Allotted Hours</label>
                <input type="number" placeholder="Enter allotted hours" />
              </div>
              <div className="form-group">
                <label>Due Date</label>
                <input type="date" />
              </div>
              <button type="submit" className="submit-btn">
                Assign Task
              </button>
            </form>
          </div>
        );

      case "employeeQueries":
        return (
          <div className="table-container">
            <h2>Employee Queries</h2>
            <form onSubmit={handleSubmitQueries}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Problem</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeProblems.map((query) => (
                    <tr key={query.id}>
                      <td>{query.employee}</td>
                      <td>{query.problem}</td>
                      <td>
                        <select
                          value={query.status}
                          onChange={(e) => handleStatusChange(query.id, e.target.value)}
                        >
                          <option>Pending</option>
                          <option>In Progress</option>
                          <option>Resolved</option>
                          <option>Closed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button type="submit" className="submit-btn" style={{ marginTop: "10px" }}>
                Save Changes
              </button>
            </form>
          </div>
        );

      case "sendNotification":
        return (
          <div className="form-container">
            <h2>Send Notification / Warning</h2>
            <form className="task-form">
              <div className="form-group">
                <label>Select Employee</label>
                <select>
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                  <option>Mike Johnson</option>
                  <option>Sarah Williams</option>
                </select>
              </div>
              <div className="form-group">
                <label>Type</label>
                <select>
                  <option>Notification</option>
                  <option>Warning</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Write your message here..."></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send
              </button>
            </form>
          </div>
        );

      default:
        return <div>Select an option from the navigation</div>;
    }
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo" style={{ cursor: "pointer" }}>
          <i className="fas fa-tasks"></i>
          <span>TaskMant</span>
        </div>

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
                <img
                  src={user?.profilePhoto || "https://randomuser.me/api/portraits/men/45.jpg"}
                  alt={user?.name}
                />
                <div>
                  <h4>{user?.name}</h4>
                  <p>{user?.role}</p>
                  <p>{user?.email}</p>
                </div>
              </div>
              <div className="menu-items">
                <button>Profile</button>
                <button>Settings</button>
                <button onClick={onLogout}>Logout</button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar Navigation */}
      <nav className="manager-nav">
        <button
          className={activeNav === "projects" ? "active" : ""}
          onClick={() => handleNavigation("projects")}
        >
          <i className="fas fa-project-diagram"></i>
          <span>Projects Overview</span>
        </button>
        <button
          className={activeNav === "createProject" ? "active" : ""}
          onClick={() => handleNavigation("createProject")}
        >
          <i className="fas fa-plus-circle"></i>
          <span>Create New Project</span>
        </button>
        <button
          className={activeNav === "assignTask" ? "active" : ""}
          onClick={() => handleNavigation("assignTask")}
        >
          <i className="fas fa-tasks"></i>
          <span>Assign Task</span>
        </button>
        <button
          className={activeNav === "employeeQueries" ? "active" : ""}
          onClick={() => handleNavigation("employeeQueries")}
        >
          <i className="fas fa-exclamation-circle"></i>
          <span>Employee Problems</span>
        </button>
        <button
          className={activeNav === "sendNotification" ? "active" : ""}
          onClick={() => handleNavigation("sendNotification")}
        >
          <i className="fas fa-bell"></i>
          <span>Send Notification</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="dashboard-content">{renderContent()}</main>
    </div>
  );
};

export default ManagerDashboard;
