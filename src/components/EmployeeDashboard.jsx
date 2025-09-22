// import React, { useState } from 'react';
// import '../styles/Header.css'; // Ensure Header styles are imported

// const EmployeeDashboard = ({ user, onLogout }) => {
//   const [activeNav, setActiveNav] = useState('myTasks');
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const [tasks, setTasks] = useState([
//     { id: 1, project: 'Website Redesign', manager: 'Sarah Williams', allocated: 40, remaining: 15, progress: 65 },
//     { id: 2, project: 'Mobile App Design', manager: 'Robert Brown', allocated: 20, remaining: 5, progress: 75 },
//     { id: 3, project: 'Database Optimization', manager: 'Sarah Williams', allocated: 30, remaining: 20, progress: 35 },
//     { id: 4, project: 'User Testing', manager: 'Michael Chen', allocated: 15, remaining: 10, progress: 35 }
//   ]);

//   const handleNavigation = (nav) => {
//     setActiveNav(nav);
//   };

//   const renderContent = () => {
//     switch(activeNav) {
//       case 'myTasks':
//         return (
//           <div className="table-container">
//             <h2>My Tasks</h2>
//             <table className="data-table">
//               <thead>
//                 <tr>
//                   <th>Project Name</th>
//                   <th>Manager</th>
//                   <th>Allocated Hours</th>
//                   <th>Remaining Hours</th>
//                   <th>Progress</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tasks.map(task => (
//                   <tr key={task.id}>
//                     <td>{task.project}</td>
//                     <td>{task.manager}</td>
//                     <td>{task.allocated}h</td>
//                     <td>{task.remaining}h</td>
//                     <td>
//                       <div className="progress-container">
//                         <div className="progress-bar">
//                           <div 
//                             className="progress-fill" 
//                             style={{width: `${task.progress}%`}}
//                           ></div>
//                         </div>
//                         <span>{task.progress}%</span>
//                       </div>
//                     </td>
//                     <td>
//                       <button className="action-btn update-btn">
//                         <i className="fas fa-edit"></i> Update
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         );
//       case 'raiseTicket':
//         return (
//           <div className="form-container">
//             <h2>Raise a Query/Ticket</h2>
//             <form className="ticket-form">
//               <div className="form-group">
//                 <label>Query Type</label>
//                 <select>
//                   <option>Technical Issue</option>
//                   <option>Resource Request</option>
//                   <option>Clarification Needed</option>
//                   <option>Other</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Subject</label>
//                 <input type="text" placeholder="Brief subject of your query" />
//               </div>
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea placeholder="Please describe your issue in detail"></textarea>
//               </div>
//               <div className="form-group">
//                 <label>Priority</label>
//                 <select>
//                   <option>Low</option>
//                   <option>Medium</option>
//                   <option>High</option>
//                   <option>Urgent</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Attachment (if any)</label>
//                 <input type="file" />
//               </div>
//               <button type="submit" className="submit-btn">Submit Ticket</button>
//             </form>
//           </div>
//         );
//       case 'status':
//         return (
//           <div className="status-container">
//             <h2>My Status & Performance</h2>
//             <div className="status-cards">
//               <div className="status-card">
//                 <h3>Overall Productivity</h3>
//                 <div className="status-value">82%</div>
//                 <div className="status-comparison">+7% from last month</div>
//               </div>
//               <div className="status-card">
//                 <h3>Tasks Completed</h3>
//                 <div className="status-value">24/28</div>
//                 <div className="status-comparison">86% completion rate</div>
//               </div>
//               <div className="status-card">
//                 <h3>Avg. Time per Task</h3>
//                 <div className="status-value">4.2h</div>
//                 <div className="status-comparison">-0.8h from last month</div>
//               </div>
//             </div>
//             <div className="performance-chart">
//               <h3>Weekly Performance</h3>
//               <div className="chart-placeholder">
//                 <p>Performance chart visualization would appear here</p>
//               </div>
//             </div>
//           </div>
//         );
//       case 'aiBot':
//         return (
//           <div className="ai-bot-container">
//             <h2>AI Assistant</h2>
//             <div className="chat-interface">
//               <div className="chat-messages">
//                 <div className="message bot-message">
//                   <div className="message-content">
//                     <p>Hello! I'm your TaskMant AI assistant. How can I help you today?</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="chat-input">
//                 <input type="text" placeholder="Type your question here..." />
//                 <button><i className="fas fa-paper-plane"></i></button>
//               </div>
//             </div>
//             <div className="quick-questions">
//               <h4>Quick Questions</h4>
//               <div className="question-chips">
//                 <div className="question-chip">How do I update my task progress?</div>
//                 <div className="question-chip">Where can I find project resources?</div>
//                 <div className="question-chip">How to request time off?</div>
//                 <div className="question-chip">Who is my project manager?</div>
//               </div>
//             </div>
//           </div>
//         );
//       default:
//         return <div>Select an option from the navigation</div>;
//     }
//   };

//   return (
//     <div className="dashboard">
//       {/* Dashboard Header with Logo and Profile */}
//       <header className="dashboard-header">
//         <div className="logo" style={{cursor: 'pointer'}}>
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
//                 <img src={user?.profilePhoto || 'https://randomuser.me/api/portraits/men/45.jpg'} alt={user?.name} />
//                 <div>
//                   <h4>{user?.name}</h4>
//                   <p>{user?.role || 'Employee'}</p>
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

//       <nav className="employee-nav">
//         <button 
//           className={activeNav === 'myTasks' ? 'active' : ''} 
//           onClick={() => handleNavigation('myTasks')}
//         >
//           <i className="fas fa-tasks"></i>
//           <span>My Tasks</span>
//         </button>
//         <button 
//           className={activeNav === 'raiseTicket' ? 'active' : ''} 
//           onClick={() => handleNavigation('raiseTicket')}
//         >
//           <i className="fas fa-question-circle"></i>
//           <span>Raise a Ticket</span>
//         </button>
//         <button 
//           className={activeNav === 'status' ? 'active' : ''} 
//           onClick={() => handleNavigation('status')}
//         >
//           <i className="fas fa-chart-pie"></i>
//           <span>Status & Performance</span>
//         </button>
//         <button 
//           className={activeNav === 'aiBot' ? 'active' : ''} 
//           onClick={() => handleNavigation('aiBot')}
//         >
//           <i className="fas fa-robot"></i>
//           <span>AI Assistant</span>
//         </button>
//       </nav>

//       <main className="dashboard-content">
//         {renderContent()}
//       </main>
//     </div>
//   );
// };

// export default EmployeeDashboard;






// import React, { useState } from 'react';
// import '../styles/Header.css'; // Ensure Header styles are imported

// const EmployeeDashboard = ({ user, onLogout }) => {
//   const [activeNav, setActiveNav] = useState('myTasks');
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const [editingTask, setEditingTask] = useState(null);
//   const [tasks, setTasks] = useState([
//     { id: 1, project: 'Website Redesign', manager: 'Sarah Williams', allocated: 40, remaining: 15, progress: 65 },
//     { id: 2, project: 'Mobile App Design', manager: 'Robert Brown', allocated: 20, remaining: 5, progress: 75 },
//     { id: 3, project: 'Database Optimization', manager: 'Sarah Williams', allocated: 30, remaining: 20, progress: 35 },
//     { id: 4, project: 'User Testing', manager: 'Michael Chen', allocated: 15, remaining: 10, progress: 35 }
//   ]);



   
//   const handleSave = (id) => {
//   setTasks(tasks.map(task => 
//     task.id === id ? { ...editingTask, id } : task
//   ));
//   setEditingTask(null); // close edit mode
//  };

//   const handleNavigation = (nav) => {
//     setActiveNav(nav);
//   };

//   const renderContent = () => {
//     switch(activeNav) {
//       case 'myTasks':
//   return (
//     <div className="table-container">
//       <h2>My Tasks</h2>
//       <table className="data-table">
//         <thead>
//           <tr>
//             <th>Project Name</th>
//             <th>Manager</th>
//             <th>Allocated Hours</th>
//             <th>Remaining Hours</th>
//             <th>Progress</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map(task => (
//             <tr key={task.id}>
//               {editingTask?.id === task.id ? (
//                 <>
//                   <td>
//                     <input
//                       type="text"
//                       value={editingTask.project}
//                       onChange={(e) =>
//                         setEditingTask({ ...editingTask, project: e.target.value })
//                       }
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       value={editingTask.manager}
//                       onChange={(e) =>
//                         setEditingTask({ ...editingTask, manager: e.target.value })
//                       }
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="number"
//                       value={editingTask.allocated}
//                       onChange={(e) =>
//                         setEditingTask({ ...editingTask, allocated: e.target.value })
//                       }
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="number"
//                       value={editingTask.remaining}
//                       onChange={(e) =>
//                         setEditingTask({ ...editingTask, remaining: e.target.value })
//                       }
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="number"
//                       value={editingTask.progress}
//                       onChange={(e) =>
//                         setEditingTask({ ...editingTask, progress: e.target.value })
//                       }
//                     />%
//                   </td>
//                   <td>
//                     <button
//                       className="action-btn save-btn"
//                       onClick={() => handleSave(task.id)}
//                     >
//                       Save
//                     </button>
//                     <button
//                       className="action-btn cancel-btn"
//                       onClick={() => setEditingTask(null)}
//                     >
//                       Cancel
//                     </button>
//                   </td>
//                 </>
//               ) : (
//                 <>
//                   <td>{task.project}</td>
//                   <td>{task.manager}</td>
//                   <td>{task.allocated}h</td>
//                   <td>{task.remaining}h</td>
//                   <td>
//                     <div className="progress-container">
//                       <div className="progress-bar">
//                         <div
//                           className="progress-fill"
//                           style={{ width: `${task.progress}%` }}
//                         ></div>
//                       </div>
//                       <span>{task.progress}%</span>
//                     </div>
//                   </td>
//                   <td>
//                     <button
//                       className="action-btn update-btn"
//                       onClick={() => setEditingTask(task)}
//                     >
//                       <i className="fas fa-edit"></i> Update
//                     </button>
//                   </td>
//                 </>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//       case 'raiseTicket':
//         return (
//           <div className="form-container">
//             <h2>Raise a Query/Ticket</h2>
//             <form className="ticket-form">
//               <div className="form-group">
//                 <label>Query Type</label>
//                 <select>
//                   <option>Technical Issue</option>
//                   <option>Resource Request</option>
//                   <option>Clarification Needed</option>
//                   <option>Other</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Subject</label>
//                 <input type="text" placeholder="Brief subject of your query" />
//               </div>
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea placeholder="Please describe your issue in detail"></textarea>
//               </div>
//               <div className="form-group">
//                 <label>Priority</label>
//                 <select>
//                   <option>Low</option>
//                   <option>Medium</option>
//                   <option>High</option>
//                   <option>Urgent</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Attachment (if any)</label>
//                 <input type="file" />
//               </div>
//               <button type="submit" className="submit-btn">Submit Ticket</button>
//             </form>
//           </div>
//         );
//       case 'status':
//         return (
//           <div className="status-container">
//             <h2>My Status & Performance</h2>
//             <div className="status-cards">
//               <div className="status-card">
//                 <h3>Overall Productivity</h3>
//                 <div className="status-value">82%</div>
//                 <div className="status-comparison">+7% from last month</div>
//               </div>
//               <div className="status-card">
//                 <h3>Tasks Completed</h3>
//                 <div className="status-value">24/28</div>
//                 <div className="status-comparison">86% completion rate</div>
//               </div>
//               <div className="status-card">
//                 <h3>Avg. Time per Task</h3>
//                 <div className="status-value">4.2h</div>
//                 <div className="status-comparison">-0.8h from last month</div>
//               </div>
//             </div>
//             <div className="performance-chart">
//               <h3>Weekly Performance</h3>
//               <div className="chart-placeholder">
//                 <p>Performance chart visualization would appear here</p>
//               </div>
//             </div>
//           </div>
//         );
//       case 'aiBot':
//         return (
//           <div className="ai-bot-container">
//             <h2>AI Assistant</h2>
//             <div className="chat-interface">
//               <div className="chat-messages">
//                 <div className="message bot-message">
//                   <div className="message-content">
//                     <p>Hello! I'm your TaskMant AI assistant. How can I help you today?</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="chat-input">
//                 <input type="text" placeholder="Type your question here..." />
//                 <button><i className="fas fa-paper-plane"></i></button>
//               </div>
//             </div>
//             <div className="quick-questions">
//               <h4>Quick Questions</h4>
//               <div className="question-chips">
//                 <div className="question-chip">How do I update my task progress?</div>
//                 <div className="question-chip">Where can I find project resources?</div>
//                 <div className="question-chip">How to request time off?</div>
//                 <div className="question-chip">Who is my project manager?</div>
//               </div>
//             </div>
//           </div>
//         );
//       default:
//         return <div>Select an option from the navigation</div>;
//     }
//   };

//   return (
//     <div className="dashboard">
//       {/* Dashboard Header with Logo and Profile */}
//       <header className="dashboard-header">
//         <div className="logo" style={{cursor: 'pointer'}}>
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
//                 <img src={user?.profilePhoto || 'https://randomuser.me/api/portraits/men/45.jpg'} alt={user?.name} />
//                 <div>
//                   <h4>{user?.name}</h4>
//                   <p>{user?.role || 'Employee'}</p>
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

//       <nav className="employee-nav">
//         <button 
//           className={activeNav === 'myTasks' ? 'active' : ''} 
//           onClick={() => handleNavigation('myTasks')}
//         >
//           <i className="fas fa-tasks"></i>
//           <span>My Tasks</span>
//         </button>
//         <button 
//           className={activeNav === 'raiseTicket' ? 'active' : ''} 
//           onClick={() => handleNavigation('raiseTicket')}
//         >
//           <i className="fas fa-question-circle"></i>
//           <span>Raise a Ticket</span>
//         </button>
//         <button 
//           className={activeNav === 'status' ? 'active' : ''} 
//           onClick={() => handleNavigation('status')}
//         >
//           <i className="fas fa-chart-pie"></i>
//           <span>Status & Performance</span>
//         </button>
//         <button 
//           className={activeNav === 'aiBot' ? 'active' : ''} 
//           onClick={() => handleNavigation('aiBot')}
//         >
//           <i className="fas fa-robot"></i>
//           <span>AI Assistant</span>
//         </button>
//       </nav>

//       <main className="dashboard-content">
//         {renderContent()}
//       </main>
//     </div>
//   );
// };

// export default EmployeeDashboard;





import React, { useState } from 'react';
import '../styles/Header.css';

const EmployeeDashboard = ({ user, onLogout }) => {
  const [activeNav, setActiveNav] = useState('myTasks');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, project: 'Website Redesign', manager: 'Sarah Williams', allocated: 40, remaining: 15, progress: 65 },
    { id: 2, project: 'Mobile App Design', manager: 'Robert Brown', allocated: 20, remaining: 5, progress: 75 },
    { id: 3, project: 'Database Optimization', manager: 'Sarah Williams', allocated: 30, remaining: 20, progress: 35 },
    { id: 4, project: 'User Testing', manager: 'Michael Chen', allocated: 15, remaining: 10, progress: 35 }
  ]);

  const [editingTask, setEditingTask] = useState(null);
  const [timeSpent, setTimeSpent] = useState(0);
  const [manualProgress, setManualProgress] = useState(0);

  const handleNavigation = (nav) => {
    setActiveNav(nav);
  };

  const handleSave = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        // Update remaining hours
        const updatedRemaining = task.remaining - timeSpent >= 0 ? task.remaining - timeSpent : 0;
        // Update progress: either manualProgress or calculated based on time
        const updatedProgress = manualProgress > 0 ? manualProgress : Math.round(((task.allocated - updatedRemaining) / task.allocated) * 100);

        return {
          ...task,
          remaining: updatedRemaining,
          progress: updatedProgress
        };
      }
      return task;
    }));
    setEditingTask(null);
    setTimeSpent(0);
    setManualProgress(0);
  };

  const renderContent = () => {
    switch(activeNav) {
      case 'myTasks':
        return (
          <div className="table-container">
            <h2>My Tasks</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Manager</th>
                  <th>Allocated Hours</th>
                  <th>Remaining Hours</th>
                  <th>Progress</th>
                  <th>Time Spent</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(task => (
                  <tr key={task.id}>
                    {editingTask?.id === task.id ? (
                      <>
                        <td>{task.project}</td>
                        <td>{task.manager}</td>
                        <td>{task.allocated}h</td>
                        <td>{task.remaining}h</td>
                        <td>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={manualProgress || task.progress}
                            onChange={(e) => setManualProgress(Number(e.target.value))}
                          />%
                        </td>
                        <td>
                          <input
                            type="number"
                            min="0"
                            placeholder="Time Spent"
                            value={timeSpent}
                            onChange={(e) => setTimeSpent(Number(e.target.value))}
                          />h
                        </td>
                        <td>
                          <button className="action-btn save-btn" onClick={() => handleSave(task.id)}>Save</button>
                          <button className="action-btn cancel-btn" onClick={() => setEditingTask(null)}>Cancel</button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{task.project}</td>
                        <td>{task.manager}</td>
                        <td>{task.allocated}h</td>
                        <td>{task.remaining}h</td>
                        <td>
                          <div className="progress-container">
                            <div className="progress-bar">
                              <div 
                                className="progress-fill" 
                                style={{width: `${task.progress}%`}}
                              ></div>
                            </div>
                            <span>{task.progress}%</span>
                          </div>
                        </td>
                        <td>-</td>
                        <td>
                          <button className="action-btn update-btn" onClick={() => {
                            setEditingTask(task);
                            setManualProgress(task.progress);
                          }}>
                            <i className="fas fa-edit"></i> Update
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'raiseTicket':
        return (
          <div className="form-container">
            <h2>Raise a Query/Ticket</h2>
            <form className="ticket-form">
              <div className="form-group">
                <label>Query Type</label>
                <select>
                  <option>Technical Issue</option>
                  <option>Resource Request</option>
                  <option>Clarification Needed</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Brief subject of your query" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea placeholder="Please describe your issue in detail"></textarea>
              </div>
              <div className="form-group">
                <label>Priority</label>
                <select>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Urgent</option>
                </select>
              </div>
              <div className="form-group">
                <label>Attachment (if any)</label>
                <input type="file" />
              </div>
              <button type="submit" className="submit-btn">Submit Ticket</button>
            </form>
          </div>
        );
      case 'status':
        return (
          <div className="status-container">
            <h2>My Status & Performance</h2>
            <div className="status-cards">
              <div className="status-card">
                <h3>Overall Productivity</h3>
                <div className="status-value">82%</div>
                <div className="status-comparison">+7% from last month</div>
              </div>
              <div className="status-card">
                <h3>Tasks Completed</h3>
                <div className="status-value">24/28</div>
                <div className="status-comparison">86% completion rate</div>
              </div>
              <div className="status-card">
                <h3>Avg. Time per Task</h3>
                <div className="status-value">4.2h</div>
                <div className="status-comparison">-0.8h from last month</div>
              </div>
            </div>
            <div className="performance-chart">
              <h3>Weekly Performance</h3>
              <div className="chart-placeholder">
                <p>Performance chart visualization would appear here</p>
              </div>
            </div>
          </div>
        );
      case 'aiBot':
        return (
          <div className="ai-bot-container">
            <h2>AI Assistant</h2>
            <div className="chat-interface">
              <div className="chat-messages">
                <div className="message bot-message">
                  <div className="message-content">
                    <p>Hello! I'm your TaskMant AI assistant. How can I help you today?</p>
                  </div>
                </div>
              </div>
              <div className="chat-input">
                <input type="text" placeholder="Type your question here..." />
                <button><i className="fas fa-paper-plane"></i></button>
              </div>
            </div>
            <div className="quick-questions">
              <h4>Quick Questions</h4>
              <div className="question-chips">
                <div className="question-chip">How do I update my task progress?</div>
                <div className="question-chip">Where can I find project resources?</div>
                <div className="question-chip">How to request time off?</div>
                <div className="question-chip">Who is my project manager?</div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Select an option from the navigation</div>;
    }
  };

  return (
    <div className="dashboard">
      {/* <header className="dashboard-header">
        <div className="logo" style={{cursor: 'pointer'}}>
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
                <img src={user?.profilePhoto || 'https://randomuser.me/api/portraits/men/45.jpg'} alt={user?.name} />
                <div>
                  <h4>{user?.name}</h4>
                  <p>{user?.role || 'Employee'}</p>
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
      </header> */}

      <nav className="employee-nav">
        <button 
          className={activeNav === 'myTasks' ? 'active' : ''} 
          onClick={() => handleNavigation('myTasks')}
        >
          <i className="fas fa-tasks"></i>
          <span>My Tasks</span>
        </button>
        <button 
          className={activeNav === 'raiseTicket' ? 'active' : ''} 
          onClick={() => handleNavigation('raiseTicket')}
        >
          <i className="fas fa-question-circle"></i>
          <span>Raise a Ticket</span>
        </button>
        <button 
          className={activeNav === 'status' ? 'active' : ''} 
          onClick={() => handleNavigation('status')}
        >
          <i className="fas fa-chart-pie"></i>
          <span>Status & Performance</span>
        </button>
        <button 
          className={activeNav === 'aiBot' ? 'active' : ''} 
          onClick={() => handleNavigation('aiBot')}
        >
          <i className="fas fa-robot"></i>
          <span>AI Assistant</span>
        </button>
      </nav>

      <main className="dashboard-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default EmployeeDashboard;





