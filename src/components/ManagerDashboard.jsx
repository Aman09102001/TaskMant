import React, { useState } from 'react';

const ManagerDashboard = () => {
  const [activeNav, setActiveNav] = useState('projects');
  const [projects, setProjects] = useState([
    { id: 1, name: 'Website Redesign', employees: 5, status: 'In Progress', completion: 65 },
    { id: 2, name: 'Mobile App Development', employees: 8, status: 'On Track', completion: 80 },
    { id: 3, name: 'Marketing Campaign', employees: 3, status: 'Delayed', completion: 30 },
    { id: 4, name: 'Product Launch', employees: 10, status: 'Planning', completion: 15 }
  ]);

  const renderContent = () => {
    switch(activeNav) {
      case 'projects':
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
                {projects.map(project => (
                  <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>{project.employees}</td>
                    <td>
                      <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                        {project.status}
                      </span>
                    </td>
                    <td>
                      <div className="progress-container">
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{width: `${project.completion}%`}}
                          ></div>
                        </div>
                        <span>{project.completion}%</span>
                      </div>
                    </td>
                    <td>
                      <button className="action-btn view-btn">
                        <i className="fas fa-eye"></i> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'createProject':
        return (
          <div className="form-container">
            <h2>Create New Project</h2>
            <form className="project-form">
              <div className="form-group">
                <label>Project Name</label>
                <input type="text" placeholder="Enter project name" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea placeholder="Project description"></textarea>
              </div>
              <div className="form-group">
                <label>Team Members</label>
                <select multiple>
                  <option>John Doe (Developer)</option>
                  <option>Jane Smith (Designer)</option>
                  <option>Mike Johnson (QA)</option>
                  <option>Sarah Williams (Manager)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Timeline</label>
                <div className="date-inputs">
                  <input type="date" placeholder="Start Date" />
                  <input type="date" placeholder="End Date" />
                </div>
              </div>
              <button type="submit" className="submit-btn">Create Project</button>
            </form>
          </div>
        );
      case 'assignTask':
        return (
          <div className="form-container">
            <h2>Assign Task to Employee</h2>
            <form className="task-form">
              <div className="form-group">
                <label>Select Employee</label>
                <select>
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
                <label>Due Date</label>
                <input type="date" />
              </div>
              <button type="submit" className="submit-btn">Assign Task</button>
            </form>
          </div>
        );
      case 'performance':
        return (
          <div className="performance-container">
            <h2>Employee Performance Tracking</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <h3>Productivity</h3>
                <div className="metric-value">78%</div>
                <div className="metric-trend up">+5% from last week</div>
              </div>
              <div className="metric-card">
                <h3>Tasks Completed</h3>
                <div className="metric-value">42/50</div>
                <div className="metric-trend up">+8% from last week</div>
              </div>
              <div className="metric-card">
                <h3>Average Time per Task</h3>
                <div className="metric-value">3.2h</div>
                <div className="metric-trend down">-0.7h from last week</div>
              </div>
              <div className="metric-card">
                <h3>Quality Score</h3>
                <div className="metric-value">92%</div>
                <div className="metric-trend">No change</div>
              </div>
            </div>
            
            <div className="performance-table">
              <h3>Employee Performance Details</h3>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Role</th>
                    <th>Tasks Completed</th>
                    <th>Productivity</th>
                    <th>Quality Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>Developer</td>
                    <td>15/18</td>
                    <td>85%</td>
                    <td>94%</td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>Designer</td>
                    <td>12/15</td>
                    <td>80%</td>
                    <td>89%</td>
                  </tr>
                  <tr>
                    <td>Mike Johnson</td>
                    <td>QA Engineer</td>
                    <td>20/22</td>
                    <td>91%</td>
                    <td>96%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return <div>Select an option from the navigation</div>;
    }
  };

  return (
    <div className="dashboard">
      <nav className="manager-nav">
        <button 
          className={activeNav === 'projects' ? 'active' : ''}
          onClick={() => setActiveNav('projects')}
        >
          <i className="fas fa-project-diagram"></i>
          <span>Projects Overview</span>
        </button>
        <button 
          className={activeNav === 'createProject' ? 'active' : ''}
          onClick={() => setActiveNav('createProject')}
        >
          <i className="fas fa-plus-circle"></i>
          <span>Create New Project</span>
        </button>
        <button 
          className={activeNav === 'assignTask' ? 'active' : ''}
          onClick={() => setActiveNav('assignTask')}
        >
          <i className="fas fa-tasks"></i>
          <span>Assign Task</span>
        </button>
        <button 
          className={activeNav === 'performance' ? 'active' : ''}
          onClick={() => setActiveNav('performance')}
        >
          <i className="fas fa-chart-line"></i>
          <span>Track Performance</span>
        </button>
        <button>
          <i className="fas fa-exclamation-circle"></i>
          <span>Employee Problems (3)</span>
        </button>
        <button>
          <i className="fas fa-bell"></i>
          <span>Notifications</span>
        </button>
      </nav>
      
      <main className="dashboard-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default ManagerDashboard;